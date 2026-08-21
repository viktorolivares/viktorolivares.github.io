const SectionHeading = ({ number, title, subtitle }) => {
  return (
    <div className="mb-6 border-b border-zinc-800/80 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
      <div className="flex items-center gap-3">
        {number && (
          <span className="text-xs font-medium text-zinc-500 font-mono">
            {number}
          </span>
        )}
        <h2 className="text-base font-semibold tracking-tight text-zinc-100 uppercase">
          {title}
        </h2>
      </div>
      {subtitle && (
        <span className="text-xs text-zinc-500 font-normal">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default SectionHeading;
