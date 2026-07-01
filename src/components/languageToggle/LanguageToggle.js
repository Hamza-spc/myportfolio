import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageToggle.scss";

const UsFlag = () => (
  <svg
    className="language-flag"
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="16" fill="#b22234" />
    <path
      d="M0 1.23h24M0 3.69h24M0 6.15h24M0 8.62h24M0 11.08h24M0 13.54h24"
      stroke="#fff"
      strokeWidth="1.23"
    />
    <rect width="9.6" height="8.62" fill="#3c3b6e" />
    <g fill="#fff">
      <circle cx="1.6" cy="1.44" r="0.45" />
      <circle cx="3.2" cy="1.44" r="0.45" />
      <circle cx="4.8" cy="1.44" r="0.45" />
      <circle cx="6.4" cy="1.44" r="0.45" />
      <circle cx="8" cy="1.44" r="0.45" />
      <circle cx="2.4" cy="2.88" r="0.45" />
      <circle cx="4" cy="2.88" r="0.45" />
      <circle cx="5.6" cy="2.88" r="0.45" />
      <circle cx="7.2" cy="2.88" r="0.45" />
      <circle cx="1.6" cy="4.32" r="0.45" />
      <circle cx="3.2" cy="4.32" r="0.45" />
      <circle cx="4.8" cy="4.32" r="0.45" />
      <circle cx="6.4" cy="4.32" r="0.45" />
      <circle cx="8" cy="4.32" r="0.45" />
      <circle cx="2.4" cy="5.76" r="0.45" />
      <circle cx="4" cy="5.76" r="0.45" />
      <circle cx="5.6" cy="5.76" r="0.45" />
      <circle cx="7.2" cy="5.76" r="0.45" />
      <circle cx="1.6" cy="7.2" r="0.45" />
      <circle cx="3.2" cy="7.2" r="0.45" />
      <circle cx="4.8" cy="7.2" r="0.45" />
      <circle cx="6.4" cy="7.2" r="0.45" />
      <circle cx="8" cy="7.2" r="0.45" />
    </g>
  </svg>
);

const FranceFlag = () => (
  <svg
    className="language-flag"
    viewBox="0 0 24 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="8" height="16" fill="#002395" />
    <rect x="8" width="8" height="16" fill="#fff" />
    <rect x="16" width="8" height="16" fill="#ed2939" />
  </svg>
);

const LanguageToggle = () => {
  const {language, setLanguage} = useContext(LanguageContext);

  return (
    <div className="language-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={
          language === "en"
            ? "language-toggle-btn language-toggle-btn-active"
            : "language-toggle-btn"
        }
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        <UsFlag />
        <span>EN</span>
      </button>
      <button
        type="button"
        className={
          language === "fr"
            ? "language-toggle-btn language-toggle-btn-active"
            : "language-toggle-btn"
        }
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        aria-label="Français"
      >
        <FranceFlag />
        <span>FR</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
