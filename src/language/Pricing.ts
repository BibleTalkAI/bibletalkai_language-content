import type { Language } from "../language";

interface Section {
  supertitle: string;
  title: string;
  description: string;
  plans: [
    {
      title: string;
      description: string;
      price: string;
    },
    {
      title: string;
      description: string;
      price: string;
      mostPopular: string;
    },
    {
      title: string;
      description: string;
      price: string;
    },
  ];
  lifetime: {
    title: string;
    description: string;
    subtitle: string;
    price: string;
    usd: string;
  };
}

const content = {
  en: {
    supertitle: "Pricing",
    title: "Call to Access",
    description: "Secure payment over the phone processed via Stripe.",
    plans: [
      {
        title: "1 month",
        description: "Access our assistants for 1 month.",
        price: "$10",
      },
      {
        title: "3 months",
        description: "Save $5. Access our assistants for 3 months.",
        price: "$25",
        mostPopular: "Most popular",
      },
      {
        title: "1 year",
        description: "Save $45. Subscribe now to access for 1 year.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Lifetime membership",
      description:
        "Support serving God's Word over the telephone and save money over time by purchasing lifetime access today.",
      subtitle: "Purchase today, access forever.",
      price: "$700",
      usd: "USD",
    },
  },
  zh: {
    supertitle: "价格",
    title: "致电访问",
    description: "通过Stripe处理的电话安全付款。",
    plans: [
      {
        title: "1个月",
        description: "访问我们的助手一个月。",
        price: "$10",
      },
      {
        title: "3个月",
        description: "节省5美元。访问我们的助手3个月。",
        price: "$25",
        mostPopular: "最受欢迎",
      },
      {
        title: "1年",
        description: "节省45美元。立即订阅，以便在1年内访问。",
        price: "$75",
      },
    ],
    lifetime: {
      title: "终身会员资格",
      description:
        "支持通过电话传播上帝的话，并通过今天购买终身访问权节省金钱。",
      subtitle: "今天购买，永远访问。",
      price: "$700",
      usd: "美元",
    },
  },
  hi: {
    supertitle: "मूल्य निर्धारण",
    title: "पहुंच के लिए कॉल करें",
    description: "स्ट्राइप के माध्यम से प्रोसेस किए गए फोन पर सुरक्षित भुगतान।",
    plans: [
      {
        title: "1 महीना",
        description: "1 महीने के लिए हमारे सहायकों तक पहुंच।",
        price: "$10",
      },
      {
        title: "3 महीने",
        description: "5 डॉलर बचाएं। 3 महीने के लिए हमारे सहायकों तक पहुंच।",
        price: "$25",
        mostPopular: "सबसे लोकप्रिय",
      },
      {
        title: "1 साल",
        description: "45 डॉलर बचाएं। 1 साल के लिए पहुंच के लिए अभी सदस्यता लें।",
        price: "$75",
      },
    ],
    lifetime: {
      title: "जीवन सदस्यता",
      description:
        "टेलीफोन पर भगवान के वचन की सेवा का समर्थन करें और आज जीवन भर के लिए पहुंच खरीदकर समय के साथ पैसे बचाएं।",
      subtitle: "आज खरीदें, हमेशा के लिए पहुंचें।",
      price: "$700",
      usd: "यूएसडी",
    },
  },
  es: {
    supertitle: "Precios",
    title: "Llame para acceder",
    description: "Pago seguro por teléfono procesado a través de Stripe.",
    plans: [
      {
        title: "1 mes",
        description: "Acceda a nuestros asistentes durante 1 mes.",
        price: "$10",
      },
      {
        title: "3 meses",
        description: "Ahorre $5. Acceda a nuestros asistentes durante 3 meses.",
        price: "$25",
        mostPopular: "Más popular",
      },
      {
        title: "1 año",
        description: "Ahorre $45. Suscríbase ahora para acceder durante 1 año.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Membresía de por vida",
      description:
        "Apoye el servicio de la Palabra de Dios por teléfono y ahorre dinero con el tiempo comprando acceso de por vida hoy.",
      subtitle: "Compre hoy, acceda para siempre.",
      price: "$700",
      usd: "USD",
    },
  },
  ar: {
    supertitle: "التسعير",
    title: "اتصل للوصول",
    description: "الدفع الآمن عبر الهاتف المعالج عبر Stripe.",
    plans: [
      {
        title: "شهر واحد",
        description: "الوصول إلى مساعدينا لمدة شهر واحد.",
        price: "$10",
      },
      {
        title: "3 أشهر",
        description: "وفر 5 دولارات. الوصول إلى مساعدينا لمدة 3 أشهر.",
        price: "$25",
        mostPopular: "الأكثر شعبية",
      },
      {
        title: "سنة واحدة",
        description: "وفر 45 دولارًا. اشترك الآن للوصول لمدة عام واحد.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "عضوية مدى الحياة",
      description:
        "دعم خدمة كلمة الله عبر الهاتف وتوفير المال مع مرور الوقت من خلال شراء الوصول مدى الحياة اليوم.",
      subtitle: "اشترِ اليوم ، واستمر في الوصول إلى الأبد.",
      price: "$700",
      usd: "دولار",
    },
  },
  bn: {
    supertitle: "মূল্য নির্ধারণ",
    title: "অ্যাক্সেসের জন্য কল করুন",
    description: "স্ট্রাইপ এর মাধ্যমে ফোনে নিরাপদ পেমেন্ট।",
    plans: [
      {
        title: "1 মাস",
        description: "আমাদের সহকারীদের 1 মাসের জন্য অ্যাক্সেস করুন।",
        price: "$10",
      },
      {
        title: "3 মাস",
        description: "5 ডলার সংরক্ষণ করুন। আমাদের সহকারীদের 3 মাসের জন্য অ্যাক্সেস করুন।",
        price: "$25",
        mostPopular: "সবচেয়ে জনপ্রিয়",
      },
      {
        title: "1 বছর",
        description: "45 ডলার সংরক্ষণ করুন। 1 বছরের জন্য অ্যাক্সেসের জন্য এখনই সাবস্ক্রাইব করুন।",
        price: "$75",
      },
    ],
    lifetime: {
      title: "লাইফটাইম সদস্যতা",
      description:
        "টেলিফোনে ঈশ্বরের কথা প্রচারের জন্য সমর্থন করুন এবং আজই লাইফটাইম অ্যাক্সেস কিনে সময় অনুযায়ী টাকা বাঁচান।",
      subtitle: "আজই কিনুন, চিরদিন অ্যাক্সেস করুন।",
      price: "$700",
      usd: "মার্কিন ডলার",
    },
  },
  pt: {
    supertitle: "Preços",
    title: "Entre em contato para acessar",
    description: "Pagamento seguro por telefone processado via Stripe.",
    plans: [
      {
        title: "1 mês",
        description: "Acesse nossos assistentes por 1 mês.",
        price: "$10",
      },
      {
        title: "3 meses",
        description: "Economize $5. Acesse nossos assistentes por 3 meses.",
        price: "$25",
        mostPopular: "Mais popular",
      },
      {
        title: "1 ano",
        description: "Economize $45. Assine agora para acessar por 1 ano.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Associação vitalícia",
      description:
        "Apoie o serviço da Palavra de Deus por telefone e economize dinheiro ao longo do tempo comprando acesso vitalício hoje.",
      subtitle: "Compre hoje, acesse para sempre.",
      price: "$700",
      usd: "USD",
    },
  },
  ru: {
    supertitle: "Цены",
    title: "Свяжитесь, чтобы получить доступ",
    description: "Безопасная оплата по телефону через Stripe.",
    plans: [
      {
        title: "1 месяц",
        description: "Получите доступ к нашим помощникам на 1 месяц.",
        price: "$10",
      },
      {
        title: "3 месяца",
        description: "Экономия $5. Получите доступ к нашим помощникам на 3 месяца.",
        price: "$25",
        mostPopular: "Самый популярный",
      },
      {
        title: "1 год",
        description: "Экономия $45. Подпишитесь сейчас, чтобы получить доступ на 1 год.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Пожизненная подписка",
      description:
        "Поддержите служение Слова Божьего по телефону и экономьте деньги, покупая пожизненный доступ уже сегодня.",
      subtitle: "Купите сегодня, получайте доступ навсегда.",
      price: "$700",
      usd: "USD",
    },
  },
  ja: {
    supertitle: "価格",
    title: "アクセスするにはお問い合わせください",
    description: "安全な電話決済（Stripe経由）。",
    plans: [
      {
        title: "1ヶ月",
        description: "1ヶ月間アシスタントにアクセスできます。",
        price: "$10",
      },
      {
        title: "3ヶ月",
        description: "$5を節約。3ヶ月間アシスタントにアクセスできます。",
        price: "$25",
        mostPopular: "最も人気",
      },
      {
        title: "1年",
        description: "$45を節約。1年間アクセスするために今すぐ購読してください。",
        price: "$75",
      },
    ],
    lifetime: {
      title: "ライフタイムメンバーシップ",
      description:
        "電話で神の言葉の伝道をサポートし、今日ライフタイムアクセスを購入して時間とお金を節約してください。",
      subtitle: "今日購入して、永久にアクセスできます。",
      price: "$700",
      usd: "USD",
    },
  },
  ur: {
    supertitle: "قیمتیں",
    title: "دسترسی حاصل کرنے کے لئے رابطہ کریں",
    description: "Stripe کے ذریعہ فون پر محفوظ ادائیگی۔",
    plans: [
      {
        title: "1 ماہ",
        description: "1 ماہ کے لئے ہمارے معاونین تک رسائی حاصل کریں۔",
        price: "$10",
      },
      {
        title: "3 ماہ",
        description: "$5 بچائیں۔ 3 ماہ کے لئے ہمارے معاونین تک رسائی حاصل کریں۔",
        price: "$25",
        mostPopular: "سب سے زیادہ مقبول",
      },
      {
        title: "1 سال",
        description: "$45 بچائیں۔ 1 سال کے لئے رابطہ کریں تاکہ رسائی حاصل کریں۔",
        price: "$75",
      },
    ],
    lifetime: {
      title: "لائف ٹائم ممبرشپ",
      description:
        "فون پر خدا کی بات کی خدمت کی حمایت کریں اور آج ہی لائف ٹائم رسائی حاصل کرتے ہوئے وقت اور پیسے بچائیں۔",
      subtitle: "آج خریدیں، ہمیشہ کے لئے رسائی حاصل کریں۔",
      price: "$700",
      usd: "USD",
    },
  },
  id: {
    supertitle: "Harga",
    title: "Hubungi Kami untuk Akses",
    description: "Pembayaran aman melalui telepon (melalui Stripe).",
    plans: [
      {
        title: "1 Bulan",
        description: "Akses ke asisten selama 1 bulan.",
        price: "$10",
      },
      {
        title: "3 Bulan",
        description: "Menghemat $5. Akses ke asisten selama 3 bulan.",
        price: "$25",
        mostPopular: "Paling Populer",
      },
      {
        title: "1 Tahun",
        description: "Menghemat $45. Berlangganan sekarang untuk akses selama 1 tahun.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Keanggotaan Seumur Hidup",
      description:
        "Dukung pelayanan Firman Tuhan melalui telepon dan hemat waktu dan uang dengan membeli akses seumur hidup hari ini.",
      subtitle: "Beli sekarang, akses selamanya.",
      price: "$700",
      usd: "USD",
    },
  },
  ms: {
    supertitle: "Harga",
    title: "Hubungi Kami untuk Akses",
    description: "Pembayaran selamat melalui telefon (melalui Stripe).",
    plans: [
      {
        title: "1 Bulan",
        description: "Akses ke pembantu selama 1 bulan.",
        price: "$10",
      },
      {
        title: "3 Bulan",
        description: "Jimat $5. Akses ke pembantu selama 3 bulan.",
        price: "$25",
        mostPopular: "Paling Popular",
      },
      {
        title: "1 Tahun",
        description: "Jimat $45. Langgan sekarang untuk akses selama 1 tahun.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Keahlian Seumur Hidup",
      description:
        "Sokong pelayanan Firman Tuhan melalui telefon dan jimat masa dan wang dengan membeli akses seumur hidup hari ini.",
      subtitle: "Beli sekarang, akses selamanya.",
      price: "$700",
      usd: "USD",
    },
  },
  fr: {
    supertitle: "Tarifs",
    title: "Contactez-nous pour accéder",
    description: "Paiement sécurisé par téléphone (via Stripe).",
    plans: [
      {
        title: "1 mois",
        description: "Accédez à l'assistant pendant 1 mois.",
        price: "$10",
      },
      {
        title: "3 mois",
        description: "Économisez $5. Accédez à l'assistant pendant 3 mois.",
        price: "$25",
        mostPopular: "Le plus populaire",
      },
      {
        title: "1 an",
        description: "Économisez $45. Abonnez-vous maintenant pour accéder pendant 1 an.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Adhésion à vie",
      description:
        "Soutenez le service de la Parole de Dieu par téléphone et économisez du temps et de l'argent en achetant un accès à vie dès aujourd'hui.",
      subtitle: "Achetez maintenant, accédez pour toujours.",
      price: "$700",
      usd: "USD",
    },
  },
  de: {
    supertitle: "Preise",
    title: "Kontaktieren Sie uns für den Zugriff",
    description: "Sichere Zahlung per Telefon (über Stripe).",
    plans: [
      {
        title: "1 Monat",
        description: "Zugriff auf den Assistenten für 1 Monat.",
        price: "$10",
      },
      {
        title: "3 Monate",
        description: "Sparen Sie $5. Zugriff auf den Assistenten für 3 Monate.",
        price: "$25",
        mostPopular: "Am beliebtesten",
      },
      {
        title: "1 Jahr",
        description: "Sparen Sie $45. Abonnieren Sie jetzt für 1 Jahr Zugriff.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Lebenslange Mitgliedschaft",
      description:
        "Unterstützen Sie den Dienst des Wortes Gottes per Telefon und sparen Sie Zeit und Geld, indem Sie noch heute einen lebenslangen Zugriff erwerben.",
      subtitle: "Jetzt kaufen, für immer zugreifen.",
      price: "$700",
      usd: "USD",
    },
  },
  jv: {
    supertitle: "Tarif",
    title: "Hubungi Kami untuk Akses",
    description: "Pembayaran aman melalui telepon (via Stripe).",
    plans: [
      {
        title: "1 bulan",
        description: "Akses ke asisten selama 1 bulan.",
        price: "$10",
      },
      {
        title: "3 bulan",
        description: "Hemat $5. Akses ke asisten selama 3 bulan.",
        price: "$25",
        mostPopular: "Paling Populer",
      },
      {
        title: "1 tahun",
        description: "Hemat $45. Berlangganan sekarang untuk akses selama 1 tahun.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Keanggotaan Seumur Hidup",
      description:
        "Dukung pelayanan Firman Tuhan melalui telepon dan hemat waktu dan uang dengan membeli akses seumur hidup hari ini.",
      subtitle: "Beli sekarang, akses selamanya.",
      price: "$700",
      usd: "USD",
    },
  },
  te: {
    supertitle: "ధరలు",
    title: "ప్రవేశానికి మాకు సంప్రదించండి",
    description: "ఫోన్ ద్వారా భుక్తిని నమోదు చేయండి (స్ట్రైప్ ద్వారా).",
    plans: [
      {
        title: "1 నెల",
        description: "1 నెల కోసం అసిస్టెంట్ యాక్సెస్.",
        price: "$10",
      },
      {
        title: "3 నెలలు",
        description: "$5 సేవ్ చేయండి. 3 నెలల కోసం అసిస్టెంట్ యాక్సెస్.",
        price: "$25",
        mostPopular: "అత్యంత ప్రముఖం",
      },
      {
        title: "1 సంవత్సరం",
        description: "$45 సేవ్ చేయండి. 1 సంవత్సరం యాక్సెస్ కోసం ఇప్పుడు చేరండి.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "జీవిత సభ్యత్వం",
      description:
        "ఫోన్ ద్వారా దేవుని పదములను మద్దతు చేయండి మరియు ఈరోజు నుండి జీవితంలో యాక్సెస్ కోసం ఒక జీవిత సభ్యత్వం కొనండి.",
      subtitle: "ఇప్పుడు కొనుకోండి, ఎప్పుడైనా యాక్సెస్ చేయండి.",
      price: "$700",
      usd: "USD",
    },
  },
  vi: {
    supertitle: "Bảng giá",
    title: "Liên hệ để truy cập",
    description: "Thanh toán an toàn qua điện thoại (qua Stripe).",
    plans: [
      {
        title: "1 tháng",
        description: "Truy cập trợ lý trong 1 tháng.",
        price: "$10",
      },
      {
        title: "3 tháng",
        description: "Tiết kiệm $5. Truy cập trợ lý trong 3 tháng.",
        price: "$25",
        mostPopular: "Phổ biến nhất",
      },
      {
        title: "1 năm",
        description: "Tiết kiệm $45. Đăng ký ngay để truy cập trong 1 năm.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Thành viên trọn đời",
      description:
        "Hỗ trợ dịch vụ Lời Chúa qua điện thoại và tiết kiệm thời gian và tiền bạc bằng cách mua truy cập trọn đời ngay hôm nay.",
      subtitle: "Mua ngay, truy cập mãi mãi.",
      price: "$700",
      usd: "USD",
    },
  },
  tr: {
    supertitle: "Fiyatlar",
    title: "Erişim için İletişime Geçin",
    description: "Telefonla güvenli ödeme yapın (Stripe üzerinden).",
    plans: [
      {
        title: "1 Ay",
        description: "1 ay boyunca asistan erişimi.",
        price: "$10",
      },
      {
        title: "3 Ay",
        description: "$5 tasarruf edin. 3 ay boyunca asistan erişimi.",
        price: "$25",
        mostPopular: "En Popüler",
      },
      {
        title: "1 Yıl",
        description: "$45 tasarruf edin. 1 yıl boyunca erişim için hemen abone olun.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Ömür Boyu Üyelik",
      description:
        "Tanrı'nın sözünü telefonla destekleyin ve bugünden itibaren ömür boyu erişim satın alarak zaman ve para tasarrufu yapın.",
      subtitle: "Hemen satın alın, her zaman erişim sağlayın.",
      price: "$700",
      usd: "USD",
    },
  },
  ko: {
    supertitle: "가격",
    title: "접속을 위해 문의하세요",
    description: "전화로 안전하게 결제하세요 (Stripe를 통해).",
    plans: [
      {
        title: "1개월",
        description: "1개월 동안 어시스턴트에 접속하세요.",
        price: "$10",
      },
      {
        title: "3개월",
        description: "$5를 절약하세요. 3개월 동안 어시스턴트에 접속하세요.",
        price: "$25",
        mostPopular: "가장 인기 있는",
      },
      {
        title: "1년",
        description: "$45를 절약하세요. 1년 동안 접속을 위해 지금 가입하세요.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "평생 회원",
      description:
        "전화로 하나님의 말씀을 지원하고 오늘부터 평생 접속을 구매하여 시간과 돈을 절약하세요.",
      subtitle: "지금 구매하고 평생 접속하세요.",
      price: "$700",
      usd: "USD",
    },
  },
  ta: {
    supertitle: "விலைகள்",
    title: "அணுகலுக்கான தொடர்பு கொள்ளவும்",
    description: "பொதுவாக மொழிபெயர்ப்பு மூலம் பணம் செலுத்தப்படும் (Stripe மூலம்).",
    plans: [
      {
        title: "1 மாதம்",
        description: "ஒரு மாதத்திற்கு முன்பு உதவி அணுகல்.",
        price: "$10",
      },
      {
        title: "3 மாதங்கள்",
        description: "$5 சேமிக்கவும். 3 மாதங்களுக்கு முன்பு அணுகல்.",
        price: "$25",
        mostPopular: "மிகவும் பிரபலமான",
      },
      {
        title: "1 வருடம்",
        description: "$45 சேமிக்கவும். அணுகல் முகவரியை இப்போதுதான் வாங்குங்கள்.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "உயர்ந்த உறவு",
      description:
        "தேவனின் வார்த்தையை தொலைபேசி மூலம் ஆதரிக்கவும் இன்றும் வாழ்க்கையை சேமிக்கவும் உதவும் உரிமையை இப்போதுதான் வாங்கி பயன்படுத்துங்கள்.",
      subtitle: "இப்போது வாங்கி எப்போதும் அணுகல் பெறுங்கள்.",
      price: "$700",
      usd: "USD",
    },
  },
  mr: {
    supertitle: "किंमत",
    title: "प्रवेशासाठी संपर्क साधा",
    description: "फोनद्वारे सुरक्षित देयक (स्ट्राइप द्वारे)।",
    plans: [
      {
        title: "1 महिना",
        description: "1 महिन्यासाठी आमच्या सहाय्यकांची प्रवेश.",
        price: "$10",
      },
      {
        title: "3 महिने",
        description: "$5 बचत करा. 3 महिन्यासाठी आमच्या सहाय्यकांची प्रवेश.",
        price: "$25",
        mostPopular: "सर्वाधिक लोकप्रिय",
      },
      {
        title: "1 वर्ष",
        description: "$45 बचत करा. 1 वर्षासाठी आता सदस्यता घ्या.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "आयुष्य सदस्यता",
      description:
        "देवाचे वचन फोनद्वारे सेवा समर्थन करा आणि आज आयुष्य प्रवेश घेण्यासाठी वेळ आणि पैसे बचत करा.",
      subtitle: "आता विकत घ्या, नेहमीसाठी प्रवेश घ्या.",
      price: "$700",
      usd: "USD",
    },
  },
  it: {
    supertitle: "Prezzi",
    title: "Contattaci per accedere",
    description: "Pagamento sicuro tramite telefono (tramite Stripe).",
    plans: [
      {
        title: "1 mese",
        description: "Accedi al nostro assistente per 1 mese.",
        price: "$10",
      },
      {
        title: "3 mesi",
        description: "Risparmia $5. Accedi al nostro assistente per 3 mesi.",
        price: "$25",
        mostPopular: "Più popolare",
      },
      {
        title: "1 anno",
        description: "Risparmia $45. Iscriviti ora per accedere per 1 anno.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Abbonamento a vita",
      description:
        "Supporta il servizio della Parola di Dio per telefono e risparmia tempo e denaro acquistando l'accesso a vita oggi.",
      subtitle: "Acquista oggi, accedi per sempre.",
      price: "$700",
      usd: "USD",
    },
  },
  th: {
    supertitle: "ราคา",
    title: "ติดต่อเพื่อเข้าถึง",
    description: "ชำระเงินผ่านโทรศัพท์อย่างปลอดภัย (ผ่าน Stripe) ค่ะ",
    plans: [
      {
        title: "1 เดือน",
        description: "เข้าถึงผู้ช่วยของเราเป็นเวลา 1 เดือน",
        price: "$10",
      },
      {
        title: "3 เดือน",
        description: "ประหยัด $5 เข้าถึงผู้ช่วยของเราเป็นเวลา 3 เดือน",
        price: "$25",
        mostPopular: "ยอดนิยม",
      },
      {
        title: "1 ปี",
        description: "ประหยัด $45 สมัครสมาชิกเพื่อเข้าถึงเป็นเวลา 1 ปี",
        price: "$75",
      },
    ],
    lifetime: {
      title: "การเป็นสมาชิกตลอดชีพ",
      description:
        "สนับสนุนการให้บริการของพระเยซูผ่านโทรศัพท์และประหยัดเวลาและเงินด้วยการซื้อการเข้าถึงตลอดชีพวันนี้",
      subtitle: "ซื้อวันนี้เข้าถึงตลอดชีพ",
      price: "$700",
      usd: "USD",
    },
  },
  pl: {
    supertitle: "Ceny",
    title: "Skontaktuj się, aby uzyskać dostęp",
    description: "Bezpieczna płatność telefoniczna (za pośrednictwem Stripe).",
    plans: [
      {
        title: "1 miesiąc",
        description: "Dostęp do naszych asystentów na 1 miesiąc.",
        price: "$10",
      },
      {
        title: "3 miesiące",
        description: "Oszczędzaj $5. Dostęp do naszych asystentów na 3 miesiące.",
        price: "$25",
        mostPopular: "Najbardziej popularne",
      },
      {
        title: "1 rok",
        description: "Oszczędzaj $45. Zapisz się teraz, aby uzyskać dostęp na 1 rok.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Członkostwo na całe życie",
      description:
        "Wesprzyj służbę Słowa Bożego przez telefon i oszczędzaj czas i pieniądze, kupując dostęp na całe życie już dziś.",
      subtitle: "Kup teraz, uzyskaj dostęp na zawsze.",
      price: "$700",
      usd: "USD",
    },
  },
  ml: {
    supertitle: "വില",
    title: "ആക്സസ് നേടാൻ ബന്ധപ്പെടുക",
    description: "ഫോൺ വഴി സുരക്ഷിതമായി പണം അടയ്ക്കുക (സ്ട്രൈപ്പ് വഴി).",
    plans: [
      {
        title: "1 മാസം",
        description: "1 മാസത്തെ സഹായക്കാരനെ ആക്സസ് ചെയ്യുക.",
        price: "$10",
      },
      {
        title: "3 മാസം",
        description: "$5 സംരക്ഷിക്കുക. 3 മാസത്തെ സഹായക്കാരനെ ആക്സസ് ചെയ്യുക.",
        price: "$25",
        mostPopular: "പ്രധാനമായി പ്രചാരണം ചെയ്യുന്നു",
      },
      {
        title: "1 വർഷം",
        description: "$45 സംരക്ഷിക്കുക. 1 വർഷം ആക്സസ് ചെയ്യുന്നതിന് ഇപ്പോൾ അംഗത്വം ചെയ്യുക.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "ജീവിത അംഗത്വം",
      description:
        "ഫോൺ വഴി ദൈവത്തിന്റെ വാക്കിനെ പിന്തുണയ്ക്കുക എന്നതിനും ഇന്ന് ജീവിതത്തിൽ ആക്സസ് വാങ്ങി സമയവും പണവും സംരക്ഷിക്കുക.",
      subtitle: "ഇപ്പോൾ വാങ്ങുക, എന്നാൽ എപ്പോൾക്കും ആക്സസ് നേടുക.",
      price: "$700",
      usd: "USD",
    },
  },
  nl: {
    supertitle: "Prijzen",
    title: "Neem contact op om toegang te krijgen",
    description: "Veilige betaling via telefoon (via Stripe).",
    plans: [
      {
        title: "1 maand",
        description: "Toegang tot onze assistent voor 1 maand.",
        price: "$10",
      },
      {
        title: "3 maanden",
        description: "Bespaar $5. Toegang tot onze assistent voor 3 maanden.",
        price: "$25",
        mostPopular: "Meest populair",
      },
      {
        title: "1 jaar",
        description: "Bespaar $45. Abonneer je nu om toegang te krijgen voor 1 jaar.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Levenslang lidmaatschap",
      description:
        "Ondersteun de dienst van het Woord van God via de telefoon en bespaar tijd en geld door vandaag nog een levenslange toegang te kopen.",
      subtitle: "Koop nu, krijg voor altijd toegang.",
      price: "$700",
      usd: "USD",
    },
  },
  fil: {
    supertitle: "Mga Presyo",
    title: "Makipag-ugnay upang ma-access",
    description: "Ligtas na pagbabayad sa telepono (sa pamamagitan ng Stripe).",
    plans: [
      {
        title: "1 buwan",
        description: "Access sa aming assistant para sa 1 buwan.",
        price: "$10",
      },
      {
        title: "3 buwan",
        description: "I-save ang $5. Access sa aming assistant para sa 3 buwan.",
        price: "$25",
        mostPopular: "Pinakasikat",
      },
      {
        title: "1 taon",
        description: "I-save ang $45. Mag-subscribe ngayon upang ma-access para sa 1 taon.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Lifetime Membership",
      description:
        "Suportahan ang serbisyo ng Salita ng Diyos sa telepono at makatipid ng oras at pera sa pamamagitan ng pagbili ng access sa buhay ngayon.",
      subtitle: "Bumili ngayon, mag-access habang buhay.",
      price: "$700",
      usd: "USD",
    },
  },
  he: {
    supertitle: "מחירים",
    title: "צור קשר לקבלת גישה",
    description: "תשלום מאובטח באמצעות טלפון (דרך Stripe).",
    plans: [
      {
        title: "חודש 1",
        description: "גישה לעוזר שלנו למשך חודש 1.",
        price: "$10",
      },
      {
        title: "3 חודשים",
        description: "חסוך $5. גישה לעוזר שלנו למשך 3 חודשים.",
        price: "$25",
        mostPopular: "הכי פופולרי",
      },
      {
        title: "שנה 1",
        description: "חסוך $45. הירשם עכשיו כדי לקבל גישה למשך שנה 1.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "חברות לכל החיים",
      description:
        "תמכו בשירות הדבר של אלוהים באמצעות טלפון וחסכו זמן וכסף על ידי רכישת גישה לכל החיים היום.",
      subtitle: "קנה עכשיו, גש לנצח.",
      price: "$700",
      usd: "USD",
    },
  },
  sv: {
    supertitle: "Priser",
    title: "Kontakta oss för att få tillgång",
    description: "Säker betalning via telefon (via Stripe).",
    plans: [
      {
        title: "1 månad",
        description: "Tillgång till vår assistent i 1 månad.",
        price: "$10",
      },
      {
        title: "3 månader",
        description: "Spara $5. Tillgång till vår assistent i 3 månader.",
        price: "$25",
        mostPopular: "Mest populära",
      },
      {
        title: "1 år",
        description: "Spara $45. Prenumerera nu för att få tillgång i 1 år.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Livstidsmedlemskap",
      description:
        "Stöd Guds ordstjänst via telefon och spara tid och pengar genom att köpa livstidsåtkomst idag.",
      subtitle: "Köp nu, få tillgång för alltid.",
      price: "$700",
      usd: "USD",
    },
  },
  da: {
    supertitle: "Priser",
    title: "Kontakt os for at få adgang",
    description: "Sikker betaling via telefon (via Stripe).",
    plans: [
      {
        title: "1 måned",
        description: "Adgang til vores assistent i 1 måned.",
        price: "$10",
      },
      {
        title: "3 måneder",
        description: "Spar $5. Adgang til vores assistent i 3 måneder.",
        price: "$25",
        mostPopular: "Mest populære",
      },
      {
        title: "1 år",
        description: "Spar $45. Abonner nu for at få adgang i 1 år.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Livstidsmedlemskab",
      description:
        "Støt Guds ordstjeneste via telefon og spar tid og penge ved at købe livstidsadgang i dag.",
      subtitle: "Køb nu, få adgang for evigt.",
      price: "$700",
      usd: "USD",
    },
  },
  no: {
    supertitle: "Priser",
    title: "Kontakt oss for å få tilgang",
    description: "Sikker betaling via telefon (via Stripe).",
    plans: [
      {
        title: "1 måned",
        description: "Tilgang til vår assistent i 1 måned.",
        price: "$10",
      },
      {
        title: "3 måneder",
        description: "Spar $5. Tilgang til vår assistent i 3 måneder.",
        price: "$25",
        mostPopular: "Mest populære",
      },
      {
        title: "1 år",
        description: "Spar $45. Abonner nå for å få tilgang i 1 år.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Livstidsmedlemskap",
      description:
        "Støtt Guds ordstjeneste via telefon og spar tid og penger ved å kjøpe livstidsadgang i dag.",
      subtitle: "Kjøp nå, få tilgang for alltid.",
      price: "$700",
      usd: "USD",
    },
  },
  lv: {
    supertitle: "Cenas",
    title: "Sazinieties, lai piekļūtu",
    description: "Droša maksājuma veikšana pa tālruni (caur Stripe).",
    plans: [
      {
        title: "1 mēnesis",
        description: "Piekļuve mūsu palīgam 1 mēnesi.",
        price: "$10",
      },
      {
        title: "3 mēneši",
        description: "Ietaupiet $5. Piekļuve mūsu palīgam 3 mēnešus.",
        price: "$25",
        mostPopular: "Vispopulārākais",
      },
      {
        title: "1 gads",
        description: "Ietaupiet $45. Abonējiet tagad, lai piekļūtu 1 gadu.",
        price: "$75",
      },
    ],
    lifetime: {
      title: "Mūža biedrība",
      description:
        "Atbalstiet Dieva vārda pakalpojumu pa tālruni un ietaupiet laiku un naudu, iegādājoties mūža piekļuvi jau šodien.",
      subtitle: "Iegādājieties tagad, iegūstiet mūža piekļuvi.",
      price: "$700",
      usd: "USD",
    },
  },
} as Language<Section>;

export { content };
