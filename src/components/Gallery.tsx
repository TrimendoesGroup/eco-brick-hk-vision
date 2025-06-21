
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const { t } = useTranslation();

  const albums = [
    {
      title: "Collection Phase",
      titleZh: "收集階段",
      description: "Students collecting plastic bottles",
      descriptionZh: "學生收集塑膠瓶",
      images: 45,
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      title: "Processing Workshop",
      titleZh: "加工工作坊",
      description: "Creating eco-bricks from collected materials",
      descriptionZh: "從收集的材料製作環保磚",
      images: 32,
      cover: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
    },
    {
      title: "Infrastructure Building",
      titleZh: "基礎設施建設",
      description: "Building structures with eco-bricks", 
      descriptionZh: "用環保磚建造結構",
      images: 28,
      cover: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
    },
    {
      title: "Completed Projects",
      titleZh: "完成項目",
      description: "Finished infrastructure showcases",
      descriptionZh: "完成的基礎設施展示",
      images: 18,
      cover: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      title: "Community Events",
      titleZh: "社區活動",
      description: "Outreach and awareness activities",
      descriptionZh: "外展和宣傳活動",
      images: 25,
      cover: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      title: "Closing Ceremony",
      titleZh: "閉幕典禮",
      description: "Celebration of program achievements",
      descriptionZh: "慶祝計劃成就",
      images: 15,
      cover: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('gallery.title')}</h2>
          <p className="text-lg text-gray-600">{t('gallery.albums')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <Card key={index} className="group cursor-pointer border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {album.images} {album.images > 1 ? 'photos' : 'photo'}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {album.title}
                </h3>
                <p className="text-gray-600 mb-2">{album.titleZh}</p>
                <p className="text-gray-500 text-sm">
                  {album.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
