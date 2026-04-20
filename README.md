# TerraNavix Landing

React + Vite landing page for TerraNavix.

## Local run

```bash
npm install
npm run dev
```

## Build for hosting account (cPanel/Apache/static hosting)

```bash
npm run build:hosting
```

After this command:

- Production files are in `dist/`
- `dist/404.html` is created for fallback
- `.htaccess` is included in `dist/` for Apache rewrite/cache rules

## Upload to your hosting

1. Open your hosting file manager (or FTP).
2. Go to your site root folder (usually `public_html`).
3. Upload **contents of `dist/`** (not the `dist` folder itself).
4. If asked, overwrite existing files.
5. Open your domain and hard refresh (`Ctrl + F5`).

## If your hosting forces Node.js launch mode

Use command:

```bash
node server.js
```

This repository includes a production-ready `server.js` that serves `dist/` and supports SPA fallback to `index.html`.

## Notes

- Form requests are sent to `w.cheyney@frendt.ua` via FormSubmit.
- If the site is hosted in a subfolder (not root), update `vite.config.js` `base` option.
