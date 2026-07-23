import SectionHeading from "./SectionHeading";
import { additionalSkills } from "../data/cvData";

const AdditionalSkillsSection = ({ className = "" }) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <SectionHeading icon="bx-palette" title="Competencias Adicionales" />
      <div className="flex flex-wrap gap-3">
        {additionalSkills.map((skill) => (
          <span
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-500/60 dark:hover:bg-sky-500/15 dark:hover:text-sky-300"
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
