import Bio from "./Home/Bio";
import Wrapper from "../layouts/Wrapper";
import Educacion from "./Home/Educacion";
import Proyectos from "./Home/Proyectos";
import Experiencia from "./Home/Experiencia";
import Habilidades from "./Home/Habilidades";

export default function Home() {
  return (
    <div id="home" className="w-full">
      <Wrapper>
        <Bio />
        <Educacion />
        <Proyectos />
        <Experiencia />
        <Habilidades />
      </Wrapper>
    </div>
  );
}
