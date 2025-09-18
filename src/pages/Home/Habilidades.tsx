import Wrapper from "../../layouts/Wrapper";
import { FaBrain } from "react-icons/fa";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";
import SkillItem from "../../components/ui/SkillItem";

export default function Habilidades() {
  const languages = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
    },
  ];

  const frameworks = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      name: "FastAPI",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      name: "Angular",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      name: "Spring Boot",
    },
  ];

  const herramientas = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      name: "Docker",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      name: "Tailwind CSS",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
    },
  ];

  return (
    <div id="habilidades" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaBrain />
            Habilidades
          </Title>
          <Card className="flex flex-col gap-4 py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div id="col1" className="flex flex-col gap-4">
                <SecondaryTitle>Lenguajes</SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <SkillItem
                      key={index}
                      name={language.name}
                      icon={language.icon}
                    />
                  ))}
                </div>
              </div>
              <div
                id="col2"
                className="lg:border-x lg:border-lime-700 flex flex-col gap-4 px-4"
              >
                <SecondaryTitle>Frameworks</SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {frameworks.map((framework, index) => (
                    <SkillItem
                      key={index}
                      name={framework.name}
                      icon={framework.icon}
                    />
                  ))}
                </div>
              </div>
              <div id="col3" className="flex flex-col gap-4">
                <SecondaryTitle>Herramientas</SecondaryTitle>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {herramientas.map((herramienta, index) => (
                    <SkillItem
                      key={index}
                      name={herramienta.name}
                      icon={herramienta.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Wrapper>
    </div>
  );
}
