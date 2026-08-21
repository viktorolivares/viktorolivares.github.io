const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-zinc-800/80 pt-8 pb-12 text-center text-xs text-zinc-500 font-mono">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>Victor Olivares Yamunaque &mdash; {currentYear}</span>
        <span>Chiclayo, Perú</span>
      </div>
    </footer>
  );
};

export default Footer;
