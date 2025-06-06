import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ValueProposition from "./ValueProposition";
import MarketOpportunity from "./MarketOpportunity";
import EducationProgram from "./EducationProgram";
import CompanyInformation from "./CompanyInformation";
import LanguageToggle from "./LanguageToggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

const HomePage = () => {
  const { t } = useLanguage();

  // Animation variants for staggered animations
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
    <div className="bg-[#F1FAEE] min-h-screen smooth-scroll">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ValueProposition />
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <MarketOpportunity />
        </div>
      </section>

      {/* Education Program Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <EducationProgram />
        </div>
      </section>

      {/* Company Information Section */}
      <CompanyInformation />

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#2E86AB] to-[#A8DADC]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={itemVariants} className="text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {t("ctaTitle")}
              </h2>
              <p className="text-lg mb-6">{t("ctaSubtitle")}</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">
                    {t("contactPerson")}
                  </span>
                  <span>조은주 대표</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">
                    {t("contactPhone")}
                  </span>
                  <span>010-3883-2195</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
            >
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1D3557] mb-1"
                  >
                    {t("nameLabel")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("namePlaceholder")}
                    className="w-full smooth-transition focus:scale-105"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#1D3557] mb-1"
                  >
                    {t("companyLabel")}
                  </label>
                  <Input
                    id="company"
                    placeholder={t("companyPlaceholder")}
                    className="w-full smooth-transition focus:scale-105"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1D3557] mb-1"
                  >
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="w-full smooth-transition focus:scale-105"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1D3557] mb-1"
                  >
                    {t("messageLabel")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("messagePlaceholder")}
                    className="w-full min-h-[120px] smooth-transition focus:scale-105"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2E86AB] hover:bg-[#2E86AB]/90 text-white smooth-transition"
                >
                  {t("submitButton")}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1D3557] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WeDent Corp.</h3>
              <p className="text-sm text-white/80">{t("footerTagline")}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t("contactTitle")}</h3>
              <p className="text-sm text-white/80">조은주 대표</p>
              <p className="text-sm text-white/80">010-3883-2195</p>
              <p className="text-sm text-white/80">info@wedent.co.kr</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t("quickLinksTitle")}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("educationProgramLink")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("partnershipLink")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("aboutLink")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/60">{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
