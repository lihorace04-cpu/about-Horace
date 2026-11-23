/* A short, interruptible entrance: name → particle silhouette → glass card. */
(()=>{
 if(!document.body.classList.contains('front'))return;
 const body=document.body,bi=(z,e)=>`<span class="bi"><span lang="zh-Hans">${z}</span><span lang="en">${e}</span></span>`;
 const art=document.querySelector('.signal-art'),hero=art.querySelector('.hero-art');
 const overlay=document.createElement('div');overlay.className='opening-film';overlay.hidden=true;
 overlay.innerHTML='<div class="film-curtain curtain-left"></div><div class="film-curtain curtain-right"></div><div class="film-name" aria-hidden="true">'+[...'HORACE'].map((letter,i)=>`<span style="--letter:${i}">${letter}</span>`).join('')+'<p>'+bi('你的到来，让演出开始。','The show begins with you.')+'</p></div><button class="skip-opening">'+bi('跳过开场','Skip intro')+' <span aria-hidden="true">↗</span></button>';
 body.append(overlay);
 const replay=document.createElement('button');replay.className='replay-opening';replay.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 8a8 8 0 1 1-1 7M5 3v5h5"/></svg>'+bi('重播开场','Replay intro');const controls=document.querySelector('.scene-caption');controls.prepend(replay);document.querySelector('.prologue .act-copy').append(controls);
 const shards=document.createElement('div');shards.className='opening-shards';shards.setAttribute('aria-hidden','true');
 const cuts=['polygon(0 0,44% 0,18% 48%,0 65%)','polygon(44% 0,77% 0,56% 43%,18% 48%)','polygon(77% 0,100% 0,100% 48%,56% 43%)','polygon(0 65%,18% 48%,56% 43%,25% 100%,0 100%)','polygon(56% 43%,72% 47%,100% 88%,100% 100%,25% 100%)','polygon(72% 47%,100% 48%,100% 88%)'];
 cuts.forEach((cut,i)=>{const img=hero.cloneNode();img.className='opening-shard';img.alt='';img.style.clipPath=cut;img.style.setProperty('--piece',i);img.style.setProperty('--scatter-x',((i%3)-1)*190+'px');img.style.setProperty('--scatter-y',(i<3?-1:1)*(110+i*13)+'px');img.style.setProperty('--scatter-r',((i%2?1:-1)*14)+'deg');shards.append(img)});art.append(shards);
 let playing=false,timeout=0,session=0;
 function stop(){if(!playing)return;playing=false;++session;clearTimeout(timeout);const focusWasInside=overlay.contains(document.activeElement);overlay.hidden=true;body.classList.remove('is-opening');body.dataset.opening='complete';window.VEIL_SCENE?.stopOpening?.();if(focusWasInside)replay.focus({preventScroll:true})}
 function play(){stop();if(window.VEIL_REDUCED||body.dataset.act!=='0')return;if(scrollY)window.scrollTo({top:0,behavior:'instant'});playing=true;try{sessionStorage.setItem('veil-intro-seen','1')}catch{}const token=++session;overlay.hidden=false;body.dataset.opening='playing';body.classList.remove('is-opening');void overlay.offsetWidth;body.classList.add('is-opening');window.VEIL_SCENE?.startOpening?.();timeout=setTimeout(()=>{if(token===session)stop()},3000)}
 replay.addEventListener('click',play);overlay.querySelector('.skip-opening').addEventListener('click',stop);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')stop();else if(e.key==='Tab'&&playing)stop()});
 // Navigation, touch, scrolling and interaction can all interrupt the entrance.
 document.addEventListener('pointerdown',e=>{if(playing&&!overlay.contains(e.target)&&e.target!==replay&&!replay.contains(e.target))stop()},true);
 window.addEventListener('wheel',stop,{passive:true});window.addEventListener('touchmove',stop,{passive:true});window.addEventListener('resize',stop);
 document.addEventListener('veil:state',e=>{if(e.detail.act!==0)stop()});document.addEventListener('veil:motion',e=>{replay.hidden=e.detail;if(e.detail)stop()});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
 replay.hidden=!!window.VEIL_REDUCED;
 // Core content is visible by default; failed/slow art never blocks navigation.
 const ready=Promise.allSettled([hero.decode(),art.querySelector('.echo-art img').decode(),document.fonts.ready]);
 Promise.race([ready,new Promise(resolve=>setTimeout(resolve,500))]).then(()=>{let seen=false;try{seen=sessionStorage.getItem('veil-intro-seen')==='1'}catch{}if(!seen&&!window.VEIL_RETURN&&!document.hidden&&!window.VEIL_REDUCED&&body.dataset.act==='0'&&scrollY<30)play()});
})();
