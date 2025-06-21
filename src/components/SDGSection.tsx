
import { useTranslation } from "react-i18next";

const SDGSection = () => {
  const { t } = useTranslation();

  const sdgGoals = [
    { number: 3, title: "Good Health and Well-being", color: "bg-green-500", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" },
    { number: 4, title: "Quality Education", color: "bg-red-500", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg" },
    { number: 6, title: "Clean Water and Sanitation", color: "bg-blue-400", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg" },
    { number: 11, title: "Sustainable Cities and Communities", color: "bg-orange-500", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg" },
    { number: 12, title: "Responsible Consumption and Production", color: "bg-yellow-500", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg" },
    { number: 13, title: "Climate Action", color: "bg-green-600", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg" },
    { number: 17, title: "Partnerships for the Goals", color: "bg-blue-900", image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('sdg.title')}</h2>
          <p className="text-lg text-gray-600">{t('sdg.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {sdgGoals.map((goal) => (
            <div 
              key={goal.number} 
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl">
                <img 
                  src={goal.image}
                  alt={`SDG ${goal.number}: ${goal.title}`}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                {goal.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
