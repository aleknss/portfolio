import Wrapper from "../../layouts/Wrapper";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useLanguage } from "../../contexts/LanguageContext";
import Title from "../../components/ui/Title";
import Tonela from "../Proyectos/Tonela";

interface ProyectItem {
  name: string;
  link: string;
  logo: string;
  description: string;
  skills: string[];
}

export default function Proyectos() {
  const { portfolioData, language } = useLanguage();

  const projectData = (portfolioData.projects || []) as ProyectItem[];

  return (
    <div id="proyects" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <AiOutlineFundProjectionScreen />
            {language === "es" ? "Proyectos" : "Projects"}
          </Title>
          <div className="gap-4 grid grid-cols-1">
            <Tonela />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
