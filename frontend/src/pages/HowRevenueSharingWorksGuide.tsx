import React from 'react';
import { Link } from 'react-router-dom';

const HowRevenueSharingWorksGuide = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <article className='max-w-4xl mx-auto prose lg:prose-xl'>
        <h1>Ekobol'de Gelir Paylaşımı Nasıl Çalışır?</h1>
        <p>
          Ekobol, özellikle Temel Plan ve Partner Planı gibi bazı planlarında
          geleneksel abonelik ücretleri yerine bir gelir paylaşımı modelini
          benimsemiştir...
        </p>
        <div className='mt-12 pt-8 border-t border-[var(--divider-color)] text-center'>
          <Link
            to='/help-center'
            className='inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold'
          >
            Yardım Merkezine Git
          </Link>
        </div>
      </article>
    </main>
  );
};

export default HowRevenueSharingWorksGuide;
