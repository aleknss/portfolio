import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";

import dayjs from "dayjs";

export default function Educacion() {
  return (
    <div id="datosacademicos" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="flex gap-2 items-center font-bold text-2xl font-serif text-lime-900">
            <FaGraduationCap />
            Datos académicos
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 border border-lime-700 hover:border-lime-600 card rounded py-8 px-6">
              <img
                src={profile.education.bach.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <p className="text-xl text-center font-serif text-lime-700 font-medium">
                {profile.education.bach.grado}
              </p>
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaMapMarkerAlt />Ciudad:</p>
                {profile.education.bach.ciudad}
              </p>   
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaCertificate />Grado:</p>
                {profile.education.bach.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaCalendar />Graduado en:</p>
                {dayjs(profile.education.bach.graduacion).format("MMMM YYYY")}
              </p>
            </div>
            <div className="flex flex-col gap-4 border border-lime-700 hover:border-lime-600 card rounded py-8 px-6">
              <img
                src={profile.education.fp.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <p className="text-xl text-center font-serif text-lime-700 font-medium">
                {profile.education.fp.grado}
              </p>
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaMapMarkerAlt />Ciudad:</p>
                {profile.education.fp.ciudad}
              </p>   
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaCertificate />Grado:</p>
                {profile.education.fp.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm text-black">
                <p className="flex items-center gap-1 font-bold"><FaCalendar />Graduado en:</p>
                {dayjs(profile.education.fp.graduacion).format("MMMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
