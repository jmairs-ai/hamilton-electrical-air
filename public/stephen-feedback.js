/* Stephen's approved positioning and attribution updates. */
(() => {
  const replacements = new Map([
    ['Based in Perth’s southern suburbs, Hamilton Electrical & Air looks after homes, rentals and businesses across the Perth metro area.', 'Based south of the river, Hamilton Electrical & Air looks after homes, rentals and businesses across the Perth metro area.'],
    ['Director Stephen Hamilton is a licensed electrician and refrigeration mechanic.', 'Owner/operator Stephen Hamilton is a licensed electrician and refrigeration mechanic.'],
    ['DIRECTOR / HAMILTON ELECTRICAL & AIR', 'OWNER/OPERATOR / HAMILTON ELECTRICAL & AIR'],
    ['Based in Aubin Grove. Working across Perth, from Mandurah to Wanneroo, including:', 'Based south of the river. Working across Perth, from Mandurah to Wanneroo, including:'],
    ['Hamilton is based in Aubin Grove and covers the wider Perth metro area.', 'Hamilton is based south of the river and covers the wider Perth metro area.'],
    ['BASED IN AUBIN GROVE', 'SOUTH OF THE RIVER'],
    ['STEPHEN, RIGHT / WITH MARIO MARINO / DAIKIN INSTALLATION', 'STEPHEN, RIGHT / AIR CONDITIONING INSTALLATION'],
    ['Hamilton home base', 'Aubin Grove map reference']
  ]);

  function update() {
    document.querySelectorAll('header a[aria-label="Hamilton Electrical & Air home"] img, footer a[aria-label="Back to top"] img').forEach(img => {
      if (img.getAttribute('src') !== '/images/hamilton-official-logo.jpg') img.setAttribute('src', '/images/hamilton-official-logo.jpg');
      img.classList.add('ham-official-logo');
      img.removeAttribute('width');
      img.removeAttribute('height');
    });
    const about = document.querySelector('#about');
    if (about) {
      const photo = about.querySelector('.director-photo img');
      if (photo) photo.alt = 'Stephen Hamilton on the right at an air conditioning installation';
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.parentElement?.closest('script, style, textarea')) continue;
      let value = node.nodeValue;
      for (const [from, to] of replacements) value = value.replaceAll(from, to);
      if (value !== node.nodeValue) node.nodeValue = value;
    }
  }

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; update(); });
  });
  const start = () => {
    update();
    const root = document.querySelector('#root');
    if (root) observer.observe(root, { childList: true, subtree: true, characterData: false });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
