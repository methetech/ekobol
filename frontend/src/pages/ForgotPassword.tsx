import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ForgotPassword = () => {
  const { t } = useLanguage();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-gray-50 text-[var(--text-primary-color)]'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <Link
            className='flex items-center justify-center gap-3 text-3xl font-bold tracking-tight'
            to='/'
          >
            <img src='/ekobol.ico' alt='Ekobol Logo' className='h-16 w-16' />
            <span>Ekobol</span>
          </Link>
          <h1 className='mt-6 text-2xl font-bold tracking-tight md:text-3xl'>
            {t('forgotPasswordTitle')}
          </h1>
          <p className='mt-2 text-[var(--text-secondary-color)]'>
            {t('forgotPasswordSubtitle')}
          </p>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <form className='space-y-6'>
            <div>
              <label className='text-sm font-medium' htmlFor='email'>
                {t('emailAddressLabel')}
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='email'
                name='email'
                required
                type='email'
                placeholder='you@example.com'
              />
            </div>
            <div>
              <button
                className='flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold'
                type='submit'
              >
                {t('sendResetLinkButton')}
              </button>
            </div>
          </form>
        </div>
        <p className='mt-8 text-center text-sm text-[var(--text-secondary-color)]'>
          {t('rememberedPasswordPrompt')}
          <Link
            className='font-medium text-[var(--primary-color)] hover:underline'
            to='/login'
          >
            {' '}
            {t('logInHereLink')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
