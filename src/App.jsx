import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AdditionalSkillsSection from "./components/AdditionalSkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import { cvDownload } from "./data/cvData";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fbff_0%,#edf3f8_42%,#e5ebf2_100%)] px-4 py-6 font-[Poppins] text-slate-800 antialiased transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,#1e293b_0%,#111827_42%,#0b1120_100%)] dark:text-slate-200 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/90 md:grid-cols-[320px_1fr]">
          <Sidebar
            isDark={isDark}
            onToggleTheme={() => setIsDark((current) => !current)}
            cvDownload={cvDownload}
          />

          <main className="bg-white/80 px-5 py-6 transition-colors duration-300 dark:bg-slate-900/70 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
            <div className="space-y-10 lg:space-y-12">
              <AboutSection />
              <ExperienceSection />
              <EducationSection />
              <CertificationsSection />
              <ProjectsSection />
              <AdditionalSkillsSection />
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
