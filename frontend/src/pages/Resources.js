import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Resources = () => {
  const { t } = useTranslation('resources');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6">{t('resources.title')}</h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">{t('resources.subtitle')}</p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3">{t('resources.links.blog.title')}</h3>
          <p className="text-text-secondary mb-6">{t('resources.links.blog.description')}</p>
          <Link to="/blog" className="font-bold text-accent-primary hover:underline">{t('resources.links.blog.cta')} →</Link>
        </div>
        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3">{t('resources.links.success_stories.title')}</h3>
          <p className="text-text-secondary mb-6">{t('resources.links.success_stories.description')}</p>
          <Link to="/success-stories" className="font-bold text-accent-primary hover:underline">{t('resources.links.success_stories.cta')} →</Link>
        </div>
        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3">{t('resources.links.help_center.title')}</h3>
          <p className="text-text-secondary mb-6">{t('resources.links.help_center.description')}</p>
          <Link to="/help-center" className="font-bold text-accent-primary hover:underline">{t('resources.links.help_center.cta')} →</Link>
        </div>
        <div className="border border-void-secondary dark:border-white/10 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-3">{t('resources.links.webinars.title')}</h3>
          <p className="text-text-secondary mb-6">{t('resources.links.webinars.description')}</p>
          <Link to="/webinars" className="font-bold text-accent-primary hover:underline">{t('resources.links.webinars.cta')} →</Link>
        </div>
      </div>
    </main>
  );
};

export default Resources;