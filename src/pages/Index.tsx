import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/370191d3-89a6-4b48-b5b3-39e3d2122244.jpg";

const IMG_FREELANCE = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/ac3f9e43-724d-45bd-81f4-2c8ac0a9ebad.jpg";
const IMG_MARKETPLACE = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/f85e634d-0d8d-4d9a-95df-c6d358138b28.jpg";
const IMG_EDUCATION = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/31ae11ff-2ac7-4a6f-b586-3fc753169494.jpg";
const IMG_FAMILY = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/d6db20d1-b3ff-4b9c-a265-bb864276df3e.jpg";
const IMG_ROCKET = "https://cdn.poehali.dev/projects/2d2a514e-a58d-42b0-bfdb-150d27e712fd/files/541f1a62-226d-4fef-b7c5-e9280d6a94b8.jpg";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

const deadline = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

const methods = [
  {
    number: "01",
    img: IMG_FREELANCE,
    title: "Фриланс на навыках с основной работы",
    subtitle: "Монетизируй то, что уже умеешь",
    description: "Используй профессиональные навыки с основной работы для выполнения заказов на биржах. Дизайн, бухгалтерия, переводы, консультации — всё это можно продать уже сегодня.",
    details: ["Регистрация на Kwork, FL.ru, UpWork", "Первый заказ за 3–7 дней", "Доход: 15 000–80 000 ₽/мес", "Гибкий график, работа вечером"],
    accent: "#f97316",
  },
  {
    number: "02",
    img: IMG_MARKETPLACE,
    title: "Перепродажа товаров на маркетплейсах",
    subtitle: "Бизнес без офиса и склада",
    description: "Схема дропшиппинга или небольшие закупки товаров с продажей на Wildberries и Ozon. Идеально для тех, кто хочет бизнес, но не готов рисковать большими деньгами.",
    details: ["Старт с 10 000–30 000 ₽", "Автоматизация через кабинет WB/Ozon", "Доход: 20 000–150 000 ₽/мес", "Управление с телефона"],
    accent: "#f59e0b",
  },
  {
    number: "03",
    img: IMG_EDUCATION,
    title: "Продажа знаний и обучение",
    subtitle: "Обучай и зарабатывай на опыте",
    description: "Ты знаешь больше, чем думаешь. Курс, воркшоп, наставничество или канал в Telegram — сегодня это доступно каждому без студии и сложных технологий.",
    details: ["Тема из твоего опыта за 1 день", "Запуск через Telegram или Boosty", "Доход: 30 000–200 000 ₽/мес", "Работает даже в отпуске"],
    accent: "#10b981",
  },
];

const benefits = [
  { img: IMG_FREELANCE, title: "Без ухода с работы", text: "Все 3 способа совместимы с занятостью 8 часов в день" },
  { img: IMG_MARKETPLACE, title: "Реальные цифры", text: "Только проверенные способы с реальными примерами дохода" },
  { img: IMG_FAMILY, title: "Семья на первом месте", text: "Гибкие форматы, которые не крадут время у детей" },
  { img: IMG_EDUCATION, title: "Пошаговый план", text: "Чёткий алгоритм для каждого способа без лишней воды" },
  { img: IMG_ROCKET, title: "Быстрый старт", text: "Первые результаты уже через 1–2 недели после начала" },
  { img: IMG_ROCKET, title: "Полностью бесплатно", text: "Никаких скрытых платежей — весь курс в открытом доступе" },
];

const faqs = [
  { q: "Это действительно бесплатно?", a: "Да, курс полностью бесплатный. Никаких скрытых платежей, подписок или обязательных покупок. Ты получаешь весь материал без каких-либо условий." },
  { q: "Подойдёт ли это, если я занят с 9 до 18?", a: "Именно для таких людей курс и создан. Все 3 способа рассчитаны на тех, кто работает полный день и хочет зарабатывать дополнительно в свободное время — вечером и в выходные." },
  { q: "Нужен ли начальный капитал?", a: "Первый и третий способы требуют только время и знания — нулевые вложения. Второй способ (маркетплейсы) можно начать с 10 000 ₽, и в курсе объясняется, как минимизировать риски." },
  { q: "Через сколько будет первый заработок?", a: "Самый быстрый способ (фриланс) даёт первый результат за 3–7 дней. Остальные — в течение 2–4 недель. Главное — начать действовать сразу после курса." },
  { q: "Я не разбираюсь в интернете, всё равно справлюсь?", a: "Да. В курсе всё объясняется с нуля, пошагово. Если можешь написать сообщение в WhatsApp — уже достаточно для старта." },
];

function TimerBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 8px 24px rgba(249,115,22,0.3)" }}
      >
        <span className="font-oswald text-3xl md:text-4xl font-bold text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-orange-500 mt-2 font-golos uppercase tracking-widest font-semibold">{label}</span>
    </div>
  );
}

const TgIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.01 9.471c-.146.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.873.75z"/>
  </svg>
);

const VkIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .423-.135.677-1.253.677-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .779.186.254.796.779 1.202 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.745-.576.745z"/>
  </svg>
);

