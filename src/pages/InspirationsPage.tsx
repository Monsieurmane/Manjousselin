import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { useLanguage } from "@/contexts/LanguageContext";
import { materials, categoryLabels, type Material, type MaterialCategory } from "@/data/materials";

const copy = {
  hero: {
    eyebrow: { fr: "Inspirations", en: "Inspirations", de: "Inspirationen" },
    title: { fr: "Composez votre", en: "Compose your", de: "Gestalten Sie Ihr" },
    titleHighlight: { fr: "Moodboard", en: "Moodboard", de: "Moodboard" },
    desc: {
      fr: "Sélectionnez vos matériaux — céramique, SPC, parquet bois — et révélez votre style luxe sur mesure.",
      en: "Select your materials — ceramic, SPC, wood parquet — and reveal your bespoke luxury style.",
      de: "Wählen Sie Ihre Materialien — Keramik, SPC, Holzparkett — und entdecken Sie Ihren maßgeschneiderten Luxusstil.",
    },
  },
  filters: {
    all: { fr: "Tous", en: "All", de: "Alle" },
  },
  board: {
    title: { fr: "Votre Moodboard", en: "Your Moodboard", de: "Ihr Moodboard" },
    empty: {
      fr: "Sélectionnez des matériaux pour révéler votre style.",
      en: "Select materials to reveal your style.",
      de: "Wählen Sie Materialien, um Ihren Stil zu enthüllen.",
    },
    style: { fr: "Style identifié", en: "Identified style", de: "Identifizierter Stil" },
    cta: { fr: "Envoyer mon moodboard sur WhatsApp", en: "Send my moodboard on WhatsApp", de: "Mein Moodboard auf WhatsApp senden" },
    clear: { fr: "Tout effacer", en: "Clear all", de: "Alles löschen" },
    select: { fr: "Sélectionner", en: "Select", de: "Auswählen" },
    selected: { fr: "Sélectionné", en: "Selected", de: "Ausgewählt" },
  },
  styles: {
    minimal: {
      name: { fr: "Minimalisme Lumineux", en: "Luminous Minimalism", de: "Leuchtender Minimalismus" },
      desc: {
        fr: "Une palette claire et apaisée, où la lumière sublime des matériaux discrets et raffinés.",
        en: "A bright, serene palette where light enhances discreet, refined materials.",
        de: "Eine helle, ruhige Palette, in der Licht zurückhaltende, edle Materialien zur Geltung bringt.",
      },
    },
    classic: {
      name: { fr: "Élégance Classique", en: "Classic Elegance", de: "Klassische Eleganz" },
      desc: {
        fr: "Marbres veinés, dorures discrètes et bois nobles : l'intemporel revisité avec subtilité.",
        en: "Veined marbles, subtle gilding and noble woods: the timeless reinterpreted with subtlety.",
        de: "Geäderter Marmor, dezente Vergoldung und Edelhölzer: zeitlos und subtil neu interpretiert.",
      },
    },
    contemporary: {
      name: { fr: "Contemporain Chaleureux", en: "Warm Contemporary", de: "Warmer Modernismus" },
      desc: {
        fr: "Tons miel, beiges naturels et grands formats — un luxe accessible et résolument actuel.",
        en: "Honey tones, natural beiges and large formats — accessible and decidedly current luxury.",
        de: "Honigtöne, natürliche Beigetöne und Großformate — ein zugänglicher, hochaktueller Luxus.",
      },
    },
    statement: {
      name: { fr: "Signature Audacieuse", en: "Bold Signature", de: "Mutige Handschrift" },
      desc: {
        fr: "Bois sombres, pierres contrastées et marbres dorés : un univers affirmé, riche en caractère.",
        en: "Dark woods, contrasting stones and gilded marbles: a confident, character-rich universe.",
        de: "Dunkle Hölzer, kontrastreiche Steine und vergoldeter Marmor: charakterstark und selbstbewusst.",
      },
    },
  },
};

const PHONE = "4915568580042";

function detectStyle(selected: Material[]): keyof typeof copy.styles {
  if (selected.length === 0) return "minimal";
  const ids = selected.map((m) => m.id);

  const dark = ["wild-sunset", "harbour-brown", "doussie", "season-fall"];
  const gold = ["luxor-gold", "calacatta-gold", "harbour-gold"];
  const light = ["harbour-white", "season-spring", "cement-cream", "julia-calacatta", "ash-serie", "oltre-sand"];
  const marble = ["calacatta-gold", "elegance-calacatta", "xlab-calacatta", "vendome-calacatta", "vendome-vagues", "julia-calacatta", "luxor-gold"];

  const darkScore = ids.filter((i) => dark.includes(i)).length;
  const goldScore = ids.filter((i) => gold.includes(i)).length;
  const lightScore = ids.filter((i) => light.includes(i)).length;
  const marbleScore = ids.filter((i) => marble.includes(i)).length;

  if (darkScore >= 2 || (darkScore >= 1 && goldScore >= 1)) return "statement";
  if (marbleScore >= 2 || goldScore >= 1) return "classic";
  if (lightScore >= 2) return "minimal";
  return "contemporary";
}

