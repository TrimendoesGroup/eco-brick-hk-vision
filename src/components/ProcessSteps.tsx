
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSteps = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: "🗂️",
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "♻️",
      titleKey: "process.step2.title", 
      descriptionKey: "process.step2.description",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🏗️",
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "📊",
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('process.title')}</h3>
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-2xl font-bold text-gray-800 mb-1">0{index + 1}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
