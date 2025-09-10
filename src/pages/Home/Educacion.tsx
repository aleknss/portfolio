import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { FaGraduationCap } from "react-icons/fa";
import dayjs from "dayjs";

export default function Educacion() {
  return (
    <div id="datosacademicos" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-bold text-2xl font-serif text-forest-600">
            <FaGraduationCap />
            Datos académicos
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 border border-forest-600 hover:border-forest-400 rounded py-8 px-6 hover:cursor-pointer">
              <img
                src={profile.education.bach.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <p className="text-xl text-center font-serif">
                {profile.education.bach.grado}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Ciudad:</p>
                {profile.education.bach.ciudad}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Grado:</p>
                {profile.education.bach.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Graduado en:</p>
                {dayjs(profile.education.bach.graduacion).format("MMM YYYY")}
              </p>
            </div>
            <div className="flex flex-col gap-4 border border-forest-600 hover:border-forest-400 rounded py-8 px-6 hover:cursor-pointer">
              <img
                src={profile.education.fp.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <p className="text-xl text-center font-serif">
                {profile.education.fp.grado}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Ciudad:</p>
                {profile.education.fp.ciudad}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Grado:</p>
                {profile.education.fp.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm text-forest-400">
                <p className="text-forest-600 font-bold">Graduado en:</p>
                {dayjs(profile.education.fp.graduacion).format("MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
