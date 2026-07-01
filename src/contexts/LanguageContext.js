import React, {useEffect, useMemo} from "react";
import {getPortfolio, getUi} from "../i18n";
import {useLocalStorage} from "../hooks/useLocalStorage";

const LanguageContext = React.createContext();

export const LanguageProvider = ({children}) => {
  const browserLang =
    typeof navigator !== "undefined" &&
    navigator.language &&
    navigator.language.toLowerCase().startsWith("fr")
      ? "fr"
      : "en";
  const [language, setLanguage] = useLocalStorage("portfolioLanguage", browserLang);

  const portfolio = useMemo(() => getPortfolio(language), [language]);
  const ui = useMemo(() => getUi(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      portfolio,
      ui
    }),
    [language, setLanguage, portfolio, ui]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContext;
