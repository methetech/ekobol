import React from 'react';
import { Link } from 'react-router-dom';

const PartnerPlan = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6'>
            İş Ortağı Planı: Biz Kurarız, Siz Yaratırsınız
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            Sizin dehanız harika ürünler yaratmakta, dijital listelemeleri
            yönetmekte değil. İş ortağımız olun, dijital imparatorluğunuzu sizin
            adınıza biz kuralım.
          </p>
        </div>
        <div className='mt-16 bg-gray-50 border border-[var(--divider-color)] rounded-lg p-12'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Her Şeyi Biz Hallederiz
          </h2>
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
                  Temel Plandaki Her Şey, ARTI:
                </strong>{' '}
                Tüm yapay zeka araçlarına ve platforma tam erişim.
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
                  Marka ve Web Sitesi Oluşturma:
                </strong>{' '}
                Profesyonel marka kimliğinizi ve e-ticaret sitenizi biz
                oluştururuz.
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
                  Tam Dijital Pazarlama:
                </strong>{' '}
                SEO, reklam kampanyaları ve sosyal medya yönetimini biz
                yürütürüz.
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
                  Operasyon Yönetimi:
                </strong>{' '}
                Listelemeleri, pazar yeri desteğini ve müşteri hizmetlerini biz
                yönetiriz.
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
                  Adanmış Büyüme Ortağı:
                </strong>{' '}
                Başarınızı sağlamak için sizinle yakın çalışırız.
              </span>
            </li>
          </ul>
        </div>
        <div className='mt-12 text-center'>
          <p className='text-4xl font-bold mb-4'>50/50 Kâr Paylaşımı</p>
          <p className='text-lg text-[var(--text-secondary-color)] max-w-2xl mx-auto mb-8'>
            Sadece ürünlerinizi üretin ve gönderin. Diğer her şeyi biz
            hallederiz. Gerçek bir ortaklık.
          </p>
          <Link
            to='/payment'
            className='inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <span className='truncate'>İş Ortağı Planını Satın Al</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PartnerPlan;
