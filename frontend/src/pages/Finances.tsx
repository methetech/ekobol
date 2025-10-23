import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Finances = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold leading-tight tracking-tight'>
            {t('financesTitle')}
          </h1>
          <p className='text-[var(--text-secondary-color)] text-base font-normal leading-normal mt-1'>
            {t('financesSubtitle')}
          </p>
        </div>

        <section className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
              <div className='flex justify-between items-start'>
                <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                  {t('grossRevenueLabel')}
                </p>
                <div className='bg-emerald-100 p-2 rounded-full'>
                  <svg
                    className='h-6 w-6 text-emerald-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
              </div>
              <p className='text-4xl font-bold text-[var(--primary-color)] mt-2'>
                ₺89.500
              </p>
              <div className='flex items-center text-sm text-green-600 mt-1'>
                <svg
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
                <span>+12% önceki döneme göre</span>
              </div>
            </div>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
              <div className='flex justify-between items-start'>
                <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                  {t('totalExpensesLabel')}
                </p>
                <div className='bg-red-100 p-2 rounded-full'>
                  <svg
                    className='h-6 w-6 text-red-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m16.5 0h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375'
                    />
                  </svg>
                </div>
              </div>
              <p className='text-4xl font-bold text-red-500 mt-2'>₺53.750</p>
              <div className='flex items-center text-sm text-red-500 mt-1'>
                <svg
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
                <span>+5% önceki döneme göre</span>
              </div>
            </div>
            <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
              <div className='flex justify-between items-start'>
                <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                  {t('netProfitLabel')}
                </p>
                <div className='bg-green-100 p-2 rounded-full'>
                  <svg
                    className='h-6 w-6 text-green-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
                    />
                  </svg>
                </div>
              </div>
              <p className='text-4xl font-bold text-green-600 mt-2'>₺35.750</p>
              <div className='flex items-center text-sm text-green-600 mt-1'>
                <svg
                  className='h-4 w-4 mr-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
                <span>+15% önceki döneme göre</span>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-6'>
            {t('recentTransactionsLabel')}
          </h2>
          <div className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-[var(--divider-color)]'>
                <thead className='bg-gray-50'>
                  <tr>
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
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-[var(--divider-color)]'>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      14.07.2025
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      Etsy Satış Geliri
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        {t('incomeLabel')}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600'>
                      +₺15.000,00
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      13.07.2025
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      Trendyol Komisyonu
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                        {t('expenseLabel')}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500'>
                      -₺2.500,00
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      12.07.2025
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      Web Sitesi Sipariş #W40078
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        {t('incomeLabel')}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600'>
                      +₺350,00
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      10.07.2025
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      Pazarlama Kampanyası Harcaması
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                        {t('expenseLabel')}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500'>
                      -₺500,00
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary-color)]'>
                      05.07.2025
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary-color)]'>
                      Ekobol Partner Plan Ücreti
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>
                        {t('expenseLabel')}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-500'>
                      -₺5.000,00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='mt-6 text-center'>
            <Link
              to='/full-statement'
              className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline'
            >
              {t('viewFullStatementButton')}
            </Link>
          </div>
        </section>

        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6 mb-12 hover:shadow-lg transition-shadow duration-300'>
          <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
            {t('subscriptionBillingTitle')}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('currentPlanLabel')}
              </p>
              <p className='text-xl font-bold text-[var(--text-primary-color)] mt-1'>
                Partner Plan
              </p>
              <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
                50/50 Kâr Paylaşımı
              </p>
              <Link
                to='/pricing'
                className='inline-block mt-4 text-[var(--primary-color)] font-bold hover:underline'
              >
                {t('changePlanButton')}
              </Link>
            </div>
            <div>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('nextBillingDateLabel')}
              </p>
              <p className='text-xl font-bold text-[var(--text-primary-color)] mt-1'>
                1 Ağustos 2025
              </p>
              <p className='text-sm text-[var(--text-secondary-color)] mt-1'>
                Tahmini Ödeme: ~₺5.000,00
              </p>
              <Link
                to='/update-payment'
                className='inline-block mt-4 text-[var(--primary-color)] font-bold hover:underline'
              >
                {t('updatePaymentButton')}
              </Link>
            </div>
          </div>
        </section>

        <section className='bg-white rounded-xl border border-[var(--divider-color)] shadow-sm p-6 hover:shadow-lg transition-shadow duration-300'>
          <h2 className='text-[var(--text-primary-color)] text-2xl font-bold leading-tight tracking-tight mb-4'>
            {t('aiFinancialInsightsTitle')}
          </h2>
          <p className='text-base text-[var(--text-secondary-color)] mb-6'>
            {t('aiFinancialInsightsDesc')}
          </p>
          <div className='space-y-4'>
            <div className='flex items-start gap-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg'>
              <svg
                className='h-6 w-6 text-yellow-500 flex-shrink-0 mt-1'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                />
              </svg>
              <p className='text-base text-[var(--text-secondary-color)]'>
                Pazarlama harcamanız, satış hacminize göre ortalamadan %2 daha
                yüksek. Kampanya verimliliğini gözden geçirin.
              </p>
            </div>
            <div className='flex items-start gap-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg'>
              <svg
                className='h-6 w-6 text-blue-500 flex-shrink-0 mt-1'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-base text-[var(--text-secondary-color)]'>
                Daha düşük kargo ücretleri için pazarlık yapmayı düşünün; mevcut
                oranlar net kârınızı %1.5 oranında etkiliyor.
              </p>
            </div>
            <div className='flex items-start gap-4 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg'>
              <svg
                className='h-6 w-6 text-green-500 flex-shrink-0 mt-1'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m16.5 0h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375'
                />
              </svg>
              <p className='text-base text-[var(--text-secondary-color)]'>
                Ofis malzemeleriyle ilgili bu çeyrekte toplam{' '}
                <strong>₺12.500,00</strong> tutarında potansiyel vergi indirimi
                tespit edildi.
              </p>
            </div>
          </div>
          <div className='mt-6 text-center'>
            <Link
              to='/generate-report'
              className='inline-flex items-center justify-center text-[var(--primary-color)] font-bold hover:underline'
            >
              {t('generateReportButton')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Finances;
