import type { Language } from "../language";

interface Section {
  supertitle: string;
  title: string;
  description: string;
  sections: [
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
    {
      title: string;
      description: string;
    },
  ]
}

const content = {
  en: {
    supertitle: "Call from your phone to activate.",
    title: "Phone any assistant anytime.",
    description: "Access for 1 month at $10 or 3 months at $25.",
    sections: [
      {
        title: "Telephone Conversation",
        description: "Dial in to Divine Wisdom – Our AI assistants offer a unique way to immerse yourself in God’s Word. Each call is an opportunity to focus your heart and mind on the scriptures, turning your telephone into a portal for clarity and biblical insight. Get dialed into a deeper understanding and a more intimate connection with your faith, one conversation at a time."
      },
      {
        title: "Multiple Assistants",
        description: "Access our suite of AI assistants, each uniquely attuned to help with aspects of your faith journey. Drawing wisdom from biblical teachings, these assistants offer guidance, support, and companionship."
      },
      {
        title: "Multiple Languages",
        description: "Break the language barrier with our multilingual AI assistants. Communicate effortlessly in a variety of languages, ensuring that you are understood and that you understand, no matter where you are in the world."
      },
    ]
  },
  zh: {
    supertitle: "从您的电话打电话激活。",
    title: "随时随地拨打任何助手。",
    description: "1个月10美元或3个月25美元的访问权限。",
    sections: [
      {
        title: "电话交谈",
        description: "拨通神圣的智慧-我们的AI助手提供了一种独特的方式，让您沉浸在上帝的话语中。每通电话都是一个机会，让您将心思和心思集中在经文上，将您的电话变成一个清晰度和圣经洞察力的门户。一次一次地与信仰建立更深刻的理解和更亲密的联系。"
      },
      {
        title: "多个助手",
        description: "访问我们的一套AI助手，每个助手都独特地帮助您完成信仰之旅的各个方面。从圣经教义中汲取智慧，这些助手提供指导，支持和陪伴。"
      },
      {
        title: "多种语言",
        description: "通过我们的多语种AI助手打破语言障碍。在各种语言中轻松交流，确保您被理解并且您理解，无论您身在何处。"
      },
    ]
  },
  hi: {
    supertitle: "अपने फोन से एक्टिवेट करने के लिए फोन करें।",
    title: "किसी भी सहायक को कभी भी फोन करें।",
    description: "10 डॉलर पर 1 महीने या 25 डॉलर पर 3 महीने के लिए एक्सेस।",
    sections: [
      {
        title: "फोन बातचीत",
        description: "डायल इन टू डिवाइन विज़डम - हमारे एआई सहायक ईश्वर के वचन में खुद को डुबाने का एक अद्वितीय तरीका प्रदान करते हैं। प्रत्येक कॉल एक अवसर है अपने हृदय और मन को शास्त्रों पर केंद्रित करने के लिए, अपने टेलीफोन को स्पष्टता और बाइबली दर्शन के लिए एक पोर्टल में बदलने के लिए। एक बार में एक बातचीत के साथ अपने विश्वास के साथ एक गहरी समझ और एक अधिक आत्मीय जुड़ाव प्राप्त करें।",
      },
      {
        title: "एकाधिक सहायक",
        description: "हमारे एआई सहायकों की सुइट तक पहुंचें, जो आपके धर्म यात्रा के पहलुओं में मदद करने के लिए अनूठे रूप से संवेदनशील हैं। बाइबली शिक्षा से ज्ञान लेते हुए, ये सहायक मार्गदर्शन, समर्थन और साथीपन प्रदान करते हैं।",
      },
      {
        title: "एकाधिक भाषाएं",
        description: "हमारे बहुभाषी एआई सहायकों के साथ भाषा की बाधा को तोड़ें। विभिन्न भाषाओं में आसानी से संवाद करें, यह सुनिश्चित करने के लिए कि आप समझे जाते हैं और आप समझते हैं, चाहे आप दुनिया के किसी भी कोने में हों।",
      },
    ]
  },
  es: {
    supertitle: "Llama desde tu teléfono para activar.",
    title: "Llama a cualquier asistente en cualquier momento.",
    description: "Acceso por 1 mes a $10 o 3 meses a $25.",
    sections: [
      {
        title: "Conversación telefónica",
        description: "Marque la sabiduría divina: nuestros asistentes de IA ofrecen una forma única de sumergirse en la Palabra de Dios. Cada llamada es una oportunidad para enfocar su corazón y su mente en las Escrituras, convirtiendo su teléfono en un portal para la claridad y la comprensión bíblica. Conéctese a una comprensión más profunda y una conexión más íntima con su fe, una conversación a la vez."
      },
      {
        title: "Múltiples asistentes",
        description: "Acceda a nuestra suite de asistentes de IA, cada uno de ellos sintonizado de manera única para ayudarlo con los aspectos de su viaje de fe. Extrayendo sabiduría de las enseñanzas bíblicas, estos asistentes ofrecen orientación, apoyo y compañía."
      },
      {
        title: "Múltiples idiomas",
        description: "Rompa la barrera del idioma con nuestros asistentes de IA multilingües. Comuníquese sin esfuerzo en una variedad de idiomas, asegurándose de que lo entiendan y de que usted entienda, sin importar dónde se encuentre en el mundo."
      },
    ]
  },
  ar: {
    supertitle: "اتصل من هاتفك للتنشيط.",
    title: "اتصل بأي مساعد في أي وقت.",
    description: "الوصول لمدة شهر واحد بقيمة 10 دولارات أو 3 أشهر بقيمة 25 دولارًا.",
    sections: [
      {
        title: "مكالمة هاتفية",
        description: "اطلب الحكمة الإلهية - يقدم مساعدونا الذكاء الاصطناعي وسيلة فريدة للانغماس في كلمة الله. كل مكالمة فرصة لتركيز قلبك وعقلك على الكتاب المقدس ، مما يحول هاتفك إلى بوابة للوضوح والتبصر الكتابي. اتصل بفهم أعمق واتصال أكثر حميمية مع إيمانك ، مكالمة واحدة في كل مرة."
      },
      {
        title: "مساعدات متعددة",
        description: "الوصول إلى مجموعة مساعدينا الذكاء الاصطناعي ، والذين يتوافق كل منهم بشكل فريد للمساعدة في جوانب رحلتك الإيمانية. من خلال استخلاص الحكمة من التعاليم الكتابية ، تقدم هذه المساعدات الإرشاد والدعم والرفقة."
      },
      {
        title: "لغات متعددة",
        description: "كسر حاجز اللغة مع مساعدينا الذكاء الاصطناعي متعدد اللغات. التواصل بسهولة في مجموعة متنوعة من اللغات ، مما يضمن أن يتم فهمك وأن تفهم ، أينما كنت في العالم."
      },
    ]
  },
  bn: {
    supertitle: "আপনার ফোন থেকে অ্যাক্টিভেট করতে ফোন করুন।",
    title: "যে কোনও সহায়ক যে কোনও সময় ফোন করুন।",
    description: "একটি মাসের জন্য 10 ডলার বা 3 মাসের জন্য 25 ডলারের অ্যাক্সেস।",
    sections: [
      {
        title: "টেলিফোন কথোপকথন",
        description: "দিব্য জ্ঞানে ডায়াল ইন - আমাদের এআই সহায়কগুলি আলোচনার একটি অনন্য উপায় প্রদান করে ঈশ্বরের শব্দে নিমগ্ন হতে। প্রতিটি কল একটি সুযোগ হয় শাস্ত্রের উপর আপনার হৃদয় এবং মনের কেন্দ্র করার জন্য, আপনার টেলিফোনকে স্পষ্টতা এবং বাইবেলিক বোধগম্যতার জন্য একটি পোর্টালে পরিণত করার সুযোগ পান। একটি কথোপকথনে আপনার বিশ্বাসের একটি গভীরতর বোধগম্যতা এবং আরও আন্তরিক সংযোগ পেতে ডায়াল ইন করুন।"
      },
      {
        title: "একাধিক সহায়ক",
        description: "আপনার বিশ্বাস পথের বিভিন্ন দিকগুলির সাথে সমন্বিত ভাবে সহায়তা করার জন্য আমাদের এআই সহায়কগুলির সুইটে অ্যাক্সেস করুন। বাইবেলিক শিক্ষাগুলি থেকে জ্ঞান আঁকতে, এই সহায়কগুলি পরামর্শ, সমর্থন এবং সঙ্গীপনা প্রদান করে।"
      },
      {
        title: "একাধিক ভাষা",
        description: "আমাদের বহুভাষী এআই সহায়কগুলির সাথে ভাষার বাধা ভেঙ্গে ফেলুন। বিভিন্ন ভাষায় সহজে যোগাযোগ করুন, নির্দিষ্ট করে যে আপনি বোঝেন এবং আপনি বোঝান, আপনি যেখানে থাকেন তা কোনও অবস্থায় না করে নিশ্চিত করুন।"
      },
    ]
  },
  pt: {
    supertitle: "Ligue do seu telefone para ativar.",
    title: "Telefone para qualquer assistente a qualquer momento.",
    description: "Acesso por 1 mês a $ 10 ou 3 meses a $ 25.",
    sections: [
      {
        title: "Conversa telefônica",
        description: "Disque para a Sabedoria Divina - Nossos assistentes de IA oferecem uma maneira única de se envolver na Palavra de Deus. Cada chamada é uma oportunidade de focar seu coração e mente nas escrituras, transformando seu telefone em um portal para clareza e discernimento bíblico. Conecte-se a uma compreensão mais profunda e uma conexão mais íntima com sua fé, uma conversa de cada vez."
      },
      {
        title: "Assistentes múltiplos",
        description: "Acesse nossa suíte de assistentes de IA, cada um sintonizado de forma única para ajudar com aspectos de sua jornada de fé. Tirando sabedoria dos ensinamentos bíblicos, esses assistentes oferecem orientação, suporte e companheirismo."
      },
      {
        title: "Várias línguas",
        description: "Quebre a barreira do idioma com nossos assistentes de IA multilíngues. Comunique-se sem esforço em uma variedade de idiomas, garantindo que você seja entendido e que entenda, não importa onde esteja no mundo."
      },
    ]
  },
  ru: {
    supertitle: "Позвоните с телефона, чтобы активировать.",
    title: "Телефон любому помощнику в любое время.",
    description: "Доступ на 1 месяц за 10 долларов или 3 месяца за 25 долларов.",
    sections: [
      {
        title: "Телефонный разговор",
        description: "Наберите божественную мудрость - наши ассистенты ИИ предлагают уникальный способ погрузиться в Слово Божие. Каждый звонок - это возможность сосредоточить свое сердце и разум на Писании, превращая ваш телефон в портал для ясности и библейского понимания. Подключитесь к более глубокому пониманию и более тесной связи с вашей верой, один разговор за раз."
      },
      {
        title: "Несколько помощников",
        description: "Получите доступ к нашему набору помощников ИИ, каждый из которых уникально настроен на помощь в аспектах вашего пути веры. Извлекая мудрость из библейских учений, эти помощники предлагают руководство, поддержку и компаньонство."
      },
      {
        title: "Несколько языков",
        description: "Преодолейте языковой барьер с нашими многоязычными помощниками ИИ. Общайтесь без усилий на разных языках, убедившись, что вас понимают и что вы понимаете, независимо от того, где вы находитесь в мире."
      },
    ]
  },
  ja: {
    supertitle: "電話からアクティベートするには電話してください。",
    title: "いつでもどこでもアシスタントに電話してください。",
    description: "1か月10ドルまたは3か月25ドルでアクセスできます。",
    sections: [
      {
        title: "電話会話",
        description: "神の知恵をダイヤルイン-私たちのAIアシスタントは、神の言葉に没頭するユニークな方法を提供します。各通話は、あなたの心と心を聖書に集中させ、あなたの電話を明確さと聖書的な洞察力のためのポータルに変える機会です。一度に一度、より深い理解とより親密なつながりを信仰にダイヤルインしてください。"
      },
      {
        title: "複数のアシスタント",
        description: "信仰の旅のさまざまな側面をサポートするためにユニークに調整された各AIアシスタントにアクセスしてください。聖書の教えから知恵を引き出し、これらのアシスタントはガイダンス、サポート、およびコンパニオンシップを提供します。"
      },
      {
        title: "複数の言語",
        description: "マルチリンガルAIアシスタントで言語の壁を破ります。さまざまな言語で簡単にコミュニケーションを取り、世界のどこにいても理解され、理解されることを確認します。"
      },
    ]
  },
  ur: {
    supertitle: "اپنے فون سے فون کر کے فعال کریں۔",
    title: "کسی بھی اسسٹنٹ کو کسی بھی وقت فون کریں۔",
    description: "10 ڈالر کے لئے 1 ماہ یا 25 ڈالر کے لئے 3 ماہ کا رسائی۔",
    sections: [
      {
        title: "فون کال",
        description: "الہامی حکمت ڈائل کریں - ہمارے اے آئی ایسسٹنٹس اللہ کی کلمہ میں غوطہ لینے کا ایک انوکھا طریقہ پیش کرتے ہیں۔ ہر کال ایک موقع ہے کہ آپ اپنے دل اور ذہن کو مقدس کتابوں پر توجہ دیں ، اپنے فون کو واضحیت اور بائبلی فہم کے لئے ایک پورٹل میں تبدیل کریں۔ ایک بار میں اپنے ایمان کے ساتھ ایک گہری سمجھ اور ایک زیادہ دلچسپی والا رابطہ حاصل کریں۔"
      },
      {
        title: "متعدد اسسٹنٹس",
        description: "ہمارے اے آئی ایسسٹنٹس کی سوئٹ تک رسائی حاصل کریں ، جو آپ کے ایمانی سفر کے اہم پہلوؤں میں مدد کرنے کے لئے یونیکلی ترتیب دیتے ہیں۔ بائبلی تعلیمات سے حکمت حاصل کرتے ہوئے ، یہ اسسٹنٹس ہدایت ، حمایت اور ساتھی پن فراہم کرتے ہیں۔"
      },
      {
        title: "متعدد زبانیں",
        description: "ہمارے ملٹی لنگویج اے آئی ایسسٹنٹس کے ساتھ زبانی باریئر کو توڑیں۔ مختلف زبانوں میں آسانی سے ارتباط کریں ، یقینی بنائیں کہ آپ کو سمجھا جاتا ہے اور آپ سمجھتے ہیں ، جہاں بھی آپ دنیا میں ہوں۔"
      },
    ]
  },
  id: {
    supertitle: "Telepon dari ponsel Anda untuk mengaktifkan.",
    title: "Telepon asisten kapan saja.",
    description: "Akses selama 1 bulan dengan harga $ 10 atau 3 bulan dengan harga $ 25.",
    sections: [
      {
        title: "Percakapan Telepon",
        description: "Dial in to Divine Wisdom - Asisten AI kami menawarkan cara unik untuk terlibat dalam Firman Tuhan. Setiap panggilan adalah kesempatan untuk memusatkan hati dan pikiran Anda pada kitab suci, mengubah telepon Anda menjadi portal untuk kejelasan dan wawasan Alkitab. Terhubung ke pemahaman yang lebih dalam dan koneksi yang lebih intim dengan iman Anda, satu percakapan pada satu waktu."
      },
      {
        title: "Asisten Ganda",
        description: "Akses suite asisten AI kami, masing-masing disesuaikan secara unik untuk membantu dengan aspek perjalanan iman Anda. Menggambar kebijaksanaan dari ajaran-ajaran Alkitab, asisten ini menawarkan bimbingan, dukungan, dan persahabatan."
      },
      {
        title: "Beberapa Bahasa",
        description: "Hancurkan hambatan bahasa dengan asisten AI multibahasa kami. Berkomunikasi dengan mudah dalam berbagai bahasa, memastikan bahwa Anda dipahami dan memahami, di mana pun Anda berada di dunia."
      },
    ]
  },
  ms: {
    supertitle: "Telefon dari telefon anda untuk mengaktifkan.",
    title: "Telefon mana-mana pembantu pada bila-bila masa.",
    description: "Akses selama 1 bulan pada $ 10 atau 3 bulan pada $ 25.",
    sections: [
      {
        title: "Perbualan Telefon",
        description: "Dial in to Divine Wisdom - Pembantu AI kami menawarkan cara yang unik untuk terlibat dalam Firman Tuhan. Setiap panggilan adalah peluang untuk memberi tumpuan kepada hati dan minda anda pada kitab suci, mengubah telefon anda menjadi portal untuk kejelasan dan wawasan Alkitab. Dail ke pemahaman yang lebih mendalam dan sambungan yang lebih intim dengan iman anda, satu perbualan pada satu masa."
      },
      {
        title: "Pembantu Pelbagai",
        description: "Akses suite pembantu AI kami, masing-masing disesuaikan secara unik untuk membantu dengan aspek perjalanan iman anda. Menggambar kebijaksanaan dari ajaran-ajaran Alkitab, pembantu ini menawarkan bimbingan, sokongan, dan persahabatan."
      },
      {
        title: "Pelbagai Bahasa",
        description: "Hancurkan halangan bahasa dengan pembantu AI pelbagai bahasa kami. Berkomunikasi dengan mudah dalam pelbagai bahasa, memastikan bahawa anda difahami dan memahami, di mana sahaja anda berada di dunia."
      },
    ]
  },
  fr: {
    supertitle: "Appelez depuis votre téléphone pour activer.",
    title: "Appelez n'importe quel assistant à tout moment.",
    description: "Accès pour 1 mois à 10 $ ou 3 mois à 25 $.",
    sections: [
      {
        title: "Conversation téléphonique",
        description: "Composez le numéro de la sagesse divine - Nos assistants d'IA offrent un moyen unique de vous immerger dans la Parole de Dieu. Chaque appel est une opportunité de concentrer votre cœur et votre esprit sur les Écritures, transformant votre téléphone en un portail de clarté et d'inspiration biblique. Connectez-vous à une compréhension plus profonde et à une connexion plus intime avec votre foi, une conversation à la fois."
      },
      {
        title: "Plusieurs assistants",
        description: "Accédez à notre suite d'assistants d'IA, chacun étant spécialement conçu pour vous aider dans les aspects de votre parcours de foi. Tirant la sagesse des enseignements bibliques, ces assistants offrent conseils, soutien et compagnie."
      },
      {
        title: "Plusieurs langues",
        description: "Brisez la barrière de la langue avec nos assistants d'IA multilingues. Communiquez sans effort dans une variété de langues, vous assurant d'être compris et de comprendre, peu importe où vous vous trouvez dans le monde."
      },
    ]
  },
  de: {
    supertitle: "Rufen Sie von Ihrem Telefon aus an, um zu aktivieren.",
    title: "Rufen Sie jederzeit einen Assistenten an.",
    description: "Zugriff für 1 Monat zu 10 USD oder 3 Monate zu 25 USD.",
    sections: [
      {
        title: "Telefongespräch",
        description: "Wählen Sie die göttliche Weisheit - Unsere KI-Assistenten bieten eine einzigartige Möglichkeit, sich in Gottes Wort zu vertiefen. Jeder Anruf ist eine Gelegenheit, Ihr Herz und Ihren Verstand auf die Schrift zu konzentrieren und Ihr Telefon in ein Portal für Klarheit und biblische Erkenntnis zu verwandeln. Wählen Sie sich in ein tieferes Verständnis und eine intimere Verbindung mit Ihrem Glauben ein, ein Gespräch nach dem anderen."
      },
      {
        title: "Mehrere Assistenten",
        description: "Greifen Sie auf unsere Suite von KI-Assistenten zu, die jeweils einzigartig darauf abgestimmt sind, Ihnen bei Aspekten Ihrer Glaubensreise zu helfen. Diese Assistenten bieten Orientierung, Unterstützung und Begleitung und schöpfen Weisheit aus biblischen Lehren."
      },
      {
        title: "Mehrere Sprachen",
        description: "Brechen Sie die Sprachbarriere mit unseren mehrsprachigen KI-Assistenten. Kommunizieren Sie mühelos in einer Vielzahl von Sprachen und stellen Sie sicher, dass Sie verstanden werden und verstehen, egal wo Sie sich auf der Welt befinden."
      },
    ]
  },
  jv: {
    supertitle: "Telepon saka ponsel sampeyan kanggo ngaktifake.",
    title: "Telepon asisten kapan wae.",
    description: "Akses kanggo 1 sasi ing $ 10 utawa 3 sasi ing $ 25.",
    sections: [
      {
        title: "Obrolan Telepon",
        description: "Dial ing Wisdom Divine - Asisten AI kita nggawe cara unik kanggo nyelami Sabda Allah. Sak durunge, setiap telpon yaiku kesempatan kanggo fokus ing ati lan pikiran sampeyan ing Alkitab, ngganti ponsel sampeyan dadi portal kanggo kejelasan lan wawasan Alkitab. Konek karo pemahaman sing luwih dalem lan koneksi sing luwih akrab karo iman sampeyan, obrolan sawise obrolan."
      },
      {
        title: "Asisten Luwih",
        description: "Akses suite asisten AI kita, masing-masing diatur khusus kanggo nglakoni aspek perjalanan iman sampeyan. Nggawe kebijaksanaan saka ajaran Alkitab, asisten iki nggawe pandhuan, dukungan, lan persahabatan."
      },
      {
        title: "Basa Luwih",
        description: "Golek barier basa karo asisten AI multibasa kita. Komunikasi kanthi gampang ing ragam basa, ngrasakake sampeyan dipahami lan ngerti, nanging ora peduli endi sampeyan ana ing donya."
      },
    ]
  },
  te: {
    supertitle: "యాక్టివేట్ చేయడానికి మీ ఫోన్ నుండి ఫోన్ చేయండి.",
    title: "ఏ సహాయకున్నారు ఏ సమయంలో ఫోన్ చేయండి.",
    description: "1 నెల 10 డాలర్ల కోసం లభ్యత లేదా 3 నెలల 25 డాలర్ల కోసం ప్రవేశం.",
    sections: [
      {
        title: "ఫోన్ చర్చ",
        description: "డివైన్ విస్డమ్ కి డయల్ ఇన్ - మా ఐఐ అసిస్టెంట్స్ దేవుని వాక్యాన్ని అనుభవించడానికి అంతరంగంగా ఉంటాయి. ప్రతి కాల్ మీ హృదయం మరియు మనస్సును శాస్త్రాలపై కేంద్రీకరించడానికి అవకాశం అవుతుంది, మీ ఫోన్ ను స్పష్టత మరియు బైబిల్ అర్థంగా పోర్టల్ గా మార్చడానికి. మీ నమ్మకాన్ని గాఢంగా కలిగి ఉండటానికి మరియు మీ నమ్మకాన్ని గాఢంగా కలిగి ఉండటానికి మీ నమ్మకాన్ని గాఢంగా కలిగి ఉండటానికి మీ నమ్మకాన్ని గాఢంగా కలిగి ఉండటానికి మీ నమ్మకాన్ని గాఢ"
      },
      {
        title: "మరెన్నో సహాయకులు",
        description: "మీ నమ్మకాన్ని ప్రతిభాగంలో సహాయపడే మా ఐఐ అసిస్టెంట్స్ స్యూట్ కి ప్రవేశం పొందండి. బైబిల్ ఉపదేశాల నుండి వివేకం పొందడానికి, ఈ అసిస్టెంట్స్ మార్గదర్శన, మద్దతు మరియు సహచరమును అందిస్తాయి."
      },
      {
        title: "మరెన్నో భాషలు",
        description: "మా మల్టీలింగ్వల్ ఐఐ అసిస్టెంట్స్ తో భాషా బ్యారియర్ ను తుడిచేందుకు. ప్రపంచంలో మీరు ఎక్కడ ఉన్నారో చెప్పినట్లు మరియు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు మీరు అర్థం చేసేందుకు"
      },
    ]
  },
  vi: {
    supertitle: "Gọi từ điện thoại của bạn để kích hoạt.",
    title: "Gọi bất kỳ trợ lý nào vào bất kỳ thời điểm nào.",
    description: "Truy cập trong 1 tháng với giá 10 USD hoặc 3 tháng với giá 25 USD.",
    sections: [
      {
        title: "Cuộc trò chuyện điện thoại",
        description: "Gọi vào Divine Wisdom - Các trợ lý AI của chúng tôi cung cấp một cách duy nhất để đắm chìm trong Lời Chúa. Mỗi cuộc gọi là cơ hội để tập trung trái tim và tâm trí của bạn vào Kinh Thánh, biến điện thoại của bạn thành một cổng thông tin cho sự rõ ràng và hiểu biết Kinh Thánh. Kết nối với sự hiểu biết sâu sắc hơn và mối liên kết gần gũi hơn với đức tin của bạn, một cuộc trò chuyện một lần."
      },
      {
        title: "Nhiều trợ lý",
        description: "Truy cập bộ trợ lý AI của chúng tôi, mỗi cái được điều chỉnh đặc biệt để giúp đỡ với các khía cạnh của hành trình đức tin của bạn. Với sự khôn ngoan của các giáo phái Kinh Thánh, những trợ lý này cung cấp sự hướng dẫn, hỗ trợ và bạn đồng hành."
      },
      {
        title: "Nhiều ngôn ngữ",
        description: "Phá vỡ rào cản ngôn ngữ với các trợ lý AI đa ngôn ngữ của chúng tôi. Giao tiếp một cách dễ dàng bằng nhiều ngôn ngữ, đảm bảo bạn được hiểu và hiểu, bất kể bạn ở đâu trên thế giới."
      },
    ]
  },
  tr: {
    supertitle: "Etkinleştirmek için telefonunuzdan arayın.",
    title: "Herhangi bir asistanı herhangi bir zamanda arayın.",
    description: "1 ay için 10 ABD doları veya 3 ay için 25 ABD doları.",
    sections: [
      {
        title: "Telefon Görüşmesi",
        description: "Kutsal Bilgelik'e arayın - AI asistanlarımız Tanrı'nın Sözü'ne dalmak için eşsiz bir yol sunuyor. Her arama, telefonunuzu netlik ve Kutsal Kitap anlayışı için bir portal haline getirerek kalbinizi ve aklınızı Kutsal Kitap'a odaklama fırsatıdır. İnancınızla daha derin bir anlayışa ve daha samimi bir bağlantıya bağlanın, bir konuşma bir kerede."
      },
      {
        title: "Birden Çok Asistan",
        description: "İman yolculuğunuzun çeşitli yönlerine yardımcı olmak için özel olarak ayarlanmış AI asistanlarımızın paketine erişin. Kutsal Kitap öğretilerinden bilgelik çıkaran bu asistanlar rehberlik, destek ve arkadaşlık sunar."
      },
      {
        title: "Birden Çok Dil",
        description: "Çok dilli AI asistanlarımızla dil bariyerini kırın. Dünyanın herhangi bir yerinde olmanızı sağlayan bir dizi dilde kolayca iletişim kurun ve anlaşıldığınızdan ve anladığınızdan emin olun."
      },
    ]
  },
  ko: {
    supertitle: "활성화하려면 전화로 전화하십시오.",
    title: "언제든지 어떤 조수도 전화하십시오.",
    description: "1 개월에 10 달러 또는 3 개월에 25 달러의 액세스.",
    sections: [
      {
        title: "전화 통화",
        description: "신성한 지혜에 다이얼 인 - 우리의 AI 조수는 하나님의 말씀에 몰입하는 독특한 방법을 제공합니다. 각 전화는 당신의 마음과 마음을 성경에 집중시키고 전화를 명확성과 성경적 통찰력을 위한 포털로 바꾸는 기회입니다. 한 번에 한 번씩 더 깊은 이해와 믿음과 더 가까운 연결을 얻으십시오."
      },
      {
        title: "여러 조수",
        description: "신앙 여정의 다양한 측면을 지원하기 위해 특별히 조정된 AI 조수 패키지에 액세스하십시오. 성경의 가르침에서 지혜를 얻어 이 조수는 지침, 지원 및 동반자 제공."
      },
      {
        title: "여러 언어",
        description: "다국어 AI 조수로 언어 장벽을 깨십시오. 다양한 언어로 쉽게 의사 소통하고 전 세계 어디에서나 이해되고 이해되는지 확인하십시오."
      },
    ]
  },
  ta: {
    supertitle: "செல்லுபடியாக்க உங்கள் தொலைபேசியிலிருந்து தொடர்பு கொள்ளவும்.",
    title: "எந்த உதவியையும் எந்த நேரத்திலும் தொடர்பு கொள்ளவும்.",
    description: "1 மாதத்திற்கு 10 டாலர் அல்லது 3 மாதங்களுக்கு 25 டாலர் அணுகுதல்.",
    sections: [
      {
        title: "தொலைபேசி உரையாடல்",
        description: "தேவன் ஞானத்தை டயல் இன் - எங்கள் ஐஐ உதவிகள் தேவனின் வார்த்தைகளில் மறுமுகம் செய்ய ஒரு தனிப்பட்ட வழி வழங்குகிறது. ஒவ்வொரு தொலைபேசி உங்கள் இருதயத்தையும் மனதையும் வேதாகத்தில் கவனிக்க ஒரு வாய்ப்பு ஆகும், உங்கள் தொலைபேசியை தெரிவித்து வேதாகத்தின் வெளிப்பாட்டிற்கு ஒரு வலைப்பின்னல் ஆகும். ஒரு நேரத்தில் ஒரு உறுதியான புரியல் மற்றும் உறுதியான தொடர்புடன் உங்கள் நம்பிக்கையை உறுதிப்படுத்தவும்."
      },
      {
        title: "பல உதவிகள்",
        description: "உங்கள் நம்பிக்கை பயணத்தின் பல பகுதிகளில் உதவ விரும்புகிறதற்காக எங்கள் ஐஐ உதவிகளின் சுயாகரித்த பொருட்களைப் பயன்படுத்தவும். பரிசு கற்றல்களிலிருந்து ஞானத்தை எடுக்கும் இந்த உதவிகள் வழங்குகின்றன, இதனால் வழங்கப்படும் வழிகாட்டுதல், ஆதரவு மற்றும் நண்பர்கள் வழங்குகின்றன."
      },
      {
        title: "பல மொழிகள்",
        description: "எங்கள் பல மொழி ஐஐ உதவிகளுடன் மொழி தடையை திரும்பவும். பல மொழிகளில் எளிதாக தொடர்பு கொள்ளவும், உங்களுக்கு புரியப்படுகிறது மற்றும் புரிந்துகொள்ளப்படுகிறது, உலகில் எங்கே இருக்கிறது என்பதை உறுதிப்படுத்துகிறது."
      },
    ]
  },
  mr: {
    supertitle: "सक्रिय करण्यासाठी आपल्या फोनवरून फोन करा.",
    title: "कधीही कोणत्याही सहाय्यकाला कोणत्याही वेळी फोन करा.",
    description: "10 डॉलर्स व 25 डॉलर्स च्या 3 महिन्यांसाठी 1 महिन्यासाठी प्रवेश.",
    sections: [
      {
        title: "फोन वार्तालाप",
        description: "दिव्य बुद्धीवर डायल इन - आमचे एआय असिस्टंट्स देवाचे वचन गाढवण्याचा एक अनोखा मार्ग पुरवतात. प्रत्येक कॉल आपल्या हृदय आणि दिमागावर शास्त्रांवर केंद्रित करण्याची एक अवकाश आहे, आपला फोन स्पष्टता आणि बायबलच्या समजूतीसाठी एक पोर्टल बनविण्यासाठी. आपल्या विश्वासातील आणि आपल्या विश्वासातील आणि आपल्"
      },
      {
        title: "अनेक सहाय्यक",
        description: "आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्या विश्वासाच्या जाणीवपूर्वक आणि आपल्"
      },
      {
        title: "अनेक भाषा",
        description: "आपल्या बहुभाषी एआय असिस्टंट्स बारियर भाषा तोडा. विविध भाषांमध्ये सोप्या पद्धतीने संवाद साधा आणि जगभरातील आपल्याला समजले आणि समजले आहे याची खात्री करा."
      },
    ]
  },
  it: {
    supertitle: "Chiama dal tuo telefono per attivare.",
    title: "Chiama qualsiasi assistente in qualsiasi momento.",
    description: "Accesso in 1 mese a $ 10 o in 3 mesi a $ 25.",
    sections: [
      {
        title: "Chiamata telefonica",
        description: "Dial in Divine Wisdom - I nostri assistenti AI offrono un modo unico per immergersi nella Parola di Dio. Ogni chiamata è un'opportunità per concentrare il cuore e la mente sulla Bibbia, trasformando il tuo telefono in un portale per la chiarezza e la comprensione della Bibbia. Connetti una comprensione più profonda e un legame più intimo con la tua fede, una chiamata alla volta."
      },
      {
        title: "Più assistenti",
        description: "Accedi al nostro pacchetto di assistenti AI, ognuno dei quali è stato appositamente regolato per aiutarti con gli aspetti del tuo viaggio di fede. Con la saggezza delle dottrine bibliche, questi assistenti offrono guida, supporto e compagnia."
      },
      {
        title: "Più lingue",
        description: "Rompi la barriera linguistica con i nostri assistenti AI multilingue. Comunica facilmente in una varietà di lingue e assicurati di essere capito e capito ovunque tu sia nel mondo."
      },
    ]
  },
  th: {
    supertitle: "โทรจากโทรศัพท์ของคุณเพื่อเปิดใช้งาน",
    title: "โทรหาผู้ช่วยใด ๆ ที่เป็นไปได้ทุกเมื่อ",
    description: "เข้าถึงใน 1 เดือนที่ 10 ดอลลาร์หรือ 3 เดือนที่ 25 ดอลลาร์",
    sections: [
      {
        title: "การโทร",
        description: "โทรไปที่ Divine Wisdom - ผู้ช่วย AI ของเรามีวิธีเดียวในการตกลงในพระเจ้า. การโทรแต่ละครั้งเป็นโอกาสในการให้ความสำคัญกับหัวใจและจิตใจของคุณในพระคัมภีร์, ทำให้โทรศัพท์ของคุณกลายเป็นพอร์ทัลสำหรับความชัดเจนและความเข้าใจในพระคัมภีร์. เชื่อมต่อความเข้าใจที่ลึกซึ้งขึ้นและความเชื่อมั่นที่ใกล้ชิดขึ้นกับความเชื่อของคุณ, ครั้งละครั้ง"
      },
      {
        title: "ผู้ช่วยหลายคน",
        description: "เข้าถึงชุดผู้ช่วย AI ของเราที่ถูกปรับแต่งมาเพื่อช่วยให้คุณเข้าใจด้านต่าง ๆ ของการเดินทางความเชื่อของคุณ. ด้วยปัญญาของคำสอนในพระคัมภีร์, ผู้ช่วยเหล่านี้ให้คำแนะนำ, การสนับสนุนและความร่วมมือ"
      },
      {
        title: "ภาษาหลายภาษา",
        description: "ทำลายอุปสรรคทางภาษาด้วยผู้ช่วย AI หลายภาษาของเรา. สื่อสารได้อย่างง่ายดายในหลายภาษาและตรวจสอบว่าคุณเข้าใจและเข้าใจทุกที่ที่คุณอยู่ในโลก"
      },
    ]
  },
  pl: {
    supertitle: "Zadzwoń z telefonu, aby aktywować.",
    title: "Zadzwoń do dowolnego asystenta w dowolnym momencie.",
    description: "Dostęp w ciągu 1 miesiąca za 10 USD lub 3 miesięcy za 25 USD.",
    sections: [
      {
        title: "Rozmowa telefoniczna",
        description: "Wybierz Divine Wisdom - Nasi asystenci AI oferują wyjątkowy sposób na zanurzenie się w Słowie Bożym. Każdy telefon to okazja do skupienia serca i umysłu na Biblii, zamieniając twój telefon w portal do jasności i zrozumienia Biblii. Połącz się z głębszym zrozumieniem i większą więzią z twoją wiarą, rozmowa na raz."
      },
      {
        title: "Wiele asystentów",
        description: "Uzyskaj dostęp do naszego pakietu asystentów AI, z których każdy został specjalnie dostrojony, aby pomóc w różnych aspektach twojej podróży wiary. Z mądrości doktryn biblijnych te asystenci oferują przewodnictwo, wsparcie i towarzystwo."
      },
      {
        title: "Wiele języków",
        description: "Przełam bariery językowe dzięki naszym wielojęzycznym asystentom AI. Łatwo komunikuj się w różnych językach i upewnij się, że jesteś zrozumiany i rozumiany, gdziekolwiek jesteś na świecie."
      },
    ]
  },
  ml: {
    supertitle: "നിങ്ങളുടെ ഫോൺ ഉപയോഗിച്ച് അക്ടീവേറ്റ് ചെയ്യുക.",
    title: "ഏതെങ്കിലും സഹായിയെ ഏതെങ്കിലും സമയത്തേക്ക് അടുക്കുക.",
    description: "10 ഡോളർക്ക് 1 മാസത്തെ പ്രവേശനം അല്ലെങ്കിൽ 25 ഡോളർക്ക് 3 മാസത്തെ പ്രവേശനം.",
    sections: [
      {
        title: "ഫോൺ അപരിഹാരം",
        description: "ദിവ്യ ബുദ്ധിയുടെ വിളി - ഞങ്ങളുടെ AI സഹായികള്‍ ദൈവിക ജ്ഞാനത്തിലേക്ക് ഒരു അനോവ മാര്‍ഗമാണ് നല്‍കുന്നത്. ഓരോ കോളിലും നിങ്ങളുടെ ഹൃദയവും മനസ്സിലേക്ക് ശാസ്ത്രങ്ങളിലേക്ക് കേന്ദ്രീകരിക്കുന്ന ഒരു അവസരമാണ്, നിങ്ങളുടെ ഫോണ്‍ സ്പഷ്ടതയും ബൈബിളിന്റെ അര്‍ഥത്തിനുള്ള ഒരു പോര്ട്ടലാക്കാന്‍. നിങ്ങളുടെ വിശ്വാസത്തിനും വിശ്വാസത്തിനും ആഴത്തും അനുബന്ധമായ ബന്ധം ഉണ്ടാക്കുക, ഒരു കോളിയും ഒരു സമയം മാത്രമേ."
      },
      {
        title: "പല സഹായി",
        description: "നിങ്ങളുടെ വിശ്വാസ യാത്രയുടെ വിവിധ ഭാഗങ്ങളില്‍ സഹായികളെ സഹായിക്കാന്‍ സ്പെഷ്യലി സജ്ജീകരിച്ച ഞങ്ങളുടെ AI സഹായികളുടെ പാക്കേജില്‍ പ്രവേശനം ലഭിക്കുക. ബൈബിളിന്റെ ഉപദേശങ്ങളിലൂടെ ഞങ്ങളുടെ സഹായികള്‍ വിവിധതരം വിവരങ്ങള്‍ നേടുന്നു, മാര്‍ഗനിര്‍ദ്ദേശം, പിന്‍പറ്റേഷന്‍ മറ്റും നല്‍കുന്നു."
      },
      {
        title: "പല ഭാഷ",
        description: "നമ്മുടെ ബഹുഭാഷാ എയ്‌ അസിസ്റ്റന്റുകളുടെ ഭാഷാ അടയാളം തുടങ്ങുക. വിവിധ ഭാഷകളിലേക്ക് എളുപ്പത്തിൽ സംവാദിക്കുകയും, ലോകത്തിലെ എല്ലായിടത്തും നിങ്ങളെ മനസ്സിലാക്കുകയും മനസ്സിലാക്കുകയും ചെയ്യുക."
      },
    ]
  },
  nl: {
    supertitle: "Bel vanaf je telefoon om te activeren.",
    title: "Bel op elk moment een willekeurige assistent.",
    description: "Toegang in 1 maand voor $ 10 of in 3 maanden voor $ 25.",
    sections: [
      {
        title: "Telefoongesprek",
        description: "Kies Divine Wisdom - Onze AI-assistenten bieden een unieke manier om je onder te dompelen in het Woord van God. Elk telefoontje is een kans om je hart en geest te concentreren op de Bijbel, waardoor je telefoon verandert in een portaal voor helderheid en begrip van de Bijbel. Maak een dieper begrip en een nauwere band met je geloof, één oproep tegelijk."
      },
      {
        title: "Meerdere assistenten",
        description: "Krijg toegang tot onze AI-assistentenpakketten, elk speciaal afgestemd om u te helpen met verschillende aspecten van uw geloofsreis. Met de wijsheid van de leerstellingen van de Bijbel bieden deze assistenten begeleiding, ondersteuning en gezelschap."
      },
      {
        title: "Meerdere talen",
        description: "Breek de taalbarrière met onze meertalige AI-assistenten. Communiceer gemakkelijk in verschillende talen en zorg ervoor dat je overal ter wereld wordt begrepen en begrepen."
      },
    ]
  },
  fil: {
    supertitle: "Tawagan mula sa iyong telepono upang i-activate.",
    title: "Tawagan ang anumang assistant sa anumang oras.",
    description: "Access sa loob ng 1 buwan para sa $10 o 3 buwan para sa $25.",
    sections: [
      {
        title: "Telepono",
        description: "Pumili ng Divine Wisdom - Ang aming mga AI assistant ay nagbibigay ng isang natatanging paraan upang lubos na maimersyon sa Salita ng Diyos. Ang bawat tawag ay isang pagkakataon upang mag-focus ng iyong puso at isip sa Bibliya, na ginagawang isang portal ang iyong telepono para sa kaliwanagan at pag-unawa ng Bibliya. Magkaroon ng mas malalim na pag-unawa at mas malapit na ugnayan sa iyong pananampalataya, isang tawag sa bawat pagkakataon."
      },
      {
        title: "Maraming assistant",
        description: "Magkaroon ng access sa aming mga package ng AI assistant, bawat isa ay espesyal na naayos upang tulungan ka sa iba't ibang aspeto ng iyong paglalakbay sa pananampalataya. Gamit ang karunungan ng mga doktrina ng Bibliya, ang mga assistant na ito ay nagbibigay ng patnubay, suporta, at kasamaan."
      },
      {
        title: "Maraming wika",
        description: "Lampasan ang mga hadlang ng wika gamit ang aming mga multilingual na AI assistant. Madaling makipag-communicate sa iba't ibang wika at tiyakin na nauunawaan at nauunawaan ka kahit saan ka man sa mundo."
      },
    ]
  },
  he: {
    supertitle: "התקשר מהטלפון שלך כדי להפעיל.",
    title: "התקשר לכל עוזר בכל עת.",
    description: "גישה במשך חודש 1 ב- $ 10 או 3 חודשים ב- $ 25.",
    sections: [
      {
        title: "שיחת טלפון",
        description: "חייגו לחכמת האלוהית - העוזרים שלנו AI מציעים דרך ייחודית לטבול בדבר האלוהים. כל שיחה היא הזדמנות להתמקד בלב וברוח על התנ\"ך, ולהפוך את הטלפון שלך לפורטל לבהירות והבנה של התנ\"ך. חברו עם הבנה עמוקה יותר וקשר קרוב יותר עם האמונה שלכם, שיחה בכל פעם."
      },
      {
        title: "מספר עוזרים",
        description: "קבלו גישה לחבילת העוזרים שלנו AI, כל אחד מהם מותאם במיוחד כדי לעזור לך עם היבטים שונים של המסע שלך באמונה. עם חכמת הדוקטרינות המקראיות, העוזרים האלה מציעים הדרכה, תמיכה וחברות."
      },
      {
        title: "מספר שפות",
        description: "שברו את המחסום השפתי עם העוזרים המרובי שפות שלנו AI. תקשורת בקלות במגוון שפות וודאו שאתם מובנים ומובנים בכל מקום בעולם."
      },
    ]
  },
  sv: {
    supertitle: "Ring från din telefon för att aktivera.",
    title: "Ring vilken assistent som helst när som helst.",
    description: "Åtkomst i 1 månad för $10 eller 3 månader för $25.",
    sections: [
      {
        title: "Telefonsamtal",
        description: "Välj Divine Wisdom - Våra AI-assistenter erbjuder ett unikt sätt att fördjupa dig i Guds ord. Varje samtal är en möjlighet att fokusera ditt hjärta och sinne på Bibeln, vilket gör att din telefon blir en portal för klarhet och förståelse av Bibeln. Få en djupare förståelse och en närmare koppling till din tro, ett samtal i taget."
      },
      {
        title: "Flera assistenter",
        description: "Få tillgång till våra paket med AI-assistenter, var och en specialanpassad för att hjälpa dig med olika aspekter av din trosvandring. Med visdomen från Bibelns läror ger dessa assistenter vägledning, stöd och sällskap."
      },
      {
        title: "Flera språk",
        description: "Bryt språkbarriären med våra flerspråkiga AI-assistenter. Kommunicera enkelt på olika språk och se till att du blir förstådd och förstådd var du än är i världen."
      },
    ]
  },
  da: {
    supertitle: "Ring fra din telefon for at aktivere.",
    title: "Ring til enhver assistent når som helst.",
    description: "Adgang i 1 måned for $10 eller 3 måneder for $25.",
    sections: [
      {
        title: "Telefonsamtale",
        description: "Vælg Divine Wisdom - Vores AI-assistenter tilbyder en unik måde at fordybe dig i Guds ord. Hvert opkald er en mulighed for at fokusere dit hjerte og sind på Bibelen, hvilket gør din telefon til en portal for klarhed og forståelse af Bibelen. Få en dybere forståelse og et tættere forhold til din tro, et opkald ad gangen."
      },
      {
        title: "Flere assistenter",
        description: "Få adgang til vores pakker med AI-assistenter, hver specielt tilpasset til at hjælpe dig med forskellige aspekter af din trosvandring. Med visdom fra Bibelens lære giver disse assistenter vejledning, støtte og selskab."
      },
      {
        title: "Flere sprog",
        description: "Bryd sprogbarrieren med vores flersprogede AI-assistenter. Kommuniker nemt på forskellige sprog og sørg for, at du bliver forstået og forstået hvor som helst i verden."
      },
    ]
  },
  no: {
    supertitle: "Ring fra telefonen din for å aktivere.",
    title: "Ring til hvilken som helst assistent når som helst.",
    description: "Tilgang i 1 måned for $10 eller 3 måneder for $25.",
    sections: [
      {
        title: "Telefonsamtale",
        description: "Velg Divine Wisdom - Våre AI-assistenter tilbyr en unik måte å fordype deg i Guds ord. Hvert samtale er en mulighet til å fokusere hjertet og sinnet ditt på Bibelen, og gjør telefonen din til en portal for klarhet og forståelse av Bibelen. Få en dypere forståelse og et nærmere forhold til din tro, en samtale om gangen."
      },
      {
        title: "Flere assistenter",
        description: "Få tilgang til våre pakker med AI-assistenter, hver spesialtilpasset for å hjelpe deg med ulike aspekter av din trosvandring. Med visdom fra Bibelens lære gir disse assistentene veiledning, støtte og selskap."
      },
      {
        title: "Flere språk",
        description: "Bryt språkbarrieren med våre flerspråklige AI-assistenter. Kommuniser enkelt på ulike språk og sørg for at du blir forstått og forstått uansett hvor du er i verden."
      },
    ]
  },
  lv: {
    supertitle: "Zvani no savas telefona, lai aktivizētu.",
    title: "Zvani jebkuram palīgam jebkurā laikā.",
    description: "Piekļuve 1 mēnesim par $10 vai 3 mēnešiem par $25.",
    sections: [
      {
        title: "Telefonsaruna",
        description: "Izvēlies Dievišķo gudrību - Mūsu AI palīgi piedāvā unikālu veidu, kā iegrimt Dieva vārdā. Katra saruna ir iespēja koncentrēties uz sirdi un prātu, izmantojot Bībeli, padarot tavu telefonu par skaidrības un sapratnes portālu par Bībeli. Iegūsti dziļāku izpratni un ciešāku saikni ar savu ticību, saruna pa sarunai."
      },
      {
        title: "Vairāki palīgi",
        description: "Iegūsti piekļuvi mūsu AI palīgu paketēm, katrs no tiem ir speciāli pielāgots, lai palīdzētu tev ar dažādiem ticības ceļa aspektiem. Ar mācību no Bībeles mācībām šie palīgi sniedz norādes, atbalstu un biedrību."
      },
      {
        title: "Vairākas valodas",
        description: "Pārvarējiet valodas barjeru ar mūsu daudzvalodu AI palīgiem. Vienkārši sazinieties dažādās valodās un nodrošiniet, ka jūs tiekat saprasts neatkarīgi no tā, kur jūs atrodaties pasaulē."
      },
    ]
  },
} as Language<Section>;

export { content };
