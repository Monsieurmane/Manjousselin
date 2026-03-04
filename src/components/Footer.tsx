export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#accueil" className="font-display text-xl tracking-widest text-gradient-gold uppercase">
          Manejousselin
        </a>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Manejousselin — Tous droits réservés
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "LinkedIn", "Pinterest"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
