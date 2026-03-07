import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Ngor",
    category: "Résidentiel",
    description: "Une villa contemporaine surplombant l'océan, mêlant matériaux locaux et design moderne.",
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "Hôtel Teranga",
    category: "Hôtellerie",
    description: "Rénovation complète d'un hôtel-boutique au cœur du Plateau, Dakar.",
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Appartement Almadies",
    category: "Résidentiel",
    description: "Un penthouse minimaliste avec des finitions en marbre et bois tropical.",
    image: "/images/portfolio-3.jpg",
  },
  {
    title: "Bureau Saly",
    category: "Commercial",
    description: "Espace de coworking haut de gamme alliant productivité et élégance.",
    image: "/images/portfolio-4.jpg",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="realisations" className="py-16 md:py-32 px-4 md:px-6 bg-secondary/40">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
            Nos <span className="italic font-display text-gradient-gold">Compétences</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-border bg-background hover:border-primary/40 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-8">
                <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary mb-2">
                  {p.category}
                </p>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 md:mb-3">{p.title}</h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
