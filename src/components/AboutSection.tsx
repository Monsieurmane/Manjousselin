import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const statIcons = [Award, Users, Clock, MapPin];
const statValues = ["20+", "20+", "6", "1"];

export const AboutSection = () => {
  const { lang, t } = useLanguage();
  const a = t.about;

  return (
    <section id="apropos" className="py-16 md:py-32 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {a.subtitle[lang]}
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
              {a.title[lang]}{" "}
              <span className="italic font-display text-gradient-gold">{a.titleHighlight[lang]}</span>
            </h2>
            <div className="w-16 h-px line-gold mb-8" />
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light mb-6">
              {a.p1[lang]}
            </p>
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light mb-8">
              {a.p2[lang]}
            </p>
            <a
              href="#contact"
              className="inline-block px-6 md:px-8 py-3 md:py-3.5 border border-primary text-primary font-body text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {a.cta[lang]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-border"
          >
            {a.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <div key={i} className="bg-background p-6 md:p-10 text-center">
                  <Icon size={24} strokeWidth={1} className="text-primary mx-auto mb-4" />
                  <p className="font-display text-3xl md:text-4xl text-foreground mb-2">{statValues[i]}</p>
                  <p className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {s.label[lang]}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
