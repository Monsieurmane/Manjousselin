import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const { lang, t } = useLanguage();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(c.toast[lang]);
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-secondary/20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {c.subtitle[lang]}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
            {c.title[lang]}{" "}
            <span className="italic font-display text-gradient-gold">{c.titleHighlight[lang]}</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:space-y-10"
          >
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light">
              {c.intro[lang]}
            </p>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, text: "consult@manejousselin.com" },
                { icon: Phone, text: "+49 155 68 58 00 42" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <item.icon size={18} strokeWidth={1} className="text-primary" />
                  <span className="font-body text-xs md:text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 md:space-y-6"
          >
            <div>
              <label className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                {c.nameLabel[lang]}
              </label>
              <input
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                required
                className="w-full bg-transparent border-b border-border py-2.5 md:py-3 text-foreground font-body text-xs md:text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder={c.namePlaceholder[lang]}
              />
            </div>
            <div>
              <label className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                {c.emailLabel[lang]}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b border-border py-2.5 md:py-3 text-foreground font-body text-xs md:text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                {c.msgLabel[lang]}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-2.5 md:py-3 text-foreground font-body text-xs md:text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder={c.msgPlaceholder[lang]}
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-primary text-primary-foreground font-body text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              {c.send[lang]}
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
