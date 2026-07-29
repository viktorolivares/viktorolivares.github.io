import SectionHeading from "./SectionHeading";
import InteractiveCard from "./InteractiveCard";
import {
  aboutText,
  experience,
  profile,
  technicalSkills,
} from "../data/cvData";

const AboutSection = ({ className = "" }) => {
  const topSkills = technicalSkills.slice(0, 5).map((skill) => skill.name);
  const activeYears = "10+";
  const totalRoles = experience.length;
  const topCurrentRole = experience[0]?.role ?? "Rol técnico senior";

  return (
    <section className={`space-y-6 ${className}`}>
      <SectionHeading icon="bx-user" title="Perfil Profesional" />
      <InteractiveCard className="rounded-2xl border border-slate-200/80 bg-[linear-gradient(135deg,rgba(248,250,252,1),rgba(240,249,255,0.9))] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-slate-700/70 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.75),rgba(30,41,59,0.76))] sm:rounded-[28px] sm:p-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 text-slate-100 shadow-[0_14px_32px_rgba(2,6,23,0.45)] dark:border-cyan-500/35">
            <div className="flex items-center justify-between border-b border-slate-700/90 px-3.5 py-2.5 text-[9px] sm:text-[10px] tracking-[0.16em] text-slate-300 uppercase">
              <span className="inline-flex items-center gap-1.5 min-w-0">
                <i className="bx bx-terminal text-sm sm:text-base text-cyan-300 shrink-0" />
                <span className="truncate">Ficha de Identidad Profesional</span>
              </span>
              <span className="shrink-0 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                Activo
              </span>
            </div>

            <div className="space-y-2 px-3.5 py-3.5 font-mono text-[11px] sm:text-[12px] leading-5 sm:leading-6 break-words overflow-hidden">
              <p>
                <span className="text-cyan-300">$</span> identidad
              </p>
              <p className="text-slate-200">
                {profile.name} / {topCurrentRole}
              </p>

              <p>
                <span className="text-cyan-300">$</span> tecnologias
                --principales
              </p>
              <p className="text-slate-300">{topSkills.join(" · ")}</p>

              <p>
                <span className="text-cyan-300">$</span> estado
              </p>
              <p className="text-emerald-300">
                Disponible para roles senior en backend, arquitectura y
                optimización apoyada por inteligencia artificial.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200/80 bg-white/85 p-3.5 sm:p-4 dark:border-slate-700/70 dark:bg-slate-800/80">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-cyan-200/80">
              Enfoque Profesional
            </p>
            <h3 className="mt-1 text-xs sm:text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-slate-100">
              Diseño de Sistemas Escalables con Impacto Operativo
            </h3>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-1.5 py-2 text-center dark:border-slate-600 dark:bg-slate-700/60">
                <p className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-300">
                  {activeYears}
                </p>
                <p className="text-[8px] sm:text-[10px] tracking-widest text-slate-600 uppercase dark:text-slate-200">
                  Años
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-1.5 py-2 text-center dark:border-slate-600 dark:bg-slate-700/60">
                <p className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-300">
                  {totalRoles}
                </p>
                <p className="text-[8px] sm:text-[10px] tracking-widest text-slate-600 uppercase dark:text-slate-200">
                  Roles
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-1.5 py-2 text-center dark:border-slate-600 dark:bg-slate-700/60">
                <p className="text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-300">
                  24/7
                </p>
                <p className="text-[8px] sm:text-[10px] tracking-widest text-slate-600 uppercase dark:text-slate-200">
                  Ejecución
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/70 dark:text-slate-100">
                <i className="bx bxl-docker text-cyan-600 dark:text-cyan-300"></i>{" "}
                Docker
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/70 dark:text-slate-100">
                <i className="bx bxl-git text-cyan-600 dark:text-cyan-300"></i>{" "}
                Git
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/70 dark:text-slate-100">
                <i className="bx bx-server text-cyan-600 dark:text-cyan-300"></i>{" "}
                APIs
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/70 dark:text-slate-100">
                <i className="bx bx-cloud text-cyan-600 dark:text-cyan-300"></i>{" "}
                Nube
              </span>
            </div>
          </article>
        </div>

        <p className="mx-auto max-w-3xl text-left sm:text-justify text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
          {aboutText}
        </p>
        <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-cyan-800 uppercase dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-200">
          <i className="bx bx-code-alt" />
          <span>Narrativa Técnica Activa</span>
        </div>
      </InteractiveCard>
    </section>
  );
};

export default AboutSection;
