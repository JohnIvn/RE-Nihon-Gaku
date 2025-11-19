import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} RE•Nihon•Gaku — Built with ♥
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-900">
            Terms
          </a>
          <a href="#" className="hover:text-slate-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
