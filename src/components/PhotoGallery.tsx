
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: string;
  photo_url: string;
  caption?: { en: string; zh: string };
}

const PhotoGallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);

  const { data: albums = [] } = useQuery({
    queryKey: ['photo-albums-gallery'],
    queryFn: async () => {
      const { data: albumsData, error } = await supabase
        .from('photo_albums')
        .select(`
          *,
          album_photos (
            id,
            photo_url,
            caption,
            order_index
          )
        `)
        .eq('is_active', true)
        .order('order_index');
      
      if (error) throw error;
      
      const photos: Photo[] = [];
      albumsData.forEach(album => {
        if (album.album_photos) {
          album.album_photos.forEach((photo: any) => {
            photos.push({
              id: photo.id,
              photo_url: photo.photo_url,
              caption: photo.caption as { en: string; zh: string } | undefined
            });
          });
        }
      });
      
      setAllPhotos(photos);
      return photos;
    }
  });

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto < allPhotos.length - 1) {
      setSelectedPhoto(selectedPhoto + 1);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setSelectedPhoto(selectedPhoto - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('gallery.title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {albums.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={photo.photo_url}
                  alt={photo.caption?.[i18n.language as keyof typeof photo.caption] || `Photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>

        {selectedPhoto !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <Button
                onClick={closeLightbox}
                variant="ghost"
                className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                onClick={prevPhoto}
                variant="ghost"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 disabled:opacity-50"
                disabled={selectedPhoto === 0}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                onClick={nextPhoto}
                variant="ghost"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 disabled:opacity-50"
                disabled={selectedPhoto === allPhotos.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <img
                src={allPhotos[selectedPhoto]?.photo_url}
                alt={allPhotos[selectedPhoto]?.caption?.[i18n.language as keyof typeof allPhotos[selectedPhoto].caption] || 'Photo'}
                className="max-w-full max-h-full object-contain"
              />
              
              {allPhotos[selectedPhoto]?.caption && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {allPhotos[selectedPhoto].caption[i18n.language as keyof typeof allPhotos[selectedPhoto].caption]}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
