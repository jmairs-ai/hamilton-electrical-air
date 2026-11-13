(()=>{'use strict';
function repair(){
 const mosaic=document.querySelector('#root .mosaic');
 const lead=mosaic?.querySelector(':scope > .mosaic-lead');
 const about=mosaic?.querySelector(':scope > a.mosaic-about');
 if(!mosaic||!lead||!about)return;
 const heroImage=lead.querySelector(':scope > img');
 const aboutImage=about.querySelector('img');
 // Each image already has a working handler on its own stored button.
 // Only MOVE misplaced buttons; don't recreate or rebind a single control.
 const heroButton=heroImage?._hamRevealButton;
 const aboutButton=aboutImage?._hamRevealButton;
 if(heroButton && heroButton.parentElement!==lead){lead.appendChild(heroButton)}
 if(aboutButton && aboutButton.parentElement!==about){
   about.appendChild(aboutButton);
 }
 if(heroButton){heroButton.dataset.hamPhoto='hero';heroButton.setAttribute('aria-label','Toggle the first photograph between colour and black and white')}
 if(aboutButton){aboutButton.dataset.hamPhoto='about';aboutButton.setAttribute('aria-label','Toggle the second photograph between colour and black and white')}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',repair,{once:true});else repair();
window.addEventListener('load',repair,{once:true});
})();