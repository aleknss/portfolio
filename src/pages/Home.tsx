import Bio from "./Home/Bio";
import Educacion from "./Home/Educacion";
import Proyectos from "./Home/Proyectos";
import Experiencia from "./Home/Experiencia";
import Habilidades from "./Home/Habilidades";
import Contacto from "./Home/Contacto";
import ThemeSwitch from "../components/ThemeSwitch";
import Participaciones from "./Home/Participaciones";

export default function Home() {
  return (
    <div id="home" className="w-full">
      <ThemeSwitch />
      <Bio />
      <Experiencia />
      <Proyectos />
      <Participaciones />
      <Educacion />
      <Habilidades />
      <Contacto />
    </div>
  );
}
