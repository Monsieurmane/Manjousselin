import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="container max-w-6xl px-4 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold"
          >
            <span className="text-foreground">Get In </span>
            <span className="text-gradient-amber">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Have questions, feedback, or partnership ideas? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Email Us</h3>
                <p className="text-sm text-muted-foreground mt-1">hello@idealens.ai</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Response Time</h3>
                <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <Input required placeholder="Your name" className="bg-muted/50 border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input required type="email" placeholder="you@example.com" className="bg-muted/50 border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea required placeholder="Your message..." className="min-h-[120px] bg-muted/50 border-border resize-none" />
            </div>
            <Button type="submit" disabled={sending} className="w-full gap-2">
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
