import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: process.env.NODE_ENV === 'production' ? '/ekobol/locales/{{lng}}/{{ns}}.json' : '/ekobol/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'tr',
    debug: false,
    supportedLngs: ['en', 'tr'],
    nonExplicitSupportedLngs: true,
    ns: ['translation', 'guide', 'subscription', 'successStories', 'blog', 'careers'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['path', 'navigator'],
      checkWhitelist: true,
    },
    whitelist: ['en', 'tr'],
  });

export default i18n;