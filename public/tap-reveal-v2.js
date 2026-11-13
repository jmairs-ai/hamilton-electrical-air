(()=>{
'use strict';
const root=document.getElementById('root');if(!root)return;
const photoPath=/\/images\/(air-conditioning-install|bathroom-lighting|hero-wiring|kitchen-fit-off|stephen-mario)\.(?:webp|jpe?g)(?:[?#]|$)/i;
let serial=0;
function photoSource(img){return img.getAttribute('src')||img.currentSrc||img.src||''}
function toggle(el){
 const isOn=el.classList.toggle('ham-is-colour');
 const btn=el._hamRevealButton;
 if(btn){btn.textContent=isOn?'BLACK & WHITE':'VIEW IN COLOUR';btn.setAttribute('aria-pressed',String(isOn))}
 el.classList.toggle('ham-colour-active',isOn); // compatible with older presentation classes
 if(el.tagName==='IMG')el.setAttribute('aria-label',isOn?'Show black and white photograph':'Show colour photograph');
}
function addControl(el,host){
 if(el.dataset.hamRevealInit)return;
 el.dataset.hamRevealInit='true';
 el.classList.add(el.tagName==='IMG'?'ham-tap-reveal-photo':'ham-reveal-bg');
 let anchor=host.closest('a');
 let wrap=host;
 if(anchor){
   // Never insert a button inside an anchor. Use its direct parent instead.
   wrap=anchor.parentElement||host;
 }
 if(!wrap||wrap===document.body)return;
 wrap.classList.add('ham-reveal-wrap');
 const button=document.createElement('button');
 button.type='button';button.className='ham-reveal-control';
 button.textContent='VIEW IN COLOUR';button.setAttribute('aria-label','View this photo in colour');button.setAttribute('aria-pressed','false');
 el._hamRevealButton=button;
 button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggle(el)});
 wrap.appendChild(button);
}
function scan(){
 const images=root.querySelectorAll('img');
 for(const img of images){
  if(!photoPath.test(photoSource(img)))continue;
  if(img.closest('.ham-comparison'))continue;
  const parent=img.parentElement;
  if(!parent)continue;
  addControl(img,parent);
 }
 // CSS photo background support without filtering text and headings.
 for(const el of root.querySelectorAll('section,article,figure,div,a')){
  if(el.dataset.hamRevealInit || el.closest('.ham-comparison'))continue;
  const style=getComputedStyle(el);
  const bg=style.backgroundImage;
  if(!photoPath.test(bg))continue;
  el.style.setProperty('--ham-tap-image',bg);
  el.style.setProperty('--ham-tap-position',style.backgroundPosition);
  el.style.setProperty('--ham-tap-size',style.backgroundSize);
  el.style.backgroundImage='none';
  addControl(el,el);
 }
}
let queued=false;
function queue(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;scan()})}
// One capturing click handler works even on dynamically added photos and touchscreens.
root.addEventListener('click',e=>{
 if(e.target.closest('.ham-reveal-control'))return;
 const img=e.target.closest('img.ham-tap-reveal-photo');
 const bg=e.target.closest('.ham-reveal-bg');
 const target=img||bg;
 if(!target || target.closest('.ham-comparison'))return;
 e.preventDefault();e.stopImmediatePropagation();toggle(target);
},true);
root.addEventListener('keydown',e=>{
 if(e.key!=='Enter'&&e.key!==' ')return;
 const target=e.target;
 if(target.matches('img.ham-tap-reveal-photo,.ham-reveal-bg')){
  e.preventDefault();toggle(target)
 }
},true);
scan();
const observer=new MutationObserver(queue);
observer.observe(root,{childList:true,subtree:true});
window.addEventListener('load',queue,{once:true});
})();