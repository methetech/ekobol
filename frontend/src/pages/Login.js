import React, { useState } from 'react'; // useState'i ekledik
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18n için

const Login = () => {
  const { t } = useTranslation('login'); // 'login' namespace'ini kullanıyoruz
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    if (!email) return t('email_required'); // Çeviri anahtarı
    if (!/\S+@\S+\.\S+/.test(email)) return t('email_invalid'); // Çeviri anahtarı
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return t('password_required'); // Çeviri anahtarı
    if (password.length < 6) return t('password_min_length'); // Çeviri anahtarı
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!emailErr && !passwordErr) {
      // Giriş işlemini burada yap
      console.log('Giriş başarılı:', { email, password });
      // Başarılı giriş sonrası yönlendirme yapılabilir
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-text-primary">{t('welcome_back')}</h1> {/* Çeviri anahtarı */}
          <p className="mt-2 text-text-secondary">{t('login_subtitle')}</p> {/* Çeviri anahtarı */}
        </div>
        <div className="rounded-lg border border-void-secondary dark:border-white/10 bg-void-secondary p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-text-primary" htmlFor="email">{t('email_label')}</label> {/* Çeviri anahtarı */}
              <input
                className={`mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary ${emailError ? 'border-red-500' : ''}`} // Hata sınıfı
                id="email"
                name="email"
                type="email"
                placeholder={t('email_placeholder')} // Çeviri anahtarı
                value={email}
                onChange={handleEmailChange}
                onBlur={() => setEmailError(validateEmail(email))} // Odak dışına çıkınca doğrula
              />
              {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>} {/* Hata mesajı */}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-text-primary" htmlFor="password">{t('password_label')}</label> {/* Çeviri anahtarı */}
                <Link className="text-sm font-medium text-accent-primary hover:underline" to="/forgot-password">{t('forgot_password')}</Link> {/* Çeviri anahtarı */}
              </div>
              <input
                className={`mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary ${passwordError ? 'border-red-500' : ''}`} // Hata sınıfı
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => setPasswordError(validatePassword(password))} // Odak dışına çıkınca doğrula
              />
              {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>} {/* Hata mesajı */}
            </div>
            <div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent-primary text-void-primary text-base font-bold leading-normal tracking-wide shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                {t('login_button')} {/* Çeviri anahtarı */}
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          {t('no_account_question')}
          <Link className="font-medium text-accent-primary hover:underline" to="/signup">{t('signup_link')}</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
