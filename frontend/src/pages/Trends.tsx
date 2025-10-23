import React from 'react';
import { Link } from 'react-router-dom';

const Trends = () => {
  return (
    <main className='flex flex-1 justify-center py-10 bg-[var(--background-secondary-color)]'>
      <div className='layout-content-container flex flex-col w-full max-w-6xl px-4'>
        <div className='mb-8'>
          <h1 className='text-[var(--text-primary-color)] text-4xl font-bold'>
            Analitik
          </h1>
          <p className='text-[var(--text-secondary-color)] mt-1'>
            Satış ve performans eğilimlerinizi analiz edin
          </p>
        </div>
        <div className='border-b border-[var(--divider-color)] mb-8'>
          <nav className='flex gap-8 -mb-px'>
            <Link
              className='flex items-center justify-center py-4 px-1 inactive-tab'
              to='/dashboard'
            >
              <span className='text-sm font-semibold'>Genel Bakış</span>
            </Link>
            <Link
              className='flex items-center justify-center py-4 px-1 active-tab'
              to='/trends'
            >
              <span className='text-sm font-semibold'>Eğilimler</span>
            </Link>
            <Link
              className='flex items-center justify-center py-4 px-1 inactive-tab'
              to='/live-analytics'
            >
              <span className='text-sm font-semibold'>Canlı</span>
            </Link>
          </nav>
        </div>
        {/* Trends content */}
      </div>
    </main>
  );
};

export default Trends;
