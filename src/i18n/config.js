import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';

i18next.use(detector).init({
  fallbackLng: 'pt-BR',
  resources: {
    'pt-BR': {
      translations: require('../locales/pt.json'),
    },
    'en-US': {
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

i18next.languages = ['pt-BR', 'en-US'];

export default i18next;
