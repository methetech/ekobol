import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary">
          {t('pricing.title.part1')}{' '}
          <span className="text-accent-primary">{t('pricing.title.part2')}</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          {t('pricing.subtitle')}
        </p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 flex flex-col bg-void-secondary dark:bg-black/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-text-primary">{t('pricing.pacts.rebel.title')}</h3>
          <p className="text-text-secondary mb-6">{t('pricing.pacts.rebel.subtitle')}</p>
          <p className="text-5xl font-bold mb-6 text-text-primary">
            {t('pricing.pacts.rebel.price')}
            <span className="text-lg font-medium text-text-secondary">
              {t('pricing.pacts.rebel.period')}
            </span>
          </p>
          <ul className="space-y-4 text-text-secondary mb-8 grow">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong className="text-text-primary">{t('pricing.pacts.rebel.features.0.name')}</strong>{' '}
                {t('pricing.pacts.rebel.features.0.desc')}
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                {t('pricing.pacts.rebel.features.1.desc')}{' '}
                <strong className="text-text-primary">{t('pricing.pacts.rebel.features.1.name')}</strong>
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.rebel.features.2')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong className="text-text-primary">{t('pricing.pacts.rebel.features.3.name')}</strong>{' '}
                {t('pricing.pacts.rebel.features.3.desc')}
              </span>
            </li>
          </ul>
          <Link
            to="/basic-plan"
            className="text-center w-full block rounded-full py-4 px-6 bg-transparent border-2 border-accent-primary text-accent-primary font-bold hover:bg-accent-primary hover:text-void-primary transition-all duration-300"
          >
            {t('pricing.pacts.rebel.cta')}
          </Link>
        </div>

        <div className="border-2 border-accent-primary rounded-lg p-8 flex flex-col relative bg-void-secondary dark:bg-accent-primary/5 shadow-2xl scale-[1.05]">
          <p className="absolute top-0 -translate-y-1/2 bg-accent-primary text-void-primary px-4 py-1 rounded-full text-sm font-bold self-center">
            {t('pricing.pacts.ruler.badge')}
          </p>
          <h3 className="text-2xl font-bold mb-2 pt-4 text-text-primary">{t('pricing.pacts.ruler.title')}</h3>
          <p className="text-text-secondary mb-6">{t('pricing.pacts.ruler.subtitle')}</p>
          <p className="text-5xl font-bold mb-6 text-text-primary">
            {t('pricing.pacts.ruler.price')}
            <span className="text-lg font-medium text-text-secondary">
              {t('pricing.pacts.ruler.period')}
            </span>
          </p>
          <ul className="space-y-4 text-text-secondary mb-8 grow">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                <strong className="text-text-primary">{t('pricing.pacts.ruler.features.0.name')}</strong>
                {t('pricing.pacts.ruler.features.0.desc')}
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.ruler.features.1')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.ruler.features.2')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.ruler.features.3')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.ruler.features.4')}</span>
            </li>
          </ul>
          <Link
            to="/partner-plan"
            className="text-center w-full block rounded-full py-4 px-6 bg-accent-primary text-void-primary font-bold shadow-lg shadow-accent-primary/30 hover:shadow-xl hover:bg-accent-primary-dark transition-all duration-300"
          >
            {t('pricing.pacts.ruler.cta')}
          </Link>
        </div>

        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 flex flex-col bg-void-secondary dark:bg-black/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-text-primary">{t('pricing.pacts.blacksmith.title')}</h3>
          <p className="text-text-secondary mb-6">{t('pricing.pacts.blacksmith.subtitle')}</p>
          <p className="text-5xl font-bold mb-6 text-text-primary">
            {t('pricing.pacts.blacksmith.price')}
            <span className="text-lg font-medium text-text-secondary">
              {t('pricing.pacts.blacksmith.period')}
            </span>
          </p>
          <ul className="space-y-4 text-text-secondary mb-8 grow">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.blacksmith.features.0')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.blacksmith.features.1')}</span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-system-success mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('pricing.pacts.blacksmith.features.2')}</span>
            </li>
          </ul>
          <Link
            to="/subscription"
            className="text-center w-full block rounded-full py-4 px-6 bg-transparent border-2 border-accent-primary text-accent-primary font-bold hover:bg-accent-primary hover:text-void-primary transition-all duration-300"
          >
            {t('pricing.pacts.blacksmith.cta')}
          </Link>
        </div>
      </div>

      <div className="mt-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            {t('pricing.alliances.title')}
          </h2>
          <p className="text-lg text-text-secondary mt-2">{t('pricing.alliances.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-xl mb-2 text-text-primary">
              {t('pricing.alliances.dynamic.title')}
            </h4>
            <p className="text-text-secondary">{t('pricing.alliances.dynamic.description')}</p>
          </div>
          <div className="p-6 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg">
            <h4 className="font-bold text-xl mb-2 text-text-primary">
              {t('pricing.alliances.build_transfer.title')}
            </h4>
            <p className="text-text-secondary">{t('pricing.alliances.build_transfer.description')}</p>
          </div>
        </div>
      </div>

      <div className="mt-24 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">{t('pricing.faq.title')}</h2>
          <p className="text-lg text-text-secondary mt-2">{t('pricing.faq.subtitle')}</p>
        </div>
        <div className="space-y-4">
          <details className="p-6 rounded-lg bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 cursor-pointer group">
            <summary className="font-semibold text-lg text-text-primary list-none group-open:text-accent-primary">
              {t('pricing.faq.questions.0.q')}
            </summary>
            <p className="mt-4 text-text-secondary">{t('pricing.faq.questions.0.a')}</p>
          </details>
          <details className="p-6 rounded-lg bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 cursor-pointer group">
            <summary className="font-semibold text-lg text-text-primary list-none group-open:text-accent-primary">
              {t('pricing.faq.questions.1.q')}
            </summary>
            <p className="mt-4 text-text-secondary">{t('pricing.faq.questions.1.a')}</p>
          </details>
          <details className="p-6 rounded-lg bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 cursor-pointer group">
            <summary className="font-semibold text-lg text-text-primary list-none group-open:text-accent-primary">
              {t('pricing.faq.questions.2.q')}
            </summary>
            <p className="mt-4 text-text-secondary">{t('pricing.faq.questions.2.a')}</p>
          </details>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
