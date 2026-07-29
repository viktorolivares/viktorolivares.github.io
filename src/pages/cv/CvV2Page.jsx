import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import AboutSection from "../../components/AboutSection";
import AdditionalSkillsSection from "../../components/AdditionalSkillsSection";
import CertificationsSection from "../../components/CertificationsSection";
import EducationSection from "../../components/EducationSection";
import ExperienceSection from "../../components/ExperienceSection";
import Footer from "../../components/Footer";
import ProjectsSection from "../../components/ProjectsSection";
import Sidebar from "../../components/Sidebar";
import { achievementCatalog, sectionPalette, sections } from "./cvShared";

const sectionComponents = {
  profile: AboutSection,
  experience: ExperienceSection,
  education: EducationSection,
  certifications: CertificationsSection,
  projects: ProjectsSection,
  skills: AdditionalSkillsSection,
};

const CvV2Page = () => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem("sound-enabled") === "true";
  });
  const [activeSection, setActiveSection] = useState("profile");
  const [achievementQueue, setAchievementQueue] = useState([]);
  const unlockedSectionsRef = useRef(new Set());
  const audioContextRef = useRef(null);
  const cursorRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const palette = useMemo(
    () => sectionPalette[activeSection] ?? sectionPalette.profile,
    [activeSection],
  );

  const removeAchievement = (id) => {
    setAchievementQueue((current) =>
      current.filter((entry) => entry.id !== id),
    );
  };

  const pushAchievement = (sectionId, achievement) => {
    const id = `${sectionId}-${Date.now()}`;
    setAchievementQueue((current) => [
      ...current,
      {
        id,
        title: achievement.title,
        detail: achievement.detail,
      },
    ]);

    window.setTimeout(() => {
      removeAchievement(id);
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("sound-enabled", soundEnabled ? "true" : "false");
  }, [soundEnabled]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    const handleMove = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");

      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (target instanceof Element) {
        const computedCursor = window.getComputedStyle(target).cursor;
        const isTextCursor =
          computedCursor === "text" || computedCursor === "vertical-text";
        cursor.classList.toggle("is-text-mode", isTextCursor);
      }
    };

    const handleDown = () => {
      cursor.classList.add("is-pulse");
      window.setTimeout(() => {
        cursor.classList.remove("is-pulse");
      }, 180);
    };

    const handleLeave = () => {
      cursor.classList.remove("is-visible", "is-text-mode");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const playUiTone = (variantTone = "click") => {
    if (!soundEnabled) {
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new window.AudioContext();
    }

    const context = audioContextRef.current;
    if (context.state === "suspended") {
      context.resume();
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = variantTone === "unlock" ? "triangle" : "square";
    oscillator.frequency.value = variantTone === "unlock" ? 620 : 420;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      context.currentTime + (variantTone === "unlock" ? 0.34 : 0.12),
    );
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(
      context.currentTime + (variantTone === "unlock" ? 0.36 : 0.14),
    );
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest("button, a")) {
        playUiTone("click");
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [soundEnabled]);

  useEffect(() => {
    const sectionNodes = Array.from(
      document.querySelectorAll("[data-cv-section]"),
    );
    if (!sectionNodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.75],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => {
      sectionNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const achievement = achievementCatalog[activeSection];
    if (!achievement) {
      return;
    }

    if (unlockedSectionsRef.current.has(activeSection)) {
      return;
    }

    unlockedSectionsRef.current.add(activeSection);
    pushAchievement(activeSection, achievement);
    playUiTone("unlock");
  }, [activeSection]);

  return (
    <div className="dark">
      <div ref={cursorRef} className="reticle-cursor">
        <span className="reticle-core"></span>
      </div>

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-cyan-500"
        style={{ scaleX: progressScaleX }}
      />

      <div className="fixed left-3 top-3 z-50 sm:left-4 sm:top-4">
        <button
          type="button"
          onClick={() => setSoundEnabled((current) => !current)}
          className="rounded-xl border border-slate-200/80 bg-white/85 px-2.5 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-slate-700 uppercase shadow-[0_8px_24px_rgba(15,23,42,0.14)] backdrop-blur transition-colors duration-300 hover:bg-white dark:border-cyan-500/40 dark:bg-slate-900/80 dark:text-cyan-100 dark:hover:bg-slate-900"
          aria-pressed={soundEnabled}
          aria-label={soundEnabled ? "Desactivar sonido" : "Activar sonido"}
        >
          <span className="inline-flex items-center justify-center">
            <i
              className={`bx ${soundEnabled ? "bx-volume-full" : "bx-volume-mute"} text-sm`}
            />
          </span>
        </button>
      </div>

      <div className="pointer-events-none fixed left-3 top-14 sm:left-4 sm:top-16 z-50 flex w-[min(340px,86vw)] flex-col gap-2">
        {achievementQueue.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -18, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -12 }}
            className="rounded-xl border border-emerald-300/70 bg-emerald-50/95 px-3 py-2 text-emerald-900 shadow-[0_10px_26px_rgba(5,150,105,0.2)] dark:border-emerald-400/45 dark:bg-emerald-900/45 dark:text-emerald-100"
          >
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase">
              Actualizacion de Seccion
            </p>
            <p className="mt-0.5 text-sm font-semibold">{entry.title}</p>
            <p className="text-xs opacity-90">{entry.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="min-h-screen bg-slate-950 px-2.5 py-4 font-[JetBrains_Mono] text-slate-200 antialiased transition-colors duration-300 sm:px-6 sm:py-8 lg:px-8">
        <div className="technical-grid"></div>

        <div className="fixed bottom-4 right-4 z-50">
          <Link
            to="/"
            className="rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-cyan-100 uppercase transition-colors hover:bg-cyan-500/25 shadow-lg backdrop-blur-md"
          >
            Inicio
          </Link>
        </div>

        <div
          className="cv-shell mx-auto grid max-w-368 overflow-visible rounded-2xl border border-white/70 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/90 sm:rounded-4xl md:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]"
          style={{
            "--accent-primary": palette.primary,
            "--accent-secondary": palette.secondary,
          }}
        >
          <Sidebar />

          <main className="bg-white/80 px-3.5 py-5 transition-colors duration-300 dark:bg-slate-900/70 sm:px-8 sm:py-8 lg:px-12 lg:py-12 xl:pr-20">
            <div className="space-y-10 lg:space-y-12">
              {sections.map(({ id, icon, stack, label }, index) => {
                const Component = sectionComponents[id];
                return (
                  <motion.section
                    id={id}
                    data-cv-section="true"
                    key={id}
                    className="scroll-mt-24"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-slate-200/75 bg-white/70 px-3 py-2 text-[11px] tracking-[0.12em] text-slate-600 uppercase dark:border-slate-700/70 dark:bg-slate-800/60 dark:text-slate-200">
                      <span className="inline-flex items-center gap-1.5">
                        <i
                          className={`bx ${icon} text-sm text-cyan-600 dark:text-cyan-300`}
                        />
                        {`Sección ${String(index + 1).padStart(2, "0")}: ${label}`}
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-300">
                        {stack}
                      </span>
                    </div>
                    <Component />
                  </motion.section>
                );
              })}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CvV2Page;
