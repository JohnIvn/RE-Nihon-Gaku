import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About + Features */}
          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-3xl font-serif font-extrabold">About</h4>
            <div className="text-sm text-slate-700 mt-1">について</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-800">
              <li>
                <a href="#" className="hover:underline block">
                  About Us
                </a>
                <div className="text-xs text-slate-500 mt-1">会社概要</div>
              </li>
              <li>
                <a href="#" className="hover:underline block">
                  The team
                </a>
                <div className="text-xs text-slate-500 mt-1">チーム</div>
              </li>
            </ul>

            <div className="my-6 border-t border-slate-100" />

            <h4 className="text-2xl font-serif font-extrabold">Features</h4>
            <div className="text-sm text-slate-700 mt-1">特徴</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-800">
              <li>
                <a href="#" className="hover:underline block">
                  Introduction
                </a>
                <div className="text-xs text-slate-500 mt-1">はじめに</div>
              </li>
              <li>
                <a href="#" className="hover:underline block">
                  Suite
                </a>
                <div className="text-xs text-slate-500 mt-1">
                  スイートルーム
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Courses + Subscribe */}
          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-2xl font-serif font-extrabold">Courses</h4>
            <div className="text-sm text-slate-700 mt-1">コース</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-800">
              <li>
                <div>Spring</div>
                <div className="text-xs text-slate-500 mt-1">春</div>
              </li>
              <li>
                <div>Summer</div>
                <div className="text-xs text-slate-500 mt-1">夏</div>
              </li>
              <li>
                <div>Autumn</div>
                <div className="text-xs text-slate-500 mt-1">秋</div>
              </li>
              <li>
                <div>Winter</div>
                <div className="text-xs text-slate-500 mt-1">冬</div>
              </li>
            </ul>

            <div className="my-6 border-t border-slate-100" />

            <h4 className="text-xl font-serif font-extrabold">
              Subscribe to our Newsletter
            </h4>
            <div className="text-sm text-slate-700">
              ニュースレターを購読する
            </div>
            <form className="mt-4 flex gap-3 flex-col sm:flex-row items-center">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Email address"
                className="w-full sm:flex-1 px-6 py-3 rounded-lg border border-slate-200 bg-white shadow-sm text-sm placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="w-28 px-3 py-2 rounded border border-slate-200 bg-white text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 3: Pricing + App tiles */}
          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-2xl font-serif font-extrabold">Pricing</h4>
            <div className="text-sm text-slate-700 mt-1">価格設定</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-800">
              <li>
                <div>Free Version</div>
                <div className="text-xs text-slate-500 mt-1">無料版</div>
              </li>
              <li>
                <div>Paid Version</div>
                <div className="text-xs text-slate-500 mt-1">有料版</div>
              </li>
              <li>
                <div>Mobile Version</div>
                <div className="text-xs text-slate-500 mt-1">モバイル版</div>
              </li>
            </ul>

            <div className="mt-6 text-sm text-slate-700">Get it on:</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
              >
                <i className="bi bi-google-play text-lg" aria-hidden />
                <div className="text-left">
                  <div className="font-medium">Google Play</div>
                  <div className="text-xs text-slate-500">グーグルプレイ</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
              >
                <i className="bi bi-apple text-lg" aria-hidden />
                <div className="text-left">
                  <div className="font-medium">Apple</div>
                  <div className="text-xs text-slate-500">アップル</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
              >
                <i className="bi bi-amazon text-lg" aria-hidden />
                <div className="text-left">
                  <div className="font-medium">Amazon</div>
                  <div className="text-xs text-slate-500">アマゾン</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm"
              >
                <i className="bi bi-youtube text-lg" aria-hidden />
                <div className="text-left">
                  <div className="font-medium">Youtube</div>
                  <div className="text-xs text-slate-500">ユーチューブ</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Site Language */}
          <div className="pt-6 border-t border-pink-200">
            <h4 className="text-2xl font-serif font-extrabold">
              Site Language
            </h4>
            <div className="text-sm text-slate-700 mt-1">サイトの言語</div>
            <ul className="mt-6 space-y-4 text-sm text-slate-800">
              <li>
                <div>English/JP (EN-JP)</div>
                <div className="text-xs text-slate-500 mt-1">
                  英語/日本語 (EN-JP)
                </div>
              </li>
              <li>
                <div>English (EN-US)</div>
                <div className="text-xs text-slate-500 mt-1">英語 (EN-US)</div>
              </li>
              <li>
                <div>Japanese (JP)</div>
                <div className="text-xs text-slate-500 mt-1">日本語 (JP)</div>
              </li>
              <li>
                <div>Tagalog (PH-TL)</div>
                <div className="text-xs text-slate-500 mt-1">
                  タガログ語 (PH-TL)
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-pink-200" />

        <div className="flex items-center justify-between text-sm text-slate-700">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy (プライバシーポリシー)
            </a>
            <span className="text-slate-400">|</span>
            <a href="#" className="hover:underline">
              Cookie Policy (クッキーポリシー)
            </a>
            <span className="text-slate-400">|</span>
            <a href="#" className="hover:underline">
              Terms &amp; Conditions (ご利用条件)
            </a>
          </div>

          <div className="text-right">
            © {new Date().getFullYear()} Nihon Gaku (日本研究)
          </div>
        </div>
      </div>
    </footer>
  );
}
