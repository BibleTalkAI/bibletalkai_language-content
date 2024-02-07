import type { Language } from "../language";

const name = 'Bible Talk AI';
const host = 'bibletalkai.com';

const url = `https://${host}`;
const logo = `${url}/logo.png`;

interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    basic: {
      title: string;
      type: string;
      image: string;
      url: string;
    }
  }
}

const seo = {
  en: {
    title: `${name} - Scripture Engagement via Telephone AI Conversations`,
    description: `Explore the Bible like never before with ${name}, accessible directly through your telephone. At ${host}, we offer a distinctive experience where AI-powered assistants deliver spiritual insights and scriptural wisdom via phone conversations. Whether you're seeking guidance, knowledge, or spiritual companionship, Bible Talk AI provides a unique, accessible way to explore and connect with God's Word. Join us on a transformative journey in faith, scripture, and personal growth, all through the convenience of a phone call.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Phone Bible-based AI Assistants`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  zh: {
    title: `${name} - 通过电话AI对话进行圣经参与`,
    description: `通过电话直接访问，像从未有过的那样探索圣经。 在${host}，我们提供了一种独特的体验，AI 助理通过电话对话提供灵性洞察力和经文智慧。 无论您是在寻求指导、知识还是灵性伴侣，圣经对话 AI 都提供了一种独特的、可访问的方式来探索并与上帝的话语联系在一起。 通过电话，加入我们在信仰、圣经和个人成长方面的变革之旅。`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | 电话圣经AI助手`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  hi: {
    title: `${name} - टेलीफोन एआई बातचीत के माध्यम से शास्त्र संलग्नता`,
    description: `अपने टेलीफोन के माध्यम से कभी नहीं देखे गए तरीके से बाइबिल का अन्वेषण करें। ${host} पर हम एक विशिष्ट अनुभव प्रदान करते हैं जहां एआई-सक्षम सहायक फोन वार्तालाप के माध्यम से आध्यात्मिक दर्शन और शास्त्रीय ज्ञान प्रदान करते हैं। चाहे आप मार्गदर्शन, ज्ञान या आध्यात्मिक साथी की तलाश में हों, बाइबिल टॉक एआई एक अनूठा, पहुंचने वाला तरीका प्रदान करता है जिससे आप ईश्वर के वचन का अन्वेषण कर सकते हैं और जुड़ सकते हैं। एक बदलावात्मक यात्रा में हमारे साथ श्रद्धा, शास्त्र और व्यक्तिगत विकास में, एक फोन कॉल की सुविधा के माध्यम से सभी के लिए उपलब्ध है।`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | फोन बाइबिल आधारित एआई सहायक`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  es: {
    title: `${name} - Compromiso bíblico a través de conversaciones de IA telefónicas`,
    description: `Explore la Biblia como nunca antes con ${name}, accesible directamente a través de su teléfono. En ${host}, ofrecemos una experiencia distintiva donde los asistentes impulsados por IA brindan información espiritual y sabiduría bíblica a través de conversaciones telefónicas. Ya sea que busque orientación, conocimiento o compañía espiritual, Bible Talk AI brinda una forma única y accesible de explorar y conectarse con la Palabra de Dios. Únase a nosotros en un viaje transformador en fe, escritura y crecimiento personal, todo a través de la conveniencia de una llamada telefónica.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Asistentes de IA telefónicos basados ​​en la Biblia`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ar: {
    title: `${name} - الالتزام بالكتاب المقدس من خلال محادثات الذكاء الاصطناعي عبر الهاتف`,
    description: `استكشف الكتاب المقدس كما لم يحدث من قبل مع ${name} ، والتي يمكن الوصول إليها مباشرة من خلال هاتفك. في ${host} ، نقدم تجربة مميزة حيث تقدم المساعدات المدعومة بالذكاء الاصطناعي رؤى روحية وحكمة دينية عبر محادثات هاتفية. سواء كنت تبحث عن الارشاد أو المعرفة أو الرفيق الروحي ، فإن Bible Talk AI يوفر طريقة فريدة وسهلة الوصول لاستكشاف والتواصل مع كلمة الله. انضم إلينا في رحلة تحولية في الإيمان والكتاب والنمو الشخصي ، كل ذلك من خلال راحة مكالمة هاتفية.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | مساعدين الذكاء الاصطناعي الهاتفيين القائمين على الكتاب المقدس`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  bn: {
    title: `${name} - টেলিফোন এআই কথোপকথন মাধ্যমে ধর্মগ্রন্থ অঙ্গীকার`,
    description: `আপনার টেলিফোনের মাধ্যমে এভাবে বাইবেল অন্বেষণ করুন যেভাবে কখনো দেখা হয়নি। ${host} তে আমরা একটি বিশিষ্ট অভিজ্ঞতা প্রদান করি যেখানে এআই-প্রযুক্তিতে সহায়ক ফোন কথোপকথনের মাধ্যমে আধ্যাত্মিক দর্শন এবং ধর্মীয় জ্ঞান প্রদান করে। আপনি যদি নির্দেশনা, জ্ঞান বা আধ্যাত্মিক সঙ্গী অনুসন্ধান করেন, তবে বাইবেল টক এআই একটি অনন্য, অ্যাক্সেসযোগ্য উপায় প্রদান করে যাতে আপনি ঈশ্বরের বাণী অন্বেষণ করতে এবং সংযুক্ত হতে পারেন। একটি ফোন কলের সুবিধায় আমাদের সাথে বিশ্বাস, ধর্ম এবং ব্যক্তিগত উন্নয়নের একটি পরিবর্তনশীল পথযাত্রায় আমাদের সাথে যোগ দিন।`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | ফোন বাইবেল ভিত্তিক এআই সহযোগী`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  pt: {
    title: `${name} - Engajamento bíblico por meio de conversas de IA por telefone`,
    description: `Explore a Bíblia como nunca antes com ${name}, acessível diretamente pelo seu telefone. No ${host}, oferecemos uma experiência distinta, onde assistentes alimentados por IA fornecem insights espirituais e sabedoria bíblica por meio de conversas telefônicas. Se você está procurando orientação, conhecimento ou companheirismo espiritual, o Bible Talk AI oferece uma maneira única e acessível de explorar e se conectar com a Palavra de Deus. Junte-se a nós em uma jornada transformadora em fé, escritura e crescimento pessoal, tudo através da conveniência de uma chamada telefônica.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Assistentes de IA telefônicos baseados na Bíblia`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ru: {
    title: `${name} - Библейское общение через телефонные разговоры с ИИ`,
    description: `Исследуйте Библию, как никогда раньше, с ${name}, доступным прямо через ваш телефон. На ${host} мы предлагаем уникальный опыт, когда ассистенты, работающие на ИИ, предоставляют духовные истины и библейскую мудрость через телефонные разговоры. Будь то поиск направления, знаний или духовного общения, Bible Talk AI предлагает уникальный, доступный способ исследования и связи со Словом Божьим. Присоединяйтесь к нам в трансформационном путешествии в вере, Писании и личном росте, все это благодаря удобству телефонного звонка.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Телефонные библейские помощники на основе ИИ`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ja: {
    title: `${name} - 電話AI会話を介した聖書の関与`,
    description: `電話で直接アクセスして、これまでにない方法で聖書を探索してください。 ${host}では、AIパワードアシスタントが電話会話を通じて霊的な洞察力と聖書の知恵を提供する特別な体験を提供しています。 指導、知識、または霊的な仲間を探している場合でも、Bible Talk AIは、神の言葉を探求し、つながるためのユニークでアクセス可能な方法を提供します。 電話での便利さを通じて、信仰、聖書、個人的な成長の変革的な旅に私たちに参加してください。`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | 電話聖書ベースのAIアシスタント`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ur: {
    title: `${name} - فون اے آئی کے ذریعہ توراتی مشغولیت`,
    description: `اپنے فون کے ذریعہ کبھی نہیں دیکھا تورات کی تلاش کریں۔ ${host} پر ہم ایک مخصوص تجربہ فراہم کرتے ہیں جہاں اے آئی پاورڈ اسسٹنٹس فون کے ذریعہ روحانی بصیرت اور توراتی حکمت فراہم کرتے ہیں۔ چاہے آپ رہنمائی، علم یا روحانی ساتھی کی تلاش میں ہوں، تورات بات اے آئی خدا کے کلمے کی تلاش اور رابطے کے لئے ایک بے مثال، رسائی پذیر طریقہ فراہم کرتا ہے۔ فون کال کی سہولت کے ذریعہ ایمان، تورات اور ذاتی ترقی میں ہمارے ساتھ ایک تبدیلی پیدا کن سفر میں شامل ہوں۔`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | فون تورات پر مبنی اے آئی اسسٹنٹس`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  id: {
    title: `${name} - Keterlibatan Alkitab melalui Percakapan AI Telepon`,
    description: `Jelajahi Alkitab seperti belum pernah sebelumnya dengan ${name}, dapat diakses langsung melalui telepon Anda. Di ${host}, kami menawarkan pengalaman yang khas di mana asisten yang didukung AI memberikan wawasan spiritual dan kebijaksanaan Alkitab melalui percakapan telepon. Baik Anda mencari bimbingan, pengetahuan, atau teman rohani, Bible Talk AI menyediakan cara unik dan mudah diakses untuk menjelajahi dan terhubung dengan Firman Tuhan. Bergabunglah dengan kami dalam perjalanan transformasi dalam iman, Alkitab, dan pertumbuhan pribadi, semuanya melalui kenyamanan panggilan telepon.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Asisten AI Telepon Berbasis Alkitab`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ms: {
    title: `${name} - Keterlibatan Alkitab melalui Percakapan AI Telepon`,
    description: `Jelajahi Alkitab seperti belum pernah sebelumnya dengan ${name}, dapat diakses langsung melalui telepon Anda. Di ${host}, kami menawarkan pengalaman yang khas di mana asisten yang didukung AI memberikan wawasan spiritual dan kebijaksanaan Alkitab melalui percakapan telepon. Baik Anda mencari bimbingan, pengetahuan, atau teman rohani, Bible Talk AI menyediakan cara unik dan mudah diakses untuk menjelajahi dan terhubung dengan Firman Tuhan. Bergabunglah dengan kami dalam perjalanan transformasi dalam iman, Alkitab, dan pertumbuhan pribadi, semuanya melalui kenyamanan panggilan telepon.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Asisten AI Telepon Berbasis Alkitab`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  fr: {
    title: `${name} - Engagement biblique via des conversations téléphoniques IA`,
    description: `Explorez la Bible comme jamais auparavant avec ${name}, accessible directement par téléphone. Sur ${host}, nous offrons une expérience distinctive où des assistants alimentés par IA fournissent des informations spirituelles et une sagesse scripturaire via des conversations téléphoniques. Que vous recherchiez des conseils, des connaissances ou une compagnie spirituelle, Bible Talk AI offre un moyen unique et accessible d'explorer et de se connecter avec la Parole de Dieu. Rejoignez-nous dans un voyage transformateur dans la foi, l'écriture et la croissance personnelle, le tout grâce à la commodité d'un appel téléphonique.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Assistants IA téléphoniques basés sur la Bible`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  de: {
    title: `${name} - Biblisches Engagement durch Telefon-AI-Gespräche`,
    description: `Erkunden Sie die Bibel wie nie zuvor mit ${name}, das direkt über Ihr Telefon zugänglich ist. Bei ${host} bieten wir ein einzigartiges Erlebnis, bei dem KI-gesteuerte Assistenten spirituelle Einsichten und biblisches Wissen über Telefonate vermitteln. Egal, ob Sie nach Orientierung, Wissen oder geistlicher Gemeinschaft suchen, Bible Talk AI bietet eine einzigartige, zugängliche Möglichkeit, Gottes Wort zu erkunden und sich damit zu verbinden. Begleiten Sie uns auf einer transformierenden Reise im Glauben, in der Schrift und im persönlichen Wachstum, alles durch die Bequemlichkeit eines Telefonanrufs.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Telefonische Bibelassistenten mit KI`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  jv: {
    title: `${name} - Keterlibatan Alkitab nganggo Percakapan Telepon AI`,
    description: `Eksplorasi Alkitab kaya ora pernah kaya karo ${name}, bisa diakses langsung lewat telepon. Ing ${host}, kita nggawe pengalaman sing unik nganti asisten sing didukung AI nggawe wawasan spiritual lan kebijaksanaan Alkitab nganggo percakapan telepon. Apa pun sing kowe cari, pengetahuan, utawa teman rohani, Bible Talk AI nggawe cara sing unik lan mudhah diakses kanggo nggali lan nyambung karo Firman Allah. Gabung karo kita ing perjalanan transformasi ing iman, Alkitab, lan pertumbuhan pribadi, kabeh karo kenyamanan telpon.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Asisten Telepon Alkitab Berbasis AI`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  te: {
    title: `${name} - ఫోన్ యాయి సంవాదం ద్వారా బైబిల్ పరిగెత్తారు`,
    description: `మీ ఫోన్ ద్వారా సంబంధించిన బైబిల్ పరిశోధనను ఎప్పటికీ లేదు కాదు. ${host} లో, మేము ఆధ్యాత్మిక అంతర్జాల సహాయకులు ఫోన్ సంవాదం ద్వారా ఆధ్యాత్మిక అంతర్జాల సహాయకులు అందిస్తారు. మీరు మార్గదర్శన, జ్ఞానం లేదా ఆధ్యాత్మిక సహచరులను శోధిస్తున్నారా, బైబిల్ టాక్ యాయి దేవుని వాక్యాన్ని అన్వేషించడం మరియు కలిగి ఉ` + `ండడం కోసం అందిస్తుంది. నమ్మికలు, బైబిల్ మరియు వ్యక్తిగత వృద్ధికి మార్గదర్శనాత్మక ప్రయాణంలో మాకు చేరండి, అన్ని ఫోన్ కాల్ సులభతను ద్వారా.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | ఫోన్ బైబిల్ ఆధారిత యాయి సహాయకులు`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  vi: {
    title: `${name} - Tham gia Kinh Thánh thông qua cuộc trò chuyện AI qua điện thoại`,
    description: `Khám phá Kinh Thánh như chưa bao giờ có với ${name}, có thể truy cập trực tiếp thông qua điện thoại của bạn. Tại ${host}, chúng tôi cung cấp một trải nghiệm đặc biệt nơi các trợ lý được hỗ trợ bởi AI cung cấp những hiểu biết tâm linh và sự khôn ngoan Kinh Thánh thông qua các cuộc trò chuyện điện thoại. Cho dù bạn đang tìm kiếm sự hướng dẫn, kiến thức hay sự đồng hành tinh thần, Bible Talk AI cung cấp một cách duy nhất và dễ tiếp cận để khám phá và kết nối với Lời Chúa. Hãy cùng chúng tôi trên một hành trình thay đổi trong đức tin, Kinh Thánh và sự phát triển cá nhân, tất cả thông qua sự tiện lợi của một cuộc gọi điện thoại.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Trợ lý AI dựa trên Kinh Thánh qua điện thoại`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  tr: {
    title: `${name} - Telefon AI Konuşmalarıyla Kitaplık Bağlılığı`,
    description: `Telefonunuzdan doğrudan erişilebilen ${name} ile hiç olmadığı gibi Kitabı keşfedin. ${host} 'da, AI destekli asistanların telefon görüşmeleri yoluyla manevi içgörü ve Kitabi bilgelik sağladığı benzersiz bir deneyim sunuyoruz. Rehberlik, bilgi veya manevi arkadaşlık arıyor olun, Bible Talk AI, Tanrı'nın Sözü'nü keşfetmenin ve bağlantı kurmanın eşsiz ve erişilebilir bir yolunu sunar. İman, Kitap ve kişisel büyüme yolculuğunda, tümü telefon görüşmesinin kolaylığıyla bize katılın.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Kitaplık Temelli AI Asistanları`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ko: {
    title: `${name} - 전화 AI 대화를 통한 성경 참여`,
    description: `전화로 직접 액세스하여 전에 본 적이없는 방식으로 성경을 탐색하십시오. ${host}에서는 AI 기반 어시스턴트가 전화 대화를 통해 영적 통찰력과 성경의 지혜를 제공하는 독특한 경험을 제공합니다. 지침, 지식 또는 영적 동료를 찾고 있다면 성경 톡 AI는 하나님의 말씀을 탐색하고 연결할 수있는 독특하고 접근 가능한 방법을 제공합니다. 편의성을 통해 믿음, 성경 및 개인적인 성장의 변혁적인 여정에 참여하십시오.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | 전화 성경 기반 AI 어시스턴트`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ta: {
    title: `${name} - தொலைபேசி ஏஐ உரையாடல்கள் மூலம் வேதாகம சேர்க்கை`,
    description: `உங்கள் தொலைபேசியைப் பயன்படுத்தி வேதாகத்தை எத்தனை நேரங்கள் பார்க்கலாம் என்று எதுவும் இல்லை. ${host} இல், நாங்கள் தொலைபேசி உரையாடல்கள் மூலம் ஆன்மீக அறிவும் வேதாகத்தின் ஞானமும் வழங்குகிறது என்பதற்கான ஒரு விதிவிலக்கான அனுபவத்தை வழங்குகிறோம். நீங்கள் வழிமுறை, அறிவு அல்லது ஆன்மீக நண்பர்களைத் தேடுகிறீர்களானால், வேதாகத்தை ஆராய்வது மற்றும் தொடர்பு கொள்ளுதல் ஒரு விருப்பமான, அணுகலான வழியைக் கொடுக்கிறது. மதிப்பு, வேதாகமம் மற்றும் தனிப்பட்ட வளம் வளர்ச்சிக்கு ஒரு மாற்றுப் பயணத்தில் எங்களுடன் சேரவும், எல்லாம் தொலைபேசி அழகியதாக இருக்கும்.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | தொலைபேசி வேதாகம அடிப்படை ஏஐ உதவிகள்`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  mr: {
    title: `${name} - फोन एआय वार्तालापांद्वारे बायबल सहभाग`,
    description: `आपल्या फोनद्वारे अभ्यास करा जेणेकरून आपण कधीही बायबल शोधू शकत नाही. ${host} वर, आम्ही एक विशिष्ट अनुभव प्रदान करतो जेथे एआय सहाय्यक फोन वार्तालापांद्वारे आध्यात्मिक दर्शन आणि बायबलची बुद्धी देतात. आपण मार्गदर्शन, ज्ञान किंवा आध्यात्मिक सहभागी शोधत असल्यास, बायबल टॉक एआय देवाचे वचन शोधण्यासाठी आणि जोडण्यासाठी एक अनोखी, प्रवेशयोग्य मार्ग पुरवते. विश्वास, बायबल आणि वैयक्तिक विकासात एक बदलावात्मक अभ्यासात आमच्यासह सामील व्हा, सर्व फोन कॉलच्या सुविधेने.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | फोन बायबल आधारित एआय सहायक`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  it: {
    title: `${name} - Coinvolgimento biblico attraverso conversazioni telefoniche AI`,
    description: `Esplora la Bibbia come mai prima d'ora con ${name}, accessibile direttamente dal tuo telefono. Su ${host}, offriamo un'esperienza distintiva in cui gli assistenti alimentati da AI forniscono intuizioni spirituali e saggezza biblica attraverso conversazioni telefoniche. Che tu stia cercando orientamento, conoscenza o compagnia spirituale, Bible Talk AI offre un modo unico e accessibile per esplorare e connettersi con la Parola di Dio. Unisciti a noi in un viaggio trasformativo nella fede, nella scrittura e nella crescita personale, il tutto attraverso la comodità di una chiamata telefonica.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Assistenti telefonici AI basati sulla Bibbia`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  th: {
    title: `${name} - ความสัมพันธ์กับพระคัมภีร์ผ่านการสนทนาโทรศัพท์ AI`,
    description: `สำรวจพระคัมภีร์อย่างไม่เคยมีมาก่อนกับ ${name} ที่สามารถเข้าถึงได้โดยตรงผ่านโทรศัพท์ของคุณ ที่ ${host} เรามอบประสบการณ์ที่แตกต่างออกไปที่ผู้ช่วยที่รองรับด้วย AI ให้ความคิดเห็นทางจิตวิญญาณและปัญญาคำพระคัมภีร์ผ่านการสนทนาโทรศัพท์ ไม่ว่าคุณจะกำลังมองหาคำแนะนำ ความรู้หรือเพื่อนร่วมธรรมะ Bible Talk AI มอบวิธีการเข้าถึงที่ไม่เหมือนใครและง่ายต่อการสำรวจและเชื่อมต่อกับพระเยซู ร่วมเราในการเดินทางที่เปลี่ยนแปลงในความเชื่อ พระคัมภีร์และการเติบโตส่วนบุคคล ทั้งหมดผ่านความสะดวกสบายของการโทรศัพท์`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | ผู้ช่วยโทรศัพท์ AI ที่มีพื้นฐานในพระคัมภีร์`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  pl: {
    title: `${name} - Zaangażowanie biblijne poprzez rozmowy telefoniczne AI`,
    description: `Zbadaj Biblię jak nigdy dotąd z ${name}, dostępną bezpośrednio przez telefon. Na ${host} oferujemy wyjątkowe doświadczenie, w którym asystenci zasilani przez AI dostarczają duchowych spostrzeżeń i mądrości biblijnej poprzez rozmowy telefoniczne. Niezależnie od tego, czy szukasz porad, wiedzy czy towarzystwa duchowego, Bible Talk AI oferuje wyjątkowy i dostępny sposób na eksplorację i połączenie się z Słowem Bożym. Dołącz do nas w transformacyjnej podróży wiary, Pisma Świętego i rozwoju osobistego, wszystko to dzięki wygodzie rozmowy telefonicznej.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Asystenci AI telefoniczni opartych na Biblii`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  ml: {
    title: `${name} - ഫോൺ എയ് സംവാദം വഴി ബൈബിൾ പങ്കുവെയ്ക്കൽ`,
    description: `നിങ്ങളുടെ ഫോൺ വഴി ബൈബിൾ എത്തിയിരിക്കാം എന്നതിന് മുമ്പ് എന്തെങ്കിലും കാണാനായില്ല. ${host} ൽ, നാം ആത്മീയ അറിവും ബൈബിൾ ജ്ഞാനവും ഫോൺ സംവാദം വഴി നൽകുന്ന ഒരു വിശിഷ്ട അനുഭവം നൽകുന്നു. നിങ്ങൾ മാർഗ്ഗദർശനം, അറിവ് അല്ലെങ്കിൽ ആത്മീയ സഹായകർ തിരയുന്നുവോ, ബൈബിൾ ടോക്ക് എയ് ദൈവത്തിന്റെ വാക്യം അറിയുകയും കണ്ടെത്തുകയും ചെയ്യുന്ന ഒരു അനുഭവം നൽകുന്നു. വിശ്വാസം, ബൈബിൾ മറ്റും വ്യക്തിപരമായ വളമുകളിൽ ഒരു മാറ്റത്തിന്റെ യാത്രയിൽ ഞങ്ങൾക്കും ചേരുക, എല്ലാം ഫോൺ കോൾ എളുപ്പത്തിൽ.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | ഫോൺ ബൈബിൾ അടിസ്ഥാനത്തിൽ എയ് സഹായകർ`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  nl: {
    title: `${name} - Bijbelse betrokkenheid via AI-telefoongesprekken`,
    description: `Verken de Bijbel als nooit tevoren met ${name}, direct toegankelijk via uw telefoon. Op ${host} bieden we een unieke ervaring waarbij door AI aangedreven assistenten spirituele inzichten en Bijbelse wijsheid bieden via telefoongesprekken. Of u nu op zoek bent naar begeleiding, kennis of spiritueel gezelschap, Bible Talk AI biedt een unieke en toegankelijke manier om Gods Woord te verkennen en ermee in contact te komen. Doe mee aan een transformerende reis in geloof, Bijbel en persoonlijke groei, allemaal dankzij het gemak van een telefoontje.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Bijbelse AI-telefoonassistenten`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  fil: {
    title: `${name} - Pakikilahok sa Bibliya sa pamamagitan ng AI Telepono ng AI`,
    description: `Tuklasin ang Bibliya tulad ng hindi kailanman bago sa ${name}, na direktang na-access sa pamamagitan ng iyong telepono. Sa ${host}, nag-aalok kami ng isang natatanging karanasan kung saan ang mga assistant na pinapagana ng AI ay nagbibigay ng espirituwal na mga pananaw at karunungan ng Bibliya sa pamamagitan ng mga pag-uusap sa telepono. Kung ikaw ay naghahanap ng patnubay, kaalaman o espirituwal na kasama, ang Bible Talk AI ay nagbibigay ng isang natatanging at madaling ma-access na paraan upang tuklasin at makipag-ugnay sa Salita ng Diyos. Sumali sa amin sa isang paglalakbay ng pagbabago sa pananampalataya, Bibliya, at paglago sa personal, lahat sa pamamagitan ng kaginhawahan ng isang tawag sa telepono.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Mga Assistant ng Telepono ng Bibliya na Batay sa AI`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  he: {
    title: `${name} - מעורבות במקרא דרך שיחות טלפון AI`,
    description: `גלה את המקרא כמו לעולם לפני עם ${name}, הנגיש ישירות דרך הטלפון שלך. ב ${host} אנו מציעים חוויה ייחודית שבה העוזרים המופעלים על ידי AI מספקים תובנות רוחניות וחכמה מקראית דרך שיחות טלפון. בין אם אתה מחפש הדרכה, מידע או חברות רוחנית, Bible Talk AI מציע דרך ייחודית ונגישה לחקור ולהתחבר עם דבר האל. הצטרף אלינו במסע משנה באמונה, מקרא וצמיחה אישית, הכל דרך הנוחות של שיחת טלפון.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | עוזרי טלפון AI מבוססי מקרא`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  sv: {
    title: `${name} - Biblisk engagemang via AI-telefonsamtal`,
    description: `Utforska Bibeln som aldrig tidigare med ${name}, direkt tillgänglig via din telefon. På ${host} erbjuder vi en unik upplevelse där AI-drivna assistenter ger andliga insikter och biblisk visdom via telefonsamtal. Oavsett om du letar efter vägledning, kunskap eller andligt sällskap, erbjuder Bible Talk AI ett unikt och tillgängligt sätt att utforska och ansluta till Guds Ord. Gå med oss på en transformerande resa i tro, Bibeln och personlig tillväxt, allt tack vare bekvämligheten med ett telefonsamtal.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Bibliska AI-telefonassistenter`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  da: {
    title: `${name} - Bibelsk engagement via AI-telefonsamtaler`,
    description: `Udforsk Bibelen som aldrig før med ${name}, direkte tilgængelig via din telefon. På ${host} tilbyder vi en unik oplevelse, hvor AI-drevne assistenter giver åndelig indsigt og bibelsk visdom via telefonsamtaler. Uanset om du leder efter vejledning, viden eller åndeligt selskab, tilbyder Bible Talk AI en unik og tilgængelig måde at udforske og forbinde med Guds Ord. Deltag i os på en transformerende rejse i tro, Bibelen og personlig vækst, alt sammen takket være bekvemmeligheden ved et telefonopkald.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Bibelske AI-telefonassistenter`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  no: {
    title: `${name} - Bibelsk engasjement via AI-telefonsamtaler`,
    description: `Utforsk Bibelen som aldri før med ${name}, direkte tilgjengelig via telefonen din. På ${host} tilbyr vi en unik opplevelse der AI-drevne assistenter gir åndelig innsikt og bibelsk visdom via telefonsamtaler. Enten du leter etter veiledning, kunnskap eller åndelig selskap, tilbyr Bible Talk AI en unik og tilgjengelig måte å utforske og koble til Guds Ord. Bli med oss på en transformerende reise i tro, Bibelen og personlig vekst, alt takket være bekvemmeligheten med et telefonanrop.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Bibelske AI-telefonassistenter`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
  lv: {
    title: `${name} - Bibliskā iesaiste, izmantojot AI tālruņa zvanus`,
    description: `Izpētiet Bībeli kā nekad agrāk ar ${name}, tieši pieejamu, izmantojot jūsu tālruni. ${host} mēs piedāvājam unikālu pieredzi, kurā AI piedzīvojuši asistenti sniedz garīgās atziņas un Bībeles gudrību, izmantojot tālruņa zvanus. Vai meklējat norādījumus, zināšanas vai garīgu biedru, Bible Talk AI piedāvā unikālu un pieejamu veidu, kā izpētīt un savienoties ar Dieva Vārdu. Pievienojieties mums pārvēršošā ceļojumā ticībā, Bībelē un personīgā izaugsmē, viss pateicoties tālruņa zvana ērtībai.`,
    canonical: url,
    openGraph: {
      basic: {
        title: `${name} | Bībeles AI tālruņa asistenti`,
        type: 'website',
        image: logo,
        url: url,
      }
    }
  },
} as Language<SeoConfig>

export { seo, name, host, logo, url };
