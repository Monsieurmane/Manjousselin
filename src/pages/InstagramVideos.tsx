import { useEffect, useState } from "react";
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
  close: { fr: "Fermer", en: "Close", de: "Schließen" },
};

type PostType = "reel" | "post";

interface InstaPost {
  id: string;
  type: PostType;
}

const posts: InstaPost[] = [
  { id: "DWmVzDyDPhY", type: "reel" },
  { id: "DWUNHjfjJmr", type: "reel" },
  { id: "DWBMM_4jUDT", type: "post" },
  { id: "DV5tGBUjbWn", type: "reel" },
  { id: "DGOkwH5so51", type: "reel" },
];

const getEmbedUrl = (post: InstaPost) => {
  if (post.type === "reel") return `https://www.instagram.com/reel/${post.id}/embed/`;
  return `https://www.instagram.com/p/${post.id}/embed/`;
};

const InstagramVideos = () => {
  const { lang } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<InstaPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-0 md:px-0">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-body text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            {pageText.back[lang]}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
              {pageText.title[lang]}
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wider">
              {pageText.subtitle[lang]}
            </p>
          </motion.div>
        </div>

        {/* Grid - clean Instagram-style, edge-to-edge on mobile */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-[2px]">
            {posts.map((post, index) => (
              <motion.button
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedPost(post)}
                className="relative aspect-square bg-muted overflow-hidden cursor-pointer group"
              >
                {/* Thumbnail via iframe - no interaction until clicked */}
                <iframe
                  src={getEmbedUrl(post)}
                  className="w-full h-full border-0 pointer-events-none"
                  style={{ transform: "scale(1.5)", transformOrigin: "center center" }}
                  loading="lazy"
                  title={`Post ${post.id}`}
                  tabIndex={-1}
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-opacity duration-200" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm tracking-wider transition-colors"
          >
            <Instagram size={16} />
            {pageText.followUs[lang]}
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </main>

      {/* Modal - Full post view */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative bg-card rounded-lg overflow-hidden w-full max-w-lg"
            style={{ aspectRatio: selectedPost.type === "reel" ? "9/16" : "1/1", maxHeight: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getEmbedUrl(selectedPost)}
              className="w-full h-full border-0"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title={`Post ${selectedPost.id}`}
            />
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-sm font-bold"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default InstagramVideos;
