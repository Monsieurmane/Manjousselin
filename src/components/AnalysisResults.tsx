import { motion } from "framer-motion";
import { RatingCircle } from "./RatingCircle";
import { AnalysisCard } from "./AnalysisCard";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Section {
  name: string;
  rating: number;
  explanation: string;
}

interface AnalysisResultsProps {
  overall_score: number;
  overall_summary: string;
  sections: Section[];
  onReset: () => void;
}

export const AnalysisResults = ({ overall_score, overall_summary, sections, onReset }: AnalysisResultsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto space-y-8"
    >
      {/* Overall Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-8 shadow-card text-center"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Overall Score</p>
        <div className="flex justify-center mb-5">
          <RatingCircle score={overall_score} size="lg" />
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">{overall_summary}</p>
      </motion.div>

      {/* Section Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section, i) => (
          <AnalysisCard key={section.name} {...section} index={i} />
        ))}
      </div>

      {/* Reset */}
      <div className="flex justify-center pt-2">
        <Button variant="outline" onClick={onReset} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Analyze Another Idea
        </Button>
      </div>
    </motion.div>
  );
};
