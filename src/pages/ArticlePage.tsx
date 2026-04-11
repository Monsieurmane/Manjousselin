import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    navigate("/editorial");
    return null;
  }

  const contentSections = article.content[lang].split("\n\n");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-3xl mx-auto px-4 md:px-6">
          <Link
            to="/editorial"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm tracking-wider"
          >
            <ArrowLeft size={16} />
            {{ fr: "Retour aux articles", en: "Back to articles", de: "Zurück zu Artikeln" }[lang]}
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <p className="font-body text-[10px] text-muted-foreground tracking-wider uppercase mb-4">
              {article.readTime[lang]} — {new Date(article.date).toLocaleDateString(lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h1 className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground leading-tight mb-4">
              {article.title[lang]}
            </h1>

            <p className="font-body text-sm text-muted-foreground mb-8">
              {article.subtitle[lang]}
            </p>

            {/* Cover */}
            <div className="rounded-lg overflow-hidden mb-10">
              <img
                src={article.cover}
                alt={article.title[lang]}
                className="w-full h-auto object-cover"
                width={1024}
                height={768}
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              {contentSections.map((section, i) => {
                if (section.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-heading text-lg md:text-xl text-foreground mt-10 mb-2">
                      {section.replace("## ", "")}
                    </h2>
                  );
                }
                if (section.startsWith("---")) {
                  return <hr key={i} className="border-border my-8" />;
                }
                if (section.startsWith("**") && section.endsWith("**")) {
                  return (
                    <p key={i} className="font-body text-sm md:text-base text-primary font-medium">
                      {section.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {section}
                  </p>
                );
              })}
            </div>

            {/* Images gallery */}
            {article.images.length > 1 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.images.slice(1).map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-border">
                    <img
                      src={img.src}
                      alt={img.alt[lang]}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      width={1024}
                      height={768}
                    />
                    <p className="p-3 font-body text-[10px] text-muted-foreground italic">
                      {img.alt[lang]}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-body text-sm tracking-wider hover:bg-primary/90 transition-colors"
              >
                {{ fr: "Contactez nos experts", en: "Contact our experts", de: "Kontaktieren Sie unsere Experten" }[lang]}
              </Link>
            </div>

            {/* Sources */}
            {article.sources.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-sm text-foreground mb-4">
                  Sources
                </h3>
                <ul className="space-y-2">
                  {article.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={12} />
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
