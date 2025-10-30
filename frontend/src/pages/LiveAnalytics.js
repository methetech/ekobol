
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const LiveAnalytics = () => {
  const liveSalesChartRef = useRef(null);
  const [liveVisitors, setLiveVisitors] = useState(12);
  const [liveSales, setLiveSales] = useState('₺180.00');

  useEffect(() => {
    const isEnglish = false; // Assuming Turkish for now

    const createLiveSalesChart = (ctxId) => {
      const ctx = document.getElementById(ctxId);
      if (!ctx) return;

      const labels = Array.from({ length: 60 }, (_, i) => `${59 - i} ${isEnglish ? 'min ago' : 'dk önce'}`);
      labels[59] = isEnglish ? 'Now' : 'Şimdi';

      const salesData = Array(60).fill(0).map((_, i) => (Math.random() * 20 + (i / 10)).toFixed(2));
      salesData[59] = (Math.random() * 50).toFixed(2);

      const theme = {
        accent: '#8B5CF6',
        text: '#9CA3AF',
        grid: 'rgba(255, 255, 255, 0.1)',
      };

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: isEnglish ? 'Live Sales (₺)' : 'Canlı Satışlar (₺)',
              data: salesData,
              borderColor: theme.accent,
              backgroundColor: 'rgba(139, 92, 246, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: '#111827',
              titleColor: theme.accent,
              bodyColor: theme.text,
              borderColor: theme.grid,
              borderWidth: 1,
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                color: theme.text,
                autoSkip: true,
                maxTicksLimit: 10,
              },
            },
            y: {
              display: true,
              beginAtZero: true,
              grid: {
                color: theme.grid,
              },
              ticks: {
                color: theme.text,
                callback: (value) => (isEnglish ? '₺' : '₺') + value,
              },
            },
          },
          animation: false,
        },
      });
    };

    createLiveSalesChart('liveSalesChart');

    const interval = setInterval(() => {
      setLiveVisitors(Math.floor(Math.random() * 20) + 5);
      setLiveSales(
        (isEnglish ? '₺' : '₺') + (Math.random() * 300).toFixed(2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col w-full max-w-6xl px-4">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Canlı Analitik</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">Gerçek zamanlı satış verilerini ve site etkinliğini izleyin.</p>
        </div>
        <div className="border-b border-void-secondary dark:border-white/10 mb-8">
          <nav className="flex gap-8 -mb-px">
            <Link className="flex items-center justify-center py-4 px-1 text-text-secondary border-b-2 border-transparent hover:border-accent-primary hover:text-accent-primary transition-colors" to="/dashboard">
              <span className="text-sm font-semibold">Genel Bakış</span>
            </Link>
            <Link className="flex items-center justify-center py-4 px-1 text-text-secondary border-b-2 border-transparent hover:border-accent-primary hover:text-accent-primary transition-colors" to="/trends">
              <span className="text-sm font-semibold">Eğilimler</span>
            </Link>
            <Link className="flex items-center justify-center py-4 px-1 text-accent-primary border-b-2 border-accent-primary" to="/live-analytics">
              <span className="text-sm font-semibold">Canlı</span>
            </Link>
          </nav>
        </div>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <p className="text-lg font-medium text-text-secondary">Şu Anki Ziyaretçiler</p>
            <p id="live-visitors" className="text-4xl font-bold text-accent-primary mt-2">{liveVisitors}</p>
            <p className="text-sm text-text-secondary mt-1">Son 5 dakikadaki aktif kullanıcılar</p>
          </div>
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <p className="text-lg font-medium text-text-secondary">Son Satış (Son 1 Saat)</p>
            <p id="live-sales" className="text-4xl font-bold text-accent-primary mt-2">{liveSales}</p>
            <p className="text-sm text-text-secondary mt-1">Toplam 3 sipariş</p>
          </div>
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <p className="text-lg font-medium text-text-secondary">En Çok Görüntülenen Ürün</p>
            <p id="most-viewed-product" className="text-xl font-bold text-text-primary mt-2">Organik Pamuk Tişört</p>
            <p className="text-sm text-text-secondary mt-1">Şu anda 5 ziyaretçi tarafından görüntüleniyor</p>
          </div>
        </section>

        <section className="mb-12 bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Canlı Satış Akışı (Son 60 Dakika)</h2>
          <div className="h-64 md:h-80">
            <canvas ref={liveSalesChartRef} id="liveSalesChart"></canvas>
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Canlı Siparişler ve Etkinlikler</h2>
          <div className="overflow-y-auto h-80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">Şimdi</div>
              <p className="text-text-primary font-medium">Yeni sipariş <span className="text-accent-primary">#E10024</span> Etsy'den! (₺65.00)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">1 dk önce</div>
              <p className="text-text-primary">Organik Pamuk Tişört ürününe 2 yeni ziyaretçi geldi.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">3 dk önce</div>
              <p className="text-text-primary font-medium">Yeni sipariş <span className="text-accent-primary">#W40079</span> Web Sitesinden! (₺115.00)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">5 dk önce</div>
              <p className="text-text-primary">El Yapımı Seramik Kupa stok seviyesi düştü: 3 kaldı.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">8 dk önce</div>
              <p className="text-text-primary font-medium">Yeni sipariş <span className="text-accent-primary">#T20057</span> Trendyol'dan! (₺15.00)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">10 dk önce</div>
              <p className="text-text-primary">Yeni ziyaretçi kaynağı: Instagram Reklamları.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">12 dk önce</div>
              <p className="text-text-primary">Toplam aktif ziyaretçi sayısı 10'a yükseldi.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-text-secondary min-w-[80px]">15 dk önce</div>
              <p className="text-text-primary">Hepsiburada ürün güncellemesi tamamlandı.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LiveAnalytics;
