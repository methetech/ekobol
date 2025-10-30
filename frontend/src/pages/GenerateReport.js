
import React, { useState } from 'react';

const GenerateReport = () => {
  const [dateRange, setDateRange] = useState('last-30-days');

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Finansal Rapor Oluştur</h1>
          <p className="mt-2 text-text-secondary">Detaylı finansal içgörüler ve analizler için özel raporlar oluşturun.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="report-type">Rapor Türü Seçin</label>
              <select id="report-type" name="report-type" className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary">
                <option value="profit-loss">Kâr ve Zarar Beyanı</option>
                <option value="sales-by-channel">Kanala Göre Satış Raporu</option>
                <option value="expense-breakdown">Gider Dökümü</option>
                <option value="tax-summary">Vergi Özeti</option>
                <option value="custom">Özel Rapor</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="date-range">Tarih Aralığı</label>
              <select id="date-range" name="date-range" className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary" value={dateRange} onChange={handleDateRangeChange}>
                <option value="last-30-days">Son 30 Gün</option>
                <option value="this-month">Bu Ay</option>
                <option value="last-month">Geçen Ay</option>
                <option value="this-quarter">Bu Çeyrek</option>
                <option value="last-quarter">Son Çeyrek</option>
                <option value="this-year">Bu Yıl</option>
                <option value="last-year">Geçen Yıl</option>
                <option value="custom">Özel Aralık</option>
              </select>
            </div>
            {dateRange === 'custom' && (
              <div id="custom-date-range" className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-primary" htmlFor="start-date">Başlangıç Tarihi</label>
                  <input type="date" id="start-date" name="start-date" className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-secondary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary" htmlFor="end-date">Bitiş Tarihi</label>
                  <input type="date" id="end-date" name="end-date" className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-secondary" />
                </div>
              </div>
            )}
            <div className="pt-2">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                Raporu Oluştur
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Raporunuz oluşturulduktan sonra indirmeye hazır olacaktır.
        </p>
      </div>
    </main>
  );
};

export default GenerateReport;
