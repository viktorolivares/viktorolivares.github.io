const SectionHeading = ({ icon, title }) => {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.16)]">
        <i className={`bx ${icon} text-[1.35rem]`}></i>
      </span>
      <div className="min-w-0 flex-1 border-b border-slate-200 pb-4">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[1.55rem]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeading;
