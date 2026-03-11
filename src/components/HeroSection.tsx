import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { lang, t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />

      <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6 md:mb-8"
        >
          <div className="w-20 h-px line-gold mx-auto mb-8 md:mb-10" />
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase text-muted-foreground mb-4 md:mb-6">
            {h.subtitle[lang]}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-6 md:mb-8"
        >
          <span className="text-foreground">{h.line1[lang]}</span>
          <br />
          <span className="text-gradient-gold italic font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            {h.line2[lang]}
          </span>
          <br />
          <span className="text-foreground">{h.line3[lang]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-[11px] sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light mb-8 md:mb-12"
        >
          {h.desc[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="group px-6 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            {h.cta1[lang]}
          </a>
          <a
            href="#realisations"
            className="px-6 sm:px-10 py-3 sm:py-4 border border-foreground/30 text-foreground font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            {h.cta2[lang]}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
