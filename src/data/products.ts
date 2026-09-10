export type Lang = "fr" | "en" | "de";
export type L10n = Record<Lang, string>;

export interface Product {
  id: string;
  category: string;
  /** Optional image path — add your own photo later, e.g. import img from "@/assets/products/xxx.jpg" */
  image?: string;
  name: L10n;
  description: L10n;
  /** Leave undefined to display a "Prix sur demande" button */
  price?: string;
}

export interface ProductCategory {
  id: string;
  label: L10n;
  subcategories: L10n[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "meubles",
    label: { fr: "Meubles", en: "Furniture", de: "Möbel" },
    subcategories: [
      { fr: "Canapés", en: "Sofas", de: "Sofas" },
      { fr: "Tables", en: "Tables", de: "Tische" },
      { fr: "Chaises", en: "Chairs", de: "Stühle" },
      { fr: "Armoires", en: "Wardrobes", de: "Schränke" },
      { fr: "Lits", en: "Beds", de: "Betten" },
      { fr: "Meubles TV", en: "TV units", de: "TV-Möbel" },
      { fr: "Décoration & autres meubles", en: "Decor & other furniture", de: "Deko & weitere Möbel" },
    ],
  },
  {
    id: "carrelage",
    label: { fr: "Carrelage", en: "Tiles", de: "Fliesen" },
    subcategories: [
      { fr: "Carrelage intérieur", en: "Indoor tiles", de: "Innenfliesen" },
      { fr: "Carrelage extérieur", en: "Outdoor tiles", de: "Außenfliesen" },
      { fr: "Carrelage mural", en: "Wall tiles", de: "Wandfliesen" },
      { fr: "Carrelage sol", en: "Floor tiles", de: "Bodenfliesen" },
      { fr: "Styles & finitions", en: "Styles & finishes", de: "Stile & Oberflächen" },
    ],
  },
  {
    id: "sanitaires",
    label: { fr: "Robinets & Sanitaires", en: "Taps & Sanitary", de: "Armaturen & Sanitär" },
    subcategories: [
      { fr: "Robinets de cuisine", en: "Kitchen taps", de: "Küchenarmaturen" },
      { fr: "Robinets de salle de bain", en: "Bathroom taps", de: "Badarmaturen" },
      { fr: "Douches", en: "Showers", de: "Duschen" },
      { fr: "Lavabos", en: "Washbasins", de: "Waschbecken" },
      { fr: "Accessoires sanitaires", en: "Sanitary accessories", de: "Sanitärzubehör" },
    ],
  },
  {
    id: "eclairage",
    label: { fr: "Lampes & Éclairage", en: "Lamps & Lighting", de: "Lampen & Beleuchtung" },
    subcategories: [
      { fr: "Lampes décoratives", en: "Decorative lamps", de: "Dekoleuchten" },
      { fr: "Suspensions", en: "Pendant lights", de: "Pendelleuchten" },
      { fr: "Lampes de table", en: "Table lamps", de: "Tischleuchten" },
      { fr: "Lampadaires", en: "Floor lamps", de: "Stehleuchten" },
      { fr: "Éclairage intérieur", en: "Indoor lighting", de: "Innenbeleuchtung" },
      { fr: "Éclairage extérieur", en: "Outdoor lighting", de: "Außenbeleuchtung" },
    ],
  },
  {
    id: "parfums",
    label: { fr: "Parfums", en: "Fragrances", de: "Parfums" },
    subcategories: [
      { fr: "Parfums Homme", en: "Men's fragrances", de: "Herrendüfte" },
      { fr: "Parfums Femme", en: "Women's fragrances", de: "Damendüfte" },
      { fr: "Parfums mixtes", en: "Unisex fragrances", de: "Unisex-Düfte" },
      { fr: "Coffrets & accessoires", en: "Gift sets & accessories", de: "Sets & Zubehör" },
    ],
  },
  {
    id: "tech",
    label: { fr: "Smartphones & Technologie", en: "Smartphones & Tech", de: "Smartphones & Technik" },
    subcategories: [
      { fr: "Smartphones", en: "Smartphones", de: "Smartphones" },
      { fr: "Accessoires smartphones", en: "Smartphone accessories", de: "Smartphone-Zubehör" },
      { fr: "Chargeurs", en: "Chargers", de: "Ladegeräte" },
      { fr: "Écouteurs", en: "Headphones", de: "Kopfhörer" },
      { fr: "Autres accessoires électroniques", en: "Other electronics", de: "Weitere Elektronik" },
    ],
  },
  {
    id: "climatisation",
    label: { fr: "Climatiseurs", en: "Air conditioning", de: "Klimaanlagen" },
    subcategories: [
      { fr: "Climatiseurs", en: "Air conditioners", de: "Klimageräte" },
      { fr: "Modèles & puissances", en: "Models & capacities", de: "Modelle & Leistungen" },
      { fr: "Accessoires de climatisation", en: "AC accessories", de: "Klima-Zubehör" },
    ],
  },
  {
    id: "electromenager",
    label: { fr: "Réfrigérateurs & Électroménager", en: "Fridges & Appliances", de: "Kühlschränke & Haushaltsgeräte" },
    subcategories: [
      { fr: "Réfrigérateurs", en: "Refrigerators", de: "Kühlschränke" },
      { fr: "Congélateurs", en: "Freezers", de: "Gefrierschränke" },
      { fr: "Petit électroménager", en: "Small appliances", de: "Kleingeräte" },
      { fr: "Autres équipements maison", en: "Other home equipment", de: "Weitere Haushaltsgeräte" },
    ],
  },
  {
    id: "autres",
    label: { fr: "Autres produits", en: "Other products", de: "Weitere Produkte" },
    subcategories: [
      { fr: "Nouveautés & pièces uniques", en: "New arrivals & unique pieces", de: "Neuheiten & Einzelstücke" },
    ],
  },
];

const placeholderDesc: L10n = {
  fr: "Sélection curatée — photos et détails à venir.",
  en: "Curated selection — photos and details coming soon.",
  de: "Kuratierte Auswahl — Fotos und Details folgen.",
};

/**
 * Product list. Add real products here; set `image` once your photos are ready.
 * Until then each subcategory shows an elegant placeholder card.
 */
export const products: Product[] = productCategories.flatMap((cat) =>
  cat.subcategories.map((sub, i) => ({
    id: `${cat.id}-${i}`,
    category: cat.id,
    name: sub,
    description: placeholderDesc,
  })),
);
