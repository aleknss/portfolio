import {
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
  FaPeopleCarry,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SecondaryButton } from "../components/ui/Button";
import { GiPineTree } from "react-icons/gi";
import Wrapper from "./Wrapper";

import { useLanguage } from "../contexts/LanguageContext";

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

  const { language } = useLanguage();

  return (
    <div className="sticky top-0 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-xl w-full h-16 shadow-black/10 shadow-lg z-10">
      <Wrapper>
        <div className="h-full flex justify-between items-center gap-12">
          <a
            href="/portfolio/"
            className="flex gap-2 items-center font-semibold font-serif text-xl text-lime-700 dark:text-lime-500"
          >
            <GiPineTree size={24} /> Alek{" "}
            <span className="hidden sm:block">Suso</span>
          </a>
          <div className="flex items-center justify-start gap-1">
            <SecondaryButton
              onClick={() => scrollTo("#bio")}
              label="Bio"
              icon={<FaHome size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#experience")}
              label={language === "es" ? "Experiencia" : "Experience"}
              icon={<FaAward size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#proyects")}
              label={language === "es" ? "Proyectos" : "Projects"}
              icon={<AiOutlineFundProjectionScreen size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#attendee")}
              label={language === "es" ? "Participaciones" : "Attendee"}
              icon={<FaPeopleCarry size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#education")}
              label={language === "es" ? "Datos Académicos" : "Education"}
              icon={<FaGraduationCap size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#skills")}
              label={language === "es" ? "Habilidades" : "Skills"}
              icon={<FaBrain size={16} />}
              header={true}
            />
            <SecondaryButton
              onClick={() => scrollTo("#contact")}
              label={language === "es" ? "Contacto" : "Contact"}
              icon={<FaPaperPlane size={16} />}
              header={true}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
