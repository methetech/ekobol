import React from 'react';
import { Link } from 'react-router-dom';

const Subscription = () => {
  // Note: Interactive logic for billing toggle and total calculation will be added later
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6'>
          Kendi Planınızı Oluşturun.
        </h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          Sadece ihtiyacınız olan araçlar için ödeme yapın. İşletmeniz için
          mükemmel aboneliği oluşturmak üzere özellikleri seçin ve eşleştirin.
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8'>
        {/* Feature selection */}
        <div className='lg:w-2/3 flex flex-col gap-8'>
          {/* Marketplace Tiers */}
          <div className='border border-[var(--divider-color)] rounded-lg p-8'>
            <h3 className='text-2xl font-bold mb-4'>
              Pazar Yeri Katmanını Seçin
            </h3>
            {/* Radio buttons for tiers */}
          </div>
          {/* AI Features */}
          <div className='border border-[var(--divider-color)] rounded-lg p-8'>
            <h3 className='text-2xl font-bold mb-4'>
              Yapay Zeka Destekli Özellikleri Seçin
            </h3>
            {/* Checkboxes for AI features */}
          </div>
        </div>
        {/* Summary Card */}
        <div className='lg:w-1/3 border border-[var(--divider-color)] rounded-lg p-8 sticky top-8 self-start bg-gray-50'>
          <h3 className='text-2xl font-bold mb-4'>Özel Plan Özetiniz</h3>
          <div className='text-center my-8'>
            <p className='text-lg text-[var(--text-secondary-color)]'>
              Tahmini Aylık Maliyet
            </p>
            <p
              id='total-amount'
              className='text-5xl font-bold text-[var(--primary-color)]'
            >
              ₺200.00
            </p>
          </div>
          <Link
            to='/signup'
            className='text-center w-full block rounded-full py-3 px-6 bg-[var(--primary-color)] text-black font-bold hover:shadow-xl transition-shadow'
          >
            Ödeme İşlemine Devam Et
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Subscription;
