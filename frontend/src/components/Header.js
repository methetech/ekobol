import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import GlassSurface from './GlassSurface';
import { UserCircleIcon, ArrowLeftOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher

const Header = ({ onToggleMobileMenu }) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `Ekobol - ${title}`;
  }, [location]);

  const themeOptions = [
    'asphalt', 'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
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
    <header className="sticky top-0 z-30 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassSurface className="p-0">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src={process.env.PUBLIC_URL + "/static/media/ekobol.png"} alt="Ekobol Logo" className="h-12 w-12" />
              </Link>
              <nav className="hidden md:flex md:ml-10 md:space-x-8">
                {navLinks}
              </nav>
              <div className="flex items-center space-x-2 ml-4">
                {/* Theme dropdown */}
                <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md py-1 px-2 text-xs">
                  {themeOptions.map(themeName => (
                    <option key={themeName} value={themeName}>{t(`themes.${themeName}`)}</option>
                  ))}
                </select>
                {/* LanguageSwitcher */}
                <LanguageSwitcher />
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
                {isLoggedIn ? (
                  <Link to="#" onClick={() => setIsLoggedIn(false)} className="p-1 text-text-secondary hover:text-text-primary">
                    <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                  </Link>
                ) : (
                  <div className="flex items-center">
                    <Link to="/login" className="p-1 text-text-secondary hover:text-text-primary">
                      <UserCircleIcon className="h-6 w-6" />
                    </Link>
                    <Link to="/signup" className="p-1 text-text-secondary hover:text-text-primary">
                      <UserPlusIcon className="h-6 w-6" />
                    </Link>
                  </div>
                )}
              </div>
              <div className="md:hidden">
                <button onClick={onToggleMobileMenu} className="p-2 rounded-full text-text-secondary hover:bg-void-secondary transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </header>
  );
};

export default Header;
