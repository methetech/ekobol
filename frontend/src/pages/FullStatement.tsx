import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FullStatement = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
            {t('fullStatementTitle')}
          </h1>
          <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
            {t('fullStatementSubtitle')}
          </p>
        </div>

        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center'>
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <div>
              <label htmlFor='date-range-filter' className='sr-only'>
                {t('dateRangeLabel')}
              </label>
              <select
                id='date-range-filter'
                className='form-select block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
              >
                <option value='last-30-days'>{t('last30Days')}</option>
                <option value='this-quarter'>{t('thisQuarter')}</option>
                <option value='last-quarter'>{t('lastQuarter')}</option>
                <option value='this-year'>{t('thisYear')}</option>
                <option value='last-year'>{t('lastYear')}</option>
                <option value='all-time'>{t('allTime')}</option>
              </select>
            </div>
          </div>
          <div className='w-full sm:w-auto flex justify-end'>
            <button className='inline-flex items-center justify-center rounded-full h-10 px-6 bg-[var(--primary-color)] text-white text-base font-bold shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <svg
                className='h-5 w-5 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
              <span>{t('downloadReportButton')}</span>
            </button>
          </div>
        </section>

        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm overflow-hidden mb-8'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-[var(--divider-color)]'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('transactionIdLabel')}
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('dateLabel')}
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('descriptionLabel')}
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('typeLabel')}
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-right text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('amountLabel')}
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-right text-xs font-medium text-[var(--text-secondary-color)] uppercase tracking-wider'
                  >
                    {t('balanceLabel')}
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                    TRX00105
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    14.07.2025
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                    Etsy Satış Geliri (Sipariş #E10025)
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      {t('incomeLabel')}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600'>
                    +₺1.500,00
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm text-[var(--text-primary-color)]'>
                    ₺18.000,00
                  </td>
                </tr>
                <tr className='hover:bg-gray-50 transition-colors'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                    TRX00104
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                    13.07.2025
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                    Trendyol Komisyonu (Sipariş #T20060)
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                      {t('expenseLabel')}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500'>
                    -₺250,00
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm text-[var(--text-primary-color)]'>
                    ₺16.500,00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='mt-8 flex justify-center'>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
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
            </a>
            <a
              href='#'
              aria-current='page'
              className='z-10 bg-emerald-50 border-emerald-500 text-emerald-600 relative inline-flex items-center px-4 py-2 text-sm font-medium'
            >
              1
            </a>
            <a
              href='#'
              className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
            >
              2
            </a>
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default FullStatement;
