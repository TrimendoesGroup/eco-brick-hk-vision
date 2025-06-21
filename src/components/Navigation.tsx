
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          {/* Language Switcher */}
          <Button 
            onClick={toggleLanguage}
            variant="ghost"
            className="text-white hover:text-green-300 hover:bg-white/10 transition-all duration-200"
          >
            <Globe className="h-5 w-5 mr-2" />
            {i18n.language === 'en' ? '中文' : 'English'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
