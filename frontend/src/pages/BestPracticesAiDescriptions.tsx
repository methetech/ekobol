import React from 'react';
import { Link } from 'react-router-dom';

const BestPracticesAiDescriptions = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <article className='max-w-4xl mx-auto prose lg:prose-xl'>
        <h1>Ekobol'de YZ Ürün Açıklamaları için En İyi Pratikler</h1>
        <p>
          Ekobol'ün YZ Ürün Açıklama Yazıcısı, göz alıcı ve SEO dostu ürün
          metinleri oluşturarak zamandan ve emekten tasarruf etmenizi sağlayan
          devrim niteliğinde bir araçtır...
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

export default BestPracticesAiDescriptions;
