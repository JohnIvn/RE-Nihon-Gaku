import React from "react";
import Button from "./Button";

export default function Pricing() {
  return (
    <section id="pricing" className="min-h-screen flex items-center" style={{ backgroundColor: '#dff8c2' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h3 className="text-center text-sm font-semibold text-indigo-600">
          Pricing
        </h3>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Simple, transparent pricing
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-100 rounded-xl text-center transform transition lift-on-hover hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-medium text-slate-500">Starter</div>
            <div className="mt-4 text-3xl font-extrabold">Free</div>
            <p className="mt-2 text-sm text-slate-600">
              For testing and small projects
            </p>
            <a className="mt-6 inline-block" href="#">
              <Button>Get started</Button>
            </a>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-xl text-center shadow-lg transform hover:scale-105 transition lift-on-hover">
            <div className="text-sm font-medium text-slate-500">Growth</div>
            <div className="mt-4 text-3xl font-extrabold">
              $29<span className="text-base font-medium">/mo</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Most teams choose this
            </p>
            <a className="mt-6 inline-block" href="#">
              <Button variant="primary">Start free trial</Button>
            </a>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-xl text-center transform transition lift-on-hover hover:shadow-lg hover:-translate-y-1">
            <div className="text-sm font-medium text-slate-500">Enterprise</div>
            <div className="mt-4 text-3xl font-extrabold">Custom</div>
            <p className="mt-2 text-sm text-slate-600">
              For high-volume or custom needs
            </p>
            <a className="mt-6 inline-block" href="#">
              <Button variant="outline">Contact sales</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
