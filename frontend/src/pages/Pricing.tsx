import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1
          className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'
          dangerouslySetInnerHTML={{ __html: t('pricingTitle') }}
        ></h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          {t('pricingSubtitle')}
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
        {/* Asi Paktı */}
        <div className='border border-[var(--divider-color)] dark:border-white/10 rounded-lg p-8 flex flex-col bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300'>
          <div className='grow'>
            <h3 className='text-2xl font-bold mb-2 text-[var(--text-primary-color)]'>
              {t('pricingRebelPactTitle')}
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('pricingRebelPactSubtitle')}
            </p>
            <p className='text-5xl font-bold mb-6 text-[var(--text-primary-color)] dark:text-white'>
              {t('pricingRebelPactPrice')}
              <span className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('pricingRebelPactPricePer')}
              </span>
            </p>
            <p className='font-semibold text-sm text-[var(--text-primary-color)] mb-4'>
              {t('pricingRebelPactIdealFor')}
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mb-8'>
              {t('pricingRebelPactIdealForDesc')}
            </p>
            <ul className='space-y-4 text-[var(--text-secondary-color)] mb-8'>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('pricingRebelPactFeature1'),
                  }}
                ></span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('pricingRebelPactFeature2'),
                  }}
                ></span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingRebelPactFeature3')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('pricingRebelPactFeature4'),
                  }}
                ></span>
              </li>
            </ul>
          </div>
          <Link
            to='/basic-plan'
            className='text-center w-full block rounded-full py-4 px-6 bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-bold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300'
          >
            {t('pricingRebelPactButton')}
          </Link>
        </div>

        {/* Hükümdar Fermanı */}
        <div className='border-2 border-[var(--primary-color)] rounded-lg p-8 flex flex-col relative bg-white dark:bg-emerald-900/10 shadow-2xl scale-[1.05]'>
          <p className='absolute top-0 -translate-y-1/2 bg-[var(--primary-color)] text-white px-4 py-1 rounded-full text-sm font-bold self-center'>
            {t('pricingRecommended')}
          </p>
          <div className='grow pt-4'>
            <h3 className='text-2xl font-bold mb-2 text-[var(--primary-color)]'>
              {t('pricingSovereignEdictTitle')}
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('pricingSovereignEdictSubtitle')}
            </p>
            <p className='text-5xl font-bold mb-6 text-[var(--text-primary-color)] dark:text-white'>
              {t('pricingSovereignEdictPrice')}
              <span className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('pricingSovereignEdictPricePer')}
              </span>
            </p>
            <p className='font-semibold text-sm text-[var(--text-primary-color)] mb-4'>
              {t('pricingSovereignEdictIdealFor')}
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mb-8'>
              {t('pricingSovereignEdictIdealForDesc')}
            </p>
            <ul className='space-y-4 text-[var(--text-secondary-color)] mb-8'>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('pricingSovereignEdictFeature1'),
                  }}
                ></span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingSovereignEdictFeature2')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingSovereignEdictFeature3')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingSovereignEdictFeature4')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingSovereignEdictFeature5')}</span>
              </li>
            </ul>
          </div>
          <Link
            to='/partner-plan'
            className='text-center w-full block rounded-full py-4 px-6 bg-[var(--primary-color)] text-white font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:bg-emerald-600 transition-all duration-300'
          >
            {t('pricingSovereignEdictButton')}
          </Link>
        </div>

        {/* Demirci Ocağı */}
        <div className='border border-[var(--divider-color)] dark:border-white/10 rounded-lg p-8 flex flex-col bg-white dark:bg-white/5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300'>
          <div className='grow'>
            <h3 className='text-2xl font-bold mb-2 text-[var(--text-primary-color)]'>
              {t('pricingBlacksmithForgeTitle')}
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('pricingBlacksmithForgeSubtitle')}
            </p>
            <p className='text-5xl font-bold mb-6 text-[var(--text-primary-color)] dark:text-white'>
              {t('pricingBlacksmithForgePrice')}
              <span className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('pricingBlacksmithForgePricePer')}
              </span>
            </p>
            <p className='font-semibold text-sm text-[var(--text-primary-color)] mb-4'>
              {t('pricingBlacksmithForgeIdealFor')}
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mb-8'>
              {t('pricingBlacksmithForgeIdealForDesc')}
            </p>
            <ul className='space-y-4 text-[var(--text-secondary-color)] mb-8'>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingBlacksmithForgeFeature1')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingBlacksmithForgeFeature2')}</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-6 w-6 text-emerald-500 mr-3 flex-shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{t('pricingBlacksmithForgeFeature3')}</span>
              </li>
            </ul>
          </div>
          <Link
            to='/subscription'
            className='text-center w-full block rounded-full py-4 px-6 bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-bold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300'
          >
            {t('pricingBlacksmithForgeButton')}
          </Link>
        </div>
      </div>

      {/* Ismarlama İttifaklar Section */}
      <div className='mt-24 max-w-5xl mx-auto w-full'>
        <div className='text-center mb-12'>
          <div className='w-24 h-px bg-[var(--divider-color)] dark:border-white/10 mx-auto'></div>
          <h2 className='text-3xl font-bold tracking-tight text-[var(--text-primary-color)] mt-12'>
            {t('pricingBespokeAlliancesTitle')}
          </h2>
          <p className='text-lg text-[var(--text-secondary-color)] mt-2'>
            {t('pricingBespokeAlliancesSubtitle')}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Link
            to='/dynamic-plan'
            className='group block p-8 bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg hover:border-[var(--primary-color)] transition-all duration-300'
          >
            <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
              {t('pricingDynamicAllianceTitle')}
            </h4>
            <p className='text-[var(--text-secondary-color)] mb-4'>
              {t('pricingDynamicAllianceDesc')}
            </p>
            <span className='font-bold text-[var(--primary-color)] group-hover:underline'>
              {t('pricingDynamicAllianceLink')}
            </span>
          </Link>
          <Link
            to='/build-transfer-service'
            className='group block p-8 bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg hover:border-[var(--primary-color)] transition-all duration-300'
          >
            <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
              {t('pricingBuildAndTransferTitle')}
            </h4>
            <p className='text-[var(--text-secondary-color)] mb-4'>
              {t('pricingBuildAndTransferDesc')}
            </p>
            <span className='font-bold text-[var(--primary-color)] group-hover:underline'>
              {t('pricingBuildAndTransferLink')}
            </span>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='mt-24 max-w-4xl mx-auto w-full'>
        <div className='text-center mb-12'>
          <div className='w-24 h-px bg-[var(--divider-color)] dark:border-white/10 mx-auto'></div>
          <h2 className='text-3xl font-bold tracking-tight text-[var(--text-primary-color)] mt-12'>
            {t('pricingFaqTitle')}
          </h2>
          <p className='text-lg text-[var(--text-secondary-color)] mt-2'>
            {t('pricingFaqSubtitle')}
          </p>
        </div>
        <div className='space-y-4'>
          <details className='p-6 rounded-lg bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 cursor-pointer group'>
            <summary className='font-semibold text-lg text-[var(--text-primary-color)] flex justify-between items-center'>
              <span>{t('pricingFaq1Question')}</span>
              <svg
                className='h-5 w-5 transform group-open:rotate-180 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </summary>
            <p className='mt-4 text-[var(--text-secondary-color)]'>
              {t('pricingFaq1Answer')}
            </p>
          </details>
          <details className='p-6 rounded-lg bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 cursor-pointer group'>
            <summary className='font-semibold text-lg text-[var(--text-primary-color)] flex justify-between items-center'>
              <span>{t('pricingFaq2Question')}</span>
              <svg
                className='h-5 w-5 transform group-open:rotate-180 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </summary>
            <p className='mt-4 text-[var(--text-secondary-color)]'>
              {t('pricingFaq2Answer')}
            </p>
          </details>
          <details className='p-6 rounded-lg bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 cursor-pointer group'>
            <summary className='font-semibold text-lg text-[var(--text-primary-color)] flex justify-between items-center'>
              <span>{t('pricingFaq3Question')}</span>
              <svg
                className='h-5 w-5 transform group-open:rotate-180 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </summary>
            <p className='mt-4 text-[var(--text-secondary-color)]'>
              {t('pricingFaq3Answer')}
            </p>
          </details>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
