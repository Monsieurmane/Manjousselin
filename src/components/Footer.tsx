import { Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 21c1.5-3 2-5.5 2.5-8.5.7-1.5 2.5-2.5 4-2 1.5.5 1.5 2 1 3.5-.5 1.5-1 3-1 4.5 0 1.5 1.5 2 2.5 1s2-3 2-5c0-3-2.5-5-5.5-5C10 9.5 8 12 8 14.5c0 1 .5 2 1 2.5" />
  </svg>
);

export const Footer = () => {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/manejousselin", icon: <Instagram size={20} strokeWidth={1.5} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@manejousselin", icon: <TikTokIcon /> },
    { name: "YouTube", url: "https://www.youtube.com/@manejousselin", icon: <Youtube size={20} strokeWidth={1.5} /> },
    { name: "Pinterest", url: "https://www.pinterest.com/@manejousselin", icon: <PinterestIcon /> },
    { name: "WhatsApp", url: "https://wa.me/4915568580042", icon: <MessageCircle size={20} strokeWidth={1.5} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/manejousselin", icon: <Linkedin size={20} strokeWidth={1.5} /> },
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
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
