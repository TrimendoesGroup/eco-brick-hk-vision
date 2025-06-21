
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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

interface SchoolDetailProps {
  school: School;
  photos: Array<{ id: string; photo_url: string; caption?: any; photo_type: string }>;
  onClose: () => void;
}

const SchoolDetail = ({ school, photos, onClose }: SchoolDetailProps) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white">
        <div className="relative">
          <img 
            src={school.banner_image_url}
            alt={school.name[i18n.language as keyof typeof school.name]}
            className="w-full h-64 object-cover"
          />
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 left-4 flex items-center space-x-4">
            <img 
              src={school.logo_url}
              alt="School logo"
              className="w-16 h-16 rounded-full bg-white p-2 shadow-lg"
            />
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              {school.name[i18n.language as keyof typeof school.name]}
            </h2>
          </div>
        </div>

        <CardContent className="p-8">
          {/* Introduction and Metrics */}
          <div className="mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Introduction</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {school.introduction[i18n.language as keyof typeof school.introduction]}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{school.students_participated}</div>
                  <div className="text-blue-800 font-medium">Students Participated</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">{school.bottles_collected.toLocaleString()}</div>
                  <div className="text-green-800 font-medium">Bottles Collected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          {photos.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">School Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="group cursor-pointer">
                    <img
                      src={photo.photo_url}
                      alt="School activity"
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolDetail;
