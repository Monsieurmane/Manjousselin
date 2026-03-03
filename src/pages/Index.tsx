import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { IdeaForm } from "@/components/IdeaForm";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Sparkles } from "lucide-react";

interface AnalysisData {
  overall_score: number;
  overall_summary: string;
  sections: { name: string; rating: number; explanation: string }[];
}

const Index = () => {
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (idea: string) => {
    setIsLoading(true);
    setAnalysis(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-idea", {
        body: { idea },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setAnalysis(data);
    } catch (e: any) {
      console.error(e);
      toast.error(e.message || "Failed to analyze idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-surface">
      <div className="container max-w-4xl py-16 px-4 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">AI-Powered Analysis</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Business Idea</span>{" "}
            <span className="text-gradient-amber">Analyzer</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Enter your business idea and get an instant, detailed analysis with ratings across key dimensions.
          </p>
        </motion.div>

        {/* Content */}
        {analysis ? (
          <AnalysisResults {...analysis} onReset={() => setAnalysis(null)} />
        ) : (
          <IdeaForm onSubmit={handleAnalyze} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default Index;
