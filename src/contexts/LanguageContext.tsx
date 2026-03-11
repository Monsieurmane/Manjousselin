import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    services: { fr: "Services", en: "Services" },
    portfolio: { fr: "Compétences", en: "Skills" },
    about: { fr: "À propos", en: "About" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    subtitle: { fr: "Design d'Intérieur — Dakar, Sénégal", en: "Interior Design — Dakar, Senegal" },
    line1: { fr: "L'Art de", en: "The Art of" },
    line2: { fr: "Sublimer", en: "Elevating" },
    line3: { fr: "vos Espaces", en: "your Spaces" },
    desc: {
      fr: "De la visualisation 3D à la sélection minutieuse des matériaux, nous concevons des intérieurs d'exception qui reflètent votre identité.",
      en: "From 3D visualization to meticulous material selection, we design exceptional interiors that reflect your identity.",
    },
    cta1: { fr: "Prendre Rendez-vous", en: "Book a Consultation" },
    cta2: { fr: "Nos Compétences", en: "Our Skills" },
  },
  services: {
    subtitle: { fr: "Ce que nous offrons", en: "What we offer" },
    title: { fr: "Nos", en: "Our" },
    titleHighlight: { fr: "Services", en: "Services" },
    items: [
      {
        title: { fr: "Visualisation 3D", en: "3D Visualization" },
        description: {
          fr: "Explorez votre futur intérieur grâce à des rendus photoréalistes avant même le début des travaux.",
          en: "Explore your future interior through photorealistic renders before construction even begins.",
        },
      },
      {
        title: { fr: "Sélection des Matériaux", en: "Material Selection" },
        description: {
          fr: "Un accompagnement expert dans le choix des finitions, tissus, pierres et bois les plus raffinés.",
          en: "Expert guidance in choosing the finest finishes, fabrics, stones, and woods.",
        },
      },
      {
        title: { fr: "Aménagement d'Espace", en: "Space Planning" },
        description: {
          fr: "Optimisation fonctionnelle et esthétique de chaque mètre carré pour un confort absolu.",
          en: "Functional and aesthetic optimization of every square meter for absolute comfort.",
        },
      },
      {
        title: { fr: "Plans & Conception", en: "Plans & Design" },
        description: {
          fr: "Des plans techniques détaillés pour guider la réalisation fidèle de votre vision.",
          en: "Detailed technical plans to guide the faithful realization of your vision.",
        },
      },
      {
        title: { fr: "Design Luminaire", en: "Lighting Design" },
        description: {
          fr: "Création d'ambiances lumineuses sur mesure qui magnifient chaque espace.",
          en: "Custom lighting atmospheres that enhance every space.",
        },
      },
      {
        title: { fr: "Suivi de Projet", en: "Project Management" },
        description: {
          fr: "Un accompagnement de bout en bout, de la conception à la livraison finale.",
          en: "End-to-end support, from design to final delivery.",
        },
      },
    ],
  },
  portfolio: {
    subtitle: { fr: "Portfolio", en: "Portfolio" },
    title: { fr: "Nos", en: "Our" },
    titleHighlight: { fr: "Compétences", en: "Skills" },
    items: [
      {
        title: { fr: "Villa Ngor", en: "Villa Ngor" },
        category: { fr: "Résidentiel", en: "Residential" },
        description: {
          fr: "Une villa contemporaine surplombant l'océan, mêlant matériaux locaux et design moderne.",
          en: "A contemporary villa overlooking the ocean, blending local materials and modern design.",
        },
      },
      {
        title: { fr: "Hôtel Teranga", en: "Hotel Teranga" },
        category: { fr: "Hôtellerie", en: "Hospitality" },
        description: {
          fr: "Rénovation complète d'un hôtel-boutique au cœur du Plateau, Dakar.",
          en: "Complete renovation of a boutique hotel in the heart of Plateau, Dakar.",
        },
      },
      {
        title: { fr: "Appartement Almadies", en: "Almadies Apartment" },
        category: { fr: "Résidentiel", en: "Residential" },
        description: {
          fr: "Un penthouse minimaliste avec des finitions en marbre et bois tropical.",
          en: "A minimalist penthouse with marble and tropical wood finishes.",
        },
      },
      {
        title: { fr: "Bureau Saly", en: "Saly Office" },
        category: { fr: "Commercial", en: "Commercial" },
        description: {
          fr: "Espace de coworking haut de gamme alliant productivité et élégance.",
          en: "High-end coworking space combining productivity and elegance.",
        },
      },
    ],
  },
  about: {
    subtitle: { fr: "À propos", en: "About" },
    title: { fr: "L'Excellence du", en: "The Excellence of" },
    titleHighlight: { fr: "Design Africain", en: "African Design" },
    p1: {
      fr: "Fondé à Hambourg, Manejousselin est un cabinet de conseil en design d'intérieur qui conjugue l'élégance contemporaine avec la richesse des traditions sénégalaises. Notre approche holistique transforme chaque espace en une expérience sensorielle unique.",
      en: "Founded in Hamburg, Manejousselin is an interior design consultancy that combines contemporary elegance with the richness of Senegalese traditions. Our holistic approach transforms every space into a unique sensory experience.",
    },
    p2: {
      fr: "Spécialisés en céramique et aménagement d'espaces, nous allions savoir-faire artisanal et design contemporain pour créer des intérieurs qui allient fonctionnalité et esthétique. Chaque détail, du choix des carreaux à l'agencement des volumes, est pensé pour sublimer votre cadre de vie.",
      en: "Specializing in ceramics and space planning, we combine artisanal craftsmanship and contemporary design to create interiors that blend functionality and aesthetics. Every detail, from tile selection to volume arrangement, is designed to elevate your living space.",
    },
    cta: { fr: "En savoir plus", en: "Learn more" },
    stats: [
      { label: { fr: "Projets réalisés", en: "Projects completed" } },
      { label: { fr: "Clients satisfaits", en: "Satisfied clients" } },
      { label: { fr: "Années d'expérience", en: "Years of experience" } },
      { label: { fr: "Bureau au Sénégal", en: "Office in Senegal" } },
    ],
  },
  contact: {
    subtitle: { fr: "Contactez-nous", en: "Get in touch" },
    title: { fr: "Parlons de votre", en: "Let's talk about your" },
    titleHighlight: { fr: "Projet", en: "Project" },
    intro: {
      fr: "Chaque projet commence par une conversation. Partagez votre vision avec nous et découvrez comment Manejousselin peut transformer votre espace.",
      en: "Every project begins with a conversation. Share your vision with us and discover how Manejousselin can transform your space.",
    },
    nameLabel: { fr: "Votre Nom", en: "Your Name" },
    namePlaceholder: { fr: "Entrez votre nom", en: "Enter your name" },
    emailLabel: { fr: "Adresse E-mail", en: "Email Address" },
    msgLabel: { fr: "Votre Message", en: "Your Message" },
    msgPlaceholder: { fr: "Décrivez votre projet...", en: "Describe your project..." },
    send: { fr: "Envoyer", en: "Send" },
    toast: { fr: "Merci ! Votre message a bien été envoyé.", en: "Thank you! Your message has been sent." },
  },
} as const;

type Translations = typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
