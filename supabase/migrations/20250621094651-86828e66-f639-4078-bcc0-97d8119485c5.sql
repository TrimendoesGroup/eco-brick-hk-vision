
-- Create ESG highlights table
CREATE TABLE public.esg_highlights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category JSONB NOT NULL,
  metrics JSONB NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert sample ESG highlights data
INSERT INTO public.esg_highlights (category, metrics, order_index) VALUES
('{"en": "Environmental", "zh": "環境"}', 
 '[
   {"label": {"en": "CO2 Reduction", "zh": "碳減排"}, "value": "2.5 tons", "color": "text-green-600"},
   {"label": {"en": "Waste Diverted", "zh": "廢物轉化"}, "value": "12,547 bottles", "color": "text-blue-600"},
   {"label": {"en": "Energy Saved", "zh": "節約能源"}, "value": "1,250 kWh", "color": "text-emerald-600"}
 ]', 1),
('{"en": "Social", "zh": "社會"}', 
 '[
   {"label": {"en": "Students Engaged", "zh": "參與學生"}, "value": "2,340", "color": "text-purple-600"},
   {"label": {"en": "Teachers Trained", "zh": "培訓教師"}, "value": "85", "color": "text-indigo-600"},
   {"label": {"en": "Community Outreach", "zh": "社區外展"}, "value": "15 events", "color": "text-pink-600"}
 ]', 2),
('{"en": "Governance", "zh": "管治"}', 
 '[
   {"label": {"en": "Partner Schools", "zh": "夥伴學校"}, "value": "5", "color": "text-orange-600"},
   {"label": {"en": "Compliance Rate", "zh": "合規率"}, "value": "100%", "color": "text-red-600"},
   {"label": {"en": "Transparency Score", "zh": "透明度評分"}, "value": "95/100", "color": "text-teal-600"}
 ]', 3);

-- Insert sample schools data
INSERT INTO public.schools (name, banner_image_url, logo_url, students_participated, bottles_collected, introduction, video_url, order_index) VALUES
('{"en": "Green Valley Primary School", "zh": "綠谷小學"}', 
 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop', 
 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop', 
 480, 3200, 
 '{"en": "Leading the way in environmental education and sustainable practices. Our students have shown exceptional commitment to the eco-brick program.", "zh": "在環保教育和可持續實踐方面處於領先地位。我們的學生對環保磚計劃表現出了極大的承諾。"}',
 'https://www.youtube.com/embed/dQw4w9WgXcQ', 1),
('{"en": "Sunshine Elementary School", "zh": "陽光小學"}', 
 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop', 
 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop', 
 420, 2850, 
 '{"en": "Known for innovative recycling programs and community engagement. Students actively participate in environmental conservation activities.", "zh": "以創新的回收計劃和社區參與而聞名。學生積極參與環境保護活動。"}',
 'https://www.youtube.com/embed/dQw4w9WgXcQ', 2),
('{"en": "Ocean View Secondary School", "zh": "海景中學"}', 
 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop', 
 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=100&h=100&fit=crop', 
 650, 4200, 
 '{"en": "Our secondary school students have embraced the eco-brick initiative with great enthusiasm, creating meaningful infrastructure projects.", "zh": "我們的中學生以極大的熱情擁抱環保磚倡議，創建了有意義的基礎設施項目。"}',
 'https://www.youtube.com/embed/dQw4w9WgXcQ', 3),
('{"en": "Mountain Peak Academy", "zh": "山峰學院"}', 
 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=400&fit=crop', 
 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop', 
 380, 2400, 
 '{"en": "A progressive school focusing on sustainability and environmental stewardship. Students lead by example in waste reduction.", "zh": "一所專注於可持續性和環境管理的進步學校。學生在減少廢物方面以身作則。"}',
 'https://www.youtube.com/embed/dQw4w9WgXcQ', 4),
('{"en": "Riverside International School", "zh": "河畔國際學校"}', 
 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop', 
 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=100&h=100&fit=crop', 
 410, 2897, 
 '{"en": "An international school with a global perspective on environmental issues. Students collaborate on cross-cultural sustainability projects.", "zh": "一所對環境問題有全球視野的國際學校。學生在跨文化可持續發展項目上進行合作。"}',
 'https://www.youtube.com/embed/dQw4w9WgXcQ', 5);

