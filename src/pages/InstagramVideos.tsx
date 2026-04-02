import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Instagram, ExternalLink, ArrowLeft, Play, Grid3X3, Film } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

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
  all: { fr: "Tout", en: "All", de: "Alle" },
  reels: { fr: "Reels", en: "Reels", de: "Reels" },
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

const getThumbnailUrl = (post: InstaPost) => {
  // Use Instagram's embed as thumbnail in grid
  return getEmbedUrl(post);
};

const InstagramVideos = () => {
  const { lang } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<InstaPost | null>(null);
  const [filter, setFilter] = useState<"all" | "reel">("all");

  const filteredPosts = filter === "all" ? posts : posts.filter(p => p.type === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
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

      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Header - Instagram profile style */}
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
            className="flex flex-col items-center mb-8"
          >
            {/* Profile-like header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <Instagram className="text-primary" size={28} />
              </div>
              <div className="text-left">
                <h1 className="font-heading text-xl md:text-2xl text-foreground">
                  @{instagramHandle}
                </h1>
                <p className="font-body text-xs md:text-sm text-muted-foreground tracking-wider mt-1">
                  {pageText.subtitle[lang]}
                </p>
              </div>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-body text-xs tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            >
              {pageText.followUs[lang]}
              <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Tab bar - Instagram style */}
          <div className="flex justify-center border-t border-border mb-0">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-1.5 px-6 py-3 font-body text-xs tracking-widest uppercase transition-colors border-t-2 -mt-[2px] ${
                filter === "all"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid3X3 size={14} />
              {pageText.all[lang]}
            </button>
            <button
              onClick={() => setFilter("reel")}
              className={`flex items-center gap-1.5 px-6 py-3 font-body text-xs tracking-widest uppercase transition-colors border-t-2 -mt-[2px] ${
                filter === "reel"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Film size={14} />
              {pageText.reels[lang]}
            </button>
          </div>

          {/* Grid - Instagram 3-column style */}
          <div className="grid grid-cols-3 gap-[3px]">
            {filteredPosts.map((post, index) => (
              <motion.button
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedPost(post)}
                className="relative aspect-square bg-card overflow-hidden group cursor-pointer"
              >
                {/* Thumbnail via iframe (no interaction until clicked) */}
                <iframe
                  src={getThumbnailUrl(post)}
                  className="w-full h-full border-0 pointer-events-none scale-[1.01]"
                  loading="lazy"
                  title={`Post ${post.id}`}
                  tabIndex={-1}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  {post.type === "reel" && <Play size={32} className="text-white fill-white" />}
                </div>

                {/* Type indicator */}
                {post.type === "reel" && (
                  <div className="absolute top-2 right-2">
                    <Play size={14} className="text-white fill-white drop-shadow-md" />
                  </div>
                )}
              </motion.button>
            ))}
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
        </div>
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
