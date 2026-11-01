# jotly-web

Landing page for **Jotly** — quick expense tracker for iPhone — at [jotly.info](https://jotly.info).

Plain static site, no build step:

```
index.html      page markup (sections + app screen mockups)
css/styles.css  design tokens and styles
js/main.js      EN/RU language switch, interactive quick-jot demo, screen charts
favicon.ico     browser tab icon (16/32/48)
icons/          PNG tab icons, Apple touch icon, 192/512 icons
site.webmanifest
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

Any static host works (GitHub Pages, Netlify, Cloudflare Pages). Point the host at the repo root.

## Translations

All site copy lives in the `T` object at the top of `js/main.js` (`en`, `ru` and `es`). Elements use `data-i18n="key"` (text) or `data-i18n-html="key"` (markup). The chosen language is remembered in `localStorage`; first visit follows the browser language.
