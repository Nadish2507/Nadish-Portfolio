import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="achievements" className="relative py-24 px-6 overflow-hidden bg-white/40 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative border-l-2 border-slate-200 dark:border-slate-800/80 pl-8 ml-4 space-y-12"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Trophy Icon */}
              <span className="absolute -left-[53px] top-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform">
                <Trophy className="w-5 h-5" />
              </span>

              {/* Achievement Card */}
              <div className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all hover:shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-slate-850 dark:text-white">
                    {ach.title}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 py-1 px-2.5 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {ach.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{ach.organization}</span>
                </div>

                {ach.description && (
                  <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
