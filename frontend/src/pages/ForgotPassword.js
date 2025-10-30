
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-text-primary" to="/">
            <svg className="h-10 w-10 text-accent-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path></svg>
            <span>Ekobol</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">Şifrenizi mi Unuttunuz?</h1>
          <p className="mt-2 text-text-secondary">Sorun değil. E-posta adresinizi girin, size sıfırlama bağlantısı gönderelim.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="email">E-posta adresi</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="email" name="email" required="" type="email" placeholder="siz@ornek.com" />
            </div>
            <div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                Sıfırlama Bağlantısı Gönder
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Şifrenizi hatırladınız mı?
          <Link className="font-medium text-accent-primary hover:underline" to="/login">Buradan giriş yapın</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
