import SectionHeading from "./SectionHeading";
import InteractiveCard from "./InteractiveCard";
import { education } from "../data/cvData";

const EducationSection = ({ className = "" }) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <SectionHeading icon="bx-book" title="Educacion" />

      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((item) => (
          <InteractiveCard
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-slate-700/70 dark:bg-slate-800/85 dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            key={`${item.title}-${item.date}`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200">
                {item.date}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">
              {item.institution}
            </p>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
