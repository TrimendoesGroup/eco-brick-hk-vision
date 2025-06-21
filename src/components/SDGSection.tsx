
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const SDGSection = () => {
  const { t, i18n } = useTranslation();

  const sdgGoals = [
    { number: 3, title: "Good Health and Well-being", titleZh: "良好健康與福祉" },
    { number: 4, title: "Quality Education", titleZh: "優質教育" },
    { number: 6, title: "Clean Water and Sanitation", titleZh: "清潔飲水和衛生設施" },
    { number: 11, title: "Sustainable Cities and Communities", titleZh: "可持續城市和社區" },
    { number: 12, title: "Responsible Consumption", titleZh: "負責任消費和生產" },
    { number: 13, title: "Climate Action", titleZh: "氣候行動" },
    { number: 17, title: "Partnerships for the Goals", titleZh: "促進目標實現的夥伴關係" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('sdg.title')}</h2>
          <p className="text-lg text-gray-600">{t('sdg.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {sdgGoals.map((goal, index) => (
            <Card key={index} className="group cursor-pointer border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {goal.number}
                </div>
                <h5 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                  {i18n.language === 'en' ? goal.title : goal.titleZh}
                </h5>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
