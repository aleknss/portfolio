import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { FaAward } from "react-icons/fa";
import dayjs from "dayjs";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";

export default function Experience() {
  return (
    <div id="experiencia" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaAward />
            Experiencia
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {profile.experience.map((experience) => (
              <Card key={experience.from} className="flex flex-col gap-6">
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={experience.logo}
                    alt="logo"
                    className=" max-w-18 max-h-18 w-full h-full object-cover rounded"
                  />
                  <SecondaryTitle>
                    {experience.company}
                  </SecondaryTitle>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-lime-600 dark:text-lime-300 font-semibold">
                      {experience.role}
                    </p>
                    <p className="text-sm text-lime-600 dark:text-lime-300">
                      {dayjs(experience.from).format("MMMM YYYY")} ~{" "}
                      {experience.to === null
                        ? "Present"
                        : dayjs(experience.to).format("MMMM YYYY")}
                    </p>
                  </div>
                  <ul className="text-sm  mt-3 pl-4">
                    {experience.descriptions.map((description, index) => (
                      <li
                        key={`${experience.from}-${index}`}
                        className="list-disc"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
