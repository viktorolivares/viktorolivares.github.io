import SectionHeading from "./SectionHeading";
import InteractiveCard from "./InteractiveCard";
import { certifications } from "../data/cvData";

const CertificationsSection = ({ className = "" }) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <SectionHeading icon="bx-certification" title="Certificaciones" />

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <InteractiveCard
            as="article"
            className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 dark:border-slate-700/70 dark:bg-slate-800/80 dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            key={`${certification.title}-${certification.issuer}`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {certification.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  {certification.issuer}
                </p>
              </div>
              {certification.issued ? (
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-700 uppercase dark:border-sky-500/60 dark:bg-sky-500/15 dark:text-sky-300">
                  {certification.issued}
                </span>
              ) : null}
            </div>

            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {certification.credentialId ? (
                <p>
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    Credencial:
                  </span>{" "}
                  {certification.credentialId}
                </p>
              ) : null}
              {certification.expires ? (
                <p>
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    Vence:
                  </span>{" "}
                  {certification.expires}
                </p>
              ) : null}
            </div>

            {certification.skills?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                    key={`${certification.title}-${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}

            {certification.certificateUrl ? (
              <a
                href={certification.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-sky-700 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-100 dark:border-sky-500/60 dark:bg-sky-500/15 dark:text-sky-300 dark:hover:bg-sky-500/25"
              >
                <i className="bx bx-file-find text-sm"></i>
                <span>Mostrar credencial</span>
              </a>
            ) : (
              <span className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
                <i className="bx bx-info-circle text-sm"></i>
                <span>Credencial sin enlace</span>
              </span>
            )}
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
