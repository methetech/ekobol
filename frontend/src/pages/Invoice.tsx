import React from 'react';

const Invoice = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10'>
      <div className='layout-content-container flex flex-col w-full max-w-4xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-3xl font-bold'>
            Fatura #INV20250701
          </h1>
        </div>
        <section className='bg-[var(--background-color)] rounded-xl border border-[var(--divider-color)] shadow-sm p-8'>
          {/* Invoice details */}
        </section>
      </div>
    </main>
  );
};

export default Invoice;
