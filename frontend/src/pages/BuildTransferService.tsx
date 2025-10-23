import React from 'react';
import { Link } from 'react-router-dom';

const BuildTransferService = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6'>
            Kur ve Devret Hizmeti: Dijital İmparatorluğunuz, Sizin İçin İnşa
            Edildi.
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            Tamamen size ait profesyonel bir e-ticaret varlığı mı hayal
            ediyorsunuz? Baştan sona kurar, sonra tam kontrolü size devrederiz.
          </p>
        </div>
        <div className='mt-16 bg-gray-50 border border-[var(--divider-color)] rounded-lg p-12'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Sizin İçin Neler Kuruyoruz:
          </h2>
          <ul className='space-y-4 text-lg text-[var(--text-secondary-color)] max-w-2xl mx-auto'>
            {/* List items */}
          </ul>
        </div>
        <div className='mt-12 text-center'>
          <p className='text-4xl font-bold mb-4'>
            Tek seferlik sabit ücret, başlangıç fiyatı ₺8.000
          </p>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-2xl mx-auto mb-8'>
            Bu hizmet, Ekobol'dan uzun vadeli yönetim taahhüdü olmaksızın
            profesyonel bir dijital lansman arayan işletmeler için idealdir.
          </p>
          <Link
            to='/contact'
            className='inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <span className='truncate'>Özel Teklif Alın</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BuildTransferService;
