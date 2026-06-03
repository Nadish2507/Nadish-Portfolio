import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-orb w-[250px] h-[250px] bg-indigo-500/10 top-1/4 right-0" />
      <div className="glow-orb w-[250px] h-[250px] bg-blue-500/10 bottom-1/4 left-0" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg text-sm">
            Categorized overview of coding technologies, architectures, and engineering concepts.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((categoryItem, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-slate-350 dark:hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-850 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800/60 pb-3 mb-5">
                  {categoryItem.category}
                </h3>
                <div className="space-y-4">
                  {categoryItem.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-slate-450 dark:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
