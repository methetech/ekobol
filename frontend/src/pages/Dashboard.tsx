import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { useLanguage } from '../context/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();
  const etsyChartRef = useRef<HTMLCanvasElement | null>(null);
  const trendyolChartRef = useRef<HTMLCanvasElement | null>(null);
  const hepsiburadaChartRef = useRef<HTMLCanvasElement | null>(null);
  const websiteChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartRefs = [
      etsyChartRef,
      trendyolChartRef,
      hepsiburadaChartRef,
      websiteChartRef,
    ];
    const chartInstances: Chart[] = [];

    const createMiniChart = (
      ref: React.RefObject<HTMLCanvasElement | null>,
      data: number[]
    ) => {
      if (ref.current) {
        const ctx = ref.current.getContext('2d');
        if (ctx) {
          return new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Sales',
                  data: data,
                  borderColor: 'rgb(14, 205, 144)',
                  tension: 0.4,
                  pointRadius: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              scales: {
                x: { display: false },
                y: { display: false },
              },
            },
          });
        }
      }
    };

    const etsyChart = createMiniChart(
      etsyChartRef,
      [1200, 1900, 3000, 5000, 2300, 8200]
    );
    if (etsyChart) chartInstances.push(etsyChart);

    const trendyolChart = createMiniChart(
      trendyolChartRef,
      [800, 1200, 4000, 3000, 6000, 7800]
    );
    if (trendyolChart) chartInstances.push(trendyolChart);

    const hepsiburadaChart = createMiniChart(
      hepsiburadaChartRef,
      [1500, 2200, 2800, 4000, 5000, 6500]
    );
    if (hepsiburadaChart) chartInstances.push(hepsiburadaChart);

    const websiteChart = createMiniChart(
      websiteChartRef,
      [1000, 1500, 3500, 4500, 5500, 6400]
    );
    if (websiteChart) chartInstances.push(websiteChart);

    return () => chartInstances.forEach((instance) => instance.destroy());
  }, []);

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
            {t('dashboardTitle')}
          </h1>
          <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
            {t('dashboardSubtitle')}
          </p>
        </div>

        <section className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('totalSalesLabel')}
              </p>
              <p className='text-4xl font-bold text-[var(--primary-color)] mt-2'>
                ₺89.500
              </p>
              <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
                +12% önceki döneme göre
              </p>
            </div>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('totalOrdersLabel')}
              </p>
              <p className='text-4xl font-bold text-[var(--primary-color)] mt-2'>
                985
              </p>
              <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
                +8% önceki döneme göre
              </p>
            </div>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('totalProfitLabel')}
              </p>
              <p className='text-4xl font-bold text-[var(--primary-color)] mt-2'>
                ₺35.750
              </p>
              <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
                +15% önceki döneme göre
              </p>
            </div>
          </div>
        </section>

        <section className='mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
              {t('etsyPerformanceTitle')}
            </h2>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              {t('salesLabel')}:{' '}
              <span className='text-[var(--primary-color)] font-bold'>
                ₺25.400
              </span>{' '}
              (toplamın 28%)
            </p>
            <div className='h-32 my-4'>
              <canvas ref={etsyChartRef}></canvas>
            </div>
            <h3 className='text-[var(--text-primary-color)] text-xl font-bold mb-3'>
              {t('recentOrdersLabel')}
            </h3>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-[var(--divider-color)]'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('orderIdLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('productLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('amountLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('statusLabel')}
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #E10023
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      El Yapımı Kupa
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺250.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-green-600'>
                      Gönderildi
                    </td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #E10022
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Özel Kolye
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺750.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-orange-600'>
                      Beklemede
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 text-center'>
              <Link
                to='/orders?channel=etsy'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline text-sm'
              >
                {t('viewAllOrdersButton')}
              </Link>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
              {t('trendyolPerformanceTitle')}
            </h2>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              {t('salesLabel')}:{' '}
              <span className='text-[var(--primary-color)] font-bold'>
                ₺24.180
              </span>{' '}
              (toplamın 27%)
            </p>
            <div className='h-32 my-4'>
              <canvas ref={trendyolChartRef}></canvas>
            </div>
            <h3 className='text-[var(--text-primary-color)] text-xl font-bold mb-3'>
              {t('recentOrdersLabel')}
            </h3>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-[var(--divider-color)]'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('orderIdLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('productLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('amountLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('statusLabel')}
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #T20056
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Organik Pamuk Tişört
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺200.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-green-600'>
                      Teslim Edildi
                    </td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #T20055
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Kot Pantolon
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺550.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-orange-600'>
                      Yolda
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 text-center'>
              <Link
                to='/orders?channel=trendyol'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline text-sm'
              >
                {t('viewAllOrdersButton')}
              </Link>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
              {t('hepsiburadaPerformanceTitle')}
            </h2>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              {t('salesLabel')}:{' '}
              <span className='text-[var(--primary-color)] font-bold'>
                ₺20.150
              </span>{' '}
              (toplamın 22%)
            </p>
            <div className='h-32 my-4'>
              <canvas ref={hepsiburadaChartRef}></canvas>
            </div>
            <h3 className='text-[var(--text-primary-color)] text-xl font-bold mb-3'>
              {t('recentOrdersLabel')}
            </h3>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-[var(--divider-color)]'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('orderIdLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('productLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('amountLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('statusLabel')}
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #H30011
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Akıllı Saat
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺1500.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-green-600'>
                      İşleniyor
                    </td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #H30010
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Kablosuz Kulaklık
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺800.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-orange-600'>
                      Onaylandı
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 text-center'>
              <Link
                to='/orders?channel=hepsiburada'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline text-sm'
              >
                {t('viewAllOrdersButton')}
              </Link>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
              {t('websitePerformanceTitle')}
            </h2>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              {t('salesLabel')}:{' '}
              <span className='text-[var(--primary-color)] font-bold'>
                ₺19.770
              </span>{' '}
              (toplamın 22%)
            </p>
            <div className='h-32 my-4'>
              <canvas ref={websiteChartRef}></canvas>
            </div>
            <h3 className='text-[var(--text-primary-color)] text-xl font-bold mb-3'>
              {t('recentOrdersLabel')}
            </h3>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-[var(--divider-color)]'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('orderIdLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('productLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('amountLabel')}
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                    >
                      {t('statusLabel')}
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #W40078
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Premium Kahve Çekirdekleri
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺350.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-green-600'>
                      Tamamlandı
                    </td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      #W40077
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      Espresso Makinesi
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      ₺3000.00
                    </td>
                    <td className='px-2 py-2 whitespace-nowrap text-sm text-orange-600'>
                      İşleniyor
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 text-center'>
              <Link
                to='/orders?channel=website'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline text-sm'
              >
                {t('viewAllOrdersButton')}
              </Link>
            </div>
          </div>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-6'>
              {t('quickStatsTitle')}
            </h2>
            <ul className='space-y-4 text-base text-[var(--text-secondary-color)]'>
              <li
                dangerouslySetInnerHTML={{ __html: t('topProductStat') }}
              ></li>
              <li
                dangerouslySetInnerHTML={{ __html: t('bestChannelStat') }}
              ></li>
              <li
                dangerouslySetInnerHTML={{ __html: t('avgOrderValueStat') }}
              ></li>
              <li dangerouslySetInnerHTML={{ __html: t('lowStockStat') }}></li>
            </ul>
            <div className='mt-6 text-center'>
              <Link
                to='/trends'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline'
              >
                {t('fullAnalyticsButton')}
              </Link>
            </div>
          </div>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-6'>
              {t('aiRecsTitle')}
            </h2>
            <p className='text-base text-[var(--text-secondary-color)] mb-4'>
              {t('aiRecsDesc')}
            </p>
            <ul className='list-disc list-inside space-y-2 text-base text-[var(--text-secondary-color)]'>
              <li>{t('aiRec1')}</li>
              <li>{t('aiRec2')}</li>
              <li>{t('aiRec3')}</li>
            </ul>
            <div className='mt-6 text-center'>
              <Link
                to='/marketing-tools'
                className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline'
              >
                {t('implementStrategiesButton')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
