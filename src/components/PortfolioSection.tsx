import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Ngor",
    category: "Résidentiel",
    description: "Une villa contemporaine surplombant l'océan, mêlant matériaux locaux et design moderne.",
  },
  {
    title: "Hôtel Teranga",
    category: "Hôtellerie",
    description: "Rénovation complète d'un hôtel-boutique au cœur du Plateau, Dakar.",
  },
  {
    title: "Appartement Almadies",
    category: "Résidentiel",
    description: "Un penthouse minimaliste avec des finitions en marbre et bois tropical.",
  },
  {
    title: "Bureau Saly",
    category: "Commercial",
    description: "Espace de coworking haut de gamme alliant productivité et élégance.",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="realisations" className="py-32 px-6 bg-secondary/20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream mb-6">
            Nos <span className="italic font-display text-gradient-gold">Réalisations</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden border border-border bg-background hover:border-primary/40 transition-all duration-500"
            >
              {/* Placeholder visual */}
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="font-display text-6xl text-muted-foreground/20 italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-8">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">
                  {p.category}
                </p>
                <h3 className="font-heading text-2xl text-cream mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
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
