import { useTheme } from '../contexts/ThemeContext';

export function ThemeSwitch() {
  const { theme, toggleTheme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm opacity-70">Tema: {theme}</span>
      <button onClick={toggleTheme} className="px-2 py-1 rounded border">Alternar</button>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
        className="px-2 py-1 rounded border"
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}