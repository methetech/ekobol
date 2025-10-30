import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `Ekobol - ${title}`;
  }, [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const themeOptions = [
    'retro',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'asfalt-kemik',
    'cyberpunk',
    'valentine',
    'halloween',
  ];

  const navLinks = (
    <>
      <Link to="/solutions" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('nav_solutions')}</Link>
      <Link to="/pricing" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('nav_pricing')}</Link>
      <Link to="/resources" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('nav_resources')}</Link>
      <Link to="/about" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('nav_about')}</Link>
      <Link to="/contact" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('nav_contact')}</Link>
    </>
  );

  return (
    <header className="sticky top-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-void-secondary/20 bg-void-primary/80 px-4 sm:px-10 py-4 transition-colors duration-300 z-20 backdrop-blur-lg">
      <Link to="/" id="logo-link" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <img src={process.env.PUBLIC_URL + "/static/media/ekobol.png"} alt="Ekobol Logo" className="h-12 w-auto" />
      </Link>

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
            <Link to="/login" className="hidden sm:inline-block text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('login')}</Link>
            <Link to="/signup" className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-secondary text-base font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">
                <span className="truncate">{t('start_free')}</span>
            </Link>
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
              <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tight">
                  <img src="/ekobol/ekobol.ico" alt="Ekobol Logo" className="h-16 w-16" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
              {navLinks}
              <div className="pt-4 border-t border-void-secondary flex flex-col gap-2">
                  <Link to="/signup" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">
                      <span className="truncate">{t('start_free')}</span>
                  </Link>
                  <Link to="/login" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent border-2 border-accent-primary text-accent-primary text-base font-bold leading-normal transition-colors duration-300 hover:bg-accent-primary hover:text-void-primary">
                      <span className="truncate">{t('login')}</span>
                  </Link>
              </div>
          </nav>
      </div>
    </header>
  );
};

export default Header;