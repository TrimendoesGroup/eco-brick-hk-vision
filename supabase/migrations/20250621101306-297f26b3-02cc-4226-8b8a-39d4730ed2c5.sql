
-- Update photo_albums table to include name and description fields
ALTER TABLE photo_albums 
ADD COLUMN IF NOT EXISTS name jsonb,
ADD COLUMN IF NOT EXISTS description jsonb;

-- Insert sample photo albums data
INSERT INTO photo_albums (id, name, description, title, cover_image_url, is_active, order_index) VALUES
(gen_random_uuid(), '{"en": "School Activities", "zh": "學校活動"}', '{"en": "Various activities and events at participating schools", "zh": "參與學校的各種活動和事件"}', '{"en": "School Activities", "zh": "學校活動"}', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800', true, 1),
(gen_random_uuid(), '{"en": "Recycling Process", "zh": "回收過程"}', '{"en": "Step-by-step documentation of our recycling process", "zh": "我們回收過程的逐步記錄"}', '{"en": "Recycling Process", "zh": "回收過程"}', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800', true, 2),
(gen_random_uuid(), '{"en": "Community Events", "zh": "社區活動"}', '{"en": "Community engagement and awareness events", "zh": "社區參與和意識活動"}', '{"en": "Community Events", "zh": "社區活動"}', 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800', true, 3);

-- Insert sample photos for albums with proper JSONB casting
INSERT INTO album_photos (id, album_id, photo_url, caption, order_index) 
SELECT 
  gen_random_uuid(),
  pa.id,
  'https://images.unsplash.com/photo-' || (1500000000 + (ROW_NUMBER() OVER())::int) || '?w=800',
  ('{"en": "Sample photo ' || ROW_NUMBER() OVER() || '", "zh": "樣本照片 ' || ROW_NUMBER() OVER() || '"}')::jsonb,
  ROW_NUMBER() OVER()
FROM photo_albums pa, generate_series(1, 8) AS series
WHERE pa.name IS NOT NULL;

-- Add more testimonial sample data (10 additional records)
INSERT INTO testimonials (id, name, role, organization, quote, video_url, thumbnail_url, testimonial_type, is_active, order_index) VALUES
(gen_random_uuid(), '{"en": "Alice Wong", "zh": "王愛麗"}', '{"en": "Environmental Club President", "zh": "環保學會會長"}', '{"en": "Green Valley Secondary School", "zh": "綠谷中學"}', '{"en": "This program opened my eyes to the impact we can make together.", "zh": "這個計劃讓我看到我們可以一起產生的影響。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1494790108755-2616b36c88f1?w=400', 'student', true, 7),
(gen_random_uuid(), '{"en": "Mr. David Chen", "zh": "陳大偉先生"}', '{"en": "Science Teacher", "zh": "科學老師"}', '{"en": "Innovation High School", "zh": "創新高中"}', '{"en": "Our students learned valuable lessons about sustainability.", "zh": "我們的學生學到了關於可持續發展的寶貴經驗。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'teacher', true, 8),
(gen_random_uuid(), '{"en": "Sarah Kim", "zh": "金莎拉"}', '{"en": "Grade 10 Student", "zh": "十年級學生"}', '{"en": "Future Leaders Academy", "zh": "未來領袖學院"}', '{"en": "I never knew recycling could be so engaging and fun!", "zh": "我從來不知道回收可以如此有趣和吸引人！"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', 'student', true, 9),
(gen_random_uuid(), '{"en": "Ms. Jennifer Liu", "zh": "劉珍妮小姐"}', '{"en": "Environmental Coordinator", "zh": "環境協調員"}', '{"en": "City Education Department", "zh": "市教育局"}', '{"en": "This initiative sets a new standard for environmental education.", "zh": "這項倡議為環境教育樹立了新標準。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', 'organization', true, 10),
(gen_random_uuid(), '{"en": "Tommy Zhang", "zh": "張湯米"}', '{"en": "Student Council Member", "zh": "學生會成員"}', '{"en": "Bright Future School", "zh": "光明前途學校"}', '{"en": "We collected more bottles than we ever imagined possible!", "zh": "我們收集的瓶子比我們想像的還要多！"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', 'student', true, 11),
(gen_random_uuid(), '{"en": "Dr. Rachel Wong", "zh": "黃瑞秋博士"}', '{"en": "Principal", "zh": "校長"}', '{"en": "Excellence International School", "zh": "卓越國際學校"}', '{"en": "The program has transformed our school culture towards sustainability.", "zh": "這個計劃改變了我們學校的可持續發展文化。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400', 'teacher', true, 12),
(gen_random_uuid(), '{"en": "Kevin Lee", "zh": "李凱文"}', '{"en": "Grade 11 Student", "zh": "十一年級學生"}', '{"en": "Harbor View High School", "zh": "海港景觀高中"}', '{"en": "I am proud to be part of this environmental movement.", "zh": "我很自豪能成為這個環保運動的一部分。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', 'student', true, 13),
(gen_random_uuid(), '{"en": "Ms. Amy Tan", "zh": "陳艾美小姐"}', '{"en": "Environmental Studies Teacher", "zh": "環境研究老師"}', '{"en": "Green Earth Academy", "zh": "綠色地球學院"}', '{"en": "My students are now environmental ambassadors in their communities.", "zh": "我的學生現在是他們社區的環境大使。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400', 'teacher', true, 14),
(gen_random_uuid(), '{"en": "Michael Park", "zh": "朴邁克"}', '{"en": "Environmental NGO Director", "zh": "環保非政府組織總監"}', '{"en": "Clean Ocean Foundation", "zh": "清潔海洋基金會"}', '{"en": "This collaboration shows the power of youth-led environmental action.", "zh": "這次合作展示了青年主導環境行動的力量。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', 'organization', true, 15),
(gen_random_uuid(), '{"en": "Lisa Chen", "zh": "陳麗莎"}', '{"en": "Grade 9 Student", "zh": "九年級學生"}', '{"en": "Sunrise Secondary School", "zh": "日出中學"}', '{"en": "Learning about recycling changed how I see waste forever.", "zh": "學習回收永遠改變了我對廢物的看法。"}', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400', 'student', true, 16);
