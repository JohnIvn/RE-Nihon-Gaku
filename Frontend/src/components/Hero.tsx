import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="page-bg-playful">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Learn Japanese with fun, bite-sized lessons
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Daily 5–10 minute lessons, interactive exercises, and conversation
            practice — built to keep you coming back.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-block">
              <Button className="text-lg">Start for free</Button>
            </a>
            <a href="#features" className="inline-block">
              <Button variant="ghost">How it works</Button>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold text-green-600">
                Daily streaks
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold text-slate-600">
                Interactive exercises
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-80 h-80 bg-green-50 rounded-3xl flex items-center justify-center shadow-lg bounce-slow rounded-blob">
            {/* Mascot SVG — simple playful owl-style placeholder */}
            <svg
              width="220"
              height="220"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <g>
                <ellipse cx="100" cy="110" rx="70" ry="70" fill="url(#g1)" />
                <circle cx="70" cy="90" r="18" fill="#fff" />
                <circle cx="130" cy="90" r="18" fill="#fff" />
                <circle
                  cx="70"
                  cy="92"
                  r="8"
                  fill="#0f172a"
                  className="mascot-eye"
                />
                <circle
                  cx="130"
                  cy="92"
                  r="8"
                  fill="#0f172a"
                  className="mascot-eye"
                />
                <path
                  d="M90 120 q10 20 20 0"
                  stroke="#fff"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
