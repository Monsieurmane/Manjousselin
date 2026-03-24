import { Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoEmblem from "@/assets/logo-emblem.webp";

const footerLegal = {
  terms: { fr: "CGU", en: "Terms", de: "AGB" },
  privacy: { fr: "Confidentialité", en: "Privacy", de: "Datenschutz" },
};

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73A8.19 8.19 0 0 0 20.41 10V6.58a4.84 4.84 0 0 1-.82.11z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.66.97-2.9 2.17-2.9 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.9 2.74a.36.36 0 0 1 .08.35l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.9-2.43-4.67 0-3.8 2.76-7.3 7.96-7.3 4.17 0 7.42 2.98 7.42 6.95 0 4.15-2.62 7.49-6.25 7.49-1.22 0-2.37-.63-2.76-1.38l-.75 2.86c-.27 1.04-1 2.35-1.5 3.15A12 12 0 1 0 12 0z"/>
  </svg>
);

export const Footer = () => {
  const { lang } = useLanguage();
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/manejousselin", icon: <Instagram size={20} strokeWidth={1.5} /> },
    { name: "TikTok", url: "https://www.tiktok.com/@manejousselin", icon: <TikTokIcon /> },
    { name: "YouTube", url: "https://www.youtube.com/@manejousselin", icon: <Youtube size={20} strokeWidth={1.5} /> },
    { name: "Pinterest", url: "https://www.pinterest.com/@manejousselin", icon: <PinterestIcon /> },
    { name: "WhatsApp", url: "https://wa.me/4915568580042", icon: <MessageCircle size={20} strokeWidth={1.5} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/manejousselin", icon: <Linkedin size={20} strokeWidth={1.5} /> },
  ];

  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-border">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <a href="#accueil" className="font-body text-sm md:text-lg tracking-[0.25em] text-gradient-gold font-medium">
          manejousselin
        </a>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="font-body text-[10px] md:text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} manejousselin
          </p>
          <span className="hidden md:inline text-muted-foreground text-[10px]">·</span>
          <div className="flex items-center gap-3">
            <Link to="/terms" className="font-body text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              {footerLegal.terms[lang]}
            </Link>
            <Link to="/privacy" className="font-body text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              {footerLegal.privacy[lang]}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-5">
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
