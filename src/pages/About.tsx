import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Brain, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const values = [
  { icon: Brain, title: "AI-First Approach", desc: "We leverage cutting-edge AI to deliver expert-level business analysis in seconds, not weeks." },
  { icon: Lightbulb, title: "Empowering Founders", desc: "Our mission is to help entrepreneurs make data-informed decisions before investing resources." },
  { icon: Users, title: "Accessible to All", desc: "No sign-up, no fees. We believe every aspiring founder deserves quality feedback on their ideas." },
];

const About = () => (
  <Layout>
    <section className="container max-w-6xl px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl font-bold"
        >
          <span className="text-foreground">About </span>
          <span className="text-gradient-amber">IdeaLens</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground text-lg leading-relaxed"
        >
          We built IdeaLens to bridge the gap between having a great business idea and knowing whether it's worth pursuing. Our AI-powered tool gives you instant, honest feedback so you can iterate fast and build smarter.
        </motion.p>
      </div>

      {/* Values */}
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-20">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 shadow-card text-center"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Story */}
      <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-8 shadow-card mb-12">
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Our Story</h2>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Too many great ideas fail not because they're bad, but because founders lack early, objective feedback. Traditional consulting is expensive and slow. Friends and family are biased.
          </p>
          <p>
            IdeaLens was born to solve this. By combining advanced AI with structured business analysis frameworks, we deliver the kind of insight that used to require a team of consultants — instantly and for free.
          </p>
          <p>
            Whether you're a first-time founder brainstorming in a coffee shop or a serial entrepreneur evaluating your next venture, IdeaLens gives you the clarity you need to move forward with confidence.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/analyzer">
          <Button size="lg" className="gap-2">
            <Sparkles className="w-4 h-4" />
            Try IdeaLens Now
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
