import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Resources = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6'>
          {t('resourcesTitle')}
        </h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          {t('resourcesSubtitle')}
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='border border-[var(--divider-color)] rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-2xl font-bold mb-3'>{t('resourcesBlogTitle')}</h3>
          <p className='text-[var(--text-secondary-color)] mb-6'>
            {t('resourcesBlogDesc')}
          </p>
          <Link
            to='/blog'
            className='font-bold text-[var(--primary-color)] hover:underline'
          >
            {t('resourcesBlogLink')}
          </Link>
        </div>
        <div className='border border-[var(--divider-color)] rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-2xl font-bold mb-3'>
            {t('resourcesSuccessStoriesTitle')}
          </h3>
          <p className='text-[var(--text-secondary-color)] mb-6'>
            {t('resourcesSuccessStoriesDesc')}
          </p>
          <Link
            to='/success-stories'
            className='font-bold text-[var(--primary-color)] hover:underline'
          >
            {t('resourcesSuccessStoriesLink')}
          </Link>
        </div>
        <div className='border border-[var(--divider-color)] rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-2xl font-bold mb-3'>
            {t('resourcesHelpCenterTitle')}
          </h3>
          <p className='text-[var(--text-secondary-color)] mb-6'>
            {t('resourcesHelpCenterDesc')}
          </p>
          <Link
            to='/help-center'
            className='font-bold text-[var(--primary-color)] hover:underline'
          >
            {t('resourcesHelpCenterLink')}
          </Link>
        </div>
        <div className='border border-[var(--divider-color)] rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-2xl font-bold mb-3'>
            {t('resourcesWebinarsTitle')}
          </h3>
          <p className='text-[var(--text-secondary-color)] mb-6'>
            {t('resourcesWebinarsDesc')}
          </p>
          <Link
            to='/webinars'
            className='font-bold text-[var(--primary-color)] hover:underline'
          >
            {t('resourcesWebinarsLink')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Resources;
