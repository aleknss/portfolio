import { PrimaryButton, SecondaryButton } from "../../components/ui/Button";
import { useLanguage } from "../../contexts/LanguageContext";
import Wrapper from "../../layouts/Wrapper";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";


export default function Bio() {
  const { portfolioData, language } = useLanguage();

  return (
    <div id="bio" className="w-full">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 2xl:w-2/3 pr-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                </span>
                {language === "es" ? "Disponible para trabajo" : "Available for work"}
             </div>
            <h1 className="font-serif font-semibold text-4xl text-lime-900 dark:text-lime-400">
              {language === "es"
                ? `¡Encantado! Soy ${portfolioData.name}`
                : `Nice to meet you! I'm ${portfolioData.name}`}
            </h1>
            <h2 className="font-serif font-semibold text-2xl text-lime-600 dark:text-lime-600">
                Fullstack Developer Junior especializado en Next.js
            </h2>
            </div>
            <div>
            <p className="w-full">{portfolioData.bio}</p>
          <div className="flex mt-4 gap-4">
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">
            <PrimaryButton
              label={language === "es" ? "Currículum Vitae" : "Curriculum Vitae"} icon={<FaFileDownload />}
            />
            </a>
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
          </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded border-4 border-lime-700 dark:border-lime-500 overflow-hidden hover:shadow-xl shadow-lime-800/30 dark:shadow-lime-200/5 transition duration-300 ease-in-out">
            <img src="./alek.jpg" alt="Foto personal" className="w-full h-full object-cover" />
          </div>
          </div>
      </Wrapper>
    </div>
  );
}
