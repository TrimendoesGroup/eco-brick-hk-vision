
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSteps = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: "🔍",
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📚",
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
      icon: "📈",
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('process.title')}</h3>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                <div className={`h-1 bg-gradient-to-r ${step.color}`}></div>
                <CardContent className="p-6 text-center relative">
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-gray-500 mb-2">Step {index + 1}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {t(step.titleKey)}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
