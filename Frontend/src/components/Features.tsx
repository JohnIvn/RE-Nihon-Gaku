import React from "react";

const features = [
  {
    title: "Payments",
    desc: "Accept cards, wallets, and bank debits worldwide with a single integration.",
  },
  {
    title: "Billing",
    desc: "Flexible subscriptions, metered billing, and powerful invoicing tools.",
  },
  {
    title: "Connect",
    desc: "Build marketplaces and platforms with payouts and compliance built-in.",
  },
  {
    title: "Radar",
    desc: "Advanced fraud protection using machine learning and signals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="min-h-screen flex items-center" style={{ backgroundColor: '#fed2e4' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h3 className="text-center text-sm font-semibold text-indigo-600">
          Built for developers
        </h3>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Everything you need to accept payments and scale
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 bg-white border border-slate-100 rounded-lg shadow-sm transform transition lift-on-hover hover:shadow-lg hover:-translate-y-2"
            >
              <div className="h-10 w-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold transition-transform duration-300 group-hover:scale-110">
                {f.title[0]}
              </div>
              <h4 className="mt-4 font-semibold text-slate-900">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
