import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import InteractiveCard from "./InteractiveCard";
import { experience } from "../data/cvData";

const ExperienceSection = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experience[activeIndex];
  const totalRoles = experience.length;
  const progressPercent = ((activeIndex + 1) / totalRoles) * 100;

  return (
    <section className={`space-y-6 ${className}`}>
      <SectionHeading icon="bx-briefcase" title="Experiencia Laboral" />

      <InteractiveCard className="rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-slate-700/70 dark:bg-slate-800/85 dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)] sm:p-6">
        <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50/90 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
            <p className="text-[10px] tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">
              Etapa
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalRoles).padStart(2, "0")}
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50/90 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
            <p className="text-[10px] tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">
              Logros Clave
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {activeExperience.achievements.length}
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50/90 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
            <p className="text-[10px] tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">
              Estado
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              {activeIndex === 0 ? "Actual" : "Histórico"}
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50/90 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/80">
            <p className="text-[10px] tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">
              Recorrido
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-cyan-500 to-emerald-400"
                animate={{ width: `${progressPercent}%` }}
                transition={{ type: "spring", stiffness: 170, damping: 24 }}
              />
            </div>
          </article>
        </div>

        <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
          <div className="space-y-3">
            {experience.map((item, index) => {
              return (
                <motion.button
                  key={`${item.role}-${item.date}-pane`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full rounded-2xl border p-3 pl-10 text-left transition-colors duration-300 ${
                    activeIndex === index
                      ? "border-cyan-300 bg-cyan-50/95 shadow-[0_10px_24px_rgba(8,145,178,0.16)] dark:border-cyan-500/60 dark:bg-cyan-500/15"
                      : "border-slate-300 bg-slate-50/95 shadow-[0_8px_20px_rgba(15,23,42,0.08)] dark:border-slate-600 dark:bg-slate-800/90"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ y: 0, rotateY: 0, scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                >
                  <span
                    className={`absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border ${
                      activeIndex === index
                        ? "border-cyan-500 bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.2)]"
                        : "border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-700"
                    }`}
                  />
                  <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase dark:text-slate-300">
                    {item.date}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {item.role}
                  </p>
                  {item.company ? (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                      {item.company}
                    </p>
                  ) : null}
                </motion.button>
              );
            })}
          </div>

          <div className="min-h-90 perspective-distant">
            <AnimatePresence mode="wait">
              <motion.article
                key={`${activeExperience.role}-${activeExperience.date}`}
                initial={{ opacity: 0, rotateX: -8, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 8, y: -16 }}
                transition={{ duration: 0.34, ease: "easeOut" }}
                className="relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white to-slate-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-slate-700/70 dark:bg-linear-to-br dark:from-slate-800 dark:to-slate-800/80 dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/18" />
                <div className="pointer-events-none absolute -bottom-24 -left-14 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/14" />

                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-100 sm:text-[1.25rem]">
                      {activeExperience.role}
                    </h3>
                    {activeExperience.company ? (
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {activeExperience.company}
                      </p>
                    ) : null}
                  </div>
                  <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-cyan-800 uppercase dark:border-cyan-500/60 dark:bg-cyan-500/15 dark:text-cyan-200">
                    {activeExperience.date}
                  </span>
                </div>

                <p className="leading-7 text-slate-700 dark:text-slate-200">
                  {activeExperience.description}
                </p>

                <p className="mt-5 text-[11px] font-semibold tracking-[0.12em] text-slate-500 uppercase dark:text-slate-300">
                  Impacto Destacado
                </p>
                <ul className="mt-5 grid gap-2.5">
                  {activeExperience.achievements.map((achievement, index) => (
                    <motion.li
                      className="relative rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 pl-11 text-sm leading-6 text-slate-800 dark:border-slate-600 dark:bg-slate-700/80 dark:text-slate-100"
                      key={`${activeExperience.role}-${achievement}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.24, delay: index * 0.05 }}
                    >
                      <span className="absolute left-4 top-3.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 bg-cyan-50 dark:border-cyan-500/60 dark:bg-cyan-500/20">
                        <i className="bx bx-check text-[11px] leading-none text-cyan-700 dark:text-cyan-200" />
                      </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </InteractiveCard>
    </section>
  );
};

export default ExperienceSection;
