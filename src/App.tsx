import Header from "./layouts/Header";
import Home from "./pages/Home";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-white dark:bg-neutral-800">
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
