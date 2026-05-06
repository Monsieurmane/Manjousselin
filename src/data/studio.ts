import roomEntree from "@/assets/studio/room-entree.jpg";
import roomCuisine from "@/assets/studio/room-cuisine.jpg";
import roomBain from "@/assets/studio/room-bain.jpg";
import roomSalon from "@/assets/studio/room-salon.jpg";
import roomChambre from "@/assets/studio/room-chambre.jpg";
import roomTerrasse from "@/assets/studio/room-terrasse.jpg";
import { studioMaterials, type Material } from "./materials";

export type Lang = "fr" | "en" | "de";

export interface StudioSlot {
  id: string;
  label: { fr: string; en: string; de: string };
}

export interface MaterialPair {
  id: string;
  title: { fr: string; en: string; de: string };
  /** Slot id -> material id */
  picks: Record<string, string>;
  /** Curated bestseller flag for "Surprenez-moi" */
  bestseller?: boolean;
}

export interface StudioRoom {
  id: string;
  label: { fr: string; en: string; de: string };
  tagline: { fr: string; en: string; de: string };
  image: string;
  slots: StudioSlot[];
  pairs: MaterialPair[];
}

const m = (id: string) => {
  const found = studioMaterials.find((x) => x.id === id);
  if (!found) console.warn(`Material not found: ${id}`);
  return id;
};

