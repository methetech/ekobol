document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop();
    const isEnglish = pageName.includes('_en.html');

    // --- Color constants from our design system ---
    const COLORS = {
        accentPrimary: '#E5E7EB', // Bone
        textSecondary: '#9CA3AF', // Asphalt-light
        gridColor: 'rgba(255, 255, 255, 0.1)' // Faint white for dark theme grids
    };

    function initializeHeaderFeatures() {
        const demoButton = document.getElementById('demo-mode-strip');
        const navLoggedOut = document.getElementById('nav-logged-out');
        const navLoggedIn = document.getElementById('nav-logged-in');
        const actionsLoggedOut = document.getElementById('actions-logged-out');
        const actionsLoggedIn = document.getElementById('actions-logged-in');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLoggedOut = mobileMenu.querySelector('#mobile-nav-logged-out');
        const mobileNavLoggedIn = mobileMenu.querySelector('#mobile-nav-logged-in');
        const mobileSignup = mobileMenu.querySelector('#mobile-signup-button');
        const mobileLogin = mobileMenu.querySelector('#mobile-login-link');
        const mobileLogout = mobileMenu.querySelector('#mobile-logout-button');

        if (!demoButton || !navLoggedOut || !navLoggedIn || !actionsLoggedOut || !actionsLoggedIn || !mobileNavLoggedOut || !mobileNavLoggedIn) {
            console.error("Header initialization failed: One or more essential header elements could not be found.");
            return;
        }

        function updateUiForDemoState(isDemoActive) {
            navLoggedOut.classList.toggle('md:flex', !isDemoActive);
            navLoggedOut.classList.toggle('hidden', isDemoActive);
            actionsLoggedOut.classList.toggle('md:flex', !isDemoActive);
            actionsLoggedOut.classList.toggle('hidden', isDemoActive);
            mobileNavLoggedOut.classList.toggle('hidden', isDemoActive);
            if(mobileSignup) mobileSignup.classList.toggle('hidden', isDemoActive);
            if(mobileLogin) mobileLogin.classList.toggle('hidden', isDemoActive);

            navLoggedIn.classList.toggle('md:flex', isDemoActive);
            navLoggedIn.classList.toggle('hidden', !isDemoActive);
            actionsLoggedIn.classList.toggle('md:flex', isDemoActive);
            actionsLoggedIn.classList.toggle('hidden', !isDemoActive);
            mobileNavLoggedIn.classList.toggle('hidden', !isDemoActive);
            if(mobileLogout) mobileLogout.classList.toggle('hidden', !isDemoActive);

            demoButton.classList.remove('hidden');
            if (isDemoActive) {
                demoButton.textContent = isEnglish ? 'Demo Mode: ON' : 'Demo Modu: AÇIK';
                demoButton.classList.remove('bg-void-secondary', 'text-accent-primary');
                demoButton.classList.add('bg-accent-primary', 'text-void-primary');
            } else {
                demoButton.textContent = isEnglish ? 'Activate Demo' : 'Demoyu Etkinleştir';
                demoButton.classList.remove('bg-accent-primary', 'text-void-primary');
                demoButton.classList.add('bg-void-secondary', 'text-accent-primary');
            }
        }

        demoButton.addEventListener('click', () => {
            let isDemo = sessionStorage.getItem('isDemoModeActive') === 'true';
            isDemo = !isDemo;
            sessionStorage.setItem('isDemoModeActive', isDemo);
            updateUiForDemoState(isDemo);
        });

        const initialDemoState = sessionStorage.getItem('isDemoModeActive') === 'true';
        updateUiForDemoState(initialDemoState);

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
    }

    function initializeDashboardCharts() {
        if (typeof Chart === 'undefined') return;

        const createChart = (ctx, data, options) => new Chart(ctx, { type: 'line', data, options });

        const defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { 
                    backgroundColor: '#111827', // void-primary
                    titleColor: COLORS.accentPrimary,
                    bodyColor: COLORS.textSecondary,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: { 
                    beginAtZero: true,
                    ticks: { color: COLORS.textSecondary },
                    grid: { color: COLORS.gridColor }
                },
                x: { 
                    ticks: { color: COLORS.textSecondary },
                    grid: { color: COLORS.gridColor }
                }
            }
        };

        const defaultData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [120, 190, 300, 500, 200, 350, 400],
                borderColor: COLORS.accentPrimary,
                backgroundColor: 'rgba(229, 231, 235, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        };

        const chartIds = ['etsySalesChart', 'trendyolSalesChart', 'hepsiburadaSalesChart', 'websiteSalesChart'];
        chartIds.forEach(id => {
            const ctx = document.getElementById(id);
            if (ctx) createChart(ctx.getContext('2d'), defaultData, defaultOptions);
        });
    }

    // --- Main Execution Logic ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    const loadHeader = fetch(isEnglish ? 'header_en.html' : 'header.html')
        .then(response => response.ok ? response.text() : Promise.reject(`Failed to load header`))
        .then(html => {
            if (headerPlaceholder) headerPlaceholder.innerHTML = html;
        });

    const loadFooter = fetch(isEnglish ? 'footer_en.html' : 'footer.html')
        .then(response => response.ok ? response.text() : Promise.reject('Failed to load footer'))
        .then(html => {
            if (footerPlaceholder) footerPlaceholder.innerHTML = html;
        });

    Promise.all([loadHeader, loadFooter]).then(() => {
        initializeHeaderFeatures();
        if (pageName.startsWith('dashboard')) {
            initializeDashboardCharts();
        }
    }).catch(error => console.error('Error loading page components:', error));
});