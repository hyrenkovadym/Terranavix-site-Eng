# Architecture

## Overview
TerraNavix Landing Page is a client-side React + Vite application designed as a static-hosting-friendly product landing page.

The architecture prioritizes:
- clear section-based component composition;
- lightweight styling without UI frameworks;
- simple content/config separation;
- static deployment compatibility.

## Vite App Structure
- `src/main.jsx`: entry point, mounts React app and global/component styles
- `src/App.jsx`: top-level orchestration (state, handlers, section composition)
- `src/components/*`: reusable section-level UI components
- `src/data/content.js`: translatable content object and form defaults
- `src/data/siteConfig.js`: runtime-safe environment configuration for contact settings
- `src/styles/global.css`: tokens, resets, typography, focus/skip-link foundation
- `src/styles/components.css`: section-level and responsive styling

## Component Structure
- `Header`: sticky navigation with mobile toggle
- `Hero`: hero message, bullets, CTA, and media preview
- `Benefits`: product value cards
- `ProductOverview`: kit list and interactive image switcher
- `FieldComparison`: before/after operational comparison
- `UseCases`: operation-specific scenario cards
- `Results`: ROI/outcome cards
- `ContactForm`: validated form + contact card + async submit status
- `Footer`: quick links and project summary text

## Content and Data Organization
- `content.js` stores UI strings and section copy, including locale blocks (`en`, `uk`, `ru`).
- `siteConfig.js` resolves environment values for contact settings.

This split keeps:
- product copy editable without touching UI logic;
- private contact details out of hardcoded source values.

## Styling Approach
- CSS variables define design tokens (colors, spacing behavior, focus ring style).
- Global styles handle reset, fonts, skip link, accessibility defaults.
- Component styles are section-oriented and responsive via media queries.
- No CSS-in-JS or heavy UI dependency added.

## Contact Form Flow
1. User fills fields in `ContactForm`.
2. `App.jsx` validates required fields and email format.
3. Submission endpoint is resolved from:
   - `VITE_CONTACT_FORM_ENDPOINT`, or
   - fallback `https://formsubmit.co/ajax/<VITE_CONTACT_EMAIL>`
4. JSON payload is sent via `fetch`.
5. UI shows success or error status message.

## Static Hosting Flow
1. `npm run build` produces `dist/` bundle via Vite.
2. `npm run build:hosting` runs build + `scripts/prepare-hosting.mjs`.
3. Hosting script creates `dist/404.html` as SPA fallback artifact.
4. `public/.htaccess` is copied into `dist/` and enables Apache rewrite fallback.

## Architecture Diagram (Text)
```text
Browser
  -> index.html
    -> /src/main.jsx
      -> App.jsx (state + handlers)
        -> Header
        -> Hero
        -> Benefits
        -> ProductOverview
        -> FieldComparison
        -> UseCases
        -> Results
        -> ContactForm
        -> Footer

Data Sources
  -> src/data/content.js (UI content)
  -> src/data/siteConfig.js (env-driven contact config)

Build & Deploy
  -> Vite build -> dist/
  -> prepare-hosting.mjs -> dist/404.html
  -> public/.htaccess -> Apache SPA fallback
```

## Current Limitations
- Form handling uses a third-party endpoint and does not include server-side validation in this repository.
- Large image/video assets can affect initial payload size; additional media optimization is recommended.
- Locale switching is auto-detected only; no manual language switcher UI yet.
- Canonical/OG URLs are placeholders until a live domain is assigned.
