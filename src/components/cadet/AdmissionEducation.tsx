import Icon from "@/components/ui/icon";

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

interface AdmissionEducationProps {
  form: { name: string; phone: string; child: string; email: string };
  setForm: (form: { name: string; phone: string; child: string; email: string }) => void;
}

export default function AdmissionEducation({ form, setForm }: AdmissionEducationProps) {
  return (
    <>
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
    </>
  );
}
