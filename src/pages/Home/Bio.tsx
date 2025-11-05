import { PrimaryButton, SecondaryButton } from "../../components/ui/Button";
import { useLanguage } from "../../contexts/LanguageContext";
import Wrapper from "../../layouts/Wrapper";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Bio() {
  const { portfolioData, language } = useLanguage();

  return (
    <div id="bio" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-serif font-semibold text-4xl text-lime-900 dark:text-lime-400">
            {language === "es"
              ? `¡Encantado! Soy ${portfolioData.name}`
              : `Nice to meet you! I'm ${portfolioData.name}`}
          </h1>
          <p className="w-full 2xl:w-2/3">{portfolioData.bio}</p>
        </div>
        <div className="flex mt-4 gap-4">
          <PrimaryButton
            href="#contact"
            label={language === "es" ? "Contacta conmigo" : "Contact me"}
          />
          <SecondaryButton
            href={portfolioData.contacts?.github}
            label=""
            icon={<FaGithub className="w-5 h-5" />}
          />
          <SecondaryButton
            href={portfolioData.contacts?.linkedin}
            label=""
            icon={<FaLinkedin className="w-5 h-5" />}
          />
        </div>
      </Wrapper>
    </div>
  );
}
