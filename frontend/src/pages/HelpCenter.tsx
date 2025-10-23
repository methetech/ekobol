import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <main className='flex-1'>
      <section className='bg-[var(--primary-color)] text-white py-20'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter'>
            Nasıl yardımcı olabiliriz?
          </h1>
          <div className='mt-6 max-w-xl mx-auto'>
            <input
              type='search'
              placeholder='Cevapları arayın...'
              className='w-full h-14 px-6 rounded-full text-lg text-[var(--text-primary-color)] focus:ring-2 focus:ring-white'
            />
          </div>
        </div>
      </section>
      <section className='px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Yardım Konularına Göz Atın
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white border border-[var(--divider-color)] p-8 rounded-lg'>
              <h3 className='font-bold text-xl mb-4'>Başlarken</h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    to='/connect-marketplace-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    İlk pazar yerinizi bağlama
                  </Link>
                </li>
                <li>
                  <Link
                    to='/setup-profile-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Profilinizi ayarlama
                  </Link>
                </li>
                <li>
                  <Link
                    to='/understanding-dashboard-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Kontrol panelini anlama
                  </Link>
                </li>
              </ul>
            </div>
            <div className='bg-white border border-[var(--divider-color)] p-8 rounded-lg'>
              <h3 className='font-bold text-xl mb-4'>YZ Araçları</h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    to='/ai-image-generator-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Görüntü Oluşturucu nasıl kullanılır
                  </Link>
                </li>
                <li>
                  <Link
                    to='/best-practices-ai-descriptions'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    YZ açıklamaları için en iyi pratikler
                  </Link>
                </li>
                <li>
                  <Link
                    to='/optimize-pricing-with-ai-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    YZ ile fiyatlandırmanızı optimize etme
                  </Link>
                </li>
                <li>
                  <Link
                    to='/ai-inventory-automation-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    YZ ile envanter otomasyonu
                  </Link>
                </li>
              </ul>
            </div>
            <div className='bg-white border border-[var(--divider-color)] p-8 rounded-lg'>
              <h3 className='font-bold text-xl mb-4'>
                Faturalandırma ve Planlar
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    to='/how-revenue-sharing-works-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Gelir paylaşımı nasıl çalışır
                  </Link>
                </li>
                <li>
                  <Link
                    to='/upgrade-downgrade-plan-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Planınızı yükseltme veya düşürme
                  </Link>
                </li>
                <li>
                  <Link
                    to='/viewing-invoices-guide'
                    className='text-[var(--text-secondary-color)] hover:text-[var(--primary-color)]'
                  >
                    Faturalarınızı görüntüleme
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
