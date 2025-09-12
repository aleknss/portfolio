import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { FaAward } from "react-icons/fa";
import dayjs from "dayjs";

export default function Experience() {
  return (
    <div id="experiencia" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="flex gap-2 items-center font-serif font-bold text-2xl text-lime-900"><FaAward />Experiencia</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">   
            {profile.experience.map((experience) => (
              <div
                key={experience.from}
                className="flex flex-col gap-6 border border-lime-700 hover:border-lime-600 card p-8 rounded"
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <img src={experience.logo} alt="logo" className=" max-w-36 max-h-18 w-full h-full object-contain" />
                  <p className="font-serif text-center text-lime-700 text-xl font-medium">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-lime-600 font-semibold">{experience.role}</p>
                    <p className="text-sm text-lime-600">
                      {dayjs(experience.from).format('MMMM YYYY')} ~ {experience.to === null ? 'Present' : dayjs(experience.to).format('MMMM YYYY')}

                    </p>
                  </div>
                  <ul className="text-sm  mt-3 pl-4">
                    {experience.descriptions.map((description, index) => (
                      <li key={`${experience.from}-${index}`} className="list-disc">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}