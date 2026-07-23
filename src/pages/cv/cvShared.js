export const sectionPalette = {
  profile: { primary: "#0ea5e9", secondary: "#14b8a6" },
  experience: { primary: "#0284c7", secondary: "#22d3ee" },
  education: { primary: "#0369a1", secondary: "#67e8f9" },
  certifications: { primary: "#0f766e", secondary: "#2dd4bf" },
  projects: { primary: "#0891b2", secondary: "#38bdf8" },
  skills: { primary: "#0ea5e9", secondary: "#5eead4" },
};

export const sections = [
  {
    id: "profile",
    label: "Perfil Profesional",
    v1Label: "Perfil Profesional",
    icon: "bx-terminal",
    stack: "Perfil.Resumen",
    v1Stack: "Perfil.Resumen",
  },
  {
    id: "experience",
    label: "Experiencia Laboral",
    v1Label: "Experiencia",
    icon: "bx-joystick",
    stack: "Trayectoria.Cronologica",
    v1Stack: "Trayectoria.Cronologica",
  },
  {
    id: "education",
    label: "Formacion Academica",
    v1Label: "Educacion",
    icon: "bx-network-chart",
    stack: "Formacion.Academica",
    v1Stack: "Formacion.Academica",
  },
  {
    id: "certifications",
    label: "Certificaciones",
    v1Label: "Certificaciones",
    icon: "bx-medal",
    stack: "Credenciales.Verificables",
    v1Stack: "Credenciales.Verificables",
  },
  {
    id: "projects",
    label: "Proyectos Destacados",
    v1Label: "Proyectos",
    icon: "bx-code-block",
    stack: "Proyectos.Implementados",
    v1Stack: "Proyectos.Implementados",
  },
  {
    id: "skills",
    label: "Competencias Tecnicas",
    v1Label: "Habilidades",
    icon: "bx-chip",
    stack: "Habilidades.Tecnicas",
    v1Stack: "Habilidades.Tecnicas",
  },
];

export const techHudItems = [
  { label: "Docker", icon: "bxl-docker", state: "ONLINE" },
  { label: "Git", icon: "bxl-git", state: "SYNC" },
  { label: "Node", icon: "bxl-nodejs", state: "LIVE" },
  { label: "Cloud", icon: "bx-cloud", state: "READY" },
];

export const achievementCatalog = {
  experience: {
    title: "Experiencia Laboral Actualizada",
    detail: "Se ha actualizado la sección de trayectoria profesional.",
  },
  certifications: {
    title: "Certificaciones Actualizadas",
    detail: "Se han cargado credenciales verificables para revisión.",
  },
  projects: {
    title: "Proyectos Actualizados",
    detail: "Se ha actualizado el portafolio con proyectos destacados.",
  },
};
