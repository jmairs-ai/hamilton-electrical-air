(() => {
  'use strict';
  const makeArrow = () => {
    const btn = document.querySelector('.ham-mobile-actions a:last-child');
    if (!btn || btn.dataset.arrowEnhanced) return false;
    btn.dataset.arrowEnhanced = 'true';
    btn.classList.add('ham-quote-arrow');
    btn.textContent = '';
    const label = document.createElement('span');
    label.textContent = 'GET A QUOTE';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox','0 0 24 24');
    icon.setAttribute('width','18');
    icon.setAttribute('height','18');
    icon.setAttribute('fill','none');
    icon.setAttribute('aria-hidden','true');
    icon.setAttribute('focusable','false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d','M4.75 12h14.5m-6-6 6 6-6 6');
    path.setAttribute('stroke','currentColor');
    path.setAttribute('stroke-width','1.8');
    path.setAttribute('stroke-linecap','round');
    path.setAttribute('stroke-linejoin','round');
    icon.append(path);
    btn.append(label,icon);
    btn.setAttribute('aria-label','Get a quote');
    return true;
  };
  if (!makeArrow()) {
    const observer = new MutationObserver(() => {
      if(makeArrow()) observer.disconnect();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('load',()=>{makeArrow();observer.disconnect()},{once:true});
  }
})();