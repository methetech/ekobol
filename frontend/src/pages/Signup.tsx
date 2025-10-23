import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main className='flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50'>
      <div className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Hesabınızı Oluşturun
          </h1>
          <p className='mt-2 text-[var(--text-secondary-color)]'>
            Bize katılın ve e-ticaret geleceğinizi inşa etmeye başlayın.
          </p>
        </div>
        <div className='rounded-lg border border-[var(--divider-color)] bg-[var(--background-color)] p-8 shadow-sm'>
          <form className='space-y-6'>
            <div>
              <label className='text-sm font-medium' htmlFor='fullname'>
                Tam Adınız
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='fullname'
                name='fullname'
                required
                type='text'
                placeholder='örn. Ayşe Yılmaz'
              />
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='email'>
                E-posta adresi
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='email'
                name='email'
                required
                type='email'
                placeholder='siz@ornek.com'
              />
            </div>
            <div>
              <label className='text-sm font-medium' htmlFor='password'>
                Şifre
              </label>
              <input
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'
                id='password'
                name='password'
                required
                type='password'
                placeholder='Güçlü bir şifre oluşturun'
              />
            </div>
            <div className='pt-2'>
              <button
                className='flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300'
                type='submit'
              >
                Hesap Oluştur
              </button>
            </div>
          </form>
        </div>
        <p className='mt-8 text-center text-sm text-[var(--text-secondary-color)]'>
          Zaten bir hesabınız var mı?
          <Link
            className='font-medium text-[var(--primary-color)] hover:underline'
            to='/login'
          >
            Giriş yapın
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
