import { motion } from "framer-motion";
import { Eye, Palette, Boxes, Ruler, Lamp, Handshake } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Visualisation 3D",
    description:
      "Explorez votre futur intérieur grâce à des rendus photoréalistes avant même le début des travaux.",
  },
  {
    icon: Palette,
    title: "Sélection des Matériaux",
    description:
      "Un accompagnement expert dans le choix des finitions, tissus, pierres et bois les plus raffinés.",
  },
  {
    icon: Boxes,
    title: "Aménagement d'Espace",
    description:
      "Optimisation fonctionnelle et esthétique de chaque mètre carré pour un confort absolu.",
  },
  {
    icon: Ruler,
    title: "Plans & Conception",
    description:
      "Des plans techniques détaillés pour guider la réalisation fidèle de votre vision.",
  },
  {
    icon: Lamp,
    title: "Design Luminaire",
    description:
      "Création d'ambiances lumineuses sur mesure qui magnifient chaque espace.",
  },
  {
    icon: Handshake,
    title: "Suivi de Projet",
    description:
      "Un accompagnement de bout en bout, de la conception à la livraison finale.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Ce que nous offrons
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
            Nos <span className="italic font-display text-gradient-gold">Services</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group bg-background p-10 hover:bg-secondary/50 transition-all duration-500"
            >
              <s.icon
                size={28}
                strokeWidth={1}
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
