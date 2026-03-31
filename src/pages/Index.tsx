import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/8d6e50c3-2c14-42aa-9240-79d2326e7676.jpg";
const SPA_IMG = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/eb063325-ac4c-42e1-9a67-daa7a946197a.jpg";
const LAKE_IMG = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/ff81f914-bf5e-494c-9b22-4cf26edaa8e5.jpg";

const navLinks = [
  { label: "О курорте", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: "Droplets",
    title: "Лечебные источники",
    desc: "Уникальные минеральные воды с богатым составом микроэлементов. Купания в термальных бассейнах под открытым небом.",
    price: "от 1 200 ₽",
  },
  {
    icon: "Sparkles",
    title: "СПА-программы",
    desc: "Авторские spa-ритуалы с использованием грязей и минеральных вод. Обёртывания, массажи, ароматерапия.",
    price: "от 3 500 ₽",
  },
  {
    icon: "Heart",
    title: "Оздоровительные курсы",
    desc: "Комплексные программы оздоровления от 3 до 21 дня под наблюдением врачей-курортологов.",
    price: "от 18 000 ₽",
  },
  {
    icon: "Wind",
    title: "Ингаляции и физиотерапия",
    desc: "Аэрозольные и паровые ингаляции с минеральной водой. Современное физиотерапевтическое оборудование.",
    price: "от 800 ₽",
  },
  {
    icon: "Waves",
    title: "Водолечение",
    desc: "Жемчужные и вихревые ванны, подводный душ-массаж. Талассотерапия с морскими водорослями.",
    price: "от 1 800 ₽",
  },
  {
    icon: "Sun",
    title: "Активный отдых",
    desc: "Прогулки по экотропам, скандинавская ходьба, йога на свежем воздухе и велопрогулки по лесным маршрутам.",
    price: "Включено",
  },
];

const reviews = [
  {
    name: "Мария К.",
    city: "Москва",
    text: "Приехала на 10-дневную программу по рекомендации врача. Лечебные источники потрясающие — уехала совершенно другим человеком. Персонал внимательный и заботливый.",
    stars: 5,
    date: "Июль 2024",
  },
  {
    name: "Андрей В.",
    city: "Санкт-Петербург",
    text: "Третий раз приезжаем с женой. Минеральные воды действительно помогают — спина перестала болеть после курса. Природа и воздух — это отдельное удовольствие.",
    stars: 5,
    date: "Август 2024",
  },
  {
    name: "Светлана Н.",
    city: "Екатеринбург",
    text: "Замечательное место для восстановления. СПА-программа превзошла все ожидания. Чистота, тишина, вкусная еда и невероятной красоты пейзажи.",
    stars: 5,
    date: "Июнь 2024",
  },
];

