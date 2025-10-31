
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BestPracticesAiDescriptions = () => {
  const { t } = useTranslation('guide');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            {t('best_practices_ai_descriptions.title')}
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-19">{t('best_practices_ai_descriptions.date')}</time> tarafından <span className="font-semibold text-text-primary">{t('best_practices_ai_descriptions.author')}</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop" alt="{t('best_practices_ai_descriptions.image_alt')}" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            {t('best_practices_ai_descriptions.image_caption')}
          </figcaption>
        </figure>

        <p>
          {t('best_practices_ai_descriptions.p1')}
        </p>

        <h2>{t('best_practices_ai_descriptions.h2_1')}</h2>
        <p>
          {t('best_practices_ai_descriptions.p2')}
        </p>
        <ul>
          <li><strong>{t('best_practices_ai_descriptions.li1_strong')}:</strong> {t('best_practices_ai_descriptions.li1_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li2_strong')}:</strong> {t('best_practices_ai_descriptions.li2_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li3_strong')}:</strong> {t('best_practices_ai_descriptions.li3_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li4_strong')}:</strong> {t('best_practices_ai_descriptions.li4_text')}</li>
        </ul>

        <h2>{t('best_practices_ai_descriptions.h2_2')}</h2>
        <p>
          {t('best_practices_ai_descriptions.p3')}
        </p>
        <ul>
          <li>{t('best_practices_ai_descriptions.li5_text')}</li>
          <li>{t('best_practices_ai_descriptions.li6_text')}</li>
          <li>{t('best_practices_ai_descriptions.li7_text')}</li>
        </ul>

        <h2>{t('best_practices_ai_descriptions.h2_3')}</h2>
        <p>
          {t('best_practices_ai_descriptions.p4')}
        </p>
        <ul>
          <li>{t('best_practices_ai_descriptions.li8_text')}</li>
        </ul>

        <h2>{t('best_practices_ai_descriptions.h2_4')}</h2>
        <p>
          {t('best_practices_ai_descriptions.p5')}
        </p>
        <ul>
          <li><strong>{t('best_practices_ai_descriptions.li9_strong')}:</strong> {t('best_practices_ai_descriptions.li9_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li10_strong')}:</strong> {t('best_practices_ai_descriptions.li10_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li11_strong')}:</strong> {t('best_practices_ai_descriptions.li11_text')}</li>
          <li><strong>{t('best_practices_ai_descriptions.li12_strong')}:</strong> {t('best_practices_ai_descriptions.li12_text')}</li>
        </ul>

        <h2>{t('best_practices_ai_descriptions.h2_5')}</h2>
        <p>
          {t('best_practices_ai_descriptions.p6')}
        </p>

        <p>
          {t('best_practices_ai_descriptions.p7')}
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">{t('best_practices_ai_descriptions.help_text')}</p>
          <Link to="/help-center" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">{t('best_practices_ai_descriptions.help_button')}</span>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BestPracticesAiDescriptions;
