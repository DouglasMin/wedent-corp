import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Building2,
  Target,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Calendar,
  Handshake,
  CheckCircle,
  ArrowRight,
  Globe,
  BookOpen,
  Factory,
} from "lucide-react";

const CompanyInformation = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const challenges = [
    {
      icon: BookOpen,
      title: t("challenge1").split(":")[0],
      description: t("challenge1").split(":")[1],
    },
    {
      icon: DollarSign,
      title: t("challenge2").split(":")[0],
      description: t("challenge2").split(":")[1],
    },
    {
      icon: Users,
      title: t("challenge3").split(":")[0],
      description: t("challenge3").split(":")[1],
    },
  ];

  const differentiators = [
    {
      icon: Award,
      title: t("differentiator1").split(":")[0],
      description: t("differentiator1").split(":")[1],
    },
    {
      icon: Handshake,
      title: t("differentiator2").split(":")[0],
      description: t("differentiator2").split(":")[1],
    },
    {
      icon: Users,
      title: t("differentiator3").split(":")[0],
      description: t("differentiator3").split(":")[1],
    },
    {
      icon: Building2,
      title: t("differentiator4").split(":")[0],
      description: t("differentiator4").split(":")[1],
    },
  ];

  const phases = [
    {
      phase: "1",
      period: "2025.6~12",
      title: t("phase1"),
      color: "bg-blue-500",
    },
    {
      phase: "2",
      period: "2026~27",
      title: t("phase2"),
      color: "bg-green-500",
    },
    {
      phase: "3",
      period: "2027~28",
      title: t("phase3"),
      color: "bg-orange-500",
    },
    {
      phase: "4",
      period: "2029+",
      title: t("phase4"),
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-transparent min-h-screen">
      {/* Company Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1D3557]/80 to-[#2E86AB]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Building2 className="w-4 h-4 mr-2" />
                {t("companyOverviewTitle")}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {t("companyOverviewSubtitle")}
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left"
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    {t("companyMissionTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 leading-relaxed">
                    {t("companyOverviewDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    {t("companyVisionTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 leading-relaxed">
                    {t("companyVisionDesc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Need Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                {t("businessNeedTitle")}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-sm">
                {t("businessNeedSubtitle")}
              </p>
              <p className="text-base text-white/80 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
                {t("marketSizeDesc")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-8 text-center">
                {t("marketChallengesTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {challenges.map((challenge, index) => {
                  const IconComponent = challenge.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-300 bg-white/15 backdrop-blur-md border-white/30"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <IconComponent className="w-5 h-5 mr-2 text-[#A8DADC]" />
                          {challenge.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/90 leading-relaxed">
                          {challenge.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                {t("solutionTitle")}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-sm">
                {t("solutionSubtitle")}
              </p>
              <p className="text-base text-white/80 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
                {t("solutionDesc")}
              </p>
            </motion.div>

            {/* Visual Process Flow */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-gradient-to-r from-[#1D3557]/10 to-[#2E86AB]/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1D3557] mb-8 text-center">
                  통합 플랫폼 프로세스
                </h3>

                {/* Process Flow Diagram */}
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-6">
                  {/* Step 1: Education */}
                  <div className="flex flex-col items-center group">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2E86AB] to-[#1D3557] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A8DADC] rounded-full flex items-center justify-center text-xs font-bold text-[#1D3557]">
                        1
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                      교육
                    </h4>
                    <p className="text-sm text-gray-600 text-center max-w-32">
                      실전 중심 임플란트 교육
                    </p>
                  </div>

                  {/* Arrow 1 */}
                  <div className="hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-[#2E86AB]" />
                  </div>
                  <div className="lg:hidden">
                    <div className="w-0.5 h-8 bg-[#2E86AB]"></div>
                  </div>

                  {/* Step 2: Practice */}
                  <div className="flex flex-col items-center group">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#A8DADC] to-[#2E86AB] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F1FAEE] rounded-full flex items-center justify-center text-xs font-bold text-[#1D3557]">
                        2
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                      실습
                    </h4>
                    <p className="text-sm text-gray-600 text-center max-w-32">
                      실제 임상 케이스 적용
                    </p>
                  </div>

                  {/* Arrow 2 */}
                  <div className="hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-[#2E86AB]" />
                  </div>
                  <div className="lg:hidden">
                    <div className="w-0.5 h-8 bg-[#2E86AB]"></div>
                  </div>

                  {/* Step 3: Product Supply */}
                  <div className="flex flex-col items-center group">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#F1FAEE] to-[#A8DADC] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Factory className="w-10 h-10 text-[#1D3557]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2E86AB] rounded-full flex items-center justify-center text-xs font-bold text-white">
                        3
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                      제품 공급
                    </h4>
                    <p className="text-sm text-gray-600 text-center max-w-32">
                      임플란트 키트 및 제품 공급
                    </p>
                  </div>

                  {/* Arrow 3 */}
                  <div className="hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-[#2E86AB]" />
                  </div>
                  <div className="lg:hidden">
                    <div className="w-0.5 h-8 bg-[#2E86AB]"></div>
                  </div>

                  {/* Step 4: A/S */}
                  <div className="flex flex-col items-center group">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#457B9D] to-[#1D3557] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A8DADC] rounded-full flex items-center justify-center text-xs font-bold text-[#1D3557]">
                        4
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                      A/S
                    </h4>
                    <p className="text-sm text-gray-600 text-center max-w-32">
                      지속적인 지원 및 서비스
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              {/* Innovative Education */}
              <Card className="border-l-4 border-l-[#2E86AB] bg-white/15 backdrop-blur-md border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-[#A8DADC]" />
                    {t("innovativeEducationTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">{t("educationFeature1")}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">{t("educationFeature2")}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">{t("educationFeature3")}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Product Supply */}
              <Card className="border-l-4 border-l-[#A8DADC] bg-white/15 backdrop-blur-md border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Factory className="w-5 h-5 mr-2 text-[#A8DADC]" />
                    {t("productSupplyTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">{t("productSupplyDesc1")}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A8DADC] mt-0.5 flex-shrink-0" />
                    <p className="text-white/90">{t("productSupplyDesc2")}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Manufacturing Expansion */}
              <Card className="border-l-4 border-l-[#F1FAEE] bg-white/15 backdrop-blur-md border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-[#A8DADC]" />
                    {t("manufacturingExpansionTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    {t("manufacturingExpansionDesc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                {t("differentiatorTitle")}
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 h-full bg-white/15 backdrop-blur-md border-white/30"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <IconComponent className="w-5 h-5 mr-2 text-[#A8DADC]" />
                        {diff.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/90 leading-relaxed">
                        {diff.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Performance Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                {t("financialPerformanceTitle")}
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            >
              <Card className="border-l-4 border-l-[#2E86AB] bg-white/20 backdrop-blur-md border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-[#A8DADC]" />
                    {t("revenueModelTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 leading-relaxed">
                    {t("revenueModelDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#A8DADC] bg-white/20 backdrop-blur-md border-white/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-[#A8DADC]" />
                    {t("projectedRevenueTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-white font-medium drop-shadow-sm">
                      {t("year1Revenue")}
                    </p>
                  </div>
                  <div className="p-3 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-white font-medium drop-shadow-sm">
                      {t("year2Revenue")}
                    </p>
                  </div>
                  <div className="p-3 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20">
                    <p className="text-white font-medium drop-shadow-sm">
                      {t("year3Revenue")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Roadmap */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-8 text-center">
                {t("growthRoadmapTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {phases.map((phase, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/20 backdrop-blur-md border-white/30"
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-2 ${phase.color}`}
                    ></div>
                    <CardHeader className="pt-6">
                      <CardTitle className="text-white flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full ${phase.color} text-white flex items-center justify-center text-sm font-bold mr-3 shadow-lg`}
                        >
                          {phase.phase}
                        </div>
                        <div>
                          <div className="text-sm text-white/80">
                            {phase.period}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {phase.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Invitation Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#2E86AB]/80 to-[#A8DADC]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                {t("partnershipInviteTitle")}
              </h2>
              <p className="text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
                {t("partnershipInviteDesc")}
              </p>
              <p className="text-base mb-8 max-w-3xl mx-auto">
                {t("partnershipTypesDesc")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">{t("contactTitle")}</h3>
              </div>
              <Separator className="bg-white/20 mb-6" />
              <div className="space-y-2 text-left">
                <p className="flex items-center justify-center">
                  <span className="font-semibold mr-2">
                    {t("contactPerson")}
                  </span>
                  <span>조은주 대표</span>
                </p>
                <p className="flex items-center justify-center">
                  <span className="font-semibold mr-2">
                    {t("contactPhone")}
                  </span>
                  <span>010-3883-2195</span>
                </p>
                <p className="flex items-center justify-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <span>salvus02@naver.com</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInformation;
