import React from "react";
import { Toggle } from "./ui/toggle";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 smooth-transition hover:bg-white">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-[#2E86AB]" />
        <div className="flex items-center bg-gray-100 rounded-md p-1">
          <Toggle
            pressed={language === "ko"}
            onPressedChange={() => setLanguage("ko")}
            className={`px-3 py-1 text-sm font-medium rounded-sm smooth-transition ${
              language === "ko"
                ? "bg-[#2E86AB] text-white shadow-sm"
                : "text-gray-600 hover:text-[#2E86AB]"
            }`}
          >
            한국어
          </Toggle>
          <Toggle
            pressed={language === "en"}
            onPressedChange={() => setLanguage("en")}
            className={`px-3 py-1 text-sm font-medium rounded-sm smooth-transition ${
              language === "en"
                ? "bg-[#2E86AB] text-white shadow-sm"
                : "text-gray-600 hover:text-[#2E86AB]"
            }`}
          >
            English
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
