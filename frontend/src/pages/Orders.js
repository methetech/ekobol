
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Orders = () => {
  const location = useLocation();
  const [selectedChannel, setSelectedChannel] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const allOrders = [
    { id: '#E10023', customer: 'Ayşe Yılmaz', date: '2025-07-10', total: '₺45.00', channel: 'etsy', status: 'shipped' },
    { id: '#T20056', customer: 'Mehmet Can', date: '2025-07-11', total: '₺75.50', channel: 'trendyol', status: 'pending' },
    { id: '#H30011', customer: 'Zeynep Ada', date: '2025-07-09', total: '₺120.00', channel: 'hepsiburada', status: 'delivered' },
    { id: '#W40078', customer: 'Ali Kara', date: '2025-07-12', total: '₺99.99', channel: 'website', status: 'pending' },
    { id: '#E10021', customer: 'Deniz Aras', date: '2025-07-08', total: '₺30.00', channel: 'etsy', status: 'delivered' },
    { id: '#T20055', customer: 'Can Yılmaz', date: '2025-07-07', total: '₺110.00', channel: 'trendyol', status: 'shipped' },
    { id: '#H30010', customer: 'Ece Demir', date: '2025-07-06', total: '₺50.00', channel: 'hepsiburada', status: 'cancelled' },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const channelParam = params.get('channel');
    if (channelParam) {
      setSelectedChannel(channelParam);
    }
  }, [location.search]);

  const filteredOrders = allOrders.filter(order => {
    const matchesChannel = !selectedChannel || order.channel === selectedChannel;
    const matchesStatus = !selectedStatus || order.status === selectedStatus;
    const matchesSearch = !searchTerm || order.id.toLowerCase().includes(searchTerm.toLowerCase()) || order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesChannel && matchesStatus && matchesSearch;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'shipped':
        return 'bg-system-success/10 text-system-success';
      case 'delivered':
        return 'bg-system-info/10 text-system-info';
      case 'pending':
        return 'bg-system-warning/10 text-system-warning';
      case 'cancelled':
        return 'bg-system-error/10 text-system-error';
      default:
        return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'shipped':
        return 'Gönderildi';
      case 'delivered':
        return 'Teslim Edildi';
      case 'pending':
        return 'Beklemede';
      case 'cancelled':
        return 'İptal Edildi';
      default:
        return status;
    }
  };

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Sipariş Yönetimi</h1>
          <p className="text-text-secondary text-base font-normal leading-normal mt-1">Tüm satış kanallarınızdaki müşteri siparişlerini takip edin ve yönetin.</p>
        </div>

        <section className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <select id="channel-filter" className="form-select block w-full sm:w-48 rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary" value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
              <option value="">Tüm Kanallar</option>
              <option value="etsy">Etsy</option>
              <option value="trendyol">Trendyol</option>
              <option value="hepsiburada">Hepsiburada</option>
              <option value="website">Web Sitesi</option>
            </select>
            <select id="status-filter" className="form-select block w-full sm:w-48 rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="">Tüm Durumlar</option>
              <option value="pending">Beklemede</option>
              <option value="shipped">Gönderildi</option>
              <option value="delivered">Teslim Edildi</option>
              <option value="cancelled">İptal Edildi</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <input type="text" id="order-search" placeholder="Sipariş No veya Ürün Ara..." className="form-input block w-full sm:w-64 rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary text-text-primary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </section>

        <section className="bg-void-primary rounded-xl border border-void-secondary dark:border-white/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-void-secondary dark:divide-white/10">
              <thead className="bg-void-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Sipariş No</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Müşteri</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Tarih</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Toplam</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Kanal</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Eylemler</th>
                </tr>
              </thead>
              <tbody id="orders-table-body" className="bg-void-primary divide-y divide-void-secondary dark:divide-white/10">
                {filteredOrders.map(order => (
                  <tr key={order.id} className="order-row hover:bg-void-secondary transition-colors" data-channel={order.channel} data-status={order.status} data-order-id={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{order.channel === 'etsy' ? 'Etsy' : order.channel === 'trendyol' ? 'Trendyol' : order.channel === 'hepsiburada' ? 'Hepsiburada' : 'Web Sitesi'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>{getStatusText(order.status)}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/order-detail?orderId=${order.id}`} className="text-accent-primary hover:underline">Görüntüle</Link>
                      {order.status === 'shipped' && (
                        <Link to={`/order-tracking?orderId=${order.id}`} className="ml-4 text-accent-primary hover:underline">Takip Et</Link>
                      )}
                      {order.status === 'pending' && (
                        <button className="ml-4 text-accent-primary hover:underline">Gönderildi Olarak İşaretle</button>
                      )}
                      {order.status === 'delivered' && (
                        <Link to={`/invoice?invoiceId=${order.id}`} className="ml-4 text-accent-primary hover:underline">Fatura</Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Link to="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Önceki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
            </Link>
            <Link to="#" aria-current="page" className="z-10 bg-accent-primary/10 border-accent-primary text-accent-primary relative inline-flex items-center px-4 py-2 text-sm font-medium">1</Link>
            <Link to="#" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">2</Link>
            <Link to="#" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">3</Link>
            <span className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary">...</span>
            <Link to="#" className="relative inline-flex items-center px-4 py-2 border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">10</Link>
            <Link to="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-void-secondary dark:border-white/20 bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Sonraki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
            </Link>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default Orders;
