import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Subscription = () => {
  const { t } = useTranslation('subscription');
  const [isYearly, setIsYearly] = useState(false);
  const [selectedMarketplaceTier, setSelectedMarketplaceTier] = useState(0);
  const [selectedAiFeatures, setSelectedAiFeatures] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const marketplaceTiers = [
    { id: 'marketplace-1', value: 200, label: t('marketplace_tiers.tier1_label'), price: t('marketplace_tiers.tier1_price') },
    { id: 'marketplace-3', value: 400, label: t('marketplace_tiers.tier2_label'), price: t('marketplace_tiers.tier2_price') },
    { id: 'marketplace-5', value: 800, label: t('marketplace_tiers.tier3_label'), price: t('marketplace_tiers.tier3_price') },
  ];

  const aiFeatures = [
    { id: 'ai-image-generator', value: 400, label: t('ai_features.image_generator_label'), price: t('ai_features.image_generator_price') },
    { id: 'ai-description-writer', value: 320, label: t('ai_features.description_writer_label'), price: t('ai_features.description_writer_price') },
    { id: 'ai-pricing-optimization', value: 480, label: t('ai_features.pricing_optimization_label'), price: t('ai_features.pricing_optimization_price') },
    { id: 'ai-inventory-automation', value: 600, label: t('ai_features.inventory_automation_label'), price: t('ai_features.inventory_automation_price') },
    { id: 'unified-analytics', value: 280, label: t('ai_features.unified_analytics_label'), price: t('ai_features.unified_analytics_price') },
    { id: 'seo-optimization-tools', value: 400, label: t('ai_features.seo_tools_label'), price: t('ai_features.seo_tools_price') },
    { id: 'social-media-scheduler', value: 360, label: t('ai_features.social_media_scheduler_label'), price: t('ai_features.social_media_scheduler_price') },
  ];

  useEffect(() => {
    let currentTotal = selectedMarketplaceTier;
    for (const featureId in selectedAiFeatures) {
      if (selectedAiFeatures[featureId]) {
        const feature = aiFeatures.find(f => f.id === featureId);
        if (feature) {
          currentTotal += feature.value;
        }
      }
    }
    if (isYearly) {
      currentTotal = currentTotal * 10; // 2 months free for yearly
    }
    setTotalAmount(currentTotal);
  }, [isYearly, selectedMarketplaceTier, selectedAiFeatures]);

  const handleMarketplaceChange = (e) => {
    setSelectedMarketplaceTier(parseInt(e.target.value));
  };

  const handleAiFeatureChange = (e) => {
    setSelectedAiFeatures({
      ...selectedAiFeatures,
      [e.target.id]: e.target.checked,
    });
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6">
              {t('subscription.title')}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {t('subscription.description')}
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <span id="monthly-label" className={`font-medium ${!isYearly ? 'text-text-primary' : 'text-text-secondary'}`}>{t('subscription.monthly')}</span>
              <div id="billing-toggle" className="relative inline-block w-14 h-8 rounded-full bg-gray-200 cursor-pointer" onClick={() => setIsYearly(!isYearly)}>
                <div id="toggle-circle" className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 shadow ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
              <span id="yearly-label" className={`font-medium ${isYearly ? 'text-text-primary' : 'text-text-secondary'}`}>{t('subscription.yearly')}</span>
            </div>
          </div>
          <div className="mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 flex flex-col gap-8">
              {/* Marketplace Tiers */}
              <div className="border border-void-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{t('marketplace_tiers.title')}</h3>
                <p className="text-text-secondary mb-6">{t('marketplace_tiers.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {marketplaceTiers.map(tier => (
                    <label key={tier.id} className="block p-4 border border-void-secondary rounded-lg cursor-pointer hover:border-accent-primary transition-colors">
                      <input
                        type="radio"
                        name="marketplace-tier"
                        id={tier.id}
                        value={tier.value}
                        className="mr-2 text-accent-primary focus:ring-accent-primary"
                        checked={selectedMarketplaceTier === tier.value}
                        onChange={handleMarketplaceChange}
                      />
                      {tier.label} <span className="font-bold">({tier.price})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AI Features */}
              <div className="border border-void-secondary rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{t('ai_features.title')}</h3>
                <p className="text-text-secondary mb-6">{t('ai_features.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aiFeatures.map(feature => (
                    <label key={feature.id} className="flex items-center p-4 border border-void-secondary rounded-lg cursor-pointer hover:border-accent-primary transition-colors">
                      <input
                        type="checkbox"
                        name="ai-features"
                        id={feature.id}
                        value={feature.value}
                        className="mr-2 text-accent-primary focus:ring-accent-primary"
                        checked={selectedAiFeatures[feature.id] || false}
                        onChange={handleAiFeatureChange}
                      />
                      {feature.label} <span className="font-bold ml-auto">({feature.price})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:w-1/3 border border-void-secondary rounded-lg p-8 sticky top-8 self-start bg-void-secondary">
              <h3 className="text-2xl font-bold mb-4">{t('summary_card.title')}</h3>
              <div className="text-center my-8">
                <p className="text-lg text-text-secondary">{t('summary_card.estimated_cost')}</p>
                <p id="total-amount" className="text-5xl font-bold text-accent-primary">₺{totalAmount.toFixed(2)}</p>
                <p className="text-sm text-text-secondary mt-2">{t('summary_card.note')}</p>
              </div>
              <ul className="space-y-3 text-text-secondary text-left mb-8">
                <li className="flex items-center"><svg className="h-5 w-5 text-system-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>{t('summary_card.feature1')}</span></li>
                <li className="flex items-center"><svg className="h-5 w-5 text-system-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>{t('summary_card.feature2')}</span></li>
                <li className="flex items-center"><svg className="h-5 w-5 text-system-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>{t('summary_card.feature3')}</span></li>
              </ul>
              <Link to="/signup" className="text-center w-full block rounded-full py-3 px-6 bg-accent-primary text-void-primary font-bold hover:shadow-xl transition-shadow">
                {t('summary_card.cta_button')}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Subscription;
