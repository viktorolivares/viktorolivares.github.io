import SectionHeading from "./SectionHeading";
import { additionalSkills } from "../data/cvData";

const AdditionalSkillsSection = () => {
  return (
    <section className="space-y-6">
      <SectionHeading icon="bx-palette" title="Competencias Adicionales" />
      <div className="flex flex-wrap gap-3">
        {additionalSkills.map((skill) => (
          <span
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transition-colors duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AdditionalSkillsSection;
