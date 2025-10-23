import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1
          className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'
          dangerouslySetInnerHTML={{ __html: t('solutionsTitle') }}
        ></h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          {t('solutionsSubtitle')}
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto space-y-24'>
        {/* Solution 1: For the Artisan Ruler */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold mb-4 text-[var(--text-primary-color)]'>
              {t('solutionsArtisanTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mb-6'>
              {t('solutionsArtisanDesc')}
            </p>
            <Link
              to='/basic-plan'
              className='font-bold text-[var(--primary-color)] hover:underline text-lg'
            >
              {t('solutionsArtisanLink')}
            </Link>
          </div>
          <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img
              src='https://images.unsplash.com/photo-1542157585-231e42157519?q=80&w=800&auto=format&fit=crop'
              alt='Zanaatkar bir hükümdar atölyesinde çalışıyor'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
        </div>

        {/* Solution 2: For the Empire Architect */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 order-first md:order-last'>
            <img
              src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
              alt='İmparatorluk mimarları bir proje üzerinde işbirliği yapıyor'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
          <div className='text-center md:text-left md:order-first'>
            <h2 className='text-3xl font-bold mb-4 text-[var(--text-primary-color)]'>
              {t('solutionsArchitectTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mb-6'>
              {t('solutionsArchitectDesc')}
            </p>
            <Link
              to='/partner-plan'
              className='font-bold text-[var(--primary-color)] hover:underline text-lg'
            >
              {t('solutionsArchitectLink')}
            </Link>
          </div>
        </div>

        {/* Solution 3: For the Master Strategist */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold mb-4 text-[var(--text-primary-color)]'>
              {t('solutionsStrategistTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mb-6'>
              {t('solutionsStrategistDesc')}
            </p>
            <Link
              to='/dynamic-plan'
              className='font-bold text-[var(--primary-color)] hover:underline text-lg'
            >
              {t('solutionsStrategistLink')}
            </Link>
          </div>
          <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-80 flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img
              src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop'
              alt='Stratejistler bir harita üzerinde planlama yapıyor'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Solutions;
