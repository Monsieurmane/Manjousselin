import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { MaterialStudio } from "@/components/MaterialStudio";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  eyebrow: { fr: "Material Studio", en: "Material Studio", de: "Material Studio" },
  title: { fr: "Composez votre", en: "Compose your", de: "Gestalten Sie Ihr" },
  titleHighlight: { fr: "univers de matières", en: "world of matter", de: "Materialuniversum" },
  desc: {
    fr: "Un outil d'aide à la décision : choisissez vos pièces, mariez les matériaux, recevez votre étude 3D personnalisée.",
    en: "A decision-support tool: choose your rooms, pair materials, receive your personalised 3D study.",
    de: "Ein Entscheidungshilfe-Tool: wählen Sie Ihre Räume, kombinieren Sie Materialien, erhalten Sie Ihre 3D-Studie.",
  },
};

const InspirationsPage = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocials />

      <section className="pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            {copy.eyebrow[lang]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6"
          >
            {copy.title[lang]}{" "}
            <span className="italic font-display text-gradient-gold">{copy.titleHighlight[lang]}</span>
          </motion.h1>
          <div className="w-16 h-px line-gold mx-auto mb-6" />
          <p className="max-w-2xl mx-auto font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {copy.desc[lang]}
          </p>
        </div>
      </section>

      <MaterialStudio />

      <Footer />
    </div>
  );
};

export default InspirationsPage;
