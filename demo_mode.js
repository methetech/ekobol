// --- START OF FILE demo_mode.js ---

/**
 * Applies the visual state of being logged in or out.
 * @param {boolean} isLoggedIn - True if the user should be seen as logged in.
 */
function applyLoggedInState(isLoggedIn) {
    // Get all the elements that change based on login state
    const loggedInElements = document.querySelectorAll('.logged-in-item');
    const loggedOutElements = document.querySelectorAll('.logged-out-item');
    const analyticsLink = document.getElementById('analytics-link');

    if (isLoggedIn) {
        // Show logged-in items, hide logged-out items
        loggedInElements.forEach(el => el.classList.remove('hidden'));
        loggedOutElements.forEach(el => el.classList.add('hidden'));
        if (analyticsLink) analyticsLink.classList.remove('hidden');
    } else {
        // Show logged-out items, hide logged-in items
        loggedInElements.forEach(el => el.classList.add('hidden'));
        loggedOutElements.forEach(el => el.classList.remove('hidden'));
        if (analyticsLink) analyticsLink.classList.add('hidden');
    }
}

/**
 * Toggles the demo mode state and applies the corresponding UI changes.
 */
function toggleDemoMode() {
    const isLoggedIn = sessionStorage.getItem('demoMode') === 'true';
    const newLoginState = !isLoggedIn;
    sessionStorage.setItem('demoMode', newLoginState);
    applyLoggedInState(newLoginState);
}

/**
 * Initializes the demo mode by checking sessionStorage and setting up the event listener.
 */
function initializeDemoMode() {
    const demoToggle = document.getElementById('demo-mode-toggle');
    
    if (demoToggle) {
        // 1. Set the initial state based on sessionStorage
        const isLoggedIn = sessionStorage.getItem('demoMode') === 'true';
        applyLoggedInState(isLoggedIn);

        // 2. Add the click listener to the toggle button
        demoToggle.addEventListener('click', toggleDemoMode);
    }
}

// --- END OF FILE demo_mode.js ---