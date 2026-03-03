import { motion } from "framer-motion";

interface RatingCircleProps {
  score: number;
  size?: "sm" | "lg";
  delay?: number;
}

const getRatingColor = (score: number) => {
  if (score >= 8) return "var(--rating-excellent)";
  if (score >= 6) return "var(--rating-good)";
  if (score >= 4) return "var(--rating-average)";
  if (score >= 2) return "var(--rating-poor)";
  return "var(--rating-bad)";
};

const getRatingColorClass = (score: number) => {
  if (score >= 8) return "text-rating-excellent";
  if (score >= 6) return "text-rating-good";
  if (score >= 4) return "text-rating-average";
  if (score >= 2) return "text-rating-poor";
  return "text-rating-bad";
};

export const RatingCircle = ({ score, size = "sm", delay = 0 }: RatingCircleProps) => {
  const isLarge = size === "lg";
  const dim = isLarge ? 120 : 64;
  const strokeWidth = isLarge ? 6 : 4;
  const radius = (dim - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;
  const color = `hsl(${getRatingColor(score)})`;

  return (
    <div className="relative flex items-center justify-center" style={{ width: dim, height: dim }}>
      <svg width={dim} height={dim} className="-rotate-90">
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </svg>
      <motion.span
        className={`absolute font-heading font-bold ${isLarge ? "text-3xl" : "text-lg"} ${getRatingColorClass(score)}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {score}
      </motion.span>
    </div>
  );
};
