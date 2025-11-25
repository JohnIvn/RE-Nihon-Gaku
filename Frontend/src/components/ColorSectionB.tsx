import React from "react";

export default function ColorSectionB() {
  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: '#dcebfd' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-serif font-extrabold text-slate-900">Learner stats</h3>
            <p className="mt-2 text-slate-700">Real progress from learners around the world.</p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold">100k+</div>
                <div className="text-xs text-slate-500 mt-1">Learners<br/><span className="text-xs">学習者</span></div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold">4.8</div>
                <div className="text-xs text-slate-500 mt-1">Avg. App Rating<br/><span className="text-xs">アプリ評価</span></div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold">1.2M</div>
                <div className="text-xs text-slate-500 mt-1">Lessons Completed<br/><span className="text-xs">完了したレッスン</span></div>
              </div>
            </div>

            <div className="mt-6">
              <a href="#pricing" className="inline-block bg-white border border-slate-200 rounded-lg px-5 py-3 font-medium shadow-sm hover:shadow">
                Start for free
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <blockquote className="text-slate-700">“I finally reached conversational level in 6 months — the daily lessons made it easy to keep a streak.”</blockquote>
            <footer className="mt-4 text-sm text-slate-500">— Aiko S., Kyoto</footer>
          </div>
        </div>
      </div>
    </section>
  );
}
