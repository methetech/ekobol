
import React from 'react';

const Blog = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">Ekobol Blog</h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">Yapay zeka destekli en son haberler, özellik güncellemeleri ve e-ticaret stratejileri.</p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 w-full bg-void-primary"></div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Partner Planı Tanıtımı: Biz Kuralım, Siz Yaratın</h3>
            <p className="text-text-secondary mb-6 grow">En kapsamlı planımıza derinlemesine bir bakış; en iyi yaptıkları işe odaklanmak isteyen yaratıcılar için tasarlandı.</p>
            <a href="/blog-post" className="font-bold text-accent-primary hover:underline">Devamını Oku →</a>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 w-full bg-void-primary"></div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Trendyol'da Fiyatlarınızı Optimize Etmenin 5 Yolu</h3>
            <p className="text-text-secondary mb-6 grow">Ekobol'ün YZ motorunu kullanarak bugün uygulayabileceğiniz stratejilerle rekabetçi fiyatlandırmanın sırlarını açığa çıkarın.</p>
            <a href="/ai-pricing-optimization" className="font-bold text-accent-primary hover:underline">Devamını Oku →</a>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary dark:bg-black/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 w-full bg-void-primary"></div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Özellik Güncellemesi: Yeni Görüntü Oluşturma Stilleri</h3>
            <p className="text-text-secondary mb-6 grow">Ürünlerinizi her platformda öne çıkarmak için üç yeni yapay zeka destekli görüntü stilini kullanıma sunduk.</p>
            <a href="/new-image-styles-update" className="font-bold text-accent-primary hover:underline">Devamını Oku →</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
