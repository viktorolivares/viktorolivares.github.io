import { motion, AnimatePresence } from "framer-motion";
import {
  certifications,
  contacts,
  education,
  experience,
  profile,
  projects,
  technicalSkills,
} from "../data/cvData";

const QuickCvModal = ({ isOpen, onClose, cvDownload }) => {
  const highlightedCerts = certifications.filter(
    (item) => item.certificateUrl,
  ).length;
  const topSkills = technicalSkills.slice(0, 8);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-90 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_30px_90px_rgba(2,6,23,0.45)] dark:border-slate-700/70 dark:bg-slate-900 sm:p-7"
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 18 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-700">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-cyan-700 uppercase dark:text-cyan-300">
                  Vista Rapida CV
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {profile.name}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {profile.title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={cvDownload.href}
                  download={cvDownload.fileName}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-white uppercase hover:bg-cyan-500"
                >
                  <i className="bx bx-download" />
                  <span>Descargar</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-slate-700 uppercase hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Cerrar
                </button>
              </div>
            </header>

            <section className="mb-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="text-xs text-slate-500 uppercase dark:text-slate-300">
                  Experiencia
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                  10+ años
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="text-xs text-slate-500 uppercase dark:text-slate-300">
                  Roles Clave
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                  {experience.length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                <p className="text-xs text-slate-500 uppercase dark:text-slate-300">
                  Certificados con Link
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                  {highlightedCerts}
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-[0.12em] text-slate-700 uppercase dark:text-slate-200">
                Contacto
              </h3>
              <div className="grid gap-2 sm:grid-cols-3">
                {contacts.map((contact) => (
                  <div
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                    key={contact.text}
                  >
                    <i
                      className={`bx ${contact.icon} mr-1.5 text-cyan-600 dark:text-cyan-300`}
                    />
                    {contact.text}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-[0.12em] text-slate-700 uppercase dark:text-slate-200">
                Stack Principal
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    key={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-[0.12em] text-slate-700 uppercase dark:text-slate-200">
                Experiencia Reciente
              </h3>
              <div className="space-y-2">
                {experience.slice(0, 3).map((item) => (
                  <article
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80"
                    key={`${item.role}-${item.date}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {item.role}
                      </h4>
                      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-cyan-800 uppercase dark:border-cyan-500/60 dark:bg-cyan-500/15 dark:text-cyan-200">
                        {item.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {item.company}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-[0.12em] text-slate-700 uppercase dark:text-slate-200">
                  Educación
                </h3>
                <div className="space-y-2">
                  {education.map((item) => (
                    <article
                      className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80"
                      key={`${item.title}-${item.date}`}
                    >
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {item.institution}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-[0.12em] text-slate-700 uppercase dark:text-slate-200">
                  Proyectos
                </h3>
                <div className="space-y-2">
                  {projects.slice(0, 3).map((project) => (
                    <article
                      className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/80"
                      key={project.title}
                    >
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {project.tech.join(" · ")}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default QuickCvModal;
