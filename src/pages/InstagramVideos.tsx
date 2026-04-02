import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Instagram, ExternalLink, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const instagramHandle = "monsieurmane";
const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

const pageText = {
  title: { fr: "Galerie", en: "Gallery", de: "Galerie" },
  subtitle: {
    fr: "Découvrez nos créations en images et en mouvement",
    en: "Discover our creations in images and motion",
    de: "Entdecken Sie unsere Kreationen in Bild und Bewegung",
  },
  followUs: { fr: "Suivez-nous sur Instagram", en: "Follow us on Instagram", de: "Folgen Sie uns auf Instagram" },
  back: { fr: "Retour", en: "Back", de: "Zurück" },
};

type PostType = "reel" | "post";

interface InstaPost {
  id: string;
  type: PostType;
  caption: { fr: string; en: string; de: string };
}

const posts: InstaPost[] = [
  { id: "DWmVzDyDPhY", type: "reel", caption: { fr: "Création récente", en: "Recent Creation", de: "Neueste Kreation" } },
  { id: "DWUNHjfjJmr", type: "reel", caption: { fr: "Design d'intérieur", en: "Interior Design", de: "Innenarchitektur" } },
  { id: "DWBMM_4jUDT", type: "post", caption: { fr: "Inspiration", en: "Inspiration", de: "Inspiration" } },
  { id: "DV5tGBUjbWn", type: "reel", caption: { fr: "Projet en cours", en: "Work in Progress", de: "Projekt in Arbeit" } },
  { id: "DGOkwH5so51", type: "reel", caption: { fr: "Nos réalisations", en: "Our Work", de: "Unsere Arbeit" } },
];

const getEmbedUrl = (post: InstaPost) => {
  if (post.type === "reel") return `https://www.instagram.com/reel/${post.id}/embed/`;
  return `https://www.instagram.com/p/${post.id}/embed/`;
};

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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            {pageText.back[lang]}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
              {pageText.title[lang]}
            </h1>
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

          {/* Posts Grid - embeds play directly on this page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-card rounded-lg overflow-hidden border border-border"
                style={{ aspectRatio: post.type === "reel" ? "9/16" : "1/1" }}
              >
                <iframe
                  src={getEmbedUrl(post)}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  title={post.caption[lang]}
                />
              </motion.div>
            ))}
          </div>

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
