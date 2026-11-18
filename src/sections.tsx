import { useEffect, useRef, useState } from "react";
import { CoffeePourMenu, type CoffeeItem } from "./components/CoffeePourMenu";
import { SITE, MENU, BEANS, PROCESS, MARQUEE } from "./data";

/* ---------------- reveal on scroll ---------------- */
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- nav ---------------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Меню", "#menu"],
    ["Обжарка", "#roast"],
    ["Зерно", "#beans"],
    ["Визит", "#visit"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">
          EMBER<span className="text-ember">·</span>CODEX
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="mono-label hover:text-ink transition-colors">
              {t}
            </a>
          ))}
          <a href="#visit" className="btn btn-ember !py-2.5 !px-5">
            Забронировать стол
          </a>
        </nav>
        <button
          className="md:hidden mono-label"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-5 py-4 flex flex-col gap-4" aria-label="Мобильная навигация">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="mono-label" onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */
export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-16 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-6">Спешелти-кофейня · обжарщик · {SITE.coords}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif font-light text-[clamp(3.2rem,11vw,9rem)] leading-[0.95] tracking-[-0.02em]">
            EMBER
            <span className="text-ember">·</span>
            CODEX
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
            <p className="section-sub">
              Мы документируем обжарку так же meticulously, как составляем карту.
              Каждое зерно — specimen с координатами, температурой и датой сбора.
              Свежая обжарка каждую неделю.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#menu" className="btn btn-ember">Меню и цены</a>
              <a href="#roast" className="btn btn-ghost">Кривая обжарки</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border border-line divide-x divide-y md:divide-y-0 divide-line">
            {[
              ["12", "партнёрств single origin"],
              ["7 дней", "срок свежести зерна"],
              ["18%", "development time"],
              ["06:30", "первая обжарка дня"],
            ].map(([v, l]) => (
              <div key={l} className="p-5">
                <div className="font-serif text-3xl">{v}</div>
                <div className="mono-label mt-1">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- marquee ---------------- */
export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="border-y border-ink bg-ink text-paper overflow-hidden py-3.5" aria-hidden="true">
      <div className="marquee-track font-serif text-lg tracking-wide">
        {row.map((m, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            {m}
            <span className="text-ember">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- story ---------------- */
export function Story() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Fig. 00 — манифест</p>
        </Reveal>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="section-title">
              Кофе — это <em>полевые данные</em>,<br className="hidden sm:block" /> а не настроение.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub mt-6">
              Мы покупаем зерно у 12 фермерских хозяйств, фиксируем каждый лот:
              высота, обработка, дата сбора, cupping score. Обжарщик — не маг,
              а инструмент: кривая, Development, лог. Открытый для гостей по субботам.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-line border border-line">
              {[
                ["01", "Проба", "cupping каждого лота перед закупкой"],
                ["02", "Обжарка", "по кривой, Development 18–22%"],
                ["03", "Рест", "7–14 дней до пика вкуса"],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-paper-2 p-6">
                  <div className="font-serif text-ember text-lg">{n}</div>
                  <div className="font-medium mt-2">{t}</div>
                  <div className="mono-label mt-1 normal-case tracking-normal">{d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- beans ---------------- */
export function Beans() {
  return (
    <section id="beans" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Specimens — три стадии зерна</p>
          <h2 className="section-title mb-12">От зелёного до <em>угля</em></h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {BEANS.map((b, i) => (
            <Reveal key={b.stage} delay={i * 120}>
              <article className="border border-line bg-paper-2 p-6 h-full">
                <svg viewBox="0 0 200 200" className="w-full aspect-square" role="img" aria-label={`Зерно на стадии ${b.stage}`}>
                  {/* bean cross-section specimen */}
                  <ellipse cx="100" cy="100" rx="62" ry="88" fill={b.color} stroke="var(--color-ink)" strokeWidth="1.5" />
                  <path d="M100 18 C 78 70, 78 130, 100 182" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.4" />
                  <path d="M100 30 C 92 75, 92 125, 100 170" fill="none" stroke="var(--color-paper-2)" strokeWidth="0.7" opacity="0.5" />
                  <circle cx="100" cy="100" r="4" fill="var(--color-ink)" />
                  <line x1="30" y1="160" x2="170" y2="160" stroke="var(--color-ink)" strokeWidth="0.8" opacity="0.3" />
                </svg>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{b.stage}</h3>
                  <span className="mono-label">{b.temp}</span>
                </div>
                <p className="mono-label mt-2 normal-case tracking-normal text-ink-soft">{b.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- menu ---------------- */
const POUR_ITEMS: CoffeeItem[] = [
  { id: "espresso", name: "Эспрессо", subtitle: "30 мл · bold", description: "двойной шот с золотистой кремой", vessel: "demitasse", layers: [{ type: "espresso", amount: 0.72 }], crema: true },
  { id: "americano", name: "Американо", subtitle: "240 мл · smooth", description: "эспрессо на горячей воде", vessel: "glass-mug", layers: [{ type: "water", amount: 0.54 }, { type: "espresso", amount: 0.24 }], crema: true, blend: 0.9 },
  { id: "cappuccino", name: "Капучино", subtitle: "180 мл · velvety", description: "эспрессо, молоко и плотная пенка", vessel: "cup", layers: [{ type: "espresso", amount: 0.3 }, { type: "milk", amount: 0.44 }], foam: 0.14, art: "heart" },
  { id: "latte", name: "Латте", subtitle: "300 мл · mellow", description: "эспрессо и много молока", vessel: "tall-glass", layers: [{ type: "espresso", amount: 0.25 }, { type: "milk", amount: 0.51 }], foam: 0.11, blend: 0.15 },
];

export function Menu() {
  return (
    <section id="menu" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Fig. 01 — барная карта</p>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="section-title">Что нальём<br /><em>сегодня</em></h2>
            <p className="section-sub">Наведите на напиток — чашка сама нальётся. Цены в сумах.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="border border-line bg-paper-2">
            <CoffeePourMenu items={POUR_ITEMS} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 divide-y divide-line border border-line">
            {MENU.map((m) => (
              <li key={m.n} className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_1fr_auto_auto] items-baseline gap-x-4 gap-y-1 px-5 sm:px-8 py-5 hover:bg-paper-2 transition-colors">
                <span className="mono-label">{m.n}</span>
                <div>
                  <span className="font-serif text-xl sm:text-2xl">{m.name}</span>
                  {m.tag && <span className="ml-3 mono-label !text-ember border border-ember/40 rounded-full px-2 py-0.5">{m.tag}</span>}
                  <p className="mono-label mt-1 normal-case tracking-normal hidden sm:block">{m.desc}</p>
                </div>
                <p className="mono-label normal-case tracking-normal sm:hidden col-start-2">{m.desc}</p>
                <span className="font-serif text-xl tabular-nums">{m.price}<span className="mono-label ml-1">сум</span></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- roast curve ---------------- */
const CURVE = "M40 340 C120 320, 170 260, 230 200 S 330 90, 390 60";

export function RoastCurve() {
  return (
    <section id="roast" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-line bg-paper-2">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Fig. 02 — кривая обжарки</p>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="section-title">Семь минут <em>точности</em></h2>
            <p className="section-sub">Эталонный профиль: 12 кг арабики, drum roaster 5 кг. Кривая рисуется при загрузке страницы.</p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="border border-line bg-paper p-4 sm:p-8">
            <svg viewBox="0 0 420 380" className="w-full h-auto" role="img" aria-label="График кривой обжарки с четырьмя этапами">
              {/* grid */}
              {[0, 60, 120, 180, 240, 300, 360].map((y) => (
                <line key={y} x1="40" y1={y + 20} x2="390" y2={y + 20} stroke="var(--color-line)" strokeWidth="0.7" />
              ))}
              {[40, 110, 180, 250, 320].map((x) => (
                <line key={x} x1={x} y1="20" x2={x} y2="340" stroke="var(--color-line)" strokeWidth="0.7" />
              ))}
              {/* axes labels */}
              <text x="34" y="30" textAnchor="end" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-muted)">°C</text>
              <text x="390" y="365" textAnchor="end" fontFamily="IBM Plex Mono" fontSize="9" fill="var(--color-muted)">время →</text>
              {/* exothermic zone */}
              <rect x="235" y="20" width="70" height="320" fill="var(--color-ember)" opacity="0.06" />
              <text x="270" y="14" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="8" fill="var(--color-ember)" letterSpacing="2">EXOTHERM</text>
              {/* main curve */}
              <path d={CURVE} fill="none" stroke="var(--color-ink)" strokeWidth="1.6" pathLength={1} className="curve-path" />
              {/* drop segment */}
              <path d="M320 90 L390 60" fill="none" stroke="var(--color-ember)" strokeWidth="1.6" pathLength={1} className="ember-path" />
              {/* events */}
              {PROCESS.map((p, i) => {
                const pts = [[70, 300], [160, 235], [270, 120], [385, 62]];
                const [x, y] = pts[i];
                return (
                  <g key={p.t}>
                    <circle cx={x} cy={y} r="3.5" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.2" />
                    <text x={x} y={y - 10} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="8.5" fontWeight="600" fill="var(--color-ink)" letterSpacing="1">{p.t}</text>
                    <text x={x} y={y + 22} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="7.5" fill="var(--color-muted)">{p.d}</text>
                  </g>
                );
              })}
            </svg>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-2 mono-label">
              <span>Fig. 02 — temperature / time</span>
              <span>batch № EC-1147 · эфиопия гуджи washed</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- visit ---------------- */
export function Visit() {
  return (
    <section id="visit" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Fig. 03 — визит</p>
          <h2 className="section-title mb-12">Загляните <em>на чашку</em></h2>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-7">
            <div className="border border-line h-full min-h-[320px] relative overflow-hidden bg-paper-3">
              <iframe
                title="Карта — EMBER CODEX, Ташкент"
                src="https://www.openstreetmap.org/export/embed.html?bbox=69.25%2C41.29%2C69.31%2C41.33&layer=mapnik&marker=41.3111%2C69.2797"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div className="border border-line divide-y divide-line h-full">
              <div className="p-6">
                <div className="mono-label mb-2">Адрес</div>
                <p className="font-serif text-xl">{SITE.address}</p>
                <p className="mono-label mt-1">{SITE.coords}</p>
              </div>
              <div className="p-6">
                <div className="mono-label mb-2">Часы</div>
                {SITE.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-1">
                    <span className="text-sm">{h.day}</span>
                    <span className="mono-label">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="mono-label mb-2">Контакты</div>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-serif text-xl block hover:text-ember transition-colors">{SITE.phone}</a>
                <a href="https://t.me/embercodex" target="_blank" rel="noreferrer" className="mono-label mt-2 inline-block hover:text-ember transition-colors">t.me/embercodex</a>
              </div>
              <div className="p-6">
                <a href="https://t.me/embercodex" target="_blank" rel="noreferrer" className="btn btn-ember w-full">Написать в Telegram</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="font-serif font-light text-[clamp(2.5rem,8vw,7rem)] leading-none tracking-tight select-none">
          EMBER<span className="text-ember">·</span>CODEX
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 mono-label !text-paper/50">
          <span>© {new Date().getFullYear()} {SITE.name} — {SITE.city}</span>
          <span>Обжарено с {SITE.coords}</span>
          <a href="#top" className="hover:text-ember transition-colors">↑ наверх</a>
        </div>
      </div>
    </footer>
  );
}
