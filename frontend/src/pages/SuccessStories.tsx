import React from 'react';

const SuccessStories = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6'>
          Gerçek Sonuçlar, Gerçek Büyüme.
        </h1>
        <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
          Müşterilerimizin Ekobol Partner Planı ile e-ticaret işlerini nasıl
          dönüştürdüğünü görün.
        </p>
      </div>
      <div className='mt-20 max-w-7xl mx-auto space-y-20'>
        {/* Story 1 */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='aspect-video bg-gray-200 rounded-lg mb-4'></div>
            <blockquote className='text-xl md:text-2xl font-medium leading-snug italic text-center'>
              “Partner Planı ile kelimenin tam anlamıyla sadece harika ürünler
              yapmaya odaklanıyoruz. Ekobol markamızı sıfırdan kurdu ve online
              satışlarımız üçe katlandı.”
            </blockquote>
            <p className='mt-4 font-bold text-lg text-center'>Ayşe Yılmaz</p>
            <p className='text-[var(--text-secondary-color)] text-center'>
              Kurucu, AY Tasarım
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-4'>
              AY Tasarım: Zanaattan Markaya
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
              El yapımı deri ürünler üreten Ayşe, dijital pazarlama ve pazar
              yeri yönetimi için zaman bulamıyordu. Ekobol'ün Partner Planı ile
              tüm dijital operasyonlarını bize devretti.
            </p>
            <ul className='list-disc list-inside space-y-2 text-[var(--text-secondary-color)]'>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  6 Ayda 3 Kat Gelir Artışı:
                </span>{' '}
                Marka bilinirliği ve optimize edilmiş listelemelerle satışlar
                hızla arttı.
              </li>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  Haftalık 20+ Saat Zaman Tasarrufu:
                </span>{' '}
                Ayşe artık sadece ürün geliştirmeye odaklanıyor.
              </li>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  Profesyonel Marka Kimliği:
                </span>{' '}
                Web sitesi ve sosyal medya varlığı oluşturularak marka değeri
                artırıldı.
              </li>
            </ul>
          </div>
        </div>
        {/* Story 2 */}
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-last md:order-first'>
            <h2 className='text-3xl font-bold mb-4'>
              Organik Lezzetler: Yerelden Ulusala
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mb-4'>
              Küçük bir aile işletmesi olan Organik Lezzetler, ürünlerini daha
              geniş kitlelere ulaştırmakta zorlanıyordu. Ekobol'ün Dinamik Planı
              ile başladılar, işleri büyüdükçe Partner Planı'na geçtiler.
            </p>
            <ul className='list-disc list-inside space-y-2 text-[var(--text-secondary-color)]'>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  Pazar Yeri Hakimiyeti:
                </span>{' '}
                Trendyol'da kategori lideri oldular.
              </li>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  Verimli Stok Yönetimi:
                </span>{' '}
                YZ destekli envanter yönetimi ile stok tükenmesi %90 oranında
                azaldı.
              </li>
              <li>
                <span className='font-bold text-[var(--text-primary-color)]'>
                  Akıllı Fiyatlandırma:
                </span>{' '}
                Rekabet analizi ile kar marjları %25 arttı.
              </li>
            </ul>
          </div>
          <div>
            <div className='aspect-video bg-gray-200 rounded-lg mb-4'></div>
            <blockquote className='text-xl md:text-2xl font-medium leading-snug italic text-center'>
              “Ekobol olmadan bu kadar kısa sürede bu ölçeğe ulaşmamız
              imkansızdı. Onlar sadece bir yazılım değil, gerçek bir iş ortağı.”
            </blockquote>
            <p className='mt-4 font-bold text-lg text-center'>Mehmet Kaya</p>
            <p className='text-[var(--text-secondary-color)] text-center'>
              İş Geliştirme, Organik Lezzetler
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuccessStories;
