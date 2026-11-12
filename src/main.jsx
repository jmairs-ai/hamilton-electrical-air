import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { siteMarkup } from './siteMarkup.js';
import './site.css';

function App() {
  useEffect(() => {
    const root = document.getElementById('site-content');
    if (!root) return;
    const menuButton = root.querySelector('.menu-toggle');
    const mobileNav = root.querySelector('#mobileNav');
    const closeMenu = () => {
      if (!menuButton || !mobileNav) return;
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.querySelector('span').textContent = '＋';
    };
    const toggleMenu = () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      mobileNav.hidden = isOpen;
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      menuButton.querySelector('span').textContent = isOpen ? '＋' : '−';
    };
    menuButton?.addEventListener('click', toggleMenu);
    mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    const form = root.querySelector('#quoteForm');
    const submitQuote = (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = [
        'Hi Hamilton, I would like to request a quote.',
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone') || 'Not provided'}`,
        `Email: ${data.get('email') || 'Not provided'}`,
        `Service: ${data.get('service')}`,
        `Suburb: ${data.get('suburb') || 'Not provided'}`,
        `Job details: ${data.get('message')}`
      ].join('\n');
      window.open(`https://wa.me/61438605733?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };
    form?.addEventListener('submit', submitQuote);
    return () => {
      menuButton?.removeEventListener('click', toggleMenu);
      mobileNav?.querySelectorAll('a').forEach((link) => link.removeEventListener('click', closeMenu));
      form?.removeEventListener('submit', submitQuote);
    };
  }, []);

  return <div id="site-content" dangerouslySetInnerHTML={{ __html: siteMarkup }} />;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
