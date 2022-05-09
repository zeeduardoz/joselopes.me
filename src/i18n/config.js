import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';

i18next.use(detector).init({
  fallbackLng: 'pt',
  resources: {
    pt: {
      translations: require('../locales/pt.json'),
    },
    en: {
      translations: require('../locales/en.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['pt', 'en'];

export default i18next;
