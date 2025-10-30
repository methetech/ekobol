
import React from 'react';

const HelpCenter = () => {
  return (
    <main className="flex-1">
      <section className="bg-void-secondary dark:bg-black/20 border-b border-void-secondary dark:border-white/10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-text-primary">Nasıl yardımcı olabiliriz?</h1>
          <div className="mt-6 max-w-xl mx-auto">
            <input type="search" placeholder="Cevapları arayın..." className="w-full h-14 px-6 rounded-full text-lg bg-void-primary border-void-secondary dark:border-white/20 text-text-primary focus:ring-2 focus:ring-accent-primary" />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">Yardım Konularına Göz Atın</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-text-primary">Başlarken</h3>
              <ul className="space-y-3">
                <li><a href="/connect-marketplace-guide" className="text-text-secondary hover:text-accent-primary hover:underline">İlk pazar yerinizi bağlama</a></li>
                <li><a href="/setup-profile-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Profilinizi ayarlama</a></li>
                <li><a href="/understanding-dashboard-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Kontrol panelini anlama</a></li>
              </ul>
            </div>
            <div className="bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-text-primary">YZ Araçları</h3>
              <ul className="space-y-3">
                <li><a href="/ai-image-generator-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Görüntü Oluşturucu nasıl kullanılır</a></li>
                <li><a href="/best-practices-ai-descriptions" className="text-text-secondary hover:text-accent-primary hover:underline">YZ açıklamaları için en iyi pratikler</a></li>
                <li><a href="/optimize-pricing-with-ai-guide" className="text-text-secondary hover:text-accent-primary hover:underline">YZ ile fiyatlandırmanızı optimize etme</a></li>
                <li><a href="/ai-inventory-automation-guide" className="text-text-secondary hover:text-accent-primary hover:underline">YZ ile envanter otomasyonu</a></li>
              </ul>
            </div>
            <div className="bg-void-secondary dark:bg-black/20 border border-void-secondary dark:border-white/10 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-text-primary">Faturalandırma ve Planlar</h3>
              <ul className="space-y-3">
                <li><a href="/how-revenue-sharing-works-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Gelir paylaşımı nasıl çalışır</a></li>
                <li><a href="/upgrade-downgrade-plan-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Planınızı yükseltme veya düşürme</a></li>
                <li><a href="/viewing-invoices-guide" className="text-text-secondary hover:text-accent-primary hover:underline">Faturalarınızı görüntüleme</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
