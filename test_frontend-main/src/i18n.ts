import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import EN from "./locales/en.json";
import ES from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        agreement: EN.agreement,
        form: EN.form,
        confirmation: EN.confirmation,
        navigation: EN.navigation,
      },
      es: {
        agreement: ES.agreement,
        form: ES.form,
        confirmation: ES.confirmation,
        navigation: ES.navigation,
      },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });
