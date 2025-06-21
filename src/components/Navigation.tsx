
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'impact', href: '#impact' },
    { key: 'gallery', href: '#gallery' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'timeline', href: '#timeline' },
    { key: 'report', href: '#report' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-green-300 transition-colors duration-200 font-medium drop-shadow-lg"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center">
            <Button 
              onClick={toggleLanguage}
              variant="ghost"
              className="text-white hover:text-green-300 hover:bg-white/10 transition-all duration-200"
            >
              <Globe className="h-5 w-5 mr-2" />
              {i18n.language === 'en' ? '中文' : 'English'}
            </Button>

            {/* Mobile menu button */}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              className="md:hidden ml-2 text-white hover:text-green-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-black/50 backdrop-blur-sm rounded-lg mt-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 px-4 text-white hover:text-green-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
