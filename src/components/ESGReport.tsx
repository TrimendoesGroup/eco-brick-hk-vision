
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ESGHighlight {
  id: string;
  category: { en: string; zh: string };
  metrics: Array<{
    label: { en: string; zh: string };
    value: string;
    color: string;
  }>;
  order_index: number;
}

const ESGReport = () => {
  const { t, i18n } = useTranslation();

  const { data: highlights = [] } = useQuery({
    queryKey: ['esg-highlights'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('esg_highlights')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data.map(highlight => ({
        ...highlight,
        category: highlight.category as { en: string; zh: string },
        metrics: highlight.metrics as Array<{
          label: { en: string; zh: string };
          value: string;
          color: string;
        }>
      })) as ESGHighlight[];
    }
  });

  return (
    <section id="report" className="py-20 bg-white">
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
        {highlights.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('report.highlights')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {highlights.map((category, index) => (
                <Card key={category.id} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {category.category[i18n.language as keyof typeof category.category]}
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {category.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-sm">
                              {metric.label[i18n.language as keyof typeof metric.label]}
                            </div>
                          </div>
                          <div className={`text-2xl font-bold ${metric.color} ml-4`}>
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
        )}
      </div>
    </section>
  );
};

export default ESGReport;
