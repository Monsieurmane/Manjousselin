import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { ProductsGrid } from "@/components/ProductsGrid";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  eyebrow: { fr: "Boutique", en: "Shop", de: "Shop" },
  title: { fr: "Nos", en: "Our", de: "Unsere" },
  titleHighlight: { fr: "Produits", en: "Products", de: "Produkte" },
  desc: {
    fr: "Meubles, carrelage, sanitaires, éclairage, parfums, technologie et électroménager — une sélection pensée pour équiper et sublimer votre maison.",
    en: "Furniture, tiles, sanitary ware, lighting, fragrances, technology and appliances — a selection curated to equip and elevate your home.",
    de: "Möbel, Fliesen, Sanitär, Beleuchtung, Düfte, Technik und Haushaltsgeräte — eine Auswahl, die Ihr Zuhause ausstattet und veredelt.",
  },
};

const ProductsPage = () => {
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

      <ProductsGrid />

      <Footer />
    </div>
  );
};

export default ProductsPage;
