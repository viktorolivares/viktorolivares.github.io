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
    icon: "bx-git-repo-forked",
    title: "Dirección Técnica & Liderazgo de Equipos",
    desc: "Mentoría de desarrolladores, definición de estándares de ingeniería de software, marcos ágiles y ejecución de soluciones de alto rendimiento.",
  },
  {
    icon: "bx-shield-quarter",
    title: "Gestión de Riesgo & Prevención de Fraude",
    desc: "Diseño e implementación de sistemas de alta criticidad para salvaguardar activos transaccionales, auditoría y control de pérdidas operativas.",
  },
  {
    icon: "bx-server",
    title: "Arquitectura Empresarial & Escalabilidad",
    desc: "Gobierno de arquitecturas distribuidas, APIs de alta disponibilidad, integración con pasarelas financieras y continuidad operativa 24/7.",
  },
  {
    icon: "bx-brain",
    title: "Eficiencia Operativa & Automatización con IA",
    desc: "Optimización de costos operativos (OpEx) mediante automatización de procesos core, agentes inteligentes y analítica avanzada de datos.",
  },
];

const diagramasPorProyecto = {
  "Plataforma de Prevención de Fraude": {
    entrada: "Transacciones",
    nucleo: "Motor de Reglas & IA",
    salida: "Alertas y Bloqueo",
  },
  "Plataforma de Monitoreo CCTV & Seguridad": {
    entrada: "DVRs / Señales",
    nucleo: "Central de Monitoreo",
    salida: "Alertas en Tiempo Real",
  },
  "Backend de Recaudadores Financieros": {
    entrada: "Recaudadores",
    nucleo: "Conciliación Contable",
    salida: "Liquidación Bancaria",
  },
  "Sistema de Facturación Electrónica SUNAT": {
    entrada: "Comprobantes XML",
    nucleo: "Validación SUNAT",
    salida: "Emisión & Reportes",
  },
  "Captura & Conciliación de Notificaciones (Yape / BBVA)": {
    entrada: "Notificaciones",
    nucleo: "Listener Android",
    salida: "Validación de Saldo",
  },
};

const seccionesNav = [
  { id: "resumen", label: "Resumen Ejecutivo", icon: "bx-user" },
  { id: "pilares", label: "Pilares Estratégicos", icon: "bx-layer" },
  { id: "trayectoria", label: "Trayectoria Profesional", icon: "bx-briefcase-alt-2" },
  { id: "proyectos", label: "Misión Crítica & Arquitectura", icon: "bx-chip" },
  { id: "skills", label: "Competencias & Stack", icon: "bx-code-alt" },
  { id: "educacion", label: "Educación & Certificaciones", icon: "bx-certification" },
  { id: "contacto", label: "Canales de Contacto", icon: "bx-conversation" },
];

