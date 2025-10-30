
import React from 'react';
import { Link } from 'react-router-dom';

const MarketingTools = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Nihai Pazarlama Cephaneliği: Zihinsel Harp Modülleri</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">Piyasayı ele geçirmek için tasarlanmış. Dijital savaş alanında rakiplerini alt etmek için zeka ve otomasyon.</p>
        </div>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight">Zihinsel Fısıltılar Modülü: Hedefli Etki</h2>
            <Link to="/ai-marketing-campaigns-guide" className="text-sm font-medium text-accent-primary hover:underline">Operasyonel Protokoller →</Link>
          </div>
          <p className="text-text-secondary mb-4">YZ'mizin algoritmik derinliklerinden süzülen, hedef kitlelerin zihinlerine fısıldayan, karşı konulmaz reklam metinleri ve stratejileriyle dijital alanı manipüle edin.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="campaign-product" className="block text-sm font-medium text-text-primary">Kampanya için Ürün Seçin</label>
              <select id="campaign-product" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary">
                <option value="">-- Bir Ürün Seçin --</option>
                <option value="OCTS001">Organik Pamuk Tişört</option>
                <option value="HCM002">El Yapımı Seramik Kupa</option>
                <option value="AIGAP003">YZ Oluşturulmuş Sanat Baskısı</option>
              </select>
            </div>
            <div>
              <label htmlFor="campaign-goal" className="block text-sm font-medium text-text-primary">Kampanya Hedefi</label>
              <select id="campaign-goal" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary">
                <option value="">-- Hedef Seçin --</option>
                <option value="sales">Satışları Artır</option>
                <option value="visibility">Görünürlüğü Artır</option>
                <option value="brand">Marka Bilinirliği Oluştur</option>
              </select>
            </div>
            <div className="pt-2">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                Kampanya Taslağı Oluştur
              </button>
            </div>
          </form>
          <div className="mt-6 p-4 bg-void-secondary rounded-md border border-void-secondary dark:border-white/10 text-text-secondary">
            <p className="font-semibold text-text-primary mb-2">Oluşturulan Reklam Metni Örneği:</p>
            <p>"Organik Pamuk Tişörtümüzün konforunu keşfedin. Sürdürülebilir üretilmiş, inanılmaz yumuşak. Şimdi Etsy'den alışveriş yapın ve üstün kaliteyi deneyimleyin! #OrganikModa #ÇevreDostu"</p>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight">Algoritma Tembel Kılıcı: Arama Hakimiyeti</h2>
            <Link to="/seo-optimization-tools-guide" className="text-sm font-medium text-accent-primary hover:underline">Operasyonel Protokoller →</Link>
          </div>
          <p className="text-text-secondary mb-4">Dijital alemin derinliklerinde gizlenmiş anahtar kelime zayıflıklarını ortaya çıkarın. YZ destekli algoritmik kılıcımızla arama motorlarını ve pazar yerlerini domine edin.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="seo-product" className="block text-sm font-medium text-text-primary">SEO Analizi için Ürün Seçin</label>
              <select id="seo-product" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary">
                <option value="">-- Bir Ürün Seçin --</option>
                <option value="OCTS001">Organik Pamuk Tişört</option>
                <option value="HCM002">El Yapımı Seramik Kupa</option>
                <option value="AIGAP003">YZ Oluşturulmuş Sanat Baskısı</option>
              </select>
            </div>
            <div className="pt-2">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                SEO Analizi Yap & Anahtar Kelime Öner
              </button>
            </div>
          </form>
          <div className="mt-6 p-4 bg-void-secondary rounded-md border border-void-secondary dark:border-white/10 text-text-secondary">
            <p className="font-semibold text-text-primary mb-2">"El Yapımı Seramik Kupa" için Önerilen Anahtar Kelimeler:</p>
            <ul className="list-disc list-inside">
              <li>"El yapımı kupa" (Yüksek hacimli, Orta rekabet)</li>
              <li>"Zanaatkar kahve fincanı" (Orta hacimli, Düşük rekabet)</li>
              <li>"Benzersiz seramik hediye" (Orta hacimli, Orta rekabet)</li>
            </ul>
            <p className="font-semibold text-text-primary mt-4 mb-2">Meta Açıklama Önerisi:</p>
            <p>"Kahve severler ve anlamlı hediyeler için mükemmel olan el yapımı seramik kupalarımızın eşsiz koleksiyonunu keşfedin. Her kupa özenle üretilmiştir."</p>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight">Dijital Savaş Ağları Kontrolü: Gerçek Zamanlı Sızma</h2>
            <Link to="/social-media-scheduler-guide" className="text-sm font-medium text-accent-primary hover:underline">Operasyonel Protokoller →</Link>
          </div>
          <p className="text-text-secondary mb-4">Sosyal medya platformlarını ele geçirin. YZ destekli zamanlama ve içerik optimizasyonu ile mesajlarınızı düşman hatlarının ötesine taşıyın, gerçek zamanlı sızma operasyonları düzenleyin.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="social-content" className="block text-sm font-medium text-text-primary">Gönderi İçeriği</label>
              <textarea id="social-content" rows="4" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="Gönderinizi buraya yazın..."></textarea>
              <button type="button" className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                YZ ile Oluştur
              </button>
            </div>
            <div>
              <label htmlFor="schedule-date" className="block text-sm font-medium text-text-primary">Planlama Tarihi ve Saati</label>
              <input type="datetime-local" id="schedule-date" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary">Şuraya Yayınla</label>
              <div className="mt-1 space-y-2">
                <div className="flex items-center">
                  <input id="platform-instagram" name="platforms" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="platform-instagram" className="ml-2 block text-sm text-text-secondary">Instagram</label>
                </div>
                <div className="flex items-center">
                  <input id="platform-facebook" name="platforms" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="platform-facebook" className="ml-2 block text-sm text-text-secondary">Facebook</label>
                </div>
                <div className="flex items-center">
                  <input id="platform-twitter" name="platforms" type="checkbox" className="focus:ring-accent-primary h-4 w-4 text-accent-primary border-void-secondary dark:border-white/20 rounded bg-void-primary" />
                  <label htmlFor="platform-twitter" className="ml-2 block text-sm text-text-secondary">Twitter</label>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
                Gönderiyi Planla
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default MarketingTools;
