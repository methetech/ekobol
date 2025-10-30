
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Tekrar Hoş Geldiniz!</h1>
          <p className="mt-2 text-text-secondary">İmparatorluğunuzu yönetmek için giriş yapın.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="email">E-posta adresi</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="email" name="email" required="" type="email" placeholder="siz@ornek.com" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-text-primary" htmlFor="password">Şifre</label>
                <Link className="text-sm font-medium text-accent-primary hover:underline" to="/forgot-password">Şifrenizi mi unuttunuz?</Link>
              </div>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="password" name="password" required="" type="password" />
            </div>
            <div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Hesabınız yok mu?
          <Link className="font-medium text-accent-primary hover:underline" to="/signup">Ücretsiz kaydolun</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
