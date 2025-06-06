import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

interface ProgramFeature {
  id: number;
  text: string;
}

interface ProgramLevel {
  id: string;
  title: string;
  description: string;
  price: string;
  features: ProgramFeature[];
  imageUrl: string;
}

const EducationProgram = () => {
  const [activeTab, setActiveTab] = useState("beginner");
  const { t } = useLanguage();

  const programLevels: ProgramLevel[] = [
    {
      id: "beginner",
      title: t("beginnerLevel"),
      description: t("beginnerDescription"),
      price: "₱25,000",
      features: [
        { id: 1, text: t("beginnerFeature1") },
        { id: 2, text: t("beginnerFeature2") },
        { id: 3, text: t("beginnerFeature3") },
        { id: 4, text: t("beginnerFeature4") },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    },
    {
      id: "intermediate",
      title: t("intermediateLevel"),
      description: t("intermediateDescription"),
      price: "₱45,000",
      features: [
        { id: 1, text: t("intermediateFeature1") },
        { id: 2, text: t("intermediateFeature2") },
        { id: 3, text: t("intermediateFeature3") },
        { id: 4, text: t("intermediateFeature4") },
        { id: 5, text: t("intermediateFeature5") },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    },
    {
      id: "advanced",
      title: t("advancedLevel"),
      description: t("advancedDescription"),
      price: "₱75,000",
      features: [
        { id: 1, text: t("advancedFeature1") },
        { id: 2, text: t("advancedFeature2") },
        { id: 3, text: t("advancedFeature3") },
        { id: 4, text: t("advancedFeature4") },
        { id: 5, text: t("advancedFeature5") },
        { id: 6, text: t("advancedFeature6") },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent" id="education-program">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("educationTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("educationSubtitle")}
          </p>
        </motion.div>

        <Tabs
          defaultValue="beginner"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-8 w-full md:w-3/4 mx-auto">
            {programLevels.map((level) => (
              <TabsTrigger
                key={level.id}
                value={level.id}
                className="text-base md:text-lg py-3"
              >
                {level.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {programLevels.map((level) => (
            <TabsContent key={level.id} value={level.id} className="mt-6">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 ease-out h-full">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl text-blue-600">
                        {level.title} 프로그램
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg mt-2">
                        {level.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <p className="text-sm uppercase text-gray-500 mb-1">
                          {t("programCost")}
                        </p>
                        <p className="text-4xl md:text-5xl font-bold text-gray-800">
                          {level.price}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <p className="font-medium text-gray-800">
                          {t("programFeatures")}:
                        </p>
                        {level.features.map((feature) => (
                          <div key={feature.id} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 mt-1">
                              <Check className="h-5 w-5 text-primary" />
                            </div>
                            <p className="ml-3 text-gray-700">{feature.text}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white smooth-transition">
                        {t("applyProgram")}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px] lg:h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img
                    src={level.imageUrl}
                    alt={`${level.title} 교육 프로그램`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default EducationProgram;
