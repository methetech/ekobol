# PROJECT ROADMAP

This document outlines the planned development steps for `ekobol.com`.

## Phase 1: Static HTML Refactoring & Initial Visual Overhaul (Completed)

- [x] Setup & Design System (Asphalt & Bone theme, initial CSS variables)
- [x] CSS Refactoring (for static HTML files like `index.html`, `header.html`, `footer.html`)
- [x] Component-Level Styling (for static HTML files)
- [x] Interactivity Boost (for static HTML files, e.g., demo button fix)
- [x] Typography (initial font setup for static HTML files)

## Phase 2: React Application Migration & Core Feature Implementation (Completed)

- [x] Project Scaffolding (Create React App setup in `frontend/`)
- [x] Multi-Theme System Implementation (12 themes, CSS variables, React Context)
- [ ] Internationalization (i18n) Setup (TR/EN, `i18next`, `react-i18next`, `i18next-http-backend`) - *Requires further debugging for Pricing page*
- [x] HomePage (`index.html`) Migration to React Component (`HomePage.js`)

## Phase 3: Advanced Visuals & Optimization (In Progress/Next)

- [ ] Debug and resolve i18n translation issues on the Pricing page.
- [x] Header & Footer Component Creation
- [x] TailwindCSS CDN Integration into `public/index.html`
- [x] Image Loading Fixes (`wallet-before.webp`, `wallet-after.webp` moved to `public`)
- [x] Text Readability Fixes (conflicting Tailwind classes resolved in `HomePage.js`)

## Phase 3: Advanced Visuals & Optimization (In Progress/Next)

- [ ] Conduct internet research for cutting-edge web technologies and visual effects.
- [x] Implement "Crazy Cool" 3D Effects (e.g., Three.js, react-three-fiber for subtle background animations)
- [ ] Further performance optimizations and code splitting
- [x] Implement React Router for navigation between pages
- [x] Convert remaining static HTML pages to React components and integrate into routing
- [ ] Integrate dynamic data (if applicable) and API calls