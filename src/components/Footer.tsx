export const Footer = () => {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/manejousselin" },
    { name: "TikTok", url: "https://www.tiktok.com/@manejousselin" },
    { name: "YouTube", url: "https://www.youtube.com/@manejousselin" },
    { name: "Pinterest", url: "https://www.pinterest.com/@manejousselin" },
    { name: "WhatsApp", url: "https://wa.me/4915568580042" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/manejousselin" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#accueil" className="font-body text-lg tracking-[0.25em] text-gradient-gold font-medium">
          manejousselin
        </a>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} manejousselin — Tous droits réservés
        </p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
