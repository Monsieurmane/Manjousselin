import { motion } from "framer-motion";
import { Eye, Palette, Boxes, Ruler, Lamp, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Eye, Palette, Boxes, Ruler, Lamp, Handshake];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ServicesSection = () => {
  const { lang, t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {s.subtitle[lang]}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
            {s.title[lang]} <span className="italic font-display text-gradient-gold">{s.titleHighlight[lang]}</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {s.items.map((svc, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={item}
                className="group bg-background p-6 md:p-10 hover:bg-secondary/50 transition-all duration-500"
              >
                <Icon
                  size={28}
                  strokeWidth={1}
                  className="text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-2 md:mb-3">{svc.title[lang]}</h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                  {svc.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
