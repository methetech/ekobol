document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1);
    
    // Determine language based on the URL. English pages end with '_en.html'.
    const isEnglish = currentPage.endsWith('_en.html');

    // Define which header/footer files to load
    const headerFile = isEnglish ? 'header_en.html' : 'header.html';
    const footerFile = isEnglish ? 'footer_en.html' : 'footer.html';

    // --- Fetch and load the correct header ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch(headerFile)
            .then(response => {
                if (!response.ok) throw new Error('Header not found: ' + headerFile);
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                // After loading the header, make the language switcher intelligent
                updateLanguageSwitcher();
            })
            .catch(error => console.error('Error fetching header:', error));
    }

    // --- Fetch and load the correct footer ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch(footerFile)
            .then(response => {
                if (!response.ok) throw new Error('Footer not found: ' + footerFile);
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error fetching footer:', error));
    }

    // --- Function to update language links dynamically ---
    function updateLanguageSwitcher() {
        const enLink = document.getElementById('lang-en-link');
        const trLink = document.getElementById('lang-tr-link');

        if (!enLink || !trLink) return;

        // Define target URLs
        const targetEnPage = isEnglish ? currentPage : currentPage.replace('.html', '_en.html');
        const targetTrPage = isEnglish ? currentPage.replace('_en.html', '.html') : currentPage;
        
        // Handle index pages specifically
        enLink.href = (targetEnPage === 'index_en.html' || targetEnPage === 'index.html') ? 'index_en.html' : targetEnPage;
        trLink.href = (targetTrPage === 'index.html' || targetTrPage === 'index_en.html') ? 'index.html' : targetTrPage;

        // Apply styles to show the active language
        if (isEnglish) {
            enLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
            enLink.classList.remove('text-[var(--text-secondary-color)]', 'hover:text-[var(--text-primary-color)]');
            
            trLink.classList.add('text-[var(--text-secondary-color)]', 'hover:text-[var(--text-primary-color)]');
            trLink.classList.remove('font-bold', 'text-[var(--text-primary-color)]');
        } else {
            trLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
            trLink.classList.remove('text-[var(--text-secondary-color)]', 'hover:text-[var(--text-primary-color)]');

            enLink.classList.add('text-[var(--text-secondary-color)]', 'hover:text-[var(--text-primary-color)]');
            enLink.classList.remove('font-bold', 'text-[var(--text-primary-color)]');
        }
    }
});