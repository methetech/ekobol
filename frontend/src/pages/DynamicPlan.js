import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DynamicPlan = () => {
  const { t } = useTranslation('pricing'); // Using pricing namespace for now

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">
                {t('dynamic_plan.title')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                {t('dynamic_plan.description')}
              </p>
            </div>
            <div className="mt-16 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">{t('dynamic_plan.how_it_works_title')}</h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-text-secondary mb-4">{t('dynamic_plan.how_it_works_text1')}</p>
                <p className="text-lg text-text-secondary">{t('dynamic_plan.how_it_works_text2')}</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-text-primary">{t('dynamic_plan.cta_title')}</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">{t('dynamic_plan.cta_description')}</p>
              <Link className="inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" to="/contact">
                <span className="truncate">{t('dynamic_plan.cta_button')}</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DynamicPlan;
