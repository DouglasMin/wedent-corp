import React from "react";
import { GraduationCap, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard = ({ icon, title, description, delay = 0 }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 hover:shadow-3xl hover:bg-white hover:scale-105 transition-all duration-500 ease-out flex flex-col items-center text-center h-full cursor-pointer border border-white/20"
    >
      <div className="bg-[#2E86AB]/10 rounded-full p-4 mb-4">
        <div className="text-[#2E86AB] w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#2E86AB] to-[#1D3557] bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const ValueProposition = () => {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: <GraduationCap size={40} />,
      title: t("practicalEducation"),
      description: t("practicalEducationDesc"),
    },
    {
      icon: <Layers size={40} />,
      title: t("integratedPlatform"),
      description: t("integratedPlatformDesc"),
    },
    {
      icon: <TrendingUp size={40} />,
      title: t("provenGrowth"),
      description: t("provenGrowthDesc"),
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      id="value-proposition"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("valueTitle")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t("valueSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
