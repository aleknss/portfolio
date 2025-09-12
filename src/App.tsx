import Header from "./layouts/Header";
import Home from "./pages/Home";
import dayjs from 'dayjs';
import 'dayjs/locale/es';


function App() {
  dayjs.locale('es');

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
