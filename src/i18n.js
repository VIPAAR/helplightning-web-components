import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationUS from './locales/en_US/translation.json';

// the translations
const resources = {
  en_US: {
    translation: translationUS,
  },
};

const variationFallbackLng = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
  ja: 'ja_JP',
  ko: 'ko_KR',
  pt: 'pt_BR',
  zh: 'zh_CN',
};

const getVariationFallbackLng = (lng) => {
  const baseLng = lng.split('_')[0];
  return variationFallbackLng[baseLng];
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en_US',
    keySeparator: false, // we do not use keys in form messages.welcome
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // special options for react-i18next
    // learn more: https://react.i18next.com/components/i18next-instance
    react: {
      wait: true,
    },
  });

const loadLanguageFile = (resource, language) => {
  i18n.addResourceBundle(language, 'translation', resource, true, true);
  i18n.changeLanguage(language);
};

let language = window.navigator.language.replace('-', '_');
if (language !== 'en_US') {
  import(`./locales/${language}/translation.json`)
    .then((resource) => loadLanguageFile(resource, language))
    .catch(() => {
      language = getVariationFallbackLng(language);
      import(`./locales/${language}/translation.json`)
        .then((resource) => loadLanguageFile(resource, language));
    });
}

if (i18n.language !== language) {
  i18n.changeLanguage(language);
}

export default i18n;
