import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

export const IdeaForm = ({ onSubmit, isLoading }: IdeaFormProps) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim().length >= 10) onSubmit(idea);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-heading text-lg font-semibold text-card-foreground">Describe Your Business Idea</h2>
        </div>
        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="E.g. A subscription-based platform that connects local farmers directly with urban consumers, offering weekly curated boxes of seasonal produce with same-day delivery..."
          className="min-h-[140px] bg-muted/50 border-border text-foreground placeholder:text-muted-foreground resize-none focus:ring-primary"
          maxLength={2000}
        />
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-muted-foreground">{idea.length}/2000 characters</span>
          <Button
            type="submit"
            disabled={idea.trim().length < 10 || isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze Idea
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.form>
  );
};
