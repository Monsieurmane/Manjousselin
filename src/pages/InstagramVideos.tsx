import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Instagram, ExternalLink, Play, Volume2, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const instagramHandle = "monsieurmane";
const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

const pageText = {
  title: { fr: "Nos Vidéos", en: "Our Videos", de: "Unsere Videos" },
  subtitle: {
    fr: "Découvrez nos créations en mouvement",
    en: "Discover our creations in motion",
    de: "Entdecken Sie unsere Kreationen in Bewegung",
  },
  followUs: { fr: "Suivez-nous sur Instagram", en: "Follow us on Instagram", de: "Folgen Sie uns auf Instagram" },
  watchOn: { fr: "Voir sur Instagram", en: "Watch on Instagram", de: "Auf Instagram ansehen" },
  back: { fr: "Retour", en: "Back", de: "Zurück" },
  clickToWatch: { fr: "Cliquer pour regarder avec le son", en: "Click to watch with sound", de: "Klicken zum Ansehen mit Ton" },
};

// Instagram Reel embed URLs - replace with actual reel shortcodes from the profile
const reels = [
  { id: "DFuHvVlIU95", caption: { fr: "Design d'intérieur", en: "Interior Design", de: "Innenarchitektur" } },
  { id: "DFZ1_nKoUUL", caption: { fr: "Aménagement d'espace", en: "Space Planning", de: "Raumgestaltung" } },
  { id: "DFXZ6hqIV55", caption: { fr: "Inspiration céramique", en: "Ceramic Inspiration", de: "Keramik-Inspiration" } },
  { id: "DE7mMEIIpTk", caption: { fr: "Projet en cours", en: "Work in Progress", de: "Projekt in Arbeit" } },
  { id: "DE1VjhXob_n", caption: { fr: "Nos réalisations", en: "Our Work", de: "Unsere Arbeit" } },
  { id: "DEsvGJoITAa", caption: { fr: "Visite virtuelle", en: "Virtual Tour", de: "Virtuelle Tour" } },
];

const InstagramVideos = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            {pageText.back[lang]}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="text-primary" size={28} />
              <h1 className="font-heading text-3xl md:text-5xl text-foreground">
                {pageText.title[lang]}
              </h1>
            </div>
            <p className="font-body text-sm md:text-base text-muted-foreground tracking-wider max-w-xl mx-auto mb-6">
              {pageText.subtitle[lang]}
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-body text-sm tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} />
              {pageText.followUs[lang]}
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Sound hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <Volume2 size={16} />
            <span className="font-body text-xs tracking-wider">{pageText.clickToWatch[lang]}</span>
          </motion.div>

          {/* Video Grid - Instagram style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[9/16] bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title={reel.caption[lang]}
                />

                {/* Overlay on hover with link */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <p className="font-body text-white text-sm tracking-wider mb-2">{reel.caption[lang]}</p>
                  <a
                    href={`https://www.instagram.com/reel/${reel.id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-body tracking-wider transition-colors"
                  >
                    <Play size={12} />
                    {pageText.watchOn[lang]}
                    <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm tracking-wider transition-colors border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5"
            >
              <Instagram size={18} />
              @{instagramHandle}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstagramVideos;
