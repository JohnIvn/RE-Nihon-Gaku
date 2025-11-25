import React from "react";

const testimonials = [
  {
    quote:
      "Integrating RE•Nihon•Gaku was seamless — our checkout conversion improved immediately.",
    name: "Aiko Suzuki",
    title: "Head of Product, KyotoShop",
  },
  {
    quote:
      "APIs were well documented and the dev experience saved us weeks of work.",
    name: "Kenji Tanaka",
    title: "CTO, BentoCloud",
  },
  {
    quote:
      "Reliable payouts and excellent fraud protection — highly recommend.",
    name: "Miyu Hara",
    title: "Founder, NoriMarket",
  },
];

export default function Testimonial() {
  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: '#fdd0fd' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h3 className="text-center text-sm font-semibold text-indigo-600">
          Loved by teams
        </h3>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          What customers say
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="p-6 bg-white border border-slate-100 rounded-lg shadow-sm transform transition lift-on-hover hover:-translate-y-2"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs">{t.title}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
