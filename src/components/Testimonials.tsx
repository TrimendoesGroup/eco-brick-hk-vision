
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      type: "student",
      name: "張小明",
      nameEn: "Zhang Xiaoming",
      role: "Grade 10 Student",
      roleZh: "中四學生",
      school: "環保中學",
      schoolEn: "Green Secondary School",
      quote: "This program taught me that small actions can create big changes. I'm proud to be part of building a sustainable future.",
      quoteZh: "這個計劃讓我明白小行動可以創造大改變。我很自豪能參與建設可持續的未來。",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop"
    },
    {
      type: "teacher",
      name: "李老師",
      nameEn: "Teacher Li",
      role: "Environmental Science Teacher",
      roleZh: "環境科學教師",
      school: "可持續小學",
      schoolEn: "Sustainable Primary School", 
      quote: "Seeing students become environmental champions through hands-on learning has been incredibly rewarding.",
      quoteZh: "看到學生透過實踐學習成為環保先鋒，這是非常有意義的。",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop"
    },
    {
      type: "organization",
      name: "綠色地球基金會",
      nameEn: "Green Earth Foundation",
      role: "Supporting Partner",
      roleZh: "支持伙伴",
      school: "",
      schoolEn: "",
      quote: "This innovative program demonstrates how education and environmental action can work together effectively.",
      quoteZh: "這個創新計劃展示了教育和環保行動如何有效結合。",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=300&h=200&fit=crop"
    },
    {
      type: "student",
      name: "王同學",
      nameEn: "Student Wang",
      role: "Grade 8 Student",
      roleZh: "中二學生",
      school: "綠色學院",
      schoolEn: "Green Academy",
      quote: "Building our school garden with eco-bricks was amazing. We created something beautiful from waste!",
      quoteZh: "用環保磚建造學校花園真的很棒。我們把廢物變成美麗的東西！",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop"
    },
    {
      type: "teacher",
      name: "陳校長",
      nameEn: "Principal Chen",
      role: "School Principal",
      roleZh: "校長",
      school: "生態國際學校",
      schoolEn: "Eco International School",
      quote: "This program has transformed our school culture, making environmental awareness a core part of our identity.",
      quoteZh: "這個計劃改變了我們的校園文化，讓環保意識成為我們身份的核心部分。",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop"
    },
    {
      type: "organization",
      name: "香港環保署",
      nameEn: "Hong Kong Environmental Protection Department",
      role: "Government Partner",
      roleZh: "政府伙伴",
      school: "",
      schoolEn: "",
      quote: "We're impressed by the scalable model this program has created for waste reduction and environmental education.",
      quoteZh: "我們對這個計劃在減廢和環境教育方面創造的可擴展模式印象深刻。",
      videoUrl: "#",
      thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=200&fit=crop"
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'student': return t('testimonials.students');
      case 'teacher': return t('testimonials.teachers');
      case 'organization': return t('testimonials.organizations');
      default: return '';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'teacher': return 'bg-green-100 text-green-800';
      case 'organization': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('testimonials.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.nameEn}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    className="bg-white/90 hover:bg-white text-gray-900"
                  >
                    ▶ Play Video
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(testimonial.type)}`}>
                    {getTypeLabel(testimonial.type)}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.nameEn}</p>
                  <p className="text-green-600 font-medium text-sm">
                    {testimonial.role} • {testimonial.roleZh}
                  </p>
                  {testimonial.school && (
                    <p className="text-gray-500 text-sm">
                      {testimonial.school} • {testimonial.schoolEn}
                    </p>
                  )}
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-gray-600 text-sm mt-2 italic">
                  「{testimonial.quoteZh}」
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
