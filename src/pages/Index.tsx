
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import ESGReport from "@/components/ESGReport";
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
          const offsetTop = element.offsetTop - 80; // Account for fixed nav height
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Impact />
      <Gallery />
      <Testimonials />
      <Timeline />
      <ESGReport />
      <Footer />
    </div>
  );
};

export default Index;
