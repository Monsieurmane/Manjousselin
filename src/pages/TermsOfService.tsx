import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const content = {
  title: {
    fr: "Conditions Générales d'Utilisation",
    en: "Terms of Service",
    de: "Allgemeine Geschäftsbedingungen",
  },
  lastUpdated: {
    fr: "Dernière mise à jour : 16 mars 2026",
    en: "Last updated: March 16, 2026",
    de: "Zuletzt aktualisiert: 16. März 2026",
  },
  back: { fr: "Retour", en: "Back", de: "Zurück" },
  sections: [
    {
      title: {
        fr: "1. Objet",
        en: "1. Purpose",
        de: "1. Gegenstand",
      },
      body: {
        fr: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site internet manejousselin.com, ainsi que les services proposés par Manejousselin, cabinet de conseil en design d'intérieur basé à Hambourg, Allemagne. En accédant à ce site, vous acceptez sans réserve les présentes conditions.",
        en: "These Terms of Service govern access to and use of the website manejousselin.com, as well as the services offered by Manejousselin, an interior design consultancy based in Hamburg, Germany. By accessing this site, you accept these terms without reservation.",
        de: "Diese Allgemeinen Geschäftsbedingungen regeln den Zugang zu und die Nutzung der Website manejousselin.com sowie die von Manejousselin, einer in Hamburg ansässigen Innenarchitekturberatung, angebotenen Dienstleistungen. Mit dem Zugriff auf diese Website akzeptieren Sie diese Bedingungen vorbehaltlos.",
      },
    },
    {
      title: {
        fr: "2. Services proposés",
        en: "2. Services Offered",
        de: "2. Angebotene Dienstleistungen",
      },
      body: {
        fr: "Manejousselin propose des services de design d'intérieur incluant, sans s'y limiter : la visualisation 3D, la sélection de matériaux, l'aménagement d'espaces, la conception de plans, le design luminaire et le suivi de projet. Les prestations sont définies par un contrat spécifique entre le client et Manejousselin.",
        en: "Manejousselin offers interior design services including, but not limited to: 3D visualization, material selection, space planning, technical drawings, lighting design, and project management. Services are defined by a specific contract between the client and Manejousselin.",
        de: "Manejousselin bietet Innenarchitektur-Dienstleistungen an, darunter: 3D-Visualisierung, Materialauswahl, Raumplanung, technische Zeichnungen, Lichtdesign und Projektmanagement. Die Leistungen werden durch einen individuellen Vertrag zwischen dem Kunden und Manejousselin definiert.",
      },
    },
    {
      title: {
        fr: "3. Propriété intellectuelle",
        en: "3. Intellectual Property",
        de: "3. Geistiges Eigentum",
      },
      body: {
        fr: "L'ensemble des contenus présents sur le site manejousselin.com (textes, images, rendus 3D, logos, éléments graphiques) sont la propriété exclusive de Manejousselin ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.",
        en: "All content on manejousselin.com (text, images, 3D renders, logos, graphic elements) is the exclusive property of Manejousselin or its partners and is protected by intellectual property laws. Any reproduction, distribution, or use without prior written authorization is strictly prohibited.",
        de: "Alle Inhalte auf manejousselin.com (Texte, Bilder, 3D-Renderings, Logos, grafische Elemente) sind ausschließliches Eigentum von Manejousselin oder seiner Partner und durch das Urheberrecht geschützt. Jede Vervielfältigung, Verbreitung oder Nutzung ohne vorherige schriftliche Genehmigung ist strengstens untersagt.",
      },
    },
    {
      title: {
        fr: "4. Responsabilité",
        en: "4. Liability",
        de: "4. Haftung",
      },
      body: {
        fr: "Manejousselin s'efforce d'assurer l'exactitude des informations publiées sur le site, mais ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations. Le site peut contenir des liens vers des sites tiers dont nous ne contrôlons ni le contenu ni les pratiques de confidentialité.",
        en: "Manejousselin strives to ensure the accuracy of information published on the site but cannot be held liable for errors, omissions, or results obtained from the use of this information. The site may contain links to third-party websites whose content and privacy practices we do not control.",
        de: "Manejousselin bemüht sich um die Richtigkeit der auf der Website veröffentlichten Informationen, übernimmt jedoch keine Haftung für Fehler, Auslassungen oder Ergebnisse, die aus der Nutzung dieser Informationen resultieren. Die Website kann Links zu Drittanbieter-Websites enthalten, deren Inhalte und Datenschutzpraktiken wir nicht kontrollieren.",
      },
    },
    {
      title: {
        fr: "5. Droit applicable",
        en: "5. Governing Law",
        de: "5. Anwendbares Recht",
      },
      body: {
        fr: "Les présentes conditions sont régies par le droit allemand. En cas de litige, les tribunaux compétents de Hambourg, Allemagne, auront juridiction exclusive, sauf disposition contraire du droit de la consommation applicable.",
        en: "These terms are governed by German law. In the event of a dispute, the competent courts of Hamburg, Germany, shall have exclusive jurisdiction, unless otherwise provided by applicable consumer protection law.",
        de: "Diese Bedingungen unterliegen deutschem Recht. Im Falle eines Rechtsstreits sind ausschließlich die zuständigen Gerichte in Hamburg zuständig, sofern nicht zwingende verbraucherschutzrechtliche Bestimmungen etwas anderes vorsehen.",
      },
    },
    {
      title: {
        fr: "6. Contact",
        en: "6. Contact",
        de: "6. Kontakt",
      },
      body: {
        fr: "Pour toute question concernant ces conditions, veuillez nous contacter via le formulaire de contact sur notre site ou par e-mail à l'adresse indiquée sur la page de contact.",
        en: "For any questions regarding these terms, please contact us via the contact form on our website or by email at the address indicated on the contact page.",
        de: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte über das Kontaktformular auf unserer Website oder per E-Mail an die auf der Kontaktseite angegebene Adresse.",
      },
    },
  ],
};

const TermsOfService = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm tracking-wider"
        >
          <ArrowLeft size={16} />
          {content.back[lang]}
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          {content.title[lang]}
        </h1>
        <p className="text-muted-foreground font-body text-sm mb-12">
          {content.lastUpdated[lang]}
        </p>

        <div className="space-y-10">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                {section.title[lang]}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {section.body[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
