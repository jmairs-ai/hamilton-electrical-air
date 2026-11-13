(()=>{'use strict';
const root=document.getElementById('root');if(!root)return;
const contact=root.querySelector('#quote');
if(!contact)return;
function removeExtra(){
 const old=root.querySelector('#whatsapp-quote');
 if(old)old.remove();
 const note=root.querySelector('#colour-preview .ham-comp-note');
 if(note)note.remove();
 // Keep the existing two full attributed reviews. The shorter React excerpts are duplicates.
 const editorial=root.querySelector('#ha-reviews');
 if(editorial){editorial.setAttribute('aria-label','Customer reviews');}
 for(const link of document.querySelectorAll('a[href="#whatsapp-quote"]'))link.setAttribute('href','#quote');
}
function getForm(){return root.querySelector('#quote form')}
const directNumber='61438605733';
function enquiryDetails(form){return new FormData(form)}
function validEnquiry(form){
 const details=enquiryDetails(form);
 const field=form.elements.namedItem('message');
 if(field?.setCustomValidity){
  field.setCustomValidity('');
  if(String(details.get('message')||'').trim().length<10)field.setCustomValidity('Please provide at least 10 characters about the job.');
 }
 return form.reportValidity();
}
function directWhatsAppLink(details){
 const lines=[
  'Hello Stephen, I would like to request a quote.',
  `Name: ${String(details.get('name')||'').trim()}`,
  `Phone: ${String(details.get('phone')||'').trim()}`,
  `Service: ${String(details.get('service')||'').trim()}`,
  `Suburb: ${String(details.get('suburb')||'').trim()}`,
  `Job details: ${String(details.get('message')||'').trim()}`,
  `Email: ${String(details.get('email')||'').trim()}`
 ];
 return `https://wa.me/${directNumber}?text=${encodeURIComponent(lines.filter(line=>!line.endsWith(': ')).join('\n'))}`;
}
function install(){
 removeExtra();
 const form=getForm();if(!form)return;
 form.setAttribute('data-formcrier-form','quote-request');
 form.setAttribute('data-formcrier-name','Quote request');
 const email=form.querySelector('button[type="submit"]');
 if(!email)return;
 if(!form.querySelector('#ha-whatsapp-send')){
  const button=document.createElement('button');
  button.id='ha-whatsapp-send';button.type='button';button.className='ha-whatsapp-send';
  button.setAttribute('aria-label','Submit enquiry to Stephen through Formcrier WhatsApp alerts');
  button.textContent='Send to Stephen’s WhatsApp';
  const arrow=document.createElement('span');arrow.className='ha-option-icon';arrow.textContent='↗';
  button.appendChild(arrow);
  email.insertAdjacentElement('afterend',button);
 }
 if(!form.querySelector('#ha-whatsapp-direct')){
  const direct=document.createElement('button');
  direct.type='button';direct.id='ha-whatsapp-direct';direct.className='ha-whatsapp-direct';
  direct.textContent='Prefer WhatsApp? Open a message to Stephen directly';
  direct.setAttribute('aria-label','Open WhatsApp directly with your enquiry pre-filled');
  form.querySelector('#ha-whatsapp-send').insertAdjacentElement('afterend',direct);
 }
 const info=form.querySelector('.form-note');
 if(info && info.dataset.haChoiceNote!=='1'){
  info.textContent='Send by email or notify Stephen automatically on WhatsApp, without opening the app. You can also message Stephen directly if automatic alerts are unavailable.';
  info.dataset.haChoiceNote='1';
 }
}
function whatsapp(event){
 const direct=event.target.closest?.('#ha-whatsapp-direct');
 if(direct&&root.contains(direct)){
  event.preventDefault();event.stopPropagation();
  const form=getForm();if(!form||!validEnquiry(form))return;
  const url=directWhatsAppLink(enquiryDetails(form));
  const opened=window.open(url,'_blank','noopener,noreferrer');
  if(!opened)window.location.href=url;
  return;
 }
 const button=event.target.closest?.('#ha-whatsapp-send');
 if(!button||!root.contains(button))return;
 event.preventDefault();event.stopPropagation();
 const form=getForm();if(!form)return;
 if(!validEnquiry(form))return;
 const details=enquiryDetails(form);
 // Formcrier's default compact alert previews the first three supplied fields.
 const fields=['name','phone','message','service','suburb','email'].map(name=>({name,label:({name:'Your name',phone:'Phone number',service:'Service',suburb:'Suburb',message:'Job details',email:'Email address'})[name],value:String(details.get(name)||'').trim()}));
 const info=form.querySelector('.form-note');
 if(typeof window.Formcrier?.send!=='function'){
  if(info){info.textContent='Automatic alerts are unavailable right now. Use “Open a message to Stephen directly” below; you can review and send it in WhatsApp.';info.setAttribute('role','alert')}
  return;
 }
 try{
  const accepted=window.Formcrier.send({form:'quote-request',name:'Quote request',fields});
  if(!accepted)throw Error('Not accepted');
  button.disabled=true;
  if(info){info.textContent='Enquiry received by Formcrier for notification. Delivery is not guaranteed if its monthly allowance is exhausted. For certainty, use the direct WhatsApp option or call Stephen.';info.setAttribute('role','status')}
 }catch{
  if(info){info.textContent='Automatic submission failed. Use “Open a message to Stephen directly” below; review and press Send in WhatsApp.';info.setAttribute('role','alert')}
 }
}
root.addEventListener('click',whatsapp,true);
install();
let queued=false;
const observer=new MutationObserver(()=>{
 if(queued)return;
 if(!root.querySelector('#whatsapp-quote')&&root.querySelector('#ha-whatsapp-send')&&root.querySelector('#ha-reviews'))return;
 queued=true;requestAnimationFrame(()=>{queued=false;install()});
});
observer.observe(root,{childList:true,subtree:true});
})();
