import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Building2, Home, Users, GraduationCap, Phone } from "lucide-react";

const NavigationMenu = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      label: "Home",
      labelKo: "홈",
      icon: Home,
    },
    {
      path: "/aboutus",
      label: "About Us",
      labelKo: "회사소개",
      icon: Building2,
    },
    {
      path: "/market",
      label: "Market",
      labelKo: "시장분석",
      icon: Users,
    },
    {
      path: "/education",
      label: "Education",
      labelKo: "교육프로그램",
      icon: GraduationCap,
    },
    {
      path: "/contact",
      label: "Contact",
      labelKo: "연락처",
      icon: Phone,
    },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2E86AB] to-[#1D3557] rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                WeDent Corp.
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                const { language } = useLanguage();
                const label = language === "ko" ? item.labelKo : item.label;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.div
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 text-white backdrop-blur-sm"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        textShadow: isActive
                          ? "0 2px 4px rgba(0, 0, 0, 0.8)"
                          : "0 1px 2px rgba(0, 0, 0, 0.6)",
                      }}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{label}</span>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <div className="md:hidden">
                <button
                  className="text-white/90 hover:text-white p-2"
                  style={{
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
