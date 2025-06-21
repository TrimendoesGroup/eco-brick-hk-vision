
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSteps = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: "🔍"
    },
    {
      number: "02", 
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: "♻️"
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: "🏗️"
    },
    {
      number: "04",
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('process.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm font-bold text-green-600 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
