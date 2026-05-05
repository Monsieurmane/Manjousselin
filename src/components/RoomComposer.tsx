import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Download, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  rooms,
  ambienceLabels,
  intensityLabels,
  type LightAmbience,
  type LightIntensity,
} from "@/data/rooms";
import { materials, categoryLabels, type MaterialCategory } from "@/data/materials";
import { generateMoodboardPdf } from "@/lib/moodboardPdf";

const PHONE = "4915568580042";
const STORAGE_KEY = "maison-room-composer-v1";

const copy = {
  eyebrow: { fr: "Programme intérieur / extérieur", en: "Interior / Exterior program", de: "Innen / Außen Programm" },
  title: { fr: "Composez vos espaces", en: "Compose your spaces", de: "Gestalten Sie Ihre Räume" },
  desc: {
    fr: "Choisissez une pièce, attribuez un matériau à chaque surface, puis demandez votre modèle 3D personnalisé.",
    en: "Pick a room, assign a material to each surface, then request your personalised 3D model.",
    de: "Wählen Sie einen Raum, weisen Sie jeder Fläche ein Material zu und fordern Sie Ihr persönliches 3D-Modell an.",
  },
  pick: { fr: "Choisir un matériau", en: "Pick a material", de: "Material wählen" },
  empty: { fr: "Vide", en: "Empty", de: "Leer" },
  reset: { fr: "Réinitialiser la pièce", en: "Reset room", de: "Raum zurücksetzen" },
  ctaWa: {
    fr: "Demander mon modèle 3D personnalisé",
    en: "Request my personalised 3D model",
    de: "Mein persönliches 3D-Modell anfordern",
  },
  ctaPdf: { fr: "Télécharger ma sélection (PDF)", en: "Download my selection (PDF)", de: "Auswahl herunterladen (PDF)" },
  lighting: { fr: "Éclairage", en: "Lighting", de: "Beleuchtung" },
  ambience: { fr: "Ambiance", en: "Ambience", de: "Stimmung" },
  intensity: { fr: "Intensité", en: "Intensity", de: "Intensität" },
  pickerTitle: { fr: "Sélectionnez un matériau", en: "Select a material", de: "Material auswählen" },
  close: { fr: "Fermer", en: "Close", de: "Schließen" },
};

type Selections = Record<string, Record<string, string>>;

interface PickerState {
  roomId: string;
  slotId: string;
  allowed: MaterialCategory[];
}

