import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const content = {
  title: {
    fr: "Politique de Confidentialité",
    en: "Privacy Policy",
    de: "Datenschutzerklärung",
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
        fr: "1. Responsable du traitement",
        en: "1. Data Controller",
        de: "1. Verantwortlicher",
      },
      body: {
        fr: "Le responsable du traitement des données personnelles collectées via le site manejousselin.com est Manejousselin, cabinet de conseil en design d'intérieur, basé à Hambourg, Allemagne. Pour toute question relative à vos données personnelles, vous pouvez nous contacter via notre formulaire de contact.",
        en: "The data controller for personal data collected through manejousselin.com is Manejousselin, an interior design consultancy based in Hamburg, Germany. For any questions regarding your personal data, you may contact us via our contact form.",
        de: "Der Verantwortliche für die über manejousselin.com erhobenen personenbezogenen Daten ist Manejousselin, eine Innenarchitekturberatung mit Sitz in Hamburg, Deutschland. Bei Fragen zu Ihren personenbezogenen Daten können Sie uns über unser Kontaktformular erreichen.",
      },
    },
    {
      title: {
        fr: "2. Données collectées",
        en: "2. Data Collected",
        de: "2. Erhobene Daten",
      },
      body: {
        fr: "Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact : votre nom, votre adresse e-mail et le contenu de votre message. Ces données sont collectées uniquement dans le but de répondre à vos demandes et de vous fournir des informations sur nos services.",
        en: "We collect the following data when you use our contact form: your name, email address, and the content of your message. This data is collected solely for the purpose of responding to your inquiries and providing information about our services.",
        de: "Wir erheben folgende Daten, wenn Sie unser Kontaktformular nutzen: Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht. Diese Daten werden ausschließlich erhoben, um Ihre Anfragen zu beantworten und Ihnen Informationen über unsere Dienstleistungen bereitzustellen.",
      },
    },
    {
      title: {
        fr: "3. Base juridique du traitement",
        en: "3. Legal Basis for Processing",
        de: "3. Rechtsgrundlage der Verarbeitung",
      },
      body: {
        fr: "Le traitement de vos données personnelles est fondé sur votre consentement (article 6, paragraphe 1, point a du RGPD) lorsque vous soumettez volontairement vos informations via notre formulaire de contact, ainsi que sur notre intérêt légitime à répondre à vos demandes commerciales.",
        en: "The processing of your personal data is based on your consent (Article 6(1)(a) GDPR) when you voluntarily submit your information through our contact form, as well as on our legitimate interest in responding to your business inquiries.",
        de: "Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), wenn Sie Ihre Informationen freiwillig über unser Kontaktformular übermitteln, sowie auf Grundlage unseres berechtigten Interesses, auf Ihre geschäftlichen Anfragen zu antworten.",
      },
    },
    {
      title: {
        fr: "4. Durée de conservation",
        en: "4. Data Retention",
        de: "4. Speicherdauer",
      },
      body: {
        fr: "Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre demande et pendant une période maximale de 3 ans après le dernier contact, sauf obligation légale de conservation plus longue.",
        en: "Your personal data is retained for the duration necessary to process your request and for a maximum period of 3 years after the last contact, unless a longer retention period is required by law.",
        de: "Ihre personenbezogenen Daten werden für die zur Bearbeitung Ihrer Anfrage erforderliche Dauer und maximal 3 Jahre nach dem letzten Kontakt gespeichert, sofern keine gesetzliche Aufbewahrungspflicht eine längere Speicherung erfordert.",
      },
    },
    {
      title: {
        fr: "5. Vos droits",
        en: "5. Your Rights",
        de: "5. Ihre Rechte",
      },
      body: {
        fr: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité des données et d'opposition au traitement. Pour exercer ces droits, veuillez nous contacter via notre formulaire de contact ou par courrier postal.",
        en: "In accordance with the General Data Protection Regulation (GDPR), you have the following rights: the right of access, rectification, erasure, restriction of processing, data portability, and the right to object to processing. To exercise these rights, please contact us via our contact form or by postal mail.",
        de: "Gemäß der Datenschutz-Grundverordnung (DSGVO) stehen Ihnen folgende Rechte zu: Auskunftsrecht, Recht auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruchsrecht. Um diese Rechte auszuüben, kontaktieren Sie uns bitte über unser Kontaktformular oder per Post.",
      },
    },
    {
      title: {
        fr: "6. Cookies",
        en: "6. Cookies",
        de: "6. Cookies",
      },
      body: {
        fr: "Notre site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de suivi n'est utilisé sans votre consentement explicite. Vous pouvez configurer votre navigateur pour refuser les cookies.",
        en: "Our site may use technical cookies necessary for the proper functioning of the website. No advertising or tracking cookies are used without your explicit consent. You can configure your browser to refuse cookies.",
        de: "Unsere Website kann technische Cookies verwenden, die für das ordnungsgemäße Funktionieren der Website erforderlich sind. Werbe- oder Tracking-Cookies werden ohne Ihre ausdrückliche Einwilligung nicht verwendet. Sie können Ihren Browser so konfigurieren, dass Cookies abgelehnt werden.",
      },
    },
    {
      title: {
        fr: "7. Contact",
        en: "7. Contact",
        de: "7. Kontakt",
      },
      body: {
        fr: "Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, veuillez nous contacter via le formulaire de contact de notre site ou par e-mail à l'adresse indiquée sur la page de contact.",
        en: "For any questions regarding our privacy policy or to exercise your rights, please contact us via the contact form on our website or by email at the address indicated on the contact page.",
        de: "Bei Fragen zu unserer Datenschutzerklärung oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte über das Kontaktformular auf unserer Website oder per E-Mail an die auf der Kontaktseite angegebene Adresse.",
      },
    },
  ],
};

const PrivacyPolicy = () => {
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

export default PrivacyPolicy;
