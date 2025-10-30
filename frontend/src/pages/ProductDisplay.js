
import React from 'react';

const ProductDisplay = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <div className="lg:sticky lg:top-8 self-start">
          <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden border border-void-secondary">
            <img src="https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört Ana Resim" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden border border-void-secondary cursor-pointer hover:border-accent-primary">
              <img src="https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört Küçük Resim 1" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden border border-void-secondary cursor-pointer hover:border-accent-primary">
              <img src="https://images.unsplash.com/photo-1602810300762-b91c06830740?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört Küçük Resim 2" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden border border-void-secondary cursor-pointer hover:border-accent-primary">
              <img src="https://images.unsplash.com/photo-1582570081128-48b47e52a823?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört Küçük Resim 3" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-100 rounded-lg aspect-square overflow-hidden border border-void-secondary cursor-pointer hover:border-accent-primary">
              <img src="https://images.unsplash.com/photo-1618693892305-6d0b543c7b39?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört Küçük Resim 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4">Organik Pamuk Tişört</h1>
          <p className="text-3xl font-bold text-accent-primary mb-6">₺20.00</p>

          <div className="text-lg text-text-secondary leading-relaxed mb-8">
            <p>Organik pamuklu tişörtümüzle sürdürülebilir konforu deneyimleyin. Yumuşak, nefes alabilen ve çevre dostu bu tişört, günlük kullanım için mükemmeldir. %100 organik pamuktan üretilmiştir ve zararlı kimyasallar içermez.</p>
            <ul className="list-disc list-inside mt-4">
              <li>%100 Organik Pamuk</li>
              <li>Nefes alabilen ve hipoalerjenik</li>
              <li>Sürdürülebilir kaynaklı</li>
              <li>Çeşitli beden ve renklerde mevcuttur</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Seçenekler:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="size-select" className="block text-sm font-medium text-text-primary">Beden</label>
                <select id="size-select" className="mt-1 block w-full rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div>
                <label htmlFor="color-select" className="block text-sm font-medium text-text-primary">Renk</label>
                <select id="color-select" className="mt-1 block w-full rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary">
                  <option>Beyaz</option>
                  <option>Siyah</option>
                  <option>Gri</option>
                  <option>Mavi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <p className="text-xl font-semibold">Stok: <span className="text-accent-primary">150 Adet</span></p>
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="sr-only">Miktar</label>
              <input type="number" id="quantity" defaultValue="1" min="1" max="150" className="w-20 text-center rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center rounded-full h-12 px-6 bg-accent-primary text-void-primary text-lg font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              Sepete Ekle
            </button>
            <button className="flex items-center justify-center rounded-full h-12 px-6 bg-void-primary border-2 border-void-secondary text-text-primary text-lg font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300">
              Hemen Al
            </button>
          </div>

          <div className="mt-8 text-sm text-text-secondary">
            <p>Ürün Kodu: OCTS001</p>
            <p>Listelendiği Kanallar: Etsy, Trendyol, Web Sitesi</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDisplay;
