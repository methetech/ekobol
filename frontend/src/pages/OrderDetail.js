
import React from 'react';

const OrderDetail = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Sipariş #E10023 Detayı</h1>
            <p className="text-text-secondary text-base font-normal leading-normal mt-1">Sipariş bilgilerini, müşteri detaylarını ve gönderim durumunu görüntüleyin.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full h-10 px-4 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              Fatura İndir
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full h-10 px-4 bg-void-secondary border border-void-secondary dark:border-white/10 text-text-primary text-base font-bold shadow-lg hover:bg-void-primary transition-all duration-300">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 19.429M15.75 6.75H18m-9.75 3L10.5 12.559V17.25m3.659-4.706L20.25 21.75V4.75" /></svg>
              Sipariş Düzenle
            </button>
          </div>
        </div>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 mb-8">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Sipariş Özeti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
            <div>
              <p className="text-text-secondary">Sipariş Durumu:</p>
              <p className="font-semibold text-system-success">Gönderildi</p>
            </div>
            <div>
              <p className="text-text-secondary">Sipariş Tarihi:</p>
              <p className="font-semibold text-text-primary">2025-07-10</p>
            </div>
            <div>
              <p className="text-text-secondary">Kanal:</p>
              <p className="font-semibold text-text-primary">Etsy</p>
            </div>
            <div>
              <p className="text-text-secondary">Toplam Tutar:</p>
              <p className="font-semibold text-text-primary">₺45.00</p>
            </div>
            <div>
              <p className="text-text-secondary">Takip Numarası:</p>
              <p className="font-semibold text-accent-primary hover:underline cursor-pointer">ETSY123456789</p>
            </div>
            <div>
              <p className="text-text-secondary">Tahmini Teslimat:</p>
              <p className="font-semibold text-text-primary">2025-07-18</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Müşteri Detayları</h2>
            <p className="text-lg font-semibold text-text-primary">Ayşe Yılmaz</p>
            <p className="text-text-secondary">ayse.yilmaz@example.com</p>
            <p className="text-text-secondary">+90 555 123 4567</p>
          </div>
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Gönderim Adresi</h2>
            <p className="text-lg font-semibold text-text-primary">Ayşe Yılmaz</p>
            <p className="text-text-secondary">Örnek Mahallesi, Örnek Sokak No: 15</p>
            <p className="text-text-secondary">Kadıköy, İstanbul 34710</p>
            <p className="text-text-secondary">Türkiye</p>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 mb-8">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Sipariş Edilen Ürünler</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
              <thead className="bg-void-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">SKU</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Birim Fiyat</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Toplam</th>
                </tr>
              </thead>
              <tbody className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1627918074902-861f1816f1b3?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="El Yapımı Seramik Kupa" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-primary">El Yapımı Seramik Kupa</div>
                        <div className="text-sm text-text-secondary">Renk: Mavi</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">HCM002-BLU</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺20.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺40.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organik Pamuk Tişört" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-primary">Organik Pamuk Tişört</div>
                        <div className="text-sm text-text-secondary">Beden: L, Renk: Beyaz</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">OCTS001-L-WHT</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺5.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺5.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-void-secondary dark:border-white/10">
                  <th colSpan="4" scope="row" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Ara Toplam:</th>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-text-primary">₺45.00</td>
                </tr>
                <tr>
                  <th colSpan="4" scope="row" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Kargo:</th>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-text-primary">₺0.00</td>
                </tr>
                <tr className="border-t border-void-secondary dark:border-white/10">
                  <th colSpan="4" scope="row" className="px-6 py-3 text-right text-sm font-bold text-text-primary uppercase tracking-wider">Genel Toplam:</th>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-bold text-accent-primary">₺45.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Sipariş Etkinliği ve Notlar</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-sm text-text-secondary min-w-[100px]">2025-07-10 14:30</div>
              <div className="text-text-primary">Sipariş Oluşturuldu.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-sm text-text-secondary min-w-[100px]">2025-07-11 09:15</div>
              <div className="text-text-primary">Paketlendi. Takip Numarası oluşturuldu: ETSY123456789.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-sm text-text-secondary min-w-[100px]">2025-07-11 16:00</div>
              <div className="text-text-primary">Kargoya verildi.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-sm text-text-secondary min-w-[100px]">2025-07-12 10:00</div>
              <div className="text-text-primary">Müşteri sipariş durumunu sordu (e-posta yoluyla yanıtlandı).</div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="add-note" className="block text-sm font-medium text-text-primary">Sipariş Notu Ekle</label>
            <textarea id="add-note" rows="3" className="mt-1 block w-full rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" placeholder="Yeni notunuzu buraya yazın..."></textarea>
            <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-void-primary bg-accent-primary hover:bg-accent-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary">
              Not Ekle
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OrderDetail;
