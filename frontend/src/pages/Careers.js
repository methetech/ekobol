
import React from 'react';

const Careers = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">Ticaretin Geleceğini Bizimle İnşa Edin</h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">E-ticareti yapay zeka ile devrim yaratma misyonunda olan küçük, hırslı bir ekibiz. Teknolojiye, yaratıcılığa ve karmaşık sorunları çözmeye tutkuluysanız, aradığımız kişi siz olabilirsiniz.</p>
        </div>
        <div className="mt-20 bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">Neden Ekobol'de Çalışmalısınız?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Maksimum Etki</h3>
              <p className="text-text-secondary">Küçük bir ekibin parçası olarak, çalışmalarınız ürünümüzü ve binlerce satıcının başarısını doğrudan etkileyecektir.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Sürekli İnovasyon</h3>
              <p className="text-text-secondary">Yapay zeka ve e-ticaretin en ileri noktasında yaşıyoruz. Daha önce hiç yapılmamış şeyleri inşa etmek için en son teknolojilerle çalışacaksınız.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Yaratıcı Özgürlük</h3>
              <p className="text-text-secondary">Ekibimizi güçlendirmeye inanıyoruz. Akıllı insanları işe alır ve en iyi çözümleri bulmaları için onlara güveniriz.</p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">Açık Pozisyonlar</h2>
          <div className="border border-void-secondary dark:border-white/10 rounded-lg p-12 text-center">
            <p className="text-lg text-text-secondary">Şu anda açık bir pozisyonumuz bulunmuyor, ancak her zaman olağanüstü yetenekleri arıyoruz.</p>
            <p className="mt-4 text-text-secondary">Geleceği inşa etmemize yardımcı olacak niteliklere sahip olduğunuza inanıyorsanız, sizden haber almak isteriz.</p>
            <a className="mt-6 inline-flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" href="mailto:careers@ekobol.com">Bize Ulaşın</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;
