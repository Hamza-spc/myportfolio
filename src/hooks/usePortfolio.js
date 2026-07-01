import {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";

export function usePortfolio() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a LanguageProvider");
  }
  return context;
}
