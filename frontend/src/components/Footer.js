import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GlassSurface from './GlassSurface';

const Footer = () => {
  const { t } = useTranslation();
  const year = 2025;

  return (
    <footer className="bg-transparent text-text-secondary px-4 sm:px-10 py-8 md:py-12 transition-colors duration-300 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <GlassSurface className="w-full h-full p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-text-primary">
                <img src={process.env.PUBLIC_URL + "/static/media/ekobol.png"} alt="Ekobol Logo" className="h-24 w-24 sm:h-28 sm:w-28" />
              </Link>
              <p className="mt-4 text-sm max-w-xs">{t('footer_subtitle')}</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-base sm:text-lg text-text-primary mb-4">{t('footer_product_title')}</h4>
              <ul className="space-y-3">
                <li><Link to="/product" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_product_features')}</Link></li>
                <li><Link to="/solutions" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_product_solutions')}</Link></li>
                <li><Link to="/pricing" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_product_pricing')}</Link></li>
                <li><Link to="/blog" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_product_updates')}</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-base sm:text-lg text-text-primary mb-4">{t('footer_company_title')}</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_company_about')}</Link></li>
                <li><Link to="/careers" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_company_careers')}</Link></li>
                <li><Link to="/contact" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_company_contact')}</Link></li>
                <li><Link to="/resources" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_company_resources')}</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-base sm:text-lg text-text-primary mb-4">{t('footer_legal_title')}</h4>
              <ul className="space-y-3">
                <li><Link to="/terms" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_legal_terms')}</Link></li>
                <li><Link to="/privacy" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_legal_privacy')}</Link></li>
                <li><Link to="/cookies" className="text-sm sm:text-base hover:text-accent-primary transition-colors">{t('footer_legal_cookies')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-void-secondary text-center text-sm transition-colors duration-300">
            <p>{t('footer_copyright', { year })}</p>
          </div>
        </GlassSurface>
      </div>
    </footer>
  );
};

export default Footer;