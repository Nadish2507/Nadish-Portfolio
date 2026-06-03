import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Target, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about" className="relative py-24 px-6 bg-white/40 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Introduction
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me & Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio and Objectives (Left Column) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Professional Summary
                </h3>
                <p className="text-slate-650 dark:text-slate-350 leading-relaxed">
                  {about}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-500" />
                  Career Objectives
                </h3>
                <p className="text-slate-650 dark:text-slate-350 leading-relaxed">
                  My immediate objective is to strengthen my foundational knowledge in algorithms and database management systems while designing real-world projects. I aspire to build complex web applications and leverage machine learning models to solve data-driven, industrial challenges.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30 text-center">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">7.23</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-1">B.E. CGPA</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30 text-center">
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">3+</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-1">Core Projects</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30 text-center">
                  <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">650+</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-1">Coding Solves</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Timeline (Right Column) */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              Academic Background
            </h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="relative border-l-2 border-slate-200 dark:border-slate-800/80 pl-6 ml-3 space-y-8"
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[33px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-500 group-hover:scale-110 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </span>

                  {/* Card content */}
                  <div className="glass-card rounded-xl p-5 border border-slate-200/50 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 py-1 px-2.5 rounded-md">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-slate-650 dark:text-slate-400">
                      {edu.degree}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      <Award className="w-4 h-4" />
                      <span>{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
