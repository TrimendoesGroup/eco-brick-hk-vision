
import { useTranslation } from "react-i18next";
import ProcessSteps from "./ProcessSteps";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">{t('about.mission')}</h3>
            <p className="text-green-700 text-lg">{t('about.missionText')}</p>
          </div>
        </div>

        <ProcessSteps />
      </div>
    </section>
  );
};

export default About;
