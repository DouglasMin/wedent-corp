import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Target, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
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
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Split Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Content Area */}
        <div
          className="relative flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(46, 134, 171, 0.95) 0%,
              rgba(29, 53, 87, 0.92) 100%
            )`,
          }}
        >
          <div className="max-w-lg w-full">
            {/* Company Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                WeDent Corp.
              </h1>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              {t("heroHeadline")}
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl font-semibold text-white/90 mb-6 leading-relaxed"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              {t("heroSubheadline")}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-base md:text-lg text-white/80 mb-8 leading-relaxed"
              style={{
                fontFamily: "Open Sans, sans-serif",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              한국의 선진 치과 기술과 교육 노하우를 필리핀에 전파하여 현지 치과
              의료 수준을 향상시키고, 지속 가능한 비즈니스 생태계를 구축합니다.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA - Red Gradient */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E63946] to-[#D62828] hover:from-[#D62828] hover:to-[#BA181B] text-white px-8 py-6 h-auto rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 focus:ring-offset-transparent"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => scrollToSection("contact")}
              >
                {t("primaryCTA")}
              </Button>

              {/* Secondary CTA - Glass Button */}
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 h-auto rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm bg-white/5"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
                onClick={() => scrollToSection("education-program")}
              >
                {t("secondaryCTA")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Image Area */}
        <div
          className="relative min-h-[400px] md:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(46, 134, 171, 0.1) 0%, transparent 30%), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle overlay for premium look */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2E86AB]/5"></div>
        </div>
      </div>

      {/* Glassmorphism Cards - Bottom Overlay */}
      <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    우리의 미션
                  </h3>
                  <p
                    className="text-sm text-white/90 leading-relaxed"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    한국의 선진 치과 기술을 필리핀에 전파하여 현지 의료 수준을
                    향상시킵니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    우리의 비전
                  </h3>
                  <p
                    className="text-sm text-white/90 leading-relaxed"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    2030년까지 동남아시아 치과 임플란트 시장의 선도 기업이
                    되겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
