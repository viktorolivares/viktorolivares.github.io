import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import InteractiveCard from "./InteractiveCard";
import { projects } from "../data/cvData";

const getPreviewPalette = (tech) => {
  if (tech.includes("Python")) {
    return ["#1d4ed8", "#22d3ee"];
  }
  if (tech.includes("Laravel") || tech.includes("PHP")) {
    return ["#b91c1c", "#f97316"];
  }
  if (tech.includes("NestJS") || tech.includes("REST API")) {
    return ["#0f172a", "#0891b2"];
  }
  return ["#0e7490", "#2563eb"];
};

const ProjectsSection = ({ className = "" }) => {
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
    <section className={`space-y-6 ${className}`}>
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
          let displayedDescription = project.description;
          if (!isExpanded) {
            displayedDescription = shortDescription;
            if (hasLongDescription) {
              displayedDescription += "...";
            }
          }
          const [accentOne, accentTwo] = getPreviewPalette(project.tech);

          return (
            <InteractiveCard
              className="group rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.09)] dark:border-slate-700/70 dark:bg-slate-800/80 dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
              key={projectId}
            >
              <div
                className="relative mb-5 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accentOne}, ${accentTwo})`,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.26),transparent_45%)]"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                />
                <motion.div
                  className="relative px-4 py-4"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                >
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/55"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
                  </div>
                  <div className="rounded-xl bg-slate-900/25 p-3 backdrop-blur-[1px]">
                    <div className="mb-2 h-2.5 w-3/5 rounded-full bg-white/75"></div>
                    <div className="mb-2 h-2 w-11/12 rounded-full bg-white/55"></div>
                    <div className="h-2 w-8/12 rounded-full bg-white/45"></div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 2).map((techTag) => (
                        <span
                          key={`${projectId}-${techTag}-preview`}
                          className="rounded-full border border-white/25 bg-white/18 px-2 py-0.5 text-[10px] font-semibold tracking-[0.06em] text-white"
                        >
                          {techTag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

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
            </InteractiveCard>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
