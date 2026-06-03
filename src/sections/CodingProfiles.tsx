import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  const { codingProfiles } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 90 } }
  };

  return (
    <section id="coding" className="relative py-24 px-6 bg-slate-100/30 dark:bg-slate-900/20">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Competitive Coding
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Coding Profiles
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg text-sm">
            Tracking algorithms solves and data structure training across competitive platforms.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Profiles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {codingProfiles.map((profile, idx) => {
            const isLeetcode = profile.platform.toLowerCase() === 'leetcode';
            const solveCount = parseInt(profile.metrics) || 0;
            // map solves to visual gauges
            const maxVal = isLeetcode ? 200 : 1000;
            const percentage = Math.min((solveCount / maxVal) * 100, 100);

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/80 hover:border-slate-350 dark:hover:border-slate-700/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Platform Brand Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${
                        isLeetcode 
                          ? 'bg-amber-500/10 text-amber-500' 
                          : 'bg-blue-500/10 text-blue-500'
                      }`}>
                        <Code2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-850 dark:text-white">
                          {profile.platform}
                        </h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          Algorithms & Data Structures
                        </p>
                      </div>
                    </div>

                    {profile.url && (
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                        title="View Profile"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Main Metric Value */}
                  <div className="mb-6">
                    <div className="text-slate-450 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                      Problems Solved
                    </div>
                    <div className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1.5">
                      {profile.metrics.split(' ')[0]}
                      <span className="text-sm font-semibold text-slate-500">problems</span>
                    </div>
                  </div>

                  {/* Visual gauge */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3.5 h-3.5" />
                        Milestone progress
                      </span>
                      <span>Target: {maxVal}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          isLeetcode 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {profile.url && (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-xs font-bold text-center block w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors text-slate-600 dark:text-slate-350"
                  >
                    Inspect Profile Webpage
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
