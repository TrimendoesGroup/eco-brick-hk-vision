
import { useTranslation } from "react-i18next";

const SDGSection = () => {
  const { t } = useTranslation();

  const sdgGoals = [
    { number: 3, title: "Good Health and Well-being", titleZh: "良好健康與福祉", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" },
    { number: 4, title: "Quality Education", titleZh: "優質教育", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg" },
    { number: 6, title: "Clean Water and Sanitation", titleZh: "清潔飲水和衛生設施", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg" },
    { number: 11, title: "Sustainable Cities and Communities", titleZh: "可持續城市和社區", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg" },
    { number: 12, title: "Responsible Consumption and Production", titleZh: "負責任消費和生產", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg" },
    { number: 13, title: "Climate Action", titleZh: "氣候行動", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg" },
    { number: 17, title: "Partnerships for the Goals", titleZh: "促進目標實現的夥伴關係", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('sdg.title')}</h2>
          <p className="text-lg text-gray-600">{t('sdg.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {sdgGoals.map((goal) => (
            <div 
              key={goal.number} 
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl bg-white">
                <img 
                  src={goal.image}
                  alt={`SDG ${goal.number}: ${goal.title}`}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <p className="text-xs text-center mt-3 text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {i18n.language === 'zh' ? goal.titleZh : goal.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
