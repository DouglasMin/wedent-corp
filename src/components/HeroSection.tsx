import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80",
}: Omit<
  HeroSectionProps,
  "headline" | "subheadline" | "primaryCTA" | "secondaryCTA"
> & { backgroundImage?: string }) => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen w-full bg-background flex items-center justify-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-start max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t("heroHeadline")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-light mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t("heroSubheadline")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto rounded-lg text-base md:text-lg font-medium smooth-transition"
            >
              {t("primaryCTA")}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-light text-light hover:bg-light/10 px-8 py-6 h-auto rounded-lg text-base md:text-lg font-medium smooth-transition"
            >
              {t("secondaryCTA")}
              <ArrowRight className="ml-2 h-5 w-5 smooth-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
