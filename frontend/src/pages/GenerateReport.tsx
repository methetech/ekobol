import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const GenerateReport = () => {
  const { t } = useLanguage();
  const [showCustomDate, setShowCustomDate] = useState(false);

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowCustomDate(e.target.value === 'custom');
  };

  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-2xl'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            {t('generateReportTitle')}
          </h1>
          <p className='mt-2 text-[var(--text-secondary-color)]'>
            {t('generateReportSubtitle')}
          </p>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <form className='space-y-6'>
            <div>
              <label className='text-sm font-medium' htmlFor='report-type'>
                {t('reportTypeLabel')}
              </label>
              <select
                id='report-type'
                name='report-type'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
              >
                <option value='profit-loss'>{t('profitAndLoss')}</option>
                <option value='sales-by-channel'>{t('salesByChannel')}</option>
                <option value='expense-breakdown'>
                  {t('expenseBreakdown')}
                </option>
                <option value='tax-summary'>{t('taxSummary')}</option>
                <option value='custom'>{t('customReport')}</option>
              </select>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='date-range'>
                {t('dateRangeLabel')}
              </label>
              <select
                id='date-range'
                name='date-range'
                onChange={handleDateRangeChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] bg-white text-[var(--text-primary-color)]'
              >
                <option value='last-30-days'>{t('last30Days')}</option>
                <option value='this-month'>{t('thisMonth')}</option>
                <option value='last-month'>{t('lastMonth')}</option>
                <option value='this-quarter'>{t('thisQuarter')}</option>
                <option value='last-quarter'>{t('lastQuarter')}</option>
                <option value='this-year'>{t('thisYear')}</option>
                <option value='last-year'>{t('lastYear')}</option>
                <option value='custom'>{t('customRange')}</option>
              </select>
            </div>
            {showCustomDate && (
              <div id='custom-date-range' className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium' htmlFor='start-date'>
                    {t('startDateLabel')}
                  </label>
                  <input
                    type='date'
                    id='start-date'
                    name='start-date'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                  />
                </div>
                <div>
                  <label className='text-sm font-medium' htmlFor='end-date'>
                    {t('endDateLabel')}
                  </label>
                  <input
                    type='date'
                    id='end-date'
                    name='end-date'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                  />
                </div>
              </div>
            )}
            <div className='pt-2'>
              <button
                className='flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300'
                type='submit'
              >
                {t('generateReportButton')}
              </button>
            </div>
          </form>
        </div>
        <div className='mt-8 text-center text-sm text-[var(--text-secondary-color)]'>
          {t('reportGeneratedNotice')}
        </div>
      </div>
    </main>
  );
};

export default GenerateReport;
