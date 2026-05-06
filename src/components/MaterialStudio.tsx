import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Eye, Download, Send, Shuffle, Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { studioRooms, findMaterial, type StudioRoom, type Lang } from "@/data/studio";
import { categoryLabels } from "@/data/materials";
import { generateStudioPdf } from "@/lib/studioPdf";
import { toast } from "@/hooks/use-toast";

const PHONE = "4915568580042";
const STORAGE = "studio-selections-v1";

const t = {
  zoneHeader: {
    fr: "Quelle pièce souhaitez-vous révéler ?",
    en: "Which room shall we reveal?",
    de: "Welchen Raum möchten Sie enthüllen?",
  },
  back: { fr: "Retour", en: "Back", de: "Zurück" },
  surprise: { fr: "Surprenez-moi", en: "Surprise me", de: "Überraschen Sie mich" },
  enSituation: { fr: "Voir en situation", en: "See in situ", de: "Im Raum sehen" },
  voirSwatch: { fr: "Voir la matière", en: "See the swatch", de: "Material sehen" },
  selected: { fr: "Sélectionné", en: "Selected", de: "Ausgewählt" },
  select: { fr: "Choisir", en: "Select", de: "Auswählen" },
  yourSelection: { fr: "Votre dossier", en: "Your selection", de: "Ihre Auswahl" },
  empty: {
    fr: "Votre sélection est encore vierge. Commencez par choisir une pièce.",
    en: "Your selection is still empty. Start by choosing a room.",
    de: "Ihre Auswahl ist noch leer. Beginnen Sie mit einem Raum.",
  },
  download: { fr: "Télécharger mon dossier matériaux", en: "Download my material file", de: "Materialdossier herunterladen" },
  cta3d: {
    fr: "Donnez vie à votre sélection — Recevez votre étude 3D personnalisée",
    en: "Bring your selection to life — Receive your personalised 3D study",
    de: "Erwecken Sie Ihre Auswahl zum Leben — Erhalten Sie Ihre 3D-Studie",
  },
  trust: {
    fr: "La modélisation 3D est offerte et déductible sur toute commande.",
    en: "The 3D modelling is offered and deductible from any order.",
    de: "Die 3D-Modellierung wird angeboten und auf jede Bestellung angerechnet.",
  },
  formTitle: { fr: "Demande d'étude 3D", en: "3D study request", de: "3D-Studienanfrage" },
  fName: { fr: "Nom complet", en: "Full name", de: "Vollständiger Name" },
  fEmail: { fr: "Email", en: "Email", de: "E-Mail" },
  fProject: { fr: "Description du projet", en: "Project description", de: "Projektbeschreibung" },
  fCallback: { fr: "Créneau de rappel préféré", en: "Preferred callback time", de: "Bevorzugte Rückrufzeit" },
  send: { fr: "Envoyer ma demande", en: "Send my request", de: "Anfrage senden" },
  saved: { fr: "Sélection enregistrée", en: "Selection saved", de: "Auswahl gespeichert" },
  pickMaterial: { fr: "Choisir un matériau", en: "Choose a material", de: "Material auswählen" },
};

type Selections = Record<string, Record<string, string>>; // room -> slot -> materialId

function priceLabel(p?: 1 | 2 | 3) {
  return p === 3 ? "€€€" : p === 2 ? "€€" : "€";
}

