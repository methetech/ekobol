import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-md text-center'>
        <div className='mb-8'>
          <svg
            className='mx-auto h-24 w-24 text-[var(--primary-color)]'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='1.5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <h1 className='mt-6 text-3xl font-bold tracking-tight md:text-4xl'>
            Başarılı!
          </h1>
          <p className='mt-2 text-[var(--text-secondary-color)]'>
            İşleminiz başarıyla tamamlandı.
          </p>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <p className='text-lg text-[var(--text-primary-color)] mb-4'>
            Şimdi kontrol panelinize yönlendiriliyorsunuz...
          </p>
          <p className='text-sm text-[var(--text-secondary-color)]'>
            Yönlendirilmezseniz, lütfen aşağıdaki düğmeyi tıklayın.
          </p>
          <Link
            to='/dashboard'
            className='mt-6 inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold'
          >
            Kontrol Paneline Git
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginSuccess;
