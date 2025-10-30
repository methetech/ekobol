
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Hesabınızı Oluşturun</h1>
          <p className="mt-2 text-text-secondary">Bize katılın ve e-ticaret geleceğinizi inşa etmeye başlayın.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="fullname">Tam Adınız</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="fullname" name="fullname" required="" type="text" placeholder="örn. Ayşe Yılmaz" />
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="email">E-posta adresi</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="email" name="email" required="" type="email" placeholder="siz@ornek.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="password">Şifre</label>
              <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="password" name="password" required="" type="password" placeholder="Güçlü bir şifre oluşturun" />
            </div>
            <div className="pt-2">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                Hesap Oluştur
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Zaten bir hesabınız var mı?
          <Link className="font-medium text-accent-primary hover:underline" to="/login">Giriş yapın</Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
