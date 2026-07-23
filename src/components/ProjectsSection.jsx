import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/cvData";

const ProjectsSection = () => {
  const [selectedTech, setSelectedTech] = useState("Todos");
  const [expandedProject, setExpandedProject] = useState(null);

  const techOptions = useMemo(() => {
    const technologies = projects.flatMap((project) => project.tech);
    return ["Todos", ...new Set(technologies)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTech === "Todos") {
      return projects;
    }
    return projects.filter((project) => project.tech.includes(selectedTech));
  }, [selectedTech]);

  return (
    <section className="space-y-6">
      <SectionHeading icon="bx-code-alt" title="Proyectos Destacados" />

      <div className="flex flex-wrap gap-2">
        {techOptions.map((tech) => (
          <button
            type="button"
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
              selectedTech === tech
                ? "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-500/60 dark:bg-sky-500/15 dark:text-sky-300"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/60"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => {
          const projectId = `${project.title}-${project.tech.join("-")}`;
          const isExpanded = expandedProject === projectId;
          const hasLongDescription = project.description.length > 120;
          const shortDescription = project.description.slice(0, 120);
          const displayedDescription = isExpanded
            ? project.description
            : shortDescription + (hasLongDescription ? "..." : "");

          return (
            <div
              className="group rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.09)] dark:border-slate-700/70 dark:bg-slate-800/80 dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
              key={projectId}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-50 dark:bg-slate-700 dark:text-sky-300 dark:group-hover:bg-slate-600">
                  <i className="bx bx-up-right-arrow-alt text-xl"></i>
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {displayedDescription}
              </p>
              {hasLongDescription ? (
                <button
                  type="button"
                  className="mt-3 text-xs font-semibold tracking-[0.14em] text-sky-600 uppercase dark:text-sky-300"
                  onClick={() =>
                    setExpandedProject((current) =>
                      current === projectId ? null : projectId,
                    )
                  }
                >
                  {isExpanded ? "Ver menos" : "Ver más"}
                </button>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                    key={`${project.title}-${tech}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
