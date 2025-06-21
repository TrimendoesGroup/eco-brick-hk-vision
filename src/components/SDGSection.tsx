
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const SDGSection = () => {
  const { t, i18n } = useTranslation();

  const sdgGoals = [
    { 
      number: 3, 
      title: "Good Health and Well-being", 
      titleZh: "良好健康與福祉",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop"
    },
    { 
      number: 4, 
      title: "Quality Education", 
      titleZh: "優質教育",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=80&h=80&fit=crop"
    },
    { 
      number: 6, 
      title: "Clean Water and Sanitation", 
      titleZh: "清潔飲水和衛生設施",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=80&h=80&fit=crop"
    },
    { 
      number: 11, 
      title: "Sustainable Cities and Communities", 
      titleZh: "可持續城市和社區",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=80&h=80&fit=crop"
    },
    { 
      number: 12, 
      title: "Responsible Consumption", 
      titleZh: "負責任消費和生產",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=80&h=80&fit=crop"
    },
    { 
      number: 13, 
      title: "Climate Action", 
      titleZh: "氣候行動",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=80&h=80&fit=crop"
    },
    { 
      number: 17, 
      title: "Partnerships for the Goals", 
      titleZh: "促進目標實現的夥伴關係",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=80&h=80&fit=crop"
    }
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
                {goal.number === 17 ? (
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={goal.image} 
                      alt={i18n.language === 'en' ? goal.title : goal.titleZh}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {goal.number}
                  </div>
                )}
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
