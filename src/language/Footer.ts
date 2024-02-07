import type { Language } from "../language";

interface Section {
  imageAlt: string;
  heading: string;
  rightsReserved: string;
}

const content = {
  en: {
    imageAlt: "Image of the Holy Bible, open and set on a table",
    heading: "Footer",
    rightsReserved: "All rights reserved.",
  },
  zh: {
    imageAlt: "圣经的图片，打开并放在桌子上",
    heading: "页脚",
    rightsReserved: "版权所有。",
  },
  hi: {
    imageAlt: "पवित्र बाइबल की छवि, खुली हुई और एक मेज़ पर रखी हुई",
    heading: "फ़ुटर",
    rightsReserved: "सभी अधिकार सुरक्षित।",
  },
  es: {
    imageAlt: "Imagen de la Santa Biblia, abierta y colocada sobre una mesa",
    heading: "Pie de página",
    rightsReserved: "Todos los derechos reservados.",
  },
  ar: {
    imageAlt: "صورة الكتاب المقدس ، مفتوحة وموضوعة على طاولة",
    heading: "تذييل",
    rightsReserved: "كل الحقوق محفوظة.",
  },
  bn: {
    imageAlt: "পবিত্র বাইবেলের চিত্র, খোলা এবং একটি টেবিলে রাখা",
    heading: "ফুটার",
    rightsReserved: "সমস্ত অধিকার সংরক্ষিত।",
  },
  pt: {
    imageAlt: "Imagem da Santa Bíblia, aberta e colocada sobre uma mesa",
    heading: "Rodapé",
    rightsReserved: "Todos os direitos reservados.",
  },
  ru: {
    imageAlt: "Изображение Святой Библии, открытой и установленной на столе",
    heading: "нижний колонтитул",
    rightsReserved: "Все права защищены.",
  },
  ja: {
    imageAlt: "聖書の画像、開いてテーブルに置かれている",
    heading: "フッター",
    rightsReserved: "全著作権所有。",
  },
  ur: {
    imageAlt: "مقدس کتاب کی تصویر ، کھلی ہوئی اور ایک میز پر رکھی ہوئی",
    heading: "فوٹر",
    rightsReserved: "تمام حقوق محفوظ ہیں۔",
  },
  id: {
    imageAlt: "Gambar Alkitab, terbuka dan diletakkan di atas meja",
    heading: "Footer",
    rightsReserved: "Seluruh hak cipta.",
  },
  ms: {
    imageAlt: "Gambar Alkitab, terbuka dan diletakkan di atas meja",
    heading: "Footer",
    rightsReserved: "Hak cipta terpelihara.",
  },
  fr: {
    imageAlt: "Image de la Sainte Bible, ouverte et posée sur une table",
    heading: "Pied de page",
    rightsReserved: "Tous droits réservés.",
  },
  de: {
    imageAlt: "Bild der Heiligen Bibel, geöffnet und auf einem Tisch abgelegt",
    heading: "Fußzeile",
    rightsReserved: "Alle Rechte vorbehalten.",
  },
  jv: {
    imageAlt: "Gambar Alkitab Suci, dibukakake lan ditemokake ing meja",
    heading: "Footer",
    rightsReserved: "Kabeh hak dilindhungi.",
  },
  te: {
    imageAlt: "పవిత్ర బైబిల్ యొక్క చిత్రం, తెరవించి ఒక టేబుల్ మీద ఉంచబడింది",
    heading: "ఫుటర్",
    rightsReserved: "అన్ని హక్కులు సంరక్షించబడినవి.",
  },
  vi: {
    imageAlt: "Hình ảnh Kinh Thánh, mở và đặt trên bàn",
    heading: "Chân trang",
    rightsReserved: "Tất cả các quyền được bảo lưu.",
  },
  tr: {
    imageAlt: "Kutsal Kitabın, açık ve bir masaya yerleştirilmiş görüntüsü",
    heading: "Altbilgi",
    rightsReserved: "Tüm hakları Saklıdır.",
  },
  ko: {
    imageAlt: "성경의 이미지, 열고 테이블에 놓여 있음",
    heading: "바닥 글",
    rightsReserved: "모든 권리 보유.",
  },
  ta: {
    imageAlt: "பரிசு வேதாகமத்தின் படம், திறந்து ஒரு மேசையில் வைத்துள்ளது",
    heading: "அடிக்குறியீடு",
    rightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.",
  },
  mr: {
    imageAlt: "पवित्र बायबलची छायाचित्रे, उघडलेली आणि एक टेबलवर ठेवलेली",
    heading: "फुटर",
    rightsReserved: "सर्व हक्क राखीव.",
  },
  it: {
    imageAlt: "Immagine della Santa Bibbia, aperta e posizionata su un tavolo",
    heading: "Piè di pagina",
    rightsReserved: "Tutti i diritti riservati.",
  },
  th: {
    imageAlt: "ภาพพระคัมภีร์เปิดและวางบนโต๊ะ",
    heading: "ท้ายบท",
    rightsReserved: "สงวนลิขสิทธิ์ทั้งหมด",
  },
  pl: {
    imageAlt: "Obraz Świętej Biblii, otwartej i ustawionej na stole",
    heading: "Stopka",
    rightsReserved: "Wszelkie prawa zastrzeżone.",
  },
  ml: {
    imageAlt: "പരിശുദ്ധ ബൈബിളിന്റെ ചിത്രം, തുറക്കിയിട്ടുള്ളത് ഒരു ടേബിളിൽ നിന്നും വെച്ച്",
    heading: "അടിക്കുറിപ്പ്",
    rightsReserved: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിക്കുക.",
  },
  nl: {
    imageAlt: "Afbeelding van de Heilige Bijbel, open en op een tafel gezet",
    heading: "Voettekst",
    rightsReserved: "Alle rechten voorbehouden.",
  },
  fil: {
    imageAlt: "Larawan ng Banal na Bibliya, bukas at nakapatong sa isang mesa",
    heading: "Paa ng pahina",
    rightsReserved: "Lahat ng karapatan ay nakalaan.",
  },
  he: {
    imageAlt: "תמונה של התנ\"ך הקדוש, פתוחה ומונחת על שולחן",
    heading: "כותרת תחתונה",
    rightsReserved: "כל הזכויות שמורות.",
  },
  sv: {
    imageAlt: "Bild av den heliga bibeln, öppen och placerad på ett bord",
    heading: "Sidfot",
    rightsReserved: "Alla rättigheter förbehållna.",
  },
  da: {
    imageAlt: "Billede af den hellige bibel, åben og placeret på et bord",
    heading: "Sidefod",
    rightsReserved: "Alle rettigheder forbeholdes.",
  },
  no: {
    imageAlt: "Bilde av den hellige bibelen, åpen og plassert på et bord",
    heading: "Sidefot",
    rightsReserved: "Alle rettigheter reservert.",
  },
  lv: {
    imageAlt: "Svētās Bībeles attēls, atvērts un novietots uz galda",
    heading: "Kājene",
    rightsReserved: "Visas tiesības aizsargātas.",
  },
} as Language<Section>;

export { content };
