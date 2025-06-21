
-- Enable Row Level Security on all tables
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.photo_albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.album_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.esg_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.esg_report ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.impact_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_photos ENABLE ROW LEVEL SECURITY;

-- Create public read policies for organizations
CREATE POLICY "Allow public read access to organizations" 
ON public.organizations 
FOR SELECT 
USING (true);

-- Create public read policies for schools
CREATE POLICY "Allow public read access to schools" 
ON public.schools 
FOR SELECT 
USING (true);

-- Create public read policies for photo_albums
CREATE POLICY "Allow public read access to photo_albums" 
ON public.photo_albums 
FOR SELECT 
USING (true);

-- Create public read policies for album_photos
CREATE POLICY "Allow public read access to album_photos" 
ON public.album_photos 
FOR SELECT 
USING (true);

-- Create public read policies for testimonials
CREATE POLICY "Allow public read access to testimonials" 
ON public.testimonials 
FOR SELECT 
USING (true);

-- Create public read policies for esg_highlights
CREATE POLICY "Allow public read access to esg_highlights" 
ON public.esg_highlights 
FOR SELECT 
USING (true);

-- Create public read policies for esg_report
CREATE POLICY "Allow public read access to esg_report" 
ON public.esg_report 
FOR SELECT 
USING (true);

-- Create public read policies for impact_stats
CREATE POLICY "Allow public read access to impact_stats" 
ON public.impact_stats 
FOR SELECT 
USING (true);

-- Create public read policies for banners
CREATE POLICY "Allow public read access to banners" 
ON public.banners 
FOR SELECT 
USING (true);

-- Create public read policies for school_photos
CREATE POLICY "Allow public read access to school_photos" 
ON public.school_photos 
FOR SELECT 
USING (true);
