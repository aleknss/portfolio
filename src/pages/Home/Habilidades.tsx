import Wrapper from "../../layouts/Wrapper";
import { FaBrain } from "react-icons/fa";


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
      name: "Docker"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js"
    },
  ]

  return (
    <div id="skills" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="flex gap-2 items-center font-serif font-bold text-2xl text-lime-900">
            <FaBrain />
            Skills
          </h1>
          <div className="flex flex-col gap-4 border border-lime-700 hover:border-lime-600 card rounded py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div id="col1" className="flex flex-col gap-4">
                <h2 className="text-xl text-lime-700 font-semibold font-serif text-center">
                  Lenguajes
                </h2>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center gap-4 hover:bg-lime-100 rounded p-2 cursor-pointer">
                      <img
                        src={language.icon}
                        alt={language.name}
                        className="w-12"
                      />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div id="col2" className="lg:border-x lg:border-lime-700 flex flex-col gap-4 px-4">
                <h2 className="text-xl text-lime-700 font-semibold font-serif text-center">
                  Frameworks
                </h2>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="flex items-center gap-4 hover:bg-lime-100 rounded p-2 cursor-pointer">
                      <img
                        src={framework.icon}
                        alt={framework.name}
                        className="w-12"
                      />
                      <p>{framework.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div id="col3" className="flex flex-col gap-4">
                <h2 className="text-xl text-lime-700 font-semibold font-serif text-center">
                  Herramientas
                </h2>
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {herramientas.map((herramienta, index) => (
                    <div key={index} className="flex items-center gap-4 hover:bg-lime-100 rounded p-2 cursor-pointer">
                      <img
                        src={herramienta.icon}
                        alt={herramienta.name}
                        className="w-12"
                      />
                      <p>{herramienta.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
