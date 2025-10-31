import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerPlan = () => {
  const { t } = useTranslation('pricing'); // Using pricing namespace for now

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">
                {t('partner_plan.title')}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                {t('partner_plan.description')}
              </p>
            </div>
            <div className="mt-16 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">{t('partner_plan.whats_included_title')}</h2>
              <ul className="space-y-4 text-lg text-text-secondary max-w-2xl mx-auto">
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-accent-primary mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-text-primary">{t('partner_plan.feature1_strong')}:</strong> {t('partner_plan.feature1_text')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-accent-primary mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-text-primary">{t('partner_plan.feature2_strong')}:</strong> {t('partner_plan.feature2_text')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-accent-primary mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-text-primary">{t('partner_plan.feature3_strong')}:</strong> {t('partner_plan.feature3_text')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-accent-primary mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-text-primary">{t('partner_plan.feature4_strong')}:</strong> {t('partner_plan.feature4_text')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-7 w-7 text-accent-primary mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-text-primary">{t('partner_plan.feature5_strong')}:</strong> {t('partner_plan.feature5_text')}</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <p className="text-4xl font-bold text-text-primary mb-4">{t('partner_plan.price')}</p>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">{t('partner_plan.strategy_text')}</p>
              <Link className="inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" to="/payment">
                <span className="truncate">{t('partner_plan.buy_button')}</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PartnerPlan;
