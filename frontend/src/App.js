import React, { useState, useEffect, useContext } from 'react'; // Added useState, useEffect, useContext
import { BrowserRouter, Route, Routes, useLocation, Link } from 'react-router-dom'; // Added useLocation
import { ThemeProvider, ThemeContext } from './ThemeContext'; // Added ThemeContext
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Select from './components/Select/Select'; // Select bileşenini import ettik (mobil menü için gerekli)
import { useTranslation } from 'react-i18next'; // useTranslation eklendi

import HomePage from './pages/HomePage';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Cookies from './pages/Cookies';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HelpCenter from './pages/HelpCenter';
import AiImageGeneratorGuide from './pages/AiImageGeneratorGuide';
import AiInventoryAutomationGuide from './pages/AiInventoryAutomationGuide';
import AiMarketingCampaignsGuide from './pages/AiMarketingCampaignsGuide';
import AiPricingOptimization from './pages/AiPricingOptimization';
import BestPracticesAiDescriptions from './pages/BestPracticesAiDescriptions';
import ConnectMarketplaceGuide from './pages/ConnectMarketplaceGuide';
import HowRevenueSharingWorksGuide from './pages/HowRevenueSharingWorksGuide';
import OptimizePricingWithAiGuide from './pages/OptimizePricingWithAiGuide';
import ProductEditDeleteGuide from './pages/ProductEditDeleteGuide';
import SeoOptimizationToolsGuide from './pages/SeoOptimizationToolsGuide';
import SetupProfileGuide from './pages/SetupProfileGuide';
import SocialMediaSchedulerGuide from './pages/SocialMediaSchedulerGuide';
import UnderstandingDashboardGuide from './pages/UnderstandingDashboardGuide';
import UpgradeDowngradePlanGuide from './pages/UpgradeDowngradePlanGuide';
import ViewingInvoicesGuide from './pages/ViewingInvoicesGuide';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Finances from './pages/Finances';
import FullStatement from './pages/FullStatement';
import GenerateReport from './pages/GenerateReport';
import Invoice from './pages/Invoice';
import LiveAnalytics from './pages/LiveAnalytics';
import MarketingTools from './pages/MarketingTools';
import NewImageStylesUpdate from './pages/NewImageStylesUpdate';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import OrderTracking from './pages/OrderTracking';
import Payment from './pages/Payment';
import SuccessStories from './pages/SuccessStories';
import Subscription from './pages/Subscription';
import PriceOptimizationConversionGuide from './pages/PriceOptimizationConversionGuide';
import PartnerPlan from './pages/PartnerPlan';
import DynamicPlan from './pages/DynamicPlan';
import BuildTransferService from './pages/BuildTransferService';
import BasicPlan from './pages/BasicPlan';
import Product from './pages/Product';
import ProductAddEdit from './pages/ProductAddEdit';
import ProductDisplay from './pages/ProductDisplay';
import ProductsManage from './pages/ProductsManage';
import './App.css';

const AppContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation(); // For title and overflow effect
  const { theme, setTheme } = useContext(ThemeContext); // For theme options in mobile menu
  const { t, i18n } = useTranslation(); // For translations in mobile menu

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `Ekobol - ${title}`;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [location, isMobileMenuOpen]);

  const changeLanguage = (lng) => { // For language toggle in mobile menu
    i18n.changeLanguage(lng);
  };

  const themeOptions = [ // For theme options in mobile menu
    'retro', 'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'asphalt', 'cyberpunk', 'valentine', 'halloween',
  ];

  const navLinks = ( // Copied from Header.js
    <>
      <Link to="/solutions" className="text-base font-medium text-text-primary hover:text-accent-primary transition-colors min-h-[44px] flex items-center">{t('nav_solutions')}</Link>
      <Link to="/pricing" className="text-base font-medium text-text-primary hover:text-accent-primary transition-colors min-h-[44px] flex items-center">{t('nav_pricing')}</Link>
      <Link to="/resources" className="text-base font-medium text-text-primary hover:text-accent-primary transition-colors min-h-[44px] flex items-center">{t('nav_resources')}</Link>
      <Link to="/about" className="text-base font-medium text-text-primary hover:text-accent-primary transition-colors min-h-[44px] flex items-center">{t('nav_about')}</Link>
      <Link to="/contact" className="text-base font-medium text-text-primary hover:text-accent-primary transition-colors min-h-[44px] flex items-center">{t('nav_contact')}</Link>
    </>
  );

  return (
    <>
      <AnimatedBackground />
      <div className="content-wrap">
        <Header onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} /> {/* Pass toggle function */}
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-post" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/ai-image-generator-guide" element={<AiImageGeneratorGuide />} />
            <Route path="/ai-inventory-automation-guide" element={<AiInventoryAutomationGuide />} />
            <Route path="/ai-marketing-campaigns-guide" element={<AiMarketingCampaignsGuide />} />
            <Route path="/ai-pricing-optimization" element={<AiPricingOptimization />} />
            <Route path="/best-practices-ai-descriptions" element={<BestPracticesAiDescriptions />} />
            <Route path="/connect-marketplace-guide" element={<ConnectMarketplaceGuide />} />
            <Route path="/how-revenue-sharing-works-guide" element={<HowRevenueSharingWorksGuide />} />
            <Route path="/optimize-pricing-with-ai-guide" element={<OptimizePricingWithAiGuide />} />
            <Route path="/product-edit-delete-guide" element={<ProductEditDeleteGuide />} />
            <Route path="/seo-optimization-tools-guide" element={<SeoOptimizationToolsGuide />} />
            <Route path="/setup-profile-guide" element={<SetupProfileGuide />} />
            <Route path="/social-media-scheduler-guide" element={<SocialMediaSchedulerGuide />} />
            <Route path="/understanding-dashboard-guide" element={<UnderstandingDashboardGuide />} />
            <Route path="/upgrade-downgrade-plan-guide" element={<UpgradeDowngradePlanGuide />} />
            <Route path="/viewing-invoices-guide" element={<ViewingInvoicesGuide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-success" element={<LoginSuccess />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/full-statement" element={<FullStatement />} />
            <Route path="/generate-report" element={<GenerateReport />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/live-analytics" element={<LiveAnalytics />} />
            <Route path="/marketing-tools" element={<MarketingTools />} />
            <Route path="/new-image-styles-update" element={<NewImageStylesUpdate />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/price-optimization-conversion-guide" element={<PriceOptimizationConversionGuide />} />
            <Route path="/partner-plan" element={<PartnerPlan />} />
            <Route path="/dynamic-plan" element={<DynamicPlan />} />
            <Route path="/build-transfer-service" element={<BuildTransferService />} />
            <Route path="/basic-plan" element={<BasicPlan />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-add-edit" element={<ProductAddEdit />} />
            <Route path="/product-display" element={<ProductDisplay />} />
            <Route path="/products-manage" element={<ProductsManage />} />
          </Routes>
        <Footer />
      </div>

      {/* Mobile Menu - Refactored for UX */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      <div className={`fixed inset-x-4 top-24 sm:inset-x-auto sm:right-4 sm:w-96 bg-void-primary/95 backdrop-blur-xl shadow-2xl z-50 rounded-2xl transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
          <div className="flex items-center justify-between px-3 py-3 border-b border-void-secondary">
              <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <img src={process.env.PUBLIC_URL + "/static/media/ekobol.png"} alt="Ekobol Logo" className="h-10 w-auto" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
          <nav className="flex flex-col p-3 space-y-0">
              {navLinks}
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-sm font-medium pt-2 border-t border-void-secondary">
                  <button type="button" onClick={() => changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'text-accent-primary' : 'text-text-secondary'}`}>EN</button>
                  <span className="text-text-secondary">/</span>
                  <button type="button" onClick={() => changeLanguage('tr')} className={`transition-colors ${i18n.language === 'tr' ? 'text-accent-primary' : 'text-text-secondary'}`}>TR</button>
              </div>
              {/* Select bileşenini kullanıyoruz */}
              <Select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md py-1 px-2 text-xs mt-0">
                  {themeOptions.map(themeName => (
                      <option key={themeName} value={themeName}>{t(`themes.${themeName}`)}</option>
                  ))}
              </Select>
              <div className="pt-2 border-t border-void-secondary flex flex-col gap-1">
                  <Link to="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-3 bg-accent-primary text-void-secondary text-sm font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">
                      <span className="truncate">{t('start_free')}</span>
                  </Link>
                  <Link to="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-3 bg-transparent border-2 border-accent-primary text-accent-primary text-sm font-bold leading-normal transition-colors duration-300 hover:bg-accent-primary hover:text-void-primary">
                      <span className="truncate">{t('login')}</span>
                  </Link>
              </div>
          </nav>
      </div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                  <AppContent />
                </BrowserRouter>    </ThemeProvider>
  );
}

export default App;