-- Insert sample school photos (fixed JSONB casting)
INSERT INTO public.school_photos (school_id, photo_url, photo_type, caption, order_index) 
SELECT 
  s.id,
  'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
  'construction',
  '{"en": "Students building eco-brick garden benches", "zh": "學生建造環保磚花園長椅"}'::jsonb,
  1
FROM public.schools s WHERE s.name->>'en' = 'Green Valley Primary School'
UNION ALL
SELECT 
  s.id,
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  'general',
  '{"en": "Environmental education workshop", "zh": "環境教育工作坊"}'::jsonb,
  2
FROM public.schools s WHERE s.name->>'en' = 'Green Valley Primary School';

-- Insert sample photo albums
INSERT INTO public.photo_albums (title, subtitle, cover_image_url, order_index) VALUES
('{"en": "Construction Progress", "zh": "建設進度"}',
 '{"en": "Building sustainable infrastructure with eco-bricks", "zh": "用環保磚建設可持續基礎設施"}',
 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop', 1),
('{"en": "Student Activities", "zh": "學生活動"}',
 '{"en": "Students engaged in environmental learning", "zh": "學生參與環境學習"}',
 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', 2),
('{"en": "Community Events", "zh": "社區活動"}',
 '{"en": "Bringing communities together for sustainability", "zh": "為可持續發展匯聚社區"}',
 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop', 3);

-- Insert sample album photos (fixed JSONB casting)
INSERT INTO public.album_photos (album_id, photo_url, caption, order_index)
SELECT 
  a.id,
  'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
  '{"en": "Building eco-brick walls", "zh": "建造環保磚牆"}'::jsonb,
  1
FROM public.photo_albums a WHERE a.title->>'en' = 'Construction Progress'
UNION ALL
SELECT 
  a.id,
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
  '{"en": "Community gathering", "zh": "社區聚會"}'::jsonb,
  1
FROM public.photo_albums a WHERE a.title->>'en' = 'Community Events';

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, organization, video_url, thumbnail_url, quote, testimonial_type, order_index) VALUES
('{"en": "Sarah Chen", "zh": "陳莎拉"}',
 '{"en": "Grade 6 Student", "zh": "六年級學生"}',
 '{"en": "Green Valley Primary School", "zh": "綠谷小學"}',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop',
 '{"en": "Making eco-bricks taught me how small actions can make a big difference for our planet.", "zh": "製作環保磚讓我明白小行動如何為我們的地球帶來大改變。"}',
 'student', 1),
('{"en": "Mr. David Wong", "zh": "黃大偉先生"}',
 '{"en": "Environmental Science Teacher", "zh": "環境科學教師"}',
 '{"en": "Ocean View Secondary School", "zh": "海景中學"}',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
 '{"en": "This program has transformed how our students think about waste and sustainability.", "zh": "這個計劃改變了我們學生對廢物和可持續性的思考方式。"}',
 'teacher', 2),
('{"en": "Lisa Johnson", "zh": "約翰遜麗莎"}',
 '{"en": "Environmental Program Director", "zh": "環境項目總監"}',
 '{"en": "Hong Kong Green Foundation", "zh": "香港綠色基金會"}',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=300&fit=crop',
 '{"en": "The impact of this initiative on environmental awareness has been remarkable.", "zh": "這項倡議對環保意識的影響令人矚目。"}',
 'organization', 3);

-- Insert sample organizations
INSERT INTO public.organizations (name, logo_url, organization_type, contribution, website_url, order_index) VALUES
('{"en": "Hong Kong Environmental Education Foundation", "zh": "香港環境教育基金會"}',
 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
 'hosting',
 '{"en": "Leading the initiative and providing educational resources", "zh": "領導倡議並提供教育資源"}',
 'https://example.com', 1),
('{"en": "Green Future Hong Kong", "zh": "香港綠色未來"}',
 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
 'supporting',
 '{"en": "Technical expertise and construction support", "zh": "技術專長和建設支持"}',
 'https://example.com', 2),
('{"en": "Sustainable Schools Network", "zh": "可持續學校網絡"}',
 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
 'supporting',
 '{"en": "Coordination between participating schools", "zh": "參與學校之間的協調"}',
 'https://example.com', 3),
('{"en": "EcoBrick Global", "zh": "全球環保磚"}',
 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=200&fit=crop',
 'supporting',
 '{"en": "Training and methodology development", "zh": "培訓和方法開發"}',
 'https://example.com', 4);
