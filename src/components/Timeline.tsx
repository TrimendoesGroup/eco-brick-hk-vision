
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const { t, i18n } = useTranslation();

  const timelineEvents = [
    {
      date: "2024-01-15",
      dateZh: "2024年1月15日",
      titleKey: "timeline.programStart",
      title: "Program Launch Ceremony",
      titleZh: "計劃啟動典禮",
      description: "Official launch with all five schools and stakeholders",
      descriptionZh: "與五所學校和持份者正式啟動",
      icon: "🚀",
      color: "bg-blue-500"
    },
    {
      date: "2024-02-01",
      dateZh: "2024年2月1日",
      titleKey: "timeline.collection",
      title: "Collection Phase Begins",
      titleZh: "收集階段開始",
      description: "Students start collecting plastic bottles across all schools",
      descriptionZh: "學生開始在所有學校收集塑膠瓶",
      icon: "🗂️",
      color: "bg-green-500"
    },
    {
      date: "2024-04-15",
      dateZh: "2024年4月15日", 
      titleKey: "timeline.construction",
      title: "Infrastructure Building Phase",
      titleZh: "基礎設施建設階段",
      description: "Construction of eco-brick infrastructure begins at each school",
      descriptionZh: "各學校開始建造環保磚基礎設施",
      icon: "🏗️",
      color: "bg-orange-500"
    },
    {
      date: "2024-06-20",
      dateZh: "2024年6月20日",
      titleKey: "timeline.ceremony",
      title: "Closing Ceremony",
      titleZh: "閉幕典禮",
      description: "Celebration of achievements and program completion",
      descriptionZh: "慶祝成就和計劃完成",
      icon: "🎉",
      color: "bg-purple-500"
    }
  ];

  const getCurrentLanguage = () => {
    return i18n.language === 'zh' ? 'zh' : 'en';
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('timeline.title')}</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center lg:justify-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <Card className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center text-white text-xl mr-4`}>
                          {event.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">
                            {getCurrentLanguage() === 'zh' ? event.dateZh : event.date}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {getCurrentLanguage() === 'zh' ? event.titleZh : event.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        {getCurrentLanguage() === 'zh' ? event.descriptionZh : event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot for large screens */}
                <div className="hidden lg:block w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
