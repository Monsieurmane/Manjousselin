import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci ! Votre message a bien été envoyé.");
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/20">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Contactez-nous
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream mb-6">
            Parlons de votre{" "}
            <span className="italic font-display text-gradient-gold">Projet</span>
          </h2>
          <div className="w-16 h-px line-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <p className="font-body text-sm text-muted-foreground leading-[1.8] font-light">
              Chaque projet commence par une conversation. Partagez votre vision avec nous
              et découvrez comment Manejousselin peut transformer votre espace.
            </p>
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Dakar, Sénégal — Quartier Almadies" },
                { icon: Mail, text: "contact@manejousselin.com" },
                { icon: Phone, text: "+221 33 800 00 00" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <item.icon size={18} strokeWidth={1} className="text-primary" />
                  <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Votre Nom
              </label>
              <input
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="Entrez votre nom"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Adresse E-mail
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Votre Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Envoyer
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
