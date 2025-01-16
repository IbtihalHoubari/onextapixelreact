import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'src/locales/{{lng}}.json',
    },
    detection: {
      order: ['cookie', 'navigator', 'querystring', 'localStorage'],
      caches: ['cookie'],
    },
  });
const savedLanguage = Cookies.get('i18next') || 'en';
i18n.changeLanguage(savedLanguage);
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';

export default i18n;