export default function Index() {
  const timeLeft = useCountdown(deadline);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-[#fdf9f5] font-golos overflow-x-hidden">

      {/* Ticker */}
      <div className="py-2.5 overflow-hidden" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="text-white font-oswald text-sm font-medium mr-10">
              БЕСПЛАТНЫЙ КУРС ДЛЯ ПАП &nbsp;&nbsp; РЕАЛЬНЫЕ СПОСОБЫ ЗАРАБОТКА &nbsp;&nbsp; БЕЗ УХОДА С РАБОТЫ &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(253,249,245,0.97) 50%, rgba(253,249,245,0.8) 70%, rgba(253,249,245,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #fdf9f5 0%, transparent 40%)" }} />
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(249,115,22,0.07)", filter: "blur(90px)" }} />

        <div className="relative z-10 container mx-auto px-6 py-20 max-w-5xl">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)" }}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-orange-600 text-sm font-semibold">Бесплатный курс · Ограниченный доступ</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              <span>3 СПОСОБА</span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ПОДРАБОТКИ
              </span>
              <br />
              <span className="text-gray-700 text-3xl md:text-5xl">для работающих пап</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Реальные способы заработать больше, не бросая основную работу и не жертвуя временем с семьёй
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-white font-oswald font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ background: "#1a3a5c", boxShadow: "0 4px 20px rgba(26,58,92,0.3)" }}
              >
                <TgIcon size={22} />
                Получить в Telegram
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-white font-oswald font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ background: "#0077FF", boxShadow: "0 4px 20px rgba(0,119,255,0.25)" }}
              >
                <VkIcon size={22} />
                Получить ВКонтакте
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-4 font-medium">Уже 2 847 пап получили курс</p>
          </div>
        </div>
      </section>

      {/* TIMER */}
      <section className="py-12 border-y" style={{ background: "#fff8f2", borderColor: "rgba(249,115,22,0.12)" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-orange-500 font-oswald text-sm uppercase tracking-[4px] mb-1 font-semibold">
            Бесплатный доступ закрывается через
          </p>
          <p className="text-gray-400 text-sm mb-8">После дедлайна курс станет платным</p>
          <div className="flex items-center justify-center gap-3 md:gap-8">
            <TimerBlock value={timeLeft.days} label="Дней" />
            <span className="text-orange-400 font-oswald text-4xl font-bold pb-8">:</span>
            <TimerBlock value={timeLeft.hours} label="Часов" />
            <span className="text-orange-400 font-oswald text-4xl font-bold pb-8">:</span>
            <TimerBlock value={timeLeft.minutes} label="Минут" />
            <span className="text-orange-400 font-oswald text-4xl font-bold pb-8">:</span>
            <TimerBlock value={timeLeft.seconds} label="Секунд" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" data-animate className="py-20 container mx-auto px-6 max-w-5xl">
        <div className={`transition-all duration-700 ${isVisible('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-oswald text-sm uppercase tracking-[4px] mb-3 font-semibold">Почему этот курс</p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900">
              ЧТО ТЫ{" "}
              <span style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ПОЛУЧИШЬ
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card-light rounded-2xl p-5 flex gap-4 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden" style={{ border: "2px solid rgba(249,115,22,0.15)" }}>
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-semibold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section id="methods" data-animate className="py-20" style={{ background: "#fff8f2" }}>
        <div className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible('methods') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-oswald text-sm uppercase tracking-[4px] mb-3 font-semibold">Содержание курса</p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900">
              3 СПОСОБА{" "}
              <span style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ПОДРАБОТКИ
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {methods.map((m, i) => (
              <div key={i} className="card-light rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-52 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="font-oswald text-5xl font-bold opacity-15 leading-none flex-shrink-0" style={{ color: m.accent }}>
                        {m.number}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: m.accent }}>{m.subtitle}</p>
                        <h3 className="font-oswald text-xl md:text-2xl font-bold text-gray-900">{m.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-5 leading-relaxed">{m.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {m.details.map((d, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: m.accent }} />
                          <span className="text-gray-600 text-sm">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-animate className="py-20 container mx-auto px-6 max-w-3xl">
        <div className={`transition-all duration-700 ${isVisible('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <p className="text-orange-500 font-oswald text-sm uppercase tracking-[4px] mb-3 font-semibold">Отвечаем честно</p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900">
              ВОПРОСЫ{" "}
              <span style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                И ОТВЕТЫ
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-light rounded-xl overflow-hidden px-6"
              >
                <AccordionTrigger className="font-oswald text-lg font-semibold text-gray-900 hover:text-orange-500 hover:no-underline py-5 transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#fff8f2" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(249,115,22,0.06)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          <div className="w-24 h-24 rounded-2xl mx-auto mb-8 overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(249,115,22,0.2)" }}>
            <img src={IMG_ROCKET} alt="Старт" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            НАЧНИ{" "}
            <span style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ПРЯМО
            </span>{" "}
            СЕЙЧАС
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Получи бесплатный доступ к курсу и начни зарабатывать больше уже в этом месяце
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white font-oswald font-semibold text-xl px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: "#1a3a5c", boxShadow: "0 6px 24px rgba(26,58,92,0.3)" }}
            >
              <TgIcon size={26} />
              Telegram
            </a>
            <a
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white font-oswald font-semibold text-xl px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: "#0077FF", boxShadow: "0 6px 24px rgba(0,119,255,0.25)" }}
            >
              <VkIcon size={26} />
              ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <p className="text-gray-400 text-sm">© 2026 · Курс «3 способа подработки для работающих пап» · Бесплатно</p>
      </footer>

    </div>
  );
}
