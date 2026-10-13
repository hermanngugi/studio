'use strict';

/* Edit these values to configure the site.
   Package prices are not set here: they come from the data-offer elements in index.html,
   which assets/network.js refreshes from onlineworker.online/offers.json (network.json). */
const CONFIG = {
  whatsapp: '254795107114'      // international format, no + or spaces
};

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
const err = document.getElementById('form-err');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const needs = d.getAll('need');
    const required = ['business', 'type', 'location', 'phone'];
    const ok = required.every((k) => String(d.get(k)).trim()) && needs.length > 0;
    if (err) err.hidden = ok;
    if (!ok) return;

    const text = [
      'Hi Herman, I would like a website.',
      `Business: ${d.get('business')}`,
      `Type: ${d.get('type')}`,
      `Location: ${d.get('location')}`,
      `My WhatsApp: ${d.get('phone')}`,
      `Need: ${needs.join(', ')}`,
      'Came from: the OnlineWorker Studio site'
    ].join('\n');

    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
