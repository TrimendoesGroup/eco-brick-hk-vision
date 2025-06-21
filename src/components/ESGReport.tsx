
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ESGReport = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      category: "Environmental",
      categoryZh: "環境",
      metrics: [
        { label: "CO2 Reduction", labelZh: "碳減排", value: "2.5 tons", color: "text-green-600" },
        { label: "Waste Diverted", labelZh: "廢物轉化", value: "12,547 bottles", color: "text-blue-600" },
        { label: "Energy Saved", labelZh: "節約能源", value: "1,250 kWh", color: "text-emerald-600" }
      ]
    },
    {
      category: "Social",
      categoryZh: "社會",
      metrics: [
        { label: "Students Engaged", labelZh: "參與學生", value: "2,340", color: "text-purple-600" },
        { label: "Teachers Trained", labelZh: "培訓教師", value: "85", color: "text-indigo-600" },
        { label: "Community Outreach", labelZh: "社區外展", value: "15 events", color: "text-pink-600" }
      ]
    },
    {
      category: "Governance", 
      categoryZh: "管治",
      metrics: [
        { label: "Partner Schools", labelZh: "夥伴學校", value: "5", color: "text-orange-600" },
        { label: "Compliance Rate", labelZh: "合規率", value: "100%", color: "text-red-600" },
        { label: "Transparency Score", labelZh: "透明度評分", value: "95/100", color: "text-teal-600" }
      ]
    }
  ];

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
    <section id="report" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('report.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('report.subtitle')}</p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
          >
            📄 {t('report.download')}
          </Button>
        </div>

        {/* ESG Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('report.highlights')}</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((category, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.category}
                    </h4>
                    <p className="text-gray-600">{category.categoryZh}</p>
                  </div>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">{metric.label}</div>
                          <div className="text-sm text-gray-600">{metric.labelZh}</div>
                        </div>
                        <div className={`text-xl font-bold ${metric.color}`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SDG Impact */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">{t('sdg.title')}</h3>
          <p className="text-center text-gray-600 mb-12">{t('sdg.subtitle')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="group cursor-pointer border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {goal.number}
                  </div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                    {goal.title}
                  </h5>
                  <p className="text-xs text-gray-600 leading-tight">
                    {goal.titleZh}
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

export default ESGReport;
