const features = [
  {
    title: "Fast Processing",
    text: "Organized trips with minimal waiting time."
  },
  {
    title: "Professional Support",
    text: "We guide you through every step."
  },
  {
    title: "Affordable Price",
    text: "Transparent pricing with no hidden fees."
  }
];

export default function Features() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}