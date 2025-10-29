import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedBackground from '../components/AnimatedBackground';

const HomePage = () => {
  const { t } = useTranslation();
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <main className="flex-1">
        <AnimatedBackground />
        {/* Hero Section */}
        <section className="px-4 sm:px-10 lg:px-20 py-24 lg:py-40 text-center relative" data-aos="fade-up">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary dark:hero-glow">
                  {t('hero_title')}
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10">
                  {t('hero_subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-accent-primary text-void-primary text-lg font-bold shadow-lg transition-all duration-300 hover:bg-accent-primary-dark" href="signup.html">
                        <span className="truncate">{t('hero_cta1')}</span>
                    </a>
                    <a className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent border-2 border-accent-primary text-accent-primary text-lg font-bold transition-all duration-300 hover:bg-accent-primary hover:text-void-primary" href="solutions.html">
                        <span className="truncate">{t('hero_cta2')}</span>
                    </a>
                </div>
            </div>
        </section>
        
        {/* Genesis Engine Section */}
        <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-32 bg-void-secondary dark:bg-black/20 border-t border-b border-void-secondary dark:border-white/10" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">{t('genesis_title')}</h2>
                     <p className="text-lg text-text-secondary mt-4">{t('genesis_subtitle')}</p>
                </div>
                <div className="relative grid md:grid-cols-3 gap-8">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 -z-10 hidden md:block"></div>
                    <div className="relative flex flex-col items-center text-center p-6 bg-void-primary dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
                        <div className="relative mb-6 flex items-center justify-center size-16 rounded-full bg-accent-primary text-void-primary shadow-lg"><span className="text-2xl font-bold">1</span></div>
                        <h3 className="text-xl font-bold mb-3 text-text-primary">{t('genesis_step1_title')}</h3>
                        <p className="text-text-secondary">{t('genesis_step1_desc')}</p>
                    </div>
                    <div className="relative flex flex-col items-center text-center p-6 bg-void-primary dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
                        <div className="relative mb-6 flex items-center justify-center size-16 rounded-full bg-accent-primary text-void-primary shadow-lg"><span className="text-2xl font-bold">2</span></div>
                        <h3 className="text-xl font-bold mb-3 text-text-primary">{t('genesis_step2_title')}</h3>
                        <p className="text-text-secondary">{t('genesis_step2_desc')}</p>
                    </div>
                    <div className="relative flex flex-col items-center text-center p-6 bg-void-primary dark:bg-white/5 rounded-lg border border-void-secondary dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow">
                        <div className="relative mb-6 flex items-center justify-center size-16 rounded-full bg-accent-primary text-void-primary shadow-lg"><span className="text-2xl font-bold">3</span></div>
                        <h3 className="text-xl font-bold mb-3 text-text-primary">{t('genesis_step3_title')}</h3>
                        <p className="text-text-secondary">{t('genesis_step3_desc')}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Playground Section */}
        <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">{t('playground_title')}</h2>
                    <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">{t('playground_subtitle')}</p>
                </div>

                <div className="relative bg-void-secondary dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 transition-all duration-500 min-h-[600px] overflow-hidden">
                    
                    <div className={`text-center max-w-lg mx-auto transition-opacity duration-500 ease-in-out ${isTransformed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <h3 className="text-xl font-bold mb-4 text-text-primary uppercase tracking-widest">{t('playground_initial_title')}</h3>
                        <div className="bg-white dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-4 group">
                            <img src="/wallet-before.webp" alt="Sade bir cüzdan fotoğrafı" className="rounded-lg aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"/>
                            <p className="text-sm text-text-secondary mt-2">{t('playground_initial_desc')}</p>
                        </div>
                        <button onClick={() => setIsTransformed(true)} className="mt-8 flex w-full max-w-xs mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-accent-primary text-void-primary text-lg font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300">
                            <span>{t('playground_transform_button')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09z" /></svg>
                        </button>
                    </div>

                    <div className={`absolute inset-0 p-8 transition-opacity duration-700 ease-in-out ${isTransformed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <h3 className="text-xl font-bold mb-4 text-text-primary uppercase tracking-widest text-center">{t('playground_final_title')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                            <div className="lg:col-span-1 h-full flex flex-col">
                                <h4 className="font-bold mb-2 text-text-secondary">{t('playground_studio_title')}</h4>
                                <img src="/wallet-after.webp" alt="YZ tarafından oluşturulmuş cüzdan fotoğrafı" className="rounded-lg w-full h-full object-cover border border-void-secondary dark:border-white/10 shadow-lg"/>
                            </div>
                            <div className="lg:col-span-2 grid grid-rows-2 gap-8 h-full">
                                <div className="row-span-1 flex flex-col">
                                    <h4 className="font-bold mb-2 text-text-secondary">{t('playground_desc_title')}</h4>
                                    <div className="bg-void-primary border border-void-secondary dark:border-white/10 rounded-lg p-4 text-sm h-full flex items-center">
                                        <p className="text-text-secondary">{t('playground_desc_content')}</p>
                                    </div>
                                </div>
                                <div className="row-span-1 flex flex-col">
                                    <h4 className="font-bold mb-2 text-text-secondary">{t('playground_price_title')}</h4>
                                    <div className="bg-void-primary border border-void-secondary dark:border-white/10 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
                                        <p className="text-lg text-text-secondary">{t('playground_price_subtitle')}</p>
                                        <p className="text-5xl font-bold text-accent-primary">₺4,950</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center absolute bottom-4 left-1/2 -translate-x-1/2">
                            <button onClick={() => setIsTransformed(false)} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{t('playground_reset_button')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24 text-center" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">{t('final_cta_title')}</h2>
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
                  {t('final_cta_subtitle')}
                </p>
                <a className="inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-accent-primary text-void-primary text-lg font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300" href="signup.html">
                    <span className="truncate">{t('final_cta_button')}</span>
                </a>
            </div>
        </section>
    </main>
  );
};

export default HomePage;