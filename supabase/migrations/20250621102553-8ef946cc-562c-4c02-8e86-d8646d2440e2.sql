
-- Add sample photos to existing albums
INSERT INTO album_photos (id, album_id, photo_url, caption, order_index) 
SELECT 
  gen_random_uuid(),
  pa.id,
  CASE 
    WHEN ROW_NUMBER() OVER() % 8 = 1 THEN 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600'
    WHEN ROW_NUMBER() OVER() % 8 = 2 THEN 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400'
    WHEN ROW_NUMBER() OVER() % 8 = 3 THEN 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500'
    WHEN ROW_NUMBER() OVER() % 8 = 4 THEN 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=650'
    WHEN ROW_NUMBER() OVER() % 8 = 5 THEN 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=550'
    WHEN ROW_NUMBER() OVER() % 8 = 6 THEN 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=450'
    WHEN ROW_NUMBER() OVER() % 8 = 7 THEN 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600'
    ELSE 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500'
  END,
  ('{"en": "Sample photo ' || ROW_NUMBER() OVER() || '", "zh": "樣本照片 ' || ROW_NUMBER() OVER() || '"}')::jsonb,
  ROW_NUMBER() OVER()
FROM photo_albums pa, generate_series(1, 12) AS series
WHERE pa.name IS NOT NULL;

-- Update testimonials with proper YouTube embed links
UPDATE testimonials SET 
  video_url = CASE 
    WHEN name->>'en' = 'John Smith' THEN 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    WHEN name->>'en' = 'Lisa Chen' THEN 'https://www.youtube.com/embed/9bZkp7q19f0'
    WHEN name->>'en' = 'Dr. Michael Wang' THEN 'https://www.youtube.com/embed/kJQP7kiw5Fk'
    WHEN name->>'en' = 'Emma Johnson' THEN 'https://www.youtube.com/embed/ZZ5LpwO-An4'
    WHEN name->>'en' = 'Prof. Zhang Wei' THEN 'https://www.youtube.com/embed/hFZFjoX2cGg'
    WHEN name->>'en' = 'Maria Rodriguez' THEN 'https://www.youtube.com/embed/YQHsXMglC9A'
    WHEN name->>'en' = 'Alice Wong' THEN 'https://www.youtube.com/embed/JGwWNGJdvx8'
    WHEN name->>'en' = 'Mr. David Chen' THEN 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
    WHEN name->>'en' = 'Sarah Kim' THEN 'https://www.youtube.com/embed/9bZkp7q19f0'
    WHEN name->>'en' = 'Ms. Jennifer Liu' THEN 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    WHEN name->>'en' = 'Tommy Zhang' THEN 'https://www.youtube.com/embed/kJQP7kiw5Fk'
    WHEN name->>'en' = 'Dr. Rachel Wong' THEN 'https://www.youtube.com/embed/ZZ5LpwO-An4'
    WHEN name->>'en' = 'Kevin Lee' THEN 'https://www.youtube.com/embed/hFZFjoX2cGg'
    WHEN name->>'en' = 'Ms. Amy Tan' THEN 'https://www.youtube.com/embed/YQHsXMglC9A'
    WHEN name->>'en' = 'Michael Park' THEN 'https://www.youtube.com/embed/JGwWNGJdvx8'
    ELSE 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
  END
WHERE id IS NOT NULL;
