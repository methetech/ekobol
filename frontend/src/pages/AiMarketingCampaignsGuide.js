
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AiMarketingCampaignsGuide = () => {
  const { t } = useTranslation('guide');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <article className="max-w-4xl mx-auto prose lg:prose-xl dark:prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent-primary hover:prose-a:text-accent-primary-dark prose-strong:text-text-primary prose-ul:text-text-secondary prose-ol:text-text-secondary">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
            {t('ai_marketing_campaigns_guide.title')}
          </h1>
          <p className="text-lg text-text-secondary">
            <time dateTime="2025-07-22">{t('ai_marketing_campaigns_guide.date')}</time> tarafından <span className="font-semibold text-text-primary">{t('ai_marketing_campaigns_guide.author')}</span>
          </p>
        </header>

        <figure className="mb-8">
          <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1920&auto=format&fit=crop" alt="{t('ai_marketing_campaigns_guide.image_alt')}" className="w-full rounded-lg shadow-md" />
          <figcaption className="text-center text-sm text-text-secondary mt-2">
            {t('ai_marketing_campaigns_guide.image_caption')}
          </figcaption>
        </figure>

        <p>
          {t('ai_marketing_campaigns_guide.p1')}
        </p>

        <h2>{t('ai_marketing_campaigns_guide.h2_1')}</h2>
        <ul>
          <li>{t('ai_marketing_campaigns_guide.li1_text')}</li>
          <li><strong>{t('ai_marketing_campaigns_guide.li2_strong')}</strong> {t('ai_marketing_campaigns_guide.li2_text')}</li>
          <li><strong>{t('ai_marketing_campaigns_guide.li3_strong')}</strong> {t('ai_marketing_campaigns_guide.li3_text')}</li>
        </ul>

        <h2>{t('ai_marketing_campaigns_guide.h2_2')}</h2>
        <p>
          {t('ai_marketing_campaigns_guide.p2')}
        </p>
        <ul>
          <li><strong>{t('ai_marketing_campaigns_guide.li4_strong')}:</strong> {t('ai_marketing_campaigns_guide.li4_text')}</li>
          <li><strong>{t('ai_marketing_campaigns_guide.li5_strong')}:</strong>
            <ul>
              <li><strong>{t('ai_marketing_campaigns_guide.li6_strong')}:</strong> {t('ai_marketing_campaigns_guide.li6_text')}</li>
              <li><strong>{t('ai_marketing_campaigns_guide.li7_strong')}:</strong> {t('ai_marketing_campaigns_guide.li7_text')}</li>
              <li><strong>{t('ai_marketing_campaigns_guide.li8_strong')}:</strong> {t('ai_marketing_campaigns_guide.li8_text')}</li>
            </ul>
          </li>
        </ul>

        <h2>{t('ai_marketing_campaigns_guide.h2_3')}</h2>
        <p>
          {t('ai_marketing_campaigns_guide.p3')}
        </p>
        <ul>
          <li><strong>{t('ai_marketing_campaigns_guide.li9_strong')}:</strong> {t('ai_marketing_campaigns_guide.li9_text')}</li>
          <li>{t('ai_marketing_campaigns_guide.li10_text')}</li>
        </ul>

        <h2>{t('ai_marketing_campaigns_guide.h2_4')}</h2>
        <p>
          {t('ai_marketing_campaigns_guide.p4')}
        </p>
        <ul>
          <li><strong>{t('ai_marketing_campaigns_guide.li11_strong')}:</strong> {t('ai_marketing_campaigns_guide.li11_text')}</li>
          <li><strong>{t('ai_marketing_campaigns_guide.li12_strong')}:</strong> {t('ai_marketing_campaigns_guide.li12_text')}</li>
        </ul>
        <p className="text-text-secondary italic">
          <strong>{t('ai_marketing_campaigns_guide.tip_strong')}:</strong> {t('ai_marketing_campaigns_guide.tip_text')}
        </p>

        <h2>{t('ai_marketing_campaigns_guide.h2_5')}</h2>
        <p>
          {t('ai_marketing_campaigns_guide.p5')}
        </p>
        <ul>
          <li>{t('ai_marketing_campaigns_guide.li13_text')}</li>
          <li>{t('ai_marketing_campaigns_guide.li14_text')}</li>
          <li>{t('ai_marketing_campaigns_guide.li15_text')}</li>
        </ul>

        <h2>{t('ai_marketing_campaigns_guide.h2_6')}</h2>
        <p>
          {t('ai_marketing_campaigns_guide.p6')}
        </p>

        <p>
          {t('ai_marketing_campaigns_guide.p7')}
        </p>

        <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
          <p className="text-lg text-text-secondary mb-4">{t('ai_marketing_campaigns_guide.help_text')}</p>
          <Link to="/help-center" className="inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">{t('ai_marketing_campaigns_guide.help_button')}</span>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default AiMarketingCampaignsGuide;
