import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessStories = () => {
  const { t } = useTranslation('successStories');

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6">
              {t('success_stories.title')}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {t('success_stories.description')}
            </p>
          </div>
          <div className="mt-20 max-w-7xl mx-auto space-y-20">
            {/* Story 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?q=80&w=1920&auto=format&fit=crop" alt="{t('success_stories.story1_image_alt')}" className="w-full h-auto rounded-lg mb-4"/>
                <blockquote className="text-xl md:text-2xl font-medium leading-snug italic text-center">
                  {t('success_stories.story1_quote')}
                </blockquote>
                <p className="mt-4 font-bold text-lg text-center">{t('success_stories.story1_author')}</p>
                <p className="text-text-secondary text-center">{t('success_stories.story1_author_title')}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{t('success_stories.story1_heading')}</h2>
                <p className="text-lg text-text-secondary mb-4">{t('success_stories.story1_p1')}</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li><span className="font-bold text-text-primary">{t('success_stories.story1_li1_strong')}:</span> {t('success_stories.story1_li1_text')}</li>
                  <li><span className="font-bold text-text-primary">{t('success_stories.story1_li2_strong')}:</span> {t('success_stories.story1_li2_text')}</li>
                  <li><span className="font-bold text-text-primary">{t('success_stories.story1_li3_strong')}:</span> {t('success_stories.story1_li3_text')}</li>
                </ul>
              </div>
            </div>

            {/* Story 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-last md:order-first">
                <h2 className="text-3xl font-bold mb-4">{t('success_stories.story2_heading')}</h2>
                <p className="text-lg text-text-secondary mb-4">{t('success_stories.story2_p1')}</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li><span className="font-bold text-text-primary">{t('success_stories.story2_li1_strong')}:</span> {t('success_stories.story2_li1_text')}</li>
                  <li><span className="font-bold text-text-primary">{t('success_stories.story2_li2_strong')}:</span> {t('success_stories.story2_li2_text')}</li>
                  <li><span className="font-bold text-text-primary">{t('success_stories.story2_li3_strong')}:</span> {t('success_stories.story2_li3_text')}</li>
                </ul>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?q=80&w=1920&auto=format&fit=crop" alt="{t('success_stories.story2_image_alt')}" className="w-full h-auto rounded-lg mb-4"/>
                <blockquote className="text-xl md:text-2xl font-medium leading-snug italic text-center">
                  {t('success_stories.story2_quote')}
                </blockquote>
                <p className="mt-4 font-bold text-lg text-center">{t('success_stories.story2_author')}</p>
                <p className="text-text-secondary text-center">{t('success_stories.story2_author_title')}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SuccessStories;