const InspirationsPage = () => {
  const { lang } = useLanguage();
  const [activeCat, setActiveCat] = useState<MaterialCategory | "all">("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(
    () => (activeCat === "all" ? materials : materials.filter((m) => m.category === activeCat)),
    [activeCat]
  );

  const selected = useMemo(
    () => selectedIds.map((id) => materials.find((m) => m.id === id)!).filter(Boolean),
    [selectedIds]
  );

  const toggle = (id: string) =>
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const styleKey = detectStyle(selected);
  const styleData = copy.styles[styleKey];

  const buildWhatsAppLink = () => {
    const intro =
      lang === "fr"
        ? "Bonjour Mane Josselin, voici mon moodboard :"
        : lang === "en"
        ? "Hello Mane Josselin, here is my moodboard:"
        : "Hallo Mane Josselin, hier ist mein Moodboard:";
    const list = selected
      .map((m) => `• ${m.name} (${categoryLabels[m.category][lang]}) — ${m.format}`)
      .join("\n");
    const styleLine = `\n\n${copy.board.style[lang]}: ${styleData.name[lang]}`;
    const text = encodeURIComponent(`${intro}\n\n${list}${selected.length ? styleLine : ""}`);
    return `https://wa.me/${PHONE}?text=${text}`;
  };

  const cats: Array<{ key: MaterialCategory | "all"; label: string }> = [
    { key: "all", label: copy.filters.all[lang] },
    { key: "ceramic", label: categoryLabels.ceramic[lang] },
    { key: "spc", label: categoryLabels.spc[lang] },
    { key: "wood", label: categoryLabels.wood[lang] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocials />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            {copy.hero.eyebrow[lang]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6"
          >
            {copy.hero.title[lang]}{" "}
            <span className="italic font-display text-gradient-gold">{copy.hero.titleHighlight[lang]}</span>
          </motion.h1>
          <div className="w-16 h-px line-gold mx-auto mb-6" />
          <p className="max-w-2xl mx-auto font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {copy.hero.desc[lang]}
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10">
        {/* Materials column */}
        <div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            {cats.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`font-body text-[10px] md:text-xs tracking-[0.18em] uppercase px-3 md:px-4 py-2 border transition-all ${
                  activeCat === c.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((m, i) => {
              const isSelected = selectedIds.includes(m.id);
              return (
                <motion.button
                  key={m.id}
                  type="button"
                  onClick={() => toggle(m.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                  className={`group relative text-left bg-card border transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      width={768}
                      height={576}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-body tracking-[0.18em] uppercase px-2 py-1">
                      ✓ {copy.board.selected[lang]}
                    </div>
                  )}
                  <div className="p-4 md:p-5">
                    <p className="font-body text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
                      {categoryLabels[m.category][lang]}
                      {m.subCategory ? ` · ${m.subCategory}` : ""}
                    </p>
                    <h3 className="font-heading text-lg md:text-xl text-foreground mb-1.5">{m.name}</h3>
                    <p className="font-body text-[11px] md:text-xs text-muted-foreground mb-3">{m.format}</p>
                    <p className="font-body text-xs md:text-[13px] text-muted-foreground leading-relaxed font-light line-clamp-3">
                      {m.description[lang]}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Moodboard panel */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="border border-border bg-card p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl md:text-2xl text-foreground flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                {copy.board.title[lang]}
              </h2>
              {selected.length > 0 && (
                <button
                  onClick={() => setSelectedIds([])}
                  className="font-body text-[10px] tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {copy.board.clear[lang]}
                </button>
              )}
            </div>
            <div className="w-12 h-px line-gold mb-4" />

            {selected.length === 0 ? (
              <p className="font-body text-xs text-muted-foreground italic leading-relaxed">
                {copy.board.empty[lang]}
              </p>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <AnimatePresence>
                    {selected.map((m) => (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative group aspect-square"
                      >
                        <img
                          src={m.image}
                          alt={m.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          title={m.name}
                        />
                        <button
                          onClick={() => toggle(m.id)}
                          className="absolute -top-1.5 -right-1.5 bg-background border border-border text-foreground hover:text-primary hover:border-primary p-0.5 transition-colors"
                          aria-label={`Remove ${m.name}`}
                        >
                          <X size={12} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-border pt-4 mb-5">
                  <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
                    {copy.board.style[lang]}
                  </p>
                  <h3 className="font-heading italic font-display text-xl md:text-2xl text-gradient-gold mb-2">
                    {styleData.name[lang]}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed font-light">
                    {styleData.desc[lang]}
                  </p>
                </div>

                <ul className="space-y-1.5 mb-5 max-h-44 overflow-y-auto">
                  {selected.map((m) => (
                    <li key={m.id} className="font-body text-[11px] text-muted-foreground flex justify-between gap-3">
                      <span className="truncate">{m.name}</span>
                      <span className="text-[10px] uppercase tracking-wider text-primary/70 shrink-0">
                        {m.category}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-3 transition-colors"
                >
                  <Send size={14} />
                  {copy.board.cta[lang]}
                </a>
              </>
            )}
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default InspirationsPage;
