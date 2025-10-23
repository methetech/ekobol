import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Shares {
  seller: number;
  ekobol: number;
}

interface Tasks {
  production: string;
  shipping: string;
  brandStrategy: string;
  financialReporting: string;
  seo: string;
  paidAds: string;
  socialMedia: string;
  listingOptimization: string;
  customerService: string;
  inventoryTracking: string;
}

const DynamicPlan = () => {
  const { t } = useLanguage();
  const [shares, setShares] = useState<Shares>({ seller: 50, ekobol: 50 });
  const [tasks, setTasks] = useState<Tasks>({
    production: 'seller',
    shipping: 'seller',
    brandStrategy: 'seller',
    financialReporting: 'seller',
    seo: 'seller',
    paidAds: 'seller',
    socialMedia: 'seller',
    listingOptimization: 'seller',
    customerService: 'seller',
    inventoryTracking: 'seller',
  });
  const [infoText, setInfoText] = useState('');

  const taskWeights: { [key: string]: number } = {
    shipping: 15,
    brandStrategy: 5,
    financialReporting: 3,
    seo: 4,
    paidAds: 6,
    socialMedia: 5,
    listingOptimization: 7,
    customerService: 8,
    inventoryTracking: 6,
  };

  useEffect(() => {
    let ekobolTotalWeight = 0;
    let totalWeight = 0;

    if (tasks.production === 'ekobol') {
      setShares({ seller: 25, ekobol: 75 });
      setInfoText(
        'Üretim Ekobol tarafından yapıldığında, Yatırımcı Ortak modeli uygulanır.'
      );
      return;
    }

    Object.keys(taskWeights).forEach((key) => {
      totalWeight += taskWeights[key];
      if (tasks[key as keyof Tasks] === 'ekobol') {
        ekobolTotalWeight += taskWeights[key];
      }
    });

    let sellerPercentage = 50;
    let ekobolPercentage = 50;

    const ekobolShareOfWorkload =
      totalWeight > 0 ? ekobolTotalWeight / totalWeight : 0;
    const shiftAmount = (ekobolShareOfWorkload - 0.5) * 30;

    sellerPercentage -= shiftAmount;
    ekobolPercentage += shiftAmount;

    if (tasks.shipping === 'ekobol') {
      ekobolPercentage = Math.max(60, ekobolPercentage);
      sellerPercentage = 100 - ekobolPercentage;
      setInfoText(
        'Lojistik Ekobol tarafından yönetildiğinde, minimum %60 pay uygulanır.'
      );
    } else {
      setInfoText('');
    }

    setShares({
      seller: Math.round(sellerPercentage),
      ekobol: Math.round(ekobolPercentage),
    });
  }, [tasks]);

  const handleTaskChange = (task: keyof Tasks, owner: string) => {
    setTasks((prev) => ({ ...prev, [task]: owner }));
  };

  const isProductionByEkobol = tasks.production === 'ekobol';

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-[var(--text-primary-color)] dark:text-white'>
            {t('dynamicPlanTitle')}
          </h1>
          <p className='text-lg md:text-xl text-[var(--text-secondary-color)] max-w-3xl mx-auto'>
            {t('dynamicPlanSubtitle')}
          </p>
        </div>

        <div className='sticky top-4 z-20 mt-16 bg-[var(--background-secondary-color)] dark:bg-black/50 backdrop-blur-lg border border-[var(--divider-color)] dark:border-white/10 rounded-xl shadow-2xl p-6'>
          <h2 className='text-center text-2xl font-bold text-[var(--text-primary-color)] mb-4'>
            {t('profitShareTitle')}
          </h2>
          <div className='flex justify-center items-center gap-8'>
            <div className='text-center'>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('yourShareLabel')}
              </p>
              <p className='text-5xl font-bold text-white transition-colors duration-300'>
                {shares.seller}%
              </p>
            </div>
            <div className='text-5xl font-bold text-[var(--text-secondary-color)]'>
              /
            </div>
            <div className='text-center'>
              <p className='text-lg font-medium text-[var(--text-secondary-color)]'>
                {t('ekobolShareLabel')}
              </p>
              <p className='text-5xl font-bold text-[var(--primary-color)] transition-colors duration-300'>
                {shares.ekobol}%
              </p>
            </div>
          </div>
          <p className='text-center text-sm font-semibold text-yellow-500 mt-4 h-5 transition-opacity duration-300'>
            {infoText}
          </p>
        </div>

        <div className='mt-12 space-y-12'>
          <div>
            <h2 className='text-2xl font-bold text-purple-500 border-b-2 border-purple-500 pb-2 mb-4'>
              {t('layer1Title')}
            </h2>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('layer1Desc')}
            </p>
            <div className='workload-item p-4 bg-white dark:bg-white/5 rounded-lg border border-[var(--divider-color)] dark:border-white/10'>
              <p className='font-semibold mb-2'>{t('task_production')}</p>
              <div className='toggle-switch'>
                <button
                  onClick={() => handleTaskChange('production', 'seller')}
                  className={`toggle-option ${tasks.production === 'seller' ? 'active' : ''}`}
                >
                  {t('seller')}
                </button>
                <button
                  onClick={() => handleTaskChange('production', 'ekobol')}
                  className={`toggle-option ${tasks.production === 'ekobol' ? 'active' : ''}`}
                >
                  {t('ekobol')}
                </button>
              </div>
            </div>
          </div>

          <div className={isProductionByEkobol ? 'task-disabled' : ''}>
            <h2 className='text-2xl font-bold text-red-500 border-b-2 border-red-500 pb-2 mb-4'>
              {t('layer2Title')}
            </h2>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('layer2Desc')}
            </p>
            <div className='workload-item p-4 bg-white dark:bg-white/5 rounded-lg border border-[var(--divider-color)] dark:border-white/10'>
              <p className='font-semibold mb-2'>{t('task_shipping')}</p>
              <div className='toggle-switch'>
                <button
                  onClick={() => handleTaskChange('shipping', 'seller')}
                  className={`toggle-option ${tasks.shipping === 'seller' ? 'active' : ''}`}
                >
                  {t('seller')}
                </button>
                <button
                  onClick={() => handleTaskChange('shipping', 'ekobol')}
                  className={`toggle-option ${tasks.shipping === 'ekobol' ? 'active' : ''}`}
                >
                  {t('ekobol')}
                </button>
              </div>
            </div>
          </div>

          <div className={isProductionByEkobol ? 'task-disabled' : ''}>
            <h2 className='text-2xl font-bold text-[var(--text-primary-color)] border-b-2 border-[var(--primary-color)] pb-2 mb-4'>
              {t('layer3Title')}
            </h2>
            <p className='text-[var(--text-secondary-color)] mb-6'>
              {t('layer3Desc')}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='space-y-4'>
                <h3 className='font-semibold text-lg'>
                  {t('strategyManagementHeader')}
                </h3>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>{t('task_brandStrategy')}</p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() =>
                        handleTaskChange('brandStrategy', 'seller')
                      }
                      className={`toggle-option ${tasks.brandStrategy === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() =>
                        handleTaskChange('brandStrategy', 'ekobol')
                      }
                      className={`toggle-option ${tasks.brandStrategy === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>
                    {t('task_financialReporting')}
                  </p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() =>
                        handleTaskChange('financialReporting', 'seller')
                      }
                      className={`toggle-option ${tasks.financialReporting === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() =>
                        handleTaskChange('financialReporting', 'ekobol')
                      }
                      className={`toggle-option ${tasks.financialReporting === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <h3 className='font-semibold text-lg'>
                  {t('marketingHeader')}
                </h3>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>{t('task_seo')}</p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() => handleTaskChange('seo', 'seller')}
                      className={`toggle-option ${tasks.seo === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() => handleTaskChange('seo', 'ekobol')}
                      className={`toggle-option ${tasks.seo === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>{t('task_paidAds')}</p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() => handleTaskChange('paidAds', 'seller')}
                      className={`toggle-option ${tasks.paidAds === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() => handleTaskChange('paidAds', 'ekobol')}
                      className={`toggle-option ${tasks.paidAds === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>{t('task_socialMedia')}</p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() => handleTaskChange('socialMedia', 'seller')}
                      className={`toggle-option ${tasks.socialMedia === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() => handleTaskChange('socialMedia', 'ekobol')}
                      className={`toggle-option ${tasks.socialMedia === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <h3 className='font-semibold text-lg'>
                  {t('operationsHeader')}
                </h3>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>
                    {t('task_listingOptimization')}
                  </p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() =>
                        handleTaskChange('listingOptimization', 'seller')
                      }
                      className={`toggle-option ${tasks.listingOptimization === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() =>
                        handleTaskChange('listingOptimization', 'ekobol')
                      }
                      className={`toggle-option ${tasks.listingOptimization === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>
                    {t('task_customerService')}
                  </p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() =>
                        handleTaskChange('customerService', 'seller')
                      }
                      className={`toggle-option ${tasks.customerService === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() =>
                        handleTaskChange('customerService', 'ekobol')
                      }
                      className={`toggle-option ${tasks.customerService === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
                <div className='workload-item'>
                  <p className='font-medium mb-2'>
                    {t('task_inventoryTracking')}
                  </p>
                  <div className='toggle-switch'>
                    <button
                      onClick={() =>
                        handleTaskChange('inventoryTracking', 'seller')
                      }
                      className={`toggle-option ${tasks.inventoryTracking === 'seller' ? 'active' : ''}`}
                    >
                      {t('seller')}
                    </button>
                    <button
                      onClick={() =>
                        handleTaskChange('inventoryTracking', 'ekobol')
                      }
                      className={`toggle-option ${tasks.inventoryTracking === 'ekobol' ? 'active' : ''}`}
                    >
                      {t('ekobol')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-24 max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight text-[var(--text-primary-color)]'>
              {t('proposalTitle')}
            </h2>
            <p className='text-lg text-[var(--text-secondary-color)] mt-2'>
              {t('proposalDesc')}
            </p>
          </div>
          <form className='p-8 bg-[var(--background-secondary-color)] dark:bg-white/5 border border-[var(--divider-color)] dark:border-white/10 rounded-lg space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='text-sm font-medium' htmlFor='company-name'>
                  {t('form_companyName')}
                </label>
                <input
                  className='mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 dark:bg-black/20 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                  id='company-name'
                  type='text'
                  required
                />
              </div>
              <div>
                <label className='text-sm font-medium' htmlFor='contact-person'>
                  {t('form_contactPerson')}
                </label>
                <input
                  className='mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 dark:bg-black/20 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                  id='contact-person'
                  type='text'
                  required
                />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='contact-email'>
                {t('form_contactEmail')}
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 dark:bg-black/20 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='contact-email'
                type='email'
                required
              />
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='product-category'>
                {t('form_productCategory')}
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 dark:bg-black/20 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='product-category'
                type='text'
                placeholder={t('form_productCategoryPlaceholder')}
                required
              />
            </div>
            <div>
              <button
                className='w-full flex justify-center py-4 px-6 rounded-full bg-[var(--primary-color)] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                type='submit'
              >
                {t('form_submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DynamicPlan;
