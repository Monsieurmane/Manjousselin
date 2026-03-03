import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const steps = [
  { num: "01", title: "Describe Your Idea", desc: "Write a brief description of your business concept — what it does, who it's for, and how it works." },
  { num: "02", title: "AI Analyzes It", desc: "Our AI evaluates your idea across 6 key dimensions: market potential, feasibility, competition, revenue, scalability, and innovation." },
  { num: "03", title: "Get Your Report", desc: "Receive a detailed breakdown with scores (1-10) and actionable insights for each dimension instantly." },
];

const benefits = [
  "Instant results — no waiting days for feedback",
  "Rated across 6 critical business dimensions",
  "Actionable insights with each rating",
  "Powered by advanced AI models",
  "Free to use — no sign-up required",
  "Analyze unlimited ideas",
];

const Services = () => (
  <Layout>
    <section className="container max-w-6xl px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl font-bold"
        >
          <span className="text-foreground">Our </span>
          <span className="text-gradient-amber">Service</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground text-lg"
        >
          One powerful tool to validate any business idea with AI-driven analysis.
        </motion.p>
      </div>

      {/* How it works */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="font-heading text-xl font-semibold text-foreground text-center mb-8">How It Works</h2>
        <div className="grid gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <span className="font-heading text-3xl font-bold text-primary/30">{s.num}</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="font-heading text-xl font-semibold text-foreground text-center mb-8">Why Use IdeaLens?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-card-foreground">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link to="/analyzer">
          <Button size="lg" className="gap-2">
            <Sparkles className="w-4 h-4" />
            Try the Analyzer Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
