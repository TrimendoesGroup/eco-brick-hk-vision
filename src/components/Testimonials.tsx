
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Testimonial {
  id: string;
  name: { en: string; zh: string };
  role: { en: string; zh: string };
  organization?: { en: string; zh: string };
  video_url: string;
  thumbnail_url: string;
  quote: { en: string; zh: string };
  testimonial_type: string;
}

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);

  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data.map(testimonial => ({
        ...testimonial,
        name: testimonial.name as { en: string; zh: string },
        role: testimonial.role as { en: string; zh: string },
        organization: testimonial.organization as { en: string; zh: string } | undefined,
        quote: testimonial.quote as { en: string; zh: string }
      })) as Testimonial[];
    }
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'teacher': return 'bg-green-100 text-green-800';
      case 'organization': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleVideoPlay = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, testimonials.length));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('testimonials.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(testimonial.video_url)}>
                <img 
                  src={testimonial.thumbnail_url}
                  alt={testimonial.name[i18n.language as keyof typeof testimonial.name]}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 hover:bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-gray-800 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(testimonial.testimonial_type)}`}>
                    {t(`testimonials.${testimonial.testimonial_type}s`)}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name[i18n.language as keyof typeof testimonial.name]}
                  </h3>
                  <p className="text-green-600 font-medium text-sm">
                    {testimonial.role[i18n.language as keyof typeof testimonial.role]}
                  </p>
                  {testimonial.organization && (
                    <p className="text-gray-500 text-sm">
                      {testimonial.organization[i18n.language as keyof typeof testimonial.organization]}
                    </p>
                  )}
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote[i18n.language as keyof typeof testimonial.quote]}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials.length > visibleCount && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMore}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
            >
              {t('testimonials.loadMore', 'Load More')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
