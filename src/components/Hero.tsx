
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-green-600 font-semibold">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta')}
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=400&fit=crop"
                alt="Eco-brick construction"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">{t('schools.title')}</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-green-100">
              <div className="text-2xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">{t('impact.bottlesCollected')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
