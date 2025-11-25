import React from "react";

export default function ColorSectionA() {
  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: '#feedb3' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif font-extrabold text-slate-900">How it works</h3>
          <p className="mt-3 text-slate-700">Daily bite-sized lessons, interactive practice, and real conversation — built to keep you learning.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <i className="bi bi-calendar-check text-2xl text-green-600" aria-hidden />
              <div>
                <div className="font-semibold">Daily Lessons</div>
                <div className="text-sm text-slate-600 mt-1">5–10 minute lessons to build habit<br/><span className="text-xs text-slate-400">毎日5〜10分のレッスン</span></div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <i className="bi bi-puzzle text-2xl text-indigo-600" aria-hidden />
              <div>
                <div className="font-semibold">Interactive Exercises</div>
                <div className="text-sm text-slate-600 mt-1">Practice reading, listening, and writing<br/><span className="text-xs text-slate-400">読む・聞く・書くの練習</span></div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <i className="bi bi-chat-dots text-2xl text-pink-500" aria-hidden />
              <div>
                <div className="font-semibold">Conversation Practice</div>
                <div className="text-sm text-slate-600 mt-1">Live or simulated chats to build fluency<br/><span className="text-xs text-slate-400">会話練習で流暢さを向上</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
