import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Note: Filtering logic will be added later with useState
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
            Sipariş Yönetimi
          </h1>
          <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
            Tüm satış kanallarınızdaki müşteri siparişlerini takip edin ve
            yönetin.
          </p>
        </div>

        {/* Filters and Search */}
        <section className='mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center'>
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <select
              id='channel-filter'
              className='form-select block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
            >
              <option value=''>Tüm Kanallar</option>
              <option value='etsy'>Etsy</option>
              <option value='trendyol'>Trendyol</option>
              <option value='hepsiburada'>Hepsiburada</option>
              <option value='website'>Web Sitesi</option>
            </select>
            <select
              id='status-filter'
              className='form-select block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
            >
              <option value=''>Tüm Durumlar</option>
              <option value='pending'>Beklemede</option>
              <option value='shipped'>Gönderildi</option>
              <option value='delivered'>Teslim Edildi</option>
              <option value='cancelled'>İptal Edildi</option>
            </select>
          </div>
          <div className='w-full sm:w-auto'>
            <input
              type='text'
              id='order-search'
              placeholder='Sipariş No veya Ürün Ara...'
              className='form-input block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
            />
          </div>
        </section>

        {/* Orders Table */}
        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-[var(--divider-color)]'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Sipariş No
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Müşteri
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Tarih
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Toplam
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Kanal
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Durum
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-right text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Eylemler
                  </th>
                </tr>
              </thead>
              <tbody
                id='orders-table-body'
                className='bg-white divide-y divide-[var(--divider-color)]'
              >
                {/* Static data for now */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                    #E10023
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    Ayşe Yılmaz
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    2025-07-10
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary-color)]'>
                    ₺45.00
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    Etsy
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Gönderildi
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <Link
                      to='/order-detail/E10023'
                      className='text-[var(--primary-color)] hover:text-[var(--primary-color)]-dark'
                    >
                      Görüntüle
                    </Link>
                    <Link
                      to='/order-tracking/E10023'
                      className='ml-4 text-indigo-600 hover:text-indigo-900'
                    >
                      Takip Et
                    </Link>
                  </td>
                </tr>
                {/* Add more static rows as needed */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination Placeholder */}
        <section className='mt-8 flex justify-center'>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <Link
              to='#'
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Önceki</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
            <Link
              to='#'
              aria-current='page'
              className='z-10 bg-[var(--primary-color)] border-[var(--primary-color)] text-white relative inline-flex items-center px-4 py-2 text-sm font-medium'
            >
              1
            </Link>
            <Link
              to='#'
              className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
            >
              2
            </Link>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default Orders;
