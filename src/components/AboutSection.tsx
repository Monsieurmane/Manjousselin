import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Award, value: "150+", label: "Projets réalisés" },
  { icon: Users, value: "120+", label: "Clients satisfaits" },
  { icon: Clock, value: "12", label: "Années d'expérience" },
  { icon: MapPin, value: "3", label: "Bureaux en Afrique" },
];

export const AboutSection = () => {
  return (
    <section id="apropos" className="py-32 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              À propos
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-cream mb-6">
              L'Excellence du{" "}
              <span className="italic font-display text-gradient-gold">Design Africain</span>
            </h2>
            <div className="w-16 h-px line-gold mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-[1.8] font-light mb-6">
              Fondé à Dakar, Manejousselin est un cabinet de conseil en design d'intérieur
              qui conjugue l'élégance contemporaine avec la richesse des traditions
              sénégalaises. Notre approche holistique transforme chaque espace en une
              expérience sensorielle unique.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8] font-light mb-8">
              De la première esquisse à la sélection du dernier tissu, nous accompagnons
              nos clients avec passion et précision. Chaque projet est une histoire que nous
              écrivons ensemble, mêlant innovation technique et sensibilité artistique.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3.5 border border-primary text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              En savoir plus
            </a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-border"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background p-10 text-center"
              >
                <s.icon
                  size={24}
                  strokeWidth={1}
                  className="text-primary mx-auto mb-4"
                />
                <p className="font-display text-4xl text-cream mb-2">{s.value}</p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
