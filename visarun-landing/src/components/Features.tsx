import { FaBolt, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import type { IconType } from "react-icons";

const features: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FaBolt,
    title: "Fast Processing",
    text: "Organized trips with minimal waiting time.",
  },
  {
    icon: FaShieldAlt,
    title: "Professional Support",
    text: "We guide you through every step.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Affordable Price",
    text: "Transparent pricing with no hidden fees.",
  },
];

export default function Features() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
        Why Choose Us
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
        Everything you need for a smooth, hassle-free visa run.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 text-left">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Icon className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{f.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
