import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Clock, User, Building2 } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: User,
      title: t("contactPerson"),
      value: "조은주 대표",
      description: "CEO & Founder",
    },
    {
      icon: Phone,
      title: t("contactPhone"),
      value: "010-3883-2195",
      description: "24시간 상담 가능",
    },
    {
      icon: Mail,
      title: "Email",
      value: "salvus02@naver.com",
      description: "빠른 답변 보장",
    },
    {
      icon: Building2,
      title: "Company",
      value: "WeDent Corp.",
      description: "필리핀 치과 임플란트 전문",
    },
  ];

  const businessHours = [
    { day: "월요일 - 금요일", time: "09:00 - 18:00" },
    { day: "토요일", time: "09:00 - 15:00" },
    { day: "일요일", time: "휴무" },
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
                <Phone className="w-4 h-4 mr-2" />
                {t("contactTitle")}
              </Badge>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("contactTitle")}
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {t("ctaSubtitle")}
              </p>
              <p
                className="text-lg max-w-5xl mx-auto leading-relaxed text-white/80"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                언제든지 연락주시면 친절하게 상담해드리겠습니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
                연락처 정보
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                다양한 방법으로 연락하실 수 있습니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
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
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xl font-bold text-[#2E86AB] mb-2">
                          {info.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form and Business Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Mail className="w-6 h-6 mr-3 text-[#2E86AB]" />
                      문의하기
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {t("nameLabel")}
                          </label>
                          <Input
                            id="name"
                            placeholder={t("namePlaceholder")}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {t("companyLabel")}
                          </label>
                          <Input
                            id="company"
                            placeholder={t("companyPlaceholder")}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("emailLabel")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("emailPlaceholder")}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          연락처
                        </label>
                        <Input
                          id="phone"
                          placeholder="연락처를 입력하세요"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          문의 유형
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent">
                          <option value="">문의 유형을 선택하세요</option>
                          <option value="partnership">파트너십 문의</option>
                          <option value="education">교육 프로그램 문의</option>
                          <option value="investment">투자 문의</option>
                          <option value="general">일반 문의</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {t("messageLabel")}
                        </label>
                        <Textarea
                          id="message"
                          placeholder={t("messagePlaceholder")}
                          className="w-full min-h-[120px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#2E86AB] hover:bg-[#2E86AB]/90 text-white py-3 text-lg"
                      >
                        {t("submitButton")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Business Hours */}
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-[#2E86AB]" />
                      운영 시간
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {businessHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="font-medium text-gray-700">
                            {schedule.day}
                          </span>
                          <span className="text-[#2E86AB] font-semibold">
                            {schedule.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>긴급 문의:</strong> 24시간 언제든지 연락
                        가능합니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="shadow-xl mt-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-[#2E86AB]" />
                      빠른 연락
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        전화 걸기
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-[#2E86AB] text-[#2E86AB] hover:bg-[#2E86AB] hover:text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        이메일 보내기
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
