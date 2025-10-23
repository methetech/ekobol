import React from 'react';
import { Link } from 'react-router-dom';

const ProductsManage = () => {
  // Note: Filtering logic will be added later with useState
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8 flex justify-between items-center'>
          <div>
            <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
              Ürünleriniz
            </h1>
            <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
              Tüm bağlı kanallarınızdaki ürün kataloğunuzu yönetin.
            </p>
          </div>
          <Link
            to='/product-add-edit'
            className='inline-flex items-center justify-center rounded-full h-10 px-4 bg-[var(--primary-color)] text-black text-base font-bold shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <svg
              className='h-5 w-5 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            Yeni Ürün Ekle
          </Link>
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
              <option value='active'>Aktif</option>
              <option value='draft'>Taslak</option>
              <option value='oos'>Stokta Yok</option>
              <option value='archived'>Arşivlendi</option>
            </select>
          </div>
          <div className='w-full sm:w-auto'>
            <input
              type='text'
              id='product-search'
              placeholder='Ürün Adı veya SKU Ara...'
              className='form-input block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
            />
          </div>
        </section>

        {/* Products Table */}
        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-[var(--divider-color)]'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Ürün
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    SKU
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Stok
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Fiyat
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    Kanallar
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
                id='products-table-body'
                className='bg-white divide-y divide-[var(--divider-color)]'
              >
                {/* Static data for now */}
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full object-cover'
                          src='https://images.unsplash.com/photo-1576566588028-cdfd587872e0?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          alt='Organik Pamuk Tişört'
                        />
                      </div>
                      <div className='ml-4'>
                        <div className='text-sm font-medium text-[var(--text-primary-color)]'>
                          Organik Pamuk Tişört
                        </div>
                        <div className='text-sm text-[var(--text-secondary-color)]'>
                          Yumuşak ve nefes alabilen
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    OCTS001
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary-color)]'>
                    150
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary-color)]'>
                    ₺20.00
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full mr-1'>
                      Etsy
                    </span>
                    <span className='inline-block bg-red-100 text-red-800 text-xs px-2 rounded-full mr-1'>
                      Trendyol
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Aktif
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <Link
                      to='/product-add-edit/OCTS001'
                      className='text-[var(--primary-color)] hover:text-[var(--primary-color)]-dark'
                    >
                      Düzenle
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
          {/* Pagination component will be added here */}
        </section>
      </div>
    </main>
  );
};

export default ProductsManage;
