import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Zap, GraduationCap, Network } from "lucide-react";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
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

          {/* Subheadline with Icons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg md:text-xl font-medium">
                {t("koreanTech")}
              </span>
            </div>

            <div className="hidden sm:block text-white/60 text-2xl">×</div>

            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg md:text-xl font-medium">
                {t("practicalEducation")}
              </span>
            </div>

            <div className="hidden sm:block text-white/60 text-2xl">×</div>

            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg md:text-xl font-medium">
                {t("integratedPlatform")}
              </span>
            </div>
          </motion.div>

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
              onClick={() => scrollToSection("contact")}
            >
              {t("primaryCTA")}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-light text-light hover:bg-light/10 px-8 py-6 h-auto rounded-lg text-base md:text-lg font-medium smooth-transition"
              onClick={() => scrollToSection("education-program")}
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
