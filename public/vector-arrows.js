/* Keep directional arrows consistent across React and later enhancement scripts.
   Text glyph ↗ can be rendered as a coloured emoji on some phones. */
(()=>{'use strict';
 const arrow='<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M6 5h13v13" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter"/></svg>';
 const style=document.createElement('style');
 style.textContent='.ha-vector-arrow{display:inline-flex;align-items:center;justify-content:center;width:1.15em;height:1.15em;vertical-align:-.16em;line-height:1;white-space:nowrap;flex-shrink:0}.ha-vector-arrow svg{display:block;width:100%;height:100%}';
 document.head.appendChild(style);
 let queued=false;
 function replace(){
  queued=false;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const matches=[];let node;
  while((node=walker.nextNode())){
   if(!node.textContent.includes('↗'))continue;
   const el=node.parentElement;
   if(!el||el.closest('script,style,textarea,option,[contenteditable="true"],.ha-vector-arrow'))continue;
   matches.push(node);
  }
  for(const item of matches){
   if(!item.isConnected)continue;
   const parts=item.textContent.split(/↗\uFE0F?/);
   const frag=document.createDocumentFragment();
   parts.forEach((part,i)=>{
    if(i){const span=document.createElement('span');span.className='ha-vector-arrow';span.setAttribute('aria-hidden','true');span.innerHTML=arrow;frag.appendChild(span)}
    if(part)frag.appendChild(document.createTextNode(part));
   });
   item.replaceWith(frag);
  }
 }
 const observer=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(replace)});
 observer.observe(document.body,{childList:true,subtree:true,characterData:true});
 replace();
})();
