import React from 'react';

const OrderDetail = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-5xl mx-auto'>
        <h1 className='text-[var(--text-primary-color)] text-4xl font-bold mb-8'>
          Sipariş #E10023 Detayı
        </h1>
        {/* Order details content */}
      </div>
    </main>
  );
};

export default OrderDetail;
