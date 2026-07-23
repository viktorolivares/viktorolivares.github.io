import SectionHeading from "./SectionHeading";
import { experience } from "../data/cvData";

const ExperienceSection = () => {
  return (
    <section className="space-y-6">
      <SectionHeading icon="bx-briefcase" title="Experiencia Laboral" />

      {experience.map((item) => (
        <div
          className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7"
          key={`${item.role}-${item.date}`}
        >
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[1.25rem]">
                {item.role}
              </h3>
              {item.company ? (
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.company}
                </p>
              ) : null}
            </div>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-700 uppercase">
              {item.date}
            </span>
          </div>
          <p className="leading-7 text-slate-600">{item.description}</p>
          <ul className="mt-5 grid gap-2.5">
            {item.achievements.map((achievement) => (
              <li
                className="relative rounded-2xl bg-slate-50 px-4 py-3 pl-11 text-sm leading-6 text-slate-700 before:absolute before:left-4 before:top-3.5 before:h-2 before:w-2 before:rounded-full before:bg-sky-500 before:content-['']"
                key={achievement}
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
