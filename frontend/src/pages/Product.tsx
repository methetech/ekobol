import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Product = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1'>
      {/* Hero Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-16 lg:py-24 text-center bg-[var(--background-secondary-color)] dark:bg-black/20 border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-5xl mx-auto'>
          <h1
            className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'
            dangerouslySetInnerHTML={{ __html: t('productTitle') }}
          ></h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            {t('productSubtitle')}
          </p>
        </div>
      </section>

      {/* The Forge Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              {t('productForgeTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4'>
              {t('productForgeSubtitle')}
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-96 p-8 shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1620121692029-d0882242a536?q=80&w=800&auto=format&fit=crop'
                alt='Yapay zeka ile oluşturulmuş sonsuz görsel galerisi'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div>
              <h3 className='text-2xl font-bold mb-3 text-[var(--text-primary-color)]'>
                {t('productImageStudioTitle')}
              </h3>
              <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
                {t('productImageStudioDesc')}
              </p>
              <Link
                to='/ai-image-generator-guide'
                className='font-bold text-[var(--primary-color)] hover:underline'
              >
                {t('productImageStudioLink')}
              </Link>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center mt-16'>
            <div className='order-last md:order-first'>
              <h3 className='text-2xl font-bold mb-3 text-[var(--text-primary-color)]'>
                {t('productCopywriterTitle')}
              </h3>
              <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
                {t('productCopywriterDesc')}
              </p>
              <div className='font-mono text-sm bg-[var(--background-secondary-color)] dark:bg-black/20 p-4 rounded-lg border border-[var(--divider-color)] dark:border-white/10 text-emerald-500'>
                <span className='text-gray-400'>{/* Sistem Akışı: */}</span>
                <br />
                <span className='text-purple-400'>[Ürün Verisi]</span> +{' '}
                <span className='text-blue-400'>[Ton: 'İddialı']</span> +{' '}
                <span className='text-orange-400'>[Platform: 'Trendyol']</span>
                <br />
                <span className='text-gray-400'>
                  --&gt; [Nihai Optimize Listeleme]
                </span>
              </div>
            </div>
            <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-96 p-8 shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1516132006923-6cf348e5c148?q=80&w=800&auto=format&fit=crop'
                alt='Metin ve kodların soyut bir temsili'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Command Center Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24 bg-[var(--background-secondary-color)] dark:bg-black/20 border-t border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              {t('productCommandCenterTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4'>
              {t('productCommandCenterSubtitle')}
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-bold mb-3 text-[var(--text-primary-color)]'>
                {t('productSyncTitle')}
              </h3>
              <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
                {t('productSyncDesc')}
              </p>
            </div>
            <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-96 p-8 shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1586953208448-3073a0329168?q=80&w=800&auto=format&fit=crop'
                alt='Birbirine bağlı dijital ağların görseli'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Oracle Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              {t('productOracleTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4'>
              {t('productOracleSubtitle')}
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='bg-gray-100 dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg h-96 p-8 shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1677756119517-756a188d2d9b?q=80&w=800&auto=format&fit=crop'
                alt='Gelecek trendlerini gösteren soyut bir YZ görseli'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div>
              <h3 className='text-2xl font-bold mb-3 text-[var(--text-primary-color)]'>
                {t('productPricingOracleTitle')}
              </h3>
              <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
                {t('productPricingOracleDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
