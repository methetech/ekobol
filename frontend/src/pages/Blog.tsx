import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6'>
          Ekobol Blog
        </h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          Yapay zeka destekli en son haberler, özellik güncellemeleri ve
          e-ticaret stratejileri.
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='flex flex-col overflow-hidden rounded-lg border border-[var(--divider-color)] shadow-sm hover:shadow-xl transition-shadow duration-300'>
          <div className='h-48 w-full bg-gray-200'></div>
          <div className='p-6 flex flex-col flex-1'>
            <h3 className='text-xl font-bold mb-3'>
              Partner Planı Tanıtımı: Biz Kuralım, Siz Yaratın
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6 grow'>
              En kapsamlı planımıza derinlemesine bir bakış; en iyi yaptıkları
              işe odaklanmak isteyen yaratıcılar için tasarlandı.
            </p>
            <Link
              to='/blog-post'
              className='font-bold text-[var(--primary-color)] hover:underline'
            >
              Devamını Oku →
            </Link>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-lg border border-[var(--divider-color)] shadow-sm hover:shadow-xl transition-shadow duration-300'>
          <div className='h-48 w-full bg-gray-200'></div>
          <div className='p-6 flex flex-col flex-1'>
            <h3 className='text-xl font-bold mb-3'>
              Trendyol'da Fiyatlarınızı Optimize Etmenin 5 Yolu
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6 grow'>
              Ekobol'ün YZ motorunu kullanarak bugün uygulayabileceğiniz
              stratejilerle rekabetçi fiyatlandırmanın sırlarını açığa çıkarın.
            </p>
            <Link
              to='/ai-pricing-optimization'
              className='font-bold text-[var(--primary-color)] hover:underline'
            >
              Devamını Oku →
            </Link>
          </div>
        </div>
        <div className='flex flex-col overflow-hidden rounded-lg border border-[var(--divider-color)] shadow-sm hover:shadow-xl transition-shadow duration-300'>
          <div className='h-48 w-full bg-gray-200'></div>
          <div className='p-6 flex flex-col flex-1'>
            <h3 className='text-xl font-bold mb-3'>
              Özellik Güncellemesi: Yeni Görüntü Oluşturma Stilleri
            </h3>
            <p className='text-[var(--text-secondary-color)] mb-6 grow'>
              Ürünlerinizi her platformda öne çıkarmak için üç yeni yapay zeka
              destekli görüntü stilini kullanıma sunduk.
            </p>
            <Link
              to='/new-image-styles-update'
              className='font-bold text-[var(--primary-color)] hover:underline'
            >
              Devamını Oku →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
