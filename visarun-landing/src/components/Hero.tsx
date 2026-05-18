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
    <section
      className="relative flex items-center justify-center min-h-[88vh] text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      <div className="relative z-10 max-w-2xl px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
          {t.h1}
        </h1>
        <p className="text-xl text-white/85 max-w-xl mx-auto mb-10 drop-shadow">
          {t.sub}
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-accent hover:bg-accent-dk text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
        >
          {t.cta}
        </button>
      </div>
    </section>
  );
}
