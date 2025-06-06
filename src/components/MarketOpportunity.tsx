import React, { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Award,
  Globe,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Building2,
  BookOpen,
  Factory,
  Handshake,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface StatProps {
  value: number;
  target: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  prefix?: string;
}

const AnimatedStat: React.FC<StatProps> = ({
  value,
  target,
  label,
  icon,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-blue-100"
      ref={countRef}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-4 shadow-inner">
        <div className="text-primary">{icon}</div>
      </div>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-center text-gray-700 font-medium">
        {label}
      </div>
      <div className="w-full mt-4">
        <Progress className="w-full h-2" value={(count / target) * 100} />
      </div>
    </motion.div>
  );
};

const CircularProgress: React.FC<{ percentage: number; label: string }> = ({
  percentage,
  label,
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setAnimatedPercentage(Math.floor(progress * percentage));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="flex flex-col items-center" ref={progressRef}>
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2E86AB" />
              <stop offset="100%" stopColor="#A8DADC" />
            </linearGradient>
          </defs>
          <circle
            cx="70"
            cy="70"
            r="45"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="8"
          />
          <circle
            cx="70"
            cy="70"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              {animatedPercentage}%
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm text-center font-medium text-gray-700">
        {label}
      </div>
    </div>
  );
};

const MarketOpportunity: React.FC = () => {
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
      color: "from-red-500 to-red-600",
    },
    {
      icon: DollarSign,
      title: t("challenge2").split(":")[0],
      description: t("challenge2").split(":")[1],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Users,
      title: t("challenge3").split(":")[0],
      description: t("challenge3").split(":")[1],
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const solutions = [
    {
      icon: Award,
      title: t("innovativeEducationTitle"),
      features: [t("educationFeature1"), t("educationFeature2")],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Factory,
      title: t("productSupplyTitle"),
      features: [t("productSupplyDesc1"), t("productSupplyDesc2")],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Building2,
      title: t("manufacturingExpansionTitle"),
      features: [t("manufacturingExpansionDesc")],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: t("differentiator1").split(":")[0],
      description: t("differentiator1").split(":")[1],
    },
    {
      icon: Handshake,
      title: t("differentiator2").split(":")[0],
      description: t("differentiator2").split(":")[1],
    },
    {
      icon: Globe,
      title: t("differentiator3").split(":")[0],
      description: t("differentiator3").split(":")[1],
    },
    {
      icon: TrendingUp,
      title: t("differentiator4").split(":")[0],
      description: t("differentiator4").split(":")[1],
    },
  ];

  return (
    <section className="py-16 bg-transparent" id="market-opportunity">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge className="bg-[#2E86AB]/10 text-[#2E86AB] border-[#2E86AB]/20 mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            {t("marketTitle")}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-8">
            {t("businessNeedTitle")}
          </h2>
          <p className="text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed drop-shadow-lg">
            {t("businessNeedSubtitle")}
          </p>
        </motion.div>

        {/* Market Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          <AnimatedStat
            value={10.3}
            target={10.3}
            label={t("annualGrowthLabel")}
            icon={<TrendingUp className="h-8 w-8" />}
            suffix="%"
          />
          <AnimatedStat
            value={35000}
            target={35000}
            label={t("dentistsCountLabel")}
            icon={<Users className="h-8 w-8" />}
            suffix="+"
          />
          <AnimatedStat
            value={22}
            target={22}
            label={t("marketSizeLabel")}
            icon={<DollarSign className="h-8 w-8" />}
            prefix="$"
            suffix="M"
          />
          <AnimatedStat
            value={65}
            target={65}
            label={t("demandIncreaseLabel")}
            icon={<BarChart3 className="h-8 w-8" />}
            suffix="%"
          />
        </motion.div>

        {/* Market Size Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1D3557]/80 to-[#2E86AB]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-white mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t("marketTitle")} 📈
              </h3>
              <p className="text-lg leading-relaxed opacity-90">
                {t("marketSizeDesc")}
              </p>
            </div>
            <div className="flex justify-center">
              <CircularProgress
                percentage={78}
                label={t("marketPotentialLabel")}
              />
            </div>
          </div>
        </motion.div>

        {/* Challenges Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="bg-red-50 text-red-600 border-red-200 mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {t("marketChallengesTitle")}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-6">
              {t("marketChallengesTitle")}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-400">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${challenge.color} flex items-center justify-center mb-4`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-gray-800 text-lg">
                        {challenge.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="bg-green-50 text-green-600 border-green-200 mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t("solutionTitle")}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-6">
              {t("solutionTitle")}
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              {t("solutionDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-400">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-gray-800 text-lg">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Differentiators Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge className="bg-purple-50 text-purple-600 border-purple-200 mb-4">
              <Award className="w-4 h-4 mr-2" />
              {t("differentiatorTitle")}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-6">
              {t("differentiatorTitle")}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-400">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-gray-800 text-lg">
                          {diff.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Growth Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              {t("growthFactorsTitle")}
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-8">
              {t("growthFactorsTitle")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              t("growthFactor1"),
              t("growthFactor2"),
              t("growthFactor3"),
              t("growthFactor4"),
            ].map((factor, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2E86AB] to-[#A8DADC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{factor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
