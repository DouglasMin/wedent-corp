import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import ValueProposition from "./ValueProposition";
import CompanyInformation from "./CompanyInformation";
import { Building2, Target, Globe, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const AboutUs = () => {
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

  const coreCompetencies = [
    {
      icon: Award,
      title: t("competency1"),
      description: "한국의 선진 치과 기술과 임상 경험을 바탕으로 한 전문성",
    },
    {
      icon: Globe,
      title: t("competency2"),
      description: "필리핀 현지 시장에 대한 깊은 이해와 네트워크",
    },
    {
      icon: Building2,
      title: t("competency3"),
      description: "교육부터 제품 공급까지 통합된 시스템",
    },
    {
      icon: Target,
      title: t("competency4"),
      description: "현지 파트너와의 강력한 협력 관계",
    },
  ];

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
                <Building2 className="w-4 h-4 mr-2" />
                {t("companyOverviewTitle")}
              </Badge>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                WeDent Corp.
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("companyOverviewSubtitle")}
              </p>
              <p
                className="text-lg max-w-5xl mx-auto leading-relaxed text-white/80"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("companyOverviewDesc")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-l-4 border-l-[#2E86AB] shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="w-6 h-6 mr-3 text-[#2E86AB]" />
                    {t("companyMissionTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t("companyMission")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-l-4 border-l-[#A8DADC] shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Globe className="w-6 h-6 mr-3 text-[#A8DADC]" />
                    {t("companyVisionTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t("companyVision")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("coreCompetencyTitle")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WeDent Corp.의 핵심 경쟁력과 차별화 요소
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency, index) => {
                const IconComponent = competency.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <CardHeader>
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#2E86AB] to-[#1D3557] rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-lg">
                          {competency.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {competency.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ValueProposition />
        </div>
      </section>

      {/* Company Information Section */}
      <CompanyInformation />
    </div>
  );
};

export default AboutUs;
