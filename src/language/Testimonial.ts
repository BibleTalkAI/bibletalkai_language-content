import type { Language } from "../language";

interface Section {
  alt: string;
  quote: {
    text: string;
    book: string;
    verse: string;
  };
}

const content = {
  en: {
    alt: "Picture of the Holy Bible and praying hands",
    quote: {
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      book: "Philippians",
      verse: "4:6-7",
    },
  },
  zh: {
    alt: "圣经和祈祷的手的图片",
    quote: {
      text: "应当一无挂虑，只要凡事藉着祷告、祈求和感谢，将你们所要的告诉神。神所赐出人意外的平安，必在基督耶稣里保守你们的心怀意念。",
      book: "腓立比书",
      verse: "4:6-7",
    },
  },
  hi: {
    alt: "पवित्र बाइबल और प्रार्थना करने वाले हाथों की तस्वीर",
    quote: {
      text: "किसी भी बात के लिए चिंतित न हो, परन्तु हर बात में प्रार्थना और विनय के साथ धन्यवाद के साथ परमेश्वर के सामने अपनी याचनाएँ प्रस्तुत करो। और जो परमेश्वर की शान्ति है, जो सब बुद्धि से ऊपर है, वह तुम्हारे दिलों और तुम्हारे विचारों को यीशु मसीह में रक्षा करेगी।",
      book: "फिलिप्पियों के लिए पत्र",
      verse: "4:6-7",
    },
  },
  es: {
    alt: "Imagen de la Santa Biblia y manos orando",
    quote: {
      text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
      book: "Filipenses",
      verse: "4:6-7",
    },
  },
  ar: {
    alt: "صورة من الكتاب المقدس واليدين المصليتين",
    quote: {
      text: "لا تهتموا بشيء، بل في كل شيء بالصلاة والتضرع مع الشكر لتعرضوا طلباتكم على الله. وسلام الله الذي يفوق كل عقل، يحفظ قلوبكم وأفكاركم في المسيح يسوع.",
      book: "فيلبي",
      verse: "4:6-7",
    },
  },
  bn: {
    alt: "পবিত্র বাইবেল এবং প্রার্থনা করা হাতের ছবি",
    quote: {
      text: "কিছুই চিন্তা করবেন না, তবে প্রতিটি পরিস্থিতিতে প্রার্থনা ও অনুগ্রহের সঙ্গে আপনার অনুরোধগুলি ঈশ্বরের সামনে উপস্থাপন করুন। এবং যিনি সব বোধহয় অতিক্রম করে, তিনি তাঁর পুত্র যীশু খ্রীষ্টের মধ্যে আপনার হৃদয় এবং মন রক্ষা করবেন।",
      book: "ফিলিপিয়ায়",
      verse: "4:6-7",
    },
  },
  pt: {
    alt: "Imagem da Santa Bíblia e mãos orando",
    quote: {
      text: "Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos conhecidos diante de Deus pela oração e súplica com ações de graças; e a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.",
      book: "Filipenses",
      verse: "4:6-7",
    },
  },
  ru: {
    alt: "Изображение Святой Библии и молящихся рук",
    quote: {
      text: "Не будьте ни в чём соллици́тельны, но во всём — моли́твою и проше́нием с благода́рением — явля́йте Бо́гу свои́ проше́ния, и мир Бо́жий, превы́шающий вся́кий ум, сохрани́т сердца́ ва́ши и помышле́ния ва́ши во Христе́ Иису́се.",
      book: "Филиппийцам",
      verse: "4:6-7",
    },
  },
  ja: {
    alt: "聖書と祈る手の画像",
    quote: {
      text: "何も心配しないで、あらゆる場合に、感謝をもって祈りと願いを神に申し上げなさい。そうすれば、すべての人の理解を超えた神の平安が、あなたがたの心と思いを、キリスト・イエスにあって守ってくださるでしょう。",
      book: "ピリピ人への手紙",
      verse: "4:6-7",
    },
  },
  ur: {
    alt: "مقدس کتاب و دعا کرنے والے ہاتھوں کی تصویر",
    quote: {
      text: "کسی بات کے لئے پریشان نہ ہو، بلکہ ہر حالت میں دعا اور درخواست کے ساتھ شکر گزاری کے ساتھ اپنی درخواستیں خدا کے سامنے رکھو۔ اور خدا کی اس سکون کی جو ہر سمجھ سے بڑھ کر ہے، تمہارے دلوں اور تمہارے خیالات کو مسیح یسوع میں محفوظ رکھے گا۔",
      book: "فلپیوں",
      verse: "4:6-7",
    },
  },
  id: {
    alt: "Gambar Alkitab Suci dan tangan berdoa",
    quote: {
      text: "Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur. Dan damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus.",
      book: "Filipi",
      verse: "4:6-7",
    },
  },
  ms: {
    alt: "Gambar Alkitab Suci dan tangan berdoa",
    quote: {
      text: "Janganlah kamu kuatir tentang apa-apa juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur. Dan damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus.",
      book: "Filipi",
      verse: "4:6-7",
    },
  },
  fr: {
    alt: "Image de la Sainte Bible et des mains en prière",
    quote: {
      text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
      book: "Philippiens",
      verse: "4:6-7",
    },
  },
  de: {
    alt: "Bild der Heiligen Bibel und betende Hände",
    quote: {
      text: "Sorgt euch um nichts, sondern in allen Dingen lasst eure Bitten in Gebet und Flehen mit Danksagung vor Gott kundwerden! Und der Friede Gottes, der höher ist als alle Vernunft, wird eure Herzen und Sinne in Christus Jesus bewahren.",
      book: "Philipper",
      verse: "4:6-7",
    },
  },
  jv: {
    alt: "Gambar Alkitab Suci lan tangan ngadeg",
    quote: {
      text: "Ora usah kuwatir babagan apa wae, nanging ing kabeh kasus, nggihake keinginanmu kanggo Gusti Allah kanthi doa lan permohonan kanthi ngucap syukur. Lan kasedhiyaan Allah, sing luwih saka kabeh akal, bakal ngawasi ati lan pikiranmu ing Kristus Yesus.",
      book: "Filipi",
      verse: "4:6-7",
    },
  },
  te: {
    alt: "పవిత్ర బైబిల్ మరియు ప్రార్థించే చేతుల చిత్రం",
    quote: {
      text: "ఏ విషయంపై చింతించకూడదు, కానీ ప్రతి పరిస్థితిలో ప్రార్థన మరియు వినయంతో మీ అభీష్టాలను దేవుని ముందుకు తెచ్చినప్పుడు ధన్యవాదాలతో చెప్పండి. మరియు అక్కడ ఉన్న దేవుని శాంతి, అక్కడ ఉన్న అర్థంపై అధికంగా ఉంటుంది, మీ హృదయాలను మరియు మీ మనస్సులను క్రీస్తు యేసులో కాపాడుతుంది.",
      book: "ఫిలిప్పీయులకు పత్రిక",
      verse: "4:6-7",
    },
  },
  vi: {
    alt: "Hình ảnh Kinh Thánh Thánh và bàn tay cầu nguyện",
    quote: {
      text: "Đừng lo lắng về điều gì cả, nhưng trong mọi tình huống, hãy đưa ra những yêu cầu của bạn trước mặt Thiên Chúa trong cầu nguyện và lời cầu xin với lời cảm tạ. Và sự bình an của Thiên Chúa, vượt trội hơn mọi sự hiểu biết, sẽ gìn giữ trái tim và tâm trí của bạn trong Đấng Christ Jesus.",
      book: "Phi-líp",
      verse: "4:6-7",
    },
  },
  tr: {
    alt: "Kutsal Kitap ve dua eden ellerin resmi",
    quote: {
      text: "Hiçbir şeyden endişe etmeyin, ancak her durumda, dua ve yalvarışla, şükranla Tanrı'ya dileklerinizi sunun. Ve her şeyden anlayışın ötesinde olan Tanrı'nın huzuru, yüreklerinizi ve düşüncelerinizi Mesih İsa'da koruyacaktır.",
      book: "Filipililer",
      verse: "4:6-7",
    },
  },
  ko: {
    alt: "성경과 기도하는 손의 사진",
    quote: {
      text: "아무것도 염려하지 말고 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라. 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라.",
      book: "빌립보서",
      verse: "4:6-7",
    },
  },
  ta: {
    alt: "பரிசுத்த வேதாகமம் மற்றும் தெய்வத்திற்கு கைகள் மேல் பிரார்த்திக்கும் படம்",
    quote: {
      text: "எந்த விஷயத்திலும் கவலைப்படாதே, ஆனால் எல்லா வழியிலும் தேவனுக்கு நீங்கள் விரும்பும் விஷயங்களை நன்றாக தெளிவாக சொல்லுங்கள். அதனால் நீங்கள் கேட்கும் விஷயங்களை தேவனுக்கு நீங்கள் விரும்பும் வழியில் கேட்கவும், அதனால் நீங்கள் கேட்கும் விஷயங்களை தேவன் நீங்கள் கேட்கும் வழியில் கேட்கவும், அதனால் நீங்கள் கேட்கும் விஷயங்களை தேவன் நீங்கள் கேட்கும் வழியில் கேட்கவும், அதனால் நீங",
      book: "பிலிப்பியர்க்குத் திருப்பாடல்",
      verse: "4:6-7",
    },
  },
  mr: {
    alt: "पवित्र बायबल आणि प्रार्थना करणार्या हातांची चित्रे",
    quote: {
      text: "काहीही चिंता करू नका, पण प्रत्येक परिस्थितीत, धन्यवादासह प्रार्थना आणि विनंतीद्वारे तुमच्या विनंत्या देवाला सांगा. आणि ज्ञानापेक्षा जास्त देवाची शांती तुमचे हृदय आणि तुमचे विचार ख्रिस्त येशूमध्ये रक्षित करेल.",
      book: "फिलिप्पी",
      verse: "4:6-7",
    },
  },
  it: {
    alt: "Immagine della Santa Bibbia e mani in preghiera",
    quote: {
      text: "Non preoccupatevi di nulla, ma in ogni cosa fate conoscere le vostre richieste a Dio con preghiere e suppliche e con ringraziamenti. E la pace di Dio, che sorpassa ogni intelligenza, custodirà i vostri cuori e le vostre menti in Cristo Gesù.",
      book: "Filippesi",
      verse: "4:6-7",
    },
  },
  th: {
    alt: "ภาพพระคัมภีร์และมือที่สวดมนต์",
    quote: {
      text: "อย่ากังวลเรื่องใดๆ แต่ในทุกสถานการณ์ ให้สวดมนต์และขอร้องพร้อมกับขอบคุณ แล้วนำความปรารถนาของคุณไปยังพระเจ้า และความสงบของพระเจ้าที่เกินกว่าความเข้าใจทุกอย่างจะคุ้มครองหัวใจและจิตใจของคุณในพระเยซูคริสต์",
      book: "ฟีลิปปี",
      verse: "4:6-7",
    },
  },
  pl: {
    alt: "Obraz Świętej Biblii i modlących się rąk",
    quote: {
      text: "Nie martwcie się o nic, ale we wszystkim, w modlitwie i błaganiu, z dziękczynieniem, składajcie swoje prośby Bogu. A pokój Boży, który przewyższa wszelki rozum, będzie strzegł waszych serc i myśli w Chrystusie Jezusie.",
      book: "List do Filipian",
      verse: "4:6-7",
    },
  },
  ml: {
    alt: "പരിശുദ്ധ ബൈബിൾ മറ്റും പ്രാർത്ഥിക്കുന്ന കൈകൾക്കുള്ള ചിത്രം",
    quote: {
      text: "ഏതെങ്കിലും കാര്യത്തിലും ചിന്തിക്കരുത്, പ്രാർത്ഥനയും വിനയവും സഹിതം നിങ്ങളുടെ ആഗ്രഹങ്ങളെ ദൈവത്തിന് അറിയിക്കുക. അതിനാൽ എല്ലാ പരിസ്ഥിതികളിലും നിങ്ങളുടെ ആഗ്രഹങ്ങൾ ദൈവത്തിന് അറിയിക്കുക. ദൈവത്തിന്റെ ശാന്തി, എല്ലാ ബുദ്ധിയും അതിക്രമിക്കുന്നതിനും കൂടുതൽ ഉയർന്നതലത്തിലാണ് നിങ്ങളുടെ ഹൃദയവും മനസ്സും ക്രിസ്തു യേശുവിൽ സംരക്ഷിക്കും.",
      book: "ഫിലിപ്പിയർക്കെഴുതിയ ലേഖനം",
      verse: "4:6-7",
    },
  },
  nl: {
    alt: "Afbeelding van de Heilige Bijbel en biddende handen",
    quote: {
      text: "Wees over niets bezorgd, maar laat in alles uw verzoeken door gebed en smeking met dankzegging bekend worden bij God. En de vrede van God, die alle begrip te boven gaat, zal uw harten en uw gedachten bewaken in Christus Jezus.",
      book: "Filippenzen",
      verse: "4:6-7",
    },
  },
  fil: {
    alt: "Larawan ng Banal na Bibliya at mga kamay na nananalangin",
    quote: {
      text: "Huwag kayong mabalisa sa anumang bagay; kundi sa lahat ng mga bagay sa pamamagitan ng panalangin at daing na may pagpapasalamat ay ipakilala ninyo ang inyong mga kahilingan sa Dios. At ang kapayapaan ng Dios, na higit na dakila kay sa lahat ng pagiisip, ay magiingat sa inyong mga puso at sa inyong mga pagiisip kay Cristo Jesus.",
      book: "Mga Taga-Filipos",
      verse: "4:6-7",
    },
  },
  he: {
    alt: "תמונה של התנ\"ך הקדוש וידיים מתפללות",
    quote: {
      text: "אל תדאגו לכלום, אך בכל דבר בתפילה ובתחנונים עם תודה תודיעו את בקשותיכם לאלוהים. ושלום אלוהים, שעולה על כל ההבנה, ישמור על לבבכם ועל מחשבותיכם במשיח ישו.",
      book: "פיליפים",
      verse: "4:6-7",
    },
  },
  sv: {
    alt: "Bild av den heliga bibeln och bönhänder",
    quote: {
      text: "Var inte oroliga för någonting, utan låt i allt era önskningar komma inför Gud i bön och åkallan med tacksägelse. Och Guds frid, som övergår allt förstånd, skall bevara era hjärtan och era sinnen i Kristus Jesus.",
      book: "Filipperbrevet",
      verse: "4:6-7",
    },
  },
  da: {
    alt: "Billede af den Hellige Bibel og bedende hænder",
    quote: {
      text: "Vær ikke bekymret for noget, men lad i alle ting jeres ønsker komme frem for Gud i bøn og påkaldelse med tak. Og Guds fred, som overgår al forstand, skal bevare jeres hjerter og jeres sind i Kristus Jesus.",
      book: "Filipperne",
      verse: "4:6-7",
    },
  },
  no: {
    alt: "Bilde av den Hellige Bibelen og bønnende hender",
    quote: {
      text: "Vær ikke bekymret for noe, men la alle deres ønsker komme frem for Gud i bønn og påkallelse med takk. Og Guds fred, som overgår all forstand, skal bevare deres hjerter og deres sinn i Kristus Jesus.",
      book: "Filipperne",
      verse: "4:6-7",
    },
  },
  lv: {
    alt: "Attēls ar Svēto Bībeli un lūdzamām rokām",
    quote: {
      text: "Neraizējieties par neko, bet visās lietās ar lūgšanām un lūgumiem, ar pateicību, pasludiniet savas vēlmes Dieva priekšā. Un Dieva miers, kas pārsniedz visu prātu, pasargās jūsu sirdis un prātus Kristū Jēzū.",
      book: "Filipiešiem",
      verse: "4:6-7",
    },
  },
} as Language<Section>;

export { content };
