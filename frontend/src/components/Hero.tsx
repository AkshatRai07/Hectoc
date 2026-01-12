"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-6">
            The Ultimate Math Challenge
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Can you reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">100?</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            Given a 6-digit number, use any operations to equate it to 100. 
            Compete with friends, climb the leaderboard, and sharpen your mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Play Now <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-700 transition-colors">
              View Leaderboard
            </button>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -z-10" />
      </div>
    </section>
  );
};
