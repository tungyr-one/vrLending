import type { Lang } from "../App";

const copy = {
  en: {
    h1:  "Visa Runs & Transport in Novi Sad and Belgrade",
    sub: "We get you to the border and back — legally, on time, stress-free.",
    cta: "Book Now",
  },
  ru: {
    h1:  "Визаран и трансфер в Нови-Саде и Белграде",
    sub: "Довезём до границы и обратно — законно, вовремя, без лишних хлопот.",
    cta: "Забронировать",
  },
};

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="py-24 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
        {t.h1}
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
        {t.sub}
      </p>
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-accent hover:bg-accent-dk text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
      >
        {t.cta}
      </button>
    </section>
  );
}
