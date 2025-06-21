
-- Create banners table for carousel
CREATE TABLE public.banners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  title JSONB NOT NULL,
  subtitle JSONB NOT NULL,
  description JSONB NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create impact_stats table
CREATE TABLE public.impact_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stat_key TEXT NOT NULL UNIQUE,
  quantity INTEGER NOT NULL,
  unit JSONB NOT NULL,
  icon TEXT,
  color TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create schools table
CREATE TABLE public.schools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name JSONB NOT NULL,
  banner_image_url TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  students_participated INTEGER NOT NULL DEFAULT 0,
  bottles_collected INTEGER NOT NULL DEFAULT 0,
  introduction JSONB NOT NULL,
  video_url TEXT,
  recycling_performance JSONB,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create school_photos table for school gallery
CREATE TABLE public.school_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID REFERENCES public.schools(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  caption JSONB,
  photo_type TEXT NOT NULL, -- 'construction', 'general', 'event'
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create photo_albums table
CREATE TABLE public.photo_albums (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title JSONB NOT NULL,
  subtitle JSONB,
  cover_image_url TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create album_photos table
CREATE TABLE public.album_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  album_id UUID REFERENCES public.photo_albums(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  caption JSONB,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table for videos
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name JSONB NOT NULL,
  role JSONB NOT NULL,
  organization JSONB,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  quote JSONB NOT NULL,
  testimonial_type TEXT NOT NULL, -- 'student', 'teacher', 'organization'
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create esg_report table
CREATE TABLE public.esg_report (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title JSONB NOT NULL,
  subtitle JSONB NOT NULL,
  report_url TEXT,
  highlights JSONB NOT NULL,
  metrics JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create organizations table for hosting and supporting organizations
CREATE TABLE public.organizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name JSONB NOT NULL,
  logo_url TEXT NOT NULL,
  organization_type TEXT NOT NULL, -- 'hosting', 'supporting'
  contribution JSONB NOT NULL,
  website_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert sample data for banners
INSERT INTO public.banners (image_url, title, subtitle, description, order_index) VALUES
('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=600&fit=crop', 
 '{"en": "Five Schools Environmental Pioneer Program", "zh": "五校聯合環保先導計劃"}',
 '{"en": "Transforming Plastic Bottles into Eco-Bricks", "zh": "將塑膠瓶轉化為環保磚"}',
 '{"en": "Join us in creating a greener future through innovative recycling and community building", "zh": "透過創新回收和社區建設，共同創造更綠色的未來"}',
 1),
('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop',
 '{"en": "Building Sustainable Infrastructure", "zh": "建設可持續基礎設施"}',
 '{"en": "From Waste to Wonder", "zh": "從廢物到奇蹟"}',
 '{"en": "Discover how students are turning plastic waste into valuable building materials", "zh": "了解學生如何將塑膠廢料轉化為有價值的建築材料"}',
 2);

-- Insert sample data for impact stats
INSERT INTO public.impact_stats (stat_key, quantity, unit, icon, color, order_index) VALUES
('bottles_collected', 12547, '{"en": "Bottles", "zh": "瓶子"}', '🍶', 'text-blue-600', 1),
('ecobricks_made', 856, '{"en": "Eco-bricks", "zh": "環保磚"}', '🧱', 'text-green-600', 2),
('infrastructure_built', 15, '{"en": "Projects", "zh": "項目"}', '🏗️', 'text-orange-600', 3),
('students_involved', 2340, '{"en": "Students", "zh": "學生"}', '👥', 'text-purple-600', 4);
