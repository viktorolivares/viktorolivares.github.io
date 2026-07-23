import SectionHeading from "./SectionHeading";
import { aboutText } from "../data/cvData";

const AboutSection = () => {
  return (
    <section className="space-y-6">
      <SectionHeading icon="bx-user" title="Perfil Profesional" />
      <div className="rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(240,249,255,0.9))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
        <p className="max-w-4xl text-balance text-lg leading-8 text-slate-700 sm:text-[1.12rem]">
          {aboutText}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
