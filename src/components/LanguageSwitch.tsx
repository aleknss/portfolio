import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { EnglishSVG } from "../components/svgs/EnglishSVG";
import { SpainSVG } from "../components/svgs/SpainSVG";
import { motion, AnimatePresence } from "motion/react";

const LanguageSwitch: React.FC = () => {
  const { language, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    switchLanguage(language === "es" ? "en" : "es");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="text-xl p-3 rounded bg-lime-700 text-white dark:text-neutral-800 fixed bottom-24 right-4 sm:right-6 md:right-12 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 transition-colors duration-300 ease-in-out flex items-center justify-center z-50 overflow-hidden"
      aria-label={`Switch to ${language === "es" ? "English" : "Spanish"}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {language === "es" ? <EnglishSVG /> : <SpainSVG />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageSwitch;
