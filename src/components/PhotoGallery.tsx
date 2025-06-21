
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: string;
  photo_url: string;
  caption?: { en: string; zh: string };
}

interface Album {
  id: string;
  name: { en: string; zh: string };
  description: { en: string; zh: string };
  cover_image_url: string;
  album_photos: Photo[];
}

const PhotoGallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

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
      
      return albumsData.map(album => ({
        ...album,
        name: album.name as { en: string; zh: string },
        description: album.description as { en: string; zh: string },
        album_photos: album.album_photos || []
      })) as Album[];
    }
  });

  const getCurrentLanguage = () => {
    return i18n.language === 'zh' ? 'zh' : 'en';
  };

  const getPhotoCaption = (photo: Photo) => {
    const lang = getCurrentLanguage();
    return photo.caption?.[lang] || '';
  };

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setSelectedPhoto(null);
  };

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null && selectedAlbum && selectedPhoto < selectedAlbum.album_photos.length - 1) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Card 
              key={album.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => openAlbum(album)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={album.cover_image_url}
                  alt={album.name[getCurrentLanguage()]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {album.name[getCurrentLanguage()]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {album.description[getCurrentLanguage()]}
                </p>
                <div className="mt-3 text-sm text-green-600 font-medium">
                  {album.album_photos.length} photos
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Album View */}
        {selectedAlbum && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedAlbum.name[getCurrentLanguage()]}
                  </h2>
                  <p className="text-gray-600">
                    {selectedAlbum.description[getCurrentLanguage()]}
                  </p>
                </div>
                <Button
                  onClick={closeAlbum}
                  variant="ghost"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Masonry Layout */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {selectedAlbum.album_photos.map((photo, index) => (
                  <div key={photo.id} className="break-inside-avoid mb-4">
                    <img
                      src={photo.photo_url}
                      alt={getPhotoCaption(photo) || `Photo ${index + 1}`}
                      className="w-full rounded-lg hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
                      onClick={() => openLightbox(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedPhoto !== null && selectedAlbum && (
          <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
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
                disabled={selectedPhoto === selectedAlbum.album_photos.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <img
                src={selectedAlbum.album_photos[selectedPhoto]?.photo_url}
                alt={getPhotoCaption(selectedAlbum.album_photos[selectedPhoto]) || 'Photo'}
                className="max-w-full max-h-full object-contain"
              />
              
              {selectedAlbum.album_photos[selectedPhoto]?.caption && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {getPhotoCaption(selectedAlbum.album_photos[selectedPhoto])}
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
