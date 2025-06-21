
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: "🗂️",
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description"
    },
    {
      icon: "♻️",
      titleKey: "process.step2.title", 
      descriptionKey: "process.step2.description"
    },
    {
      icon: "🏗️",
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description"
    },
    {
      icon: "📊",
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">{t('about.mission')}</h3>
            <p className="text-green-700 text-lg">{t('about.missionText')}</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('process.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h4>
                  <p className="text-gray-600">
                    {t(step.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
