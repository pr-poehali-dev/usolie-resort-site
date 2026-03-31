import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_PARADE = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/71ede505-f04c-4c88-827c-6725c3dbc142.jpg";
const IMG_TRAINING = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/0bec65e9-4ff0-4c83-81b9-dde86297b016.jpg";
const IMG_CLASS = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/56210f48-ca5d-4db4-bcae-ee983bcb778e.jpg";

const navLinks = [
  { label: "О корпусе", href: "#about" },
  { label: "Поступление", href: "#admission" },
  { label: "Учёба", href: "#education" },
  { label: "Воспитание", href: "#upbringing" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const stats = [
  { value: "7–11", label: "классы обучения" },
  { value: "5", label: "лет подготовки" },
  { value: "100%", label: "поступают в вузы" },
  { value: "1", label: "корпус в регионе" },
];

const admissionSteps = [
  {
    num: "01",
    title: "Подача заявления",
    desc: "Родители или опекуны подают заявление в корпус. Срок приёма — с 1 апреля по 31 мая текущего года.",
  },
  {
    num: "02",
    title: "Сбор документов",
    desc: "Свидетельство о рождении, документы об образовании (за 6 классов), медицинская справка, характеристика из школы.",
  },
  {
    num: "03",
    title: "Вступительные испытания",
    desc: "Проверка физической подготовки, психологическое тестирование, собеседование с кандидатом и родителями.",
  },
  {
    num: "04",
    title: "Зачисление",
    desc: "По результатам конкурсного отбора издаётся приказ о зачислении. Уведомление направляется родителям.",
  },
];

const requirements = [
  "Гражданство Российской Федерации",
  "Мужской пол, возраст 12–13 лет (7 класс)",
  "Состояние здоровья — I или II группа",
  "Оценки за 6 класс не ниже «удовлетворительно»",
  "Отсутствие приводов в полицию",
  "Согласие кандидата на обучение",
];

const subjects = [
  { icon: "BookOpen", name: "Общеобразовательные предметы", desc: "Полная программа ФГОС: математика, физика, история, литература и другие дисциплины" },
  { icon: "Shield", name: "Военная подготовка", desc: "Строевая подготовка, уставы ВС РФ, основы военного дела и тактики" },
  { icon: "Swords", name: "Физическая подготовка", desc: "Ежедневные тренировки, рукопашный бой, плавание, лёгкая атлетика" },
  { icon: "Globe", name: "Иностранные языки", desc: "Английский язык с углублённым изучением военной лексики" },
  { icon: "Music", name: "Творческие дисциплины", desc: "Хоровое пение, оркестровая подготовка, театральный кружок" },
  { icon: "Compass", name: "Прикладные науки", desc: "Топография, основы выживания, оказание первой медицинской помощи" },
];

const values = [
  { icon: "Flag", title: "Патриотизм", desc: "Любовь к Родине, уважение к государственной символике и традициям Отечества — основа воспитания каждого кадета." },
  { icon: "Users", title: "Товарищество", desc: "Дух братства и взаимовыручки. Кадет не бросит товарища — это закон корпуса." },
  { icon: "Star", title: "Честь и долг", desc: "Неукоснительное следование Кодексу чести кадета. Слово держат, обещания выполняют." },
  { icon: "Dumbbell", title: "Дисциплина", desc: "Режим дня, самоконтроль и ответственность — качества, которые останутся на всю жизнь." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", child: "", email: "" });

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cadet-dark font-body text-cadet-light">

      {/* TOP BAR */}
      <div className="bg-cadet-navy border-b border-cadet-gold/20 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center text-xs text-cadet-gray font-body">
          <span>Иркутская область, г. Усолье-Сибирское</span>
          <div className="flex gap-6">
            <a href="tel:+73952000000" className="hover:text-cadet-gold transition-colors">+7 (3952) 00-00-00</a>
            <a href="mailto:ukk@edu.ru" className="hover:text-cadet-gold transition-colors">ukk@edu.ru</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-cadet-navy/95 backdrop-blur border-b border-cadet-gold/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <div className="w-9 h-9 bg-cadet-gold rounded flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={18} className="text-cadet-navy" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="font-display text-sm text-cadet-light leading-none">Усольский</div>
              <div className="font-display text-xs text-cadet-gold leading-none mt-0.5">кадетский корпус</div>
            </div>
          </button>

          <nav className="hidden lg:flex gap-6">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-xs font-display tracking-wider text-cadet-gray hover:text-cadet-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#admission")}
            className="hidden md:flex items-center gap-2 bg-cadet-gold text-cadet-navy px-4 py-2 text-xs font-display tracking-wider hover:bg-cadet-gold-light transition-colors"
          >
            <Icon name="FileText" size={14} />
            Подать заявление
          </button>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-cadet-light" />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-cadet-navy border-t border-cadet-gold/20 px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left font-display text-sm text-cadet-light py-1 border-b border-cadet-blue">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#admission")} className="bg-cadet-gold text-cadet-navy px-4 py-2.5 text-sm font-display tracking-wider mt-1">
              Подать заявление
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={IMG_PARADE} alt="Кадеты на параде" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-cadet-dark/95 via-cadet-dark/70 to-cadet-dark/20" />
        <div className="absolute inset-0 stripe-bg" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-[0.3em]">
                ИРКУТСКАЯ ОБЛАСТЬ · УСОЛЬЕ-СИБИРСКОЕ
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl text-cadet-light leading-tight mb-2">
              Усольский
            </h1>
            <h1 className="font-display text-5xl md:text-7xl text-cadet-gold leading-tight mb-6">
              Кадетский корпус
            </h1>

            <p className="font-body text-cadet-gray text-lg leading-relaxed mb-10 max-w-lg normal-case">
              Воспитываем настоящих мужчин — патриотов, лидеров, защитников Отечества. Приём с 7 класса.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#admission")}
                className="flex items-center justify-center gap-2 bg-cadet-gold hover:bg-cadet-gold-light text-cadet-navy px-8 py-4 font-display text-sm tracking-wider transition-all hover:scale-105"
              >
                <Icon name="FileText" size={16} />
                Условия поступления
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="flex items-center justify-center gap-2 border border-cadet-gold/50 text-cadet-light hover:border-cadet-gold hover:text-cadet-gold px-8 py-4 font-display text-sm tracking-wider transition-all"
              >
                <Icon name="Info" size={16} />
                О корпусе
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-cadet-gold/30" />
      </section>

      {/* STATS */}
      <section className="bg-cadet-navy border-b border-cadet-gold/20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-8 text-center ${i < stats.length - 1 ? "border-r border-cadet-gold/15" : ""}`}>
              <div className="font-display text-3xl md:text-4xl text-cadet-gold mb-1">{s.value}</div>
              <div className="text-cadet-gray text-xs font-body normal-case">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-cadet-dark">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-widest">О корпусе</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cadet-light mb-6">
              Школа настоящих мужчин
            </h2>
            <p className="text-cadet-gray leading-relaxed mb-5 normal-case font-body">
              Усольский кадетский корпус — государственное учреждение, осуществляющее подготовку юношей к военной и государственной службе. Корпус расположен в Иркутской области, в городе Усолье-Сибирское.
            </p>
            <p className="text-cadet-gray leading-relaxed mb-8 normal-case font-body">
              Мы даём не только качественное образование по государственному стандарту, но и воспитываем характер, волю, честь. Наши выпускники поступают в ведущие военные и гражданские вузы страны.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Building2", text: "Государственное учреждение" },
                { icon: "GraduationCap", text: "Аттестат государственного образца" },
                { icon: "Bed", text: "Полное государственное обеспечение" },
                { icon: "HeartHandshake", text: "Воспитатели и педагоги 24/7" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 bg-cadet-navy p-4 border border-cadet-blue">
                  <Icon name={item.icon} fallback="Check" size={18} className="text-cadet-gold mt-0.5 flex-shrink-0" />
                  <span className="text-cadet-gray text-sm normal-case font-body">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-cadet-gold/20" />
            <img src={IMG_TRAINING} alt="Тренировка кадетов" className="w-full h-[420px] object-cover relative z-10" />
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-cadet-navy/90 border-t border-cadet-gold px-6 py-4">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={16} className="text-cadet-gold flex-shrink-0" />
                <span className="font-display text-sm text-cadet-light tracking-wide">
                  Иркутская область, г. Усолье-Сибирское
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION */}
      <section id="admission" className="py-24 px-6 bg-cadet-navy stripe-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-widest">Поступление</span>
              <div className="h-px w-10 bg-cadet-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cadet-light">Условия приёма</h2>
            <p className="text-cadet-gray mt-3 normal-case font-body">Приём ведётся на 7 класс — только юноши</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Steps */}
            <div>
              <h3 className="font-display text-xl text-cadet-gold mb-6 border-b border-cadet-gold/30 pb-3">
                Этапы поступления
              </h3>
              <div className="flex flex-col gap-6">
                {admissionSteps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="font-display text-3xl text-cadet-gold/30 leading-none w-10 flex-shrink-0">{step.num}</div>
                    <div>
                      <div className="font-display text-base text-cadet-light mb-1">{step.title}</div>
                      <p className="text-cadet-gray text-sm leading-relaxed normal-case font-body">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="font-display text-xl text-cadet-gold mb-6 border-b border-cadet-gold/30 pb-3">
                Требования к кандидатам
              </h3>
              <div className="flex flex-col gap-3 mb-8">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cadet-gold/10 border border-cadet-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-cadet-gold" />
                    </div>
                    <span className="text-cadet-gray text-sm normal-case font-body">{req}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="bg-cadet-dark border border-cadet-gold/30 p-6">
                <h4 className="font-display text-base text-cadet-light mb-4">Записаться на консультацию</h4>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                  <input
                    className="bg-cadet-navy border border-cadet-blue px-4 py-3 text-cadet-light placeholder:text-cadet-gray/40 text-sm focus:outline-none focus:border-cadet-gold font-body normal-case"
                    placeholder="Имя родителя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    className="bg-cadet-navy border border-cadet-blue px-4 py-3 text-cadet-light placeholder:text-cadet-gray/40 text-sm focus:outline-none focus:border-cadet-gold font-body normal-case"
                    placeholder="Телефон"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    className="bg-cadet-navy border border-cadet-blue px-4 py-3 text-cadet-light placeholder:text-cadet-gray/40 text-sm focus:outline-none focus:border-cadet-gold font-body normal-case"
                    placeholder="Имя кандидата"
                    value={form.child}
                    onChange={(e) => setForm({ ...form, child: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="bg-cadet-gold hover:bg-cadet-gold-light text-cadet-navy py-3 font-display text-sm tracking-wider transition-colors mt-1"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 bg-cadet-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-widest">Учёба</span>
              <div className="h-px w-10 bg-cadet-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cadet-light">Образовательная программа</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cadet-blue/30">
            {subjects.map((s) => (
              <div key={s.name} className="bg-cadet-dark p-7 hover:bg-cadet-navy transition-colors group">
                <Icon name={s.icon} fallback="BookOpen" size={24} className="text-cadet-gold mb-4" />
                <h3 className="font-display text-base text-cadet-light mb-2 group-hover:text-cadet-gold transition-colors">{s.name}</h3>
                <p className="text-cadet-gray text-sm leading-relaxed normal-case font-body">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-cadet-navy border-l-4 border-cadet-gold px-8 py-6">
            <div className="flex items-start gap-4">
              <Icon name="GraduationCap" size={24} className="text-cadet-gold flex-shrink-0 mt-1" />
              <div>
                <div className="font-display text-base text-cadet-light mb-1">По окончании корпуса</div>
                <p className="text-cadet-gray text-sm leading-relaxed normal-case font-body">
                  Выпускники получают аттестат о среднем общем образовании государственного образца и свидетельство об окончании кадетского корпуса. 100% выпускников поступают в высшие учебные заведения — военные академии, институты МВД и ФСБ, а также ведущие гражданские университеты страны.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPBRINGING */}
      <section id="upbringing" className="py-24 px-6 bg-cadet-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cadet-gold" />
                <span className="font-display text-cadet-gold text-xs tracking-widest">Воспитание</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-cadet-light mb-6">
                Кодекс чести кадета
              </h2>
              <p className="text-cadet-gray leading-relaxed mb-10 normal-case font-body">
                Воспитательная система корпуса строится на традициях российского кадетского образования. Каждый кадет живёт и действует согласно кодексу чести — документу, определяющему ценности и нормы поведения.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-5 items-start">
                    <div className="w-11 h-11 bg-cadet-gold/10 border border-cadet-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={v.icon} fallback="Star" size={20} className="text-cadet-gold" />
                    </div>
                    <div>
                      <div className="font-display text-base text-cadet-light mb-1">{v.title}</div>
                      <p className="text-cadet-gray text-sm leading-relaxed normal-case font-body">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={IMG_CLASS} alt="Занятия кадетов" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cadet-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-cadet-dark/80 border border-cadet-gold/40 px-6 py-5 backdrop-blur">
                <div className="font-display text-cadet-gold text-xs tracking-widest mb-2">ДЕВИЗ КОРПУСА</div>
                <div className="font-display text-cadet-light text-xl leading-snug">
                  «Честь. Долг. Отечество.»
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-cadet-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-widest">Галерея</span>
              <div className="h-px w-10 bg-cadet-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cadet-light">Жизнь корпуса</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2">
              <img src={IMG_PARADE} alt="Парадный строй" className="w-full h-full min-h-[280px] object-cover object-top" />
            </div>
            <img src={IMG_TRAINING} alt="Тренировка" className="w-full h-48 md:h-auto object-cover" />
            <img src={IMG_CLASS} alt="Учёба" className="w-full h-48 md:h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-cadet-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-cadet-gold" />
              <span className="font-display text-cadet-gold text-xs tracking-widest">Контакты</span>
              <div className="h-px w-10 bg-cadet-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cadet-light">Свяжитесь с нами</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["Иркутская область,", "г. Усолье-Сибирское", "ул. Кадетская, 1"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (3952) 00-00-00", "Приёмная комиссия:", "+7 (3952) 00-00-01"],
              },
              {
                icon: "Clock",
                title: "Режим работы",
                lines: ["Пн–Пт: 9:00 – 17:00", "Сб: 10:00 – 14:00", "Вс: выходной"],
              },
            ].map((c) => (
              <div key={c.title} className="bg-cadet-dark border border-cadet-blue hover:border-cadet-gold/40 transition-colors p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-cadet-gold/10 border border-cadet-gold/30 flex items-center justify-center">
                    <Icon name={c.icon} fallback="Info" size={18} className="text-cadet-gold" />
                  </div>
                  <span className="font-display text-base text-cadet-light">{c.title}</span>
                </div>
                {c.lines.map((line) => (
                  <div key={line} className="text-cadet-gray text-sm normal-case font-body mb-1">{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cadet-dark border-t border-cadet-gold/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cadet-gold flex items-center justify-center">
              <Icon name="Shield" size={16} className="text-cadet-navy" />
            </div>
            <div>
              <div className="font-display text-sm text-cadet-light">Усольский кадетский корпус</div>
              <div className="text-cadet-gray text-xs normal-case font-body">Иркутская область, г. Усолье-Сибирское</div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="font-display text-xs text-cadet-gray hover:text-cadet-gold transition-colors tracking-wider">
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-cadet-gray/50 text-xs font-body normal-case">© 2025 УКК</div>
        </div>
      </footer>
    </div>
  );
}
