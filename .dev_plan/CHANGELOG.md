# CHANGELOG

All significant changes made to the `ekobol.com` project will be documented here.

## [2025-10-29] - Pricing Page i18n Debugging

- **FIXED:** Added `Array.isArray` checks to `Pricing.js` to prevent crashes when translation keys do not return arrays.
- **MODIFIED:** Wrapped `App` component with `I18nextProvider` in `index.js` to explicitly provide the `i18n` instance.
- **FIXED:** Corrected `i18n` import in `Pricing.js` to import from `../i18n` instead of `react-i18next`.
- **DEBUG:** Added `console.log` statements to `Pricing.js` to inspect `i18n.isInitialized` and translation key values.
- **ISSUE:** Translations on the Pricing page are still not being displayed correctly, indicating a deeper issue with i18n loading or processing.

## [2025-10-29] - Routing and Page Implementation

- **ADDED:** Installed `react-router-dom` to handle client-side routing.
- **ADDED:** Created new page components in `frontend/src/pages/`: `Solutions.js`, `Pricing.js`, `Resources.js`, `About.js`, and `Contact.js`.
- **MODIFIED:** Migrated content from the corresponding static HTML files (`solutions.html`, `pricing.html`, etc.) into the new React page components.
- **MODIFIED:** Updated `public/locales/tr/translation.json` and `public/locales/en/translation.json` with the text content for all the new pages.
- **MODIFIED:** Refactored `App.js` to implement the main routing structure using `<BrowserRouter>`, `<Routes>`, and `<Route>`, mapping paths to their respective page components.
- **MODIFIED:** Updated `Header.js` to replace placeholder buttons with `react-router-dom`'s `<Link>` components for seamless client-side navigation.
- **ADDED:** Added "About" and "Contact" links to the main navigation in `Header.js`.
- **FIXED:** Corrected translation keys in `Header.js` for "About" and "Contact" links.

## [2025-10-29] - React Application Migration & Core Feature Implementation

- **ADDED:** Initialized React application in the `frontend/` directory.
- **ADDED:** Implemented a robust multi-theme system with 12 color schemes (including 'asfalt-kemik', light, dark) using CSS variables and React Context API.
- **ADDED:** Integrated Internationalization (i18n) support using `i18next`, `react-i18next`, and `i18next-http-backend` for TR (default) and EN languages.
- **MODIFIED:** Migrated the static `index.html` content into a dynamic `HomePage.js` React component, converting HTML to JSX.
- **MODIFIED:** Extracted all hardcoded Turkish text from `HomePage.js` into `public/locales/tr/translation.json` and created `public/locales/en/translation.json` for English translations.
- **ADDED:** Created `Header.js` and `Footer.js` placeholder components for application layout.
- **MODIFIED:** Rebuilt `App.js` to serve as the main application layout, integrating `Header`, `HomePage`, and `Footer`.
- **MODIFIED:** Injected TailwindCSS CDN and configuration into `frontend/public/index.html` for styling.
- **FIXED:** Resolved `reportWebVitals` ESLint error by removing the problematic call in `frontend/src/index.js`.
- **FIXED:** Installed missing `aos` (Animate On Scroll) library dependency.
- **FIXED:** Corrected image loading issues by moving `wallet-before.webp` and `wallet-after.webp` to `frontend/public/`.
- **FIXED:** Addressed text readability issues in `HomePage.js` by replacing conflicting Tailwind classes with theme-driven CSS variables for better contrast.

## [2025-10-27 15:00] - Visual Overhaul & Refactoring

