import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import Arduino from "../../assets/arduino.jpg";
import Ordenna from "../../assets/ordenna.jpg";
import DnD from "../../assets/dnd.png";

export default function Proyectos() {
  return (
    <div id="proyectos" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="flex gap-2 items-center font-serif text-lime-900 font-bold text-2xl">
            <AiOutlineFundProjectionScreen />
            Proyectos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.projects.map((project) => (
              <div
                key={project.name}
                className="flex lg:flex-row flex-col items-center border border-lime-700 hover:border-lime-600 card rounded"
              >
                <img
                  src={
                    project.logo === "arduino"
                      ? Arduino
                      : project.logo === "ordenna"
                      ? Ordenna
                      : project.logo === "dnd"
                      ? DnD
                      : project.logo
                  }
                  alt="logo"
                  className="lg:w-1/3 ml-4 w-2/3 h-36 lg:h-full py-2 object-cover rounded"
                />
                <div className="flex flex-col justify-between items-center gap-6 p-6 rounded-lg overflow-hidden">
                  <div className="flex flex-col justify-start items-center gap-2">
                    <p className="w-full text-center text-lg font-medium text-r font-serif px-4 py-2 rounded-lg text-lime-700">
                      {project.name}
                    </p>
                    <a
                      href={project.link}
                      className="text-sm text-lime-600 hover:underline"
                      target="_blank"
                    >
                      {project.link}
                    </a>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <div className="w-full flex flex-wrap justify-start gap-1">
                    {project.skills?.map((skill) => (
                      <p
                        key={skill}
                        className="text-[12px] border border-zinc-800 bg-lime-200 hover:bg-lime-300 transition-colors duration-300 ease-in-out px-3 py-1 rounded-full cursor-pointer"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
