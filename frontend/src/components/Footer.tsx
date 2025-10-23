import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='bg-[var(--background-secondary-color)] text-[var(--text-secondary-color)] px-4 sm:px-10 py-8 md:py-12 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left'>
          <Link
            className='flex items-center gap-3 text-2xl font-bold tracking-tight text-[var(--text-primary-color)]'
            to='/'
          >
            <img
              src='/ekobol.ico'
              alt='Ekobol Logo'
              className='h-20 w-20 sm:h-24 sm:w-24'
            />
          </Link>
          <p className='mt-4 text-sm max-w-xs'>{t('footerSlogan')}</p>
        </div>
        <div className='text-center sm:text-left'>
          <h4 className='font-semibold text-[var(--text-primary-color)] mb-4'>
            {t('footerProduct')}
          </h4>
          <ul className='space-y-3'>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/product'
              >
                {t('footerFeatures')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/solutions'
              >
                {t('footerSolutions')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/pricing'
              >
                {t('footerPricing')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/blog'
              >
                {t('footerUpdates')}
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-center sm:text-left'>
          <h4 className='font-semibold text-[var(--text-primary-color)] mb-4'>
            {t('footerCompany')}
          </h4>
          <ul className='space-y-3'>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/about'
              >
                {t('footerAbout')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/careers'
              >
                {t('footerCareers')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/contact'
              >
                {t('footerContact')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/resources'
              >
                {t('footerResources')}
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-center sm:text-left'>
          <h4 className='font-semibold text-[var(--text-primary-color)] mb-4'>
            {t('footerLegal')}
          </h4>
          <ul className='space-y-3'>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/terms'
              >
                {t('footerTerms')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/privacy'
              >
                {t('footerPrivacy')}
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-[var(--primary-color)] transition-colors'
                to='/cookies'
              >
                {t('footerCookies')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 pt-6 border-t border-[var(--border-color)] text-center text-sm transition-colors duration-300'>
        <p>{t('footerRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