export const studioRooms: StudioRoom[] = [
  {
    id: "entree",
    label: { fr: "Entrée / Hall", en: "Entrance / Hall", de: "Eingang / Halle" },
    tagline: {
      fr: "La première impression — sols nobles et lumière douce.",
      en: "The first impression — noble floors and soft light.",
      de: "Der erste Eindruck — edle Böden und sanftes Licht.",
    },
    image: roomEntree,
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" } },
      { id: "wall", label: { fr: "Mur d'accent", en: "Accent wall", de: "Akzentwand" } },
    ],
    pairs: [
      {
        id: "entree-noble",
        title: { fr: "Accueil Noble", en: "Noble Welcome", de: "Edler Empfang" },
        picks: { floor: m("calacatta-gold"), wall: m("travertin-sable") },
        bestseller: true,
      },
      {
        id: "entree-warm",
        title: { fr: "Chaleur d'Ouidah", en: "Warmth of Ouidah", de: "Wärme von Ouidah" },
        picks: { floor: m("granit-bamako"), wall: m("terre-ouidah") },
      },
    ],
  },
  {
    id: "cuisine",
    label: { fr: "Cuisine", en: "Kitchen", de: "Küche" },
    tagline: {
      fr: "Terre et feu — duos plan + crédence pour la pièce qui rassemble.",
      en: "Earth and fire — countertop + splashback duos for the gathering room.",
      de: "Erde und Feuer — Arbeitsplatte und Rückwand-Duos für den Raum, der verbindet.",
    },
    image: roomCuisine,
    slots: [
      { id: "countertop", label: { fr: "Plan de travail", en: "Countertop", de: "Arbeitsplatte" } },
      { id: "splashback", label: { fr: "Crédence", en: "Splashback", de: "Rückwand" } },
    ],
    pairs: [
      {
        id: "cuisine-terre-feu",
        title: { fr: "Terre & Feu", en: "Earth & Fire", de: "Erde & Feuer" },
        picks: { countertop: m("travertin-sable"), splashback: m("zellige-ocre") },
        bestseller: true,
      },
      {
        id: "cuisine-graphique",
        title: { fr: "Quartz & Chêne", en: "Quartz & Oak", de: "Quarz & Eiche" },
        picks: { countertop: m("granit-bamako"), splashback: m("oak-classic") },
      },
      {
        id: "cuisine-classique",
        title: { fr: "Marbre Intemporel", en: "Timeless Marble", de: "Zeitloser Marmor" },
        picks: { countertop: m("calacatta-gold"), splashback: m("elegance-calacatta") },
      },
    ],
  },
  {
    id: "bain",
    label: { fr: "Salle de bain", en: "Bathroom", de: "Badezimmer" },
    tagline: {
      fr: "Évasion minérale — sols, murs et vasques en harmonie.",
      en: "Mineral escape — floors, walls and vanities in harmony.",
      de: "Mineralische Auszeit — Böden, Wände und Waschtische im Einklang.",
    },
    image: roomBain,
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" } },
      { id: "wall", label: { fr: "Mur", en: "Wall", de: "Wand" } },
      { id: "vanity", label: { fr: "Vasque", en: "Vanity", de: "Waschtisch" } },
    ],
    pairs: [
      {
        id: "bain-evasion",
        title: { fr: "Évasion Minérale", en: "Mineral Escape", de: "Mineralische Auszeit" },
        picks: { floor: m("granit-bamako"), wall: m("tadelakt-terracotta"), vanity: m("marbre-vert-foret") },
        bestseller: true,
      },
      {
        id: "bain-spa",
        title: { fr: "Spa Lumineux", en: "Luminous Spa", de: "Leuchtender Spa" },
        picks: { floor: m("julia-calacatta"), wall: m("travertin-sable"), vanity: m("calacatta-gold") },
      },
    ],
  },
  {
    id: "salon",
    label: { fr: "Salon / Séjour", en: "Living room", de: "Wohnzimmer" },
    tagline: {
      fr: "Le cœur de la maison — bois, pierre et matières chaleureuses.",
      en: "The heart of the home — wood, stone and warm matter.",
      de: "Das Herz des Hauses — Holz, Stein und warme Materialien.",
    },
    image: roomSalon,
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" } },
      { id: "feature", label: { fr: "Mur d'accent", en: "Feature wall", de: "Akzentwand" } },
    ],
    pairs: [
      {
        id: "salon-chevron",
        title: { fr: "Chevron Doré", en: "Golden Chevron", de: "Goldenes Chevron" },
        picks: { floor: m("oak-classic"), feature: m("marbre-vert-foret") },
        bestseller: true,
      },
      {
        id: "salon-contemporain",
        title: { fr: "Contemporain Chaleureux", en: "Warm Contemporary", de: "Warmer Modernismus" },
        picks: { floor: m("harbour-gold"), feature: m("terre-ouidah") },
      },
      {
        id: "salon-statement",
        title: { fr: "Signature Audacieuse", en: "Bold Signature", de: "Mutige Handschrift" },
        picks: { floor: m("doussie"), feature: m("calacatta-gold") },
      },
    ],
  },
  {
    id: "chambre",
    label: { fr: "Chambre", en: "Bedroom", de: "Schlafzimmer" },
    tagline: {
      fr: "Cocon feutré — bois doux et tonalités enveloppantes.",
      en: "Soft cocoon — gentle wood and enveloping tones.",
      de: "Weicher Kokon — sanftes Holz und umhüllende Töne.",
    },
    image: roomChambre,
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" } },
      { id: "headboard", label: { fr: "Tête de lit", en: "Headboard wall", de: "Kopfwand" } },
    ],
    pairs: [
      {
        id: "chambre-cocon",
        title: { fr: "Cocon Terracotta", en: "Terracotta Cocoon", de: "Terrakotta-Kokon" },
        picks: { floor: m("season-spring"), headboard: m("tadelakt-terracotta") },
        bestseller: true,
      },
      {
        id: "chambre-zen",
        title: { fr: "Zen Lumineux", en: "Luminous Zen", de: "Leuchtender Zen" },
        picks: { floor: m("ash-serie"), headboard: m("travertin-sable") },
      },
    ],
  },
  {
    id: "terrasse",
    label: { fr: "Terrasse / Extérieur", en: "Terrace / Outdoor", de: "Terrasse / Außen" },
    tagline: {
      fr: "Prolonger la maison — pierres robustes et bois nobles au soleil.",
      en: "Extend the home — robust stones and noble woods in the sun.",
      de: "Das Zuhause erweitern — robuste Steine und edle Hölzer in der Sonne.",
    },
    image: roomTerrasse,
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" } },
      { id: "deck", label: { fr: "Plage / Deck", en: "Deck", de: "Deck" } },
    ],
    pairs: [
      {
        id: "terrasse-tropic",
        title: { fr: "Pierre & Doussiè", en: "Stone & Doussiè", de: "Stein & Doussiè" },
        picks: { floor: m("granit-bamako"), deck: m("doussie") },
        bestseller: true,
      },
      {
        id: "terrasse-mediterranee",
        title: { fr: "Méditerranée", en: "Mediterranean", de: "Mediterran" },
        picks: { floor: m("travertin-sable"), deck: m("oak-classic") },
      },
    ],
  },
];

export const findMaterial = (id: string): Material | undefined =>
  studioMaterials.find((x) => x.id === id);
