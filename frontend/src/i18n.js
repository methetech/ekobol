import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Yeni eklenen backend

i18n
  // Çeviri dosyalarını HTTP üzerinden yüklemek için backend'i kullan
  .use(Backend)
  // Tarayıcı dilini algılamak için eklentiyi kullan
  .use(LanguageDetector)
  // i18n örneğini react-i18next'e geçir
  .use(initReactI18next)
  // i18n'i başlat
  .init({
    // Backend yapılandırması
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Namespace'leri destekleyen yeni yol
    },
    fallbackLng: 'tr',
    debug: false,
    ns: ['common', 'home', 'solutions', 'pricing', 'resources', 'about', 'contact'], // Kullanılacak namespace'ler
    defaultNS: 'common', // Varsayılan namespace
    interpolation: {
      escapeValue: false,
    },
    // React için özel seçenekler
    react: {
      useSuspense: false, // Yükleme sırasında bekleme yapma
    }
  });

export default i18n;