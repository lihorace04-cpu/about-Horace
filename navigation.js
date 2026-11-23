(()=>{
 const bi=(z,e)=>`<span class="bi"><span lang="zh-Hans">${z}</span><span lang="en">${e}</span></span>`;
 const read=key=>{try{return JSON.parse(sessionStorage.getItem(key)||'null')}catch{return null}};
 const write=(key,value)=>{try{sessionStorage.setItem(key,JSON.stringify(value))}catch{}};
 if(document.body.classList.contains('front')){
  const labels=[['首页','Home'],['关于我','About me'],['技能与项目','Skills & projects'],['教育与经历','Education & experience'],['简历与联系','Résumé & contact']];
  document.querySelectorAll('[data-chapter]').forEach((el,i)=>{el.querySelector('.bi').innerHTML=bi(...labels[i]);el.setAttribute('aria-label',labels[i].join(' / '))});
  let picked=null;
  document.addEventListener('veil:draw',e=>picked=e.detail?.index??picked);
  const save=()=>write('veil-stage-position',{act:+document.body.dataset.act,choice:document.querySelector('[data-stage][aria-pressed="true"]')?.dataset.stage,picked,scroll:scrollY});
  document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(a&&/\.html(?:#.*)?$/.test(a.getAttribute('href'))&&!a.hasAttribute('download'))save()},true);
  window.addEventListener('pagehide',save);
  const previous=read('veil-stage-position');
  if(previous&&Number.isInteger(previous.act)&&previous.act>=0&&previous.act<=4){window.VEIL_RETURN=true;const reduced=window.VEIL_REDUCED;window.VEIL_REDUCED=true;if(['lab','memory','cosmic'].includes(previous.choice))VEIL_API.choose(previous.choice);VEIL_API.changeAct(previous.act);if(Number.isInteger(previous.picked)&&previous.picked>=0&&previous.picked<(VEIL_DATA.skills.length+VEIL_DATA.projects.length))VEIL_API.pick(previous.picked);window.VEIL_REDUCED=reduced;requestAnimationFrame(()=>scrollTo({top:Math.max(0,previous.scroll||0),behavior:'instant'}))}
 }else if(document.body.classList.contains('archive')){
  const bar=document.createElement('div');bar.className='archive-return';
  const file=location.pathname.split('/').pop();let stack=read('veil-archive-stack');if(!Array.isArray(stack))stack=[];const previous=stack.at(-1);
  const allowed=['profile.html','education.html','experience.html','skills.html','projects.html','sitemap.html','resume.html'];
  const target=previous&&allowed.includes(previous.file)&&previous.file!==file?previous.file:'index.html';
  bar.innerHTML=`<a class="return-previous" href="${target}">← ${bi(target==='index.html'?'返回舞台':'返回上一页',target==='index.html'?'Return to stage':'Back to previous page')}</a><a href="index.html">${bi('继续舞台探索','Continue on stage')} ↗</a>`;
  document.querySelector('.archive-main').prepend(bar);
  document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a)return;if(a.getAttribute('href')==='index.html'){try{sessionStorage.setItem('veil-intro-seen','1')}catch{}}if(a.classList.contains('return-previous')&&previous&&allowed.includes(previous.file)){stack.pop();write('veil-archive-stack',stack);write('veil-archive-scroll',previous)}else if(allowed.includes(a.getAttribute('href'))&&a.getAttribute('href')!==file){stack.push({file,scroll:scrollY});write('veil-archive-stack',stack.slice(-20))}},true);
  const position=read('veil-archive-scroll');if(position?.file===file){requestAnimationFrame(()=>scrollTo({top:position.scroll||0,behavior:'instant'}));write('veil-archive-scroll',null)}
 }
})();
