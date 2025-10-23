import React from 'react';

const UpdatePayment = () => {
  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Ödeme Yöntemini Güncelle
          </h1>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <form className='space-y-6'>{/* Form elements */}</form>
        </div>
      </div>
    </main>
  );
};

export default UpdatePayment;
