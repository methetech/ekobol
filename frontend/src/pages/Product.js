
import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 lg:py-24 text-center bg-void-secondary dark:bg-black/20 border-b border-void-secondary dark:border-white/10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary dark:text-white">
            Cephaneliğiniz: <span className="text-accent-primary">Dijital Hakimiyet Araçları</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Ekobol sadece bir entegratör değildir; stratejik bir silahtır. Pazarı otomatikleştirmek, optimize etmek ve domine etmek için tasarlanmış "düşünen kod" teknolojisini keşfedin.
          </p>
        </div>
      </section>

      {/* The Forge Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">I. DÖVMEHANE: Mükemmel Listeleme Yaratımı</h2>
            <p className="text-lg text-text-secondary mt-4">Ham potansiyeli, karşı konulmaz dijital varlıklara dönüştürün.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-96 p-8 shadow-lg">
              <img src="https://images.unsplash.com/photo-1620121692029-d0882242a536?q=80&w=800&auto=format&fit=crop" alt="Yapay zeka ile oluşturulmuş sonsuz görsel galerisi" className="w-full h-full object-cover rounded-md" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">YZ Görüntü Stüdyosu</h3>
              <p className="text-lg text-text-secondary mb-4">Tek bir fotoğraftan sonsuz bir galeri yaratın. YZ motorumuz sadece arka planı temizlemez; ürününüz için mükemmel sahneyi yaratır, stüdyo kalitesinde aydınlatma uygular ve onu bir sanat eserine dönüştürür. Minimalist, doğal veya fütüristik; markanızın ruhuna uygun yüzlerce stil anında elinizin altında.</p>
              <Link to="/ai-image-generator-guide" className="font-bold text-accent-primary hover:underline">Görsel Yaratımı Detayları →</Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-last md:order-first">
              <h3 className="text-2xl font-bold mb-3 text-text-primary">YZ Metin Yazarı & SEO Kâhini</h3>
              <p className="text-lg text-text-secondary mb-4">Sadece açıklama yazmayın, dijital bir hipnoz yaratın. YZ'miz, her pazar yerinin (Trendyol, Etsy, Amazon) algoritmasını ve alıcı psikolojisini anlar. Ürününüzün ruhunu yakalayan, SEO için mükemmelleştirilmiş ve dönüşüm için tasarlanmış başlıklar ve metinler oluşturur.</p>
              <div className="font-mono text-sm bg-void-secondary dark:bg-black/20 p-4 rounded-lg border border-void-secondary dark:border-white/10 text-emerald-500">
                <span className="text-gray-400">{/* Sistem Akışı: */}</span><br />
                <span className="text-purple-400">[Ürün Verisi]</span> + <span className="text-blue-400">[Ton: 'İddialı']</span> + <span className="text-orange-400">[Platform: 'Trendyol']</span><br />
                <span className="text-gray-400">--&gt; [Nihai Optimize Listeleme]</span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-96 p-8 shadow-lg">
              <img src="https://images.unsplash.com/photo-1516132006923-6cf348e5c148?q=80&w=800&auto=format&fit=crop" alt="Metin ve kodların soyut bir temsili" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Command Center Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24 bg-void-secondary dark:bg-black/20 border-t border-b border-void-secondary dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">II. KOMUTA MERKEZİ: Eşsiz Operasyonel Kontrol</h2>
            <p className="text-lg text-text-secondary mt-4">İmparatorluğunuzu tek bir ekrandan, mutlak bir hakimiyetle yönetin.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">Anlık Çok Kanallı Senkronizasyon</h3>
              <p className="text-lg text-text-secondary mb-4">Tek bir tıklama, tüm krallığınızda yankılanır. Bir fiyatı güncelleyin, bir stoğu değiştirin veya bir açıklamayı düzeltin; Ekobol bu değişikliği anında tüm pazar yerlerinize ve web sitenize yansıtır. Sıfır tekrar, sıfır hata. Mutlak kontrol.</p>
            </div>
            <div className="bg-gray-100 dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-96 p-8 shadow-lg">
              <img src="https://images.unsplash.com/photo-1586953208448-3073a0329168?q=80&w=800&auto=format&fit=crop" alt="Birbirine bağlı dijital ağların görseli" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* The Oracle Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">III. KÂHİN: YZ Destekli Öngörü</h2>
            <p className="text-lg text-text-secondary mt-4">Pazarı tahmin etmeyin. Geleceği şekillendirin.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-lg h-96 p-8 shadow-lg">
              <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d9b?q=80&w=800&auto=format&fit=crop" alt="Gelecek trendlerini gösteren soyut bir YZ görseli" className="w-full h-full object-cover rounded-md" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-text-primary">YZ Fiyatlandırma Kâhini & Otonom Envanter</h3>
              <p className="text-lg text-text-secondary mb-4">YZ'miz sadece bir analist değil, bir kâhindir. Rakipleri izler, talebi tahmin eder ve kârınızı en üst düzeye çıkarmak için en uygun fiyatlandırma stratejilerini fısıldar. Aynı zamanda ne zaman stoklarınızın tükeneceğini öngörür ve yeniden sipariş önerileri sunar. Stok tükenmesine ve para kaybetmeye son.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Simulation Arena Section */}
      {/* Algorithmic Sovereignty: Creation Protocols Section */}
      <section className="px-4 sm:px-10 lg:px-20 py-20 lg:py-24 bg-void-secondary dark:bg-black/20 border-t border-b border-void-secondary dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">V. ALGORİTMİK HÜKÜMRANLIK: YARATIM PROTOKOLLERİ</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">Dijital evrenin kurallarını yeniden yazın. YZ'mizin ham gücünü deneyimleyin, yaratın, yok edin ve yeniden şekillendirin.</p>
          </div>
          <div id="arena-container" className="relative bg-void-primary dark:bg-white/5 border border-void-secondary dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 transition-all duration-500 min-h-[600px] overflow-hidden">
            <div id="initial-injection" className="text-center max-w-lg mx-auto transition-opacity duration-500 ease-in-out opacity-100">
              <h3 className="text-xl font-bold mb-4 text-text-primary uppercase tracking-widest">VERİ ENJEKSİYONU BAŞLAT</h3>
              <div className="bg-white dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-4 group">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af367?q=80&w=800&auto=format&fit=crop" alt="Dijital veri akışlarının soyut temsili" className="rounded-lg aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"/>
                <p className="text-sm text-text-secondary mt-2">Ham veri akışını sisteme yükle.</p>
              </div>
              <button id="execute-protocol-button" className="mt-8 flex w-full max-w-xs mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-accent-primary text-void-primary text-lg font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300">
                <span>PROTOKOLÜ YÜRÜT</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09 3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09z"></path></svg>
              </button>
            </div>
            <div id="results-display" className="absolute inset-0 p-8 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none">
              <h3 className="text-xl font-bold mb-4 text-text-primary uppercase tracking-widest text-center">ALGORİTMİK ÇIKTI: YENİ GERÇEKLİK</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                <div className="lg:col-span-1 h-full flex flex-col">
                  <h4 className="font-bold mb-2 text-gray-600 dark:text-white/80">GÖRSEL MANİPÜLASYON</h4>
                  <img src="https://images.unsplash.com/photo-1620121692029-d0882242a536?q=80&w=800&auto=format&fit=crop" alt="YZ tarafından dönüştürülmüş ürün görseli" className="rounded-lg w-full h-full object-cover border border-void-secondary dark:border-white/10 shadow-lg"/>
                </div>
                <div className="lg:col-span-2 grid grid-rows-2 gap-8 h-full">
                  <div className="row-span-1 flex flex-col">
                    <h4 className="font-bold mb-2 text-gray-600 dark:text-white/80">METİNSEL HÜKÜM</h4>
                    <div className="bg-white dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-4 text-sm h-full flex items-center">
                      <p class="text-text-secondary">Pazar yerlerinin algoritmalarını parçalayan, hedef kitleyi hipnotize eden, dönüşüm oranlarını maksimuma çıkaran metinsel komutlar. Her kelime, bir silah.</p>
                    </div>
                  </div>
                  <div className="row-span-1 flex flex-col">
                    <h4 className="font-bold mb-2 text-gray-600 dark:text-white/80">STRATEJİK DİSİPLİN</h4>
                    <div className="bg-white dark:bg-black/20 border border-void-secondary dark:border-white/10 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
                      <p className="text-lg text-text-secondary">YZ'nin derin öğrenme modelleriyle optimize edilmiş fiyatlandırma, envanter ve kampanya stratejileri. Rakipleriniz nefes almadan önce hamle yapın.</p>
                      <p className="text-5xl font-bold text-accent-primary">+%300 ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center absolute bottom-4 left-1/2 -translate-x-1/2">
                <button id="reset-protocol-button" class="text-sm text-text-secondary hover:text-text-primary transition-colors">PROTOKOLÜ SIFIRLA</button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Product;
