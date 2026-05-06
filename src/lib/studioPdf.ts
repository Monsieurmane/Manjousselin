import jsPDF from "jspdf";
import { studioRooms, findMaterial, type Lang } from "@/data/studio";
import { categoryLabels } from "@/data/materials";

type Selections = Record<string, Record<string, string>>;

const t = {
  title: { fr: "Dossier matériaux", en: "Material file", de: "Materialdossier" },
  brand: { fr: "MAISON DE DESIGN", en: "MAISON DE DESIGN", de: "MAISON DE DESIGN" },
  sub: {
    fr: "Sélection curatée — Dakar / Hambourg",
    en: "Curated selection — Dakar / Hamburg",
    de: "Kuratierte Auswahl — Dakar / Hamburg",
  },
  empty: {
    fr: "Aucune sélection. Composez votre univers avant l'export.",
    en: "No selection yet. Compose your universe before exporting.",
    de: "Noch keine Auswahl. Stellen Sie Ihre Welt zusammen.",
  },
  footer: {
    fr: "WhatsApp +49 155 68 58 00 42 — manejousselin",
    en: "WhatsApp +49 155 68 58 00 42 — manejousselin",
    de: "WhatsApp +49 155 68 58 00 42 — manejousselin",
  },
};

async function imgToDataUrl(src: string): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result as string;
        const i = new Image();
        i.onload = () => resolve({ data, w: i.width, h: i.height });
        i.onerror = () => resolve(null);
        i.src = data;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function generateStudioPdf(selections: Selections, lang: Lang) {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const W = pdf.internal.pageSize.getWidth();
  const H = pdf.internal.pageSize.getHeight();
  const M = 40;
  const gold: [number, number, number] = [184, 142, 78];
  const ink: [number, number, number] = [40, 30, 25];

  // Header
  pdf.setFillColor(...ink);
  pdf.rect(0, 0, W, 90, "F");
  pdf.setTextColor(245, 235, 215);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text(t.brand[lang], M, 38);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(...gold);
  pdf.text(t.sub[lang], M, 56);
  pdf.setDrawColor(...gold);
  pdf.setLineWidth(1);
  pdf.line(M, 70, W - M, 70);
  pdf.setTextColor(245, 235, 215);
  pdf.setFontSize(11);
  pdf.text(t.title[lang], W - M, 38, { align: "right" });

  // Content
  let y = 120;
  pdf.setTextColor(...ink);

  const rooms = studioRooms.filter(
    (r) => Object.values(selections[r.id] || {}).filter(Boolean).length > 0
  );

  if (rooms.length === 0) {
    pdf.setFontSize(11);
    pdf.text(t.empty[lang], M, y);
  }

  for (const room of rooms) {
    if (y > H - 140) {
      pdf.addPage();
      y = 60;
    }
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...ink);
    pdf.text(room.label[lang], M, y);
    pdf.setDrawColor(...gold);
    pdf.setLineWidth(0.5);
    pdf.line(M, y + 4, M + 50, y + 4);
    y += 22;

    for (const slot of room.slots) {
      const mid = selections[room.id]?.[slot.id];
      const mat = mid ? findMaterial(mid) : undefined;
      if (!mat) continue;
      if (y > H - 90) {
        pdf.addPage();
        y = 60;
      }

      // Swatch
      const swatchSize = 50;
      const img = await imgToDataUrl(mat.image);
      if (img) {
        try {
          pdf.addImage(img.data, "JPEG", M, y - 10, swatchSize, swatchSize);
        } catch {}
      }

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(140, 110, 80);
      pdf.text(slot.label[lang].toUpperCase(), M + swatchSize + 12, y - 2);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(...ink);
      pdf.text(mat.name, M + swatchSize + 12, y + 14);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(90, 80, 70);
      const meta = `${categoryLabels[mat.category][lang]} · ${mat.format}`;
      pdf.text(meta, M + swatchSize + 12, y + 28);

      const price = mat.priceIndex === 3 ? "€€€" : mat.priceIndex === 2 ? "€€" : "€";
      pdf.setTextColor(...gold);
      pdf.setFont("helvetica", "bold");
      pdf.text(price, W - M, y + 14, { align: "right" });

      y += swatchSize + 12;
    }
    y += 14;
  }

  // Footer
  const pages = pdf.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    pdf.setPage(p);
    pdf.setDrawColor(...gold);
    pdf.line(M, H - 40, W - M, H - 40);
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(8);
    pdf.setTextColor(120, 100, 80);
    pdf.text(t.footer[lang], W / 2, H - 25, { align: "center" });
  }

  pdf.save("maison-de-design-dossier-materiaux.pdf");
}
