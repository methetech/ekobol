
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useTranslation('blog');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">{t('blog.title')}</h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">{t('blog.subtitle')}</p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33d3?q=80&w=1920&auto=format&fit=crop" alt={t('blog.post1_image_alt')} className="h-48 w-full object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">{t('blog.post1_title')}</h3>
            <p className="text-text-secondary mb-6 grow">{t('blog.post1_description')}</p>
            <Link to="/blog-post" className="font-bold text-accent-primary hover:underline">{t('blog.read_more')} →</Link>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1518458028780-ec9860b0e35f?q=80&w=1920&auto=format&fit=crop" alt={t('blog.post2_image_alt')} className="h-48 w-full object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">{t('blog.post2_title')}</h3>
            <p className="text-text-secondary mb-6 grow">{t('blog.post2_description')}</p>
            <Link to="/ai-pricing-optimization" className="font-bold text-accent-primary hover:underline">{t('blog.read_more')} →</Link>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33d3?q=80&w=1920&auto=format&fit=crop" alt={t('blog.post3_image_alt')} className="h-48 w-full object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">{t('blog.post3_title')}</h3>
            <p className="text-text-secondary mb-6 grow">{t('blog.post3_description')}</p>
            <Link to="/new-image-styles-update" className="font-bold text-accent-primary hover:underline">{t('blog.read_more')} →</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
