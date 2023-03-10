import i18n, { Callback } from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Languages 
import translationEN from "../public/locales/en/translation.json";
import translationPTBR from "../public/locales/pt/translation.json";

const availableLanguages = ["pt", "en"];

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
    lng: "pt",
    fallbackLng: "pt",
    // defaultNS: "translations",
    // keySeparator: false,
    detection: { checkWhitelist: true },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      useSuspense: true,
      wait: true
    },
  } as unknown as Callback);

export default i18n;
