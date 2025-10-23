import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AiImageGeneratorGuide from './pages/AiImageGeneratorGuide';
import AiInventoryAutomationGuide from './pages/AiInventoryAutomationGuide';
import AiMarketingCampaignsGuide from './pages/AiMarketingCampaignsGuide';
import AiPricingOptimization from './pages/AiPricingOptimization';
import BasicPlan from './pages/BasicPlan';
import BestPracticesAiDescriptions from './pages/BestPracticesAiDescriptions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BuildTransferService from './pages/BuildTransferService';
import Careers from './pages/Careers';
import ConnectMarketplaceGuide from './pages/ConnectMarketplaceGuide';
import Cookies from './pages/Cookies';
import Dashboard from './pages/Dashboard';
import DynamicPlan from './pages/DynamicPlan';
import Finances from './pages/Finances';
import ForgotPassword from './pages/ForgotPassword';
import FullStatement from './pages/FullStatement';
import GenerateReport from './pages/GenerateReport';
import HelpCenter from './pages/HelpCenter';
import HowRevenueSharingWorksGuide from './pages/HowRevenueSharingWorksGuide';
import Invoice from './pages/Invoice';
import LiveAnalytics from './pages/LiveAnalytics';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';
import MarketingTools from './pages/MarketingTools';
import NewImageStylesUpdate from './pages/NewImageStylesUpdate';
import OptimizePricingWithAiGuide from './pages/OptimizePricingWithAiGuide';
import OrderDetail from './pages/OrderDetail';
import Orders from './pages/Orders';
import OrderTracking from './pages/OrderTracking';
import PartnerPlan from './pages/PartnerPlan';
import Payment from './pages/Payment';
import PriceOptimizationConversionGuide from './pages/PriceOptimizationConversionGuide';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Product from './pages/Product';
import ProductAddEdit from './pages/ProductAddEdit';
import ProductDisplay from './pages/ProductDisplay';
import ProductEditDeleteGuide from './pages/ProductEditDeleteGuide';
import ProductsManage from './pages/ProductsManage';
import Resources from './pages/Resources';
import SeoOptimizationToolsGuide from './pages/SeoOptimizationToolsGuide';
import SetupProfileGuide from './pages/SetupProfileGuide';
import Signup from './pages/Signup';
import SocialMediaSchedulerGuide from './pages/SocialMediaSchedulerGuide';
import Solutions from './pages/Solutions';
import Subscription from './pages/Subscription';
import SuccessStories from './pages/SuccessStories';
import Terms from './pages/Terms';
import Trends from './pages/Trends';
import UnderstandingDashboardGuide from './pages/UnderstandingDashboardGuide';
import UpdatePayment from './pages/UpdatePayment';
import UpgradeDowngradePlanGuide from './pages/UpgradeDowngradePlanGuide';
import ViewingInvoicesGuide from './pages/ViewingInvoicesGuide';
import Webinars from './pages/Webinars';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/ai-image-generator-guide'
            element={<AiImageGeneratorGuide />}
          />
          <Route
            path='/ai-inventory-automation-guide'
            element={<AiInventoryAutomationGuide />}
          />
          <Route
            path='/ai-marketing-campaigns-guide'
            element={<AiMarketingCampaignsGuide />}
          />
          <Route
            path='/ai-pricing-optimization'
            element={<AiPricingOptimization />}
          />
          <Route path='/basic-plan' element={<BasicPlan />} />
          <Route
            path='/best-practices-ai-descriptions'
            element={<BestPracticesAiDescriptions />}
          />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-post' element={<BlogPost />} />
          <Route
            path='/build-transfer-service'
            element={<BuildTransferService />}
          />
          <Route path='/careers' element={<Careers />} />
          <Route
            path='/connect-marketplace-guide'
            element={<ConnectMarketplaceGuide />}
          />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dynamic-plan' element={<DynamicPlan />} />
          <Route path='/finances' element={<Finances />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/full-statement' element={<FullStatement />} />
          <Route path='/generate-report' element={<GenerateReport />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route
            path='/how-revenue-sharing-works-guide'
            element={<HowRevenueSharingWorksGuide />}
          />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/live-analytics' element={<LiveAnalytics />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-success' element={<LoginSuccess />} />
          <Route path='/marketing-tools' element={<MarketingTools />} />
          <Route
            path='/new-image-styles-update'
            element={<NewImageStylesUpdate />}
          />
          <Route
            path='/optimize-pricing-with-ai-guide'
            element={<OptimizePricingWithAiGuide />}
          />
          <Route path='/order-detail' element={<OrderDetail />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
          <Route path='/partner-plan' element={<PartnerPlan />} />
          <Route path='/payment' element={<Payment />} />
          <Route
            path='/price-optimization-conversion-guide'
            element={<PriceOptimizationConversionGuide />}
          />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product-add-edit' element={<ProductAddEdit />} />
          <Route path='/product-display' element={<ProductDisplay />} />
          <Route
            path='/product-edit-delete-guide'
            element={<ProductEditDeleteGuide />}
          />
          <Route path='/products-manage' element={<ProductsManage />} />
          <Route path='/resources' element={<Resources />} />
          <Route
            path='/seo-optimization-tools-guide'
            element={<SeoOptimizationToolsGuide />}
          />
          <Route path='/setup-profile-guide' element={<SetupProfileGuide />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/social-media-scheduler-guide'
            element={<SocialMediaSchedulerGuide />}
          />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/success-stories' element={<SuccessStories />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/trends' element={<Trends />} />
          <Route
            path='/understanding-dashboard-guide'
            element={<UnderstandingDashboardGuide />}
          />
          <Route path='/update-payment' element={<UpdatePayment />} />
          <Route
            path='/upgrade-downgrade-plan-guide'
            element={<UpgradeDowngradePlanGuide />}
          />
          <Route
            path='/viewing-invoices-guide'
            element={<ViewingInvoicesGuide />}
          />
          <Route path='/webinars' element={<Webinars />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
