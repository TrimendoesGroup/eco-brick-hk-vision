
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline"
      className="ml-4 bg-white hover:bg-green-50 border-green-200"
    >
      {i18n.language === 'en' ? '中文' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;
