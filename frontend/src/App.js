import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
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
import Product from './pages/Product';
import ProductAddEdit from './pages/ProductAddEdit';
import ProductDisplay from './pages/ProductDisplay';
import ProductsManage from './pages/ProductsManage';
import './App.css';

const AppContent = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="content-wrap">
        <Header />
        <main>
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
            <Route path="/product" element={<Product />} />
            <Route path="/product-add-edit" element={<ProductAddEdit />} />
            <Route path="/product-display" element={<ProductDisplay />} />
            <Route path="/products-manage" element={<ProductsManage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
                <BrowserRouter basename="/ekobol">
                  <AppContent />
                </BrowserRouter>    </ThemeProvider>
  );
}

export default App;