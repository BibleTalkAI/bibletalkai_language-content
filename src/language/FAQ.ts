import type { Language } from "../language";

interface Section {
  "section.title": string;
  "email.cta": string;
}

const content = {
  en: {
    'section.title': 'Frequently Asked Questions',
    'email.cta': 'Can’t find the answer you’re looking for? Reach out to our customer support team at '
  },
  zh: {
    'section.title': '常见问题',
    'email.cta': '找不到您要找的答案？请联系我们的客户支持团队 '
  },
  hi: {
    'section.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'email.cta': 'आप जो जवाब ढूंढ़ रहे हैं उसे नहीं मिल सकता? हमारे ग्राहक सहायता टीम से संपर्क करें '
  },
  es: {
    'section.title': 'Preguntas frecuentes',
    'email.cta': '¿No encuentra la respuesta que busca? Comuníquese con nuestro equipo de atención al cliente a '
  },
  ar: {
    'section.title': 'الأسئلة الشائعة',
    'email.cta': 'لا يمكنك العثور على الإجابة التي تبحث عنها؟ تواصل مع فريق خدمة العملاء لدينا على '
  },
  bn: {
    'section.title': 'সাধারণ প্রশ্ন',
    'email.cta': 'আপনি যে উত্তরটি খুঁজছেন তা পাচ্ছেন না? আমাদের গ্রাহক সমর্থন দলের সাথে যোগাযোগ করুন '
  },
  pt: {
    'section.title': 'Perguntas frequentes',
    'email.cta': 'Não encontra a resposta que procura? Entre em contato com nossa equipe de suporte ao cliente em '
  },
  ru: {
    'section.title': 'Часто задаваемые вопросы',
    'email.cta': 'Не можете найти ответ, который ищете? Свяжитесь с нашей службой поддержки клиентов по адресу '
  },
  ja: {
    'section.title': 'よくある質問',
    'email.cta': 'お探しの回答が見つかりませんか？ お問い合わせください '
  },
  ur: {
    'section.title': 'عام سوالات',
    'email.cta': 'آپ جو جواب تلاش کر رہے ہیں وہ نہیں مل سکتا؟ ہمارے صارفین کی حمایت ٹیم سے رابطہ کریں '
  },
  id: {
    'section.title': 'Pertanyaan yang Sering Diajukan',
    'email.cta': 'Tidak dapat menemukan jawaban yang Anda cari? Hubungi tim dukungan pelanggan kami di '
  },
  ms: {
    'section.title': 'Soalan Lazim',
    'email.cta': 'Tidak dapat mencari jawapan yang anda cari? Hubungi pasukan sokongan pelanggan kami di '
  },
  fr: {
    'section.title': 'Questions fréquemment posées',
    'email.cta': 'Vous ne trouvez pas la réponse que vous cherchez ? Contactez notre équipe d’assistance clientèle à '
  },
  de: {
    'section.title': 'Häufig gestellte Fragen',
    'email.cta': 'Sie finden nicht die Antwort, die Sie suchen? Wenden Sie sich an unser Kundensupport-Team unter '
  },
  jv: {
    'section.title': 'Pertanyaan sing Sering Ditanya',
    'email.cta': 'Ora bisa nemokake jawaban sing sampeyan arep? Hubungi tim dukungan pelanggan kita ing '
  },
  te: {
    'section.title': 'సాధారణ ప్రశ్నలు',
    'email.cta': 'మీరు వెతుకుతున్న సమాధానం కనుగొనలేరుగా? మా కస్టమర్ సపోర్ట్ టీమ్‌కు సంప్రదించండి '
  },
  vi: {
    'section.title': 'Câu hỏi thường gặp',
    'email.cta': 'Không tìm thấy câu trả lời bạn đang tìm kiếm? Liên hệ với nhóm hỗ trợ khách hàng của chúng tôi tại '
  },
  tr: {
    'section.title': 'Sıkça Sorulan Sorular',
    'email.cta': 'Aranan cevabı bulamıyor musunuz? Müşteri destek ekibimizle iletişime geçin '
  },
  ko: {
    'section.title': '자주 묻는 질문',
    'email.cta': '찾고 계신 답변을 찾을 수 없나요? 고객 지원팀에 문의하세요 '
  },
  ta: {
    'section.title': 'அடிக்கடி கேள்விகள்',
    'email.cta': 'நீங்கள் தேடுகிற பதிலைக் கண்டுபிடிக்க முடியவில்லையா? எங்கள் வாடிக்கையாளர் ஆதரவு குழுவுடன் தொடர்பு கொள்ளவும் '
  },
  mr: {
    'section.title': 'वाढत्या प्रश्न',
    'email.cta': 'आपण शोधत असलेले उत्तर शोधू शकत नाही? आमच्या ग्राहक सहाय्य टीमशी संपर्क साधा '
  },
  it: {
    'section.title': 'Domande frequenti',
    'email.cta': 'Non trovi la risposta che stai cercando? Contatta il nostro team di assistenza clienti a '
  },
  th: {
    'section.title': 'คำถามที่พบบ่อย',
    'email.cta': 'คุณไม่พบคำตอบที่คุณกำลังมองหาหรือไม่? ติดต่อทีมฝ่ายบริการลูกค้าของเราที่ '
  },
  pl: {
    'section.title': 'Najczęściej zadawane pytania',
    'email.cta': 'Nie możesz znaleźć odpowiedzi, której szukasz? Skontaktuj się z naszym zespołem obsługi klienta pod adresem '
  },
  ml: {
    'section.title': 'പരസ്യങ്ങൾ',
    'email.cta': 'നിങ്ങൾ തിരയുന്ന ഉത്തരം കണ്ടെത്താൻ കഴിയുമോ? ഞങ്ങളുടെ കസ്റ്റമർ സപ്പോർട്ട് ടീം ബന്ധപ്പെടുക '
  },
  nl: {
    'section.title': 'Veelgestelde vragen',
    'email.cta': 'Kunt u het antwoord dat u zoekt niet vinden? Neem contact op met ons klantenserviceteam op '
  },
  fil: {
    'section.title': 'Madalas Itanong',
    'email.cta': 'Hindi mahanap ang sagot na hinahanap mo? Makipag-ugnay sa aming koponan ng suporta sa customer sa '
  },
  he: {
    'section.title': 'שאלות נפוצות',
    'email.cta': 'לא מוצא את התשובה שאתה מחפש? צור קשר עם צוות התמיכה שלנו ב '
  },
  sv: {
    'section.title': 'Vanliga frågor',
    'email.cta': 'Hittar du inte svaret du letar efter? Kontakta vårt kundsupportteam på '
  },
  da: {
    'section.title': 'Ofte stillede spørgsmål',
    'email.cta': 'Kan du ikke finde svaret, du leder efter? Kontakt vores kundesupportteam på '
  },
  no: {
    'section.title': 'Ofte stilte spørsmål',
    'email.cta': 'Finner du ikke svaret du leter etter? Kontakt vårt kundestøtteteam på '
  },
  fi: {
    'section.title': 'Usein kysytyt kysymykset',
    'email.cta': 'Et löydä etsimääsi vastausta? Ota yhteyttä asiakastukitiimiimme osoitteessa '
  },
  lv: {
    'section.title': 'Bieži uzdotie jautājumi',
    'email.cta': 'Vai nevarat atrast meklēto atbildi? Sazinieties ar mūsu klientu atbalsta komandu '
  },
} as Language<Section>;

export { content };
