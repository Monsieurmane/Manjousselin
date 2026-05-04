import calacattaGold from "@/assets/materials/calacatta-gold.jpg";
import eleganceCalacatta from "@/assets/materials/elegance-calacatta.jpg";
import xlabCalacatta from "@/assets/materials/xlab-calacatta.jpg";
import vendomeCalacatta from "@/assets/materials/vendome-calacatta.jpg";
import vendomeVagues from "@/assets/materials/vendome-vagues.jpg";
import juliaCalacatta from "@/assets/materials/julia-calacatta.jpg";
import luxorGold from "@/assets/materials/luxor-gold.jpg";
import pietraIseo from "@/assets/materials/pietra-iseo.jpg";
import treeNatural from "@/assets/materials/tree-natural.jpg";
import oltreSand from "@/assets/materials/oltre-sand.jpg";
import oltreNatural from "@/assets/materials/oltre-natural.jpg";
import wildSunset from "@/assets/materials/wild-sunset.jpg";
import seasonSpring from "@/assets/materials/season-spring.jpg";
import seasonFall from "@/assets/materials/season-fall.jpg";
import harbourWhite from "@/assets/materials/harbour-white.jpg";
import harbourGold from "@/assets/materials/harbour-gold.jpg";
import harbourBrown from "@/assets/materials/harbour-brown.jpg";
import cementCream from "@/assets/materials/cement-cream.jpg";
import canadianHoneyOak from "@/assets/materials/canadian-honey-oak.jpg";
import ashSerie from "@/assets/materials/ash-serie.jpg";
import flexAsh from "@/assets/materials/flex-ash.jpg";
import oakClassic from "@/assets/materials/oak-classic.jpg";
import doussieImg from "@/assets/materials/doussie.jpg";

const images: Record<string, string> = {
  "calacatta-gold": calacattaGold,
  "elegance-calacatta": eleganceCalacatta,
  "xlab-calacatta": xlabCalacatta,
  "vendome-calacatta": vendomeCalacatta,
  "vendome-vagues": vendomeVagues,
  "julia-calacatta": juliaCalacatta,
  "luxor-gold": luxorGold,
  "pietra-iseo": pietraIseo,
  "tree-natural": treeNatural,
  "oltre-sand": oltreSand,
  "oltre-natural": oltreNatural,
  "wild-sunset": wildSunset,
  "season-spring": seasonSpring,
  "season-fall": seasonFall,
  "harbour-white": harbourWhite,
  "harbour-gold": harbourGold,
  "harbour-brown": harbourBrown,
  "cement-cream": cementCream,
  "canadian-honey-oak": canadianHoneyOak,
  "ash-serie": ashSerie,
  "flex-ash": flexAsh,
  "oak-classic": oakClassic,
  doussie: doussieImg,
};

export type MaterialCategory = "ceramic" | "spc" | "wood";

export interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  subCategory?: string;
  format: string;
  description: { fr: string; en: string; de: string };
  // Realistic photo of the material
  image: string;
  // CSS background fallback
  swatch: string;
  source?: string;
}

