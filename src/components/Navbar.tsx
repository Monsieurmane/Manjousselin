import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: t.nav.home[lang], href: "#accueil" },
    { label: t.nav.services[lang], href: "#services" },
    { label: t.nav.portfolio[lang], href: "#realisations" },
    { label: t.nav.about[lang], href: "#apropos" },
    { label: t.nav.contact[lang], href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-3 md:py-5 px-4 md:px-6">
        <a href="#accueil" className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.25em] text-gradient-gold font-medium shrink-0">
          manejousselin
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[9px] lg:text-[10px] tracking-[0.12em] lg:tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors border border-border px-2 py-1"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="font-body text-[9px] tracking-[0.1em] uppercase text-foreground border border-border px-1.5 py-0.5"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-5 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
