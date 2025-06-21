
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Schools from "@/components/Schools";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import ESGReport from "@/components/ESGReport";
import Organizations from "@/components/Organizations";
import SDGSection from "@/components/SDGSection";
import Footer from "@/components/Footer";
import "@/i18n";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-green-50 bg-opacity-30" style={{ backgroundColor: 'rgba(0, 255, 0, 1)' }}>
      <Navigation />
      <Hero />
      <About />
      <Impact />
      <Schools />
      <PhotoGallery />
      <Testimonials />
      <Timeline />
      <ESGReport />
      <Organizations />
      <SDGSection />
      <Footer />
    </div>
  );
};

export default Index;
