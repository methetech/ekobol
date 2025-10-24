document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop();
    const isEnglish = pageName.includes('_en.html');

    // This function runs AFTER the header has been loaded into the page.
    function initializeHeaderFeatures() {

        // --- Element Selectors ---
        const demoButton = document.getElementById('demo-mode-strip');
        // Desktop elements
        const navLoggedOut = document.getElementById('nav-logged-out');
        const navLoggedIn = document.getElementById('nav-logged-in');
        const actionsLoggedOut = document.getElementById('actions-logged-out');
        const actionsLoggedIn = document.getElementById('actions-logged-in');
        
        // Mobile elements (ensure we are querying within the mobile menu)
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLoggedOut = mobileMenu.querySelector('#mobile-nav-logged-out');
        const mobileNavLoggedIn = mobileMenu.querySelector('#mobile-nav-logged-in');
        const mobileSignup = mobileMenu.querySelector('#mobile-signup-button');
        const mobileLogin = mobileMenu.querySelector('#mobile-login-link');
        const mobileLogout = mobileMenu.querySelector('#mobile-logout-button');

        // Check if all essential elements exist before proceeding
        if (!demoButton || !navLoggedOut || !navLoggedIn || !actionsLoggedOut || !actionsLoggedIn || !mobileNavLoggedOut || !mobileNavLoggedIn) {
            console.error("Header initialization failed: One or more essential header elements could not be found in the DOM.");
            return;
        }

        /**
         * The single source of truth for updating the UI based on demo mode state.
         * @param {boolean} isDemoActive - True if demo mode is on.
         */
        function updateUiForDemoState(isDemoActive) {
            // --- Visitor View (Demo OFF) ---
            navLoggedOut.classList.toggle('md:flex', !isDemoActive); // Use md:flex to show on desktop
            navLoggedOut.classList.toggle('hidden', isDemoActive);
            actionsLoggedOut.classList.toggle('md:flex', !isDemoActive);
            actionsLoggedOut.classList.toggle('hidden', isDemoActive);
            
            // Mobile Visitor View
            mobileNavLoggedOut.classList.toggle('hidden', isDemoActive);
            mobileSignup.classList.toggle('hidden', isDemoActive);
            mobileLogin.classList.toggle('hidden', isDemoActive);

            // --- Logged-in View (Demo ON) ---
            navLoggedIn.classList.toggle('md:flex', isDemoActive);
            navLoggedIn.classList.toggle('hidden', !isDemoActive);
            actionsLoggedIn.classList.toggle('md:flex', isDemoActive);
            actionsLoggedIn.classList.toggle('hidden', !isDemoActive);
            
            // Mobile Logged-in View
            mobileNavLoggedIn.classList.toggle('hidden', !isDemoActive);
            mobileLogout.classList.toggle('hidden', !isDemoActive);


            // --- Update Demo Button Text and Style ---
            demoButton.classList.remove('hidden'); // Ensure it's always visible
            if (isDemoActive) {
                demoButton.textContent = isEnglish ? 'Demo Mode: ON' : 'Demo Modu: AÇIK';
                demoButton.style.backgroundColor = 'var(--primary-color)';
                demoButton.style.color = 'white';
            } else {
                demoButton.textContent = isEnglish ? 'Activate Demo' : 'Demoyu Etkinleştir';
                demoButton.style.backgroundColor = '#e5e7eb'; // A neutral gray color
                demoButton.style.color = 'var(--text-primary-color)';
            }
        }

        // --- Event Listener for the Demo Button ---
        demoButton.addEventListener('click', () => {
            let isDemo = sessionStorage.getItem('isDemoModeActive') === 'true';
            // Flip the state
            isDemo = !isDemo;
            sessionStorage.setItem('isDemoModeActive', isDemo);
            updateUiForDemoState(isDemo);
        });

        // --- Set the Initial State on Page Load ---
        const initialDemoState = sessionStorage.getItem('isDemoModeActive') === 'true';
        updateUiForDemoState(initialDemoState);

        
        // --- General Header Features (Mobile Menu, Theme, Language) ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function closeMenu() {
            if (mobileMenu) mobileMenu.classList.add('translate-x-full');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('opacity-100');
                setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
            }
        }
        if (mobileMenuButton) mobileMenuButton.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('translate-x-full');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('hidden');
                setTimeout(() => mobileMenuOverlay.classList.add('opacity-100'), 10);
            }
        });
        if (closeMobileMenuButton) closeMobileMenuButton.addEventListener('click', closeMenu);
        if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

        // Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeIconSun = document.getElementById('theme-icon-sun');
        const themeIconMoon = document.getElementById('theme-icon-moon');
        function setTheme(theme) {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            localStorage.setItem('theme', theme);
            if (themeIconSun && themeIconMoon) {
                themeIconSun.classList.toggle('hidden', theme === 'dark');
                themeIconMoon.classList.toggle('hidden', theme !== 'dark');
            }
        }
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
                setTheme(currentTheme);
            });
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            setTheme(savedTheme);
        }

        // Language Switcher Logic
        const langEnLink = document.getElementById('lang-en-link');
        const langTrLink = document.getElementById('lang-tr-link');
        if (langEnLink && langTrLink) {
            let trPage = pageName.replace('_en.html', '.html');
            let enPage = isEnglish ? pageName : pageName.replace('.html', '_en.html');
            if (pageName === 'index_en.html') trPage = 'index.html';
            if (pageName === 'index.html') enPage = 'index_en.html';
            
            langTrLink.href = trPage;
            langEnLink.href = enPage;

            if (isEnglish) {
                langEnLink.style.fontWeight = 'bold';
                langEnLink.style.color = 'var(--text-primary-color)';
                langTrLink.style.fontWeight = 'normal';
                langTrLink.style.color = 'var(--text-secondary-color)';
            } else {
                langTrLink.style.fontWeight = 'bold';
                langTrLink.style.color = 'var(--text-primary-color)';
                langEnLink.style.fontWeight = 'normal';
                langEnLink.style.color = 'var(--text-secondary-color)';
            }
        }
    }

    // --- Main Execution Logic ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        const headerFile = isEnglish ? 'header_en.html' : 'header.html';
        fetch(headerFile)
            .then(response => response.ok ? response.text() : Promise.reject(`Failed to load ${headerFile}`))
            .then(html => {
                headerPlaceholder.innerHTML = html;
                initializeHeaderFeatures();
            })
            .catch(error => console.error('Error loading header:', error));
    }

    if (footerPlaceholder) {
        const footerFile = isEnglish ? 'footer_en.html' : 'footer.html';
        fetch(footerFile)
            .then(response => response.ok ? response.text() : Promise.reject(`Failed to load ${footerFile}`))
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});