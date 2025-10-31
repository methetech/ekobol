import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import GlassSurface from './GlassSurface';


const Header = ({ onToggleMobileMenu }) => { // Added onToggleMobileMenu prop
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `Ekobol - ${title}`;
  }, [location]); // Removed isMobileMenuOpen from dependency array

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const themeOptions = [
    'asphalt',
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

  const navLinks = (
    <>
      <Link to="/solutions" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center">{t('nav_solutions')}</Link>
      <Link to="/pricing" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center">{t('nav_pricing')}</Link>
      <Link to="/resources" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center">{t('nav_resources')}</Link>
      <Link to="/about" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center">{t('nav_about')}</Link>
      <Link to="/contact" className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors min-h-[44px] flex items-center">{t('nav_contact')}</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-30 bg-transparent p-4">
      <GlassSurface className="p-0">
        <div className="flex items-center justify-between px-4 sm:px-10 py-4">
            <Link to="/" id="logo-link" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
                <img src={process.env.PUBLIC_URL + "/static/media/ekobol.png"} alt="Ekobol Logo" className="h-12 w-auto" />
            </Link>

                  {/* Desktop Navigation & Actions */}

                  <div className="hidden md:flex items-center gap-8">

                    <nav className="flex items-center gap-8">

                      {navLinks}

                    </nav>

                    <div className="flex items-center gap-4">

                        <Link to="/login" className="hidden sm:inline-block text-base font-medium text-text-secondary hover:text-text-primary transition-colors">{t('login')}</Link>

                        <Link to="/signup" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-secondary text-base font-bold leading-normal tracking-wide shadow-lg transition-colors duration-300 hover:bg-accent-primary-dark">

                            <span className="truncate">{t('start_free')}</span>

                        </Link>

                    </div>

                  </div>

            

                  {/* Language, Theme & Mobile Burger */}

                  <div className="flex items-center gap-2 sm:gap-4">

                    {/* Language and Theme Toggles */}

                    <div className="flex items-center gap-1 sm:gap-2 text-base font-medium">

                        <button type="button" onClick={() => changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'text-accent-primary' : 'text-text-secondary'}`}>EN</button>

                        <span className="text-text-secondary">/</span>

                        <button type="button" onClick={() => changeLanguage('tr')} className={`transition-colors ${i18n.language === 'tr' ? 'text-accent-primary' : 'text-text-secondary'}`}>TR</button>

                    </div>

                    

                    <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md py-2 px-3 text-sm">

                      {themeOptions.map(themeName => (

                        <option key={themeName} value={themeName}>{t(`themes.${themeName}`)}</option>

                      ))}

                    </select>

            

                    {/* Hamburger Menu Button */}

                    <button onClick={onToggleMobileMenu} className="md:hidden p-2 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">

                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                    </button>

                  </div>
        </div>
      </GlassSurface>
    </header>
  );
};

export default Header;