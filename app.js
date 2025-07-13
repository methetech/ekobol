document.addEventListener("DOMContentLoaded", function() {

    // --- Core Logic to Load Header and Footer ---

    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const isEnglish = currentPage.endsWith('_en.html');

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
            let basePage = isEnglish ? currentPage.replace('_en.html', '.html') : currentPage;
            if (basePage === '') basePage = 'index.html';

            enLink.href = basePage.replace('.html', '_en.html');
            trLink.href = basePage;

            if (isEnglish) {
                enLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
                trLink.classList.remove('font-bold');
            } else {
                trLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
                enLink.classList.remove('font-bold');
            }
        }
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
            // Hide the initial card from view and layout
            initialCard.classList.add('opacity-0', 'pointer-events-none');
            // Show the results container
            resultsContainer.classList.remove('opacity-0', 'pointer-events-none');
        };

        const resetTransformation = () => {
            if (!initialCard || !resultsContainer) return;
            // Hide the results container
            resultsContainer.classList.add('opacity-0', 'pointer-events-none');
            // Show the initial card again
            initialCard.classList.remove('opacity-0', 'pointer-events-none');
        };

        if (transformButton) transformButton.addEventListener('click', runTransformation);
        if (resetButton) resetButton.addEventListener('click', resetTransformation);
    }
});