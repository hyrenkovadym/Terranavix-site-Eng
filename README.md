# TerraNavix Landing Page

**Subtitle:** Responsive React + Vite landing page for an agrotechnology product.

## Project Overview
This repository contains an employer-facing frontend portfolio project for the TerraNavix autosteer product concept.

It focuses on building a clean, production-ready marketing landing page with React + Vite, responsive layout patterns, reusable components, accessibility basics, SEO fundamentals, and static hosting deployment support.

## Product & Business Context
TerraNavix is presented as an autosteer guidance solution for agriculture operations.

The landing page communicates:
- product value for field operations;
- component/kit overview;
- operational use cases;
- outcome-focused ROI messaging;
- contact request workflow.

## What This Project Demonstrates
- React component-driven UI architecture
- Vite-based frontend tooling and build pipeline
- Responsive design across desktop/tablet/mobile
- Reusable section components for landing pages
- Contact form integration using a static-friendly form service
- SEO-ready page metadata and social tags
- Accessibility-oriented semantic markup and focus states
- Static hosting readiness for cPanel/Apache deployments
- Portfolio-quality technical documentation

## Main Features
- Sticky header with mobile-friendly navigation
- Hero section with clear CTA and product framing
- Benefits, kit overview, field comparison, use cases, and results sections
- Contact section with validation and async submit handling
- Keyboard-accessible interactive kit cards
- Environment-variable-based contact configuration
- SPA hosting fallback support (`404.html` + `.htaccess` rewrite rules)

## Tech Stack
- React 19
- Vite 7
- JavaScript (ES Modules)
- CSS (custom, lightweight, no heavy UI framework)
- ESLint 9
- GitHub Actions (CI)

## Project Structure
```text
.
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ docs/
│  ├─ ARCHITECTURE.md
│  └─ ROADMAP.md
├─ public/
│  ├─ .htaccess
│  ├─ favicon assets
│  ├─ site.webmanifest
│  └─ terranavix-og-image.png
├─ scripts/
│  └─ prepare-hosting.mjs
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Benefits.jsx
│  │  ├─ ProductOverview.jsx
│  │  ├─ FieldComparison.jsx
│  │  ├─ UseCases.jsx
│  │  ├─ Results.jsx
│  │  ├─ ContactForm.jsx
│  │  └─ Footer.jsx
│  ├─ data/
│  │  ├─ content.js
│  │  └─ siteConfig.js
│  ├─ styles/
│  │  ├─ global.css
│  │  └─ components.css
│  ├─ App.jsx
│  └─ main.jsx
├─ CHANGELOG.md
├─ SECURITY.md
├─ index.html
├─ package.json
├─ server.js
└─ vite.config.js
```

## Page Sections Overview
- Header: sticky nav with section anchors and mobile menu
- Hero: value proposition + primary CTA
- Benefits: reasons to choose the product
- Product Overview: kit components with interactive preview
- Field Comparison: manual driving vs autosteer outcomes
- Use Cases: seasonal/agronomic scenarios
- Results: efficiency and operator-focused outcomes
- Contact: sales/contact card + validated request form
- Footer: summary and quick navigation links

## Local Setup
### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create `.env` from `.env.example` and set values:
```bash
VITE_CONTACT_FORM_ENDPOINT=
VITE_CONTACT_EMAIL=
VITE_CONTACT_NAME=TerraNavix Sales Team
VITE_CONTACT_PHONE=
```

Notes:
- If `VITE_CONTACT_FORM_ENDPOINT` is empty but `VITE_CONTACT_EMAIL` is set, the app falls back to `https://formsubmit.co/ajax/<email>`.
- For production use, set at least one of:
  - `VITE_CONTACT_FORM_ENDPOINT`
  - `VITE_CONTACT_EMAIL`

### 3. Start development server
```bash
npm run dev
```

## Build Commands
### Production bundle
```bash
npm run build
```
Output goes to `dist/`.

### Hosting-oriented build (keeps current behavior)
```bash
npm run build:hosting
```
This command:
- builds the app to `dist/`;
- copies `dist/index.html` to `dist/404.html` for SPA fallback.

### Optional local production preview
```bash
npm run preview
```

### Optional Node static serving mode
```bash
npm run start
```
Serves `dist/` when present and falls back to SPA routing.

## Static Hosting / cPanel / Apache Deployment
1. Run hosting build:
```bash
npm run build:hosting
```
2. Open your hosting file manager (or FTP/SFTP).
3. Go to your web root (`public_html` or equivalent).
4. Upload the **contents of `dist/`** (not the folder itself).
5. Ensure `.htaccess` is present in the uploaded root.
6. Hard refresh the browser (`Ctrl + F5`) after deploy.

### SPA fallback details
- Apache rewrite rules are provided in `public/.htaccess`.
- `build:hosting` also creates `404.html` fallback for static hosts that use it.

### Deploying to a subfolder
If deploying under a subpath (for example `/terranavix/`), set `base` in `vite.config.js` accordingly before building.

## Contact Form Configuration
The contact form uses `fetch` to submit JSON to a configured endpoint.

Recommended options:
1. Use custom endpoint:
```bash
VITE_CONTACT_FORM_ENDPOINT=https://your-form-handler.example/api/contact
```
2. Use FormSubmit with email fallback:
```bash
VITE_CONTACT_EMAIL=your-public-contact@example.com
```

Security note:
- Do not place private/internal personal emails in source files.
- Keep secrets out of Vite-exposed variables (`VITE_*` is public at build time).

## SEO, Accessibility, and Performance Notes
### SEO
- Meaningful `<title>` and `<meta name="description">`
- Open Graph and Twitter card metadata
- Canonical URL placeholder ready to replace
- Semantic section structure with clear headings

### Accessibility basics
- Semantic `header`, `nav`, `main`, `section`, `article`, `footer`
- Keyboard-accessible controls and visible focus styles
- Skip link for keyboard users
- Form labels and status messaging with ARIA roles

### Performance-conscious choices
- No heavy UI framework
- Componentized rendering and lightweight custom CSS
- Static asset bundling via Vite
- Hosting-friendly static output

## Screenshots / Demo
Add your own preview assets before sharing with employers:
- `docs/screenshots/desktop-home.png`
- `docs/screenshots/mobile-home.png`
- `docs/screenshots/contact-section.png`

Optional links to include:
- Live demo URL
- Lighthouse report screenshot

## Future Improvements
See [docs/ROADMAP.md](docs/ROADMAP.md) for planned improvements:
- content management workflow
- multilingual expansion
- better validation and analytics
- accessibility and Lighthouse automation

## Portfolio Summary: What This Project Demonstrates To Employers
This project demonstrates the ability to deliver a polished frontend landing page as a real product asset:
- structured React component architecture;
- responsive and accessible UI implementation;
- practical SEO and deployment readiness;
- clean documentation and maintainable project organization;
- CI integration for baseline code quality checks.

Main message:

> "I built a responsive React + Vite landing page with clean component structure, static hosting deployment support, accessibility/SEO basics, and professional documentation."
