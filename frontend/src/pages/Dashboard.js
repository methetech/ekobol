
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const etsyChartRef = useRef(null);
  const trendyolChartRef = useRef(null);
  const hepsiburadaChartRef = useRef(null);
  const websiteChartRef = useRef(null);

  useEffect(() => {
    // Dummy data for charts
    const chartData = {
      labels: ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4'],
      datasets: [
        {
          label: 'Satışlar',
          data: [1000, 1200, 1500, 1300],
          borderColor: '#8B5CF6',
          tension: 0.1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    };

    if (etsyChartRef.current) {
      new Chart(etsyChartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
    if (trendyolChartRef.current) {
      new Chart(trendyolChartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
    if (hepsiburadaChartRef.current) {
      new Chart(hepsiburadaChartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
    if (websiteChartRef.current) {
      new Chart(websiteChartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
  }, []);

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Kontrol Panelinize Hoş Geldiniz!</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">E-ticaret imparatorluğunuzun kapsamlı bir özeti.</p>
        </div>

        {/* Overall Summary Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
              <p className="text-lg font-medium text-text-secondary">Toplam Satış (Son 30 Gün)</p>
              <p id="total-sales" className="text-4xl font-bold text-accent-primary mt-2">₺28.900</p>
              <p id="total-sales-trend" className="text-sm text-text-secondary mt-1">Önceki döneme göre %12 artış</p>
            </div>
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
              <p className="text-lg font-medium text-text-secondary">Toplam Sipariş (Son 30 Gün)</p>
              <p id="total-orders" className="text-4xl font-bold text-accent-primary mt-2">985</p>
              <p id="total-orders-trend" className="text-sm text-text-secondary mt-1">Önceki döneme göre %8 artış</p>
            </div>
            <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
              <p className="text-lg font-medium text-text-secondary">Toplam Kâr (Son 30 Gün)</p>
              <p id="total-profit" className="text-4xl font-bold text-accent-primary mt-2">₺11.560</p>
              <p id="total-profit-trend" className="text-sm text-text-secondary mt-1">Önceki döneme göre %15 artış</p>
            </div>
          </div>
        </section>

        {/* Channel Specific Panels */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Etsy Panel */}
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Etsy Performansı</h2>
            <p className="text-lg font-medium text-text-secondary">Satış: <span id="etsy-sales-value" className="text-accent-primary font-bold">₺8.200</span> (Toplamın %<span id="etsy-sales-percentage">28</span>'i)</p>
            <div className="h-32 my-4">
              <canvas ref={etsyChartRef} id="etsySalesChart"></canvas>
            </div>

            <h3 className="text-text-primary text-xl font-bold mb-3">Son Etsy Siparişleri</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
                <thead>
                  <tr>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Sipariş No</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  </tr>
                </thead>
                <tbody id="etsy-orders-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#E10023</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">El Yapımı Kupa</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺25.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-success">Gönderildi</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#E10022</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Özel Yapım Kolye</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺75.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-warning">Beklemede</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="/orders?channel=etsy" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline text-sm">Tüm Etsy Siparişlerini Görüntüle →</Link>
            </div>
          </div>

          {/* Trendyol Panel */}
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Trendyol Performansı</h2>
            <p className="text-lg font-medium text-text-secondary">Satış: <span id="trendyol-sales-value" className="text-accent-primary font-bold">₺7.800</span> (Toplamın %<span id="trendyol-sales-percentage">27</span>'si)</p>
            <div className="h-32 my-4">
              <canvas ref={trendyolChartRef} id="trendyolSalesChart"></canvas>
            </div>

            <h3 className="text-text-primary text-xl font-bold mb-3">Son Trendyol Siparişleri</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
                <thead>
                  <tr>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Sipariş No</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  </tr>
                </thead>
                <tbody id="trendyol-orders-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#T20056</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Organik Pamuk Tişört</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺20.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-success">Teslim Edildi</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#T20055</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Kot Pantolon</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺55.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-warning">Yolda</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="/orders?channel=trendyol" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline text-sm">Tüm Trendyol Siparişlerini Görüntüle →</Link>
            </div>
          </div>

          {/* Hepsiburada Panel */}
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Hepsiburada Performansı</h2>
            <p className="text-lg font-medium text-text-secondary">Satış: <span id="hepsiburada-sales-value" className="text-accent-primary font-bold">₺6.500</span> (Toplamın %<span id="hepsiburada-sales-percentage">22</span>'si)</p>
            <div className="h-32 my-4">
              <canvas ref={hepsiburadaChartRef} id="hepsiburadaSalesChart"></canvas>
            </div>

            <h3 className="text-text-primary text-xl font-bold mb-3">Son Hepsiburada Siparişleri</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
                <thead>
                  <tr>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Sipariş No</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  </tr>
                </thead>
                <tbody id="hepsiburada-orders-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#H30011</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Akıllı Saat</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺150.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-success">İşleniyor</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#H30010</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Kablosuz Kulaklık</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺80.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-warning">Onaylandı</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="/orders?channel=hepsiburada" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline text-sm">Tüm Hepsiburada Siparişlerini Görüntüle →</Link>
            </div>
          </div>

          {/* Website Panel */}
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-4">Web Sitesi Performansı</h2>
            <p className="text-lg font-medium text-text-secondary">Satış: <span id="website-sales-value" className="text-accent-primary font-bold">₺6.400</span> (Toplamın %<span id="website-sales-percentage">22</span>'si)</p>
            <div className="h-32 my-4">
              <canvas ref={websiteChartRef} id="websiteSalesChart"></canvas>
            </div>

            <h3 className="text-text-primary text-xl font-bold mb-3">Son Web Sitesi Siparişleri</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
                <thead>
                  <tr>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Sipariş No</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Miktar</th>
                    <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  </tr>
                </thead>
                <tbody id="website-orders-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#W40078</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Premium Kahve Çekirdekleri</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺35.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-success">Tamamlandı</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-text-primary">#W40077</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">Espresso Makinesi</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-text-secondary">₺300.00</td>
                    <td className="px-2 py-2 whitespace-nowrap text-sm text-system-warning">İşleniyor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="/orders?channel=website" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline text-sm">Tüm Web Sitesi Siparişlerini Görüntüle →</Link>
            </div>
          </div>
        </section>

        {/* AI Recommendations (retained from previous iteration) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-6">Hızlı İstatistikler</h2>
            <ul id="quick-stats-list" className="space-y-4 text-base text-text-secondary">
              <li><strong className="text-text-primary">En Çok Satan Ürün:</strong> Organik Pamuk Tişört <span className="text-sm">(350 satış)</span></li>
              <li><strong className="text-text-primary">En İyi Kanal (gelire göre):</strong> Etsy <span className="text-sm">(₺8.200)</span></li>
              <li><strong className="text-text-primary">Ortalama Sipariş Değeri:</strong> ₺29.34</li>
              <li><strong className="text-text-primary">Düşük Stok Uyarıları:</strong> 5 ürün eşiğin altında.</li>
            </ul>
            <div className="mt-6 text-center">
              <Link to="/trends" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline">Tüm Analitikler →</Link>
            </div>
          </div>
          <div className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm p-6">
            <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-tight mb-6">Büyüme İçin YZ Önerileri</h2>
            <p className="text-base text-text-secondary mb-4">
              YZ motorumuz size eyleme geçirilebilir içgörüler sağlamak için verilerinizi sürekli analiz ediyor.
            </p>
            <ul id="ai-recommendations-list" className="list-disc list-inside space-y-2 text-base text-text-secondary">
              <li>Hepsiburada'da "Akıllı Saat" için yeni bir reklam kampanyası başlatmayı düşünün.</li>
              <li>Web sitenizdeki "Espresso Makinesi" ürün açıklamalarını daha fayda odaklı anahtar kelimelerle optimize edin.</li>
              <li>Dönüşüm oranını %5 artırmak için Etsy'deki "Özel Yapım Kolye" fiyatlandırma stratejisini gözden geçirin.</li>
            </ul>
            <div className="mt-6 text-center">
              <Link to="/marketing-tools" className="inline-flex items-center justify-center text-accent-primary font-bold hover:underline">YZ Stratejilerini Uygula →</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
