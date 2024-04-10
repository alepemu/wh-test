import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="language-switch">
      <button onClick={changeLanguage}>ES/EN</button>
    </div>
  );
}
