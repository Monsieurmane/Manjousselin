import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container max-w-6xl px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">IdeaLens</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered business idea analysis to help entrepreneurs validate and refine their concepts.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }, { label: "About", path: "/about" }, { label: "Contact", path: "/contact" }].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/analyzer" className="text-muted-foreground hover:text-primary transition-colors">Idea Analyzer</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} IdeaLens. All rights reserved.
      </div>
    </div>
  </footer>
);
