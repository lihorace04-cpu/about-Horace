(() => {
 const bi=(z,e)=>`<span class="bi"><span lang="zh-Hans">${z}</span><span lang="en">${e}</span></span>`;
 if(!document.body.classList.contains('front'))return;
 const visual=document.createElement('div');visual.className='signal-art';visual.innerHTML='<img class="hero-art" src="assets/signal/hero.webp" alt="黑银红面具与悬浮玻璃卡牌"><button class="echo-art" aria-label="与余音互动 / Interact with ECHO"><img src="assets/signal/echo.webp" alt="原创兔子余音 ECHO"></button>';document.querySelector('.stage-backdrops').after(visual);
 const title=document.createElement('div');title.className='signal-wordmark';title.innerHTML='<span>HORACE</span><small>THE VEIL · MASQUERADE OF FATE</small><p>'+bi('代码 · 好奇心 · 我的舞台','Code · Curiosity · My stage')+'</p>';document.body.append(title);
 const copy=document.querySelector('.prologue .act-copy');copy.querySelector('h1').innerHTML=bi('我是 <span class="given-name">Horace<span class="red-stop">。</span></span>','I’m <span class="given-name">Horace<span class="red-stop">.</span></span>');copy.querySelector('.subtitle').innerHTML=bi('欢迎来到我的舞台。','Welcome to my world.');copy.querySelector('.stage-prose').innerHTML=bi('一名探索网页开发的学习者。<br>翻开卡牌，认识我的作品与经历。','An aspiring web developer.<br>Turn a card. Explore my work and story.');copy.querySelector('#wear-mask .bi').innerHTML='<span lang="zh-Hans">开始演出</span><span lang="en">Enter the stage</span>';copy.querySelector('.bypass').innerHTML='<a href="projects.html">'+bi('直接查看作品','View projects')+' →</a>';
 const english=document.createElement('p');english.className='invitation-translation';english.innerHTML='Code. Curiosity.<br>A little theatre.';copy.querySelector('.stage-prose').after(english);
 document.querySelectorAll('[data-chapter]').forEach((el,i)=>{const s=document.createElement('small');s.className='chapter-translation';s.textContent=['Home','About me','Skills & projects','Education & experience','Résumé & contact'][i];el.querySelector('.bi').append(s)});
 document.querySelector('.scene-caption span:last-of-type').textContent='';
 document.querySelector('.echo-art').onclick=()=>document.querySelector('#rabbit-react').click();
 let x=0,y=0;window.addEventListener('pointermove',e=>{if(window.VEIL_REDUCED)return;x=(e.clientX/innerWidth-.5);y=(e.clientY/innerHeight-.5);visual.style.setProperty('--rx',(-y*3)+'deg');visual.style.setProperty('--ry',(x*5)+'deg')},{passive:true});
 document.addEventListener('veil:react',()=>{visual.classList.remove('echo-wave');void visual.offsetWidth;visual.classList.add('echo-wave')});
 document.addEventListener('veil:mask-view',e=>document.body.classList.toggle('particle-view',e.detail));
 document.addEventListener('veil:motion',e=>{if(e.detail){visual.style.setProperty('--rx','0deg');visual.style.setProperty('--ry','0deg')}});
 document.addEventListener('veil:state',e=>{visual.classList.remove('deal-away');if(e.detail.act===1){void visual.offsetWidth;visual.classList.add('deal-away')}});
})();
