
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Banner {
  id: string;
  image_url: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  order_index: number;
}

const Hero = () => {
  const { i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: banners = [] } = useQuery({
    queryKey: ['banners'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data as Banner[];
    }
  });

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  if (!banners.length) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={banner.id} className="relative h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${banner.image_url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-3xl space-y-8 animate-fade-in">
                  <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                    {banner.title[i18n.language as keyof typeof banner.title]}
                  </h1>
                  <h2 className="text-xl md:text-3xl text-green-300 font-semibold drop-shadow-lg">
                    {banner.subtitle[i18n.language as keyof typeof banner.subtitle]}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl">
                    {banner.description[i18n.language as keyof typeof banner.description]}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {banners.length > 1 && (
          <>
            <CarouselPrevious className="left-8 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
            <CarouselNext className="right-8 bg-white/20 hover:bg-white/30 border-white/30 text-white" />
          </>
        )}
      </Carousel>

      {/* Slide indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
