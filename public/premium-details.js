(()=>{'use strict';
const root=document.getElementById('root');if(!root)return;
const progress=document.createElement('div');progress.className='ha-reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
const quote=document.createElement('a');quote.className='ha-desktop-cta';quote.href='#whatsapp-quote';quote.setAttribute('aria-label','Request a quote from Stephen');
const a=document.createElement('span');a.textContent='GET A QUOTE FROM STEPHEN';const b=document.createElement('span');b.textContent='↗';quote.append(a,b);document.body.append(quote);
let scheduled=false;
function update(){
 scheduled=false;
 const total=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
 const value=Math.min(100,Math.max(0,(window.scrollY/total)*100));
 progress.style.setProperty('--ha-progress',value.toFixed(2)+'%');
 const mobile=matchMedia('(max-width:700px)').matches;
 const area=document.getElementById('whatsapp-quote')||document.getElementById('quote');
 const rect=area?.getBoundingClientRect();
 const inQuote=!!rect&&rect.top<window.innerHeight*.85&&rect.bottom>0;
 quote.classList.toggle('ha-visible',!mobile&&window.scrollY>620&&!inQuote);
}
function onScroll(){if(!scheduled){scheduled=true;requestAnimationFrame(update)}}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});update();
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 const ob=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('ha-arrived');ob.unobserve(e.target)}}},{rootMargin:'0px 0px -36px 0px',threshold:.08});
 const targets=root.querySelectorAll('.ha-edit-heading,.ha-panel,.ha-advantage,.ha-review-card,.ha-reviews h2,.ham-feature-aside,.ham-comparison,.section-heading,.work-heading');
 targets.forEach(x=>ob.observe(x));
}
const faq=root.querySelectorAll('.faq details');
faq.forEach(detail=>detail.addEventListener('toggle',()=>{if(!detail.open)return;faq.forEach(other=>{if(other!==detail)other.open=false})}));
})();