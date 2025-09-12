import Header from "./layouts/Header";
import Home from "./pages/Home";
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  dayjs.locale('es');

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
