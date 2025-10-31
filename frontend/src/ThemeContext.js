
import React, { createContext, useState, useEffect } from 'react';

// 1. Context'i oluştur
export const ThemeContext = createContext();

// 2. Provider Bileşenini oluştur
export const ThemeProvider = ({ children }) => {
  // Temayı state'de tut, varsayılan olarak 'asfalt-kemik'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'asphalt';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Değişkenleri ve fonksiyonu provider aracılığıyla alt bileşenlere sağla
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
