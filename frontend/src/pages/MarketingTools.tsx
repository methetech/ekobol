import React from 'react';

const MarketingTools = () => {
  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold'>
            Pazarlama Araçları
          </h1>
          <p className='text-[var(--text-secondary-color)] mt-1'>
            YZ destekli pazarlama kampanyaları ve içgörülerle satışlarınızı
            artırın.
          </p>
        </div>
        {/* Marketing tools content */}
      </div>
    </main>
  );
};

export default MarketingTools;
