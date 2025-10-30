
import React from 'react';
import { Link } from 'react-router-dom';

const Finances = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Finansal Genel Bakış</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">Kazançlarınızı takip edin, giderleri yönetin ve abonelik detaylarını görüntüleyin.</p>
        </div>

        {/* Financial Summary Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start">
                <p className="text-lg font-medium text-text-secondary">Brüt Gelir (Son 30 Gün)</p>
                <div className="bg-system-success/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-system-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <p id="gross-revenue" className="text-4xl font-bold text-text-primary mt-2">₺28.900</p>
              <div className="flex items-center text-sm text-system-success mt-1">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                <span>Önceki döneme göre %12 artış</span>
              </div>
            </div>
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start">
                <p className="text-lg font-medium text-text-secondary">Toplam Giderler (Son 30 Gün)</p>
                <div className="bg-system-error/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-system-error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m16.5 0h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375" /></svg>
                </div>
              </div>
              <p id="total-expenses" className="text-4xl font-bold text-system-error mt-2">₺17.340</p>
              <div className="flex items-center text-sm text-system-error mt-1">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                <span>Önceki döneme göre %5 artış</span>
              </div>
            </div>
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start">
                <p className="text-lg font-medium text-text-secondary">Net Kâr (Son 30 Gün)</p>
                <div className="bg-system-success/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-system-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
                </div>
              </div>
              <p id="net-profit" className="text-4xl font-bold text-system-success mt-2">₺11.560</p>
              <div className="flex items-center text-sm text-system-success mt-1">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                <span>Önceki döneme göre %15 artış</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-6">Son İşlemler</h2>
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
                <thead className="bg-void-secondary">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Tarih</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Açıklama</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Tür</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                  </tr>
                </thead>
                <tbody id="recent-transactions-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                  <tr className="hover:bg-void-secondary transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-14</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Etsy Satış Ödemesi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-success/10 text-system-success">Gelir</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-success">+₺1,500.00</td>
                  </tr>
                  <tr className="hover:bg-void-secondary transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-13</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Trendyol Komisyonu</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺250.00</td>
                  </tr>
                  <tr className="hover:bg-void-secondary transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Web Sitesi Siparişi #W40078</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-success/10 text-system-success">Gelir</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-success">+₺35.00</td>
                  </tr>
                  <tr className="hover:bg-void-secondary transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Pazarlama Kampanyası Harcaması</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺50.00</td>
                  </tr>
                  <tr className="hover:bg-void-secondary transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-05</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Ekobol Partner Plan Ücreti</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺500.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/full-statement" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline">Tam Beyanı Görüntüle →</Link>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 mb-12 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Abonelik & Faturalandırma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-medium text-text-secondary">Mevcut Plan:</p>
              <p id="current-plan" className="text-xl font-bold text-text-primary mt-1">Partner Planı</p>
              <p id="current-plan-details" className="text-sm text-text-secondary mt-1">%50 Kâr Paylaşımı</p>
              <Link to="/pricing" className="inline-block mt-4 text-accent-primary font-bold hover:underline">Planı Değiştir →</Link>
            </div>
            <div>
              <p className="text-lg font-medium text-text-secondary">Sonraki Faturalandırma Tarihi:</p>
              <p id="next-billing-date" className="text-xl font-bold text-text-primary mt-1">1 Ağustos 2025</p>
              <p id="estimated-payment" className="text-sm text-text-secondary mt-1">Tahmini Ödeme: ~₺500.00</p>
              <Link to="/update-payment" className="inline-block mt-4 text-accent-primary font-bold hover:underline">Ödeme Yöntemini Güncelle →</Link>
            </div>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">YZ Finansal İçgörüler</h2>
          <p className="text-base text-text-secondary mb-6">
            YZ'miz, eyleme geçirilebilir öneriler sunmak için finansal verilerinizi analiz eder.
          </p>
          <div id="ai-financial-insights-list" className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-system-warning/10 border-l-4 border-system-warning rounded-r-lg">
              <svg className="h-6 w-6 text-system-warning flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
              <p className="text-base text-text-secondary">Pazarlama harcamanız, satış hacminize göre ortalamadan %2 daha yüksek. Kampanya verimliliğini gözden geçirin.</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-accent-primary/10 border-l-4 border-accent-primary rounded-r-lg">
              <svg className="h-6 w-6 text-accent-primary flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-base text-text-secondary">Daha düşük nakliye oranları için müzakere yapmayı düşünün; mevcut oranlar net kârınızı %1.5 etkiliyor.</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-system-success/10 border-l-4 border-system-success rounded-r-lg">
              <svg className="h-6 w-6 text-system-success flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m16.5 0h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375" /></svg>
              <p className="text-base text-text-secondary">Bu çeyrekte ofis malzemeleriyle ilgili toplam <strong>₺1,250.00</strong>'lik potansiyel vergi indirimleri tespit edildi.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/generate-report" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline">Detaylı Rapor Oluştur →</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Finances;
