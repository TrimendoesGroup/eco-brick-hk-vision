
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        impact: "Impact",
        gallery: "Gallery",
        testimonials: "Testimonials",
        timeline: "Timeline",
        report: "ESG Report"
      },
      hero: {
        title: "Five Schools Environmental Pioneer Program",
        subtitle: "Transforming Plastic Bottles into Eco-Bricks for Sustainable Infrastructure",
        description: "Join us in creating a greener future through innovative recycling and community building",
        cta: "Learn More"
      },
      about: {
        title: "About the Program",
        description: "The Five Schools Environmental Pioneer Program is a groundbreaking initiative that transforms plastic waste into valuable eco-bricks, creating sustainable infrastructure while educating students about environmental responsibility.",
        mission: "Our Mission",
        missionText: "To create environmental awareness and sustainable solutions through collaborative action across five Hong Kong schools."
      },
      process: {
        title: "How It Works",
        step1: {
          title: "Collection",
          description: "Students collect plastic bottles from their schools and communities"
        },
        step2: {
          title: "Processing",
          description: "Bottles are cleaned and processed into eco-brick materials"
        },
        step3: {
          title: "Construction",
          description: "Eco-bricks are used to build sustainable infrastructure projects"
        },
        step4: {
          title: "Impact",
          description: "Measure environmental impact and educational outcomes"
        }
      },
      impact: {
        title: "Environmental Impact",
        bottlesCollected: "Bottles Collected",
        ecobricksMade: "Eco-bricks Made",
        infrastructureBuilt: "Infrastructure Projects",
        studentsInvolved: "Students Involved"
      },
      schools: {
        title: "Participating Schools",
        viewDetails: "View Details"
      },
      gallery: {
        title: "Photo Gallery",
        albums: "Albums"
      },
      testimonials: {
        title: "Testimonials",
        students: "Students",
        teachers: "Teachers",
        organizations: "Supporting Organizations"
      },
      timeline: {
        title: "Program Timeline",
        programStart: "Program Launch",
        collection: "Collection Phase",
        construction: "Infrastructure Building",
        ceremony: "Closing Ceremony"
      },
      report: {
        title: "ESG Audit Report",
        subtitle: "Environmental, Social & Governance Impact Assessment",
        download: "Download Report",
        highlights: "Key Highlights"
      },
      organizations: {
        title: "Our Partners & Supporters",
        partners: "Our Partners",
        supporters: "Our Supporters"
      },
      sdg: {
        title: "UN SDG Impact",
        subtitle: "Contributing to Sustainable Development Goals"
      },
      footer: {
        contact: "Contact Us",
        follow: "Follow Us",
        copyright: "© 2024 Five Schools Environmental Pioneer Program. All rights reserved."
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "主頁",
        about: "關於我們",
        impact: "環境影響",
        gallery: "相片集",
        testimonials: "見證分享",
        timeline: "時間軸",
        report: "ESG報告"
      },
      hero: {
        title: "五校聯合環保先導計劃",
        subtitle: "將塑膠瓶轉化為環保磚，建設可持續基礎設施",
        description: "透過創新回收和社區建設，共同創造更綠色的未來",
        cta: "了解更多"
      },
      about: {
        title: "關於計劃",
        description: "五校聯合環保先導計劃是一項突破性的倡議，將塑膠廢料轉化為有價值的環保磚，在教育學生環境責任的同時創建可持續的基礎設施。",
        mission: "我們的使命",
        missionText: "透過五所香港學校的協作行動，創造環境意識和可持續解決方案。"
      },
      process: {
        title: "運作方式",
        step1: {
          title: "收集",
          description: "學生從學校和社區收集塑膠瓶"
        },
        step2: {
          title: "處理",
          description: "清潔塑膠瓶並加工成環保磚材料"
        },
        step3: {
          title: "建設",
          description: "使用環保磚建造可持續的基礎設施項目"
        },
        step4: {
          title: "影響",
          description: "測量環境影響和教育成果"
        }
      },
      impact: {
        title: "環境影響",
        bottlesCollected: "收集瓶子數量",
        ecobrricksMade: "製造環保磚數量",
        infrastructureBuilt: "基礎設施項目",
        studentsInvolved: "參與學生人數"
      },
      schools: {
        title: "參與學校",
        viewDetails: "查看詳情"
      },
      gallery: {
        title: "相片集",
        albums: "相冊"
      },
      testimonials: {
        title: "見證分享",
        students: "學生",
        teachers: "教師",
        organizations: "支持機構"
      },
      timeline: {
        title: "計劃時間軸",
        programStart: "計劃啟動",
        collection: "收集階段",
        construction: "基礎設施建設",
        ceremony: "閉幕典禮"
      },
      report: {
        title: "ESG審計報告",
        subtitle: "環境、社會和管治影響評估",
        download: "下載報告",
        highlights: "重點摘要"
      },
      organizations: {
        title: "我們的合作夥伴和支持者",
        partners: "我們的合作夥伴",
        supporters: "我們的支持者"
      },
      sdg: {
        title: "聯合國可持續發展目標影響",
        subtitle: "為可持續發展目標作出貢獻"
      },
      footer: {
        contact: "聯絡我們",
        follow: "關注我們",
        copyright: "© 2024 五校聯合環保先導計劃。版權所有。"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
