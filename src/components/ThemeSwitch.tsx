import { useTheme } from "../contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, toggleTheme, setTheme } = useTheme();
  return (
      <button
        onClick={toggleTheme}
        className="text-xl p-3 rounded bg-lime-700 text-white dark:text-neutral-800 fixed bottom-8 right-4 sm:right-6 md:right-12 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 transition-colors duration-300 ease-in-out"
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
  );
}
