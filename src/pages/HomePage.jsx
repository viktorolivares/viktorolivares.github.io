import { useEffect, useState } from "react";
import {
  aboutText,
  additionalSkills,
  certifications,
  contacts,
  cvDownload,
  education,
  executiveKpis,
  experience,
  profile,
  projects,
  socialLinks,
  technicalSkills,
} from "../data/cvData";

const pilaresEspecialidad = [
  {
    title: "Dirección Técnica & Liderazgo de Equipos",
    desc: "Mentoría de desarrolladores, definición de estándares de ingeniería, metodologías ágiles y ejecución de soluciones de alto rendimiento.",
  },
  {
    title: "Gestión de Riesgo & Prevención de Fraude",
    desc: "Diseño e implementación de sistemas de alta criticidad para salvaguardar activos transaccionales, auditoría y control de pérdidas operativas.",
  },
  {
    title: "Arquitectura Empresarial & Escalabilidad",
    desc: "Gobierno de arquitecturas distribuidas, APIs de alta disponibilidad, integración con pasarelas financieras y continuidad del negocio 24/7.",
  },
  {
    title: "Eficiencia Operativa & Automatización con IA",
    desc: "Optimización de costos operativos (OpEx) mediante automatización de procesos core, agentes inteligentes y analítica avanzada de datos.",
  },
];

const diagramasPorProyecto = {
  "Plataforma de Prevención de Fraude": {
    entrada: "Transacciones",
    nucleo: "Motor de Reglas",
    salida: "Alertas y Bloqueos",
  },
  "Plataforma de Monitoreo CCTV & Seguridad": {
    entrada: "DVRs / Señales",
    nucleo: "Central de Monitoreo",
    salida: "Alertas en Tiempo Real",
  },
  "Backend de Recaudadores Financieros": {
    entrada: "Recaudadores",
    nucleo: "Conciliación",
    salida: "Liquidación Contable",
  },
  "Sistema de Facturación Electrónica SUNAT": {
    entrada: "Comprobantes",
    nucleo: "Validación SUNAT",
    salida: "Emisión y Reportes",
  },
  "Captura & Conciliación de Notificaciones (Yape / BBVA)": {
    entrada: "Notificaciones",
    nucleo: "Listener Android",
    salida: "Validación de Saldo",
  },
};

