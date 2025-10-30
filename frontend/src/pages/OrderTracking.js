
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackOrder = (event) => {
    event.preventDefault();
    const id = trackingId.trim().toUpperCase();

    let content = null;
    if (id === "ETSY123456789") {
      content = (
        <div className="mt-8 p-4 bg-void-primary rounded-md border border-void-secondary dark:border-white/10">
          <h3 className="text-lg font-bold text-text-primary mb-3">Sipariş Durumu: <span className="text-system-success">Gönderildi</span></h3>
          <p className="text-text-secondary">Son Güncelleme: 15 Temmuz 2025, 14:00 (Yerel Saat)</p>
          <ul className="mt-4 space-y-2 text-text-secondary">
            <li><strong>2025-07-10 14:30:</strong> Sipariş Oluşturuldu.</li>
            <li><strong>2025-07-11 09:15:</strong> Paketlendi ve kargo için hazırlandı.</li>
            <li><strong>2025-07-11 16:00:</strong> Kargoya verildi.</li>
            <li><strong>2025-07-13 08:00:</strong> Bölgesel dağıtım merkezine ulaştı.</li>
            <li><strong>2025-07-15 14:00:</strong> Teslimat için yolda.</li>
          </ul>
          <p className="mt-4 text-sm text-text-primary">Tahmini Teslimat Tarihi: <span className="font-bold">18 Temmuz 2025</span></p>
          <Link to={`/order-detail?orderId=${id}`} className="mt-4 inline-block text-accent-primary font-medium hover:underline">Sipariş Detaylarını Görüntüle →</Link>
        </div>
      );
    } else {
      content = (
        <div className="mt-8 p-4 bg-void-primary rounded-md border border-void-secondary dark:border-white/10">
          <h3 className="text-lg font-bold text-system-error mb-3">Sipariş Bulunamadı</h3>
          <p className="text-text-secondary">Girdiğiniz takip numarası veya sipariş kimliği ile eşleşen bir sipariş bulunamadı. Lütfen tekrar deneyin veya destek ile iletişime geçin.</p>
        </div>
      );
    }
    setTrackingResult(content);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Siparişinizi Takip Edin</h1>
          <p className="mt-2 text-text-secondary">Sipariş durumunuzu görmek için takip numaranızı veya sipariş kimliğinizi girin.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleTrackOrder}>
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="tracking-id">Takip Numarası veya Sipariş Kimliği</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="tracking-id" name="tracking-id" type="text" placeholder="Örnek: ETSY123456789" required value={trackingId} onChange={(e) => setTrackingId(e.target.value)} />
            </div>
            <div className="pt-2">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                Sipariş Durumunu Görüntüle
              </button>
            </div>
          </form>
          {trackingResult}
        </div>
      </div>
    </main>
  );
};

export default OrderTracking;
