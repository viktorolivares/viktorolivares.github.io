import SectionHeading from "./SectionHeading";
import { education } from "../data/cvData";

const EducationSection = () => {
  return (
    <section className="space-y-6">
      <SectionHeading icon="bx-book" title="Educacion" />

      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((item) => (
          <div
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
            key={`${item.title}-${item.date}`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-slate-900">
                {item.title}
              </h3>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
                {item.date}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-500">
              {item.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
