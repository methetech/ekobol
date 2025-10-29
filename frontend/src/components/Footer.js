
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-void-secondary dark:bg-black/20 border-t border-void-secondary dark:border-white/10 p-8 text-center z-10 relative">
      <p className="text-text-secondary text-sm">
        © {new Date().getFullYear()} Me the Tech. Tüm Hakları Saklıdır. Ekobol bir Me the Tech markasıdır.
      </p>
    </footer>
  );
};

export default Footer;
