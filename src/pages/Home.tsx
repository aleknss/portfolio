import Bio from "./Home/Bio";
import Educacion from "./Home/Educacion";
import Proyectos from "./Home/Proyectos";
import Experiencia from "./Home/Experiencia";
import Habilidades from "./Home/Habilidades";
import Contacto from "./Home/Contacto";

export default function Home() {
  return (
    <div id="home" className="w-full">
        <Bio />
        <Educacion />
        <Proyectos />
        <Experiencia />
        <Habilidades />
        <Contacto />
    </div>
  );
}
