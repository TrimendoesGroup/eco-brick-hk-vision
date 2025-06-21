
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">5S</span>
              </div>
              <span className="font-bold text-lg">
                {t('hero.title')}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('hero.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 info@5schools-eco.hk</p>
              <p>📞 +852 1234 5678</p>
              <p>📍 Hong Kong</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.follow')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
