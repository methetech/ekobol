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
- [x] Internationalization (i18n) Setup (TR/EN, `i18next`, `react-i18next`, `i18next-http-backend`) - *MagicBento cards fixed, Pricing page still requires debugging*
- [x] HomePage (`index.html`) Migration to React Component (`HomePage.js`)

## Phase 3: Advanced Visuals & Optimization (In Progress/Next)

- [x] Debug and resolve i18n translation issues on the Pricing page.
- [x] Header & Footer Component Creation
- [x] TailwindCSS CDN Integration into `public/index.html`
- [x] Image Loading Fixes (`wallet-before.webp`, `wallet-after.webp` moved to `public`)
- [x] Text Readability Fixes (conflicting Tailwind classes resolved in `HomePage.js`)
- [x] Automation Nexus Section (Implemented 3D interactive lab environment with `react-three-fiber`, default theme set to 'retro', styling adjusted for consistency, OrbitControls fix applied, unused import removed)
- [ ] Conduct internet research for cutting-edge web technologies and visual effects.
- [x] Implement React Router for navigation between pages
- [x] Convert remaining static HTML pages to React components and integrate into routing
- [ ] Integrate dynamic data (if applicable) and API calls
- [x] Update 'Automation Nexus' title and Footer copyright information.
- [ ] Integrate professional icons into MagicBento cards.
- [x] Address ESLint warnings.
- [x] Reorder HomePage sections and apply glass effect to Footer.
- [x] Address remaining ESLint warnings.

## Phase 4: System Refinement & Tooling Improvement

- **Goal:** Develop a more robust and flexible method for replacing large, dynamic content blocks in React components, especially those utilizing i18n `t('...')` calls.
- **Reason:** Current `replace` tool is too brittle for such scenarios, leading to repeated failures and wasted cycles.
- **Action Items:**
    - **VALIDATED:** The strategy of using `read_file` + manual string manipulation + `write_file` has proven effective for complex content replacement. This approach will be prioritized for similar future tasks.
    - Explore alternative programmatic content manipulation techniques (e.g., string slicing, AST manipulation).
    - Implement a custom tool or script for targeted section replacement that is resilient to minor whitespace or i18n call variations.
    - Prioritize this for future development to prevent similar issues.
    - [x] Implement GitHub Pages deployment.
    - [x] Revert i18n loadPath and deploy script for GitHub Pages.
    - [x] Correct GitHub Pages deployment configuration (homepage, logo link, i18n loadPath, i18n language fallback, footer logo path, index.html base tag, BrowserRouter basename, BrowserRouter closing tag fix, BrowserRouter import fix).
    - [x] Configure custom domain (ekobol.com) for GitHub Pages.
