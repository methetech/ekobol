
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AiPricingOptimization = () => {
  const { t } = useTranslation('guide');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            {t('ai_pricing_optimization.title')}
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-16">{t('ai_pricing_optimization.date')}</time> tarafından <span className="font-semibold text-text-primary">{t('ai_pricing_optimization.author')}</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1518458028780-ec9860b0e35f?q=80&w=1920&auto=format&fit=crop" alt="{t('ai_pricing_optimization.image_alt')}" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            {t('ai_pricing_optimization.image_caption')}
          </figcaption>
        </figure>

        <p>
          {t('ai_pricing_optimization.p1')}
        </p>

        <h2>{t('ai_pricing_optimization.h2_1')}</h2>
        <p>
          {t('ai_pricing_optimization.p2')}
        </p>

        <h2>{t('ai_pricing_optimization.h2_2')}</h2>
        <p>
          {t('ai_pricing_optimization.p3')}
        </p>

        <h2>{t('ai_pricing_optimization.h2_3')}</h2>
        <p>
          {t('ai_pricing_optimization.p4')}
        </p>

        <h2>{t('ai_pricing_optimization.h2_4')}</h2>
        <p>
          {t('ai_pricing_optimization.p5')}
        </p>

        <h2>{t('ai_pricing_optimization.h2_5')}</h2>
        <p>
          {t('ai_pricing_optimization.p6')}
        </p>

        <p>
          {t('ai_pricing_optimization.p7')}
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">{t('ai_pricing_optimization.help_text')}</p>
          <Link to="/blog" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">{t('ai_pricing_optimization.help_button')}</span>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default AiPricingOptimization;