export const RoomComposer = () => {
  const { lang } = useLanguage();
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const [selections, setSelections] = useState<Selections>({});
  const [ambience, setAmbience] = useState<LightAmbience>("warm");
  const [intensity, setIntensity] = useState<LightIntensity>("medium");
  const [picker, setPicker] = useState<PickerState | null>(null);

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data.selections) setSelections(data.selections);
        if (data.ambience) setAmbience(data.ambience);
        if (data.intensity) setIntensity(data.intensity);
      }
    } catch {}
  }, []);

  // Save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ selections, ambience, intensity }));
    } catch {}
  }, [selections, ambience, intensity]);

  const room = useMemo(() => rooms.find((r) => r.id === activeRoom)!, [activeRoom]);

  const setSlot = (roomId: string, slotId: string, materialId: string | null) => {
    setSelections((prev) => {
      const next = { ...prev, [roomId]: { ...(prev[roomId] || {}) } };
      if (materialId) next[roomId][slotId] = materialId;
      else delete next[roomId][slotId];
      return next;
    });
  };

  const resetRoom = (roomId: string) =>
    setSelections((prev) => {
      const n = { ...prev };
      delete n[roomId];
      return n;
    });

  const totalSelected = Object.values(selections).reduce(
    (acc, r) => acc + Object.values(r).filter(Boolean).length,
    0
  );

  const buildWhatsAppLink = () => {
    const intro =
      lang === "fr"
        ? "Bonjour Mane Josselin, je souhaite un modèle 3D personnalisé."
        : lang === "en"
        ? "Hello Mane Josselin, I would like a personalised 3D model."
        : "Hallo Mane Josselin, ich möchte ein persönliches 3D-Modell.";

    const blocks = rooms
      .map((r) => {
        const sel = selections[r.id];
        if (!sel) return null;
        const lines = r.slots
          .filter((s) => sel[s.id])
          .map((s) => {
            const m = materials.find((x) => x.id === sel[s.id]);
            return m ? `• ${s.label[lang]} : ${m.name} (${categoryLabels[m.category][lang]})` : null;
          })
          .filter(Boolean);
        if (lines.length === 0) return null;
        return `— ${r.label[lang]} —\n${lines.join("\n")}`;
      })
      .filter(Boolean);

    const lighting = `— ${copy.lighting[lang]} —\n${copy.ambience[lang]}: ${ambienceLabels[ambience][lang]} • ${copy.intensity[lang]}: ${intensityLabels[intensity][lang]}`;

    const text = encodeURIComponent(`${intro}\n\n${blocks.join("\n\n")}\n\n${lighting}`);
    return `https://wa.me/${PHONE}?text=${text}`;
  };

  const handlePdf = () => generateMoodboardPdf({ selections, ambience, intensity }, lang);

  const pickerMaterials = picker
    ? materials.filter((m) => picker.allowed.includes(m.category))
    : [];

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
          {copy.eyebrow[lang]}
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-5">
          {copy.title[lang]}{" "}
          <span className="italic font-display text-gradient-gold">3D</span>
        </h2>
        <div className="w-16 h-px line-gold mx-auto mb-5" />
        <p className="max-w-2xl mx-auto font-body text-sm text-muted-foreground leading-relaxed">
          {copy.desc[lang]}
        </p>
      </div>

      {/* Room tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8">
        {rooms.map((r) => {
          const count = selections[r.id] ? Object.values(selections[r.id]).filter(Boolean).length : 0;
          const isActive = activeRoom === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRoom(r.id)}
              className={`font-body text-[10px] md:text-xs tracking-[0.18em] uppercase px-3 md:px-4 py-2 border transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              <span>{r.icon}</span>
              <span>{r.label[lang]}</span>
              {count > 0 && (
                <span className={`text-[9px] px-1.5 rounded-full ${isActive ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Slots grid */}
      <div className="border border-border bg-card p-5 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl md:text-2xl text-foreground flex items-center gap-3">
            <span>{room.icon}</span>
            <span>{room.label[lang]}</span>
          </h3>
          {selections[room.id] && Object.keys(selections[room.id]).length > 0 && (
            <button
              onClick={() => resetRoom(room.id)}
              className="font-body text-[10px] tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {copy.reset[lang]}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {room.slots.map((slot) => {
            const matId = selections[room.id]?.[slot.id];
            const mat = matId ? materials.find((m) => m.id === matId) : null;
            return (
              <div key={slot.id} className="border border-border bg-background overflow-hidden">
                <div className="aspect-[4/3] relative bg-muted">
                  {mat ? (
                    <>
                      <img src={mat.image} alt={mat.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => setSlot(room.id, slot.id, null)}
                        className="absolute top-2 right-2 bg-background/90 border border-border text-foreground hover:text-primary p-1 transition-colors"
                        aria-label="Clear"
                      >
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setPicker({ roomId: room.id, slotId: slot.id, allowed: slot.allowed })}
                      className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:bg-muted/60 transition-colors"
                    >
                      <Plus size={20} />
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase">{copy.pick[lang]}</span>
                    </button>
                  )}
                </div>
                <div className="p-3 md:p-4">
                  <p className="font-body text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-primary mb-1">
                    {slot.label[lang]}
                  </p>
                  <p className="font-heading text-sm md:text-base text-foreground truncate">
                    {mat ? mat.name : copy.empty[lang]}
                  </p>
                  {mat && (
                    <p className="font-body text-[10px] text-muted-foreground mt-1 truncate">
                      {categoryLabels[mat.category][lang]}
                    </p>
                  )}
                  {!mat && (
                    <button
                      onClick={() => setPicker({ roomId: room.id, slotId: slot.id, allowed: slot.allowed })}
                      className="mt-2 font-body text-[10px] tracking-[0.18em] uppercase text-primary hover:underline"
                    >
                      {copy.pick[lang]} →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lighting */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-4 flex items-center gap-2">
            💡 {copy.lighting[lang]}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-body text-xs text-muted-foreground mb-2">{copy.ambience[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {(["warm", "neutral", "cool"] as LightAmbience[]).map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmbience(a)}
                    className={`font-body text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all ${
                      ambience === a
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {ambienceLabels[a][lang]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground mb-2">{copy.intensity[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {(["soft", "medium", "statement"] as LightIntensity[]).map((i) => (
                  <button
                    key={i}
                    onClick={() => setIntensity(i)}
                    className={`font-body text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all ${
                      intensity === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {intensityLabels[i][lang]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA bar */}
      {totalSelected > 0 && (
        <div className="sticky bottom-4 mt-8 z-20">
          <div className="border border-primary/40 bg-card/95 backdrop-blur p-4 md:p-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between shadow-lg">
            <p className="font-body text-xs md:text-sm text-foreground">
              <span className="text-primary font-medium">{totalSelected}</span>{" "}
              {lang === "fr" ? "matériau(x) sélectionné(s)" : lang === "en" ? "material(s) selected" : "Material(ien) ausgewählt"}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button
                onClick={handlePdf}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/10 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-3 transition-colors"
              >
                <Download size={14} />
                {copy.ctaPdf[lang]}
              </button>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-3 transition-colors"
              >
                <Send size={14} />
                {copy.ctaWa[lang]}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Picker modal */}
      <AnimatePresence>
        {picker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPicker(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h4 className="font-heading text-lg md:text-xl text-foreground">{copy.pickerTitle[lang]}</h4>
                <button onClick={() => setPicker(null)} className="text-muted-foreground hover:text-primary">
                  <X size={20} />
                </button>
              </div>
              <div className="overflow-y-auto p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {pickerMaterials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSlot(picker.roomId, picker.slotId, m.id);
                      setPicker(null);
                    }}
                    className="text-left border border-border hover:border-primary transition-colors group"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2.5">
                      <p className="font-body text-[9px] tracking-[0.2em] uppercase text-primary mb-1 truncate">
                        {categoryLabels[m.category][lang]}
                      </p>
                      <p className="font-heading text-sm text-foreground truncate">{m.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
