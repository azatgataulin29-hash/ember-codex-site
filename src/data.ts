export const SITE = {
  name: "EMBER CODEX",
  city: "Ташкент",
  coords: "41.3111° N — 69.2797° E",
  address: "Ташкент, Мирабадский район, ул. Амира Темура, 12",
  phone: "+998 90 123 45 67",
  hours: [
    { day: "Пн — Пт", time: "08:00 — 21:00" },
    { day: "Сб — Вс", time: "09:00 — 22:00" },
  ],
};

export const MENU = [
  { n: "01", name: "Эспрессо", desc: "двойной шот, гаитянская арабика", price: "28 000", tag: "signature" },
  { n: "02", name: "Фильтр V60", desc: "Эфиопия Гуджи, ноты абрикоса и бергамота", price: "35 000", tag: null },
  { n: "03", name: "Капучино", desc: "овсяное или коровье молоко, крупная пенка", price: "38 000", tag: null },
  { n: "04", name: "Раф с облепихой", desc: "сезонный, обжарка honey", price: "42 000", tag: "season" },
  { n: "05", name: "Колд брю", desc: "18 часов холодной экстракции", price: "40 000", tag: null },
  { n: "06", name: "Тонник с эспрессо", desc: "тоник, лайм, двойной шот", price: "45 000", tag: null },
];

export const BEANS = [
  { stage: "Green", temp: "≈180°C", note: "трава, сено", color: "#b9bd8f" },
  { stage: "Amber", temp: "≈205°C", note: "карамель, орех", color: "#c9a25e" },
  { stage: "Ember", temp: "≈220°C", note: "дым, масло", color: "#7a3c1c" },
];

export const PROCESS = [
  { t: "CHARGE", d: "205°C — загрузка зелёного зерна" },
  { t: "TURN", d: "184°C — точка разворота кривой" },
  { t: "FIRST CRACK", d: "196°C — первый треск, экзотерма" },
  { t: "DROP", d: "205°C — слив, development 18%" },
];

export const MARQUEE = [
  "Single Origin",
  "Washed",
  "Natural",
  "Honey",
  "C. arabica",
  "Обжарено в Ташкенте",
  "Под заказ",
  "Свежее каждую неделю",
];
