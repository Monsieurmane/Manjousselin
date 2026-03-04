import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <div className="w-20 h-px line-gold mx-auto mb-10" />
          <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
            Design d'Intérieur — Dakar, Sénégal
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8"
        >
          <span className="text-foreground">L'Art de</span>
          <br />
          <span className="text-gradient-gold italic font-display text-6xl md:text-8xl lg:text-9xl">
            Sublimer
          </span>
          <br />
          <span className="text-foreground">vos Espaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light mb-12"
        >
          De la visualisation 3D à la sélection minutieuse des matériaux, nous concevons
          des intérieurs d'exception qui reflètent votre identité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Prendre Rendez-vous
          </a>
          <a
            href="#realisations"
            className="px-10 py-4 border border-foreground/30 text-foreground font-body text-xs tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Nos Réalisations
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
