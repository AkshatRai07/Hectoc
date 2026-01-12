"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  ArrowRight,
} from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple Rules, Infinite Complexity</h2>
          <p className="mt-4 text-lg text-slate-400">Insert operators between digits. Order of operations applies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Example Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden"
          >
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 uppercase font-semibold mb-2">The Challenge</p>
                <div className="text-4xl font-mono text-white tracking-widest bg-slate-900 p-4 rounded-lg text-center border border-slate-700">
                  3 3 3 3 3 3
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="text-indigo-500 rotate-90 md:rotate-0" size={32} />
              </div>

              <div>
                <p className="text-sm text-slate-400 uppercase font-semibold mb-2">The Solution</p>
                <div className="text-4xl font-mono text-indigo-400 tracking-widest bg-slate-900 p-4 rounded-lg text-center border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  (333 - 33) / 3
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explanation Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >            
            <div className="flex gap-4">
              <div className="bg-purple-900/50 p-3 rounded-lg h-fit">
                <Trophy className="text-purple-400 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Compete Globally</h3>
                <p className="text-slate-400 mt-2">Solve it in the fewest operations or the shortest time to climb the global leaderboards.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-emerald-900/50 p-3 rounded-lg h-fit">
                <Users className="text-emerald-400 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Multiplayer Duel</h3>
                <p className="text-slate-400 mt-2">Challenge a friend in real-time. First to hit 100 wins the match.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
