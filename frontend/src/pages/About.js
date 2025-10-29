import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary">
            {t('about.title.line1')}<br />{t('about.title.line2')}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-primary">{t('about.founders.title')}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('about.founders.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-center">
          <div>
            <div className="w-40 h-40 rounded-full bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 mx-auto mb-4 flex items-center justify-center">
              <svg className="h-20 w-20 text-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">{t('about.founders.members.0.name')}</h3>
            <p className="text-accent-primary font-semibold">{t('about.founders.members.0.role')}</p>
            <p className="mt-2 text-text-secondary">
              {t('about.founders.members.0.bio')}
            </p>
          </div>
          <div>
            <div className="w-40 h-40 rounded-full bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 mx-auto mb-4 flex items-center justify-center">
              <svg className="h-20 w-20 text-text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">{t('about.founders.members.1.name')}</h3>
            <p className="text-accent-primary font-semibold">{t('about.founders.members.1.role')}</p>
            <p className="mt-2 text-text-secondary">
              {t('about.founders.members.1.bio')}
            </p>
          </div>
        </div>

        <div className="mt-24 bg-void-secondary dark:bg-black/20 rounded-lg p-12 border border-void-secondary dark:border-white/10">
          <h2 className="text-3xl font-bold text-center mb-4 text-text-primary">{t('about.philosophy.title')}</h2>
          <p className="text-lg text-center text-text-secondary max-w-3xl mx-auto">
            {t('about.philosophy.content.part1')}<span className="font-bold text-text-primary">{t('about.philosophy.content.part2')}</span>{t('about.philosophy.content.part3')}
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;