import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroParticles3D from "../components/HeroParticles3D";
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

const HomePage = () => {
  const tecnologiasUnicas = [
    ...new Set(projects.flatMap((project) => project.tech)),
  ];
  const [imagenesConError, setImagenesConError] = useState({});

  return (
    <div className="dark min-h-screen bg-slate-950 px-4 py-8 font-[JetBrains_Mono] text-slate-200 antialiased sm:px-6 lg:px-8">
      <div className="technical-grid"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl space-y-8">
        <header className="relative overflow-hidden rounded-4xl border border-cyan-500/25 bg-slate-900/40 p-6 shadow-[0_25px_80px_rgba(2,6,23,0.5)] backdrop-blur sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-14 h-44 w-44 rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="shrink-0 relative">
                <div className="h-28 w-28 overflow-hidden rounded-[24px] bg-slate-950 border-2 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.2)] ring-1 ring-cyan-500/20 hover:scale-[1.04] transition-transform duration-300">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
              </div>
              
              <div className="text-center md:text-left flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                  Portafolio Profesional
                </p>
                <h1 className="mt-2.5 text-3xl font-bold tracking-[-0.02em] text-slate-100 sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm font-semibold tracking-wide text-cyan-300">
                  {profile.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Soluciones orientadas a prevención de fraude, monitoreo,
                  conciliación financiera y automatización operativa con IA.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Link
                    to="/cv/v1"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/35 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-cyan-200 uppercase transition-all hover:bg-cyan-500/25 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  >
                    <i className="bx bx-file text-sm" />
                    <span>CV Versión 1</span>
                  </Link>
                  <Link
                    to="/cv/v2"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-emerald-200 uppercase transition-all hover:bg-emerald-500/25 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    <i className="bx bx-rocket text-sm" />
                    <span>CV Versión 2</span>
                  </Link>

                  <div className="h-6 w-px bg-slate-800 mx-1 hidden sm:block" />

                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        title={social.title}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all hover:-translate-y-0.5"
                      >
                        <i className={`bx ${social.icon} text-lg`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <HeroParticles3D />
              <div className="grid grid-cols-2 gap-3">
                <article className="rounded-2xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 hover:border-cyan-500/30 transition-colors duration-300">
                  <p className="text-[10px] tracking-[0.12em] text-slate-400 uppercase font-semibold">
                    Proyectos
                  </p>
                  <p className="mt-1 text-2xl font-bold text-cyan-300">
                    {projects.length}
                  </p>
                </article>
                <article className="rounded-2xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 hover:border-cyan-500/30 transition-colors duration-300">
                  <p className="text-[10px] tracking-[0.12em] text-slate-400 uppercase font-semibold">
                    Tecnologías
                  </p>
                  <p className="mt-1 text-2xl font-bold text-cyan-300">
                    {tecnologiasUnicas.length}
                  </p>
                </article>
                <article className="col-span-2 rounded-2xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 hover:border-cyan-500/30 transition-colors duration-300">
                  <p className="text-[10px] tracking-[0.12em] text-slate-400 uppercase font-semibold">
                    Enfoque Operativo
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-300 leading-relaxed">
                    Arquitectura, automatización e integración de operaciones
                    críticas y flujos de negocio.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <SectionHeading icon="bx-code-block" title="Proyectos Destacados" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const diagrama = obtenerDiagrama(project.title);
              const mostrarImagen =
                project.image && !imagenesConError[project.title];

              return (
                <InteractiveCard
                  as={motion.article}
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/30 p-5 shadow-[0_15px_40px_rgba(2,6,23,0.35)] hover:border-cyan-500/30 transition-colors duration-300 h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-100 hover:text-cyan-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="shrink-0 text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                        // Proj_0{index + 1}
                      </span>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {mostrarImagen ? (
                      <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 group">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-[10px] tracking-[0.14em] text-cyan-300 font-bold uppercase">
                            Ver Diagrama Conceptual
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                        <p className="text-[9px] font-bold tracking-[0.15em] text-cyan-400 uppercase mb-2">
                          // Esquema de flujo
                        </p>
                        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5">
                          <div className="rounded-xl border border-slate-700 bg-slate-850/90 px-2 py-2.5 text-center text-[9px] font-semibold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            <span className="block text-[7px] text-slate-500 uppercase mb-0.5">IN</span>
                            {diagrama.entrada}
                          </div>
                          <i className="bx bx-chevron-right text-cyan-400 text-sm animate-pulse" />
                          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-2 py-2.5 text-center text-[9px] font-semibold text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                            <span className="block text-[7px] text-cyan-400/70 uppercase mb-0.5">PROCESS</span>
                            {diagrama.nucleo}
                          </div>
                          <i className="bx bx-chevron-right text-cyan-400 text-sm animate-pulse" />
                          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2 py-2.5 text-center text-[9px] font-semibold text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                            <span className="block text-[7px] text-emerald-400/70 uppercase mb-0.5">OUT</span>
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
                        className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-slate-400 uppercase hover:text-cyan-400 hover:border-cyan-500/20 transition-colors duration-200"
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
