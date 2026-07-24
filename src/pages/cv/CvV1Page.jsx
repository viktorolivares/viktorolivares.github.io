import { useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  aboutText,
  additionalSkills,
  contacts,
  certifications,
  education,
  experience,
  profile,
  projects,
  socialLinks,
  technicalSkills,
} from "../../data/cvData";

const CvV1Page = () => {
  const impactMetrics = useMemo(() => {
    const linkedCertifications = certifications.filter(
      (item) => item.certificateUrl,
    ).length;

    return [
      { label: "Años", value: "10+" },
      { label: "Roles", value: String(experience.length) },
      { label: "Proyectos", value: String(projects.length) },
      { label: "Certificados", value: String(linkedCertifications) },
    ];
  }, []);

  const mainCertifications = certifications.slice(0, 8);
  const featuredProjects = projects.slice(0, 4);
  const topSkills = technicalSkills.slice(0, 8);

  return (
    <div className="dark min-h-screen bg-slate-950 px-4 py-8 font-[JetBrains_Mono] text-slate-200 sm:px-6 lg:px-8 lg:py-10">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-cyan-100 uppercase transition-colors hover:bg-cyan-500/25"
        >
          <span>Inicio</span>
        </Link>
      </div>

      <main className="mx-auto max-w-7xl space-y-6 rounded-4xl border border-slate-700/80 bg-slate-900/85 p-6 shadow-[0_25px_70px_rgba(2,6,23,0.5)] sm:p-8 lg:p-10">
        <header className="space-y-5 border-b border-slate-700 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                CV Versión 1
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-base text-slate-300">{profile.title}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3"
              >
                <p className="text-[10px] tracking-[0.14em] text-slate-400 uppercase">
                  {metric.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-cyan-200">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Perfil Profesional
            </h2>
            <p className="mt-3 leading-8 text-slate-200">{aboutText}</p>
          </article>

          <article className="space-y-3 rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Contacto
            </h2>
            {contacts.map((contact) => (
              <p
                key={contact.text}
                className="flex items-center gap-2 text-sm text-slate-200"
              >
                <i className={`bx ${contact.icon} text-cyan-300`} />
                <span>{contact.text}</span>
              </p>
            ))}
            <div className="pt-2">
              <h3 className="text-xs font-semibold tracking-[0.12em] text-slate-300 uppercase">
                Redes
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-600 px-2.5 py-1 text-[11px] text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
                  >
                    {social.title}
                  </a>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
            Experiencia
          </h2>
          <div className="mt-4 space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.date}`}
                className="rounded-xl border border-slate-700 bg-slate-900/55 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-cyan-500/45 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-cyan-200 uppercase">
                    {item.date}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
                <ul className="mt-3 grid gap-1.5">
                  {item.achievements.slice(0, 4).map((achievement) => (
                    <li
                      key={`${item.role}-${achievement}`}
                      className="text-sm text-slate-200"
                    >
                      - {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Educacion
            </h2>
            <div className="mt-4 space-y-3">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.date}`}
                  className="rounded-xl border border-slate-700 bg-slate-900/55 p-3"
                >
                  <p className="font-semibold text-slate-100">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.institution}</p>
                  <p className="text-xs tracking-[0.12em] text-slate-400 uppercase">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Habilidades
            </h2>
            <div className="mt-4 grid gap-3">
              {topSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-slate-200">{skill.name}</span>
                    <span className="text-xs text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {additionalSkills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-600 px-2.5 py-1 text-[10px] text-slate-200 uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Certificaciones
            </h2>
            <div className="mt-4 space-y-3">
              {mainCertifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-slate-700 bg-slate-900/55 p-3"
                >
                  <p className="font-semibold text-slate-100">{cert.title}</p>
                  <p className="text-xs text-slate-300">
                    {cert.issuer} - {cert.issued}
                  </p>
                  {cert.credentialId ? (
                    <p className="mt-1 text-xs text-slate-300">
                      ID:{" "}
                      <span className="font-semibold text-slate-100">
                        {cert.credentialId}
                      </span>
                    </p>
                  ) : null}
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-cyan-200 uppercase"
                    >
                      <i className="bx bx-link-external" />
                      <span>Mostrar credencial</span>
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-800/65 p-5">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Proyectos
            </h2>
            <div className="mt-4 space-y-3">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl border border-slate-700 bg-slate-900/55 p-3"
                >
                  <p className="font-semibold text-slate-100">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {project.description}
                  </p>
                  <p className="mt-2 text-xs text-cyan-200">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CvV1Page;
