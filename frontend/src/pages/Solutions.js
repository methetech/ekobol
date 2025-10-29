import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const { t } = useTranslation('solutions');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary dark:text-white">
          {t('solutions.title.part1')} <span className="dark:text-accent-primary">{t('solutions.title.part2')}</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          {t('solutions.subtitle')}
        </p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto space-y-24">
        {/* Solution 1: For the Artisan Ruler */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">{t('solutions.artisan.title')}</h2>
            <p className="text-lg text-text-secondary mb-6">{t('solutions.artisan.description')}</p>
            <Link to="/basic-plan" className="font-bold text-accent-primary hover:underline text-lg">{t('solutions.artisan.link')} →</Link>
          </div>
          <div className="bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1542157585-231e42157519?q=80&w=800&auto=format&fit=crop" alt={t('solutions.artisan.alt')} className="w-full h-full object-cover rounded-md"/>
          </div>
        </div>

        {/* Solution 2: For the Empire Architect */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 order-first md:order-last">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" alt={t('solutions.architect.alt')} className="w-full h-full object-cover rounded-md"/>
          </div>
          <div className="text-center md:text-left md:order-first">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">{t('solutions.architect.title')}</h2>
            <p className="text-lg text-text-secondary mb-6">{t('solutions.architect.description')}</p>
            <Link to="/partner-plan" className="font-bold text-accent-primary hover:underline text-lg">{t('solutions.architect.link')} →</Link>
          </div>
        </div>

        {/* Solution 3: For the Master Strategist */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">{t('solutions.strategist.title')}</h2>
            <p className="text-lg text-text-secondary mb-6">{t('solutions.strategist.description')}</p>
            <Link to="/dynamic-plan" className="font-bold text-accent-primary hover:underline text-lg">{t('solutions.strategist.link')} →</Link>
          </div>
          <div className="bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" alt={t('solutions.strategist.alt')} className="w-full h-full object-cover rounded-md"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Solutions;