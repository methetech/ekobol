
import React from 'react';

const Payment = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Ödeme Sayfası</h1>
        <p className="mt-4 text-lg text-text-secondary">Ödeme işleminizi tamamlamak için buradasınız.</p>
        <div className="mt-8 rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <p className="text-text-secondary">Bu, gerçek bir ödeme ağ geçidi entegrasyonunun olacağı yerdir.</p>
        </div>
      </div>
    </main>
  );
};

export default Payment;
