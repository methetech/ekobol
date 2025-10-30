
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard'); // Assuming /dashboard is the route for dashboard.html
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <svg className="mx-auto h-24 w-24 text-system-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl text-text-primary">Başarılı!</h1>
          <p className="mt-2 text-text-secondary">İşleminiz başarıyla tamamlandı.</p>
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <p className="text-lg text-text-primary mb-4">Şimdi kontrol panelinize yönlendiriliyorsunuz...</p>
          <p className="text-sm text-text-secondary">Yönlendirilmezseniz, lütfen aşağıdaki düğmeyi tıklayın.</p>
          <Link to="/dashboard" className="mt-6 inline-flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300">
            <span className="truncate">Kontrol Paneline Git</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginSuccess;