export const MaterialStudio = () => {
  const { lang } = useLanguage();
  const [activeRoom, setActiveRoom] = useState<StudioRoom | null>(null);
  const [selections, setSelections] = useState<Selections>({});
  const [picker, setPicker] = useState<{ slotId: string } | null>(null);
  const [situMap, setSituMap] = useState<Record<string, boolean>>({});
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setSelections(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(selections));
  }, [selections]);

  const totalPicks = useMemo(
    () => Object.values(selections).reduce((acc, s) => acc + Object.values(s || {}).filter(Boolean).length, 0),
    [selections]
  );

  const setSlot = (roomId: string, slotId: string, materialId: string) => {
    setSelections((prev) => ({ ...prev, [roomId]: { ...(prev[roomId] || {}), [slotId]: materialId } }));
  };

  const applyPair = (room: StudioRoom, pairId: string) => {
    const pair = room.pairs.find((p) => p.id === pairId);
    if (!pair) return;
    setSelections((prev) => ({ ...prev, [room.id]: { ...pair.picks } }));
  };

  const clearRoom = (roomId: string) =>
    setSelections((prev) => {
      const n = { ...prev };
      delete n[roomId];
      return n;
    });

  const surprise = (room: StudioRoom) => {
    const best = room.pairs.find((p) => p.bestseller) || room.pairs[0];
    if (best) applyPair(room, best.id);
  };

  // ZONE PICKER
  if (!activeRoom) {
    return (
      <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Material Studio
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-4">
            <span className="italic font-display text-gradient-gold">{t.zoneHeader[lang]}</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {studioRooms.map((room, i) => {
            const count = Object.values(selections[room.id] || {}).filter(Boolean).length;
            return (
              <motion.button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/5] overflow-hidden bg-card border border-border text-left"
              >
                <img
                  src={room.image}
                  alt={room.label[lang]}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {count > 0 && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-body tracking-[0.18em] uppercase px-3 py-1.5">
                    {count} {lang === "fr" ? "choix" : lang === "en" ? "picks" : "Auswahl"}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-[hsl(40_30%_96%)]">
                  <h3 className="font-heading text-2xl md:text-3xl mb-2">{room.label[lang]}</h3>
                  <p className="font-body text-xs md:text-sm font-light opacity-85 leading-relaxed">
                    {room.tagline[lang]}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom sticky drawer summary */}
        <SelectionDrawer
          selections={selections}
          lang={lang}
          onDownload={() => generateStudioPdf(selections, lang).then(() => toast({ title: t.saved[lang] }))}
          onRequest={() => setFormOpen(true)}
          totalPicks={totalPicks}
        />

        {formOpen && (
          <RequestForm
            lang={lang}
            selections={selections}
            onClose={() => setFormOpen(false)}
          />
        )}
      </section>
    );
  }

  // ROOM DETAIL
  const roomSel = selections[activeRoom.id] || {};

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-32">
      <button
        onClick={() => setActiveRoom(null)}
        className="inline-flex items-center gap-2 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={14} /> {t.back[lang]}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-10">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img src={activeRoom.image} alt={activeRoom.label[lang]} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-3xl md:text-5xl font-light mb-4">
            <span className="italic font-display text-gradient-gold">{activeRoom.label[lang]}</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
            {activeRoom.tagline[lang]}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => surprise(activeRoom)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-5 py-3 transition-colors"
            >
              <Shuffle size={14} /> {t.surprise[lang]}
            </button>
            {Object.keys(roomSel).length > 0 && (
              <button
                onClick={() => clearRoom(activeRoom.id)}
                className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors px-3 py-3"
              >
                {lang === "fr" ? "Réinitialiser" : lang === "en" ? "Reset" : "Zurücksetzen"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
        {activeRoom.slots.map((slot) => {
          const matId = roomSel[slot.id];
          const mat = matId ? findMaterial(matId) : undefined;
          const key = `${activeRoom.id}-${slot.id}`;
          const showSitu = situMap[key];
          return (
            <div key={slot.id} className="border border-border bg-card overflow-hidden">
              <div className="aspect-[4/3] bg-muted relative">
                {mat ? (
                  <>
                    {showSitu ? (
                      <img src={activeRoom.image} alt="" className="w-full h-full object-cover opacity-90" />
                    ) : (
                      <img src={mat.image} alt={mat.name} className="w-full h-full object-cover" />
                    )}
                    <button
                      onClick={() => setSituMap((m) => ({ ...m, [key]: !m[key] }))}
                      className="absolute bottom-3 right-3 bg-background/90 backdrop-blur border border-border hover:border-primary text-foreground hover:text-primary font-body text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Eye size={12} /> {showSitu ? t.voirSwatch[lang] : t.enSituation[lang]}
                    </button>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {slot.label[lang]}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5">
                <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
                  {slot.label[lang]}
                </p>
                {mat ? (
                  <>
                    <h3 className="font-heading text-lg mb-1">{mat.name}</h3>
                    <p className="font-body text-[11px] text-muted-foreground mb-3">
                      {categoryLabels[mat.category][lang]} · {priceLabel(mat.priceIndex)}
                    </p>
                    <button
                      onClick={() => setPicker({ slotId: slot.id })}
                      className="font-body text-[10px] tracking-[0.2em] uppercase text-primary hover:underline"
                    >
                      {lang === "fr" ? "Changer" : lang === "en" ? "Change" : "Ändern"}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setPicker({ slotId: slot.id })}
                    className="w-full mt-2 border border-border hover:border-primary hover:text-primary font-body text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 transition-colors"
                  >
                    {t.select[lang]}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Curated pairs */}
      <div className="mb-12">
        <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
          {lang === "fr" ? "Duos curatés" : lang === "en" ? "Curated pairs" : "Kuratierte Duos"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeRoom.pairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => applyPair(activeRoom, pair.id)}
              className="text-left border border-border bg-card hover:border-primary p-4 transition-colors group"
            >
              <div className="flex gap-1.5 mb-3">
                {Object.values(pair.picks).map((mid) => {
                  const mm = findMaterial(mid);
                  return (
                    <div key={mid} className="flex-1 aspect-square overflow-hidden">
                      {mm && <img src={mm.image} alt="" className="w-full h-full object-cover" />}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-base">{pair.title[lang]}</h4>
                {pair.bestseller && (
                  <Sparkles size={14} className="text-primary" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <SelectionDrawer
        selections={selections}
        lang={lang}
        onDownload={() => generateStudioPdf(selections, lang).then(() => toast({ title: t.saved[lang] }))}
        onRequest={() => setFormOpen(true)}
        totalPicks={totalPicks}
      />

      {picker && (
        <MaterialPicker
          slotId={picker.slotId}
          lang={lang}
          onClose={() => setPicker(null)}
          onPick={(matId) => {
            setSlot(activeRoom.id, picker.slotId, matId);
            setPicker(null);
          }}
        />
      )}

      {formOpen && (
        <RequestForm
          lang={lang}
          selections={selections}
          onClose={() => setFormOpen(false)}
        />
      )}
    </section>
  );
};

// =============== Material picker dialog ===============
import { studioMaterials } from "@/data/materials";

const MaterialPicker = ({
  slotId,
  lang,
  onClose,
  onPick,
}: {
  slotId: string;
  lang: Lang;
  onClose: () => void;
  onPick: (id: string) => void;
}) => {
  const [cat, setCat] = useState<string>("all");
  const cats = ["all", "ceramic", "stone", "spc", "wood", "plaster"] as const;
  const list = useMemo(
    () => (cat === "all" ? studioMaterials : studioMaterials.filter((m) => m.category === cat)),
    [cat]
  );
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-background w-full max-w-4xl max-h-[88vh] flex flex-col border border-border"
      >
        <div className="flex items-center justify-between p-4 md:p-5 border-b border-border">
          <h3 className="font-heading text-lg md:text-xl">{t.pickMaterial[lang]}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-primary p-1">
            <X size={18} />
          </button>
        </div>
        <div className="px-4 md:px-5 py-3 border-b border-border flex flex-wrap gap-2 overflow-x-auto">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-body text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              {c === "all" ? (lang === "fr" ? "Tous" : lang === "en" ? "All" : "Alle") : c}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {list.map((m) => (
            <button
              key={m.id}
              onClick={() => onPick(m.id)}
              className="text-left border border-border hover:border-primary group transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <p className="font-body text-[9px] tracking-[0.22em] uppercase text-primary mb-1">
                  {categoryLabels[m.category][lang]}
                </p>
                <h4 className="font-heading text-sm leading-tight mb-1">{m.name}</h4>
                <p className="font-body text-[10px] text-muted-foreground">{priceLabel(m.priceIndex)}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// =============== Bottom sticky drawer ===============
const SelectionDrawer = ({
  selections,
  lang,
  onDownload,
  onRequest,
  totalPicks,
}: {
  selections: Selections;
  lang: Lang;
  onDownload: () => void;
  onRequest: () => void;
  totalPicks: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground hover:text-primary"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="hidden sm:inline">{t.yourSelection[lang]}</span>
            <span className="bg-primary text-primary-foreground px-2 py-0.5 text-[10px]">{totalPicks}</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              disabled={totalPicks === 0}
              className="hidden sm:inline-flex items-center gap-2 border border-border hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-2.5 transition-colors"
            >
              <Download size={14} /> {lang === "fr" ? "PDF" : "PDF"}
            </button>
            <button
              onClick={onRequest}
              disabled={totalPicks === 0}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 py-2.5 transition-colors"
            >
              <Send size={14} /> <span className="hidden md:inline">{lang === "fr" ? "Étude 3D" : lang === "en" ? "3D study" : "3D-Studie"}</span>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-border overflow-hidden"
            >
              <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4 max-h-[40vh] overflow-y-auto">
                {totalPicks === 0 ? (
                  <p className="font-body text-xs italic text-muted-foreground">{t.empty[lang]}</p>
                ) : (
                  <div className="space-y-4">
                    {studioRooms
                      .filter((r) => Object.values(selections[r.id] || {}).filter(Boolean).length > 0)
                      .map((r) => (
                        <div key={r.id}>
                          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
                            {r.label[lang]}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {r.slots.map((s) => {
                              const mid = selections[r.id]?.[s.id];
                              const mm = mid ? findMaterial(mid) : undefined;
                              if (!mm) return null;
                              return (
                                <div
                                  key={s.id}
                                  className="flex items-center gap-2 border border-border px-2 py-1.5 bg-card"
                                >
                                  <img src={mm.image} alt="" className="w-7 h-7 object-cover" />
                                  <div>
                                    <p className="font-body text-[10px] tracking-wider uppercase text-muted-foreground">
                                      {s.label[lang]}
                                    </p>
                                    <p className="font-heading text-xs">{mm.name}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    <button
                      onClick={onDownload}
                      className="sm:hidden w-full border border-border hover:border-primary font-body text-[10px] tracking-[0.2em] uppercase px-4 py-3 inline-flex items-center justify-center gap-2"
                    >
                      <Download size={14} /> {t.download[lang]}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="h-16" />
    </>
  );
};

// =============== 3D Request form ===============
const RequestForm = ({
  lang,
  selections,
  onClose,
}: {
  lang: Lang;
  selections: Selections;
  onClose: () => void;
}) => {
  const [form, setForm] = useState({ name: "", email: "", project: "", callback: "" });

  const submit = () => {
    const intro =
      lang === "fr"
        ? "Bonjour Mane Josselin, je souhaite recevoir mon étude 3D personnalisée."
        : lang === "en"
        ? "Hello Mane Josselin, I would like to receive my personalised 3D study."
        : "Hallo Mane Josselin, ich möchte meine personalisierte 3D-Studie erhalten.";

    const blocks = studioRooms
      .filter((r) => Object.values(selections[r.id] || {}).filter(Boolean).length > 0)
      .map((r) => {
        const lines = r.slots
          .map((s) => {
            const mid = selections[r.id]?.[s.id];
            const mm = mid ? findMaterial(mid) : undefined;
            return mm ? `• ${s.label[lang]} : ${mm.name}` : null;
          })
          .filter(Boolean)
          .join("\n");
        return `— ${r.label[lang]} —\n${lines}`;
      })
      .join("\n\n");

    const profile = `\n\n${form.name ? `${form.name}\n` : ""}${form.email ? `${form.email}\n` : ""}${
      form.callback ? `${t.fCallback[lang]}: ${form.callback}\n` : ""
    }${form.project ? `\n${form.project}` : ""}`;

    const text = encodeURIComponent(`${intro}\n\n${blocks}${profile}`);
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-background w-full max-w-lg border border-border"
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-heading text-xl italic font-display text-gradient-gold">{t.formTitle[lang]}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-primary">
            <X size={18} />
          </button>
        </div>
        <div className="p-5 space-y-3">
          <input
            placeholder={t.fName[lang]}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-border focus:border-primary outline-none font-body text-sm px-3 py-2.5"
          />
          <input
            type="email"
            placeholder={t.fEmail[lang]}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-border focus:border-primary outline-none font-body text-sm px-3 py-2.5"
          />
          <input
            placeholder={t.fCallback[lang]}
            value={form.callback}
            onChange={(e) => setForm({ ...form, callback: e.target.value })}
            className="w-full bg-transparent border border-border focus:border-primary outline-none font-body text-sm px-3 py-2.5"
          />
          <textarea
            placeholder={t.fProject[lang]}
            value={form.project}
            onChange={(e) => setForm({ ...form, project: e.target.value })}
            rows={4}
            className="w-full bg-transparent border border-border focus:border-primary outline-none font-body text-sm px-3 py-2.5 resize-none"
          />
          <button
            onClick={submit}
            disabled={!form.name || !form.email}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 font-body text-[11px] tracking-[0.2em] uppercase px-5 py-3.5 inline-flex items-center justify-center gap-2"
          >
            <Send size={14} /> {t.send[lang]}
          </button>
          <p className="font-body text-[11px] text-muted-foreground italic text-center leading-relaxed pt-1">
            {t.trust[lang]}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
