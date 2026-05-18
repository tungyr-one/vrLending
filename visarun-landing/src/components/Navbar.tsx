import { useState } from "react";
import type { Lang } from "../App";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
}

export default function Navbar({ lang, setLang, dark, setDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    { id: "calculator", en: "Visa Run Calculator", ru: "Калькулятор" },
    { id: "booking",    en: "Book a Place",        ru: "Бронирование" },
    { id: "transfer",   en: "Airport Transfer",    ru: "Трансфер" },
    { id: "contacts",   en: "Contacts",            ru: "Контакты" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between py-4">

        {/* Logo */}
        <span className="font-semibold text-gray-900 dark:text-white text-lg">Transfer Service</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="hover:text-teal dark:hover:text-teal transition-colors"
            >
              {lang === "en" ? l.en : l.ru}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-sm font-medium px-2 py-1 rounded border border-gray-200 dark:border-gray-700 hover:border-teal dark:hover:border-teal transition-colors"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="text-lg"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 pb-4 text-sm">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {lang === "en" ? l.en : l.ru}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
