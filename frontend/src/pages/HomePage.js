import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MagicBento from '../components/MagicBento';
import GlassSurface from '../components/GlassSurface';

const HomePage = () => {
  const { t } = useTranslation('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 sm:px-10 lg:px-20 pt-10 pb-4 sm:pt-16 sm:pb-8 lg:pt-24 lg:pb-12 text-center relative" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-4 sm:mb-6 text-text-primary dark:hero-glow">
            {t('hero_title')}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-10">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/signup" className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-secondary text-base font-bold shadow-lg transition-all duration-300 hover:bg-accent-primary-dark hover:scale-105 hover:shadow-xl hover:text-white">
              <span className="truncate">{t('hero_cta1')}</span>
            </Link>
            <Link to="/solutions" className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent border-2 border-accent-primary text-accent-primary text-base font-bold transition-all duration-300 hover:bg-accent-primary hover:text-void-primary hover:scale-105 hover:shadow-xl">
              <span className="truncate">{t('hero_cta2')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Nexus Section */}



            <section className="px-4 sm:px-10 lg:px-20 py-10 lg:py-16" data-aos="fade-up">



              <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">



                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 text-center">{t('automation_nexus_title')}</h2>



                <p className="text-lg text-text-secondary mt-4 mb-8 text-center">{t('automation_nexus_subtitle')}</p>



                <MagicBento />



              </div>



            </section>

      {/* Genesis Engine Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-10 lg:py-16" data-aos="fade-up">
        <GlassSurface className="max-w-6xl mx-auto p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">{t('genesis_title')}</h2>
            <p className="text-lg text-text-secondary mt-4">{t('genesis_subtitle')}</p>
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 -z-10 hidden md:block"></div>
            <div className="relative flex flex-col items-center text-center p-4 sm:p-6 bg-void-primary/50 dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative mb-4 flex items-center justify-center size-12 sm:size-16 rounded-full bg-accent-primary text-void-secondary shadow-lg"><span className="text-xl sm:text-2xl font-bold">1</span></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-primary">{t('genesis_step1_title')}</h3>
              <p className="text-sm text-text-secondary">{t('genesis_step1_desc')}</p>
            </div>
            <div className="relative flex flex-col items-center text-center p-4 sm:p-6 bg-void-primary/50 dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative mb-4 flex items-center justify-center size-12 sm:size-16 rounded-full bg-accent-primary text-void-secondary shadow-lg"><span className="text-xl sm:text-2xl font-bold">2</span></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-primary">{t('genesis_step2_title')}</h3>
              <p className="text-sm text-text-secondary">{t('genesis_step2_desc')}</p>
            </div>
            <div className="relative flex flex-col items-center text-center p-4 sm:p-6 bg-void-primary/50 dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative mb-4 flex items-center justify-center size-12 sm:size-16 rounded-full bg-accent-primary text-void-secondary shadow-lg"><span className="text-xl sm:text-2xl font-bold">3</span></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-primary">{t('genesis_step3_title')}</h3>
              <p className="text-sm text-text-secondary">{t('genesis_step3_desc')}</p>
            </div>
          </div>
        </GlassSurface>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-10 lg:py-16 text-center" data-aos="fade-up">
        <GlassSurface className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">{t('final_cta_title')}</h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            {t('final_cta_subtitle')}
          </p>
          <Link to="/signup" className="inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-accent-primary text-void-secondary text-lg font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-white">
            <span className="truncate">{t('final_cta_button')}</span>
          </Link>
        </GlassSurface>
      </section>
    </div>
  );
};

export default HomePage;
