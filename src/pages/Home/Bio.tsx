import { PrimaryButton, SecondaryButton } from "../../components/Button";
import profile from "../../configs/portfolio.json";
import Wrapper from "../../layouts/Wrapper";

export default function Bio() {
  return (
    <div id="bio" className="w-full">
      <Wrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-serif font-[700] text-4xl text-lime-900">¡Encantado! Soy {profile.name}</h1>
          <p className="w-full 2xl:w-2/3">{profile.bio}</p>
        </div>
        <div className="flex mt-4 gap-4">
          <PrimaryButton href="#contacto" label="¡Contacta conmigo!" />
          <SecondaryButton href={profile.meetingLink} label="¿Quieres una reunión?" />
        </div>
      </Wrapper>
    </div>
  );
}
