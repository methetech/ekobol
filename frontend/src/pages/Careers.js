
import React from 'react';
import { useTranslation } from 'react-i18next';

const Careers = () => {
  const { t } = useTranslation('careers');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">{t('careers.title')}</h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">{t('careers.subtitle')}</p>
        </div>
        <div className="mt-20 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">{t('careers.why_work_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{t('careers.impact_title')}</h3>
              <p className="text-text-secondary">{t('careers.impact_description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{t('careers.innovation_title')}</h3>
              <p className="text-text-secondary">{t('careers.innovation_description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{t('careers.freedom_title')}</h3>
              <p className="text-text-secondary">{t('careers.freedom_description')}</p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">{t('careers.open_positions_title')}</h2>
          <div className="border border-void-secondary dark:border-white/10 rounded-lg p-12 text-center">
            <p className="text-lg text-text-secondary">{t('careers.no_open_positions')}</p>
            <p className="mt-4 text-text-secondary">{t('careers.exceptional_talent')}</p>
            <a className="mt-6 inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" href="mailto:careers@ekobol.com">{t('careers.contact_us_button')}</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;
