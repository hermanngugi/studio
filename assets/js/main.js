'use strict';

/* Edit these values to configure the site. */
const CONFIG = {
  whatsapp: '254795107114',      // international format, no + or spaces
  price: 'From KES XX,XXX'       // replace once pricing is decided
};

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('[data-price]').textContent = CONFIG.price;

const form = document.getElementById('lead-form');
const err = document.getElementById('form-err');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const needs = d.getAll('need');
  const required = ['business', 'type', 'location', 'phone'];
  const ok = required.every((k) => String(d.get(k)).trim()) && needs.length > 0;
  err.hidden = ok;
  if (!ok) return;

  const text = [
    'Hi Herman, I would like a website.',
    `Business: ${d.get('business')}`,
    `Type: ${d.get('type')}`,
    `Location: ${d.get('location')}`,
    `My WhatsApp: ${d.get('phone')}`,
    `Need: ${needs.join(', ')}`
  ].join('\n');

  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
