import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import MarketOpportunity from "./MarketOpportunity";
import { BarChart3, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

const Market = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge
                className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                {t("marketTitle")}
              </Badge>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("marketTitle")}
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("marketSubtitle")}
              </p>
              <div
                className="flex items-center justify-center space-x-4 text-lg text-white/80"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>연평균 10.3% 성장</span>
                </div>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <div className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  <span>2030년 $22M 시장 규모</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity Content */}
      <MarketOpportunity />
    </div>
  );
};

export default Market;
