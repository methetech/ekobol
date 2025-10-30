import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AutomationCore = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative py-20 lg:py-32 bg-void-secondary dark:bg-black/30 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background animation/effect goes here */}
        <div className="absolute inset-0 bg-gradient-to-br from-void-secondary to-black opacity-50 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-20 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary hero-glow">
          {t('automation_core_title')}
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12">
          {t('automation_core_subtitle')}
        </p>

        <div className="relative flex items-center justify-center h-96">
          {/* Central Core */}
          <div className="relative w-64 h-64 rounded-full bg-accent-primary/20 flex items-center justify-center animate-spin-slow">
            <div className="w-48 h-48 rounded-full bg-accent-primary/40 flex items-center justify-center animate-spin-reverse-slow">
              <div className="w-32 h-32 rounded-full bg-accent-primary flex items-center justify-center shadow-2xl shadow-accent-primary/50">
                <span className="text-void-secondary text-2xl font-bold">AI</span>
              </div>
            </div>
          </div>

          {/* Data Flow Lines (Placeholder) */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-system-success rounded-full animate-flow-1"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-system-info rounded-full animate-flow-2"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-system-warning rounded-full animate-flow-3"></div>
            <div className="absolute bottom-1/2 right-0 w-2 h-2 bg-system-error rounded-full animate-flow-4"></div>
          </div>
        </div>

        <div className="mt-16">
          <Link to="/solutions" className="inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-accent-primary text-void-secondary text-lg font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300">
            <span className="truncate">{t('automation_core_cta')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AutomationCore;
