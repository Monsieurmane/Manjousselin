import { motion } from "framer-motion";
import { RatingCircle } from "./RatingCircle";

interface AnalysisCardProps {
  name: string;
  rating: number;
  explanation: string;
  index: number;
}

const sectionIcons: Record<string, string> = {
  "Market Potential": "📊",
  "Feasibility": "⚙️",
  "Competition": "⚔️",
  "Revenue Model": "💰",
  "Scalability": "📈",
  "Innovation": "💡",
};

export const AnalysisCard = ({ name, rating, explanation, index }: AnalysisCardProps) => {
  const icon = sectionIcons[name] || "🔍";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card p-5 shadow-card hover:border-primary/30 transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <RatingCircle score={rating} delay={index * 0.1 + 0.2} />
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-card-foreground flex items-center gap-2">
            <span>{icon}</span>
            {name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{explanation}</p>
        </div>
      </div>
    </motion.div>
  );
};
