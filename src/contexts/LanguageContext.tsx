import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en" | "de";

const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home", de: "Startseite" },
    services: { fr: "Services", en: "Services", de: "Leistungen" },
    portfolio: { fr: "Compétences", en: "Skills", de: "Kompetenzen" },
    about: { fr: "À propos", en: "About", de: "Über uns" },
    contact: { fr: "Contact", en: "Contact", de: "Kontakt" },
    videos: { fr: "Vidéos", en: "Videos", de: "Videos" },
  },
  hero: {
    subtitle: { fr: "Design d'Intérieur — Dakar, Sénégal", en: "Interior Design — Dakar, Senegal", de: "Innenarchitektur — Dakar, Senegal" },
    line1: { fr: "L'Art de", en: "The Art of", de: "Die Kunst," },
    line2: { fr: "Sublimer", en: "Elevating", de: "Räume zu" },
    line3: { fr: "vos Espaces", en: "your Spaces", de: "veredeln" },
    desc: {
      fr: "De la visualisation 3D à la sélection minutieuse des matériaux, nous concevons des intérieurs d'exception qui reflètent votre identité.",
      en: "From 3D visualization to meticulous material selection, we design exceptional interiors that reflect your identity.",
      de: "Von der 3D-Visualisierung bis zur sorgfältigen Materialauswahl gestalten wir außergewöhnliche Innenräume, die Ihre Identität widerspiegeln.",
    },
    cta1: { fr: "Prendre Rendez-vous", en: "Book a Consultation", de: "Beratung buchen" },
    cta2: { fr: "Nos Compétences", en: "Our Skills", de: "Unsere Kompetenzen" },
  },
  services: {
    subtitle: { fr: "Ce que nous offrons", en: "What we offer", de: "Was wir bieten" },
    title: { fr: "Nos", en: "Our", de: "Unsere" },
    titleHighlight: { fr: "Services", en: "Services", de: "Leistungen" },
    items: [
      {
        title: { fr: "Visualisation 3D", en: "3D Visualization", de: "3D-Visualisierung" },
        description: {
          fr: "Explorez votre futur intérieur grâce à des rendus photoréalistes avant même le début des travaux.",
          en: "Explore your future interior through photorealistic renders before construction even begins.",
          de: "Erkunden Sie Ihr zukünftiges Interieur durch fotorealistische Renderings, noch bevor die Arbeiten beginnen.",
        },
      },
      {
        title: { fr: "Sélection des Matériaux", en: "Material Selection", de: "Materialauswahl" },
        description: {
          fr: "Un accompagnement expert dans le choix des finitions, tissus, pierres et bois les plus raffinés.",
          en: "Expert guidance in choosing the finest finishes, fabrics, stones, and woods.",
          de: "Fachkundige Beratung bei der Auswahl der feinsten Oberflächen, Stoffe, Steine und Hölzer.",
        },
      },
      {
        title: { fr: "Aménagement d'Espace", en: "Space Planning", de: "Raumplanung" },
        description: {
          fr: "Optimisation fonctionnelle et esthétique de chaque mètre carré pour un confort absolu.",
          en: "Functional and aesthetic optimization of every square meter for absolute comfort.",
          de: "Funktionale und ästhetische Optimierung jedes Quadratmeters für absoluten Komfort.",
        },
      },
      {
        title: { fr: "Plans & Conception", en: "Plans & Design", de: "Pläne & Entwurf" },
        description: {
          fr: "Des plans techniques détaillés pour guider la réalisation fidèle de votre vision.",
          en: "Detailed technical plans to guide the faithful realization of your vision.",
          de: "Detaillierte technische Pläne für die originalgetreue Umsetzung Ihrer Vision.",
        },
      },
      {
        title: { fr: "Design Luminaire", en: "Lighting Design", de: "Lichtdesign" },
        description: {
          fr: "Création d'ambiances lumineuses sur mesure qui magnifient chaque espace.",
          en: "Custom lighting atmospheres that enhance every space.",
          de: "Maßgeschneiderte Lichtkonzepte, die jeden Raum zur Geltung bringen.",
        },
      },
      {
        title: { fr: "Suivi de Projet", en: "Project Management", de: "Projektbegleitung" },
        description: {
          fr: "Un accompagnement de bout en bout, de la conception à la livraison finale.",
          en: "End-to-end support, from design to final delivery.",
          de: "Rundum-Betreuung, vom Entwurf bis zur finalen Übergabe.",
        },
      },
    ],
  },
  portfolio: {
    subtitle: { fr: "Portfolio", en: "Portfolio", de: "Portfolio" },
    title: { fr: "Nos", en: "Our", de: "Unsere" },
    titleHighlight: { fr: "Compétences", en: "Skills", de: "Kompetenzen" },
    items: [
      {
        title: { fr: "Villa Ngor", en: "Villa Ngor", de: "Villa Ngor" },
        category: { fr: "Résidentiel", en: "Residential", de: "Wohnbau" },
        description: {
          fr: "Une villa contemporaine surplombant l'océan, mêlant matériaux locaux et design moderne.",
          en: "A contemporary villa overlooking the ocean, blending local materials and modern design.",
          de: "Eine zeitgenössische Villa mit Meerblick, die lokale Materialien und modernes Design vereint.",
        },
      },
      {
        title: { fr: "Hôtel Teranga", en: "Hotel Teranga", de: "Hotel Teranga" },
        category: { fr: "Hôtellerie", en: "Hospitality", de: "Hotellerie" },
        description: {
          fr: "Rénovation complète d'un hôtel-boutique au cœur du Plateau, Dakar.",
          en: "Complete renovation of a boutique hotel in the heart of Plateau, Dakar.",
          de: "Komplettrenovierung eines Boutique-Hotels im Herzen von Plateau, Dakar.",
        },
      },
      {
        title: { fr: "Appartement Almadies", en: "Almadies Apartment", de: "Apartment Almadies" },
        category: { fr: "Résidentiel", en: "Residential", de: "Wohnbau" },
        description: {
          fr: "Un penthouse minimaliste avec des finitions en marbre et bois tropical.",
          en: "A minimalist penthouse with marble and tropical wood finishes.",
          de: "Ein minimalistisches Penthouse mit Marmor- und Tropenholzoberflächen.",
        },
      },
      {
        title: { fr: "Bureau Saly", en: "Saly Office", de: "Büro Saly" },
        category: { fr: "Commercial", en: "Commercial", de: "Gewerbe" },
        description: {
          fr: "Espace de coworking haut de gamme alliant productivité et élégance.",
          en: "High-end coworking space combining productivity and elegance.",
          de: "Gehobener Coworking-Space, der Produktivität und Eleganz vereint.",
        },
      },
    ],
  },
  about: {
    subtitle: { fr: "À propos", en: "About", de: "Über uns" },
    title: { fr: "L'Excellence du", en: "The Excellence of", de: "Die Exzellenz des" },
    titleHighlight: { fr: "Design Africain", en: "African Design", de: "Afrikanischen Designs" },
    p1: {
      fr: "Fondé à Hambourg, Manejousselin est un cabinet de conseil en design d'intérieur qui conjugue l'élégance contemporaine avec la richesse des traditions sénégalaises. Notre approche holistique transforme chaque espace en une expérience sensorielle unique.",
      en: "Founded in Hamburg, Manejousselin is an interior design consultancy that combines contemporary elegance with the richness of Senegalese traditions. Our holistic approach transforms every space into a unique sensory experience.",
      de: "Manejousselin wurde in Hamburg gegründet und ist eine Innenarchitekturberatung, die zeitgenössische Eleganz mit dem Reichtum senegalesischer Traditionen verbindet. Unser ganzheitlicher Ansatz verwandelt jeden Raum in ein einzigartiges sensorisches Erlebnis.",
    },
    p2: {
      fr: "Spécialisés en céramique et aménagement d'espaces, nous allions savoir-faire artisanal et design contemporain pour créer des intérieurs qui allient fonctionnalité et esthétique. Chaque détail, du choix des carreaux à l'agencement des volumes, est pensé pour sublimer votre cadre de vie.",
      en: "Specializing in ceramics and space planning, we combine artisanal craftsmanship and contemporary design to create interiors that blend functionality and aesthetics. Every detail, from tile selection to volume arrangement, is designed to elevate your living space.",
      de: "Spezialisiert auf Keramik und Raumgestaltung, verbinden wir handwerkliches Können mit zeitgenössischem Design, um Innenräume zu schaffen, die Funktionalität und Ästhetik vereinen. Jedes Detail, von der Fliesenauswahl bis zur Raumaufteilung, ist darauf ausgelegt, Ihren Lebensraum zu veredeln.",
    },
    cta: { fr: "En savoir plus", en: "Learn more", de: "Mehr erfahren" },
    stats: [
      { label: { fr: "Projets réalisés", en: "Projects completed", de: "Abgeschlossene Projekte" } },
      { label: { fr: "Clients satisfaits", en: "Satisfied clients", de: "Zufriedene Kunden" } },
      { label: { fr: "Années d'expérience", en: "Years of experience", de: "Jahre Erfahrung" } },
      { label: { fr: "Bureau au Sénégal", en: "Office in Senegal", de: "Büro im Senegal" } },
    ],
  },
  contact: {
    subtitle: { fr: "Contactez-nous", en: "Get in touch", de: "Kontaktieren Sie uns" },
    title: { fr: "Parlons de votre", en: "Let's talk about your", de: "Sprechen wir über Ihr" },
    titleHighlight: { fr: "Projet", en: "Project", de: "Projekt" },
    intro: {
      fr: "Chaque projet commence par une conversation. Partagez votre vision avec nous et découvrez comment Manejousselin peut transformer votre espace.",
      en: "Every project begins with a conversation. Share your vision with us and discover how Manejousselin can transform your space.",
      de: "Jedes Projekt beginnt mit einem Gespräch. Teilen Sie uns Ihre Vision mit und entdecken Sie, wie Manejousselin Ihren Raum verwandeln kann.",
    },
    nameLabel: { fr: "Votre Nom", en: "Your Name", de: "Ihr Name" },
    namePlaceholder: { fr: "Entrez votre nom", en: "Enter your name", de: "Geben Sie Ihren Namen ein" },
    emailLabel: { fr: "Adresse E-mail", en: "Email Address", de: "E-Mail-Adresse" },
    msgLabel: { fr: "Votre Message", en: "Your Message", de: "Ihre Nachricht" },
    msgPlaceholder: { fr: "Décrivez votre projet...", en: "Describe your project...", de: "Beschreiben Sie Ihr Projekt..." },
    send: { fr: "Envoyer", en: "Send", de: "Senden" },
    toast: { fr: "Merci ! Votre message a bien été envoyé.", en: "Thank you! Your message has been sent.", de: "Vielen Dank! Ihre Nachricht wurde gesendet." },
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
