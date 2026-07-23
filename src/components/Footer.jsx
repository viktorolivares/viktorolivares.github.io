const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-6 text-center sm:px-6 lg:px-8">
      <p className="text-sm text-slate-500 dark:text-slate-300">
        &copy; {currentYear} Victor Olivares | Curriculum Vitae
      </p>
    </footer>
  );
};

export default Footer;
