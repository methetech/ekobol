import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-4xl mx-auto prose lg:prose-xl'>
        <h1>{t('cookiesTitle')}</h1>
        <p className='text-sm text-[var(--text-secondary-color)]'>
          {t('cookiesLastUpdated')}
        </p>
        <p dangerouslySetInnerHTML={{ __html: t('cookiesIntro') }}></p>

        <h2>{t('whatAreCookiesTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('whatAreCookiesDesc') }}></p>

        <h2>{t('howWeUseCookiesTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('howWeUseCookiesDesc') }}></p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('essentialCookies') }}></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('performanceCookies') }}
          ></li>
          <li dangerouslySetInnerHTML={{ __html: t('functionalCookies') }}></li>
        </ul>

        <h2>{t('yourChoicesTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('yourChoicesDesc') }}></p>

        <h2>{t('contactUsTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('contactUsDesc') }}></p>
      </div>
    </main>
  );
};

export default Cookies;
