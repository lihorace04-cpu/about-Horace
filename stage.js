/* Live point cloud, with a one-shot assembly for Horace's opening. */
(()=>{
 const host=document.getElementById('scene'),T=window.THREE;
 if(!host)return;
 const fallback=()=>document.getElementById('scene-fallback').hidden=false;
 if(!T||!window.SIGNAL_POINTS){fallback();return}
 let renderer;
 try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'})}catch{fallback();return}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.append(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(42,1,.1,50);camera.position.z=8;
 const base=new Float32Array(SIGNAL_POINTS.positions),positions=base.slice(),scatter=new Float32Array(base.length);
 for(let i=0;i<base.length;i++)scatter[i]=Math.sin(i*12.9898+78.233)*(i%3===2?5:9);
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(positions,3));geo.setAttribute('color',new T.Float32BufferAttribute(SIGNAL_POINTS.colors,3));
 const mat=new T.PointsMaterial({size:.018,vertexColors:true,transparent:true,opacity:0,depthWrite:false});
 const cloud=new T.Points(geo,mat),mask=new T.Group();mask.add(cloud);scene.add(mask);
 let active=false,act=0,px=0,py=0,reduced=window.VEIL_REDUCED,last=0,openingAt=null;
 const resetPoints=()=>{positions.set(base);geo.attributes.position.needsUpdate=true;mat.size=.018};
 const stopOpening=()=>{openingAt=null;resetPoints();mat.opacity=active&&act===0?.95:0;cloud.visible=active;mask.rotation.set(0,0,0)};
 const startOpening=()=>{if(reduced)return;openingAt=performance.now();cloud.visible=true};
 const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(host);resize();
 document.addEventListener('veil:mask-view',e=>{stopOpening();active=e.detail;cloud.visible=active});
 document.addEventListener('veil:state',e=>{act=e.detail.act;if(act!==0)stopOpening()});
 document.addEventListener('veil:motion',e=>{reduced=e.detail;if(reduced)stopOpening()});
 window.addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5},{passive:true});
 const clamp=v=>Math.max(0,Math.min(1,v));
 function loop(t){requestAnimationFrame(loop);if(document.hidden||t-last<(reduced?150:30))return;last=t;
  if(openingAt!==null){const elapsed=(t-openingAt)/1000,progress=clamp((elapsed-.35)/1.45),amount=Math.pow(1-progress,3);
   for(let i=0;i<positions.length;i++)positions[i]=base[i]+scatter[i]*amount;
   geo.attributes.position.needsUpdate=true;mat.opacity=clamp((elapsed-.3)/.45)*(1-clamp((elapsed-1.8)/.6));mat.size=.021;mask.rotation.y=amount*.65;mask.rotation.x=-amount*.15;
  }else{mat.opacity+=(Number(active&&act===0)*.95-mat.opacity)*.12;mask.rotation.y=reduced?0:px*.25;mask.rotation.x=reduced?0:py*.12}
  renderer.render(scene,camera);
 }
 requestAnimationFrame(loop);window.VEIL_SCENE={renderer,scene,mask,startOpening,stopOpening};
})();
