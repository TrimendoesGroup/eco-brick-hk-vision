
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const { t } = useTranslation();

  const impactStats = [
    {
      value: "12,547",
      labelKey: "impact.bottlesCollected",
      icon: "🍶",
      color: "text-blue-600"
    },
    {
      value: "856",
      labelKey: "impact.ecobrricksMade",
      icon: "🧱",
      color: "text-green-600"
    },
    {
      value: "15",
      labelKey: "impact.infrastructureBuilt",
      icon: "🏗️",
      color: "text-orange-600"
    },
    {
      value: "2,340",
      labelKey: "impact.studentsInvolved",
      icon: "👥",
      color: "text-purple-600"
    }
  ];

  const schools = [
    {
      name: "環保中學",
      nameEn: "Green Secondary School",
      bottles: "2,890",
      projects: "4",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      name: "可持續小學",
      nameEn: "Sustainable Primary School", 
      bottles: "2,156",
      projects: "3",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
    },
    {
      name: "綠色學院",
      nameEn: "Green Academy",
      bottles: "3,210",
      projects: "5",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
    },
    {
      name: "生態國際學校",
      nameEn: "Eco International School",
      bottles: "2,567",
      projects: "2",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      name: "未來學校",
      nameEn: "Future School",
      bottles: "1,724",
      projects: "1",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('impact.title')}</h2>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {t(stat.labelKey)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schools Impact */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('schools.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={school.image}
                    alt={school.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {school.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{school.nameEn}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('impact.bottlesCollected')}:</span>
                      <span className="font-semibold text-blue-600">{school.bottles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('impact.infrastructureBuilt')}:</span>
                      <span className="font-semibold text-green-600">{school.projects}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
