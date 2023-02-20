import i18n, { Callback } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Languages 
import translationEN from "../public/locales/en/translation.json";
import translationPTBR from "../public/locales/pt/translation.json";

const availableLanguages = ["pt-BR", "en"];
const fallbackLng = ["pt-BR"];

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPTBR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    detection: { checkWhitelist: true },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  } as unknown as Callback);

export default i18n;
