import Wrapper from "../../layouts/Wrapper";
import profile from "../../configs/portfolio.json";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import SecondaryTitle from "../../components/ui/SecondaryTitle";

import dayjs from "dayjs";

export default function Educacion() {
  return (
    <div id="datosacademicos" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <Title>
            <FaGraduationCap />
            Datos Académicos
          </Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="flex flex-col gap-4 py-8 px-6">
              <img
                src={profile.education.bach.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <SecondaryTitle>
                {profile.education.bach.grado}
              </SecondaryTitle>
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaMapMarkerAlt />Ciudad:</p>
                {profile.education.bach.ciudad}
              </p>   
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaCertificate />Grado:</p>
                {profile.education.bach.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaCalendar />Graduado en:</p>
                {dayjs(profile.education.bach.graduacion).format("MMMM YYYY")}
              </p>
            </Card>
            <Card className="flex flex-col gap-4 py-8 px-6">
              <img
                src={profile.education.fp.logo}
                alt="university-logo"
                className="w-2/3 h-32 object-cover mx-auto rounded-sm"
              />
              <SecondaryTitle>
                {profile.education.fp.grado}
              </SecondaryTitle>
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaMapMarkerAlt />Ciudad:</p>
                {profile.education.fp.ciudad}
              </p>   
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaCertificate />Grado:</p>
                {profile.education.fp.modalidad}
              </p>
              <p className="flex items-center gap-1 text-sm">
                <p className="flex items-center gap-1 font-bold"><FaCalendar />Graduado en:</p>
                {dayjs(profile.education.fp.graduacion).format("MMMM YYYY")}
              </p>
            </Card>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
