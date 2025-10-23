import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-24 lg:py-40 text-center relative'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:hero-glow'>
            Bir Ürün Değil, Bir İmparatorluk İnşa Et.
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto mb-10'>
            Ekobol, Me the Tech'in "düşünen kod" felsefesidir. Pazar yerlerini
            birleştiren bir araçtan daha fazlası; dijital dünyada hükmetmeniz
            için tasarlanmış otonom bir büyüme motorudur.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <a
              className='flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[var(--primary-color)] text-black text-lg font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl dark:hover:shadow-2xl hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-300'
              href='signup.html'
            >
              <span className='truncate'>Krallığınızı İlan Edin</span>
            </a>
            <a
              className='flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent dark:bg-white/10 border-2 border-[var(--border-color)] dark:border-white/20 text-[var(--text-primary-color)] dark:text-white text-lg font-bold dark:backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300'
              href='solutions.html'
            >
              <span className='truncate'>Cephaneliği Gör</span>
            </a>
          </div>
        </div>
      </section>

      {/* Genesis Engine Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-32 bg-[var(--background-secondary-color)] dark:bg-black/20 border-t border-b border-[var(--divider-color)] dark:border-white/10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              Genesis Motoru: Fikirden Fenomene
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4'>
              Üç Adımda Hükmedin.
            </p>
          </div>
          <div className='relative grid md:grid-cols-3 gap-8'>
            <div className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 -z-10 hidden md:block'></div>
            <div className='relative flex flex-col items-center text-center p-6 bg-[var(--background-color)] dark:bg-white/5 rounded-lg border border-[var(--divider-color)] dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow'>
              <div className='relative mb-6 flex items-center justify-center size-16 rounded-full bg-[var(--primary-color)] text-white shadow-lg shadow-emerald-500/20'>
                <span className='text-2xl font-bold'>1</span>
              </div>
              <h3 className='text-xl font-bold mb-3 text-[var(--text-primary-color)]'>
                DÖV (Forge)
              </h3>
              <p className='text-[var(--text-secondary-color)]'>
                Tüm pazar yerlerinizi bağlayın. Ürünlerinizi yükleyin. Ham
                maddeyi tek bir merkezi beyne entegre edin.
              </p>
            </div>
            <div className='relative flex flex-col items-center text-center p-6 bg-[var(--background-color)] dark:bg-white/5 rounded-lg border border-[var(--divider-color)] dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow'>
              <div className='relative mb-6 flex items-center justify-center size-16 rounded-full bg-[var(--primary-color)] text-white shadow-lg shadow-emerald-500/20'>
                <span className='text-2xl font-bold'>2</span>
              </div>
              <h3 className='text-xl font-bold mb-3 text-[var(--text-primary-color)]'>
                YÜKSELT (Amplify)
              </h3>
              <p className='text-[var(--text-secondary-color)]'>
                YZ'nin gücünü serbest bırakın. Mükemmel görseller, hipnotize
                edici açıklamalar ve rakipsiz fiyatlandırma stratejileri
                yaratın.
              </p>
            </div>
            <div className='relative flex flex-col items-center text-center p-6 bg-[var(--background-color)] dark:bg-white/5 rounded-lg border border-[var(--divider-color)] dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-xl transition-shadow'>
              <div className='relative mb-6 flex items-center justify-center size-16 rounded-full bg-[var(--primary-color)] text-white shadow-lg shadow-emerald-500/20'>
                <span className='text-2xl font-bold'>3</span>
              </div>
              <h3 className='text-xl font-bold mb-3 text-[var(--text-primary-color)]'>
                HÜKMET (Dominate)
              </h3>
              <p className='text-[var(--text-secondary-color)]'>
                Tek birleşik panelden imparatorluğunuzu izleyin. Gerçek zamanlı
                verilerle pazara hükmedin ve rakiplerinizi geride bırakın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Playground Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              YZ Oyun Alanı: Yaratımın Gücü
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-4 max-w-3xl mx-auto'>
              Sıradan bir ürünün, Ekobol'ün yapay zekasıyla nasıl bir pazar
              fenomenine dönüştüğüne tanık olun.
            </p>
          </div>

          <div
            id='playground-container'
            className='relative bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 transition-all duration-500 min-h-[600px] overflow-hidden'
          >
            <div
              id='initial-card'
              className='text-center max-w-lg mx-auto transition-opacity duration-500 ease-in-out'
            >
              <h3 className='text-xl font-bold mb-4 text-[var(--text-primary-color)] uppercase tracking-widest'>
                BAŞLANGIÇ NOKTASI
              </h3>
              <div className='bg-white dark:bg-black/20 border border-[var(--divider-color)] dark:border-white/10 rounded-lg p-4 group'>
                <img
                  src='wallet-before.webp'
                  alt='Sade bir cüzdan fotoğrafı'
                  className='rounded-lg aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300'
                />
                <p className='text-sm text-[var(--text-secondary-color)] mt-2'>
                  Basit bir ürün fotoğrafı.
                </p>
              </div>
              <button
                id='transform-button'
                className='mt-8 flex w-full max-w-xs mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-emerald-500 text-white text-lg font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:bg-emerald-600 transition-all duration-300'
              >
                <span>DÖNÜŞTÜR</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 ml-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09z'
                  />
                </svg>
              </button>
            </div>

            <div
              id='results-container'
              className='absolute inset-0 p-8 opacity-0 pointer-events-none transition-opacity duration-700 ease-in-out'
            >
              <h3 className='text-xl font-bold mb-4 text-[var(--text-primary-color)] uppercase tracking-widest text-center'>
                NİHAİ SONUÇ
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full'>
                <div className='lg:col-span-1 h-full flex flex-col'>
                  <h4 className='font-bold mb-2 text-gray-600 dark:text-white/80'>
                    1. YZ Görsel Stüdyosu
                  </h4>
                  <img
                    src='wallet-after.webp'
                    alt='YZ tarafından oluşturulmuş cüzdan fotoğrafı'
                    className='rounded-lg w-full h-full object-cover border border-[var(--divider-color)] dark:border-white/10 shadow-lg'
                  />
                </div>
                <div className='lg:col-span-2 grid grid-rows-2 gap-8 h-full'>
                  <div className='row-span-1 flex flex-col'>
                    <h4 className='font-bold mb-2 text-gray-600 dark:text-white/80'>
                      2. YZ Akıllı Açıklama
                    </h4>
                    <div className='bg-white dark:bg-black/20 border border-[var(--divider-color)] dark:border-white/10 rounded-lg p-4 text-sm h-full flex items-center'>
                      <p className='text-[var(--text-secondary-color)]'>
                        Sokakların kurallarını yeniden yaz. Kentsel keşifler
                        için tasarlanan 'Nebula' modeli, nefes alabilen kompozit
                        örgü ve reaktif köpük tabanı bir araya getirir. Her
                        adımda sadece yürüme, geleceğe ak.
                      </p>
                    </div>
                  </div>
                  <div className='row-span-1 flex flex-col'>
                    <h4 className='font-bold mb-2 text-gray-600 dark:text-white/80'>
                      3. YZ Fiyat Hakimiyeti
                    </h4>
                    <div className='bg-white dark:bg-black/20 border border-[var(--divider-color)] dark:border-white/10 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full'>
                      <p className='text-lg text-[var(--text-secondary-color)]'>
                        Pazar Lideri Fiyat
                      </p>
                      <p className='text-5xl font-bold text-[var(--primary-color)]'>
                        ₺4,950
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center absolute bottom-4 left-1/2 -translate-x-1/2'>
                <button
                  id='reset-button'
                  className='text-sm text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)] transition-colors'
                >
                  Sıfırla
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='px-4 sm:px-10 lg:px-20 py-20 lg:py-24 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary-color)] mb-6'>
            Sıradaki Trend Siz Olun.
          </h2>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-2xl mx-auto mb-10'>
            Platformları birleştirmeyi bırakın. Pazarı domine etmeye başlayın.
            Esnek planlarımızı keşfedin ve imparatorluğunuzun temelini atın.
          </p>
          <a
            className='inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[var(--primary-color)] text-black text-lg font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:bg-emerald-600 transition-all duration-300'
            href='signup.html'
          >
            <span className='truncate'>Bugün Ücretsiz Başlayın</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
