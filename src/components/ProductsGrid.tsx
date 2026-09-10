import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { productCategories, products } from "@/data/products";

const WHATSAPP = "4915568580042";

const copy = {
  all: { fr: "Tout", en: "All", de: "Alle" },
  soon: { fr: "Photo à venir", en: "Photo coming soon", de: "Foto folgt" },
  onRequest: { fr: "Prix sur demande", en: "Price on request", de: "Preis auf Anfrage" },
  contact: { fr: "Nous contacter", en: "Contact us", de: "Kontakt" },
};

export const ProductsGrid = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState<string>("all");

  const list = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  const waLink = (name: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Bonjour Mane Josselin, je suis intéressé(e) par : ${name}.`,
    )}`;

  return (
    <section className="pb-20 md:pb-32 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {[{ id: "all", label: copy.all }, ...productCategories.map((c) => ({ id: c.id, label: c.label }))].map(
            (c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`font-body text-[10px] md:text-xs tracking-[0.15em] uppercase px-3 md:px-4 py-2 border transition-all duration-300 ${
                  active === c.id
                    ? "border-primary text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
              >
                {c.label[lang]}
              </button>
            ),
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className="group border border-border bg-background hover:border-primary/40 transition-colors duration-500 flex flex-col"
            >
              {/* Image slot */}
              <div className="aspect-[4/5] bg-secondary/40 flex flex-col items-center justify-center gap-2 overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <>
                    <ImageIcon size={26} strokeWidth={1} className="text-primary/50" />
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                      {copy.soon[lang]}
                    </span>
                  </>
                )}
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-heading text-base md:text-lg text-foreground mb-2">{p.name[lang]}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed font-light mb-4 flex-1">
                  {p.description[lang]}
                </p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-primary mb-4">
                  {p.price ?? copy.onRequest[lang]}
                </p>
                <a
                  href={waLink(p.name[lang])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary/60 text-primary font-body text-[10px] tracking-[0.2em] uppercase py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <MessageCircle size={13} strokeWidth={1.5} />
                  {copy.contact[lang]}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
