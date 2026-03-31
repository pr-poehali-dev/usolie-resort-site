import Icon from "@/components/ui/icon";

const IMG_PARADE = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/71ede505-f04c-4c88-827c-6725c3dbc142.jpg";
const IMG_TRAINING = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/0bec65e9-4ff0-4c83-81b9-dde86297b016.jpg";

const stats = [
  { value: "7–11", label: "классы обучения" },
  { value: "5", label: "лет подготовки" },
  { value: "100%", label: "поступают в вузы" },
  { value: "1", label: "корпус в регионе" },
];

interface HeroAboutProps {
  scrollTo: (href: string) => void;
}

export default function HeroAbout({ scrollTo }: HeroAboutProps) {
  return (
    <>
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
    </>
  );
}
