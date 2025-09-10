import Bio from "./Home/Bio";
import Wrapper from "../layouts/Wrapper";
import Educacion from "./Home/Educacion";
import Proyectos from "./Home/Proyectos";

export default function Home() {
  return (
    <div id="home" className="w-full bg-sand-100">
      <Wrapper>
        <Bio />
        <Educacion />
        <Proyectos />
      </Wrapper>
    </div>
  );
}
