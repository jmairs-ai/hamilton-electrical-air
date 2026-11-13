(()=>{'use strict';
const root=document.querySelector('#root');
const hero=root?.querySelector('.mosaic-lead');
const photo=hero?.querySelector(':scope > img');
if(!hero||!photo)return;
if(hero.dataset.hamHeroTouchInstalled)return;
hero.dataset.hamHeroTouchInstalled='true';
// Unlike project cards, the hero has a full-size text overlay that intercepts direct taps.
// The existing button and the existing image tap handler stay untouched.
hero.addEventListener('click',event=>{
  if(event.target.closest('a,button,input,select,textarea,[role="button"]'))return;
  if(event.target===photo || event.target.closest('img')===photo)return;
  event.preventDefault();
  event.stopPropagation();
  const next=!photo.classList.contains('ham-is-colour');
  photo.classList.toggle('ham-is-colour',next);
  photo.classList.toggle('ham-colour-active',next);
  const btn=photo._hamRevealButton || hero.querySelector('.ham-reveal-control');
  if(btn){
    btn.textContent=next?'BLACK & WHITE':'VIEW IN COLOUR';
    btn.setAttribute('aria-pressed',String(next));
    btn.setAttribute('aria-label',next?'Show hero photo in black and white':'Show hero photo in colour');
  }
});
})();
import('/theme-toggle.js?v=1');
(()=>{const l=document.createElement('link');l.rel='stylesheet';l.href='/theme-complete.css?v=2';document.head.appendChild(l)})();

(()=>{const l=document.createElement('link');l.rel='stylesheet';l.href='/theme-whole-site.css?v=3';document.head.appendChild(l)})();
(()=>{const l=document.createElement('link');l.rel='stylesheet';l.href='/hero-light-contrast.css?v=4';document.head.appendChild(l)})();