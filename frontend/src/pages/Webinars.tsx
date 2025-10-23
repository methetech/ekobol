import React from 'react';
import { Link } from 'react-router-dom';

const Webinars = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6'>
          Bilginizi Artırın, Büyümenizi Hızlandırın.
        </h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          Ekobol'ün özelliklerine ve gelişmiş e-ticaret stratejilerine hakim
          olmak için talep üzerine webinarlarımızı ve video eğitimlerimizi
          izleyin.
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Webinar/Tutorial Cards */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='flex flex-col overflow-hidden rounded-lg border border-[var(--divider-color)] shadow-sm hover:shadow-xl transition-shadow duration-300'
          >
            <div className='h-48 w-full bg-gray-200 flex items-center justify-center'>
              <img
                src={`https://images.unsplash.com/photo-1531297484cd9-f2e1a38096f7?q=80&w=600&auto=format&fit=crop&ixid=${i}`}
                alt='Webinar video thumbnail'
                className='object-cover w-full h-full'
              />
            </div>
            <div className='p-6 flex flex-col flex-1'>
              <h3 className='text-xl font-bold mb-3'>
                Webinar Başlığı {i + 1}
              </h3>
              <p className='text-[var(--text-secondary-color)] mb-6 grow'>
                Bu, yaklaşan veya talep üzerine sunulan bir webinar için bir
                açıklamadır.
              </p>
              <Link
                to='#'
                className='font-bold text-[var(--primary-color)] hover:underline'
              >
                Şimdi İzle →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Webinars;
