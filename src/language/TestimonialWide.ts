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
    alt: 'Picture of an open Bible',
    quote: {
      text: 'Call to me and I will answer you and tell you great and unsearchable things you do not know.',
      book: 'Jeremiah',
      verse: '33:3'
    }
  },
  zh: {
    alt: '打开圣经的图片',
    quote: {
      text: '你呼求我，我就应允你，你还未说话，我就垂听你。',
      book: '耶利米书',
      verse: '33:3'
    }
  },
  hi: {
    alt: 'एक खुली बाइबल की तस्वीर',
    quote: {
      text: 'मुझे पुकारो और मैं तुम्हें जवाब दूंगा और तुम्हें बड़ी और खोजने योग्य बातें बताऊंगा जिन्हें तुम नहीं जानते।',
      book: 'यिर्मयाह',
      verse: '33:3'
    }
  },
  es: {
    alt: 'Imagen de una Biblia abierta',
    quote: {
      text: 'Clama a mí y te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.',
      book: 'Jeremías',
      verse: '33:3'
    }
  },
  ar: {
    alt: 'صورة لكتاب مفتوح',
    quote: {
      text: 'ادعني فأجيبك وأخبرك بأمور عظيمة وعجيبة لا تعرفها.',
      book: 'إرميا',
      verse: '33:3'
    }
  },
  bn: {
    alt: 'একটি খোলা বাইবেলের ছবি',
    quote: {
      text: 'আমাকে ডাকুন এবং আমি আপনাকে উত্তর দেব এবং আপনাকে বড় এবং অনুসন্ধানযোগ্য বিষয় বলবো যা আপনি জানেন না।',
      book: 'যেরেমিয়া',
      verse: '33:3'
    }
  },
  pt: {
    alt: 'Imagem de uma Bíblia aberta',
    quote: {
      text: 'Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.',
      book: 'Jeremias',
      verse: '33:3'
    }
  },
  ru: {
    alt: 'Изображение открытой Библии',
    quote: {
      text: 'Призови Меня, и Я отвечу тебе, и возвещу тебе великое и недоступное, чего ты не знаешь.',
      book: 'Иеремия',
      verse: '33:3'
    }
  },
  ja: {
    alt: '開いた聖書の画像',
    quote: {
      text: 'わたしに呼ばわれよ。そうすれば、わたしはあなたに答え、あなたに知らない偉大なこと、秘密のことを示そう。',
      book: 'エレミヤ',
      verse: '33:3'
    }
  },
  ur: {
    alt: 'کھلا کتاب مقدس کا تصویر',
    quote: {
      text: 'مجھے پکارو اور میں تمہیں جواب دوں گا اور تمہیں بڑی بڑی اور ناقابل تلاش باتیں بتاؤں گا جو تم نہیں جانتے۔',
      book: 'ارمیا',
      verse: '33:3'
    }
  },
  id: {
    alt: 'Gambar Alkitab terbuka',
    quote: {
      text: 'Serulah Aku, maka Aku akan menjawabmu dan akan memberitahukan kepadamu hal-hal yang besar dan yang tidak dapat kamu ketahui.',
      book: 'Yeremia',
      verse: '33:3'
    }
  },
  ms: {
    alt: 'Gambar Alkitab terbuka',
    quote: {
      text: 'Serulah Aku, maka Aku akan menjawabmu dan akan memberitahukan kepadamu hal-hal yang besar dan yang tidak dapat kamu ketahui.',
      book: 'Yeremia',
      verse: '33:3'
    }
  },
  fr: {
    alt: 'Image d\'une Bible ouverte',
    quote: {
      text: 'Invoque-moi, et je te répondrai; Je t\'annoncerai de grandes choses, des choses cachées, Que tu ne connais pas.',
      book: 'Jérémie',
      verse: '33:3'
    }
  },
  de: {
    alt: 'Bild einer offenen Bibel',
    quote: {
      text: 'Rufe mich an, und ich will dir antworten und will dir kundtun große und unfassbare Dinge, von denen du nichts weißt.',
      book: 'Jeremia',
      verse: '33:3'
    }
  },
  jv: {
    alt: 'Gambar Alkitab terbuka',
    quote: {
      text: 'Serulah Aku, maka Aku akan menjawabmu dan akan memberitahukan kepadamu hal-hal yang besar dan yang tidak dapat kamu ketahui.',
      book: 'Yeremia',
      verse: '33:3'
    }
  },
  te: {
    alt: 'తెరవిన బైబిల్ యొక్క చిత్రం',
    quote: {
      text: 'నాకు పిలవండి, నేను మీరిని సమాధానిస్తాను, మీరు తెలియని విషయాలను మీకు తెలియజేస్తాను.',
      book: 'యిర్మీయాహు',
      verse: '33:3'
    }
  },
  vi: {
    alt: 'Hình ảnh Kinh Thánh mở',
    quote: {
      text: 'Hãy kêu cầu Ta, Ta sẽ trả lời và sẽ cho ngươi biết những điều vĩ đại và khó tìm, ngươi chưa biết.',
      book: 'Giê-rê-mi',
      verse: '33:3'
    }
  },
  tr: {
    alt: 'Açık bir Kutsal Kitap resmi',
    quote: {
      text: 'Bana yakarın, size cevap vereceğim ve bilmediğiniz büyük ve erişilmez şeyleri size bildireceğim.',
      book: 'Yeremya',
      verse: '33:3'
    }
  },
  ko: {
    alt: '열린 성경의 사진',
    quote: {
      text: '내게 부르짖으라. 그러면 내가 네게 응답하고 네가 알지 못하는 크고 놀라운 일을 네게 알려주리라.',
      book: '예레미야',
      verse: '33:3'
    }
  },
  ta: {
    alt: 'திறந்த வேதாகமத்தின் படம்',
    quote: {
      text: 'என்னை விழுங்குங்கள், நான் உங்களுக்கு பதிலளிக்கிறேன்; நீங்கள் அறியாத பெரும் மற்றும் அறிய முடியாத விஷயங்களை உங்களுக்கு அறிவிக்கிறேன்.',
      book: 'எரேமியா',
      verse: '33:3'
    }
  },
  mr: {
    alt: 'एक उघडी बायबलची चित्रे',
    quote: {
      text: 'मला विनंती करा आणि मी तुमच्यासाठी उत्तर देईन आणि मी तुम्हाला माहित नसलेल्या मोठ्या आणि शोधण्यात अशक्य गोष्टी बोलवीन.',
      book: 'यिर्मयाह',
      verse: '33:3'
    }
  },
  it: {
    alt: 'Immagine di una Bibbia aperta',
    quote: {
      text: 'Invocami e ti risponderò, ti annuncerò cose grandi e nascoste, che tu non conosci.',
      book: 'Geremia',
      verse: '33:3'
    }
  },
  th: {
    alt: 'ภาพพระคัมภีร์ที่เปิดอยู่',
    quote: {
      text: 'เรียกขอให้ฉัน แล้วฉันจะตอบคุณ และจะบอกคุณเรื่องยิ่งใหญ่และเรื่องที่ไม่สามารถค้นหาได้ที่คุณไม่รู้จัก',
      book: 'เยเรมีย์',
      verse: '33:3'
    }
  },
  pl: {
    alt: 'Obraz otwartej Biblii',
    quote: {
      text: 'Wołaj do mnie, a odpowiem ci, oznajmię ci rzeczy wielkie i niedostępne, których nie znasz.',
      book: 'Jeremiasz',
      verse: '33:3'
    }
  },
  ml: {
    alt: 'തുറന്ന ബൈബിളിന്റെ ചിത്രം',
    quote: {
      text: 'എന്നെ വിളിക്കുക, ഞാൻ നിങ്ങളെ ഉത്തരിക്കും; നിങ്ങൾക്ക് അറിയാത്ത വിഷയങ്ങൾ ഞാൻ പറയും.',
      book: 'യിരെമ്യായാഹ്',
      verse: '33:3'
    }
  },
  nl: {
    alt: 'Afbeelding van een open Bijbel',
    quote: {
      text: 'Roep mij aan, en ik zal u antwoorden, en u grote en onbegrijpelijke dingen verkondigen, die gij niet weet.',
      book: 'Jeremia',
      verse: '33:3'
    }
  },
  fil: {
    alt: 'Larawan ng isang bukas na Bibliya',
    quote: {
      text: 'Tawagin mo ako, at ako ay sasagot sa iyo, at ipahahayag ko sa iyo ang mga dakilang bagay na hindi mo nalalaman.',
      book: 'Jeremias',
      verse: '33:3'
    }
  },
  he: {
    alt: 'תמונה של תנ"ך פתוח',
    quote: {
      text: 'קרא אלי ואענך ואגיד לך גדלות ונסתרות ידעתם לא.',
      book: 'ירמיהו',
      verse: '33:3'
    }
  },
  sv: {
    alt: 'Bild av en öppen Bibel',
    quote: {
      text: 'Åkalla mig, så vill jag svara dig och kungöra för dig stora och förunderliga ting, som du icke känner.',
      book: 'Jeremia',
      verse: '33:3'
    }
  },
  da: {
    alt: 'Billede af en åben Bibel',
    quote: {
      text: 'Råb til mig, så vil jeg svare dig og fortælle dig store og ufattelige ting, som du ikke kender.',
      book: 'Jeremias',
      verse: '33:3'
    }
  },
  no: {
    alt: 'Bilde av en åpen Bibel',
    quote: {
      text: 'Rop til meg, så vil jeg svare deg, og jeg vil forkynne for deg store og ufattelige ting, ting som du ikke kjenner.',
      book: 'Jeremia',
      verse: '33:3'
    }
  },
  lv: {
    alt: 'Atvērtas Bībeles attēls',
    quote: {
      text: 'Pieprasi Mani, un Es tev atbildēšu, un Es tev paziņošu lielas un nepieejamas lietas, ko tu nezini.',
      book: 'Jeremija',
      verse: '33:3'
    }
  },
} as Language<Section>;

export { content };
