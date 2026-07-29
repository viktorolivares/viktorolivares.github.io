import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import InteractiveCard from "../components/InteractiveCard";
import SectionHeading from "../components/SectionHeading";
import profileImage from "../assets/img/profile.jpg";
import { profile, projects, socialLinks } from "../data/cvData";

const diagramasPorProyecto = {
  "Plataforma de Prevención de Fraude": {
    entrada: "Transacciones",
    nucleo: "Motor de Reglas",
    salida: "Alertas y Bloqueos",
  },
  "Plataforma de Monitoreo CCTV": {
    entrada: "DVRs y Señales",
    nucleo: "Monitoreo Central",
    salida: "Alertas en Tiempo Real",
  },
  "Backend de Recaudadores Financieros": {
    entrada: "Recaudadores",
    nucleo: "Conciliación",
    salida: "Liquidación",
  },
  "Sistema de Facturación Electrónica": {
    entrada: "Comprobantes",
    nucleo: "Validación SUNAT",
    salida: "Emisión y Reporte",
  },
  "Captura de Notificaciones (YAPE - QR BBVA)": {
    entrada: "Notificaciones",
    nucleo: "Listener Android",
    salida: "Validación de Saldo",
  },
};

const obtenerDiagrama = (titulo) => {
  return (
    diagramasPorProyecto[titulo] ?? {
      entrada: "Entrada",
      nucleo: "Proceso",
      salida: "Resultado",
    }
  );
};

const pilaresTecnicos = [
  {
    icon: "bx-shield-quarter",
    title: "Prevención de Fraude",
    desc: "Evaluación en tiempo real de transacciones sospechosas y alertas de seguridad.",
  },
  {
    icon: "bx-server",
    title: "Sistemas & Backend",
    desc: "Arquitecturas altamente disponibles, resilientes y de alto rendimiento.",
  },
  {
    icon: "bx-data",
    title: "Conciliación Financiera",
    desc: "Automatización de liquidación contable, auditoría y recaudación de pagos.",
  },
  {
    icon: "bx-bot",
    title: "Automatización con IA",
    desc: "Integración de agentes inteligentes en flujos operativos y analítica.",
  },
];

const HomePage = () => {
  const tecnologiasUnicas = [
    ...new Set(projects.flatMap((project) => project.tech)),
  ];
  const [imagenesConError, setImagenesConError] = useState({});

  return (
    <div className="dark min-h-screen bg-slate-950 px-3 py-6 font-[JetBrains_Mono] text-slate-200 antialiased sm:px-6 sm:py-10 lg:px-8">
      <div className="technical-grid"></div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8">
        <header className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="shrink-0 relative">
                <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl bg-slate-950 border-2 border-slate-700/80 shadow-lg">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 ring-2 ring-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-sky-300 uppercase">
                  <i className="bx bx-badge-check text-sm" />
                  <span>Software Engineer & Senior Specialist</span>
                </div>
                <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-400">
                  {profile.title}
                </p>
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-2xl">
                  Especializado en arquitectura backend, prevención de fraude, sistemas de monitoreo en tiempo real, conciliación financiera y optimización de procesos operativos.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3">
                  <Link
                    to="/cv/v1"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/40 bg-sky-950/40 px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-sky-200 uppercase transition-all hover:bg-sky-900/60 hover:border-sky-400/60 shadow-[0_8px_24px_rgba(14,165,233,0.15)]"
                  >
                    <i className="bx bx-file text-base" />
                    <span>Ver Currículum Vitae</span>
                  </Link>

                  <div className="h-6 w-px bg-slate-800 mx-1 hidden sm:block" />

                  <div className="flex justify-center gap-2 mt-1 sm:mt-0">
                    {socialLinks.map((social) => (
                      <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        title={social.title}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:text-sky-300 hover:border-sky-500/30 hover:bg-slate-900 transition-colors"
                      >
                        <i className={`bx ${social.icon} text-lg`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-800/80 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase">
                // Pilares de Especialidad
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {pilaresTecnicos.map((pilar) => (
                  <div
                    key={pilar.title}
                    className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 transition-colors hover:border-slate-700"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-sky-400">
                        <i className={`bx ${pilar.icon} text-base`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200">
                          {pilar.title}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-normal truncate">
                          {pilar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-center">
                  <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                    Proyectos
                  </p>
                  <p className="mt-0.5 text-xl font-bold text-slate-100">
                    {projects.length}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-center">
                  <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                    Tecnologías
                  </p>
                  <p className="mt-0.5 text-xl font-bold text-slate-100">
                    {tecnologiasUnicas.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <SectionHeading icon="bx-code-block" title="Proyectos & Arquitecturas" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const diagrama = obtenerDiagrama(project.title);
              const mostrarImagen =
                project.image && !imagenesConError[project.title];

              return (
                <InteractiveCard
                  as={motion.article}
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/40 p-5 shadow-lg transition-colors hover:border-slate-700 h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-100 hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="shrink-0 rounded bg-slate-800/80 px-2 py-0.5 text-[9px] font-mono tracking-wider text-slate-400 uppercase border border-slate-700/60">
                        SYS-{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {mostrarImagen ? (
                      <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 group">
                        <img
                          src={project.image}
                          alt={project.imageAlt ?? `Diagrama de ${project.title}`}
                          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={() =>
                            setImagenesConError((actual) => ({
                              ...actual,
                              [project.title]: true,
                            }))
                          }
                        />
                        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                          <span className="text-xs tracking-wider text-sky-300 font-semibold uppercase">
                            Ver Diagrama de Flujo
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3.5">
                        <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase mb-2.5">
                          // Flujo de Procesamiento
                        </p>
                        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-1.5">
                          <div className="w-full rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-2 text-center text-[9px] font-semibold text-slate-300">
                            <span className="block text-[7px] text-slate-500 uppercase mb-0.5">IN</span>
                            {diagrama.entrada}
                          </div>
                          <i className="bx bx-right-arrow-alt text-sky-400 text-sm hidden sm:block" />
                          <i className="bx bx-down-arrow-alt text-sky-400 text-sm sm:hidden" />
                          <div className="w-full rounded-lg border border-sky-900/50 bg-sky-950/40 px-2 py-2 text-center text-[9px] font-semibold text-sky-200">
                            <span className="block text-[7px] text-sky-400/80 uppercase mb-0.5">ENGINE</span>
                            {diagrama.nucleo}
                          </div>
                          <i className="bx bx-right-arrow-alt text-sky-400 text-sm hidden sm:block" />
                          <i className="bx bx-down-arrow-alt text-sky-400 text-sm sm:hidden" />
                          <div className="w-full rounded-lg border border-emerald-900/50 bg-emerald-950/40 px-2 py-2 text-center text-[9px] font-semibold text-emerald-200">
                            <span className="block text-[7px] text-emerald-400/80 uppercase mb-0.5">OUT</span>
                            {diagrama.salida}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded border border-slate-800 bg-slate-950 px-2.5 py-0.5 text-[9px] font-medium tracking-wider text-slate-400 uppercase"
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

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
