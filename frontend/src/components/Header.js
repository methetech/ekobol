import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const themeOptions = [
    'asfalt-kemik',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
  ];

  const navLinks = isLoggedIn ? (
    <>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('dashboard')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('orders')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('products')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('marketing')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('analytics')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('finances')}</button>
    </>
  ) : (
    <>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('product')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('solutions')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('resources')}</button>
      <button type="button" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('pricing')}</button>
    </>
  );

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-void-secondary px-4 sm:px-10 py-4 transition-colors duration-300 relative z-20">
      <a id="logo-link" className="flex items-center gap-3 text-2xl font-bold tracking-tight" href="index.html">
          <img src="/ekobol.ico" alt="Ekobol Logo" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks}
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Language and Theme Toggles */}
        <div className="flex items-center gap-1 sm:gap-2 text-base font-medium">
            <button type="button" onClick={() => changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'text-accent-primary' : 'text-text-secondary'}`}>EN</button>
            <span className="text-text-secondary">/</span>
            <button type="button" onClick={() => changeLanguage('tr')} className={`transition-colors ${i18n.language === 'tr' ? 'text-accent-primary' : 'text-text-secondary'}`}>TR</button>
        </div>
        
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md p-2 text-sm">
          {themeOptions.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
                <button type="button" onClick={() => setIsLoggedIn(false)} className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-void-secondary text-text-secondary text-base font-bold leading-normal tracking-wide transition-colors duration-300 hover:bg-void-primary hover:text-text-primary">
                    <span className="truncate">{t('logout')}</span>
                </button>
            ) : (
                <>
                    <button type="button" className="hidden sm:inline-block text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('login')}</button>
                    <button type="button" className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">
                        <span className="truncate">{t('start_free')}</span>
                    </button>
                </>
            )}
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      <div className={`fixed inset-y-0 right-0 w-64 bg-void-primary shadow-lg z-40 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-void-secondary">
              <a className="flex items-center gap-3 text-xl font-bold tracking-tight" href="index.html">
                  <img src="/ekobol.ico" alt="Ekobol Logo" className="h-16 w-16" />
              </a>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
              {navLinks}
              <div className="pt-4 border-t border-void-secondary flex flex-col gap-2">
                  {isLoggedIn ? (
                      <button type="button" onClick={() => setIsLoggedIn(false)} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-void-secondary text-text-secondary text-base font-bold leading-normal tracking-wide transition-colors duration-300 hover:bg-void-primary hover:text-text-primary">
                          <span className="truncate">{t('logout')}</span>
                      </button>
                  ) : (
                      <>
                          <button type="button" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">
                              <span className="truncate">{t('start_free')}</span>
                          </button>
                          <button type="button" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent border-2 border-accent-primary text-accent-primary text-base font-bold leading-normal transition-colors duration-300 hover:bg-accent-primary hover:text-void-primary">
                              <span className="truncate">{t('login')}</span>
                          </button>
                      </>
                  )}
              </div>
          </nav>
      </div>
    </header>
  );
};

export default Header;