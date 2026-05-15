import type { Lang } from "../App";

const copy = {
  en: {
    heading: "About Us",
    body: [
      "We're a transport company based in Novi Sad, helping expats and digital nomads stay legally in Serbia.",
      "Whether you need a visa run to reset your stay, a ride to the airport, or a private transfer — we handle the logistics so you don't have to figure it out alone.",
      "We've done hundreds of visa runs across Serbia, and we know every route, wait time, and border quirk. English and Russian spoken.",
    ],
  },
  ru: {
    heading: "О нас",
    body: [
      "Мы транспортная компания из Нови-Сада. Помогаем экспатам и цифровым кочевникам оставаться в Сербии легально.",
      "Нужен визаран, чтобы обнулить срок пребывания? Трансфер в аэропорт? Частная поездка? Мы берём логистику на себя — вам не нужно разбираться в этом самостоятельно.",
      "Сотни визаранов по Сербии за плечами: знаем каждый маршрут, время ожидания и особенности каждого пограничного перехода. Говорим по-русски и по-английски.",
    ],
  },
};

export default function About({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="about" className="py-16 border-t border-gray-100 dark:border-gray-800 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {t.heading}
      </h2>
      <div className="max-w-2xl mx-auto space-y-4 text-gray-600 dark:text-gray-400 text-left">
        {t.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
