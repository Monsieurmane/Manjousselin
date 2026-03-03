import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, TrendingUp, Shield, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const features = [
  { icon: Target, title: "Market Analysis", desc: "Evaluate market size, demand, and growth potential for your idea." },
  { icon: Shield, title: "Feasibility Check", desc: "Assess technical and operational feasibility of execution." },
  { icon: BarChart3, title: "Competition Mapping", desc: "Understand your competitive landscape and differentiation." },
  { icon: TrendingUp, title: "Revenue Modeling", desc: "Analyze monetization strategies and revenue potential." },
  { icon: Zap, title: "Scalability Score", desc: "Rate how well your idea can scale across markets." },
  { icon: Sparkles, title: "Innovation Rating", desc: "Measure the novelty and disruption factor of your concept." },
];

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="container max-w-6xl px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">AI-Powered Business Validation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Validate Your Business Idea{" "}
          <span className="text-gradient-amber">In Seconds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Get instant, AI-driven analysis across 6 key dimensions. Make smarter decisions before you invest time and money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link to="/analyzer">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Sparkles className="w-4 h-4" />
              Analyze Your Idea
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="container max-w-6xl px-4 pb-24">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Six Dimensions of Analysis
        </h2>
        <p className="mt-2 text-muted-foreground">Every idea is evaluated across critical business factors.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6 shadow-card hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-4">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="border-t border-border bg-card/50">
      <div className="container max-w-6xl px-4 py-20 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Ready to Validate Your Idea?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          It takes less than a minute to get a comprehensive analysis of your business concept.
        </p>
        <Link to="/analyzer">
          <Button size="lg" className="mt-6 gap-2">
            <Sparkles className="w-4 h-4" />
            Get Started Free
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Home;
