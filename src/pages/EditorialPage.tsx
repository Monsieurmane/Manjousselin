import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

const pageText = {
  title: { fr: "Recherches", en: "Research", de: "Forschung" },
  subtitle: {
    fr: "Articles et recherches sur le design et les matériaux",
    en: "Articles and research on design and materials",
    de: "Artikel und Forschung zu Design und Materialien",
  },
  back: { fr: "Retour", en: "Back", de: "Zurück" },
  readMore: { fr: "Lire l'article", en: "Read article", de: "Artikel lesen" },
};

const EditorialPage = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
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
            className="text-center mb-12"
          >
            <h1 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
              {pageText.title[lang]}
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wider">
              {pageText.subtitle[lang]}
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/editorial/${article.slug}`}
                  className="group block rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.cover}
                      alt={article.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1024}
                      height={768}
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-body text-[10px] text-muted-foreground tracking-wider uppercase mb-2">
                      {article.readTime[lang]} — {new Date(article.date).toLocaleDateString(lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US", { year: "numeric", month: "long" })}
                    </p>
                    <h2 className="font-heading text-sm md:text-base text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title[lang]}
                    </h2>
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">
                      {article.subtitle[lang]}
                    </p>
                    <span className="inline-block mt-4 font-body text-[10px] tracking-wider uppercase text-primary">
                      {pageText.readMore[lang]} →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditorialPage;
