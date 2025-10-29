
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const themeOptions = [
    'asfalt-kemik',
    'light',
    'dark',
    'ocean-blue',
    'sunset-orange',
    'forest-green',
    'royal-purple',
    'ruby-red',
    'golden-yellow',
    'midnight-black',
    'steel-gray',
    'dusty-pink'
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-void-primary/80 dark:bg-black/50 backdrop-blur-xl p-4 z-50 flex justify-between items-center border-b border-void-secondary dark:border-white/10">
      <div>
        <h1 className="text-2xl font-bold text-accent-primary">Ekobol</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div>
          <button onClick={() => changeLanguage('tr')} className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'tr' ? 'bg-accent-primary text-void-primary' : 'text-text-secondary'}`}>TR</button>
          <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'en' ? 'bg-accent-primary text-void-primary' : 'text-text-secondary'}`}>EN</button>
        </div>

        {/* Theme Switcher */}
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md p-2 text-sm">
          {themeOptions.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
