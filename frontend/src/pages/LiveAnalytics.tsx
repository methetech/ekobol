import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const LiveAnalytics = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Function to create Live Sales Chart
    const createLiveSalesChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          const labels: string[] = [];
          for (let i = 59; i >= 0; i--) {
            labels.push(`${i} dk önce`);
          }
          labels[59] = 'Şimdi';

          const salesData = Array(60)
            .fill(0)
            .map((_, i) =>
              parseFloat((Math.random() * 20 + i / 10).toFixed(2))
            );
          salesData[59] = parseFloat((Math.random() * 50).toFixed(2));

          chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Canlı Satışlar (₺)',
                  data: salesData,
                  borderColor: 'rgb(14, 205, 144)',
                  backgroundColor: 'rgba(14, 205, 144, 0.2)',
                  fill: true,
                  tension: 0.2,
                  pointRadius: 0,
                  pointHitRadius: 10,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: 'transparent',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false },
              },
              scales: {
                x: {
                  display: true,
                  grid: { display: false },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                  },
                },
                y: {
                  display: true,
                  beginAtZero: true,
                  grid: { color: 'rgba(0,0,0,0.1)' },
                  ticks: {
                    callback: function (value) {
                      return '₺' + value;
                    },
                  },
                },
              },
              animation: false,
            },
          });
        }
      }
    };

    createLiveSalesChart();

    const interval = setInterval(() => {
      const liveVisitors = document.getElementById('live-visitors');
      if (liveVisitors) {
        liveVisitors.textContent = (
          Math.floor(Math.random() * 20) + 5
        ).toString();
      }
      const liveSales = document.getElementById('live-sales');
      if (liveSales) {
        liveSales.textContent = '₺' + (Math.random() * 300).toFixed(2);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main className='flex flex-1 justify-center py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-6xl px-4'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
            Canlı Analitik
          </h1>
          <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
            Gerçek zamanlı satış verilerini ve site etkinliğini izleyin.
          </p>
        </div>
        <div className='border-b border-[var(--divider-color)] mb-8'>
          <nav className='flex gap-8 -mb-px'>
            <Link
              className='flex items-center justify-center py-4 px-1 inactive-tab'
              to='/dashboard'
            >
              <span className='text-sm font-semibold'>Genel Bakış</span>
            </Link>
            <Link
              className='flex items-center justify-center py-4 px-1 inactive-tab'
              to='/trends'
            >
              <span className='text-sm font-semibold'>Eğilimler</span>
            </Link>
            <Link
              className='flex items-center justify-center py-4 px-1 active-tab'
              to='/live-analytics'
            >
              <span className='text-sm font-semibold'>Canlı</span>
            </Link>
          </nav>
        </div>

        <section className='mb-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              Şu Anki Ziyaretçiler
            </p>
            <p
              id='live-visitors'
              className='text-4xl font-bold text-[var(--primary-color)] mt-2'
            >
              12
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
              Son 5 dakikadaki aktif kullanıcılar
            </p>
          </div>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              Son Satış (Son 1 Saat)
            </p>
            <p
              id='live-sales'
              className='text-4xl font-bold text-[var(--primary-color)] mt-2'
            >
              ₺180.00
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
              Toplam 3 sipariş
            </p>
          </div>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
            <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
              En Çok Görüntülenen Ürün
            </p>
            <p
              id='most-viewed-product'
              className='text-xl font-bold text-[var(--text-primary-color)] mt-2'
            >
              Organik Pamuk Tişört
            </p>
            <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
              Şu anda 5 ziyaretçi tarafından görüntüleniyor
            </p>
          </div>
        </section>

        <section className='mb-12 bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
          <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
            Canlı Satış Akışı (Son 60 Dakika)
          </h2>
          <div className='h-64 md:h-80'>
            <canvas ref={chartRef}></canvas>
          </div>
        </section>

        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6'>
          <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
            Canlı Siparişler ve Etkinlikler
          </h2>
          <div className='overflow-y-auto h-80 space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                Şimdi
              </div>
              <p className='text-[var(--text-primary-color)] font-medium'>
                Yeni sipariş{' '}
                <span className='text-[var(--primary-color)]'>#E10024</span>{' '}
                Etsy'den! (₺65.00)
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                1 dk önce
              </div>
              <p className='text-[var(--text-primary-color)]'>
                Organik Pamuk Tişört ürününe 2 yeni ziyaretçi geldi.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                3 dk önce
              </div>
              <p className='text-[var(--text-primary-color)] font-medium'>
                Yeni sipariş{' '}
                <span className='text-[var(--primary-color)]'>#W40079</span> Web
                Sitesinden! (₺115.00)
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                5 dk önce
              </div>
              <p className='text-[var(--text-primary-color)]'>
                El Yapımı Seramik Kupa stok seviyesi düştü: 3 kaldı.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                8 dk önce
              </div>
              <p className='text-[var(--text-primary-color)] font-medium'>
                Yeni sipariş{' '}
                <span className='text-[var(--primary-color)]'>#T20057</span>{' '}
                Trendyol'dan! (₺15.00)
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                10 dk önce
              </div>
              <p className='text-[var(--text-primary-color)]'>
                Yeni ziyaretçi kaynağı: Instagram Reklamları.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                12 dk önce
              </div>
              <p className='text-[var(--text-primary-color)]'>
                Toplam aktif ziyaretçi sayısı 10'a yükseldi.
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-sm text-[var(--text-secondary-color)] min-w-[80px]'>
                15 dk önce
              </div>
              <p className='text-[var(--text-primary-color)]'>
                Hepsiburada ürün güncellemesi tamamlandı.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LiveAnalytics;
