# OnlineWorker Studio

Landing page for a Nairobi web design studio. Plain HTML, CSS and JavaScript, no build step.

## Structure
```
index.html
assets/
  css/styles.css   design tokens at the top (:root)
  js/main.js       CONFIG (WhatsApp number, price) and form handler
  img/favicon.svg
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```

## Configure
- WhatsApp number and price: `CONFIG` in `assets/js/main.js`
- Colours and fonts: `:root` in `assets/css/styles.css`
- Concept cards: each `<article class="card" data-theme="...">` in `index.html`; theme colours are in the CSS

## Deploy to the subdomain
Any static host works (Vercel, Netlify, GitHub Pages, cPanel). Point `studio.onlineworker.online` at it with a CNAME record.

## To do
- Set the real price
- Add a testimonial about a website (not invented)
- Build full demo pages for each concept
- Add `og-image.png` and Open Graph tags
