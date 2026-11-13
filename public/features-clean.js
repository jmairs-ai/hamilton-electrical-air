(()=>{'use strict';
const root=document.getElementById('root');if(!root)return;
const make=(tag,klass,txt)=>{const el=document.createElement(tag);if(klass)el.className=klass;if(txt!=null)el.textContent=txt;return el;};
const instagram='https://www.instagram.com/hamilton.electrical.air/';
// The original Leaflet map depends on a third-party script and can remain on
// "Loading" in iOS in-app browsers. Give visitors a real map immediately;
// the richer map enhancer can replace this fallback when it is ready.
const mapLoading=root.querySelector('.service-map .map-loading');
if(mapLoading){
 mapLoading.replaceChildren();
 const mapFrame=document.createElement('iframe');mapFrame.src='https://www.google.com/maps?q=Aubin%20Grove%2C%20Western%20Australia&z=10&output=embed';mapFrame.title='Map of the Perth service area near Aubin Grove';mapFrame.loading='lazy';mapFrame.referrerPolicy='no-referrer-when-downgrade';
 const mapLink=make('a','ham-map-fallback-link','OPEN PERTH SERVICE AREA IN MAPS ↗');mapLink.href='https://www.google.com/maps/search/?api=1&query=Aubin%20Grove%2C%20Western%20Australia';mapLink.target='_blank';mapLink.rel='noopener noreferrer';
 mapLoading.append(mapFrame,mapLink);mapLoading.classList.add('ham-map-ready-fallback');
 const mapStyles=make('style');mapStyles.textContent='.service-map .ham-map-ready-fallback{display:flex!important;position:absolute;inset:0;z-index:4;flex-direction:column;align-items:stretch;justify-content:stretch;padding:0;background:#e6e5e0}.service-map .ham-map-ready-fallback iframe{width:100%;flex:1;min-height:260px;border:0}.service-map .ham-map-fallback-link{display:block;background:#171717;color:#fff;padding:15px;text-decoration:none;text-align:center;font:700 12px Arial,sans-serif;letter-spacing:.06em}.service-map .ham-map-ready-fallback~*{display:none}';document.head.append(mapStyles);
}
if(!document.querySelector('#colour-preview')){
 const section=make('section','ham-feature-section');section.id='colour-preview';
 const inner=make('div','ham-feature-inner');
 const kicker=make('p','ham-feature-eyebrow','A CLOSER LOOK');
 const title=make('h2',null,'THE WORK, IN DETAIL.');
 const grid=make('div','ham-feature-grid');const left=make('div',null,null);
 const compare=make('div','ham-comparison');
 compare.setAttribute('aria-label','Compare an illustrated room without downlights with the real completed lighting installation');
 const colour=document.createElement('img');colour.className='ham-full';colour.src='/images/after-room-web.jpg';colour.alt='Finished room with the new ceiling lighting installed';colour.loading='lazy';
 const grey=document.createElement('img');grey.className='ham-mono';grey.src='/images/room-before-illustration.webp';grey.alt='Illustration of the finished room with the ceiling downlights removed and dimmer lighting';grey.loading='lazy';grey.style.setProperty('filter','none','important');
 compare.append(colour,grey,make('div','ham-comp-divider'));
 compare.append(make('span','ham-comp-caption left','BEFORE — ILLUSTRATION'),make('span','ham-comp-caption right','AFTER'));
 const slider=document.createElement('input');slider.type='range';slider.min='0';slider.max='100';slider.value='50';slider.className='ham-comp-range';
 slider.setAttribute('aria-label','Slide to compare the illustrated before view and the real finished room');
 slider.addEventListener('input',()=>compare.style.setProperty('--ham-split',slider.value+'%'));
 left.append(compare,slider,make('p','ham-comparison-disclosure','Before: illustration of this room without downlights. After: genuine completed-project photo. Drag to compare.'));
 const aside=make('div','ham-feature-aside');const asideTop=make('div');
 asideTop.append(make('p','ham-feature-eyebrow','REAL WORK. REAL DETAIL.'),make('h3',null,'SEE WHAT GOES INTO THE FINISH.'));
 asideTop.append(make('p',null,'See the difference thoughtful lighting makes. Explore more genuine work from site on Hamilton’s Instagram.'));
 const kitchen=make('figure','ham-finished-kitchen');const kitchenPhoto=document.createElement('img');kitchenPhoto.src='/images/finished-kitchen-web.jpg';kitchenPhoto.alt='Completed kitchen with three pendant lights and recessed downlights';kitchenPhoto.loading='lazy';const kitchenLabel=make('figcaption',null,'FINISHED KITCHEN LIGHTING');kitchen.append(kitchenPhoto,kitchenLabel);asideTop.append(kitchen);
 const follow=document.createElement('a');follow.href=instagram;follow.target='_blank';follow.rel='noopener noreferrer';follow.textContent='EXPLORE INSTAGRAM ↗';aside.append(asideTop,follow);
 grid.append(left,aside);inner.append(kicker,title,grid);section.append(inner);
 const project=root.querySelector('#projects');if(project?.parentNode)project.insertAdjacentElement('afterend',section);else(root.querySelector('main')||root).append(section);
 const review=make('section','ham-feature-section');review.style.background='#dedcd5';
 const rv=make('div','ham-feature-inner');
 rv.append(make('p','ham-feature-eyebrow','CUSTOMER FEEDBACK'),make('h2',null,'HEAR IT FROM CUSTOMERS.'));
 rv.append(make('p','ham-comp-note','Read current customer reviews on Google. We display individual testimonials only when their wording and attribution are verified.'));
 const revlink=document.createElement('a');revlink.className='ham-feature-link';revlink.href='https://www.google.com/maps/search/?api=1&query=Hamilton%20Electrical%20%26%20Air%20Perth';revlink.target='_blank';revlink.rel='noopener noreferrer';revlink.textContent='FIND HAMILTON ON GOOGLE MAPS ↗';rv.append(revlink);review.append(rv);
 section.insertAdjacentElement('afterend',review);
 const q=make('section','ham-quickquote');q.id='whatsapp-quote';
 const qi=make('div','ham-quickquote-inner');const intro=make('div');
 intro.append(make('p','ham-feature-eyebrow','TALK TO STEPHEN'),make('h2',null,'TELL US ABOUT YOUR JOB.'),make('p',null,'Choose the service, add your suburb and a few details. We’ll prepare a WhatsApp message for you to check and send.'));
 const form=document.createElement('form');form.id='ham-whatsapp-form';
 const field=(name,label,type,options)=>{
  const wrap=make('label',null,label);let input;
  if(type==='select'){input=document.createElement('select');for(const val of options){const opt=document.createElement('option');opt.value=val;opt.textContent=val;input.append(opt)}}
  else if(type==='textarea'){input=document.createElement('textarea');input.rows=3;}
  else{input=document.createElement('input');input.type=type||'text'}
  input.name=name;input.required=true;input.autocomplete=name==='name'?'name':name==='phone'?'tel':'off';wrap.append(input);return wrap;
 };
 form.append(field('name','Your name','text'),field('phone','Phone number','tel'),field('suburb','Suburb','text'),field('service','Service','select',['Electrical','Air conditioning','Lighting','Renovations','Other']),field('message','What needs doing?','textarea'));
 form.lastChild.classList.add('ham-span');
 const button=make('button','ham-span','CONTINUE TO WHATSAPP →');button.type='submit';
 form.append(button,make('small',null,'This opens WhatsApp with your message ready. It does not automatically send an enquiry.'));
 form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);const vals=Object.fromEntries(data.entries());
  const msg=['Hello Stephen, I would like a quote from Hamilton Electrical & Air.','','Name: '+vals.name,'Phone: '+vals.phone,'Suburb: '+vals.suburb,'Service: '+vals.service,'Job details: '+vals.message].join('\n');
  window.open('https://wa.me/61438605733?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');
 });
 qi.append(intro,form);q.append(qi);review.insertAdjacentElement('afterend',q);
 const mobile=document.querySelector('.ham-mobile-actions a:last-child');if(mobile)mobile.href='#whatsapp-quote';
}
const style=make('style');style.textContent='#colour-preview .ham-comparison-disclosure{display:block!important;font-size:13px;line-height:1.6;margin:12px 0 0;color:inherit}#colour-preview .ham-comp-caption{font-size:10px;letter-spacing:.06em;padding:8px}#colour-preview .ham-comparison>.ham-mono{filter:none!important}#colour-preview .ham-comp-note{display:block!important;font-size:13px;line-height:1.5;color:inherit;opacity:.76;margin-top:12px}#colour-preview .ham-finished-kitchen{margin:20px 0 8px;max-width:320px}#colour-preview .ham-finished-kitchen img{display:block;width:100%;max-height:260px;object-fit:cover;object-position:center 35%;border:1px solid #777}#colour-preview .ham-finished-kitchen figcaption{margin-top:8px;font-size:11px;font-weight:700;letter-spacing:.11em}#colour-preview .ham-comparison img{object-position:center center}';document.head.append(style);
})();
