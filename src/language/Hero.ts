import type { Language } from "../language";

interface Section {
  title: string;
  subtitle: string[];
  cta: string;
  price: string;
  duration: string;
  access: string;
  phoneScreenshot: {
    alt: string;
  };
}

const content = {
  "en": {
    "title": "Phone Bible-based AI assistants",
    "subtitle": ["Open the Bible.", "Call a helper.", "Have a conversation about God."],
    "cta": "Learn more",
    "price": "$10",
    "duration": "1 month",
    "access": "Access 15 assistants",
    "phoneScreenshot": {
      "alt": "Phone screenshot"
    }
  },
  "zh": {
    "title": "基于圣经的AI助手",
    "subtitle": ["打开圣经。", "打电话给助手。", "与上帝谈话。"],
    "cta": "了解更多",
    "price": "$10",
    "duration": "1个月",
    "access": "访问15个助手",
    "phoneScreenshot": {
      "alt": "手机截图"
    }
  },
  "hi": {
    "title": "फोन बाइबिल आधारित एआई सहायक",
    "subtitle": ["बाइबिल खोलें।", "एक सहायक को कॉल करें।", "ईश्वर के बारे में बातचीत करें।"],
    "cta": "और अधिक जानें",
    "price": "$10",
    "duration": "1 महीना",
    "access": "15 सहायकों तक पहुंच",
    "phoneScreenshot": {
      "alt": "फोन स्क्रीनशॉट"
    }
  },
  "es": {
    "title": "Asistentes de IA basados en la Biblia para el teléfono",
    "subtitle": ["Abre la Biblia.", "Llama a un ayudante.", "Ten una conversación sobre Dios."],
    "cta": "Aprende más",
    "price": "$10",
    "duration": "1 mes",
    "access": "Acceso a 15 asistentes",
    "phoneScreenshot": {
      "alt": "Captura de pantalla del teléfono"
    }
  },
  "ar": {
    "title": "مساعدين الذكاء الاصطناعي القائمة على الكتاب المقدس للهاتف",
    "subtitle": ["افتح الكتاب المقدس.", "اتصل بمساعد.", "إجراء محادثة حول الله."],
    "cta": "تعلم أكثر",
    "price": "$10",
    "duration": "1 شهر",
    "access": "الوصول إلى 15 مساعدًا",
    "phoneScreenshot": {
      "alt": "لقطة شاشة الهاتف"
    }
  },
  "bn": {
    "title": "ফোন বাইবিল ভিত্তিক এআই সহযোগী",
    "subtitle": ["বাইবেল খুলুন।", "একটি সহযোগী কল করুন।", "ঈশ্বর সম্পর্কে কথা বলুন।"],
    "cta": "আরও জানুন",
    "price": "$10",
    "duration": "1 মাস",
    "access": "15 সহযোগী অ্যাক্সেস",
    "phoneScreenshot": {
      "alt": "ফোন স্ক্রিনশট"
    }
  },
  "pt": {
    "title": "Assistentes de IA baseados na Bíblia para o telefone",
    "subtitle": ["Abra a Bíblia.", "Ligue para um ajudante.", "Tenha uma conversa sobre Deus."],
    "cta": "Saiba mais",
    "price": "$10",
    "duration": "1 mês",
    "access": "Acesso a 15 assistentes",
    "phoneScreenshot": {
      "alt": "Captura de tela do telefone"
    }
  },
  "ru": {
    "title": "Помощники на основе Библии для телефона",
    "subtitle": ["Откройте Библию.", "Позвоните помощнику.", "Поговорите о Боге."],
    "cta": "Узнать больше",
    "price": "$10",
    "duration": "1 месяц",
    "access": "Доступ к 15 помощникам",
    "phoneScreenshot": {
      "alt": "Снимок экрана телефона"
    }
  },
  "ja": {
    "title": "電話用聖書ベースのAIアシスタント",
    "subtitle": ["聖書を開く。", "ヘルパーに電話する。", "神について話す。"],
    "cta": "もっと詳しく",
    "price": "$10",
    "duration": "1ヶ月",
    "access": "15人のアシスタントにアクセス",
    "phoneScreenshot": {
      "alt": "電話のスクリーンショット"
    }
  },
  "ur": {
    "title": "فون بائبل بیس اے آئی ایسسٹنٹس",
    "subtitle": ["بائبل کھولیں۔", "ایک مددگار کو کال کریں۔", "خدا کے بارے میں بات کریں۔"],
    "cta": "مزید جانیں",
    "price": "$10",
    "duration": "1 ماہ",
    "access": "15 ایسسٹنٹس تک رسائی",
    "phoneScreenshot": {
      "alt": "فون سکرین شاٹ"
    }
  },
  "id": {
    "title": "Asisten AI Berbasis Alkitab untuk Telepon",
    "subtitle": ["Buka Alkitab.", "Telepon pembantu.", "Bicarakan tentang Tuhan."],
    "cta": "Pelajari lebih lanjut",
    "price": "$10",
    "duration": "1 bulan",
    "access": "Akses 15 asisten",
    "phoneScreenshot": {
      "alt": "Tangkapan layar telepon"
    }
  },
  "ms": {
    "title": "Pembantu AI Berasaskan Alkitab untuk Telefon",
    "subtitle": ["Buka Alkitab.", "Telefon pembantu.", "Bercakap tentang Tuhan."],
    "cta": "Ketahui lebih lanjut",
    "price": "$10",
    "duration": "1 bulan",
    "access": "Akses 15 pembantu",
    "phoneScreenshot": {
      "alt": "Tangkapan skrin telefon"
    }
  },
  "fr": {
    "title": "Assistant IA basé sur la Bible pour téléphone",
    "subtitle": ["Ouvrez la Bible.", "Appelez un assistant.", "Parlez de Dieu."],
    "cta": "En savoir plus",
    "price": "$10",
    "duration": "1 mois",
    "access": "Accès à 15 assistants",
    "phoneScreenshot": {
      "alt": "Capture d'écran du téléphone"
    }
  },
  "de": {
    "title": "Bibelbasierte KI-Assistenten für das Telefon",
    "subtitle": ["Öffne die Bibel.", "Rufen Sie einen Helfer an.", "Unterhalte dich über Gott."],
    "cta": "Erfahren Sie mehr",
    "price": "$10",
    "duration": "1 Monat",
    "access": "Zugriff auf 15 Assistenten",
    "phoneScreenshot": {
      "alt": "Telefonscreenshot"
    }
  },
  "jv": {
    "title": "Asisten AI Berbasis Alkitab kanggo Telepon",
    "subtitle": ["Buka Alkitab.", "Telepon pembantu.", "Ngomong babagan Gusti."],
    "cta": "Ketahui luwih jero",
    "price": "$10",
    "duration": "1 sasi",
    "access": "Akses 15 asisten",
    "phoneScreenshot": {
      "alt": "Tangkapan layar telepon"
    }
  },
  "te": {
    "title": "ఫోన్ బైబిల్ ఆధారిత ఎయి అసిస్టెంట్స్",
    "subtitle": ["బైబిల్ తెరవండి.", "సహాయకుడిని కాల్ చేయండి.", "దేవుని గురించి మాట్లాడండి."],
    "cta": "మరిన్ని తెలుసుకోండి",
    "price": "$10",
    "duration": "1 నెల",
    "access": "15 సహాయకులకు ప్రవేశం",
    "phoneScreenshot": {
      "alt": "ఫోన్ స్క్రీన్‌షాట్"
    }
  },
  "vi": {
    "title": "Trợ lý trí tuệ nhân tạo dựa trên Kinh Thánh cho điện thoại",
    "subtitle": ["Mở Kinh Thánh.", "Gọi một người trợ giúp.", "Nói chuyện về Chúa."],
    "cta": "Tìm hiểu thêm",
    "price": "$10",
    "duration": "1 tháng",
    "access": "Truy cập 15 trợ lý",
    "phoneScreenshot": {
      "alt": "Chụp màn hình điện thoại"
    }
  },
  "tr": {
    "title": "Telefon için Kutsal Kitap temelli AI asistanları",
    "subtitle": ["Kutsal Kitabı aç.", "Bir yardımcıyı arayın.", "Tanrı hakkında konuşun."],
    "cta": "Daha fazla bilgi edinin",
    "price": "$10",
    "duration": "1 ay",
    "access": "15 asistana erişim",
    "phoneScreenshot": {
      "alt": "Telefon ekran görüntüsü"
    }
  },
  "ko": {
    "title": "전화용 성경 기반 AI 어시스턴트",
    "subtitle": ["성경을 열다.", "도우미에게 전화하십시오.", "하나님에 대해 이야기하십시오."],
    "cta": "자세히 알아보기",
    "price": "$10",
    "duration": "1 개월",
    "access": "15 개의 어시스턴트 액세스",
    "phoneScreenshot": {
      "alt": "전화 스크린 샷"
    }
  },
  "ta": {
    "title": "தொலைபேசி வேதாகம அடிப்படை ஐயாசியன்ட் உதவியாளர்கள்",
    "subtitle": ["வேதாகமத்தைத் திறக்கவும்.", "ஒரு உதவியாளரை அழைக்கவும்.", "கடவுள் பற்றி உரையாடுங்கள்."],
    "cta": "மேலும் அறிய",
    "price": "$10",
    "duration": "1 மாதம்",
    "access": "15 உதவியாளர்களுக்கு அணுகல்",
    "phoneScreenshot": {
      "alt": "தொலைபேசி திரைப்படம்"
    }
  },
  "mr": {
    "title": "फोन बायबल आधारित एआय सहाय्यक",
    "subtitle": ["बायबल उघडा.", "सहाय्यक बोलवा.", "देवाबद्दल बोला."],
    "cta": "अधिक माहिती",
    "price": "$10",
    "duration": "1 महिना",
    "access": "15 सहाय्यकांची प्रवेश",
    "phoneScreenshot": {
      "alt": "फोन स्क्रीनशॉट"
    }
  },
  "it": {
    "title": "Assistenti IA basati sulla Bibbia per telefono",
    "subtitle": ["Apri la Bibbia.", "Chiama un assistente.", "Parla di Dio."],
    "cta": "Per saperne di più",
    "price": "$10",
    "duration": "1 mese",
    "access": "Accesso a 15 assistenti",
    "phoneScreenshot": {
      "alt": "Screenshot del telefono"
    }
  },
  "th": {
    "title": "ผู้ช่วย AI ที่ใช้พื้นฐานจากพระคัมภีร์สำหรับโทรศัพท์",
    "subtitle": ["เปิดพระคัมภีร์", "โทรหาผู้ช่วย", "พูดคุยเกี่ยวกับพระเจ้า"],
    "cta": "เรียนรู้เพิ่มเติม",
    "price": "$10",
    "duration": "1 เดือน",
    "access": "เข้าถึงผู้ช่วย 15 คน",
    "phoneScreenshot": {
      "alt": "ภาพหน้าจอโทรศัพท์"
    }
  },
  "pl": {
    "title": "Asystenci AI opartych na Biblii dla telefonu",
    "subtitle": ["Otwórz Biblię.", "Zadzwoń po pomocnika.", "Porozmawiaj o Bogu."],
    "cta": "Dowiedz się więcej",
    "price": "$10",
    "duration": "1 miesiąc",
    "access": "Dostęp do 15 asystentów",
    "phoneScreenshot": {
      "alt": "Zrzut ekranu telefonu"
    }
  },
  "ml": {
    "title": "ഫോൺ ബൈബിൾ അടിസ്ഥാനമാക്കിയ എയ് അസിസ്റ്റന്റുകൾ",
    "subtitle": ["ബൈബിൾ തുറക്കുക.", "സഹായകനെ വിളിക്കുക.", "ദൈവത്തെക്കുറിച്ച് സംസാരിക്കുക."],
    "cta": "കൂടുതൽ അറിയുക",
    "price": "$10",
    "duration": "1 മാസം",
    "access": "15 അസിസ്റ്റന്റുകൾ ആക്സസ്",
    "phoneScreenshot": {
      "alt": "ഫോൺ സ്ക്രീൻഷോട്ട്"
    }
  },
  "nl": {
    "title": "Bijbelgebaseerde AI-assistenten voor telefoon",
    "subtitle": ["Open de Bijbel.", "Bel een assistent.", "Spreek over God."],
    "cta": "Meer informatie",
    "price": "$10",
    "duration": "1 maand",
    "access": "Toegang tot 15 assistenten",
    "phoneScreenshot": {
      "alt": "Telefoonschermopname"
    }
  },
  "fil": {
    "title": "Mga Assistant ng AI na Batay sa Bibliya para sa Telepono",
    "subtitle": ["Buksan ang Bibliya.", "Tawagan ang isang tagapaglingkod.", "Magsalita tungkol sa Diyos."],
    "cta": "Matuto nang higit pa",
    "price": "$10",
    "duration": "1 buwan",
    "access": "Access sa 15 mga assistant",
    "phoneScreenshot": {
      "alt": "Screenshot ng telepono"
    }
  },
  "he": {
    "title": "עוזרי AI מבוססי התנ\"ך לטלפון",
    "subtitle": ["פתח את התנ\"ך.", "התקשר לעוזר.", "דבר על אלוהים."],
    "cta": "למד עוד",
    "price": "$10",
    "duration": "חודש 1",
    "access": "גישה ל- 15 עוזרים",
    "phoneScreenshot": {
      "alt": "צילום מסך של טלפון"
    }
  },
  "sv": {
    "title": "Bibelbaserade AI-assistenter för telefon",
    "subtitle": ["Öppna Bibeln.", "Ring en assistent.", "Prata om Gud."],
    "cta": "Lär dig mer",
    "price": "$10",
    "duration": "1 månad",
    "access": "Tillgång till 15 assistenter",
    "phoneScreenshot": {
      "alt": "Telefonskärmskott"
    }
  },
  "da": {
    "title": "Bibelbaserede AI-assistenter til telefon",
    "subtitle": ["Åbn Bibelen.", "Ring en hjælper.", "Tal om Gud."],
    "cta": "Lær mere",
    "price": "$10",
    "duration": "1 måned",
    "access": "Adgang til 15 assistenter",
    "phoneScreenshot": {
      "alt": "Telefonskærmbillede"
    }
  },
  "no": {
    "title": "Bibelbaserte AI-assistenter for telefon",
    "subtitle": ["Åpne Bibelen.", "Ring en assistent.", "Snakk om Gud."],
    "cta": "Lær mer",
    "price": "$10",
    "duration": "1 måned",
    "access": "Tilgang til 15 assistenter",
    "phoneScreenshot": {
      "alt": "Skjermbilde av telefon"
    }
  },
  "lv": {
    "title": "Bibliski pamatoti AI palīgi telefonam",
    "subtitle": ["Atveriet Bībeli.", "Zvaniet palīgam.", "Runā par Dievu."],
    "cta": "Uzziniet vairāk",
    "price": "$10",
    "duration": "1 mēnesis",
    "access": "Pieeja 15 palīgiem",
    "phoneScreenshot": {
      "alt": "Tālruņa ekrānuzņēmums"
    }
  },
} as Language<Section>;

export { content };
