import type { Language } from "../language";

interface Section {
  cta: string;
  assistants: string;
  languages: string;
  faq: string;
}

const content = {
  "en": {
    cta: "Get Started",
    assistants: "Assistants",
    languages: "Languages",
    faq: "FAQ",
  },
  "zh": {
    cta: "开始",
    assistants: "助手",
    languages: "语言",
    faq: "常见问题",
  },
  "hi": {
    cta: "शुरू करें",
    assistants: "सहायक",
    languages: "भाषाएँ",
    faq: "सामान्य प्रश्न",
  },
  "es": {
    cta: "Empezar",
    assistants: "Asistentes",
    languages: "Idiomas",
    faq: "Preguntas Frecuentes",
  },
  "ar": {
    cta: "ابدأ",
    assistants: "مساعد",
    languages: "اللغات",
    faq: "الأسئلة الشائعة",
  },
  "bn": {
    cta: "শুরু করুন",
    assistants: "সহকারী",
    languages: "ভাষা",
    faq: "প্রশ্নাবলী",
  },
  "pt": {
    cta: "Começar",
    assistants: "Assistentes",
    languages: "Idiomas",
    faq: "Perguntas Frequentes",
  },
  "ru": {
    cta: "Начать",
    assistants: "Помощники",
    languages: "Языки",
    faq: "Часто задаваемые вопросы",
  },
  "ja": {
    cta: "開始",
    assistants: "アシスタント",
    languages: "言語",
    faq: "よくある質問",
  },
  "ur": {
    cta: "شروع کریں",
    assistants: "معاونین",
    languages: "زبانیں",
    faq: "عمومی سوالات",
  },
  "id": {
    cta: "Mulai",
    assistants: "Asisten",
    languages: "Bahasa",
    faq: "FAQ",
  },
  "ms": {
    cta: "Mula",
    assistants: "Penolong",
    languages: "Bahasa",
    faq: "Soalan Lazim",
  },
  "fr": {
    cta: "Commencer",
    assistants: "Assistants",
    languages: "Langues",
    faq: "FAQ",
  },
  "de": {
    cta: "Starten",
    assistants: "Assistenten",
    languages: "Sprachen",
    faq: "FAQ",
  },
  "jv": {
    cta: "Mulai",
    assistants: "Asisten",
    languages: "Basa",
    faq: "FAQ",
  },
  "te": {
    cta: "ప్రారంభించు",
    assistants: "సహాయకులు",
    languages: "భాషలు",
    faq: "ప్రశ్నలు",
  },
  "vi": {
    cta: "Bắt đầu",
    assistants: "Trợ lý",
    languages: "Ngôn ngữ",
    faq: "Câu hỏi thường gặp",
  },
  "tr": {
    cta: "Başlat",
    assistants: "Asistanlar",
    languages: "Diller",
    faq: "SSS",
  },
  "ko": {
    cta: "시작",
    assistants: "어시스턴트",
    languages: "언어",
    faq: "FAQ",
  },
  "ta": {
    cta: "தொடங்கவும்",
    assistants: "உதவியாளர்கள்",
    languages: "மொழிகள்",
    faq: "கேள்விகள்",
  },
  "mr": {
    cta: "प्रारंभ करा",
    assistants: "सहाय्यक",
    languages: "भाषा",
    faq: "प्रश्न",
  },
  "it": {
    cta: "Inizia",
    assistants: "Assistenti",
    languages: "Lingue",
    faq: "FAQ",
  },
  "th": {
    cta: "เริ่มต้น",
    assistants: "ผู้ช่วย",
    languages: "ภาษา",
    faq: "คำถามที่พบบ่อย",
  },
  "pl": {
    cta: "Rozpocznij",
    assistants: "Asystenci",
    languages: "Języki",
    faq: "FAQ",
  },
  "ml": {
    cta: "ആരംഭിക്കുക",
    assistants: "സഹായകർ",
    languages: "ഭാഷകൾ",
    faq: "പതിക്കുന്ന ചോദ്യങ്ങൾ",
  },
  "nl": {
    cta: "Beginnen",
    assistants: "Assistenten",
    languages: "Talen",
    faq: "FAQ",
  },
  "fil": {
    cta: "Simulan",
    assistants: "Mga Assistant",
    languages: "Mga Wika",
    faq: "Mga Madalas Itanong",
  },
  "he": {
    cta: "התחל",
    assistants: "עוזרים",
    languages: "שפות",
    faq: "שאלות נפוצות",
  },
  "sv": {
    cta: "Börja",
    assistants: "Assistenter",
    languages: "Språk",
    faq: "FAQ",
  },
  "da": {
    cta: "Start",
    assistants: "Assistenter",
    languages: "Sprog",
    faq: "FAQ",
  },
  "no": {
    cta: "Start",
    assistants: "Assistenter",
    languages: "Språk",
    faq: "FAQ",
  },
  "lv": {
    cta: "Sākt",
    assistants: "Asistenti",
    languages: "Valodas",
    faq: "Bieži uzdotie jautājumi",
  },
} as Language<Section>;

export { content };
