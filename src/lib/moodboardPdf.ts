import jsPDF from "jspdf";
import { rooms, ambienceLabels, intensityLabels, type LightAmbience, type LightIntensity } from "@/data/rooms";
import { materials, categoryLabels } from "@/data/materials";

export interface ComposerState {
  selections: Record<string, Record<string, string>>; // roomId -> slotId -> materialId
  ambience: LightAmbience;
  intensity: LightIntensity;
}

type Lang = "fr" | "en" | "de";

const t = {
  title: { fr: "Mon Moodboard 3D", en: "My 3D Moodboard", de: "Mein 3D Moodboard" },
  brand: { fr: "MAISON DE DESIGN", en: "MAISON DE DESIGN", de: "MAISON DE DESIGN" },
  subtitle: {
    fr: "Sélection personnalisée pour modèle 3D",
    en: "Personalised selection for 3D model",
    de: "Persönliche Auswahl für 3D-Modell",
  },
  lighting: { fr: "Ambiance lumineuse", en: "Lighting ambience", de: "Lichtstimmung" },
  intensity: { fr: "Intensité", en: "Intensity", de: "Intensität" },
  contact: { fr: "Contact", en: "Contact", de: "Kontakt" },
  date: { fr: "Date", en: "Date", de: "Datum" },
  empty: { fr: "Aucune sélection", en: "No selection", de: "Keine Auswahl" },
};

export async function generateMoodboardPdf(state: ComposerState, lang: Lang) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 40;
  let y = margin;

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text(t.brand[lang], margin, y);
  y += 10;
  doc.setDrawColor(184, 134, 11); // gold
  doc.setLineWidth(1);
  doc.line(margin, y, margin + 80, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text(t.title[lang], margin, y);
  y += 16;
  doc.setFontSize(10);
  doc.setTextColor(110, 110, 110);
  doc.text(t.subtitle[lang], margin, y);
  y += 10;
  doc.text(`${t.date[lang]}: ${new Date().toLocaleDateString(lang)}`, margin, y);
  y += 24;

  // Pre-load images
  const imgCache: Record<string, string> = {};
  const loadImg = (src: string) =>
    new Promise<string>((resolve) => {
      if (imgCache[src]) return resolve(imgCache[src]);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = 80;
        c.height = 80;
        const ctx = c.getContext("2d")!;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = c.toDataURL("image/jpeg", 0.7);
        imgCache[src] = data;
        resolve(data);
      };
      img.onerror = () => resolve("");
      img.src = src;
    });

  for (const room of rooms) {
    const roomSel = state.selections[room.id] || {};
    const entries = Object.entries(roomSel).filter(([, mid]) => mid);
    if (entries.length === 0) continue;

    if (y > pageH - 120) {
      doc.addPage();
      y = margin;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(20, 20, 20);
    doc.text(`${room.icon}  ${room.label[lang]}`, margin, y);
    y += 6;
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, y, pageW - margin, y);
    y += 14;

    for (const [slotId, materialId] of entries) {
      const slot = room.slots.find((s) => s.id === slotId);
      const mat = materials.find((m) => m.id === materialId);
      if (!slot || !mat) continue;

      if (y > pageH - 80) {
        doc.addPage();
        y = margin;
      }

      const imgData = await loadImg(mat.image);
      if (imgData) {
        try {
          doc.addImage(imgData, "JPEG", margin, y - 8, 36, 36);
        } catch {}
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text(`${slot.label[lang]}: ${mat.name}`, margin + 46, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(110, 110, 110);
      doc.text(`${categoryLabels[mat.category][lang]} — ${mat.format}`, margin + 46, y + 12);
      y += 44;
    }
    y += 8;
  }

  // Lighting section
  if (y > pageH - 80) {
    doc.addPage();
    y = margin;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(20, 20, 20);
  doc.text(`💡  ${t.lighting[lang]}`, margin, y);
  y += 6;
  doc.setDrawColor(220, 220, 220);
  doc.line(margin, y, pageW - margin, y);
  y += 16;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text(`${t.lighting[lang]}: ${ambienceLabels[state.ambience][lang]}`, margin, y);
  y += 14;
  doc.text(`${t.intensity[lang]}: ${intensityLabels[state.intensity][lang]}`, margin, y);

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(140, 140, 140);
  doc.text(`${t.contact[lang]}: WhatsApp +49 155 68 58 00 42`, margin, pageH - 20);

  doc.save("maison-de-design-moodboard.pdf");
}
