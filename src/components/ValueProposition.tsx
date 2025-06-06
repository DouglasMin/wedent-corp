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
      className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col items-center text-center h-full cursor-pointer"
    >
      <div className="bg-[#2E86AB]/10 rounded-full p-4 mb-4">
        <div className="text-[#2E86AB] w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
        {title}
      </h3>
      <p className="text-base md:text-lg text-gray-600">{description}</p>
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
    <section className="py-16 md:py-24 bg-transparent" id="value-proposition">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("valueTitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
