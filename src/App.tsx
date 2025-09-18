import Header from "./layouts/Header";
import Home from "./pages/Home";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  dayjs.locale("es");

  function getBrowserTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDark ? "dark" : "light";
  }

  const [theme, setTheme] = useState(getBrowserTheme());

  return (
    <>
      <ThemeProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
