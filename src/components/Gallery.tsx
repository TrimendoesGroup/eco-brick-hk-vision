
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

interface PhotoAlbum {
  id: string;
  title: { en: string; zh: string };
  subtitle?: { en: string; zh: string };
  cover_image_url: string;
  photos?: Array<{ id: string; photo_url: string; caption?: any }>;
}

const Gallery = () => {
  const { t, i18n } = useTranslation();

  const { data: albums = [] } = useQuery({
    queryKey: ['photo-albums'],
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
        title: album.title as { en: string; zh: string },
        subtitle: album.subtitle as { en: string; zh: string } | undefined,
        photos: album.album_photos?.sort((a: any, b: any) => a.order_index - b.order_index) || []
      })) as PhotoAlbum[];
    }
  });

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('gallery.title')}</h2>
        </div>

        {albums.map((album) => (
          <div key={album.id} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {album.title[i18n.language as keyof typeof album.title]}
              </h3>
              {album.subtitle && (
                <p className="text-gray-600">
                  {album.subtitle[i18n.language as keyof typeof album.subtitle]}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {album.photos?.slice(0, 8).map((photo, index) => (
                <Card key={photo.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={photo.photo_url}
                      alt={photo.caption?.[i18n.language] || `Photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {photo.caption && (
                    <CardContent className="p-3">
                      <p className="text-sm text-gray-600 text-center">
                        {photo.caption[i18n.language as keyof typeof photo.caption]}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {album.photos && album.photos.length > 8 && (
              <div className="text-center mt-6">
                <span className="text-gray-500">
                  +{album.photos.length - 8} more photos
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
