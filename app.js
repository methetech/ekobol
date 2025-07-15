document.addEventListener("DOMContentLoaded", function() {

    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    const isEnglish = currentPage.endsWith('_en.html') || 
                      (currentPage === 'trends.html' && path.includes('_en'));

    const headerFile = isEnglish ? 'header_en.html' : 'header.html';
    const footerFile = isEnglish ? 'footer_en.html' : 'footer.html';

    if (headerPlaceholder) {
        fetch(headerFile)
            .then(response => {
                if (!response.ok) throw new Error(`Header file not found: ${headerFile}`);
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                initializeHeaderAndMobileMenu(); // Renamed and consolidated
            })
            .catch(error => console.error("Header loading failed:", error));
    }

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

    // This function now encapsulates all header-related JS logic, including mobile menu
    function initializeHeaderAndMobileMenu() {
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
            const allPages = [
                'index.html', 'product.html', 'solutions.html', 'resources.html', 'pricing.html', 'about.html',
                'careers.html', 'contact.html', 'cookies.html', 'dynamic-plan.html', 'basic-plan.html',
                'partner-plan.html', 'payment.html', 'privacy.html', 'signup.html', 'login.html',
                'forgot-password.html', 'subscription.html', 'success-stories.html', 'help-center.html', 'blog.html',
                'dashboard.html', 'orders.html', 'products-manage.html', 'marketing-tools.html', 'trends.html', 'finances.html',
                'product-add-edit.html', 
                'full-statement.html', 'update-payment.html', 'generate-report.html', 
                'blog-post.html', 'order-detail.html', 'ai-pricing-optimization.html', 'new-image-styles-update.html', 'webinars.html', 
                'product-display.html', 'invoice.html', 'order-tracking.html', 'login-success.html',
                'ai-image-generator-guide.html', 'connect-marketplace-guide.html', 'setup-profile-guide.html', 'understanding-dashboard-guide.html', 
                'best-practices-ai-descriptions.html', 'optimize-pricing-with-ai-guide.html', 'how-revenue-sharing-works-guide.html', 'upgrade-downgrade-plan-guide.html', 'viewing-invoices-guide.html', // Previous/Current Help Center articles
                'ai-inventory-automation-guide.html' // New help center article for this turn
            ];

            const getTargetPage = (originalPage, targetLangIsEnglish) => {
                let targetPage = originalPage;
                const originalBaseName = originalPage.replace('_en.html', '.html');
                
                let foundMatch = false;
                for (const page of allPages) {
                    const pageBaseName = page.replace('_en.html', '.html'); 
                    if (pageBaseName === originalBaseName) { 
                        const potentialEnglishPage = pageBaseName.replace('.html', '_en.html');
                        const potentialTurkishPage = pageBaseName;

                        if (targetLangIsEnglish) {
                            if (allPages.includes(potentialEnglishPage)) {
                                targetPage = potentialEnglishPage;
                            } else {
                                targetPage = originalBaseName; // Fallback if specific EN version doesn't exist
                            }
                        } else { // Target is Turkish
                            if (allPages.includes(potentialTurkishPage)) {
                                targetPage = potentialTurkishPage;
                            } else {
                                targetPage = originalPage.replace('_en.html', '.html'); // Fallback if specific TR version doesn't exist
                            }
                        }
                        foundMatch = true;
                        break;
                    }
                }
                
                if (!foundMatch) { 
                    // If the exact base name isn't found in allPages, try simple _en.html addition/removal
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
                trLink.classList.remove('font-bold', 'text-[var(--text-primary-color)]');
            } else {
                trLink.classList.add('font-bold', 'text-[var(--text-primary-color)]');
                enLink.classList.remove('font-bold', 'text-[var(--text-primary-color)]');
            }
        }
        
        // 3. DEMO MODE & LOGIN STATE LOGIC
        const desktopNavLoggedOut = document.getElementById('nav-logged-out');
        const desktopNavLoggedIn = document.getElementById('nav-logged-in');
        const desktopActionsLoggedOut = document.getElementById('actions-logged-out');
        const desktopActionsLoggedIn = document.getElementById('actions-logged-in'); // This is the desktop logout button container

        const mobileNavLoggedOut = document.getElementById('mobile-nav-logged-out'); 
        const mobileNavLoggedIn = document.getElementById('mobile-nav-logged-in');   
        const mobileSignupButton = document.getElementById('mobile-signup-button');
        const mobileLoginLink = document.getElementById('mobile-login-link');
        const mobileLogoutButton = document.getElementById('mobile-logout-button'); // New element for mobile logout

        const logoLink = document.getElementById('logo-link');
        const demoModeStrip = document.getElementById('demo-mode-strip');

        const loggedInPagesBase = ['dashboard', 'orders', 'products-manage', 'marketing-tools', 'trends', 'finances', 'product-add-edit', 'full-statement', 'update-payment', 'generate-report', 'order-detail', 'product-display', 'invoice', 'order-tracking', 'login-success']; 
        const isCurrentPageLoggedIn = loggedInPagesBase.some(base => 
            currentPage.startsWith(base) || currentPage.startsWith(base.replace('.html', '_en.html'))
        );
        
        const applyLoggedInState = (isLoggedIn) => {
            // Desktop Navigation and Actions
            // Ensure proper display property is set along with hidden for desktop
            if (desktopNavLoggedOut) {
                desktopNavLoggedOut.classList.toggle('hidden', isLoggedIn);
                desktopNavLoggedOut.classList.toggle('md:flex', !isLoggedIn); 
            }
            if (desktopNavLoggedIn) {
                desktopNavLoggedIn.classList.toggle('hidden', !isLoggedIn);
                desktopNavLoggedIn.classList.toggle('md:flex', isLoggedIn);
            }

            if (desktopActionsLoggedOut) {
                desktopActionsLoggedOut.classList.toggle('hidden', isLoggedIn);
                desktopActionsLoggedOut.classList.toggle('md:flex', !isLoggedIn); 
            }
            if (desktopActionsLoggedIn) {
                desktopActionsLoggedIn.classList.toggle('hidden', !isLoggedIn);
                desktopActionsLoggedIn.classList.toggle('md:flex', isLoggedIn); 
            }

            // Mobile Navigation and Actions (inside mobile menu)
            // Mobile navs within the slide-out menu are naturally block/flex by default, just manage 'hidden'
            if (mobileNavLoggedOut) {
                mobileNavLoggedOut.classList.toggle('hidden', isLoggedIn);
                mobileNavLoggedOut.classList.toggle('flex', !isLoggedIn); // Ensure it's flex on mobile when not logged in
            }
            if (mobileNavLoggedIn) {
                mobileNavLoggedIn.classList.toggle('hidden', !isLoggedIn);
                mobileNavLoggedIn.classList.toggle('flex', isLoggedIn); // Ensure it's flex on mobile when logged in
            }

            if (mobileSignupButton) mobileSignupButton.classList.toggle('hidden', isLoggedIn);
            if (mobileLoginLink) mobileLoginLink.classList.toggle('hidden', isLoggedIn);
            if (mobileLogoutButton) mobileLogoutButton.classList.toggle('hidden', !isLoggedIn);

            if (logoLink) {
                const targetPage = isLoggedIn ? (isEnglish ? 'dashboard_en.html' : 'dashboard.html') : (isEnglish ? 'index_en.html' : 'index.html');
                logoLink.href = targetPage;
            }

            if (demoModeStrip) {
                demoModeStrip.classList.toggle('bg-[var(--primary-color)]', !isLoggedIn);
                demoModeStrip.classList.toggle('text-white', !isLoggedIn);
                demoModeStrip.classList.toggle('bg-gray-200', isLoggedIn);
                demoModeStrip.classList.toggle('text-[var(--text-primary-color)]', isLoggedIn);
                demoModeStrip.textContent = isLoggedIn ? (isEnglish ? 'DEMO MODE' : 'ZİYARETÇİ MODU') : (isEnglish ? 'PUBLIC MODE' : 'DEMO MODU');
            }

            // Redirect logic (only if not already on the correct page)
            if (isLoggedIn && (currentPage === 'index.html' || currentPage === 'index_en.html')) {
                const redirectPage = isEnglish ? 'dashboard_en.html' : 'dashboard.html';
                if (window.location.pathname.endsWith(redirectPage) === false) { // Prevent infinite reload if already on dashboard
                    window.location.href = redirectPage;
                }
            } else if (!isLoggedIn && isCurrentPageLoggedIn) { 
                const redirectPage = isEnglish ? 'index_en.html' : 'index.html';
                 if (window.location.pathname.endsWith(redirectPage) === false) { // Prevent infinite reload if already on index
                    window.location.href = redirectPage;
                }
            }
        };

        const toggleDemoMode = () => {
            let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
            isLoggedIn = !isLoggedIn;
            sessionStorage.setItem('isLoggedIn', isLoggedIn);
            window.location.reload(); 
        };

        if (demoModeStrip) {
            demoModeStrip.addEventListener('click', toggleDemoMode);
        }

        // Apply initial state based on sessionStorage after elements are loaded
        const isLoggedInOnLoad = sessionStorage.getItem('isLoggedIn') === 'true';
        applyLoggedInState(isLoggedInOnLoad);


        // 4. Mobile Menu Logic (Hamburger Menu)
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function openMobileMenu() {
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                mobileMenuOverlay.classList.remove('hidden');
                setTimeout(() => { 
                    mobileMenuOverlay.classList.add('opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden'; 
            }
        }

        function closeMobileMenu() {
            if (mobileMenu && mobileMenuOverlay) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                mobileMenuOverlay.classList.remove('opacity-100');
                setTimeout(() => { 
                    mobileMenuOverlay.classList.add('hidden');
                }, 300); 
                document.body.style.overflow = ''; 
            }
        }

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', openMobileMenu);
        }
        if (closeMobileMenuButton) {
            closeMobileMenuButton.addEventListener('click', closeMobileMenu);
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
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

    // --- Dashboard Specific Scripts ---
    if (document.querySelector('main.bg-[var(--background-secondary-color)] .layout-content-container') && 
        (currentPage === 'dashboard.html' || currentPage === 'dashboard_en.html')) {
        
        const updateSummaryCardsDashboard = () => {
            const currency = isEnglish ? '$' : '₺';
            document.getElementById('total-sales').textContent = `${currency}28,900`;
            document.getElementById('total-sales-trend').textContent = isEnglish ? '+12% vs previous period' : 'Önceki döneme göre %12 artış';
            document.getElementById('total-orders').textContent = '985';
            document.getElementById('total-orders-trend').textContent = isEnglish ? '+8% vs previous period' : 'Önceki döneme göre %8 artış';
            document.getElementById('total-profit').textContent = `${currency}11,560`;
            document.getElementById('total-profit-trend').textContent = isEnglish ? '+15% vs previous period' : 'Önceki döneme göre %15 artış';

            document.getElementById('etsy-sales-value').textContent = `${currency}8,200`;
            document.getElementById('etsy-sales-percentage').textContent = '28';
            document.getElementById('trendyol-sales-value').textContent = `${currency}7,800`;
            document.getElementById('trendyol-sales-percentage').textContent = '27';
            document.getElementById('hepsiburada-sales-value').textContent = `${currency}6,500`;
            document.getElementById('hepsiburada-sales-percentage').textContent = '22';
            document.getElementById('website-sales-value').textContent = `${currency}6,400`;
            document.getElementById('website-sales-percentage').textContent = '22';

            const quickStatsList = document.getElementById('quick-stats-list');
            const aiRecommendationsList = document.getElementById('ai-recommendations-list');

            if (quickStatsList) {
                quickStatsList.innerHTML = isEnglish ? `
                    <li><strong class="text-[var(--text-primary-color)]">Top Performing Product:</strong> Organic Cotton T-shirt <span class="text-sm">(350 sales)</span></li>
                    <li><strong class="text-[var(--text-primary-color)]">Best Channel (by revenue):</strong> Etsy <span class="text-sm">(${currency}8,200)</span></li>
                    <li><strong class="text-[var(--text-primary-color)]">Overall Average Order Value:</strong> ${currency}29.34</li>
                    <li><strong class="text-[var(--text-primary-color)]">Low Stock Alerts:</strong> 5 products below threshold.</li>
                ` : `
                    <li><strong class="text-[var(--text-primary-color)]">En Çok Satan Ürün:</strong> Organik Pamuk Tişört <span class="text-sm">(350 satış)</span></li>
                    <li><strong class="text-[var(--text-primary-color)]">En İyi Kanal (gelire göre):</strong> Etsy <span class="text-sm">(₺8.200)</span></li>
                    <li><strong class="text-[var(--text-primary-color)]">Ortalama Sipariş Değeri:</strong> ₺29.34</li>
                    <li><strong class="text-[var(--text-primary-color)]">Düşük Stok Uyarıları:</strong> 5 ürün eşiğin altında.</li>
                `;
            }

            if (aiRecommendationsList) {
                aiRecommendationsList.innerHTML = isEnglish ? `
                    <li>Consider launching a new ad campaign for "Smartwatch" on Hepsiburada.</li>
                    <li>Optimize product descriptions for "Espresso Machine" on your Website with more benefit-driven language.</li>
                    <li>Review pricing strategy for "Custom Necklace" on Etsy to improve conversion rate by 5%.</li>
                ` : `
                    <li>Hepsiburada'da "Akıllı Saat" için yeni bir reklam kampanyası başlatmayı düşünün.</li>
                    <li>Web sitenizdeki "Espresso Makinesi" ürün açıklamalarını daha fayda odaklı anahtar kelimelerle optimize edin.</li>
                    <li>Dönüşüm oranını %5 artırmak için Etsy'deki "Özel Yapım Kolye" fiyatlandırma stratejisini gözden geçirin.</li>
                `;
            }
        };

        updateSummaryCardsDashboard();

        const createSalesChart = (ctxId, dataValues, labelKey, color) => {
            const ctx = document.getElementById(ctxId);
            if (!ctx) return;

            const labels = isEnglish ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] : ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4'];
            const labelText = isEnglish ? `${labelKey} Sales` : `${labelKey} Satışları`;

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: labelText,
                        data: dataValues,
                        borderColor: color,
                        backgroundColor: Chart.helpers.color(color).alpha(0.2).rgbString(),
                        fill: true,
                        tension: 0.3,
                        pointRadius: 3,
                        pointBackgroundColor: color
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    scales: {
                        x: { display: true, title: { display: false }, grid: { display: false } },
                        y: { display: false, title: { display: false }, beginAtZero: true, grid: { display: false } }
                    },
                    layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
                }
            });
        };

        createSalesChart('etsySalesChart', [1800, 2100, 2500, 2800], 'Etsy', '#0ecd90'); 
        createSalesChart('trendyolSalesChart', [1500, 1700, 2200, 2400], 'Trendyol', '#0ecd90');
        createSalesChart('hepsiburadaSalesChart', [1100, 1300, 1600, 1900], 'Hepsiburada', '#0ecd90');
        createSalesChart('websiteSalesChart', [900, 1100, 1400, 1700], isEnglish ? 'Website' : 'Web Sitesi', '#0ecd90');
    }

    // --- Finances Page Specific Scripts ---
    if (document.querySelector('main.bg-[var(--background-secondary-color)] .layout-content-container') && 
        (currentPage === 'finances.html' || currentPage === 'finances_en.html')) {

        const updateFinancialData = () => {
            const currency = isEnglish ? '$' : '₺';

            document.getElementById('gross-revenue').textContent = `${currency}28,900`;
            document.getElementById('gross-revenue-trend').textContent = isEnglish ? '+12% vs previous period' : 'Önceki döneme göre %12 artış';
            document.getElementById('total-expenses').textContent = `${currency}17,340`;
            document.getElementById('total-expenses-trend').textContent = isEnglish ? '+5% vs previous period' : 'Önceki döneme göre %5 artış';
            document.getElementById('net-profit').textContent = `${currency}11,560`;
            document.getElementById('net-profit-trend').textContent = isEnglish ? '+15% vs previous period' : 'Önceki döneme göre %15 artış';

            const transactionsTableBody = document.getElementById('recent-transactions-table-body');
            // In a real app, you'd fetch data and then loop to create rows dynamically.
            // Current rows are static HTML.

            document.getElementById('current-plan').textContent = isEnglish ? 'Partner Plan' : 'Partner Planı';
            document.getElementById('current-plan-details').textContent = isEnglish ? '50/50 Profit Share' : '%50 Kâr Paylaşımı';
            document.getElementById('next-billing-date').textContent = isEnglish ? 'August 1, 2025' : '1 Ağustos 2025';
            document.getElementById('estimated-payment').textContent = isEnglish ? `Estimated Payment: ~${currency}500.00` : `Tahmini Ödeme: ~₺500.00`;

            const aiFinancialInsightsList = document.getElementById('ai-financial-insights-list');
            if (aiFinancialInsightsList) {
                aiFinancialInsightsList.innerHTML = isEnglish ? `
                    <li>Your marketing spend is 2% higher than average for your sales volume. Review campaign efficiency.</li>
                    <li>Consider negotiating lower shipping rates; current rates impact your net profit by 1.5%.</li>
                    <li>Identified potential tax deductions related to office supplies totaling ${currency}X.XX this quarter.</li>
                ` : `
                    <li>Pazarlama harcamanız, satış hacminize göre ortalamadan %2 daha yüksek. Kampanya verimliliğini gözden geçirin.</li>
                    <li>Daha düşük nakliye oranları için müzakere yapmayı düşünün; mevcut oranlar net kârınızı %1.5 etkiliyor.</li>
                    <li>Bu çeyrekte ofis malzemeleriyle ilgili toplam X.XX TL'lik potansiyel vergi indirimleri tespit edildi.</li>
                `;
            }
        };
        updateFinancialData();
    }


    // --- Orders Page Specific Script ---
    if (document.getElementById('orders-table-body')) {
        const channelFilter = document.getElementById('channel-filter');
        const statusFilter = document.getElementById('status-filter');
        const orderSearch = document.getElementById('order-search');
        const ordersTableBody = document.getElementById('orders-table-body');
        const allOrderRows = Array.from(ordersTableBody.querySelectorAll('.order-row'));

        const applyOrdersFilters = () => {
            const selectedChannel = channelFilter.value;
            const selectedStatus = statusFilter.value;
            const searchTerm = orderSearch.value.toLowerCase();

            allOrderRows.forEach(row => {
                const rowChannel = row.dataset.channel;
                const rowStatus = row.dataset.status;
                const rowOrderId = row.dataset.orderId.toLowerCase();
                const rowTextContent = row.textContent.toLowerCase();

                const matchesChannel = !selectedChannel || rowChannel === selectedChannel;
                const matchesStatus = !selectedStatus || rowStatus === selectedStatus;
                const matchesSearch = !searchTerm || rowOrderId.includes(searchTerm) || rowTextContent.includes(searchTerm);

                if (matchesChannel && matchesStatus && matchesSearch) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        };

        if (channelFilter) channelFilter.addEventListener('change', applyOrdersFilters);
        if (statusFilter) statusFilter.addEventListener('change', applyOrdersFilters);
        if (orderSearch) orderSearch.addEventListener('keyup', applyOrdersFilters);

        const urlParams = new URLSearchParams(window.location.search);
        const channelParam = urlParams.get('channel');
        if (channelParam && channelFilter) {
            channelFilter.value = channelParam;
        }
        applyOrdersFilters();
    }

    // --- Products Manage Page Specific Script ---
    if (document.getElementById('products-table-body')) {
        const channelFilter = document.getElementById('channel-filter');
        const statusFilter = document.getElementById('status-filter');
        const productSearch = document.getElementById('product-search');
        const productsTableBody = document.getElementById('products-table-body');
        const allProductRows = Array.from(productsTableBody.querySelectorAll('.product-row'));

        const applyProductsFilters = () => {
            const selectedChannel = channelFilter.value;
            const selectedStatus = statusFilter.value;
            const searchTerm = productSearch.value.toLowerCase();

            allProductRows.forEach(row => {
                const rowChannels = row.dataset.channels.split(',');
                const rowStatus = row.dataset.status;
                const rowProductName = row.dataset.productName.toLowerCase();
                const rowSku = row.dataset.sku.toLowerCase();

                const matchesChannel = !selectedChannel || rowChannels.includes(selectedChannel);
                const matchesStatus = !selectedStatus || rowStatus === selectedStatus;
                const matchesSearch = !searchTerm || rowProductName.includes(searchTerm) || rowSku.includes(searchTerm);

                if (matchesChannel && matchesStatus && matchesSearch) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        };

        if (channelFilter) channelFilter.addEventListener('change', applyProductsFilters);
        if (statusFilter) statusFilter.addEventListener('change', applyProductsFilters);
        if (productSearch) productSearch.addEventListener('keyup', applyProductsFilters);

        applyProductsFilters();
    }

    // --- Product Add/Edit Page Specific Script ---
    if (document.querySelector('main.bg-[var(--background-secondary-color)] .layout-content-container.max-w-4xl')) {
        const productDescriptionTextArea = document.getElementById('product-description');
        const aiDescriptionButton = productDescriptionTextArea ? productDescriptionTextArea.nextElementSibling : null;

        if (aiDescriptionButton && aiDescriptionButton.tagName === 'BUTTON') {
            aiDescriptionButton.addEventListener('click', () => {
                if (productDescriptionTextArea) {
                    if (isEnglish) {
                        productDescriptionTextArea.value = "This is an example of an AI-generated optimized product description. It highlights key features, benefits, and targets your audience to drive more sales. SEO-friendly.";
                    } else {
                        productDescriptionTextArea.value = "Bu, YZ tarafından oluşturulan optimize edilmiş bir ürün açıklaması örneğidir. Ürününüzün temel özelliklerini, faydalarını ve hedef kitlenizi göz önünde bulundurarak daha fazla satış elde etmenizi sağlar. SEO dostudur.";
                    }
                    alert(isEnglish ? "AI description generated! (This is a static example)" : "YZ açıklaması oluşturuldu! (Bu statik bir örnektir)");
                }
            });
        }

        const productPriceInput = document.getElementById('product-price');
        const aiPriceOptimizeButton = productPriceInput ? productPriceInput.nextElementSibling : null;

        if (aiPriceOptimizeButton && aiPriceOptimizeButton.tagName === 'BUTTON') {
            aiPriceOptimizeButton.addEventListener('click', () => {
                if (productPriceInput) {
                    const currentPrice = parseFloat(productPriceInput.value || 0);
                    if (!isNaN(currentPrice)) {
                        productPriceInput.value = (currentPrice * 1.15).toFixed(2);
                        alert(isEnglish ? "AI price optimized! (This is a static example)" : "YZ fiyatı optimize edildi! (Bu statik bir örnektir)");
                    } else {
                        alert(isEnglish ? "Please enter a valid price first." : "Lütfen önce geçerli bir fiyat girin.");
                    }
                }
            });
        }
    }

    // --- Subscription Page Specific Script ---
    if (currentPage === 'subscription.html' || currentPage === 'subscription_en.html') {
        const billingToggle = document.getElementById('billing-toggle');
        const toggleCircle = document.getElementById('toggle-circle');
        const monthlyLabel = document.getElementById('monthly-label');
        const yearlyLabel = document.getElementById('yearly-label');
        const featurePrices = document.querySelectorAll('.feature-price');

        let isYearlyBilling = false; // Initial state: Monthly

        const updatePrices = () => {
            featurePrices.forEach(priceElement => {
                const monthlyPrice = parseFloat(priceElement.dataset.monthly);
                const yearlyPrice = parseFloat(priceElement.dataset.yearly);
                const currency = isEnglish ? '$' : '₺';
                const perPeriodText = isEnglish ? '/mo' : '/ay';

                if (isYearlyBilling) {
                    priceElement.textContent = `${currency}${yearlyPrice}`;
                } else {
                    priceElement.textContent = `${currency}${monthlyPrice}`;
                }
                // Append the "/mo" or "/ay" unless it's the full suite which might not need it explicitly if it's already part of the hardcoded text
                if (priceElement.id !== 'full-suite-price' || !isYearlyBilling) { // Assuming full-suite-price also has /mo or /ay for monthly
                     const existingSpan = priceElement.querySelector('span');
                     if (existingSpan) { // If there's already a span for /ay or /mo
                        existingSpan.textContent = perPeriodText;
                     } else { // Otherwise, create one
                        const span = document.createElement('span');
                        span.className = 'text-base font-medium text-[var(--text-secondary-color)]';
                        span.textContent = perPeriodText;
                        priceElement.appendChild(span);
                     }
                } else if (priceElement.id === 'full-suite-price' && isYearlyBilling) {
                    // For yearly full suite, ensure the suffix matches the expected display (e.g. no /mo or /ay)
                    const existingSpan = priceElement.querySelector('span');
                    if (existingSpan) {
                        existingSpan.remove(); // Remove the /mo or /ay suffix for yearly full suite if desired
                    }
                }
            });

            // Update toggle circle position and label styling
            if (isYearlyBilling) {
                toggleCircle.style.transform = 'translateX(100%)';
                monthlyLabel.classList.remove('text-[var(--primary-color)]');
                yearlyLabel.classList.add('text-[var(--primary-color)]');
            } else {
                toggleCircle.style.transform = 'translateX(0)';
                monthlyLabel.classList.add('text-[var(--primary-color)]');
                yearlyLabel.classList.remove('text-[var(--primary-color)]');
            }
        };

        if (billingToggle) {
            billingToggle.addEventListener('click', () => {
                isYearlyBilling = !isYearlyBilling;
                updatePrices();
            });
        }
        updatePrices(); // Initial price display based on default `isYearlyBilling`
    }
});