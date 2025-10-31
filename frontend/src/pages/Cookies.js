
import React from 'react';
import { useTranslation } from 'react-i18next';

const Cookies = () => {
  const { t } = useTranslation('cookies');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <h1>{t('cookies.title')}</h1>
        <p className="text-sm text-text-secondary">{t('cookies.last_update')}</p>
        <p>{t('cookies.p1')}</p>

        <h2>{t('cookies.h2_1')}</h2>
        <p>{t('cookies.p2')}</p>

        <h2>{t('cookies.h2_2')}</h2>
        <p>{t('cookies.p3')}</p>
        <ul>
          <li><strong>{t('cookies.li1_strong')}:</strong> {t('cookies.li1_text')}</li>
          <li><strong>{t('cookies.li2_strong')}:</strong> {t('cookies.li2_text')}</li>
          <li><strong>{t('cookies.li3_strong')}:</strong> {t('cookies.li3_text')}</li>
        </ul>

        <h2>{t('cookies.h2_3')}</h2>
        <p>{t('cookies.p4')}</p>

        <h2>{t('cookies.h2_4')}</h2>
        <p>{t('cookies.p5')}</p>
      </div>
    </main>
  );
};

export default Cookies;
