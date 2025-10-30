
import React from 'react';

const ProductAddEdit = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Ürün Ekle/Düzenle</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">YZ desteğiyle ürün listelerinizi oluşturun veya değiştirin.</p>
        </div>

        <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="product-name" className="block text-sm font-medium text-text-primary">Ürün Adı</label>
              <input type="text" id="product-name" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="örn. Organik Pamuk Tişört" />
            </div>
            <div>
              <label htmlFor="product-sku" className="block text-sm font-medium text-text-primary">SKU</label>
              <input type="text" id="product-sku" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="örn. OCTS001" />
            </div>
            <div>
              <label htmlFor="product-description" className="block text-sm font-medium text-text-primary">Açıklama</label>
              <textarea id="product-description" rows="5" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="Detaylı ürün açıklaması..."></textarea>
              <button type="button" className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                YZ ile Oluştur
              </button>
            </div>
            <div>
              <label htmlFor="product-price" className="block text-sm font-medium text-text-primary">Fiyat</label>
              <input type="number" id="product-price" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="0.00" />
              <button type="button" className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                YZ ile Optimize Et
              </button>
            </div>
            <div>
              <label htmlFor="product-stock" className="block text-sm font-medium text-text-primary">Stok Miktarı</label>
              <input type="number" id="product-stock" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary">Listelenecek Kanallar</label>
              <div className="mt-1 space-y-2">
                <div className="flex items-center">
                  <input id="channel-etsy" name="channels" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="channel-etsy" className="ml-2 block text-sm text-text-secondary">Etsy</label>
                </div>
                <div className="flex items-center">
                  <input id="channel-trendyol" name="channels" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="channel-trendyol" className="ml-2 block text-sm text-text-secondary">Trendyol</label>
                </div>
                <div className="flex items-center">
                  <input id="channel-hepsiburada" name="channels" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="channel-hepsiburada" className="ml-2 block text-sm text-text-secondary">Hepsiburada</label>
                </div>
                <div className="flex items-center">
                  <input id="channel-website" name="channels" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="channel-website" className="ml-2 block text-sm text-text-secondary">Web Sitesi</label>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                Ürünü Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProductAddEdit;
