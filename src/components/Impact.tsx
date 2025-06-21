
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

interface ImpactStat {
  id: string;
  stat_key: string;
  quantity: number;
  unit: { en: string; zh: string };
  icon: string;
  color: string;
  order_index: number;
}

const Impact = () => {
  const { t, i18n } = useTranslation();

  const { data: impactStats = [] } = useQuery({
    queryKey: ['impact-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('impact_stats')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data.map(stat => ({
        ...stat,
        unit: stat.unit as { en: string; zh: string }
      })) as ImpactStat[];
    }
  });

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('impact.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <Card 
              key={stat.id} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                  {stat.quantity.toLocaleString()}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.unit[i18n.language as keyof typeof stat.unit]}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
