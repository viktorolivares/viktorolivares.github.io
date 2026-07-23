import profileImage from "../assets/img/profile.jpg";
import {
  contacts,
  profile,
  socialLinks,
  technicalSkills,
} from "../data/cvData";

const Sidebar = ({ isDark, onToggleTheme, cvDownload }) => {
  return (
    <aside className="bg-[linear-gradient(180deg,#0f172a_0%,#162136_100%)] px-6 py-8 text-white sm:px-8 md:min-h-full md:px-7 lg:px-8 lg:py-10">
      <div className="border-b border-white/10 pb-8 text-center">
        <div className="mb-5 flex justify-center">
          <div className="h-28 w-28 overflow-hidden rounded-[28px] bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] ring-1 ring-white/10 sm:h-32 sm:w-32">
            <img
              src={profileImage}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h1 className="mb-2 text-[1.75rem] leading-tight font-semibold tracking-[-0.03em] text-white sm:text-[1.95rem]">
          {profile.name}
        </h1>
        <p className="mx-auto max-w-[18rem] text-sm leading-6 text-slate-300">
          {profile.title}
        </p>
      </div>

      <div className="border-b border-white/10 py-8">
        <h3 className="mb-5 text-xs font-semibold tracking-[0.28em] text-slate-400 uppercase">
          Contacto
        </h3>
        {contacts.map((contact) => (
          <div
            className="mb-4 flex items-center gap-3.5 text-sm text-slate-200"
            key={contact.text}
          >
            <i
              className={`bx ${contact.icon} flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-[1.2rem] text-sky-400`}
            ></i>
            <span className="min-w-0 wrap-break-word leading-6">
              {contact.text}
            </span>
          </div>
        ))}
      </div>

      <div className="border-b border-white/10 py-8">
        <h3 className="mb-5 text-xs font-semibold tracking-[0.28em] text-slate-400 uppercase">
          Habilidades Tecnicas
        </h3>
        {technicalSkills.map((skill) => (
          <div className="mb-5" key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-[0.92rem] font-medium text-slate-100">
                {skill.name}
              </span>
              <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-sky-400 via-sky-500 to-cyan-300 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-b border-white/10 py-8">
        <h3 className="mb-5 text-xs font-semibold tracking-[0.28em] text-slate-400 uppercase">
          Redes Sociales
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              href={social.href}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/15 hover:text-sky-300"
              title={social.title}
              key={social.title}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`bx ${social.icon} text-[1.4rem]`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-3 py-8">
        <button
          type="button"
          onClick={onToggleTheme}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-300 hover:bg-white/10"
        >
          <i className={`bx ${isDark ? "bx-sun" : "bx-moon"} text-lg`}></i>
          {isDark ? "Modo claro" : "Modo oscuro"}
        </button>

        <a
          href={cvDownload.href}
          download={cvDownload.fileName}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-400"
        >
          <span className="inline-flex">
            <i className="bx bx-download text-lg"></i>
          </span>
          Descargar CV
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
