document.addEventListener("DOMContentLoaded", function() {

    // --- Core Logic to Load Header and Footer ---

    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    // Determine language based on current page filename suffix
    const isEnglish = currentPage.endsWith('_en.html') || 
                      (currentPage === 'trends.html' && path.includes('_en')); // Handle trends.html if it's the EN version

    const headerFile = isEnglish ? 'header_en.html' : 'header.html';
    const footerFile = isEnglish ? 'footer_en.html' : 'footer.html';

    // Fetch and inject the header
    if (headerPlaceholder) {
        fetch(headerFile)
            .then(response => {
                if (!response.ok) throw new Error(`Header file not found: ${headerFile}`);
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                // Once the header is loaded, run all scripts that depend on it
                initializeHeaderScripts();
            })
            .catch(error => console.error("Header loading failed:", error));
    }

    // Fetch and inject the footer
    if (footerPlaceholder) {
        fetch(footerFile)
            .then(response => {
                if (!response.ok) throw new Error(`Footer file not found: ${footerFile}`);
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Footer loading failed:", error));
    }

    // --- All scripts that depend on header elements go here ---
    function initializeHeaderScripts() {
        
        // 1. THEME SWITCHER LOGIC
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('theme-icon-sun');
        const moonIcon = document.getElementById('theme-icon-moon');

        if (themeToggle) {
            const applyTheme = (theme) => {
                document.body.classList.toggle('dark-mode', theme === 'dark');
                if (sunIcon && moonIcon) {
                    sunIcon.classList.toggle('hidden', theme === 'dark');
                    moonIcon.classList.toggle('hidden', theme !== 'dark');
                }
            };
            
            const toggleTheme = () => {
                const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
                localStorage.setItem('theme', newTheme);
                applyTheme(newTheme);
            };

            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            applyTheme(savedTheme);

            themeToggle.addEventListener('click', toggleTheme);
        }

        // 2. LANGUAGE SWITCHER LOGIC
        const enLink = document.getElementById('lang-en-link');
        const trLink = document.getElementById('lang-tr-link');
        
        if (enLink && trLink) {
            // Determine base page name without language suffix
            let basePageName = currentPage.replace('_en.html', '.html');
            
            // Define all pages (logged-out and logged-in) for robust language switching
            const allPages = [
                'index.html', 'product.html', 'solutions.html', 'resources.html', 'pricing.html', 'about.html',
                'careers.html', 'contact.html', 'cookies.html', 'dynamic-plan.html', 'basic-plan.html',
                'partner-plan.html', 'payment.html', 'privacy.html', 'signup.html', 'login.html',
                'forgot-password.html', 'subscription.html', 'success-stories.html', 'help-center.html', 'blog.html',
                'dashboard.html', 'orders.html', 'products-manage.html', 'marketing-tools.html', 'trends.html', 'finances.html',
                'product-add-edit.html' 
            ];

            const getTargetPage = (originalPage, targetLangIsEnglish) => {
                let targetPage = originalPage;
                const originalBaseName = originalPage.replace('_en.html', '.html');
                
                let foundMatch = false;
                for (const page of allPages) {
                    const pageBaseName = page.replace('_en.html', '.html'); 
                    if (pageBaseName === originalBaseName) { 
                        if (targetLangIsEnglish) {
                            targetPage = pageBaseName.replace('.html', '_en.html'); 
                        } else {
                            targetPage = pageBaseName; // Turkish version
                        }
                        
                        // Handle pages that might not have a distinct _en.html (like trends) if a specific pattern is used
                        if (pageBaseName === 'trends.html' && targetLangIsEnglish && !allPages.includes('trends_en.html')) {
                             targetPage = 'trends.html'; 
                        } else if (pageBaseName === 'trends.html' && !targetLangIsEnglish && allPages.includes('trends.html')) {
                            targetPage = 'trends.html';
                        }
                        
                        // Ensure it points to _en version if it exists
                        if (targetLangIsEnglish && !targetPage.endsWith('_en.html') && allPages.includes(targetPage.replace('.html', '_en.html'))) {
                            targetPage = targetPage.replace('.html', '_en.html');
                        } else if (!targetLangIsEnglish && targetPage.endsWith('_en.html') && allPages.includes(targetPage.replace('_en.html', '.html'))) {
                            targetPage = targetPage.replace('_en.html', '.html');
                        }


                        foundMatch = true;
                        break;
                    }
                }
                
                // Fallback for pages not explicitly listed: just toggle _en suffix
                if (!foundMatch) {
                    if (targetLangIsEnglish && !originalPage.endsWith('_en.html')) {
                        targetPage = originalPage.replace('.html', '_en.html');
                    } else if (!targetLangIsEnglish && originalPage.endsWith('_en.html')) {
                        targetPage = originalPage.replace('_en.html', '.html');
                    }
                }
                return targetPage;
            };

            enLink.href = getTargetPage(currentPage, true);
            trLink.href = getTargetPage(currentPage, false);

            if (isEnglish) {
                enLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
                trLink.classList.remove('font-bold');
            } else {
                trLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
                enLink.classList.remove('font-bold');
            }
        }
        
        // 3. DEMO MODE LOGIC
        initializeDemoMode();
    }
    
    // --- DEMO MODE CORE FUNCTIONS ---
    function initializeDemoMode() {
        const demoModeStrip = document.getElementById('demo-mode-strip');
        const logoLink = document.getElementById('logo-link');

        const navLoggedIn = document.getElementById('nav-logged-in');
        const navLoggedOut = document.getElementById('nav-logged-out');
        const actionsLoggedIn = document.getElementById('actions-logged-in');
        const actionsLoggedOut = document.getElementById('actions-logged-out');

        const loggedInPagesBase = ['dashboard', 'orders', 'products-manage', 'marketing-tools', 'trends', 'finances', 'product-add-edit']; 
        const isCurrentPageLoggedIn = loggedInPagesBase.some(base => 
            currentPage.startsWith(base) || currentPage.startsWith(base.replace('.html', '_en.html'))
        );
        
        const applyLoggedInState = (isLoggedIn) => {
            if (isLoggedIn) { // Currently in DEMO MODE (User is "logged in")
                // Show logged-in navigation
                if (navLoggedOut) navLoggedOut.style.display = 'none';
                if (navLoggedIn) navLoggedIn.style.display = 'flex'; 

                // Hide logged-out actions (login/signup)
                if (actionsLoggedOut) actionsLoggedOut.style.display = 'none';
                // Show logged-in actions (empty currently, but ensures the container itself is visible if needed later)
                if (actionsLoggedIn) actionsLoggedIn.style.display = 'flex'; 

                // Update logo link to dashboard
                if (logoLink) {
                    const dashboardPage = isEnglish ? 'dashboard_en.html' : 'dashboard.html';
                    logoLink.href = dashboardPage;
                }

                // Style demo strip for DEMO MODE (gray) - text indicates action to go back to public
                if (demoModeStrip) {
                    demoModeStrip.classList.remove('bg-[var(--primary-color)]', 'text-white');
                    demoModeStrip.classList.add('bg-gray-200', 'text-[var(--text-primary-color)]');
                    demoModeStrip.textContent = isEnglish ? 'DEMO MODE' : 'ZİYARETÇİ MODU';
                }

                // Redirect if on public index page while in demo mode
                if (currentPage === 'index.html' || currentPage === 'index_en.html') {
                    const redirectPage = isEnglish ? 'dashboard_en.html' : 'dashboard.html';
                    window.location.href = redirectPage;
                }

            } else { // Currently in PUBLIC MODE (User is "logged out")
                // Show logged-out navigation
                if (navLoggedIn) navLoggedIn.style.display = 'none';
                if (navLoggedOut) navLoggedOut.style.display = 'flex'; 

                // Show logged-out actions (login/signup)
                if (actionsLoggedIn) actionsLoggedIn.style.display = 'none'; 
                if (actionsLoggedOut) actionsLoggedOut.style.display = 'flex'; 

                // Update logo link to public index
                if (logoLink) {
                    const indexPage = isEnglish ? 'index_en.html' : 'index.html';
                    logoLink.href = indexPage;
                }

                // Style demo strip for PUBLIC MODE (green) - text indicates action to go to demo mode
                if (demoModeStrip) {
                    demoModeStrip.classList.remove('bg-gray-200', 'text-[var(--text-primary-color)]');
                    demoModeStrip.classList.add('bg-[var(--primary-color)]', 'text-white');
                    demoModeStrip.textContent = isEnglish ? 'PUBLIC MODE' : 'DEMO MODU';
                }

                // Redirect if on a logged-in page while logged out
                if (isCurrentPageLoggedIn) {
                    const indexPage = isEnglish ? 'index_en.html' : 'index.html';
                    window.location.href = indexPage;
                }
            }
        };

        const toggleDemoMode = () => {
            let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
            isLoggedIn = !isLoggedIn; // Toggle the state
            sessionStorage.setItem('isLoggedIn', isLoggedIn);
            // After toggling, force a reload to ensure all script dependencies and header are re-initialized
            window.location.reload(); 
        };

        if (demoModeStrip) {
            demoModeStrip.addEventListener('click', toggleDemoMode);
        }

        // Apply state on initial page load
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        applyLoggedInState(isLoggedIn);
    }

    // --- AI PLAYGROUND ANIMATION LOGIC (For index pages only) ---
    const playgroundContainer = document.getElementById('playground-container');
    if (playgroundContainer) {
        const initialCard = document.getElementById('initial-card');
        const resultsContainer = document.getElementById('results-container');
        const transformButton = document.getElementById('transform-button');
        const resetButton = document.getElementById('reset-button');

        const runTransformation = () => {
            if (!initialCard || !resultsContainer) return;
            initialCard.classList.add('opacity-0', 'pointer-events-none');
            resultsContainer.classList.remove('opacity-0', 'pointer-events-none');
        };

        const resetTransformation = () => {
            if (!initialCard || !resultsContainer) return;
            resultsContainer.classList.add('opacity-0', 'pointer-events-none');
            initialCard.classList.remove('opacity-0', 'pointer-events-none');
        };

        if (transformButton) transformButton.addEventListener('click', runTransformation);
        if (resetButton) resetButton.addEventListener('click', resetTransformation);
    }
});