- **MODIFIED:** Changed the entire color scheme to "Asphalt & Bone" (monochrome) based on user feedback.
- **MODIFIED:** Updated `design_system.css` with the new monochrome color palette.
- **MODIFIED:** Refactored `index.html` to remove all legacy `var()` usages and align with the new theme.
- **MODIFIED:** Refactored `header.html` to remove all legacy `var()` usages and align with the new theme.
- **MODIFIED:** Refactored `header_en.html` to remove all legacy `var()` usages and align with the new theme.
- **MODIFIED:** Refactored `footer.html` to remove all legacy `var()` usages and align with the new theme.
- **MODIFIED:** Refactored `footer_en.html` to remove all legacy `var()` usages and align with the new theme.
- **FIXED:** Corrected the unreadable "Demo Modu" button text color in `app.js`.
- **FIXED:** Resolved the "Logout" button color inconsistency by restyling it to a neutral monochrome in `header.html` and `header_en.html`.
- **MODIFIED:** Cleaned up `global.css` by removing the legacy CSS variable mapping layer and replacing all `var()` usages with direct hex codes.
- **ADDED:** Integrated AOS (Animate On Scroll) library into `index.html` and `index_en.html`.
- **ADDED:** Applied `data-aos="fade-up"` to main sections in `index.html` and `index_en.html` for scroll animations.

## [2025-10-27 13:30] - Initial Setup

- **ADDED:** Created the `.dev_plan` directory to serve as a private workspace for planning and context management.
- **ADDED:** Created `ROLE.md` to define the AI's role, project context, and mission.
- **ADDED:** Created `ROADMAP.md` to outline the short-term and long-term development plan.
- **ADDED:** Created `CHANGELOG.md` to track all future changes.
- **ADDED:** Created `.gitignore` file and added `.dev_plan/` to it to prevent the private workspace from being committed to the public repository.

## [2025-10-27 13:40] - Color System Implementation

- **ADDED:** Created `design_system.css` to house the new "Ekobol Genesis" design tokens.
- **ADDED:** Defined the new dark theme color palette as CSS variables.
- **MODIFIED:** Updated `global.css` to use an adapter pattern, mapping new color variables to the legacy variable names for backward compatibility.
- **MODIFIED:** Updated `index.html` to link the new `design_system.css` and enable the dark theme via the `data-theme="dark"` attribute.

## [2025-10-27 13:50] - Refactor: index.html

- **MODIFIED:** Refactored the entire `index.html` file, replacing all legacy `var()` color syntax with the new direct Tailwind utility classes (e.g., `bg-void-primary`, `text-text-primary`). This improves code clarity and performance.

## [2025-10-27 14:00] - Refactor: Buttons

- **MODIFIED:** Refactored the primary and secondary buttons on `index.html` to use the "Ekobol Genesis" color system consistently for background, border, text, shadow, and hover states.
- **MODIFIED:** Updated `tailwind.config` to include a darker shade for the primary accent color to be used on hover.

## [2025-10-27 14:05] - Fix: Demo Button Visibility (HTML)

- **FIXED:** Addressed the visibility issue of the "Demoyu Etkinleştir" button by applying appropriate Tailwind utility classes (`bg-void-secondary`, `text-accent-primary`, `hover:bg-accent-primary`, `hover:text-white`) in `header.html` and `header_en.html`.

## [2025-10-27 14:10] - Fix: Demo Button Visibility (app.js)

- **FIXED:** Modified `app.js` to dynamically apply `var(--accent-primary)` and `var(--void-secondary)` for background and text colors of the "Demoyu Etkinleştir" button, ensuring visibility and consistency with the new design system, overriding previous inline styles.

## [2025-10-27 14:15] - Fix: Logout Button Color

- **FIXED:** Refactored the logout button in `header.html` and `header_en.html` to use `bg-system-error` and `hover:bg-system-error-dark` for consistent styling with the new design system.

## [2025-10-27 14:20] - Color Palette Update

- **MODIFIED:** Changed the primary accent color from green to electric blue (`#00CFE9`) based on user feedback.
- **MODIFIED:** Updated `design_system.css` and `tailwind.config` in `index.html` to reflect the new `accent-primary`, `accent-primary-dark`, and `system-success` colors.

## [2025-10-27 14:25] - Logout Button Color Issue

- **ATTEMPTED FIX:** Refactored the logout button in `header.html` and `header_en.html` to use `bg-system-error` and `hover:bg-system-error-dark`.
- **NOTED ISSUE:** User reported the button still appears red, indicating a potential caching or serving issue on the user's end. Further investigation needed.

