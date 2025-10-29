import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">{t('contact.title')}</h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary">{t('contact.info.title')}</h2>
            <div className="flex items-start gap-4">
              <svg className="h-6 w-6 text-accent-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              <div>
                <h3 className="font-bold text-lg text-text-primary">{t('contact.info.general.title')}</h3>
                <p className="text-text-secondary">{t('contact.info.general.description')}</p>
                <a href="mailto:hello@ekobol.com" className="text-accent-primary font-medium hover:underline">hello@ekobol.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-6 w-6 text-accent-primary mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <div>
                <h3 className="font-bold text-lg text-text-primary">{t('contact.info.sales.title')}</h3>
                <p className="text-text-secondary">{t('contact.info.sales.description')}</p>
                <a href="mailto:partner@ekobol.com" className="text-accent-primary font-medium hover:underline">partner@ekobol.com</a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-void-secondary dark:border-white/10 p-8 bg-void-secondary dark:bg-black/20">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-text-primary" htmlFor="name">{t('contact.form.name.label')}</label>
                <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="name" type="text" required/>
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary" htmlFor="contact-email">{t('contact.form.email.label')}</label>
                <input className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="contact-email" type="email" required/>
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary" htmlFor="message">{t('contact.form.message.label')}</label>
                <textarea className="mt-1 block w-full rounded-md bg-void-primary border-void-secondary dark:border-white/20 shadow-sm focus:border-accent-primary focus:ring-accent-primary" id="message" rows="5" required></textarea>
              </div>
              <div>
                <button className="w-full flex justify-center py-3 px-4 rounded-full bg-accent-primary text-void-secondary font-bold shadow-lg hover:bg-accent-primary-dark transition-shadow duration-300" type="submit">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;