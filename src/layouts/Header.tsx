import {
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SecondaryButton } from "../components/Button";
import { GiPineTree } from "react-icons/gi";
import Wrapper from "./Wrapper";

export default function Header() {
  const scrollTo = (elementId: string) => {
    const targetElement = document.querySelector(elementId);
    if (!targetElement) return;
    const headerHeight = 64;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 bg-white/50 backdrop-blur-xl w-full h-16 shadow-forest-500/40 shadow-lg">
      <Wrapper>
        <div className="h-full flex justify-between items-center gap-12">
          <a
            href="/"
            className="flex gap-2 items-center font-semibold font-serif text-xl text-forest-600"
          >
            <GiPineTree size={24} /> Alek Suso
          </a>
          <div className="flex items-center justify-start gap-1 text-forest-600">
            <SecondaryButton
              onClick={() => scrollTo("#bio")}
              label="Bio"
              icon={<FaHome size={16} />}
            />
            <SecondaryButton
              onClick={() => scrollTo("#datosacademicos")}
              label="Datos Académicos"
              icon={<FaGraduationCap size={16} />}
            />
            <SecondaryButton
              onClick={() => scrollTo("#proyectos")}
              label="Proyectos"
              icon={<AiOutlineFundProjectionScreen size={16} />}
            />
            <SecondaryButton
              onClick={() => scrollTo("#experiencia")}
              label="Experiencia"
              icon={<FaAward size={16} />}
            />

            <SecondaryButton
              onClick={() => scrollTo("#habilidades")}
              label="Habilidades"
              icon={<FaBrain size={16} />}
            />
            <SecondaryButton
              onClick={() => scrollTo("#contactos")}
              label="Contacto"
              icon={<FaPaperPlane size={16} />}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
