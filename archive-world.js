(()=>{
 document.querySelectorAll('[data-game-shot]').forEach(button=>button.addEventListener('click',()=>{
  const shot=button.dataset.gameShot,src='assets/projects/element-war-'+shot+'.webp';
  const img=document.querySelector('[data-game-image]');img.src=src;
  img.alt=shot==='menu'?'游戏角色选择实机画面 / In-game character selection':'游戏首领战斗实机画面 / In-game boss encounter';
  document.querySelector('[data-game-image-link]').href=src;
  document.querySelectorAll('[data-game-shot]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 }));
 const visual=document.querySelector('.profile-visual');
 if(visual&&!window.VEIL_REDUCED){visual.classList.add('arriving');visual.addEventListener('pointermove',e=>{if(window.VEIL_REDUCED||e.pointerType==='touch')return;const r=visual.getBoundingClientRect();visual.style.setProperty('--profile-x',((.5-(e.clientY-r.top)/r.height)*5)+'deg');visual.style.setProperty('--profile-y',(((e.clientX-r.left)/r.width-.5)*8)+'deg')});visual.addEventListener('pointerleave',()=>{visual.style.setProperty('--profile-x','0deg');visual.style.setProperty('--profile-y','0deg')})}
 document.querySelectorAll('.destination').forEach(tile=>{
  const button=tile.querySelector('.destination-preview'),link=tile.querySelector('.destination-link'),details=tile.querySelector('.destination-details');let pinned=false;
  const show=value=>{tile.classList.toggle('is-preview',value);button.setAttribute('aria-expanded',String(value));details.setAttribute('aria-hidden',String(!value))};
  tile.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show(true)});tile.addEventListener('pointerleave',()=>{if(!pinned&&document.activeElement!==link)show(false)});
  link.addEventListener('focus',()=>show(true));tile.addEventListener('focusout',e=>{if(!pinned&&!tile.contains(e.relatedTarget))show(false)});
  button.addEventListener('click',()=>{pinned=!pinned;show(pinned)});
  tile.addEventListener('keydown',e=>{if(e.key==='Escape'){pinned=false;show(false)}});
 });
})();
