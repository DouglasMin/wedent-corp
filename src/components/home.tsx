import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  BarChart3,
  GraduationCap,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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

  const quickLinks = [
    {
      title: "회사소개",
      description: "WeDent Corp.의 비전과 미션을 확인하세요",
      path: "/aboutus",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "시장분석",
      description: "필리핀 치과 임플란트 시장의 기회를 살펴보세요",
      path: "/market",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
    },
    {
      title: "교육프로그램",
      description: "실전 중심의 차별화된 교육 프로그램을 확인하세요",
      path: "/education",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "연락처",
      description: "파트너십 및 투자 문의를 위해 연락하세요",
      path: "/contact",
      icon: Phone,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Navigation Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] drop-shadow-lg mb-6">
                WeDent Corp. 둘러보기
              </h2>
              <p className="text-xl text-gray-800 drop-shadow-md max-w-3xl mx-auto">
                필리핀 치과 임플란트 시장의 혁신을 이끄는 WeDent Corp.에 대해
                자세히 알아보세요
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Link to={link.path}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer">
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mb-4`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-[#2E86AB] transition-colors">
                          {link.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {link.description}
                        </p>
                        <div className="flex items-center justify-center text-[#2E86AB] font-medium text-sm group-hover:translate-x-1 transition-transform">
                          자세히 보기
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="contact"
        className="relative z-10 py-16 md:py-24 bg-gradient-to-r from-[#2E86AB] to-[#A8DADC]"
      >
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
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
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
      <footer className="relative z-10 py-8 bg-[#1D3557] text-white">
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
              <p className="text-sm text-white/80">salvus02@naver.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t("quickLinksTitle")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/education"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("educationProgramLink")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("partnershipLink")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="text-sm text-white/80 hover:text-white smooth-transition"
                  >
                    {t("aboutLink")}
                  </Link>
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
