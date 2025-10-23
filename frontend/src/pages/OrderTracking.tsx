import React from 'react';

const OrderTracking = () => {
  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-2xl'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Siparişinizi Takip Edin
          </h1>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <form className='space-y-6'>{/* Form elements */}</form>
        </div>
      </div>
    </main>
  );
};

export default OrderTracking;
