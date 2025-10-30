
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsManage = () => {
  const [channelFilter, setChannelFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const allProducts = [
    {
      id: 'OCTS001',
      name: 'Organik Pamuk Tişört',
      description: 'Yumuşak ve nefes alabilen',
      sku: 'OCTS001',
      stock: 150,
      price: '₺20.00',
      channels: ['etsy', 'trendyol', 'website'],
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'HCM002',
      name: 'El Yapımı Seramik Kupa',
      description: 'Benzersiz el yapımı kupa',
      sku: 'HCM002',
      stock: 0,
      price: '₺25.00',
      channels: ['etsy', 'hepsiburada'],
      status: 'oos',
      imageUrl: 'https://images.unsplash.com/photo-1627918074902-861f1816f1b3?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'AIGAP003',
      name: 'YZ Oluşturulmuş Sanat Baskısı',
      description: 'Benzersiz dijital oluşturma',
      sku: 'AIGAP003',
      stock: 'Sınırsız',
      price: '₺50.00',
      channels: ['website'],
      status: 'draft',
      imageUrl: 'https://images.unsplash.com/photo-1698297753351-4091f09c6298?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'EOC004',
      name: 'Ergonomik Ofis Koltuğu',
      description: 'Uzun çalışma saatleri için',
      sku: 'EOC004',
      stock: 25,
      price: '₺350.00',
      channels: ['trendyol'],
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1596541223-fa9d30009c91?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'BTSP005',
      name: 'Bluetooth Hoparlör',
      description: 'Taşınabilir ve güçlü',
      sku: 'BTSP005',
      stock: 80,
      price: '₺85.00',
      channels: ['hepsiburada'],
      status: 'active',
      imageUrl: 'https://images.unsplash.com/photo-1543886566-224449842a27?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesChannel = !channelFilter || product.channels.includes(channelFilter);
    const matchesStatus = !statusFilter || product.status === statusFilter;
    const matchesSearch = !searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesChannel && matchesStatus && matchesSearch;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'oos':
        return 'bg-red-100 text-red-800';
      case 'archived':
        return 'bg-purple-100 text-purple-800';
      default:
        return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Aktif';
      case 'draft':
        return 'Taslak';
      case 'oos':
        return 'Stokta Yok';
      case 'archived':
        return 'Arşivlendi';
      default:
        return status;
    }
  };

  const getChannelClass = (channel) => {
    switch (channel) {
      case 'etsy':
        return 'bg-blue-100 text-blue-800';
      case 'trendyol':
        return 'bg-red-100 text-red-800';
      case 'hepsiburada':
        return 'bg-yellow-100 text-yellow-800';
      case 'website':
        return 'bg-purple-100 text-purple-800';
      default:
        return '';
    }
  };

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-void-secondary">
      <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-text-primary text-4xl font-bold leading-tight tracking-tight">Ürünleriniz</h1>
            <p className="text-text-secondary text-base font-normal leading-normal mt-1">Tüm bağlı kanallarınızdaki ürün kataloğunuzu yönetin.</p>
          </div>
          <Link to="/product-add-edit" className="inline-flex items-center justify-center rounded-full h-10 px-4 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Filters and Search */}
        <section className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <select id="channel-filter" className="form-select block w-full sm:w-48 rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary" value={channelFilter} onChange={(e) => setChannelFilter(e.target.value)}>
              <option value="">Tüm Kanallar</option>
              <option value="etsy">Etsy</option>
              <option value="trendyol">Trendyol</option>
              <option value="hepsiburada">Hepsiburada</option>
              <option value="website">Web Sitesi</option>
            </select>
            <select id="status-filter" className="form-select block w-full sm:w-48 rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">Tüm Durumlar</option>
              <option value="active">Aktif</option>
              <option value="draft">Taslak</option>
              <option value="oos">Stokta Yok</option>
              <option value="archived">Arşivlendi</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <input type="text" id="product-search" placeholder="Ürün Adı veya SKU Ara..." className="form-input block w-full sm:w-64 rounded-md border-void-secondary shadow-sm focus:border-accent-primary focus:ring-accent-primary bg-void-primary text-text-primary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </section>

        {/* Products Table */}
        <section className="bg-void-primary rounded-xl border border-void-secondary shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-void-secondary">
              <thead className="bg-void-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Ürün</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">SKU</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Stok</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Fiyat</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Kanallar</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Durum</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Eylemler</th>
                </tr>
              </thead>
              <tbody id="products-table-body" className="bg-void-primary divide-y divide-void-secondary">
                {filteredProducts.map(product => (
                  <tr key={product.id} className="product-row" data-channels={product.channels.join(',')} data-status={product.status} data-product-name={product.name} data-sku={product.sku}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-text-primary">{product.name}</div>
                          <div className="text-sm text-text-secondary">{product.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{product.sku}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                      {product.channels.map(channel => (
                        <span key={channel} className={`inline-block text-xs px-2 rounded-full mr-1 ${getChannelClass(channel)}`}>
                          {channel === 'etsy' ? 'Etsy' : channel === 'trendyol' ? 'Trendyol' : channel === 'hepsiburada' ? 'Hepsiburada' : 'Web Sitesi'}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(product.status)}`}>{getStatusText(product.status)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/product-add-edit?id=${product.id}`} className="text-accent-primary hover:text-accent-primary-dark">Düzenle</Link>
                      {product.status === 'active' && (
                        <Link to={`/product-display?sku=${product.sku}`} className="ml-4 text-indigo-600 hover:text-indigo-900">Canlı Görüntüle</Link>
                      )}
                      {product.status === 'oos' && (
                        <button type="button" className="ml-4 text-purple-600 hover:text-purple-900">Arşivle</button>
                      )}
                      {product.status === 'draft' && (
                        <button className="ml-4 text-orange-600 hover:text-orange-900">Yayınla</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination Placeholder */}
        <section className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Link to="/products-manage?page=1" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Önceki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/products-manage?page=1" aria-current="page" className="z-10 bg-accent-primary/10 border-accent-primary text-accent-primary relative inline-flex items-center px-4 py-2 text-sm font-medium">1</Link>
            <Link to="/products-manage?page=2" className="relative inline-flex items-center px-4 py-2 border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">2</Link>
            <Link to="/products-manage?page=3" className="relative inline-flex items-center px-4 py-2 border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">3</Link>
            <span className="relative inline-flex items-center px-4 py-2 border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary">...</span>
            <Link to="/products-manage?page=10" className="relative inline-flex items-center px-4 py-2 border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">10</Link>
            <Link to="/products-manage?page=2" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-void-secondary bg-void-primary text-sm font-medium text-text-secondary hover:bg-void-secondary">
              <span className="sr-only">Sonraki</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default ProductsManage;
