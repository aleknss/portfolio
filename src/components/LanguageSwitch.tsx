import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { EnglishSVG } from "../components/svgs/EnglishSVG";
import { SpainSVG } from "../components/svgs/SpainSVG";

const LanguageSwitch: React.FC = () => {
  const { language, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    switchLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-xl p-3 rounded bg-lime-700 text-white dark:text-neutral-800 fixed bottom-24 right-4 sm:right-6 md:right-12 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 transition-colors duration-300 ease-in-out flex items-center justify-center"
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      {language === "es" ? <EnglishSVG /> : <SpainSVG />}
    </button>
  );
};

export default LanguageSwitch;
