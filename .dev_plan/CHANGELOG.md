# CHANGELOG

All significant changes made to the `ekobol.com` project will be documented here.

## [2025-10-30] - Global Visual Overhaul & Workflow Component Redesign

- **REMOVED:** The performance-heavy WebGL-based `Prism` background component.
- **ADDED:** A new, lightweight, CSS-based `AnimatedBackground` component to provide a global, theme-aware animated background.
    - **MODIFIED:** `App.js` was updated to import and render the `AnimatedBackground` component.
    - **REMOVED:** Unused `global-prism-background` CSS rules from `App.css`.
    - **FIXED:** High GPU usage and temperature issues caused by the previous `Prism` component.
- **FIXED:** ESLint warnings in `HomePage.js` by removing unused `useContext` and `ThemeContext` imports.
- **ADDED:** Implemented a global, theme-aware prism background across the entire application.
    - **MODIFIED:** `App.js` was refactored to manage a single `Prism` component instance, making it persistent across all pages. The background's `hueShift` is now dynamically linked to the active theme via `ThemeContext`.
    - **ADDED:** New CSS rules in `App.css` to make the global prism background `position: fixed` and ensure it sits behind all other content (`z-index: -1`).
    - **MODIFIED:** `HomePage.js` was stripped of its local `Prism` instance and hardcoded section backgrounds were removed to allow the global background to show through.
- **REMOVED:** The overly complex and visually cluttered `MagicBento` component has been completely removed.
- **ADDED:** A new, redesigned `MagicBento.js` component was created from scratch with a focus on clarity, visual appeal, and a logical representation of the Ekobol workflow (Forge, Amplify, Dominate).
    - The new component uses a clean CSS Grid layout to ensure all cards are perfectly aligned and uniformly sized.
    - It features elegant, GSAP-animated SVG lines connecting the workflow stages, providing a clear visual flow.
    - The chaotic particle, tilt, and magnetism effects were removed in favor of subtle, purposeful hover animations.
    - Cards now use the `GlassSurface` component for a modern, "frosted glass" look that enhances readability over the dynamic background.
- **ADDED:** New CSS styles in `App.css` to support the redesigned `MagicBento` grid layout and the animated SVG connections.
- **FIXED:** The misaligned, inconsistently sized card layout in the "Automation Nexus" section, as highlighted in the user's screenshot.

## [2025-10-29] - MagicBento Component Visual & Layout Fixes

- **ADDED:** `--accent-primary-rgb` CSS variable to all themes in `frontend/src/themes.css` for consistent accent color usage in JavaScript.
- **MODIFIED:** `frontend/src/components/MagicBento.js` to:
    - Use `var(--text-primary)` for card text color for theme compatibility.
    - Increase card minimum height (`min-h-[250px]`) and grid gap (`gap-4`) for better spacing.
    - Remove `text-clamp-1` and `text-clamp-2` classes to prevent text truncation.
    - Implement a placeholder `card-workflow-line` for future workflow visualization.
- **FIXED:** Initial display issues of the `MagicBento` component, improving text readability and card layout.

## [2025-10-29] - Automation Nexus Section Revamp with MagicBento

- **ADDED:** Installed `gsap` library for animations.
- **REMOVED:** Old `AutomationNexus.js` and `AutomationNexus3D.js` components.
- **REMOVED:** Related CSS animations from `frontend/src/App.css`.
- **ADDED:** New `MagicBento.js` component in `frontend/src/components/`, showcasing a multi-functional, AI-powered automation system.
- **MODIFIED:** `HomePage.js` to replace `AutomationNexus3D` with the new `MagicBento` component.
- **MODIFIED:** `frontend/src/App.css` to include styling for the `MagicBento` component, adapted for theme compatibility.
- **MODIFIED:** `frontend/public/locales/en/home.json` and `frontend/public/locales/tr/home.json` to update translation keys for the new Automation Nexus section and remove old `nexus_` keys.

## [2025-10-29] - Automation Nexus 3D Component Fix (Unused Import)

- **FIXED:** Removed unused `extend` import from `@react-three/fiber` in `AutomationNexus3D.js` to resolve `no-unused-vars` warning.

## [2025-10-29] - Automation Nexus 3D Component Fix

- **FIXED:** `AutomationNexus3D.js` to correctly use `OrbitControls` from `@react-three/drei` by removing the unnecessary `extend` call and using the component directly.

## [2025-10-29] - Automation Nexus Section Overhaul (3D Implementation & Theme Change)

- **ADDED:** `three` and `@react-three/fiber` libraries for 3D rendering.
- **REMOVED:** Old `AutomationNexus.js` component.
- **ADDED:** New `AutomationNexus3D.js` component in `frontend/src/components/` for an interactive 3D lab environment.
- **MODIFIED:** `HomePage.js` to replace `AutomationNexus` with `AutomationNexus3D` component.
- **MODIFIED:** `frontend/src/ThemeContext.js` to change the default theme to 'retro'.
- **MODIFIED:** `public/locales/tr/home.json` and `public/locales/en/home.json` to update translation keys for `AutomationNexus3D`, removing old workflow selection keys and adding `nexus_select_workflow_3d`.
- **MODIFIED:** `frontend/src/App.css` to remove previous `AutomationNexus` animations and add new CSS animations for `AutomationNexus3D`.

## [2025-10-29] - Automation Nexus Section Styling Adjustment

- **MODIFIED:** `frontend/src/components/AutomationNexus.js` to align its styling (background, heading sizes, ModuleNode appearance) with the overall landing page aesthetic.
- **MODIFIED:** `frontend/src/App.css` to include new CSS animations (`spin-slow-nexus`, `spin-reverse-slow-nexus`, `pulse-light`, `marquee`, `line-flow`) for the `AutomationNexus` component.
- **MODIFIED:** `HomePage.js` to replace `AutomationCore` with `AutomationNexus` component.
- **MODIFIED:** `public/locales/tr/home.json` and `public/locales/en/home.json` to replace `automation_core_` translation keys with `nexus_` keys and add new translation keys for the `AutomationNexus` component.

## [2025-10-29] - AI Playground Section Overhaul (Successful Implementation)

- **REMOVED:** The old "AI Playground Section" from `HomePage.js`.
- **ADDED:** A new `AutomationCore.js` component in `frontend/src/components/` to replace the old section. This component features an interactive, visually striking representation of Ekobol's automation capabilities.
- **MODIFIED:** `frontend/src/App.css` to include necessary CSS animations (`pulse-slow`, `spin-slow`, `spin-reverse-slow`, `flow-X`) for the `AutomationCore` component.
- **MODIFIED:** `HomePage.js` to import and render the new `AutomationCore` component.
- **MODIFIED:** `public/locales/tr/home.json` and `public/locales/en/home.json` to include new translation keys (`automation_core_title`, `automation_core_subtitle`, `automation_core_cta`) for the `AutomationCore` component.
- **STRATEGY VALIDATED:** The approach of using `read_file` for content extraction and `write_file` for content replacement (after manual manipulation) proved effective for complex, dynamic sections where the `replace` tool was too brittle.

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