import type { MaterialCategory } from "./materials";

export type Lang = "fr" | "en" | "de";

export interface Slot {
  id: string;
  label: { fr: string; en: string; de: string };
  allowed: MaterialCategory[];
}

export interface Room {
  id: string;
  label: { fr: string; en: string; de: string };
  icon: string; // emoji for lightweight visual
  slots: Slot[];
}

export const rooms: Room[] = [
  {
    id: "bathroom",
    label: { fr: "Salle de bain", en: "Bathroom", de: "Badezimmer" },
    icon: "🛁",
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" }, allowed: ["ceramic", "spc"] },
      { id: "wall", label: { fr: "Mur", en: "Wall", de: "Wand" }, allowed: ["ceramic"] },
      { id: "shower", label: { fr: "Douche", en: "Shower", de: "Dusche" }, allowed: ["ceramic"] },
      { id: "vanity", label: { fr: "Plan vasque", en: "Vanity top", de: "Waschtisch" }, allowed: ["ceramic"] },
    ],
  },
  {
    id: "kitchen",
    label: { fr: "Cuisine", en: "Kitchen", de: "Küche" },
    icon: "🍳",
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" }, allowed: ["ceramic", "spc", "wood"] },
      { id: "splashback", label: { fr: "Crédence / Mur", en: "Splashback / Wall", de: "Rückwand" }, allowed: ["ceramic"] },
      { id: "countertop", label: { fr: "Plan de travail", en: "Countertop", de: "Arbeitsplatte" }, allowed: ["ceramic"] },
    ],
  },
  {
    id: "living",
    label: { fr: "Salon", en: "Living room", de: "Wohnzimmer" },
    icon: "🛋️",
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" }, allowed: ["spc", "wood", "ceramic"] },
      { id: "feature", label: { fr: "Mur d'accent", en: "Feature wall", de: "Akzentwand" }, allowed: ["ceramic"] },
      { id: "accent", label: { fr: "Détail", en: "Accent", de: "Akzent" }, allowed: ["wood", "ceramic"] },
    ],
  },
  {
    id: "balcony",
    label: { fr: "Balcon", en: "Balcony", de: "Balkon" },
    icon: "🌇",
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" }, allowed: ["ceramic", "spc"] },
      { id: "wall", label: { fr: "Mur", en: "Wall", de: "Wand" }, allowed: ["ceramic"] },
    ],
  },
  {
    id: "terrace",
    label: { fr: "Terrasse", en: "Terrace", de: "Terrasse" },
    icon: "🏖️",
    slots: [
      { id: "floor", label: { fr: "Sol", en: "Floor", de: "Boden" }, allowed: ["ceramic", "wood"] },
      { id: "cladding", label: { fr: "Habillage", en: "Cladding", de: "Verkleidung" }, allowed: ["ceramic", "wood"] },
    ],
  },
  {
    id: "garden",
    label: { fr: "Jardin", en: "Garden", de: "Garten" },
    icon: "🌿",
    slots: [
      { id: "path", label: { fr: "Allée", en: "Pathway", de: "Weg" }, allowed: ["ceramic"] },
      { id: "pool", label: { fr: "Plage de piscine", en: "Pool deck", de: "Poolumrandung" }, allowed: ["ceramic", "wood"] },
      { id: "border", label: { fr: "Bordure", en: "Border", de: "Einfassung" }, allowed: ["ceramic"] },
    ],
  },
];

export type LightAmbience = "warm" | "neutral" | "cool";
export type LightIntensity = "soft" | "medium" | "statement";

export const ambienceLabels: Record<LightAmbience, { fr: string; en: string; de: string }> = {
  warm: { fr: "Chaude", en: "Warm", de: "Warm" },
  neutral: { fr: "Neutre", en: "Neutral", de: "Neutral" },
  cool: { fr: "Froide", en: "Cool", de: "Kalt" },
};

export const intensityLabels: Record<LightIntensity, { fr: string; en: string; de: string }> = {
  soft: { fr: "Douce", en: "Soft", de: "Sanft" },
  medium: { fr: "Moyenne", en: "Medium", de: "Mittel" },
  statement: { fr: "Affirmée", en: "Statement", de: "Markant" },
};
