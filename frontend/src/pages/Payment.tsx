import React from 'react';

const Payment = () => {
  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-md text-center'>
        <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
          Ödeme Sayfası
        </h1>
        <p className='mt-4 text-lg text-[var(--text-secondary-color)]'>
          Ödeme işleminizi tamamlamak için buradasınız.
        </p>
        <div className='mt-8 rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <p className='text-[var(--text-secondary-color)]'>
            Bu, gerçek bir ödeme ağ geçidi entegrasyonunun olacağı yerdir.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Payment;
