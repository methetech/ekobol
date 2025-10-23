import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Careers = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1'>
      <section className='px-4 sm:px-10 lg:px-20 py-16 lg:py-24 text-center bg-[var(--background-secondary-color)] dark:bg-black/20 border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'>
            {t('careersTitle')}
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            {t('careersSubtitle')}
          </p>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              {t('whyWorkTitle')}
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                {t('impactTitle')}
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                {t('impactBio')}
              </p>
            </div>
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                {t('innovationTitle')}
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                {t('innovationBio')}
              </p>
            </div>
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                {t('freedomTitle')}
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                {t('freedomBio')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-20 pb-20 lg:pb-24'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)] mb-8'>
            {t('positionsTitle')}
          </h2>
          <div className='p-12 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg'>
            <p className='text-lg text-[var(--text-secondary-color)]'>
              {t('noPositions')}
            </p>
            <p className='mt-4 text-[var(--text-secondary-color)]'>
              {t('contactUsPrompt')}
            </p>
            <a
              href='mailto:careers@ekobol.com'
              className='mt-6 inline-flex items-center justify-center rounded-full h-12 px-8 bg-[var(--primary-color)] text-white font-bold shadow-lg hover:shadow-xl transition-shadow'
            >
              {t('contactUsButton')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
