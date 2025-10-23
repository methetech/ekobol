import React from 'react';
import { Link } from 'react-router-dom';

const BasicPlan = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6'>
            Temel Plan: Yapay Zeka Süper Güçleriniz
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            Kontrol sizde olsun ama tekrarlayan işlerden nefret mi ediyorsunuz?
            Temel Plan, işlerinizi otomatikleştirmeniz ve büyümeniz için
            ihtiyacınız olan her şeyi sunar.
          </p>
        </div>
        <div className='mt-16 bg-gray-50 border border-[var(--divider-color)] rounded-lg p-12'>
          <h2 className='text-3xl font-bold text-center mb-8'>Neler Dahil?</h2>
          <ul className='space-y-4 text-lg text-[var(--text-secondary-color)] max-w-2xl mx-auto'>
            <li className='flex items-start'>
              <svg
                className='h-7 w-7 text-[var(--primary-color)] mr-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>
                <strong className='text-[var(--text-primary-color)]'>
                  Tam Platform Erişimi:
                </strong>{' '}
                Ekobol'un tüm özelliklerine sınırsız erişim.
              </span>
            </li>
            <li className='flex items-start'>
              <svg
                className='h-7 w-7 text-[var(--primary-color)] mr-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>
                <strong className='text-[var(--text-primary-color)]'>
                  Tüm Yapay Zeka Araçları:
                </strong>{' '}
                Görsel oluşturma, açıklama yazma, fiyat optimizasyonu ve
                envanter otomasyonu.
              </span>
            </li>
            <li className='flex items-start'>
              <svg
                className='h-7 w-7 text-[var(--primary-color)] mr-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>
                <strong className='text-[var(--text-primary-color)]'>
                  Çok Kanallı Entegrasyon:
                </strong>{' '}
                Trendyol, Etsy, Amazon ve daha fazlasını sorunsuz bir şekilde
                bağlayın.
              </span>
            </li>
            <li className='flex items-start'>
              <svg
                className='h-7 w-7 text-[var(--primary-color)] mr-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>
                <strong className='text-[var(--text-primary-color)]'>
                  Birleşik Kontrol Paneli:
                </strong>{' '}
                Tüm işinizi tek bir yerden yönetin ve analiz edin.
              </span>
            </li>
          </ul>
        </div>
        <div className='mt-12 text-center'>
          <p className='text-4xl font-bold mb-4'>
            Sadece %10
            <span className='text-lg font-medium text-[var(--text-secondary-color)]'>
              {' '}
              / kârdan
            </span>
          </p>
          <p className='text-lg text-[var(--text-secondary-color)] max-w-2xl mx-auto mb-8'>
            Stratejinizi siz belirleyin, biz de sıkıcı görevleri
            otomatikleştirelim ve size en değerli varlığınız olan zamanı geri
            verelim.
          </p>
          <Link
            to='/payment'
            className='inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <span className='truncate'>Temel Planı Satın Al</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BasicPlan;
