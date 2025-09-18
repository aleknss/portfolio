import Header from "./layouts/Header";
import Home from "./pages/Home";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  dayjs.locale("es");

  return (
    <div className="bg-white dark:bg-neutral-800">
      <ThemeProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
