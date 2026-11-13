(()=>{'use strict';
const N=(s)=>String(s||'').normalize('NFKD').toUpperCase().replace(/[^A-Z0-9]+/g,' ').trim().replace(/\s+/g,' ');
function findBigText(wanted,kind){
 const root=document.getElementById('root');if(!root)return null;
 const matches=[...root.querySelectorAll('h1,h2,h3,h4,h5,h6,span,strong,small,p,div,a')].filter(el=>{
  if(N(el.textContent)!==wanted)return false;
  if([...el.children].some(child=>N(child.textContent)===wanted))return false;
  return el.getBoundingClientRect().width>10;
 });
 if(!matches.length)return null;
 matches.sort((a,b)=>{
  const fs=el=>parseFloat(getComputedStyle(el).fontSize)||0;
  const area=el=>el.getBoundingClientRect().width;
  return (fs(b)-fs(a))||(area(b)-area(a));
 });
 return matches[0];
}
const pairs=[
 ['TWO TRADES ONE BOOKING','LET S MAKE IT HAPPEN',false],
 ['POWER LIGHT COMFORT','GET A QUOTE',false],
 ['SEE THE DETAIL','STRAIGHT FROM SITE',false],
 ['OUR WORK','INSTAGRAM',true]
];
function fitInstagram(el){
 if(!el)return;
 el.style.whiteSpace='nowrap';
 el.style.wordBreak='normal';
 el.style.overflowWrap='normal';
 el.style.hyphens='none';
 el.style.display='block';
 el.style.width='max-content';
 el.style.maxWidth='none';
 const box=el.getBoundingClientRect();
 // Two cards are half of their shared row; use a conservative 86% of that width.
 let parent=el.parentElement;
 let available=window.innerWidth*0.43;
 while(parent && parent!==document.body){
  const w=parent.getBoundingClientRect().width;
  if(w>box.width*.6 && w<window.innerWidth*.75){available=w*.88;break}
  parent=parent.parentElement;
 }
 const start=parseFloat(getComputedStyle(el).fontSize)||66;
 el.style.fontSize=Math.min(start,Math.max(24,start*available/Math.max(box.width,1)))+'px';
}
let running=false;
function align(){
 if(running)return;running=true;
 try{
  for(const [left,right,fit] of pairs){
   const a=findBigText(left,'title'),b=findBigText(right,'title');
   if(!a||!b||a===b)continue;
   b.style.translate='none';
   if(fit)fitInstagram(b);
   const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();
   if(!ar.height||!br.height||Math.abs(ar.top-br.top)>500)continue;
   const shift=Math.round((ar.top-br.top)*10)/10;
   b.style.translate='0px '+shift+'px';
   b.dataset.hamAligned='true';
  }
 }finally{running=false}
}
function schedule(){requestAnimationFrame(()=>requestAnimationFrame(align))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
window.addEventListener('load',schedule,{once:true});
window.addEventListener('resize',schedule,{passive:true});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
})();