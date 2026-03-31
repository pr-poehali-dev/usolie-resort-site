import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "О корпусе", href: "#about" },
  { label: "Поступление", href: "#admission" },
  { label: "Учёба", href: "#education" },
  { label: "Воспитание", href: "#upbringing" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

interface HeaderProps {
  scrollTo: (href: string) => void;
}

export default function Header({ scrollTo }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
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
          <button onClick={() => handleNav("#hero")} className="flex items-center gap-3">
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
                onClick={() => handleNav(l.href)}
                className="text-xs font-display tracking-wider text-cadet-gray hover:text-cadet-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNav("#admission")}
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
              <button key={l.href} onClick={() => handleNav(l.href)} className="text-left font-display text-sm text-cadet-light py-1 border-b border-cadet-blue">
                {l.label}
              </button>
            ))}
            <button onClick={() => handleNav("#admission")} className="bg-cadet-gold text-cadet-navy px-4 py-2.5 text-sm font-display tracking-wider mt-1">
              Подать заявление
            </button>
          </div>
        )}
      </header>
    </>
  );
}
