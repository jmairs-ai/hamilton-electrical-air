(() => {
'use strict';
const init=()=>{
  const root=document.querySelector('#root');if(!root)return;
  const main=root.querySelector('main')||root.querySelector('section');if(main&&!main.id)main.id='ham-content';
  const form=root.querySelector('form');
  if(form&&!form.id)form.id='ham-quote-form';
  const target=form?'#'+form.id:'mailto:info@hamiltonelectricalair.com.au';
  const mobile=document.createElement('nav');
  mobile.className='ham-mobile-actions';
  mobile.setAttribute('aria-label','Quick contact');
  const call=document.createElement('a');call.href='tel:+61438605733';call.textContent='CALL STEPHEN';call.setAttribute('aria-label','Call Stephen on 0438 605 733');
  const quote=document.createElement('a');quote.href=target;quote.textContent='GET A QUOTE ↗';
  if(form)quote.addEventListener('click',()=>{const first=form.querySelector('input');if(first)setTimeout(()=>first.focus({preventScroll:true}),380)});
  mobile.append(call,quote);document.body.append(mobile);
  root.querySelectorAll('img').forEach((img,i)=>{
    if(!img.hasAttribute('decoding'))img.decoding='async';
    if(i>0&&!img.hasAttribute('loading'))img.loading='lazy';
    img.addEventListener('error',()=>{img.classList.add('ham-image-error')},{once:true});
  });
  root.querySelectorAll('a[target="_blank"]').forEach(a=>{a.rel='noopener noreferrer'});
  const footer=root.querySelector('footer');
  if(footer){
    const band=document.createElement('div');band.className='ham-inline-social';
    const text=document.createElement('div');const title=document.createElement('strong');title.textContent='FOLLOW THE WORK';const desc=document.createElement('p');desc.textContent='Real project updates from Hamilton Electrical & Air.';text.append(title,desc);
    const link=document.createElement('a');link.href='https://www.instagram.com/hamilton.electrical.air/';link.target='_blank';link.rel='noopener noreferrer';link.textContent='VIEW HAMILTON ON INSTAGRAM ↗';
    band.append(text,link);footer.before(band);
  }
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();