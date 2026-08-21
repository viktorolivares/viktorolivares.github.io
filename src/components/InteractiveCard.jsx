const InteractiveCard = ({
  as = "div",
  className = "",
  children,
  ...props
}) => {
  const Tag = as;

  return (
    <Tag
      {...props}
      className={`rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default InteractiveCard;
