import Icon from "@/components/ui/icon";

const IMG_PARADE = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/71ede505-f04c-4c88-827c-6725c3dbc142.jpg";
const IMG_TRAINING = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/0bec65e9-4ff0-4c83-81b9-dde86297b016.jpg";
const IMG_CLASS = "https://cdn.poehali.dev/projects/dcad3a18-dacc-4dbc-8751-320322bc4da9/files/56210f48-ca5d-4db4-bcae-ee983bcb778e.jpg";

const values = [
  { icon: "Flag", title: "Патриотизм", desc: "Любовь к Родине, уважение к государственной символике и традициям Отечества — основа воспитания каждого кадета." },
  { icon: "Users", title: "Товарищество", desc: "Дух братства и взаимовыручки. Кадет не бросит товарища — это закон корпуса." },
  { icon: "Star", title: "Честь и долг", desc: "Неукоснительное следование Кодексу чести кадета. Слово держат, обещания выполняют." },
  { icon: "Dumbbell", title: "Дисциплина", desc: "Режим дня, самоконтроль и ответственность — качества, которые останутся на всю жизнь." },
];

const navLinks = [
  { label: "О корпусе", href: "#about" },
  { label: "Поступление", href: "#admission" },
  { label: "Учёба", href: "#education" },
  { label: "Воспитание", href: "#upbringing" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

interface UpbringingGalleryContactsProps {
  scrollTo: (href: string) => void;
}

export default function UpbringingGalleryContacts({ scrollTo }: UpbringingGalleryContactsProps) {
  return (
    <>
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
    </>
  );
}
