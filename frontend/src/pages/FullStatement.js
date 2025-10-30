
import React from 'react';

const FullStatement = () => {
  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Tam Finansal Beyan</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">Geçmiş tüm işlemlerinizi ve faturalarınızı görüntüleyin.</p>
        </div>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div>
              <label htmlFor="date-range-filter" className="sr-only">Tarih Aralığı</label>
              <select id="date-range-filter" className="form-select block w-full sm:w-48 rounded-md bg-void-secondary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary">
                <option value="last-30-days">Son 30 Gün</option>
                <option value="this-quarter">Bu Çeyrek</option>
                <option value="last-quarter">Son Çeyrek</option>
                <option value="this-year">Bu Yıl</option>
                <option value="last-year">Geçen Yıl</option>
                <option value="all-time">Tüm Zamanlar</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-auto flex justify-end">
            <button className="inline-flex items-center justify-center rounded-full h-10 px-6 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              <span>Raporu İndir</span>
            </button>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
              <thead className="bg-void-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">İşlem ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Tarih</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Açıklama</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Tür</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Bakiye</th>
                </tr>
              </thead>
              <tbody className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00105</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Etsy Satış Ödemesi (Sipariş #E10025)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-success/10 text-system-success">Gelir</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-success">+₺1,500.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,800.00</td>
                </tr>
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00104</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-13</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Trendyol Komisyon (Sipariş #T20060)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺25.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,650.00</td>
                </tr>
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00103</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Web Sitesi Siparişi (Sipariş #W40080)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-success/10 text-system-success">Gelir</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-success">+₺75.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,675.00</td>
                </tr>
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00102</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Pazarlama Kampanyası Harcaması</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺100.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,600.00</td>
                </tr>
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00101</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-08</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Hepsiburada Satış Ödemesi (Sipariş #H30015)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-success/10 text-system-success">Gelir</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-success">+₺220.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,700.00</td>
                </tr>
                <tr className="hover:bg-void-secondary transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-secondary">TRX00100</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">2025-07-05</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">Ekobol Partner Plan Ücreti</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-system-error/10 text-system-error">Gider</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-system-error">-₺500.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-text-primary">₺1,480.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Önceki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
            </button>
            <button type="button" aria-current="page" className="z-10 bg-accent-primary/10 border-accent-primary text-accent-primary relative inline-flex items-center px-4 py-2 text-sm font-medium">1</button>
            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">2</button>
            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">3</button>
            <span className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary">...</span>
            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">10</button>
            <button type="button" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Sonraki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default FullStatement;