const rawMaterials: Omit<Material, "image">[] = [
  // CERAMIC – Marble effect
  {
    id: "calacatta-gold",
    name: "Calacatta Gold",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "60×60 / 60×120 cm — Lappato brillant",
    description: {
      fr: "Grès émaillé lappato plein brillant. Fond blanc intense avec veinages gris et dorés. Effet ultra-réaliste.",
      en: "Glossy lappato glazed porcelain. Intense white base with grey and golden veining. Ultra-realistic effect.",
      de: "Hochglänzendes Feinsteinzeug, lappato. Intensiv weiße Basis mit grauen und goldenen Adern.",
    },
    swatch:
      "linear-gradient(135deg, hsl(40 30% 96%) 0%, hsl(40 30% 92%) 35%, hsl(38 35% 75%) 55%, hsl(40 30% 94%) 75%, hsl(35 15% 80%) 100%)",
  },
  {
    id: "elegance-calacatta",
    name: "Elegance Calacatta",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "90×90 cm — Mat 3D",
    description: {
      fr: "Grès effet marbre 3D. Finition mat, surface tactile synchronisée avec les veines.",
      en: "3D marble-effect porcelain. Matte finish, tactile surface synchronized with veining.",
      de: "Marmoroptik-Feinsteinzeug 3D. Matte Oberfläche, taktil synchron mit der Aderung.",
    },
    swatch:
      "linear-gradient(120deg, hsl(40 25% 94%) 0%, hsl(35 20% 86%) 40%, hsl(38 30% 70%) 60%, hsl(40 25% 92%) 100%)",
  },
  {
    id: "xlab-calacatta",
    name: "Xlab Calacatta",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "120×120 cm — Lappato grand format",
    description: {
      fr: "Le plus grand format de la gamme Calacatta. Surface lappato pour un rendu prestigieux.",
      en: "The largest format of the Calacatta range. Lappato surface for a prestigious finish.",
      de: "Das größte Format der Calacatta-Reihe. Lappato-Oberfläche für edle Optik.",
    },
    swatch:
      "linear-gradient(140deg, hsl(40 30% 97%) 0%, hsl(40 25% 90%) 30%, hsl(35 25% 78%) 55%, hsl(40 30% 95%) 100%)",
  },
  {
    id: "vendome-calacatta",
    name: "Vendome Calacatta",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "40×120 cm",
    description: {
      fr: "Effet marbre classique, élégant et intemporel.",
      en: "Classic marble effect, elegant and timeless.",
      de: "Klassische Marmoroptik, elegant und zeitlos.",
    },
    swatch:
      "linear-gradient(110deg, hsl(40 25% 95%) 0%, hsl(35 20% 88%) 50%, hsl(38 25% 75%) 80%, hsl(40 25% 93%) 100%)",
  },
  {
    id: "vendome-vagues",
    name: "Vendome Calacatta Vagues",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "40×120 cm — Surface 3D ondulée",
    description: {
      fr: "Surface 3D ondulée, effet vague. Très décoratif en revêtement mural.",
      en: "Wavy 3D surface, ripple effect. Highly decorative as wall cladding.",
      de: "Gewellte 3D-Oberfläche, Wellen-Effekt. Sehr dekorativ als Wandverkleidung.",
    },
    swatch:
      "repeating-linear-gradient(135deg, hsl(40 28% 95%) 0px, hsl(35 22% 86%) 12px, hsl(38 30% 78%) 22px, hsl(40 28% 94%) 34px)",
  },
  {
    id: "julia-calacatta",
    name: "Julia Calacatta",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "35×70 cm — Brillant",
    description: {
      fr: "Marbre brillant blanc, lumineux et raffiné.",
      en: "Glossy white marble, luminous and refined.",
      de: "Glänzender weißer Marmor, leuchtend und edel.",
    },
    swatch:
      "linear-gradient(125deg, hsl(40 35% 97%) 0%, hsl(40 25% 92%) 50%, hsl(35 20% 82%) 100%)",
  },
  {
    id: "luxor-gold",
    name: "Luxor Gold",
    category: "ceramic",
    subCategory: "Effet Marbre",
    format: "60×60 / 60×120 cm — Lappato brillant",
    description: {
      fr: "Effet marbre Calacatta or, brillant et somptueux.",
      en: "Calacatta gold marble effect, glossy and sumptuous.",
      de: "Calacatta-Gold Marmoroptik, glänzend und prachtvoll.",
    },
    swatch:
      "linear-gradient(130deg, hsl(40 30% 95%) 0%, hsl(38 55% 65%) 40%, hsl(38 50% 45%) 55%, hsl(40 30% 92%) 100%)",
  },
  {
    id: "pietra-iseo",
    name: "Pietra d'Iseo Grey",
    category: "ceramic",
    subCategory: "Effet Pierre",
    format: "60×60 / 75×150 cm — Rectifié",
    description: {
      fr: "Reproduction du Ceppo di Grè. Coloris gris neutre avec incrustations contrastées. Idéal en duo avec le bois.",
      en: "Reproduction of Ceppo di Grè. Neutral grey with contrasting inclusions. Pairs beautifully with wood.",
      de: "Reproduktion des Ceppo di Grè. Neutrales Grau mit kontrastierenden Einschlüssen. Ideal mit Holz.",
    },
    swatch:
      "radial-gradient(circle at 30% 30%, hsl(30 8% 35%) 0%, transparent 12%), radial-gradient(circle at 70% 60%, hsl(30 8% 25%) 0%, transparent 10%), radial-gradient(circle at 50% 80%, hsl(35 10% 70%) 0%, transparent 14%), linear-gradient(135deg, hsl(30 8% 55%), hsl(30 6% 48%))",
  },

  // SPC
  {
    id: "tree-natural",
    name: "Tree Natural",
    category: "spc",
    format: "232×1532 mm — 6 mm (IXPE intégré)",
    description: {
      fr: "Effet chêne naturel, tons brun intense et lumineux, veines dorées. Surface Ultramatt synchronisée.",
      en: "Natural oak effect, deep luminous brown with golden veining. Synchronized Ultramatt surface.",
      de: "Natürliche Eichenoptik, intensives leuchtendes Braun mit goldenen Adern. Synchron Ultramatt.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(28 35% 32%) 0px, hsl(30 40% 38%) 3px, hsl(32 45% 45%) 7px, hsl(28 35% 30%) 12px)",
  },
  {
    id: "oltre-sand",
    name: "Oltre Sand",
    category: "spc",
    format: "229×1830 mm — 6 mm",
    description: {
      fr: "Effet chêne beige, base sable neutre. Très contemporain.",
      en: "Beige oak effect, neutral sand base. Very contemporary.",
      de: "Beige Eichenoptik, neutrale Sandbasis. Sehr modern.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(38 25% 78%) 0px, hsl(40 28% 82%) 4px, hsl(35 22% 72%) 9px, hsl(38 25% 78%) 14px)",
  },
  {
    id: "oltre-natural",
    name: "Oltre Natural",
    category: "spc",
    format: "229×1830 mm — 6 mm",
    description: {
      fr: "Effet chêne miel, tons beige et brun clair. Ambiance accueillante.",
      en: "Honey oak effect, beige and light brown tones. Welcoming atmosphere.",
      de: "Honig-Eichenoptik, beige und hellbraune Töne. Einladende Atmosphäre.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(35 35% 60%) 0px, hsl(33 38% 65%) 4px, hsl(30 32% 52%) 9px, hsl(35 35% 60%) 14px)",
  },
  {
    id: "wild-sunset",
    name: "Wild Sunset",
    category: "spc",
    format: "230×1842 mm — 6 mm",
    description: {
      fr: "Effet chêne vieilli, brun chaud avec veines contrastées.",
      en: "Aged oak effect, warm brown with contrasting veins.",
      de: "Gealterte Eichenoptik, warmes Braun mit kontrastierender Maserung.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(22 30% 28%) 0px, hsl(25 38% 38%) 5px, hsl(20 28% 22%) 10px, hsl(28 35% 35%) 15px)",
  },
  {
    id: "season-spring",
    name: "Season Spring",
    category: "spc",
    format: "198×1524 mm — 6 mm",
    description: {
      fr: "Chêne clair, tons beige et brun léger. Doux et lumineux.",
      en: "Light oak, beige and soft brown tones. Gentle and luminous.",
      de: "Helle Eiche, beige und leicht braun. Sanft und leuchtend.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(36 28% 75%) 0px, hsl(38 30% 80%) 4px, hsl(34 25% 68%) 9px, hsl(36 28% 75%) 14px)",
  },
  {
    id: "season-fall",
    name: "Season Fall",
    category: "spc",
    format: "198×1524 mm — 6 mm",
    description: {
      fr: "Chêne brun, tons chauds automnaux. Surface Ultramatt.",
      en: "Brown oak, warm autumnal tones. Ultramatt surface.",
      de: "Braune Eiche, warme Herbsttöne. Ultramatt-Oberfläche.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(25 35% 35%) 0px, hsl(28 40% 42%) 5px, hsl(22 30% 28%) 10px, hsl(25 35% 35%) 14px)",
  },
  {
    id: "harbour-white",
    name: "Harbour White",
    category: "spc",
    format: "180×1220 mm — 5,5 mm",
    description: {
      fr: "Bois très clair, blanc chaud avec reflets ivoire et gris tourterelle.",
      en: "Very light wood, warm white with ivory and dove-grey reflections.",
      de: "Sehr helles Holz, warmweiß mit elfenbein- und taubengrauen Reflexen.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(40 25% 90%) 0px, hsl(38 22% 86%) 4px, hsl(35 18% 80%) 9px, hsl(40 25% 90%) 14px)",
  },
  {
    id: "harbour-gold",
    name: "Harbour Gold",
    category: "spc",
    format: "180×1220 mm",
    description: {
      fr: "Chêne naturel doré, très lumineux.",
      en: "Golden natural oak, very luminous.",
      de: "Goldene Natureiche, sehr leuchtend.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(38 45% 55%) 0px, hsl(36 50% 62%) 4px, hsl(34 40% 48%) 9px, hsl(38 45% 55%) 14px)",
  },
  {
    id: "harbour-brown",
    name: "Harbour Brown",
    category: "spc",
    format: "180×1220 mm — 5,5 mm",
    description: {
      fr: "Chêne foncé, tons brun chaud intense avec veines dorées.",
      en: "Dark oak, intense warm brown with golden veining.",
      de: "Dunkle Eiche, intensives warmes Braun mit goldenen Adern.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(25 35% 22%) 0px, hsl(28 42% 30%) 5px, hsl(22 28% 18%) 10px, hsl(30 38% 28%) 15px)",
  },
  {
    id: "cement-cream",
    name: "Cement Cream",
    category: "spc",
    format: "305×610 mm — 5,5 mm",
    description: {
      fr: "Effet béton crème légèrement nuageux. Parfait pour un intérieur minimaliste contemporain.",
      en: "Cream concrete effect, softly clouded. Perfect for a minimalist contemporary interior.",
      de: "Cremiger Betonlook, sanft wolkig. Perfekt für minimalistische, moderne Innenräume.",
    },
    swatch:
      "radial-gradient(circle at 30% 40%, hsl(38 18% 88%), transparent 50%), radial-gradient(circle at 70% 70%, hsl(35 12% 78%), transparent 55%), linear-gradient(135deg, hsl(38 18% 84%), hsl(35 14% 80%))",
  },
  {
    id: "canadian-honey-oak",
    name: "Canadian Honey Oak",
    category: "spc",
    format: "Lames standard",
    description: {
      fr: "Effet bois doré naturel, tonalité miel.",
      en: "Natural golden wood effect, honey tone.",
      de: "Natürliche goldene Holzoptik, Honigton.",
    },
    swatch:
      "repeating-linear-gradient(90deg, hsl(35 50% 52%) 0px, hsl(33 55% 58%) 4px, hsl(30 45% 45%) 9px, hsl(35 50% 52%) 14px)",
  },

  // WOOD
  {
    id: "ash-serie",
    name: "Série Ash (Frêne)",
    category: "wood",
    format: "Parquet préfini",
    description: {
      fr: "Frêne préfini, lumineux et raffiné. Idéal en finition laquée claire ou grise.",
      en: "Pre-finished ash, luminous and refined. Ideal in light or grey lacquered finishes.",
      de: "Vorgefertigte Esche, hell und edel. Ideal in heller oder grauer Lackierung.",
    },
    swatch:
      "repeating-linear-gradient(92deg, hsl(38 22% 78%) 0px, hsl(40 25% 84%) 5px, hsl(35 18% 70%) 11px, hsl(38 22% 78%) 16px)",
  },
  {
    id: "flex-ash",
    name: "Flex Ash",
    category: "wood",
    format: "14×190×1900 mm — Gris cendré",
    description: {
      fr: "Chêne teinte gris cendré. Contemporain et graphique.",
      en: "Ash-grey stained oak. Contemporary and graphic.",
      de: "Aschgrau gebeizte Eiche. Modern und grafisch.",
    },
    swatch:
      "repeating-linear-gradient(92deg, hsl(30 6% 50%) 0px, hsl(30 8% 56%) 5px, hsl(28 5% 42%) 11px, hsl(30 6% 50%) 16px)",
  },
  {
    id: "oak-classic",
    name: "Gamme Chêne (Oak)",
    category: "wood",
    format: "1, 2, 3 lames — Hongroise — Chevron",
    description: {
      fr: "Essence très polyvalente. Haute résistance aux griffures et à l'humidité, traitement et teinte au choix.",
      en: "Highly versatile species. Strong scratch and moisture resistance; finish and stain to your choice.",
      de: "Sehr vielseitige Holzart. Hohe Kratz- und Feuchtigkeitsbeständigkeit, Behandlung und Farbton wählbar.",
    },
    swatch:
      "repeating-linear-gradient(92deg, hsl(32 28% 50%) 0px, hsl(34 32% 56%) 5px, hsl(28 22% 40%) 11px, hsl(32 28% 50%) 16px)",
  },
  {
    id: "doussie",
    name: "Doussiè",
    category: "wood",
    format: "Bois africain exotique",
    description: {
      fr: "Bois exotique extrêmement résistant, stable et compact. Un choix distinctif qui marque l'espace.",
      en: "Extremely resilient African exotic wood, stable and compact. A distinctive statement choice.",
      de: "Äußerst widerstandsfähiges afrikanisches Edelholz, stabil und kompakt. Markante Wahl.",
    },
    swatch:
      "repeating-linear-gradient(92deg, hsl(18 45% 32%) 0px, hsl(20 50% 38%) 5px, hsl(15 40% 25%) 11px, hsl(18 45% 32%) 16px)",
  },
];

export const materials: Material[] = rawMaterials.map((m) => ({
  ...m,
  image: images[m.id],
}));

export const categoryLabels: Record<MaterialCategory, { fr: string; en: string; de: string }> = {
  ceramic: { fr: "Carrelage Céramique", en: "Ceramic Tiles", de: "Keramikfliesen" },
  spc: { fr: "Plancher SPC", en: "SPC Flooring", de: "SPC-Boden" },
  wood: { fr: "Parquet Bois Naturel", en: "Natural Wood Parquet", de: "Naturholzparkett" },
};
