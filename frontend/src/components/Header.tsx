import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleDemoMode = () => {
    setIsDemoMode(!isDemoMode);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className='flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] px-4 sm:px-10 py-4 transition-colors duration-300 relative z-20'>
        <Link
          id='logo-link'
          className='flex items-center gap-3 text-2xl font-bold tracking-tight'
          to='/'
        >
          <img
            src='/ekobol.ico'
            alt='Ekobol Logo'
            className='h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24'
          />
        </Link>

        {/* Conditional Desktop Navigation */}
        {isDemoMode ? (
          <nav id='nav-logged-in' className='hidden md:flex items-center gap-8'>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/dashboard'
            >
              {t('headerDashboard')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/orders'
            >
              {t('headerOrders')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/products-manage'
            >
              {t('headerProducts')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/marketing-tools'
            >
              {t('headerMarketing')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/trends'
            >
              {t('headerAnalytics')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/finances'
            >
              {t('headerFinances')}
            </Link>
          </nav>
        ) : (
          <nav
            id='nav-logged-out'
            className='hidden md:flex items-center gap-8'
          >
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/product'
            >
              {t('headerProduct')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/solutions'
            >
              {t('headerSolutions')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/resources'
            >
              {t('headerResources')}
            </Link>
            <Link
              className='text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
              to='/pricing'
            >
              {t('headerPricing')}
            </Link>
          </nav>
        )}

        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='flex items-center gap-1 sm:gap-2 text-base font-medium'>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'font-bold text-[var(--text-primary-color)]' : 'text-[var(--text-secondary-color)]'}`}
            >
              EN
            </button>
            <span className='text-[var(--text-secondary-color)]'>/</span>
            <button
              onClick={() => setLanguage('tr')}
              className={`transition-colors ${language === 'tr' ? 'font-bold text-[var(--text-primary-color)]' : 'text-[var(--text-secondary-color)]'}`}
            >
              TR
            </button>
          </div>

          <button
            onClick={toggleTheme}
            type='button'
            className='p-2 rounded-full text-[var(--text-secondary-color)] hover:bg-[var(--divider-color)] transition-colors'
          >
            <svg
              className={`h-6 w-6 ${theme === 'dark' ? 'hidden' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              ></path>
            </svg>
            <svg
              className={`h-6 w-6 ${theme === 'light' ? 'hidden' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              ></path>
            </svg>
          </button>

          <button
            type='button'
            onClick={toggleDemoMode}
            className={`flex items-center justify-center rounded-full h-8 px-3 text-xs font-bold transition-colors duration-300 md:h-10 md:px-4 md:text-sm ${isDemoMode ? 'bg-[#0ecd90] text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDemoMode ? t('headerDemoModeOn') : t('headerEnableDemo')}
          </button>

          {isDemoMode ? (
            <div className='md:flex items-center gap-4'>
              <button
                onClick={toggleDemoMode}
                className='flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-red-500 text-white text-base font-bold'
              >
                <span className='truncate'>{t('headerLogout')}</span>
              </button>
            </div>
          ) : (
            <div className='md:flex items-center gap-4'>
              <Link
                className='hidden sm:inline-block text-base font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)]'
                to='/login'
              >
                {t('headerLogin')}
              </Link>
              <Link
                className='flex items-center justify-center rounded-full h-12 px-6 bg-[#0ecd90] text-white text-base font-bold min-w-[120px]'
                to='/signup'
              >
                <span className='truncate'>{t('headerSignup')}</span>
              </Link>
            </div>
          )}

          <button
            onClick={handleMobileMenuToggle}
            className='md:hidden p-2 rounded-full text-[var(--text-secondary-color)] hover:bg-[var(--divider-color)]'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <div
        onClick={handleMobileMenuToggle}
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-[var(--background-color)] shadow-lg z-40 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex items-center justify-between px-4 py-4 border-b border-[var(--border-color)]'>
            <Link
              to='/'
              className='flex items-center gap-3 text-xl font-bold tracking-tight'
            >
              <img src='/ekobol.ico' alt='Ekobol Logo' className='h-16 w-16' />
            </Link>
            <button
              onClick={handleMobileMenuToggle}
              className='p-2 rounded-full text-[var(--text-secondary-color)] hover:bg-[var(--divider-color)]'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <nav className='flex flex-col p-4 space-y-2'>
            {isDemoMode ? (
              <>
                <Link
                  className='block py-2 text-base font-medium'
                  to='/dashboard'
                >
                  {t('headerDashboard')}
                </Link>
                <Link className='block py-2 text-base font-medium' to='/orders'>
                  {t('headerOrders')}
                </Link>
                <button
                  onClick={toggleDemoMode}
                  className='w-full text-left py-2 text-base font-medium text-red-500'
                >
                  {t('headerLogout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  className='block py-2 text-base font-medium'
                  to='/product'
                >
                  {t('headerProduct')}
                </Link>
                <Link
                  className='block py-2 text-base font-medium'
                  to='/solutions'
                >
                  {t('headerSolutions')}
                </Link>
                <Link
                  className='block py-2 text-base font-medium'
                  to='/resources'
                >
                  {t('headerResources')}
                </Link>
                <Link
                  className='block py-2 text-base font-medium'
                  to='/pricing'
                >
                  {t('headerPricing')}
                </Link>
                <div className='pt-4 border-t border-[var(--divider-color)]'>
                  <Link
                    className='block text-center w-full py-2 bg-[var(--primary-color)] text-white rounded-full font-bold'
                    to='/signup'
                  >
                    {t('headerSignup')}
                  </Link>
                  <Link
                    className='block text-center w-full py-2 mt-2'
                    to='/login'
                  >
                    {t('headerLogin')}
                  </Link>
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
