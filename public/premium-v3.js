(() => {
  'use strict';
  if (window.__hamPremiumV3) return;
  window.__hamPremiumV3 = true;

  const style = document.createElement('style');
  style.textContent = `
    @media (prefers-reduced-motion: no-preference) {
      .mosaic-title > * { animation: ham-arrive .72s cubic-bezier(.2,.7,.2,1) both; }
      .mosaic-title > :nth-child(2) { animation-delay:.1s; }
      .mosaic-title > :nth-child(3) { animation-delay:.2s; }
      .mosaic-title > :nth-child(4) { animation-delay:.3s; }
      @keyframes ham-arrive { from {opacity:0;transform:translateY(16px)} to {opacity:1;transform:translateY(0)} }
    }
    .ham-gallery-launch { appearance:none; cursor:pointer; display:inline-flex; align-items:center; justify-content:space-between; gap:26px; border:1px solid #111; background:#111; color:#f8f7f3; padding:17px 22px; margin:28px 0 15px; font:700 12px/1.2 'DM Sans',Arial,sans-serif; letter-spacing:.09em; text-transform:uppercase; transition:background .2s,color .2s,transform .2s; min-height:51px; }
    .ham-gallery-launch:hover,.ham-gallery-launch:focus-visible {background:#f8f7f3;color:#111;transform:translateY(-2px)}
    .ham-gallery-launch span {font-size:22px;font-weight:400;line-height:1}
    .ham-gallery-dialog {border:0;background:#101010;color:#f8f7f3;padding:0;width:100vw;max-width:100vw;height:100dvh;max-height:100dvh;margin:0;overflow:auto;}
    .ham-gallery-dialog::backdrop {background:rgba(0,0,0,.94)}
    .ham-gallery-shell {display:grid;grid-template-rows:auto minmax(0,1fr) auto;min-height:100dvh;max-height:100dvh;padding:clamp(14px,2vw,32px);gap:14px;}
    .ham-gallery-top,.ham-gallery-foot {display:flex;gap:18px;justify-content:space-between;align-items:center;}
    .ham-gallery-top {font:700 11px/1.4 'DM Sans',Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;}
    .ham-gallery-close,.ham-gallery-nav {border:1px solid #777;background:transparent;color:#fff;cursor:pointer;display:grid;place-items:center;min-width:46px;min-height:46px;font-size:23px;transition:background .2s;}
    .ham-gallery-close:hover,.ham-gallery-nav:hover,.ham-gallery-close:focus-visible,.ham-gallery-nav:focus-visible {background:#444}
    .ham-gallery-stage {display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;min-height:0;}
    .ham-gallery-image {display:block;width:100%;height:100%;max-height:calc(100dvh - 180px);object-fit:contain;}
    .ham-gallery-foot {font:400 12px/1.5 'DM Sans',Arial,sans-serif;}
    .ham-gallery-foot strong {display:block;font-size:16px;font-weight:600;margin-bottom:3px}
    .ham-gallery-foot a {color:#fff;text-decoration:underline;text-underline-offset:5px;white-space:nowrap}
    #quote .ham-form-progress {font:500 11px/1.5 'DM Sans',Arial,sans-serif;color:#777;margin:5px 0 12px;letter-spacing:.02em}
    #quote .ham-form-progress strong {color:#111;font-weight:700}
    #quote .ham-form-progress [data-complete] {display:block;background:#d8d6d0;height:2px;margin-top:7px;overflow:hidden}
    #quote .ham-form-progress [data-complete]::before {content:'';display:block;width:var(--ham-form-fill,0%);height:100%;background:#111;transition:width .2s ease}
    @media(max-width:600px){.ham-gallery-shell{padding:13px;gap:8px}.ham-gallery-stage{gap:5px}.ham-gallery-nav{min-width:35px;min-height:44px;font-size:19px}.ham-gallery-foot{align-items:flex-start}.ham-gallery-foot a{font-size:11px}.ham-gallery-image{max-height:calc(100dvh - 180px)}.ham-gallery-launch{width:100%}}
    @media(prefers-reduced-motion:reduce){.ham-gallery-launch,#quote .ham-form-progress [data-complete]::before{transition:none!important}}
    .ham-brand-icon{display:inline-block;width:1.12em;height:1.12em;flex:0 0 auto;vertical-align:-.16em;margin-right:.46em;fill:currentColor;stroke:none}
    .ham-brand-icon-kicker{width:1em;height:1em;vertical-align:-.14em;margin:0 0 0 .45em}
    #ha-whatsapp-send.ham-whatsapp-action{display:flex;align-items:center;justify-content:space-between;gap:18px}
    #ha-whatsapp-send.ham-whatsapp-action .ham-brand-icon{width:30px;height:30px;margin:0 0 0 auto;flex:none;color:currentColor}
    .ham-suburb-picker{margin:24px 0 10px;padding:22px;border:1px solid #c9c8c2;background:#f6f5f0;color:#171717}
    .ham-suburb-picker strong{display:block;font:700 12px/1.4 'DM Sans',Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px}
    .ham-suburb-picker p{font:400 14px/1.5 'DM Sans',Arial,sans-serif;margin:0 0 14px;color:#4a4a46}
    .ham-suburb-options{display:flex;gap:7px;flex-wrap:wrap}
    .ham-suburb-options button{appearance:none;border:1px solid #a6a59e;padding:10px 13px;background:transparent;color:inherit;cursor:pointer;font:600 12px/1.2 'DM Sans',Arial,sans-serif;min-height:42px;transition:background .18s,color .18s}
    .ham-suburb-options button:hover,.ham-suburb-options button:focus-visible{background:#141414;color:#fff;border-color:#141414}
    .ham-map-fallback{padding:35px 24px;background:#171717;color:#f4f3ee;border:1px solid #555;min-height:180px;display:flex;flex-direction:column;justify-content:center;gap:12px}
    .ham-map-fallback strong{font:700 clamp(19px,3vw,29px)/1.2 'DM Sans',Arial,sans-serif;letter-spacing:.02em}
    .ham-map-fallback p{font:400 13px/1.5 'DM Sans',Arial,sans-serif;color:#c5c4bd;margin:0;max-width:420px}
    .ham-map-fallback a{align-self:flex-start;display:inline-block;border-bottom:1px solid #fff;color:#fff;text-decoration:none;font:700 12px 'DM Sans',Arial,sans-serif;padding:7px 0}
    #areas [aria-label="Interactive Perth service area map"],#areas [aria-label="Explore service locations"]{display:none!important}
    .ham-map-static{border:1px solid #595955;background:#161616;color:#f6f5f1;overflow:hidden}
    .ham-map-static-head{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
    .ham-map-static-head strong{font:700 13px/1.4 'DM Sans',Arial,sans-serif;letter-spacing:.08em}
    .ham-map-switch{display:flex;flex-wrap:wrap;gap:7px}
    .ham-map-switch button{appearance:none;border:1px solid #74746f;background:transparent;color:#eee;padding:9px 12px;min-height:41px;font:700 11px 'DM Sans',Arial,sans-serif;cursor:pointer}
    .ham-map-switch button[aria-pressed=true],.ham-map-switch button:hover{background:#f5f4ef;color:#151515}
    .ham-map-frame{position:relative;height:clamp(340px,42vw,470px);background:#e6e5e0}
    .ham-map-leaflet{position:absolute;inset:0;height:100%;width:100%;z-index:2}
    .ham-radius-label{position:absolute;left:13px;top:13px;z-index:500;background:#151515;color:#fff;padding:10px 13px;box-shadow:0 2px 15px #0003;font:700 11px/1.35 'DM Sans',Arial,sans-serif;letter-spacing:.04em;pointer-events:none}
    .ham-map-static .leaflet-container{font-family:'DM Sans',Arial,sans-serif}
    .ham-map-frame iframe{display:block;width:100%;height:100%;border:0;pointer-events:none}
    .ham-map-frame.ham-map-enabled iframe{pointer-events:auto}
    .ham-map-enable{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);min-width:170px;border:0;background:#141414;color:#fff;box-shadow:0 5px 25px #0005;padding:13px 18px;min-height:46px;font:700 12px 'DM Sans',Arial,sans-serif;cursor:pointer}
    .ham-map-frame.ham-map-enabled .ham-map-enable{display:none}
    .ham-radius-ring{position:absolute;z-index:3;inset:8% 17%;pointer-events:none;display:grid;place-items:center}
    .ham-radius-ring[hidden]{display:none!important}
    .ham-radius-ring svg{width:min(100%,390px);height:100%;max-height:340px;overflow:visible;filter:drop-shadow(0 2px 3px #fff9)}
    .ham-radius-ring circle{fill:#19191918;stroke:#111;stroke-width:2.5;stroke-dasharray:8 5;vector-effect:non-scaling-stroke}
    .ham-radius-ring circle:not(.ham-centre){fill:#15151516;stroke:#111;stroke-width:4;stroke-dasharray:10 6;filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #fff);}
    .ham-radius-ring .ham-centre{fill:#111;stroke:#fff;stroke-width:3;stroke-dasharray:none}
    .ham-radius-ring-label{position:absolute;bottom:2px;background:#101010;color:#fff;padding:7px 11px;font:700 10px/1.3 Arial,sans-serif;letter-spacing:.09em;text-align:center;max-width:95%}
    @media(max-width:700px){.ham-radius-ring{inset:10% 8%}.ham-radius-ring svg{max-height:290px}.ham-radius-ring-label{font-size:9px}}
    .ham-map-foot{padding:15px 20px;display:flex;justify-content:space-between;gap:14px;align-items:center;flex-wrap:wrap;font:400 12px/1.5 'DM Sans',Arial,sans-serif;color:#c6c6c0}
    .ham-map-foot a{color:#fff;text-decoration:underline;text-underline-offset:4px}
    .ham-map-coverage-reset{appearance:none;border:1px solid #999;background:#f3f2ec;color:#171717;cursor:pointer;padding:10px 12px;min-height:42px;font:700 11px/1.2 'DM Sans',Arial,sans-serif;letter-spacing:.03em}
    .ham-map-coverage-overlay{position:absolute;top:14px;right:14px;z-index:30;box-shadow:0 3px 12px #0005;background:#101010;color:#fff;border:1px solid #fff;padding:12px 14px;min-height:44px;font:700 11px/1.2 'DM Sans',Arial,sans-serif;cursor:pointer;letter-spacing:.04em}
    @media(max-width:700px){.ham-map-frame{isolation:isolate}.ham-map-frame>iframe{position:absolute;inset:0;z-index:0}.ham-radius-ring{z-index:20!important;transform:translateZ(1px);inset:7% 4%!important}.ham-radius-ring svg{width:min(75vw,285px);max-height:285px;filter:drop-shadow(0 0 4px #fff)}.ham-map-coverage-overlay{top:10px;right:10px;font-size:10px;padding:10px}}
    .ham-suburb-checker{padding:22px 20px;border-top:1px solid #62625f;background:#f1f0eb;color:#151515}
    .ham-suburb-checker label{display:block;font:700 12px/1.4 'DM Sans',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;margin:0 0 11px}
    .ham-suburb-checker-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px}
    .ham-suburb-checker input{margin:0!important;min-height:49px!important;padding:12px 13px!important;border:1px solid #8b8a84!important;background:#fff!important;color:#151515!important;font-size:15px!important}
    .ham-suburb-checker button{border:1px solid #111;background:#111;color:#fff;min-height:49px;padding:11px 20px;font:700 12px/1.3 'DM Sans',Arial,sans-serif;cursor:pointer}
    .ham-suburb-checker button:hover,.ham-suburb-checker button:focus-visible{background:#333}
    .ham-suburb-result{margin:12px 0!important;font:400 13px/1.6 'DM Sans',Arial,sans-serif!important;color:#4a4945!important}
    .ham-suburb-quote{display:inline-flex;align-items:center;gap:12px;border-bottom:1px solid #111;padding:6px 0;color:#111!important;font:700 12px/1.4 'DM Sans',Arial,sans-serif;text-decoration:none}
    @media(max-width:470px){.ham-suburb-checker-row{grid-template-columns:1fr}.ham-suburb-checker button{width:100%}}
    .ham-case-study{display:inline-flex;align-items:center;min-height:44px;border:1px solid #bbb;color:#fff;background:transparent;text-decoration:none;padding:10px 14px;font:700 11px/1.3 'DM Sans',Arial,sans-serif;letter-spacing:.07em;text-transform:uppercase;white-space:normal}
    .ham-case-study:hover,.ham-case-study:focus-visible{background:#fff;color:#111}
    @media(max-width:720px){.ham-gallery-foot{flex-wrap:wrap}}
    a:has(> .ham-brand-icon),button:has(> .ham-brand-icon){align-items:center}
  `;
  document.head.appendChild(style);

  function init() {
    const icons = {
      instagram: '<svg class="ham-brand-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',
      whatsapp: '<svg class="ham-brand-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M20.25 11.55a8.25 8.25 0 0 1-12.03 7.3L3.5 20.5l1.42-4.75a8.25 8.25 0 1 1 15.33-4.2Z"/><path fill="currentColor" stroke="none" d="m8.14 7.18-1.08 1.1c-.47.5-.4 1.35.2 2.55 1.07 2.14 3.8 4.88 6.06 5.78 1.27.51 2.13.47 2.59-.03l1.09-1.13-3.26-2.23-1.28 1.2c-1.35-.7-2.53-1.88-3.21-3.22l1.14-1.29-2.25-2.73Z"/></svg>'
    };
    // Keep the personal Instagram invitation in Stephen's own name.
    document.querySelectorAll('#work a').forEach(link => {
      for (const node of link.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('More from Hamilton on Instagram')) {
          node.textContent = node.textContent.replace('More from Hamilton on Instagram', 'More from Stephen on Instagram');
        }
      }
    });
    document.querySelectorAll('a,button').forEach(el => {
      if (el.id === 'ha-whatsapp-send') return;
      // Project cards already have a photo overlay and a corner arrow; do not add a second badge.
      if (el.closest('#work') && (el.matches('.project') || el.querySelector('img'))) return;
      if (el.querySelector('.ham-brand-icon')) return;
      const label = (el.textContent || '').trim().toLowerCase();
      const href = (el.getAttribute('href') || '').toLowerCase();
      const brand = /instagram/.test(label) || /instagram\.com/.test(href) ? 'instagram' : /whatsapp/.test(label) || /wa\.me\//.test(href) ? 'whatsapp' : null;
      if (!brand || (!label && !el.getAttribute('aria-label'))) return;
      const kicker = [...el.querySelectorAll('span,p,small,div')].find(node => /^straight from site$/i.test((node.textContent || '').trim()));
      if (brand === 'instagram' && kicker) {
        kicker.insertAdjacentHTML('beforeend', icons[brand].replace('ham-brand-icon"','ham-brand-icon ham-brand-icon-kicker"'));
      } else if (brand === 'instagram' && /straight from site/i.test(label)) {
        // The oversized editorial CTA already has its own arrow; don't float a logo above its title.
      } else {
        el.insertAdjacentHTML('afterbegin', icons[brand]);
      }
    });
    const improveWhatsAppButton=()=>{
      const button=document.getElementById('ha-whatsapp-send');
      if(!button)return false;
      button.querySelectorAll('span').forEach(span=>{
        if(/^[↗⬆⇗\uFE0F\s]+$/.test(span.textContent || ''))span.remove();
      });
      [...button.childNodes].filter(node=>node.nodeType===3 && /^[↗⬆⇗\uFE0F\s]+$/.test(node.textContent || '')).forEach(node=>node.remove());
      button.querySelectorAll('.ham-brand-icon').forEach(icon=>icon.remove());
      button.insertAdjacentHTML('beforeend',icons.whatsapp);
      button.classList.add('ham-whatsapp-action');
      return true;
    };
    if(!improveWhatsAppButton()){
      const watch=new MutationObserver(()=>{if(improveWhatsAppButton())watch.disconnect();});
      watch.observe(document.body,{childList:true,subtree:true});
      window.setTimeout(()=>watch.disconnect(),15000);
    }
    const cards = [...document.querySelectorAll('#work .project')];
    const projects = document.querySelector('#work .projects');
    if (projects && cards.length && !document.querySelector('.ham-gallery-launch')) {
      const items = cards.map(card => ({
        src: card.querySelector('img')?.getAttribute('src'),
        alt: card.querySelector('img')?.alt || 'Hamilton project',
        title: card.querySelector('h3')?.textContent || 'Hamilton project',
        caption: card.querySelector('.project-caption p')?.textContent || '',
        url: card.getAttribute('href')
      })).filter(item => item.src);
      if (items.length) {
        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'ham-gallery-launch';
        trigger.innerHTML = 'VIEW PROJECTS FULLSCREEN <span aria-hidden="true">→</span>';
        projects.after(trigger);
        const dialog = document.createElement('dialog');
        dialog.className = 'ham-gallery-dialog';
        dialog.setAttribute('aria-label', 'Hamilton project photo gallery');
        dialog.innerHTML = '<div class="ham-gallery-shell"><div class="ham-gallery-top"><span data-counter>01 / 03</span><button type="button" class="ham-gallery-close" aria-label="Close gallery">×</button></div><div class="ham-gallery-stage"><button type="button" class="ham-gallery-nav" data-prev aria-label="Previous photograph">‹</button><img class="ham-gallery-image" alt=""><button type="button" class="ham-gallery-nav" data-next aria-label="Next photograph">›</button></div><div class="ham-gallery-foot"><div><strong data-title></strong><span data-caption></span></div><a target="_blank" rel="noopener noreferrer" data-instagram>VIEW ON INSTAGRAM</a></div></div>';
        const enquiryLink = document.createElement('a');
        enquiryLink.className = 'ham-case-study';
        enquiryLink.href = '#quote';
        enquiryLink.textContent = 'Ask about similar work →';
        dialog.querySelector('.ham-gallery-foot').appendChild(enquiryLink);
        document.body.appendChild(dialog);
        let index = 0;
        let lastFocus = null;
        const render = () => {
          const item = items[index];
          const image = dialog.querySelector('img');
          image.src = item.src;
          image.alt = item.alt;
          dialog.querySelector('[data-title]').textContent = item.title;
          dialog.querySelector('[data-caption]').textContent = item.caption;
          dialog.querySelector('[data-counter]').textContent = String(index+1).padStart(2,'0') + ' / ' + String(items.length).padStart(2,'0');
          const insta = dialog.querySelector('[data-instagram]');
          insta.href = item.url || 'https://www.instagram.com/hamilton.electrical.air/';
        };
        const move = direction => { index = (index + direction + items.length) % items.length; render(); };
        const close = () => dialog.close();
        enquiryLink.addEventListener('click', () => {
          const message = document.querySelector('#quote textarea');
          if (message && !message.value.trim()) {
            message.value = 'I am interested in a project similar to ' + items[index].title + '.';
            message.dispatchEvent(new Event('input', {bubbles:true}));
          }
          close();
        });
        trigger.addEventListener('click', () => {lastFocus=document.activeElement;index=0;render();dialog.showModal();dialog.querySelector('.ham-gallery-close').focus();});
        dialog.querySelector('.ham-gallery-close').addEventListener('click', close);
        dialog.querySelector('[data-prev]').addEventListener('click', () => move(-1));
        dialog.querySelector('[data-next]').addEventListener('click', () => move(1));
        dialog.addEventListener('click', event => {if(event.target === dialog) close();});
        dialog.addEventListener('keydown', event => {if(event.key === 'ArrowRight'){event.preventDefault();move(1);}if(event.key === 'ArrowLeft'){event.preventDefault();move(-1);}});
        dialog.addEventListener('close', () => lastFocus?.focus?.());
        let touchX = 0;
        dialog.querySelector('.ham-gallery-image').addEventListener('touchstart', e => {touchX=e.changedTouches[0].screenX;}, {passive:true});
        dialog.querySelector('.ham-gallery-image').addEventListener('touchend', e => {const diff=e.changedTouches[0].screenX-touchX;if(Math.abs(diff)>55)move(diff<0?1:-1);}, {passive:true});
      }
    }

    const area = document.querySelector('#areas');
    if (area && !area.querySelector('.ham-suburb-picker')) {
      const candidates = ['Aubin Grove','Hammond Park','Atwell','Success','Cockburn','Fremantle','Rockingham','Mandurah'];
      const listed = candidates.filter(name => [...area.querySelectorAll('li')].some(li => li.textContent.trim() === name));
      if (listed.length) {
        const picker = document.createElement('div');
        picker.className = 'ham-suburb-picker';
        picker.innerHTML = '<strong>YOUR AREA, YOUR ENQUIRY</strong><p>Tap a listed suburb to start an enquiry with the location filled in. Other Perth suburbs are welcome to ask.</p><div class="ham-suburb-options"></div>';
        listed.forEach(name => {
          const option = document.createElement('button');
          option.type = 'button';
          option.textContent = name + ' →';
          option.addEventListener('click', () => {
            const field = [...document.querySelectorAll('#quote input')].find(input => /suburb/i.test([input.name,input.id,input.placeholder,input.getAttribute('aria-label')].join(' ')));
            if (field) {
              const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
              if (setter) setter.call(field,name); else field.value = name;
              field.dispatchEvent(new Event('input',{bubbles:true}));
            }
            document.querySelector('#quote')?.scrollIntoView({behavior:'smooth',block:'start'});
          });
          picker.querySelector('.ham-suburb-options').appendChild(option);
        });
        const list = area.querySelector('ul');
        (list || area.querySelector('h2'))?.insertAdjacentElement('afterend',picker);
      }
    }
    if (area && !area.querySelector('.ham-map-static')) {
      // Lightweight Leaflet map, with a Google Maps fallback if tiles/scripts are blocked.
      const map = area.querySelector('[aria-label="Interactive Perth service area map"]');
      const controls = area.querySelector('[aria-label="Explore service locations"]');
      const panel=document.createElement('div');
      panel.className='ham-map-static';
      panel.setAttribute('role','region');
      panel.setAttribute('aria-label','Hamilton Electrical and Air Perth service area');
      panel.innerHTML='<div class="ham-map-static-head"><strong>EXPLORE OUR PERTH AREA</strong><div class="ham-map-switch" role="group" aria-label="Map location"><button type="button" aria-pressed="true" data-location="Aubin Grove, Western Australia">Aubin Grove</button><button type="button" aria-pressed="false" data-location="Perth, Western Australia">Perth</button><button type="button" aria-pressed="false" data-location="Mandurah, Western Australia">Mandurah</button></div></div><div class="ham-map-frame"><iframe title="Map showing Aubin Grove and the Perth area" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><button type="button" class="ham-map-enable">EXPLORE MAP ↗</button></div><div class="ham-map-foot"><span>Illustrative locations, not a fixed service boundary. Ask Stephen about your suburb.</span><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Aubin+Grove+Western+Australia">OPEN IN GOOGLE MAPS →</a></div>';
      const frame=panel.querySelector('iframe');
      const stage=panel.querySelector('.ham-map-frame');
      let leafletMap=null;
      let coverage=null;
      const points={'Aubin Grove, Western Australia':[-32.169,115.864],'Perth, Western Australia':[-31.9523,115.8613],'Mandurah, Western Australia':[-32.536,115.721]};
      const setLocation=(location)=>{
        frame.src='https://www.google.com/maps?q='+encodeURIComponent(location)+'&z=11&output=embed';
        frame.title='Google map centred on '+location;
        panel.querySelector('.ham-map-frame').classList.remove('ham-map-enabled');
        const ring=panel.querySelector('.ham-radius-ring');if(ring)ring.hidden=Boolean(leafletMap)||location!=='Aubin Grove, Western Australia';
        if(leafletMap){
          if(location==='Aubin Grove, Western Australia' && coverage)leafletMap.fitBounds(coverage.getBounds(),{padding:[22,22]});
          else leafletMap.setView(points[location],10);
        }
        panel.querySelectorAll('[data-location]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.location===location)));
        panel.querySelector('.ham-map-foot a').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(location);
      };
      panel.querySelectorAll('[data-location]').forEach(button=>button.addEventListener('click',()=>setLocation(button.dataset.location)));
      const coverageReset=document.createElement('button');coverageReset.type='button';coverageReset.className='ham-map-coverage-reset';coverageReset.textContent='SHOW 46 KM COVERAGE CIRCLE';coverageReset.addEventListener('click',()=>setLocation('Aubin Grove, Western Australia'));panel.querySelector('.ham-map-foot').appendChild(coverageReset);
      const coverageOverlay=document.createElement('button');coverageOverlay.type='button';coverageOverlay.className='ham-map-coverage-overlay';coverageOverlay.textContent='46 KM COVERAGE ◯';coverageOverlay.setAttribute('aria-label','Show the 46 kilometre service-area circle centred on Aubin Grove');coverageOverlay.addEventListener('click',()=>setLocation('Aubin Grove, Western Australia'));stage.appendChild(coverageOverlay);
      const checker=document.createElement('div');checker.className='ham-suburb-checker';checker.setAttribute('role','search');checker.setAttribute('aria-label','Check a suburb');
      checker.innerHTML='<label for="ham-check-suburb">IS YOUR SUBURB IN OUR AREA?</label><div class="ham-suburb-checker-row"><input id="ham-check-suburb" name="suburb" list="ham-suggested-suburbs" autocomplete="address-level2" maxlength="70" required placeholder="Enter a Perth suburb"><datalist id="ham-suggested-suburbs"><option value="Aubin Grove"><option value="Hammond Park"><option value="Atwell"><option value="Success"><option value="Cockburn Central"><option value="Fremantle"><option value="Rockingham"><option value="Mandurah"><option value="Perth"><option value="Baldivis"><option value="Wanneroo"></datalist><button type="button">CHECK SUBURB ↗</button></div><p class="ham-suburb-result" role="status" aria-live="polite">Search a suburb to see it on the map. Stephen can confirm availability for your job.</p><a class="ham-suburb-quote" href="#quote">ASK STEPHEN ABOUT THIS AREA ↗</a>';
      panel.querySelector('.ham-map-foot').insertAdjacentElement('afterend',checker);
      const knownSuburbs=new Map(['Aubin Grove','Hammond Park','Atwell','Success','Cockburn Central','Fremantle','Rockingham','Mandurah','Perth','Baldivis','Wanneroo'].map(s=>[s.toLowerCase(),s]));
      const checkInput=checker.querySelector('input');
      function applySuburb(){
        const entered=checkInput.value.trim().replace(/\s+/g,' ');
        if(!entered||!checkInput.reportValidity())return;
        const suburb=knownSuburbs.get(entered.toLowerCase())||entered;
        setLocation(suburb+', Western Australia');
        checker.querySelector('.ham-suburb-result').textContent='Showing '+suburb+' on the map. The 46 km circle is an indicative guide only; Stephen will confirm if he can take the job.';
        const quoteSuburb=document.querySelector('#quote input[name="suburb"]');
        if(quoteSuburb){const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value')?.set;setter?.call(quoteSuburb,suburb);quoteSuburb.dispatchEvent(new Event('input',{bubbles:true}));}
      }
      checker.querySelector('button').addEventListener('click',applySuburb);
      checkInput.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();applySuburb()}});
      checker.querySelector('.ham-suburb-quote').addEventListener('click',()=>{if(checkInput.value.trim())applySuburb()});
      panel.querySelector('.ham-map-enable').addEventListener('click',()=>{
        stage.classList.add('ham-map-enabled');
        if(leafletMap)leafletMap.dragging.enable();
      });
      setLocation('Aubin Grove, Western Australia');
      if(map) map.replaceWith(panel);
      else (controls || area.querySelector('.ham-suburb-picker'))?.insertAdjacentElement('afterend',panel);
      controls?.remove();
      const ring=document.createElement('div');ring.className='ham-radius-ring';ring.setAttribute('aria-label','Indicative 46 kilometre radius around Aubin Grove');
      ring.innerHTML='<svg viewBox="0 0 320 320" role="img" aria-label="Illustrative circular coverage around Aubin Grove"><circle cx="160" cy="151" r="137"></circle><circle class="ham-centre" cx="160" cy="151" r="8"></circle></svg><span class="ham-radius-ring-label">APPROX. 46 KM FROM AUBIN GROVE</span>';
      stage.appendChild(ring);
      panel.querySelector('.ham-map-foot span').textContent='Indicative 46 km radius around Aubin Grove; not a fixed service boundary. Ask Stephen about your suburb.';
      [...area.querySelectorAll('*')].filter(node=>node.children.length===0 && (/^Loading Perth service map/i.test((node.textContent||'').trim()) || /^Shaded circle: approximate/i.test((node.textContent||'').trim()))).forEach(node=>node.remove());
      [...area.querySelectorAll('*')].filter(node=>node.children.length===0 && /^AUBIN GROVE\s*[·•]\s*WESTERN AUSTRALIA$/i.test((node.textContent||'').trim())).forEach(node=>node.remove());
      if(!document.querySelector('link[data-ham-leaflet]')){
        const css=document.createElement('link');css.rel='stylesheet';css.href='/leaflet/leaflet.css';css.dataset.hamLeaflet='1';document.head.appendChild(css);
      }
      const bootLeaflet=()=>{
        const L=window.L;
        if(!L)return;
        try{
          const mapDiv=document.createElement('div');mapDiv.className='ham-map-leaflet';mapDiv.setAttribute('aria-label','Map with approximate 46 kilometre service radius centred on Aubin Grove');
          stage.insertBefore(mapDiv,frame);frame.style.display='none';
          leafletMap=L.map(mapDiv,{scrollWheelZoom:false,dragging:false,tap:false,zoomControl:true});
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(leafletMap);
          coverage=L.circle(points['Aubin Grove, Western Australia'],{radius:46000,color:'#171717',weight:3,dashArray:'9 7',fillColor:'#262626',fillOpacity:.10}).addTo(leafletMap);
          L.circleMarker(points['Aubin Grove, Western Australia'],{radius:7,color:'#fff',weight:2,fillColor:'#141414',fillOpacity:1}).addTo(leafletMap).bindPopup('<strong>Hamilton home base</strong><br>Aubin Grove');
          const label=document.createElement('div');label.className='ham-radius-label';label.textContent='APPROX. 46 KM SERVICE RADIUS';stage.appendChild(label);
          ring.hidden=true;
          coverage.bringToFront();
          leafletMap.fitBounds(coverage.getBounds(),{padding:[22,22]});
          panel.querySelector('.ham-map-foot span').textContent='Circle indicates an approximate service radius, not a fixed boundary. Ask Stephen about jobs further afield.';
          window.setTimeout(()=>leafletMap.invalidateSize(),150);
        }catch(error){console.warn('Hamilton area map fallback:',error);frame.style.display='block';leafletMap?.remove();leafletMap=null;ring.hidden=false;}
      };
      if(window.L)bootLeaflet();
      else{
        const loader=document.createElement('script');loader.src='/leaflet/leaflet.js';loader.async=true;loader.onload=bootLeaflet;document.head.appendChild(loader);
      }
    }

    // Keep beta intentionally out of search results while preparing production metadata.
    const meta = (key,value,attr='name') => {
      let node=document.head.querySelector('meta['+attr+'="'+key+'"]');
      if(!node){node=document.createElement('meta');node.setAttribute(attr,key);document.head.appendChild(node);}
      node.content=value;
    };
    meta('og:title','Hamilton Electrical & Air | Perth Electrical & Air Conditioning','property');
    meta('og:description','Electrical and air conditioning for Perth homes and businesses. Speak directly with Stephen Hamilton.','property');
    meta('og:type','website','property');
    meta('twitter:card','summary_large_image');
    if (!document.querySelector('script[data-ham-localbusiness]')) {
      const data=document.createElement('script');data.type='application/ld+json';data.dataset.hamLocalbusiness='true';
      data.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Electrician','name':'Hamilton Electrical & Air','telephone':'+61438605733','areaServed':{'@type':'Place','name':'Perth, Western Australia'},'address':{'@type':'PostalAddress','addressLocality':'Aubin Grove','addressRegion':'WA','addressCountry':'AU'},'sameAs':['https://www.instagram.com/hamilton.electrical.air/']});
      document.head.appendChild(data);
    }

    const form = document.querySelector('#quote form');
    if (form && !form.querySelector('.ham-form-progress')) {
      const required = [...form.querySelectorAll('[required]')].filter(f => f.name !== 'company');
      const progress = document.createElement('div');
      progress.className = 'ham-form-progress';
      progress.setAttribute('aria-live', 'off');
      progress.innerHTML = '<strong>YOUR ENQUIRY</strong> · <span data-progress-label></span><span data-complete></span>';
      form.prepend(progress);
      const update = () => {
        const completed = required.filter(field => field.value.trim() && field.checkValidity()).length;
        progress.querySelector('[data-progress-label]').textContent = `${completed} of ${required.length} required details completed`;
        progress.style.setProperty('--ham-form-fill', `${required.length ? completed/required.length*100 : 0}%`);
      };
      form.addEventListener('input', update);
      form.addEventListener('change', update);
      update();
    }
  }
  // Third-party map tiles can stall the window load event on iOS browsers.
  // The interactive service-area fallback should be ready as soon as the
  // document and React root are parsed, without waiting for those resources.
  let attempts=0;
  const start=()=>{
    // The React app sometimes mounts a tick after DOMContentLoaded.
    if (!document.querySelector('#areas') && attempts++ < 35) {
      window.setTimeout(start, 120);
      return;
    }
    init();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
