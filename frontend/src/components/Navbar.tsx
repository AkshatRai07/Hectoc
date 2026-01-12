"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator,
  Menu, 
  X 
} from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-indigo-500 p-1.5 rounded-lg">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Hectoc</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">How it Works</a>
            <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Features</a>
            <div className="flex items-center gap-4">
              <button className="text-slate-300 hover:text-white font-medium text-sm">
                Log In
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white">How it Works</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white">Features</a>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <button className="w-full text-center py-2 text-slate-300 border border-slate-700 rounded-lg">Log In</button>
              <button className="w-full text-center py-2 bg-indigo-600 text-white rounded-lg">Sign Up</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
