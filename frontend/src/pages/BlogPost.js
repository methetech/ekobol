
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { t } = useTranslation('blog');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            {t('blog_post.title')}
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-15">{t('blog_post.date')}</time> tarafından <span className="font-semibold text-text-primary">{t('blog_post.author')}</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1920&auto=format&fit=crop" alt="{t('blog_post.image_alt')}" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            {t('blog_post.image_caption')}
          </figcaption>
        </figure>

        <p>
          {t('blog_post.p1')}
        </p>

        <h2>{t('blog_post.h2_1')}</h2>
        <p>
          {t('blog_post.p2')}
        </p>

        <h3>{t('blog_post.h3_1')}</h3>
        <p>
          {t('blog_post.p3')}
        </p>
        <ul>
          <li><strong>{t('blog_post.li1_strong')}:</strong> {t('blog_post.li1_text')}</li>
          <li><strong>{t('blog_post.li2_strong')}:</strong> {t('blog_post.li2_text')}</li>
          <li><strong>{t('blog_post.li3_strong')}:</strong> {t('blog_post.li3_text')}</li>
          <li><strong>{t('blog_post.li4_strong')}:</strong> {t('blog_post.li4_text')}</li>
          <li><strong>{t('blog_post.li5_strong')}:</strong> {t('blog_post.li5_text')}</li>
        </ul>

        <h2>{t('blog_post.h2_2')}</h2>
        <p>
          {t('blog_post.p4')}
        </p>
        <ul>
          <li><strong>{t('blog_post.li6_strong')}:</strong> {t('blog_post.li6_text')}</li>
          <li><strong>{t('blog_post.li7_strong')}:</strong> {t('blog_post.li7_text')}</li>
          <li><strong>{t('blog_post.li8_strong')}:</strong> {t('blog_post.li8_text')}</li>
        </ul>

        <p>
          {t('blog_post.p5')}
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">{t('blog_post.help_text')}</p>
          <Link to="/blog" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">{t('blog_post.help_button')}</span>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
