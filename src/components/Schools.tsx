
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SchoolDetail from "./SchoolDetail";

interface School {
  id: string;
  name: { en: string; zh: string };
  banner_image_url: string;
  logo_url: string;
  students_participated: number;
  bottles_collected: number;
  introduction: { en: string; zh: string };
  video_url?: string;
  recycling_performance?: any;
}

const Schools = () => {
  const { t, i18n } = useTranslation();
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [schoolPhotos, setSchoolPhotos] = useState<any[]>([]);

  const { data: schools = [] } = useQuery({
    queryKey: ['schools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('schools')
        .select('*')
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      return data.map(school => ({
        ...school,
        name: school.name as { en: string; zh: string },
        introduction: school.introduction as { en: string; zh: string }
      })) as School[];
    }
  });

  const handleSchoolClick = async (school: School) => {
    const { data: photos } = await supabase
      .from('school_photos')
      .select('*')
      .eq('school_id', school.id)
      .order('order_index');
    
    setSchoolPhotos(photos || []);
    setSelectedSchool(school);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('schools.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <Card key={school.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={school.banner_image_url}
                  alt={school.name[i18n.language as keyof typeof school.name]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <img 
                    src={school.logo_url}
                    alt="School logo"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {school.name[i18n.language as keyof typeof school.name]}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold text-blue-600">{school.students_participated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bottles:</span>
                    <span className="font-semibold text-green-600">{school.bottles_collected.toLocaleString()}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleSchoolClick(school)}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedSchool && (
        <SchoolDetail
          school={selectedSchool}
          photos={schoolPhotos}
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </section>
  );
};

export default Schools;
