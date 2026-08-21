import { Link } from "react-router";
import Footer from "../../components/Footer";
import {
  aboutText,
  additionalSkills,
  certifications,
  contacts,
  cvDownload,
  education,
  experience,
  profile,
  socialLinks,
  technicalSkills,
} from "../../data/cvData";

const CvV1Page = () => {
  return (
    <div className="min-h-screen bg-[#09090b] px-4 py-8 text-zinc-100 font-mono sm:px-6 sm:py-12 lg:px-8">
      <main className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <header className="border-b border-zinc-800 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              {profile.name}
            </h1>
            <p className="text-sm font-medium text-zinc-400">
              {profile.title} &mdash; Chiclayo, Perú
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-400">
              {contacts.map((c) => (
                <span key={c.text} className="inline-flex items-center gap-1.5">
                  <i className={`bx ${c.icon} text-zinc-500`} />
                  <span>{c.text}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
            >
              <i className="bx bx-arrow-back text-sm" />
              <span>Volver</span>
            </Link>
            {cvDownload?.href && cvDownload.href !== "#" && (
              <a
                href={cvDownload.href}
                download={cvDownload.fileName}
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-900 transition-colors hover:bg-zinc-300"
              >
                <i className="bx bx-download text-sm" />
                <span>Descargar PDF</span>
              </a>
            )}
          </div>
        </header>

        {/* Resumen */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Resumen Profesional
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
            {aboutText}
          </p>
        </section>

        {/* Experiencia */}
        <section className="space-y-6">
          <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase border-b border-zinc-800 pb-2">
            Experiencia Laboral
          </h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={`${item.role}-${item.date}`} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.role}{" "}
                    <span className="font-normal text-zinc-400">
                      &mdash; {item.company}
                    </span>
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    {item.date}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                {item.achievements?.length > 0 && (
                  <ul className="grid gap-1 pt-1 text-xs text-zinc-400">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <span className="text-zinc-600">&bull;</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Competencias Técnicas */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase border-b border-zinc-800 pb-2">
            Competencias Técnicas
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between rounded border border-zinc-800/80 bg-zinc-900/30 px-3 py-2 text-xs"
              >
                <span className="text-zinc-200">{skill.name}</span>
                <span className="text-zinc-500 text-[11px] font-mono">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
          {additionalSkills?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {additionalSkills.map((s) => (
                <span
                  key={s}
                  className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Educación & Certificaciones */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase border-b border-zinc-800 pb-2">
              Educación
            </h2>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={`${item.title}-${item.date}`} className="space-y-1">
                  <h3 className="text-xs font-semibold text-zinc-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{item.institution}</p>
                  <p className="text-[10px] text-zinc-500 font-mono">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase border-b border-zinc-800 pb-2">
              Certificaciones
            </h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="space-y-1 text-xs">
                  <h3 className="font-semibold text-zinc-200">{cert.title}</h3>
                  <p className="text-zinc-400">
                    {cert.issuer} &bull; {cert.issued}
                  </p>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-[11px] text-zinc-400 underline hover:text-zinc-100"
                    >
                      Ver credencial
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redes */}
        <section className="border-t border-zinc-800 pt-6 flex flex-wrap gap-4 text-xs text-zinc-400">
          {socialLinks.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              [{s.title}]
            </a>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default CvV1Page;