const HomePage = () => {
  const [themeMode, setThemeMode] = useState("system"); // 'system' | 'dark' | 'light'
  const [isDark, setIsDark] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(null);

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

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(`${label} copiado`);
    setTimeout(() => setCopyFeedback(null), 2400);
  };

  const scrollToSection = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen antialiased pb-24 lg:pb-16 transition-colors selection:bg-zinc-800 selection:text-white"
      style={{ backgroundColor: "var(--bg-workspace)", color: "var(--text-primary)" }}
    >
      {/* Toast de Notificación de Copiado */}
      {copyFeedback && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 rounded-full px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-md transition-all animate-bounce bg-zinc-900 text-zinc-100 border border-zinc-700">
          <span className="flex items-center gap-1.5">
            <i className="bx bx-check-circle text-emerald-400 text-sm" />
            {copyFeedback}
          </span>
        </div>
      )}

      {/* ========================================================= */}
      {/* BARRA SUPERIOR ESTILO VISOR DIRECTIVO (DESKTOP & MOBILE)   */}
      {/* ========================================================= */}
      <header
        className="no-print sticky top-0 z-40 border-b px-3 sm:px-6 py-2.5 sm:py-3 backdrop-blur-md transition-colors"
        style={{ backgroundColor: "var(--bg-toolbar)", borderColor: "var(--border-page)" }}
      >
        <div className="mx-auto max-w-[210mm] flex items-center justify-between gap-2">
          {/* Identificador de Documento */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <i className="bx bxs-file-doc text-lg" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs sm:text-sm truncate" style={{ color: "var(--text-primary)" }}>
                  Victor_Olivares_CV.pdf
                </span>
                <span
                  className="hidden sm:inline-flex rounded px-1.5 py-0.5 text-[10px] font-mono"
                  style={{
                    backgroundColor: "var(--bg-tag)",
                    border: "1px solid var(--border-tag)",
                    color: "var(--text-muted)",
                  }}
                >
                  Dossier Ejecutivo
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] truncate" style={{ color: "var(--text-muted)" }}>
                Liderazgo TI &bull; Optimización Operativa
              </p>
            </div>
          </div>

          {/* Acciones de Cabecera */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Botón de Índice de Secciones (Visible en Desktop y Tablet) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer"
              style={{
                backgroundColor: "var(--btn-sec-bg)",
                border: "1px solid var(--btn-sec-border)",
                color: "var(--btn-sec-text)",
              }}
              title="Ver índice de secciones"
              aria-label="Abrir menú de navegación"
            >
              <i className="bx bx-list-ul text-base" />
              <span className="hidden md:inline">Índice</span>
            </button>

            {/* Selector de Tema */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 sm:w-auto sm:px-2.5 sm:gap-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              style={{
                backgroundColor: "var(--btn-sec-bg)",
                border: "1px solid var(--btn-sec-border)",
                color: "var(--btn-sec-text)",
              }}
              title={`Modo actual: ${themeMode === "system" ? "Sistema (Auto)" : themeMode === "dark" ? "Oscuro" : "Claro"}. Clic para cambiar.`}
              aria-label="Cambiar tema visual"
            >
              <i className={`bx ${themeMode === "system" ? "bx-desktop" : isDark ? "bx-moon" : "bx-sun"} text-base`} />
              <span className="hidden sm:inline text-xs">
                {themeMode === "system" ? "Auto" : isDark ? "Oscuro" : "Claro"}
              </span>
            </button>

            {/* Botón Imprimir / PDF */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer"
              style={{
                backgroundColor: "var(--btn-sec-bg)",
                border: "1px solid var(--btn-sec-border)",
                color: "var(--btn-sec-text)",
              }}
              title="Imprimir o Guardar como PDF"
            >
              <i className="bx bx-printer text-base" />
              <span>Imprimir / PDF</span>
            </button>

            {/* Botón Descargar CV */}
            {cvDownload?.href && cvDownload.href !== "#" && (
              <a
                href={cvDownload.href}
                download={cvDownload.fileName}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold shadow-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <i className="bx bx-download text-base" />
                <span className="hidden sm:inline">Descargar</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* DRAWER / MODAL DE ÍNDICE DE SECCIONES (TOUCH-FRIENDLY)     */}
      {/* ========================================================= */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
          <div
            className="w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl border shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom"
            style={{
              backgroundColor: "var(--bg-page)",
              borderColor: "var(--border-page)",
              color: "var(--text-primary)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex items-center gap-2">
                <i className="bx bx-compass text-lg text-blue-500" />
                <span className="font-bold text-sm">Índice del Documento</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-zinc-500/10 cursor-pointer text-base"
                style={{ color: "var(--text-muted)" }}
                aria-label="Cerrar índice"
              >
                <i className="bx bx-x" />
              </button>
            </div>

            <div className="space-y-1.5">
              {seccionesNav.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer hover:bg-zinc-500/10"
                  style={{ color: "var(--text-primary)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-500 font-semibold">0{idx + 1}.</span>
                    <i className={`bx ${sec.icon} text-base text-zinc-400`} />
                    <span>{sec.label}</span>
                  </div>
                  <i className="bx bx-chevron-right text-base text-zinc-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t flex items-center justify-between text-xs" style={{ borderColor: "var(--border-subtle)" }}>
              <span style={{ color: "var(--text-muted)" }}>Victor Olivares &bull; Portafolio</span>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1 font-semibold text-blue-500 hover:underline cursor-pointer"
              >
                <i className="bx bx-printer" />
                <span>Exportar PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* WORKSPACE DE DOCUMENTOS / HOJAS A4 EJECUTIVAS              */}
      {/* ========================================================= */}
      <main className="mx-auto max-w-[210mm] px-3 sm:px-4 lg:px-0 pt-4 sm:pt-8 space-y-6 sm:space-y-10">
        
        {/* ========================================================= */}
        {/* PÁGINA 1: RESUMEN, KPIS, PILARES & INICIO TRAYECTORIA      */}
        {/* ========================================================= */}
        <section id="pagina-1" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5 sm:space-y-6">
            {/* Encabezado de Documento (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2 text-[11px] font-mono border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                SECCIÓN 1 / 3
              </span>
            </div>

            {/* Header del Perfil Ejecutivo */}
            <div className="space-y-3">
              {/* Badge de Disponibilidad y Experiencia */}
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-tag)",
                    border: "1px solid var(--border-tag)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>10+ Años en TI &bull; Liderazgo de Alto Impacto</span>
                </div>
              </div>

              {/* Nombre y Título Directivo */}
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {profile.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                  {profile.title} &mdash; Chiclayo, Perú
                </p>
              </div>

              {/* Contactos Interactivos con Touch-Targets Cómodos */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                {/* Teléfono Clickeable */}
                <a
                  href={`tel:${contacts[0].text.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-zinc-500/10 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-tag)",
                    border: "1px solid var(--border-tag)",
                    color: "var(--text-secondary)",
                  }}
                  title="Llamar directamente"
                >
                  <i className="bx bx-phone text-emerald-500 text-sm" />
                  <span>{contacts[0].text}</span>
                </a>

                {/* Email Clickeable con opción de copiar */}
                <a
                  href={`mailto:${contacts[1].text}`}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-zinc-500/10 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-tag)",
                    border: "1px solid var(--border-tag)",
                    color: "var(--text-secondary)",
                  }}
                  title="Enviar correo"
                >
                  <i className="bx bx-envelope text-blue-500 text-sm" />
                  <span>{contacts[1].text}</span>
                </a>

                {/* Ubicación */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-tag)",
                    border: "1px solid var(--border-tag)",
                    color: "var(--text-muted)",
                  }}
                >
                  <i className="bx bx-map text-red-400 text-sm" />
                  <span>{contacts[2].text}</span>
                </span>

                {/* Redes Profesionales Directas */}
                <div className="flex items-center gap-1.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.title}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: "var(--bg-tag)",
                        border: "1px solid var(--border-tag)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <i className={`bx ${s.icon} text-sm`} />
                      <span className="hidden sm:inline">{s.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicadores Clave de Desempeño (Executive KPIs) */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-3 sm:py-4 border-y"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {executiveKpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl p-3 sm:p-3.5 flex flex-col justify-center transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-kpi)",
                    border: "1px solid var(--border-tag)",
                  }}
                >
                  <p className="font-mono text-sm sm:text-base lg:text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400">
                    {kpi.value}
                  </p>
                  <p className="text-[11px] sm:text-xs mt-1 leading-snug font-medium" style={{ color: "var(--text-muted)" }}>
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>

            {/* 01. Resumen Profesional */}
            <section id="resumen" className="space-y-2 scroll-mt-16">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">01.</span>
                <span>Resumen Profesional & Propuesta de Valor</span>
              </h2>
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-justify" style={{ color: "var(--text-secondary)" }}>
                {aboutText}
              </p>
            </section>

            {/* 02. Pilares de Especialidad */}
            <section id="pilares" className="space-y-2.5 scroll-mt-16">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">02.</span>
                <span>Pilares de Especialidad & Optimización Operativa</span>
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {pilaresEspecialidad.map((pilar) => (
                  <div
                    key={pilar.title}
                    className="rounded-xl p-3 sm:p-3.5 space-y-1.5 transition-all hover:border-zinc-500/40"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 text-sm">
                        <i className={`bx ${pilar.icon}`} />
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>
                        {pilar.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {pilar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Trayectoria Profesional (Posición de Liderazgo Actual) */}
            <section id="trayectoria" className="space-y-2 scroll-mt-16">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">03.</span>
                <span>Trayectoria Profesional (Posición Actual de Liderazgo)</span>
              </h2>
              <div
                className="rounded-xl p-3.5 sm:p-4 space-y-2"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    {experience[0].role}{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      &mdash; {experience[0].company}
                    </span>
                  </h3>
                  <span
                    className="rounded px-2 py-0.5 text-[10px] font-mono font-medium"
                    style={{
                      backgroundColor: "var(--bg-tag)",
                      border: "1px solid var(--border-tag)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {experience[0].date}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {experience[0].description}
                </p>
                <div className="pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                    Principales Logros & Responsabilidades:
                  </p>
                  <ul className="grid gap-1 sm:gap-1.5 text-xs sm:text-[12.5px] sm:grid-cols-2" style={{ color: "var(--text-secondary)" }}>
                    {experience[0].achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <i className="bx bx-check text-emerald-500 mt-0.5 shrink-0 text-sm" />
                        <span className="leading-snug">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Pie de página 1 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] font-mono border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE</span>
            <span>PÁGINA 1 DE 3</span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PÁGINA 2: CONTINUACIÓN TRAYECTORIA & ARQUITECTURA          */}
        {/* ========================================================= */}
        <section id="pagina-2" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5 sm:space-y-6">
            {/* Encabezado de Documento (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2 text-[11px] font-mono border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                SECCIÓN 2 / 3
              </span>
            </div>

            {/* Continuación de Trayectoria */}
            <div className="space-y-2.5">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">03.</span>
                <span>Trayectoria Profesional (Continuación)</span>
              </h2>
              <div className="space-y-2.5">
                {experience.slice(1).map((item) => (
                  <div
                    key={`${item.role}-${item.date}`}
                    className="rounded-xl p-3 sm:p-3.5 space-y-1.5"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                      <h3 className="text-xs sm:text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>
                        {item.role}{" "}
                        <span className="font-medium text-blue-600 dark:text-blue-400">
                          &mdash; {item.company}
                        </span>
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                        {item.date}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                    {item.achievements?.length > 0 && (
                      <ul className="grid gap-1 pt-1 text-[11px] sm:text-xs sm:grid-cols-2" style={{ color: "var(--text-muted)" }}>
                        {item.achievements.map((ach) => (
                          <li key={ach} className="flex items-start gap-1.5">
                            <span className="text-blue-500 font-bold">&rsaquo;</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 04. Sistemas de Misión Crítica & Arquitectura Implementada */}
            <section id="proyectos" className="space-y-2.5 scroll-mt-16">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">04.</span>
                <span>Sistemas de Misión Crítica & Arquitectura Implementada</span>
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {projects.map((p) => {
                  const diagrama = diagramasPorProyecto[p.title];
                  return (
                    <div
                      key={p.title}
                      className="rounded-xl p-3 sm:p-3.5 flex flex-col justify-between space-y-2 transition-all hover:border-zinc-500/40"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div>
                        <h3 className="text-xs sm:text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>
                          {p.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs leading-relaxed mt-1" style={{ color: "var(--text-secondary)" }}>
                          {p.description}
                        </p>
                        {p.impact && (
                          <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                            <i className="bx bx-trending-up text-sm" />
                            <span>{p.impact}</span>
                          </div>
                        )}
                        {diagrama && (
                          <div
                            className="mt-2 rounded-lg px-2.5 py-1 text-[10px] sm:text-[10.5px] font-mono flex items-center justify-between gap-1 overflow-x-auto"
                            style={{
                              backgroundColor: "var(--bg-tag)",
                              border: "1px solid var(--border-tag)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <span className="font-semibold text-blue-500 truncate">{diagrama.entrada}</span>
                            <span style={{ color: "var(--text-dim)" }}>&rarr;</span>
                            <span className="font-semibold text-amber-500 truncate">{diagrama.nucleo}</span>
                            <span style={{ color: "var(--text-dim)" }}>&rarr;</span>
                            <span className="font-semibold text-emerald-500 truncate">{diagrama.salida}</span>
                          </div>
                        )}
                      </div>
                      <div
                        className="flex flex-wrap gap-1 pt-1.5 border-t"
                        style={{ borderColor: "var(--border-subtle)" }}
                      >
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded px-1.5 py-0.5 text-[9.5px] sm:text-[10px] font-mono"
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
            </section>
          </div>

          {/* Pie de página 2 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] font-mono border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE</span>
            <span>PÁGINA 2 DE 3</span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PÁGINA 3: STACK, EDUCACIÓN, CERTIFICACIONES & CONTACTO     */}
        {/* ========================================================= */}
        <section id="pagina-3" className="a4-page">
          <div className="flex-1 flex flex-col justify-start space-y-5 sm:space-y-6">
            {/* Encabezado de Documento (Oculto en Impresión) */}
            <div
              className="no-print flex items-center justify-between pb-2 text-[11px] font-mono border-b"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <span>VICTOR OLIVARES YAMUNAQUE &mdash; CURRICULUM VITAE</span>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                SECCIÓN 3 / 3
              </span>
            </div>

            {/* 05. Competencias Técnicas & Gobierno de Stack */}
            <section id="skills" className="space-y-2.5 scroll-mt-16">
              <h2
                className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
              >
                <span className="font-mono text-blue-500">05.</span>
                <span>Competencias Técnicas & Gobierno de Stack</span>
              </h2>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span className="font-medium text-[11px] sm:text-xs" style={{ color: "var(--text-primary)" }}>
                      {skill.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
              {additionalSkills?.length > 0 && (
                <div className="space-y-1 pt-1">
                  <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Habilidades de Gestión Directiva & Operaciones:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {additionalSkills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md px-2 py-0.5 text-[10px] sm:text-[11px] font-medium"
                        style={{
                          backgroundColor: "var(--bg-tag)",
                          border: "1px solid var(--border-tag)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 06. Educación & Certificaciones */}
            <section id="educacion" className="grid gap-4 sm:grid-cols-2 scroll-mt-16">
              {/* Educación */}
              <div className="space-y-2">
                <h2
                  className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                  style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
                >
                  <span className="font-mono text-blue-500">06.</span>
                  <span>Educación Superior</span>
                </h2>
                <div className="space-y-2">
                  {education.map((item) => (
                    <div
                      key={`${item.title}-${item.date}`}
                      className="rounded-xl p-3 space-y-0.5"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <h3 className="text-xs sm:text-[12.5px] font-bold" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>
                        {item.institution}
                      </p>
                      <p className="text-[10px] font-mono" style={{ color: "var(--text-muted)" }}>
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificaciones */}
              <div className="space-y-2">
                <h2
                  className="text-xs sm:text-sm font-bold tracking-wider uppercase pb-1.5 border-b flex items-center gap-2"
                  style={{ borderColor: "var(--border-section)", color: "var(--text-primary)" }}
                >
                  <span className="font-mono text-blue-500">07.</span>
                  <span>Certificaciones Globales</span>
                </h2>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded-xl p-2.5 space-y-1"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <h3 className="font-bold text-[11px] sm:text-xs" style={{ color: "var(--text-primary)" }}>
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-[10px]" style={{ color: "var(--text-muted)" }}>
                        <span>
                          {cert.issuer} &bull; {cert.issued}
                        </span>
                        {cert.certificateUrl && (
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-blue-500 hover:underline flex items-center gap-0.5"
                          >
                            <span>Verificar</span>
                            <i className="bx bx-link-external text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 07. Canales de Contacto Directo & Disponibilidad */}
            <section id="contacto" className="space-y-3 pt-3 border-t scroll-mt-16" style={{ borderColor: "var(--border-section)" }}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2
                  className="text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="font-mono text-blue-500">08.</span>
                  <span>Canales de Contacto & Disponibilidad</span>
                </h2>
                <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  &bull; Disponibilidad Inmediata para Posiciones Directivas
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {/* Contacto Directo 1: Llamar */}
                <a
                  href={`tel:${contacts[0].text.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 rounded-xl p-3 transition-all hover:bg-zinc-500/10 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 text-lg shrink-0">
                    <i className="bx bx-phone-call" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-semibold" style={{ color: "var(--text-muted)" }}>Teléfono Directo</p>
                    <p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>{contacts[0].text}</p>
                  </div>
                </a>

                {/* Contacto Directo 2: Email */}
                <a
                  href={`mailto:${contacts[1].text}`}
                  className="flex items-center gap-2.5 rounded-xl p-3 transition-all hover:bg-zinc-500/10 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-lg shrink-0">
                    <i className="bx bx-envelope" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-semibold" style={{ color: "var(--text-muted)" }}>Correo Electrónico</p>
                    <p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>{contacts[1].text}</p>
                  </div>
                </a>

                {/* Contacto Directo 3: LinkedIn */}
                <a
                  href={socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl p-3 transition-all hover:bg-zinc-500/10 cursor-pointer"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 text-lg shrink-0">
                    <i className="bx bxl-linkedin" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-semibold" style={{ color: "var(--text-muted)" }}>Red Profesional</p>
                    <p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>LinkedIn Perfil</p>
                  </div>
                </a>
              </div>
            </section>
          </div>

          {/* Pie de página 3 (Oculto en Impresión) */}
          <div
            className="no-print mt-auto pt-3 flex items-center justify-between text-[10px] font-mono border-t"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <span>CURRICULUM VITAE PROFESIONAL &middot; VICTOR OLIVARES YAMUNAQUE &copy; {new Date().getFullYear()}</span>
            <span>PÁGINA 3 DE 3</span>
          </div>
        </section>

      </main>

      {/* ========================================================= */}
      {/* BARRA FLOTANTE INFERIOR (TOUCH-FRIENDLY QUICK ACTIONS)     */}
      {/* Visible en Móvil y Tablet para máxima ergonomía pulgar     */}
      {/* ========================================================= */}
      <div className="no-print fixed bottom-3 inset-x-3 sm:inset-x-6 z-40 lg:hidden">
        <nav
          className="mx-auto max-w-lg rounded-2xl border shadow-2xl p-2 backdrop-blur-xl flex items-center justify-around gap-1"
          style={{
            backgroundColor: "var(--bg-mobile-nav)",
            borderColor: "var(--border-page)",
            boxShadow: "0 10px 30px -5px rgba(0,0,0,0.3)",
          }}
          aria-label="Barra de acciones rápidas móviles"
        >
          {/* Acción 1: Llamar */}
          <a
            href={`tel:${contacts[0].text.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-xl transition-all active:scale-95 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <i className="bx bx-phone text-xl text-emerald-500" />
            <span className="text-[10px] font-semibold mt-0.5">Llamar</span>
          </a>

          {/* Acción 2: WhatsApp */}
          <a
            href="https://wa.me/51963310898?text=Hola%20Victor,%20vi%20tu%20perfil%20profesional%20y%20me%20gustaría%20conversar."
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-xl transition-all active:scale-95 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <i className="bx bxl-whatsapp text-xl text-emerald-400" />
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Acción 3: Email */}
          <a
            href={`mailto:${contacts[1].text}`}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-xl transition-all active:scale-95 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <i className="bx bx-envelope text-xl text-blue-500" />
            <span className="text-[10px] font-semibold mt-0.5">Email</span>
          </a>

          {/* Acción 4: Índice / Secciones */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-xl transition-all active:scale-95 text-center cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Abrir índice de secciones"
          >
            <i className="bx bx-compass text-xl text-amber-500" />
            <span className="text-[10px] font-semibold mt-0.5">Índice</span>
          </button>

          {/* Acción 5: Compartir / Copiar */}
          <button
            onClick={() => handleCopy(window.location.href, "Enlace del portafolio")}
            className="flex flex-col items-center justify-center h-12 flex-1 rounded-xl transition-all active:scale-95 text-center cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Copiar enlace del portafolio"
          >
            <i className="bx bx-share-alt text-xl text-purple-400" />
            <span className="text-[10px] font-semibold mt-0.5">Compartir</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;

