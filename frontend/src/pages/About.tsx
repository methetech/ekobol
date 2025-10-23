import React from 'react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-16 lg:py-24 text-center bg-[var(--background-secondary-color)] dark:bg-black/20 border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'>
            Biz Sadece Kod Yazmayız. <br className='hidden sm:inline' />
            Canlı Sistemler Besteleriz.
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            Ekobol, basit bir fikirden doğdu: e-ticaret harika ürünlerle ilgili
            olmalı, sıkıcı süreçlerle değil. Biz Me the Tech'iz ve Ekobol, bu
            felsefenin ete kemiğe bürünmüş halidir.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              İmparatorluğun Mimarları
            </h2>
          </div>

          {/* Mete Avcı */}
          <div className='grid md:grid-cols-3 gap-8 md:gap-12 items-center'>
            <div className='md:col-span-1'>
              <img
                src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Mete Avcı'
                className='rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
            <div className='md:col-span-2'>
              <h3 className='text-3xl font-bold'>Mete Avcı</h3>
              <p className='text-[var(--primary-color)] font-semibold text-lg'>
                YZ & Kullanıcı Deneyimi Vizyoneri
              </p>
              <p className='mt-4 text-[var(--text-secondary-color)]'>
                Mete, insan ve makine arasındaki mükemmel uyuma takıntılıdır.
                Ekobol'ün sezgisel arayüzünü tasarlamış, en karmaşık YZ
                teknolojilerinin bile sihirli bir şekilde zahmetsiz
                hissettirmesini sağlamıştır. O, teknolojinin soğuk mantığını
                insan yaratıcılığının sıcaklığıyla birleştiren kişidir.
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  Üretken YZ
                </span>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  UX Mimarisi
                </span>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  Frontend Stratejisi
                </span>
              </div>
            </div>
          </div>

          {/* Doğa Aydın */}
          <div className='grid md:grid-cols-3 gap-8 md:gap-12 items-center mt-20'>
            <div className='md:col-span-2 order-last md:order-first text-right'>
              <h3 className='text-3xl font-bold'>Doğa Aydın</h3>
              <p className='text-[var(--primary-color)] font-semibold text-lg'>
                Full-Stack & Sistem Mimarı
              </p>
              <p className='mt-4 text-[var(--text-secondary-color)]'>
                Doğa, Ekobol'ün sarsılmaz temelidir. Sayısız pazar yerinde anlık
                senkronizasyonu ve kusursuz performansı mümkün kılan, dağıtık,
                hataya dayanıklı ve güvenli mimariyi tasarlamıştır. Onun kodu,
                imparatorluğunuzun üzerinde durduğu kayadır.
              </p>
              <div className='mt-4 flex flex-wrap gap-2 justify-end'>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  Dağıtık Sistemler
                </span>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  Veri Bütünlüğü
                </span>
                <span className='bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                  Ölçeklenebilir Altyapı
                </span>
              </div>
            </div>
            <div className='md:col-span-1'>
              <img
                src='https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=800&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Doğa Aydın'
                className='rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctrine Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24 bg-[var(--background-secondary-color)] dark:bg-black/20 border-t border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              Doktrinimiz: Me the Tech Felsefesi
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4'>
              Üç temel prensip üzerine inşa ediyoruz.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Principle 1 */}
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <svg
                className='h-10 w-10 text-[var(--primary-color)] mx-auto mb-4'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                Düşünen Kod
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                Yazdığımız kod reaktif değil, proaktiftir. Öğrenir, adapte olur
                ve sizin adınıza öngörülerde bulunur.
              </p>
            </div>
            {/* Principle 2 */}
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <svg
                className='h-10 w-10 text-[var(--primary-color)] mx-auto mb-4'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                />
              </svg>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                Zarif Brutalizm
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                Maksimum gücü, en basit ve en temiz arayüzle sunarız.
                Karmaşıklığı biz yönetiriz, siz değil.
              </p>
            </div>
            {/* Principle 3 */}
            <div className='p-8 bg-white dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg text-center'>
              <svg
                className='h-10 w-10 text-[var(--primary-color)] mx-auto mb-4'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5'
                />
              </svg>
              <h4 className='font-bold text-xl mb-2 text-[var(--text-primary-color)]'>
                Egemen Sistemler
              </h4>
              <p className='text-[var(--text-secondary-color)]'>
                Size bir araç vermiyoruz; size bir krallık veriyoruz.
                Verileriniz, markanız ve geleceğiniz tamamen sizin
                kontrolünüzde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