const stats = [
  { value: "87+", label: "лет традиций оздоровления" },
  { value: "12", label: "лечебных источников" },
  { value: "4 800+", label: "гостей ежегодно" },
  { value: "96%", label: "гостей возвращаются снова" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", dates: "", guests: "1", comment: "" });

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-resort-cream font-body">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-resort-cream/90 backdrop-blur-sm border-b border-resort-sand">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="font-display text-2xl text-resort-brown font-semibold tracking-wide">
            Усолье
          </button>
          <nav className="hidden md:flex gap-7">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-resort-brown/70 hover:text-resort-terracotta transition-colors font-body"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("#booking")}
            className="hidden md:block bg-resort-terracotta text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-resort-brown transition-colors"
          >
            Забронировать
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-resort-brown" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-resort-cream border-t border-resort-sand px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-resort-brown/80 py-1">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#booking")} className="bg-resort-terracotta text-white px-5 py-2.5 rounded-full text-sm font-medium mt-2">
              Забронировать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={HERO_IMG} alt="Курорт Усолье" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-resort-brown/50 via-resort-brown/30 to-resort-brown/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto animate-fade-up">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-resort-gold mb-4 opacity-90">
            Курорт · Усолье
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-6">
            Исцеляющая сила <br />
            <em>живой воды</em>
          </h1>
          <p className="font-body text-lg text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
            Уникальные лечебные источники, минеральные воды и спа-программы в объятиях нетронутой природы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-resort-terracotta hover:bg-resort-brown text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 text-base"
            >
              Забронировать отдых
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="border border-white/60 text-white hover:bg-white/15 px-8 py-3.5 rounded-full font-medium transition-all text-base"
            >
              Узнать больше
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-resort-brown text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl text-resort-gold font-light mb-1">{s.value}</div>
              <div className="text-sm text-white/65 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-resort-terracotta text-sm uppercase tracking-widest font-body mb-3">О курорте</p>
            <h2 className="font-display text-4xl md:text-5xl text-resort-brown font-light leading-tight mb-6">
              Место, где природа<br /> лечит и восстанавливает
            </h2>
            <p className="text-resort-brown/70 leading-relaxed mb-5">
              Курорт Усолье расположен в живописном месте, где подземные воды богатые минералами выходят на поверхность уже более 87 лет. Наши лечебные источники признаны одними из наиболее ценных в регионе.
            </p>
            <p className="text-resort-brown/70 leading-relaxed mb-8">
              Здесь оздоравливаются люди с заболеваниями опорно-двигательного аппарата, нервной системы, органов пищеварения. Мягкий климат, чистый воздух хвойного леса и тишина создают идеальные условия для полного восстановления.
            </p>
            <div className="flex flex-col gap-3">
              {["Собственные минеральные источники", "Команда врачей-курортологов", "Современная база оздоровления", "Проживание в комфортных корпусах"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-resort-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-resort-terracotta" />
                  </div>
                  <span className="text-resort-brown/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={LAKE_IMG} alt="Природа курорта" className="rounded-2xl w-full h-80 md:h-[460px] object-cover shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-resort-terracotta/10 flex items-center justify-center">
                  <Icon name="Award" size={22} className="text-resort-terracotta" />
                </div>
                <div>
                  <div className="font-display text-resort-brown font-medium text-base">Лучший курорт</div>
                  <div className="text-resort-brown/55 text-xs">региона 2023–2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-resort-sand/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-resort-terracotta text-sm uppercase tracking-widest font-body mb-3">Что мы предлагаем</p>
            <h2 className="font-display text-4xl md:text-5xl text-resort-brown font-light">Наши услуги</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-resort-cream rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1 border border-resort-sand group"
              >
                <div className="w-12 h-12 rounded-xl bg-resort-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-resort-terracotta/20 transition-colors">
                  <Icon name={s.icon} fallback="Star" size={22} className="text-resort-terracotta" />
                </div>
                <h3 className="font-display text-xl text-resort-brown font-medium mb-2">{s.title}</h3>
                <p className="text-resort-brown/65 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-resort-terracotta font-medium text-sm">{s.price}</span>
                  <button
                    onClick={() => scrollTo("#booking")}
                    className="text-xs text-resort-brown/50 hover:text-resort-terracotta transition-colors underline underline-offset-4"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-resort-terracotta text-sm uppercase tracking-widest font-body mb-3">Атмосфера</p>
            <h2 className="font-display text-4xl md:text-5xl text-resort-brown font-light">Галерея</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 md:row-span-2">
              <img src={HERO_IMG} alt="Вид курорта" className="w-full h-64 md:h-full min-h-[320px] object-cover rounded-2xl" />
            </div>
            <div>
              <img src={SPA_IMG} alt="СПА" className="w-full h-64 object-cover rounded-2xl" />
            </div>
            <div>
              <img src={LAKE_IMG} alt="Природа" className="w-full h-64 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-resort-brown">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-resort-gold text-sm uppercase tracking-widest font-body mb-3">Планируете отдых?</p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4">Забронируйте отдых</h2>
          <p className="text-white/65 mb-10 leading-relaxed">
            Оставьте заявку — мы свяжемся с вами в течение часа и поможем подобрать оптимальную программу
          </p>
          <form
            className="bg-white/10 backdrop-blur rounded-2xl p-8 text-left grid md:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-white/70 text-xs uppercase tracking-wider block mb-1.5">Ваше имя</label>
              <input
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-resort-gold text-sm"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-white/70 text-xs uppercase tracking-wider block mb-1.5">Телефон</label>
              <input
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-resort-gold text-sm"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="text-white/70 text-xs uppercase tracking-wider block mb-1.5">Желаемые даты</label>
              <input
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-resort-gold text-sm"
                placeholder="Например: июль 2025"
                value={form.dates}
                onChange={(e) => setForm({ ...form, dates: e.target.value })}
              />
            </div>
            <div>
              <label className="text-white/70 text-xs uppercase tracking-wider block mb-1.5">Количество гостей</label>
              <select
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-resort-gold text-sm"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
              >
                {["1", "2", "3", "4", "5+"].map((n) => (
                  <option key={n} value={n} className="text-resort-brown">{n} {n === "1" ? "гость" : n === "5+" ? "гостей" : "гостя"}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-white/70 text-xs uppercase tracking-wider block mb-1.5">Пожелания</label>
              <textarea
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-resort-gold text-sm resize-none h-24"
                placeholder="Интересует конкретная программа, вопросы по проживанию..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-resort-terracotta hover:bg-resort-gold text-white hover:text-resort-brown py-4 rounded-xl font-medium transition-all text-base"
              >
                Отправить заявку
              </button>
              <p className="text-white/40 text-xs text-center mt-3">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-resort-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-resort-terracotta text-sm uppercase tracking-widest font-body mb-3">Наши гости</p>
            <h2 className="font-display text-4xl md:text-5xl text-resort-brown font-light">Отзывы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 shadow-sm border border-resort-sand">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-resort-gold fill-resort-gold" />
                  ))}
                </div>
                <p className="text-resort-brown/75 text-sm leading-relaxed mb-6 italic font-display text-base">
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-resort-brown text-sm">{r.name}</div>
                    <div className="text-resort-brown/45 text-xs">{r.city}</div>
                  </div>
                  <div className="text-resort-brown/40 text-xs">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-resort-sand/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-resort-terracotta text-sm uppercase tracking-widest font-body mb-3">Как нас найти</p>
            <h2 className="font-display text-4xl md:text-5xl text-resort-brown font-light">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-resort-cream rounded-2xl p-7 text-center border border-resort-sand">
              <div className="w-12 h-12 mx-auto rounded-full bg-resort-terracotta/10 flex items-center justify-center mb-4">
                <Icon name="Phone" size={20} className="text-resort-terracotta" />
              </div>
              <div className="font-display text-xl text-resort-brown mb-1">Телефон</div>
              <a href="tel:+78001234567" className="text-resort-terracotta hover:text-resort-brown transition-colors text-sm">
                +7 (800) 123-45-67
              </a>
              <div className="text-resort-brown/45 text-xs mt-1">Звонок бесплатный</div>
            </div>
            <div className="bg-resort-cream rounded-2xl p-7 text-center border border-resort-sand">
              <div className="w-12 h-12 mx-auto rounded-full bg-resort-terracotta/10 flex items-center justify-center mb-4">
                <Icon name="MapPin" size={20} className="text-resort-terracotta" />
              </div>
              <div className="font-display text-xl text-resort-brown mb-1">Адрес</div>
              <div className="text-resort-brown/70 text-sm">Пермский край,</div>
              <div className="text-resort-brown/70 text-sm">п. Усолье, ул. Курортная, 1</div>
            </div>
            <div className="bg-resort-cream rounded-2xl p-7 text-center border border-resort-sand">
              <div className="w-12 h-12 mx-auto rounded-full bg-resort-terracotta/10 flex items-center justify-center mb-4">
                <Icon name="Clock" size={20} className="text-resort-terracotta" />
              </div>
              <div className="font-display text-xl text-resort-brown mb-1">Режим работы</div>
              <div className="text-resort-brown/70 text-sm">Пн–Пт: 8:00 – 20:00</div>
              <div className="text-resort-brown/70 text-sm">Сб–Вс: 9:00 – 18:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-resort-brown text-white/60 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl text-white font-light">Усолье</div>
          <div className="flex gap-6 text-sm flex-wrap justify-center">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="hover:text-resort-gold transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-xs">© 2025 Курорт Усолье</div>
        </div>
      </footer>
    </div>
  );
}