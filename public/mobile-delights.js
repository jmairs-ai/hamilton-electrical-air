/* Small, optional touch enhancements. Never alter quote submission or navigation. */
(() => {
  'use strict';
  if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const snowflake = '<svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M16 3v26M4.7 9.5l22.6 13M4.7 22.5l22.6-13M11.5 7.5l4.5 4.5 4.5-4.5M11.5 24.5l4.5-4.5 4.5 4.5M7.4 14.2l6.1 1.7-1.6-6.1M24.6 17.8l-6.1-1.7 1.6 6.1M11.9 22.2l1.6-6.1-6.1 1.7M20.1 9.8l-1.6 6.1 6.1-1.7"/></svg>';
  const bolt = '<svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="M18 2 7 18h9l-2 12 12-18h-9z"/></svg>';

  function burst() {
    if (reduced) return;
    const overlay = document.createElement('div');
    overlay.className = 'ham-snowfall';
    overlay.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 10; i++) {
      const flake = document.createElement('span');
      flake.innerHTML = snowflake;
      flake.style.setProperty('--x', (7 + i * 9) + '%');
      flake.style.setProperty('--delay', ((i % 4) * 0.07) + 's');
      flake.style.setProperty('--drift', ((i % 2 ? 1 : -1) * (12 + i * 3)) + 'px');
      overlay.appendChild(flake);
    }
    document.body.appendChild(overlay);
    window.setTimeout(() => overlay.remove(), 2200);
  }
  function showModeEffect(button, cool) {
    if (reduced) return;
    const switcher = button.closest('.service-switch');
    if (!switcher) return;
    switcher.querySelectorAll('.ham-mode-effect').forEach(el => el.remove());
    const effect = document.createElement('span');
    effect.className = 'ham-mode-effect' + (cool ? ' is-cool' : '');
    effect.innerHTML = cool ? snowflake : bolt;
    effect.setAttribute('aria-hidden', 'true');
    button.appendChild(effect);
    window.setTimeout(() => effect.remove(), 850);
  }
  function setup() {
    const logo = document.querySelector('header a[aria-label*="home"]');
    const switcher = document.querySelector('#services .service-switch');
    const cards = document.querySelectorAll('#work .project');
    const footer = document.querySelector('footer');
    if (!logo || !switcher || cards.length < 3 || !footer) return false;
    if (document.documentElement.dataset.hamMobileDelights) return true;
    document.documentElement.dataset.hamMobileDelights = '1';

    // A single tap is reliable in Safari; rapid triple taps can be swallowed by
    // double-tap zoom or the logo's normal navigation.
    logo.addEventListener('click', () => burst());

    switcher.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (button && switcher.contains(button)) showModeEffect(button, /air conditioning/i.test(button.textContent));
    });

    const card = cards[2];
    const image = card.querySelector('.project-image');
    if (image) {
      const hint = document.createElement('span');
      hint.className = 'ham-cool-hint';
      hint.textContent = 'SWIPE TO COOL';
      image.appendChild(hint);
      let startX = 0, startY = 0, swiped = false;
      image.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
      }, {passive:true});
      image.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
          swiped = true;
          card.classList.toggle('ham-cool-preview');
          window.setTimeout(() => { swiped = false; }, 350);
        }
      }, {passive:true});
      card.addEventListener('click', e => {
        if (swiped) {e.preventDefault(); e.stopPropagation(); swiped = false;}
      }, true);
    }

    // Native iOS share sheet, with a copy-link fallback for other browsers.
    const share = document.createElement('button');
    share.type = 'button';
    share.className = 'ham-share-site';
    share.setAttribute('aria-label', 'Share Hamilton Electrical and Air website');
    share.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3m-4 4 4-4 4 4M5 12H4v8h16v-8h-1"/></svg><span>Share this site</span>';
    const status = document.createElement('span');
    status.className = 'ham-share-feedback';
    status.setAttribute('role', 'status');
    const links = footer.querySelector('div');
    if (links) { links.appendChild(share); links.appendChild(status); }
    share.addEventListener('click', async () => {
      const url = 'https://beta.hamiltonelectricalair.com.au/';
      const data = {title: 'Hamilton Electrical & Air', text: 'Electrical and air conditioning in Perth — talk to Stephen.', url};
      try {
        if (navigator.share) await navigator.share(data);
        else if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
          status.textContent = 'Link copied';
          window.setTimeout(() => {status.textContent = '';}, 2500);
        } else {
          status.textContent = 'Copy the website address from your browser to share it.';
        }
      } catch (err) {
        if (err?.name !== 'AbortError') status.textContent = 'Could not share. Try the browser Share button.';
      }
    });

    // Visual pressed state: iOS Safari does not reliably expose web haptics.
    document.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'touch') return;
      const target = e.target.closest('#root button, #root .button, #root .mobile-contact a');
      if (!target) return;
      target.classList.add('ham-touch-pressed');
      const clear = () => target.classList.remove('ham-touch-pressed');
      target.addEventListener('pointerup', clear, {once:true});
      target.addEventListener('pointercancel', clear, {once:true});
      window.setTimeout(clear, 500);
    }, {passive:true});
    return true;
  }

  if (!setup()) {
    const observer = new MutationObserver(() => {if (setup()) observer.disconnect();});
    observer.observe(document.documentElement, {childList:true,subtree:true});
    window.setTimeout(() => observer.disconnect(), 12000);
  }
})();
