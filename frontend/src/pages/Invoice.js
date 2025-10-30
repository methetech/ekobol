
import React from 'react';

const Invoice = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-text-primary text-3xl font-bold leading-tight tracking-tight">Fatura #INV20250701</h1>
            <p className="text-text-secondary text-base font-normal leading-normal mt-1">Ödeme detaylarını ve fatura kalemlerini görüntüleyin.</p>
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full h-10 px-6 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-all duration-300">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
            <span>PDF İndir</span>
          </button>
        </div>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-8">
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-void-secondary dark:border-white/10">
            <div>
              <img src="/ekobol.ico" alt="Ekobol Logo" className="h-16 w-16 mb-2" />
              <p className="text-lg font-semibold text-text-primary">Ekobol Hizmetleri A.Ş.</p>
              <p className="text-sm text-text-secondary">destek@ekobol.com</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-text-primary mb-1">FATURA</h2>
              <p className="text-sm font-medium text-text-secondary">#INV20250701</p>
              <p className="text-sm text-text-secondary">Tarih: 1 Temmuz 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-sm mb-8">
            <div>
              <p className="font-semibold text-text-secondary mb-1">FATURA EDİLEN:</p>
              <p className="font-bold text-text-primary text-base">Ayşe Yılmaz</p>
              <p className="text-text-secondary">ayse.yilmaz@example.com</p>
              <p className="text-text-secondary">Örnek Şirketiniz A.Ş.</p>
            </div>
            <div className="md:text-right">
              <p className="font-semibold text-text-secondary mb-1">ÖDEME DURUMU:</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-system-success/10 text-system-success">
                ÖDENDİ
              </span>
              <p className="text-sm text-text-secondary mt-2">Ödeme Tarihi: 1 Temmuz 2025</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
              <thead className="bg-void-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Açıklama</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Birim Fiyat</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Toplam</th>
                </tr>
              </thead>
              <tbody className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Ekobol Partner Planı (Aylık Abonelik)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺500.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺500.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Ekstra YZ Kredi Paketi (1000 Kredi)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺50.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺50.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Ara Toplam:</span>
                <span className="font-medium text-text-primary">₺550.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Vergi (%20 KDV):</span>
                <span className="font-medium text-text-primary">₺110.00</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-void-secondary dark:border-white/10 text-base font-bold">
                <span className="text-text-primary">Genel Toplam:</span>
                <span className="text-accent-primary">₺660.00</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-void-secondary dark:border-white/10 text-center">
            <p className="text-lg font-semibold text-text-primary mb-2">İşbirliğiniz için teşekkür ederiz!</p>
            <p className="text-text-secondary text-sm">Bu fatura otomatik olarak oluşturulmuştur. Herhangi bir sorunuz varsa lütfen destek ekibimizle iletişime geçin.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Invoice;
