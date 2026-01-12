"use client";

import { Calculator } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Calculator className="h-5 w-5 text-indigo-500" />
          <span className="font-bold text-white">Hectoc</span>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-slate-600 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Hectoc App.</p>
      </div>
    </footer>
  );
};