const HomePage = () => {
  const [themeMode, setThemeMode] = useState("system"); // 'system' | 'dark' | 'light'
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const root = document.documentElement;
      if (themeMode === "system") {
        root.classList.remove("dark", "light");
        setIsDark(mediaQuery.matches);
      } else if (themeMode === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        setIsDark(true);
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
        setIsDark(false);
      }
    };

    applyTheme();

    const handleChange = () => {
      if (themeMode === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  const toggleTheme = () => {
    if (themeMode === "system") {
      setThemeMode(isDark ? "light" : "dark");
    } else if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("system");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="min-h-screen font-mono antialiased pb-16 transition-colors"
      style={{ backgroundColor: "var(--bg-workspace)", color: "var(--text-primary)" }}
    >
      {/* Barra Superior estilo Visor de Documento */}
      <div
        className="no-print sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-md transition-colors"
        style={{ backgroundColor: "var(--bg-toolbar)", borderColor: "var(--border-page)" }}
      >
        <div className="mx-auto max-w-[210mm] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
            <i className="bx bxs-file-doc text-lg text-blue-500" />
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
              Victor_Olivares_CV.docx
            </span>
            <span
              className="rounded px-1.5 py-0.5 text-[10px]"
              style={{
                backgroundColor: "var(--bg-tag)",
                border: "1px solid var(--border-tag)",
                color: "var(--text-muted)",
              }}
            >
              3 Páginas
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs transition-colors cursor-pointer"
              style={{
                backgroundColor: "var(--btn-sec-bg)",
                border: "1px solid var(--btn-sec-border)",
                color: "var(--btn-sec-text)",
              }}
              title={`Modo actual: ${themeMode === "system" ? "Sistema (Auto)" : themeMode === "dark" ? "Oscuro" : "Claro"}. Clic para cambiar.`}
            >
              <i className={`bx ${themeMode === "system" ? "bx-desktop" : isDark ? "bx-moon" : "bx-sun"} text-sm`} />
              <span className="hidden sm:inline">
                {themeMode === "system" ? "Auto" : isDark ? "Oscuro" : "Claro"}
              </span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors cursor-pointer"
              style={{
                backgroundColor: "var(--btn-sec-bg)",
                border: "1px solid var(--btn-sec-border)",
                color: "var(--btn-sec-text)",
              }}
              title="Imprimir o Guardar en PDF"
            >
              <i className="bx bx-printer text-sm" />
              <span>Imprimir / PDF</span>
            </button>

            {cvDownload?.href && cvDownload.href !== "#" && (
              <a
                href={cvDownload.href}
                download={cvDownload.fileName}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <i className="bx bx-download text-sm" />
                <span>Descargar</span>
              </a>
            )}

            <div className="h-4 w-px hidden sm:block" style={{ backgroundColor: "var(--border-subtle)" }} />

            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.title}
                  className="transition-colors hover:opacity-80"
                  style={{ color: "var(--text-muted)" }}
                >
                  <i className={`bx ${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Workspace de Documentos / Hojas A4 */}
      <div className="mx-auto max-w-[210mm] px-2 sm:px-0 pt-6 sm:pt-10 space-y-10">
        
        {/* ========================================================= */}
        {/* PÁGINA 1 DE 3 */}
        {/* ========================================================= */}
        <section id="pagina-1" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5">
            {/* Encabezado (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2.5 text-[11px] border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                PÁGINA 1 / 3
              </span>
            </div>

            {/* Header del CV */}
            <div className="space-y-2">
              <div
                className="inline-flex items-center gap-2 rounded-md px-2 py-0.5 text-[11px]"
                style={{
                  backgroundColor: "var(--bg-tag)",
                  border: "1px solid var(--border-tag)",
                  color: "var(--text-secondary)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Liderazgo Técnico &middot; Optimización Operativa &middot; 10+ Años</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "var(--text-primary)" }}>
                {profile.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                {profile.title} &mdash; Chiclayo, Perú
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                {contacts.map((c) => (
                  <span key={c.text} className="inline-flex items-center gap-1.5">
                    <i className={`bx ${c.icon}`} style={{ color: "var(--text-muted)" }} />
                    <span>{c.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Indicadores Clave (KPIs) */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {executiveKpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded p-2"
                  style={{
                    backgroundColor: "var(--bg-kpi)",
                    border: "1px solid var(--border-tag)",
                  }}
                >
                  <p className="text-xs sm:text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    {kpi.value}
                  </p>
                  <p className="text-[10px] mt-0.5 leading-tight" style={{ color: "var(--text-muted)" }}>
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Resumen Profesional */}
            <div className="space-y-1.5">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                1. Resumen Profesional
              </h2>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {aboutText}
              </p>
            </div>

            {/* Pilares de Especialidad */}
            <div className="space-y-2">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                2. Pilares de Especialidad & Optimización Operativa
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {pilaresEspecialidad.map((pilar) => (
                  <div
                    key={pilar.title}
                    className="rounded p-2.5 space-y-1"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <h3 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                      {pilar.title}
                    </h3>
                    <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {pilar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Posición Actual de Liderazgo */}
            <div className="space-y-1.5">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                3. Trayectoria Profesional (Inicio)
              </h2>
              <div
                className="rounded p-3 space-y-1.5"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                    {experience[0].role}{" "}
                    <span className="font-normal" style={{ color: "var(--text-muted)" }}>
                      &mdash; {experience[0].company}
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
                    {experience[0].date}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {experience[0].description}
                </p>
                <ul className="grid gap-0.5 pt-0.5 text-[10px] sm:grid-cols-2" style={{ color: "var(--text-muted)" }}>
                  {experience[0].achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-1.5">
                      <span style={{ color: "var(--text-dim)" }}>&bull;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pie de página 1 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE</span>
            <span>PÁGINA 1 DE 3</span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PÁGINA 2 DE 3 */}
        {/* ========================================================= */}
        <section id="pagina-2" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5">
            {/* Encabezado (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2.5 text-[11px] border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                PÁGINA 2 / 3
              </span>
            </div>

            {/* Continuación de Trayectoria */}
            <div className="space-y-2.5">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                3. Trayectoria Profesional (Continuación)
              </h2>
              <div className="space-y-2">
                {experience.slice(1).map((item) => (
                  <div
                    key={`${item.role}-${item.date}`}
                    className="rounded p-2.5 space-y-1"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                        {item.role}{" "}
                        <span className="font-normal" style={{ color: "var(--text-muted)" }}>
                          &mdash; {item.company}
                        </span>
                      </h3>
                      <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
                        {item.date}
                      </span>
                    </div>
                    <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                    {item.achievements?.length > 0 && (
                      <ul className="grid gap-0.5 pt-0.5 text-[10px] sm:grid-cols-2" style={{ color: "var(--text-muted)" }}>
                        {item.achievements.map((ach) => (
                          <li key={ach} className="flex items-start gap-1.5">
                            <span style={{ color: "var(--text-dim)" }}>&bull;</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sistemas de Misión Crítica & Arquitectura */}
            <div className="space-y-2.5">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                4. Sistemas de Misión Crítica & Arquitectura Implementada
              </h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {projects.map((p) => {
                  const diagrama = diagramasPorProyecto[p.title];
                  return (
                    <div
                      key={p.title}
                      className="rounded p-2.5 flex flex-col justify-between space-y-1.5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div>
                        <h3 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                          {p.title}
                        </h3>
                        <p className="text-[10px] leading-relaxed mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {p.description}
                        </p>
                        {p.impact && (
                          <p className="text-[9px] mt-1 font-medium text-emerald-600 dark:text-emerald-400">
                            &rarr; {p.impact}
                          </p>
                        )}
                        {diagrama && (
                          <div
                            className="mt-1 rounded px-1.5 py-0.5 text-[8.5px] font-mono"
                            style={{
                              backgroundColor: "var(--bg-tag)",
                              border: "1px solid var(--border-tag)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {diagrama.entrada} &rarr; {diagrama.nucleo} &rarr; {diagrama.salida}
                          </div>
                        )}
                      </div>
                      <div
                        className="flex flex-wrap gap-1 pt-1 border-t"
                        style={{ borderColor: "var(--border-subtle)" }}
                      >
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded px-1 text-[8.5px]"
                            style={{
                              backgroundColor: "var(--bg-tag)",
                              border: "1px solid var(--border-tag)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pie de página 2 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE</span>
            <span>PÁGINA 2 DE 3</span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PÁGINA 3 DE 3 */}
        {/* ========================================================= */}
        <section id="pagina-3" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5">
            {/* Encabezado (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2.5 text-[11px] border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                PÁGINA 3 / 3
              </span>
            </div>

            {/* Competencias Técnicas & Gobierno de Stack */}
            <div className="space-y-2.5">
              <h2
                className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                5. Competencias Técnicas & Gobierno de Stack
              </h2>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded px-2.5 py-1 text-xs"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span className="text-[11px]" style={{ color: "var(--text-primary)" }}>
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
              {additionalSkills?.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1.5">
                  {additionalSkills.map((s) => (
                    <span
                      key={s}
                      className="rounded px-1.5 py-0.5 text-[9.5px]"
                      style={{
                        backgroundColor: "var(--bg-tag)",
                        border: "1px solid var(--border-tag)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Educación & Certificaciones */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2.5">
                <h2
                  className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                  style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
                >
                  6. Educación Superior
                </h2>
                <div className="space-y-2">
                  {education.map((item) => (
                    <div
                      key={`${item.title}-${item.date}`}
                      className="rounded p-2.5 space-y-0.5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <h3 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                        {item.institution}
                      </p>
                      <p className="text-[9.5px] font-mono" style={{ color: "var(--text-muted)" }}>
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <h2
                  className="text-xs font-bold tracking-wider uppercase pb-1 border-b"
                  style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
                >
                  7. Certificaciones Internacionales
                </h2>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded p-2 text-xs space-y-0.5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <h3 className="font-semibold text-[10.5px]" style={{ color: "var(--text-primary)" }}>
                        {cert.title}
                      </h3>
                      <p className="text-[9.5px]" style={{ color: "var(--text-muted)" }}>
                        {cert.issuer} &bull; {cert.issued}
                      </p>
                      {cert.certificateUrl && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-[9.5px] underline hover:opacity-80"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Ver credencial
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Declaración & Canales Profesionales */}
            <div
              className="space-y-2 pt-3 border-t"
              style={{ borderColor: "var(--border-section)" }}
            >
              <h2
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                8. Canales de Contacto & Disponibilidad
              </h2>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:opacity-80"
                      style={{ color: "var(--text-primary)" }}
                    >
                      [{s.title}]
                    </a>
                  ))}
                </div>
                <span className="text-[10.5px]" style={{ color: "var(--text-muted)" }}>
                  Disponibilidad para Liderazgo y Consultoría Directiva
                </span>
              </div>
            </div>
          </div>

          {/* Pie de página 3 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE &copy; {new Date().getFullYear()}</span>
            <span>PÁGINA 3 DE 3</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
