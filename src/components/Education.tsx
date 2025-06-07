import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import EducationProgram from "./EducationProgram";
import { GraduationCap, Award, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
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

  const educationHighlights = [
    {
      icon: Award,
      title: "한국 전문가 중심 교육",
      description:
        "대한민국 임플란트 학계를 이끄는 전문 의료진과 명문 치과대학 교수진이 직접 지도",
    },
    {
      icon: Users,
      title: "소수 정예 실습",
      description:
        "1:1 또는 1:3의 소수 정예로 실제 환자의 어려운 임플란트 케이스를 공동으로 진행",
    },
    {
      icon: GraduationCap,
      title: "즉시 적용 가능",
      description:
        "수료 후 즉시 임상 적용이 가능하도록 실제 수술 실습에 집중하여 임상 자신감 부여",
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
                <GraduationCap className="w-4 h-4 mr-2" />
                {t("educationTitle")}
              </Badge>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("educationTitle")}
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("educationSubtitle")}
              </p>
              <p
                className="text-lg max-w-5xl mx-auto leading-relaxed text-white/80"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                필리핀 현지에서 찾아보기 힘든 최고 수준의 실전 역량 강화
                프로그램
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Highlights */}
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
                교육 프로그램의 특징
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WeDent만의 차별화된 교육 시스템
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
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
                        <CardTitle className="text-xl">
                          {highlight.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {highlight.description}
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

      {/* Education Program Content */}
      <section>
        <EducationProgram />
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#2E86AB] to-[#A8DADC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              필리핀 치과 임플란트 시장에서 성공하기 위한 첫 걸음을
              내딛어보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2E86AB] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-300">
                프로그램 문의하기
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-300">
                상담 예약하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;
