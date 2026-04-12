import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocials } from "@/components/FloatingSocials";
import { useLanguage } from "@/contexts/LanguageContext";
import founderImg from "@/assets/founder-portrait.jpg";

const statIcons = [Award, Users, Clock, MapPin];
const statValues = ["20+", "20+", "6", "1"];

const AboutPage = () => {
  const { lang, t } = useLanguage();
  const a = t.about;

  const bioText = {
    fr: [
      "Je suis le fondateur de Manejousselin, MAISON DE DESIGN fondé à Hambourg, en Allemagne. Passionné par l'art de transformer les espaces, j'ai consacré plus de six années à perfectionner mon expertise dans la conception d'intérieurs qui allient élégance contemporaine et richesse culturelle.",
      "Mon parcours m'a conduit de Hambourg à Dakar, où j'ai établi notre bureau au Sénégal. Cette double perspective européenne et africaine nourrit une approche unique du design, puisant dans les traditions sénégalaises tout en embrassant les tendances internationales.",
      "Spécialisé en céramique et aménagement d'espaces, je mets un point d'honneur à allier savoir-faire artisanal et design contemporain. Chaque détail, du choix des carreaux à l'agencement des volumes, est pensé pour sublimer votre cadre de vie et créer des intérieurs qui reflètent véritablement votre identité.",
      "Avec plus de 20 projets réalisés et autant de clients satisfaits, ma mission reste la même : transformer chaque espace en une expérience sensorielle unique, où fonctionnalité et esthétique se rencontrent harmonieusement.",
    ],
    en: [
      "I am the founder of Manejousselin, an interior design consultancy founded in Hamburg, Germany. Passionate about the art of transforming spaces, I have dedicated over six years to perfecting my expertise in designing interiors that combine contemporary elegance with cultural richness.",
      "My journey has taken me from Hamburg to Dakar, where I established our office in Senegal. This dual European and African perspective fuels a unique approach to design, drawing from Senegalese traditions while embracing international trends.",
      "Specializing in ceramics and space planning, I pride myself on combining artisanal craftsmanship with contemporary design. Every detail, from tile selection to volume arrangement, is designed to elevate your living space and create interiors that truly reflect your identity.",
      "With over 20 completed projects and just as many satisfied clients, my mission remains the same: to transform every space into a unique sensory experience, where functionality and aesthetics meet harmoniously.",
    ],
    de: [
      "Ich bin der Gründer von Manejousselin, einer Innenarchitekturberatung mit Sitz in Hamburg, Deutschland. Leidenschaftlich für die Kunst der Raumgestaltung, habe ich über sechs Jahre damit verbracht, meine Expertise in der Gestaltung von Innenräumen zu perfektionieren, die zeitgenössische Eleganz mit kulturellem Reichtum verbinden.",
      "Mein Weg hat mich von Hamburg nach Dakar geführt, wo ich unser Büro im Senegal aufgebaut habe. Diese doppelte europäische und afrikanische Perspektive nährt einen einzigartigen Designansatz, der aus senegalesischen Traditionen schöpft und gleichzeitig internationale Trends aufgreift.",
      "Spezialisiert auf Keramik und Raumgestaltung, lege ich großen Wert darauf, handwerkliches Können mit zeitgenössischem Design zu verbinden. Jedes Detail, von der Fliesenauswahl bis zur Raumaufteilung, ist darauf ausgelegt, Ihren Lebensraum zu veredeln und Innenräume zu schaffen, die Ihre Identität widerspiegeln.",
      "Mit über 20 abgeschlossenen Projekten und ebenso vielen zufriedenen Kunden bleibt meine Mission dieselbe: jeden Raum in ein einzigartiges sensorisches Erlebnis zu verwandeln, in dem Funktionalität und Ästhetik harmonisch aufeinandertreffen.",
    ],
  };

  const pageTitle = {
    fr: "À propos",
    en: "About",
    de: "Über mich",
  };

  const founderName = "Moussa Mane";
  const founderRole = {
    fr: "Fondateur & Designer d'Intérieur",
    en: "Founder & Interior Designer",
    de: "Gründer & Innenarchitekt",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingSocials />

      {/* Hero banner */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center"
          >
            {pageTitle[lang]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground text-center mb-4"
          >
            {a.title[lang]}{" "}
            <span className="italic font-display text-gradient-gold">{a.titleHighlight[lang]}</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-px line-gold mx-auto"
          />
        </div>
      </section>

      {/* Photo + Bio */}
      <section className="pb-16 md:pb-28 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <img
                  src={founderImg}
                  alt={founderName}
                  className="w-full rounded-lg object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-primary/10" />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="font-heading text-xl md:text-2xl text-foreground font-light">
                  {founderName}
                </h3>
                <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary mt-1">
                  {founderRole[lang]}
                </p>
              </div>

              {/* Education */}
              <div className="mt-8 text-center lg:text-left">
                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  {lang === "fr" ? "Formation" : lang === "de" ? "Ausbildung" : "Education"}
                </p>
                <div className="space-y-3">
                  <a
                    href="https://page.redbox.de/design-factory-international-stellt-betrieb-ein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors duration-300 leading-relaxed"
                  >
                    Design Factory International Hamburg — {lang === "fr" ? "Diplôme en Graphisme" : lang === "de" ? "Diplom in Grafikdesign" : "Diploma in Graphic Design"}
                  </a>
                  <a
                    href="https://www.hfbk-hamburg.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors duration-300 leading-relaxed"
                  >
                    Hochschule für Bildende Künste Hamburg — Bachelor Product Design
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              {bioText[lang].map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light"
                >
                  {paragraph}
                </p>
              ))}

              <a
                href="https://wa.me/4915568580042?text=Bonjour%20Mane%20Josselin%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 md:px-8 py-3 md:py-3.5 border border-primary text-primary font-body text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {a.cta[lang]}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 md:pb-28 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
          >
            {a.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <div key={i} className="bg-background p-6 md:p-10 text-center">
                  <Icon size={24} strokeWidth={1} className="text-primary mx-auto mb-4" />
                  <p className="font-display text-3xl md:text-4xl text-foreground mb-2">{statValues[i]}</p>
                  <p className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {s.label[lang]}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default AboutPage;
