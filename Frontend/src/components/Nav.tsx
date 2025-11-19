import React from "react";
import Button from "./Button";

export default function Nav() {
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-green-600">
            RE•Nihon•Gaku
          </div>
          <span className="text-sm text-green-500">Learn</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a className="hover:text-slate-900" href="#">
            Home
          </a>
          <a className="hover:text-slate-900" href="#features">
            Features
          </a>
          <a className="hover:text-slate-900" href="#pricing">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden md:inline-block" href="#">
            Log in
          </a>
          <a className="inline-block" href="#">
            <Button>Get started</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
