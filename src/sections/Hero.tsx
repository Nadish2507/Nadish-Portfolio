import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Github, Linkedin, Code, Cpu, Server, Brain, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpeg';

export const Hero: React.FC = () => {
  const { name, socials } = portfolioData;
  const taglines = [
    "Full Stack Developer",
    "AI & ML Enthusiast",
    "MERN Stack Developer",
    "Problem Solver"
  ];

  const [currentTaglineIdx, setCurrentTaglineIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const fullText = taglines[currentTaglineIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typedText === fullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentTaglineIdx((prev) => (prev + 1) % taglines.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? fullText.substring(0, typedText.length - 1)
            : fullText.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTaglineIdx, taglines]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background Orbs */}
      <div className="glow-orb w-[300px] h-[300px] bg-blue-500/20 top-20 left-10 dark:bg-blue-600/10" />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-500/20 bottom-10 right-10 dark:bg-purple-600/10" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden mb-6"
          >
            <img
              src={profilePhoto}
              alt="Nadish R"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl shadow-blue-500/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/40 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient block sm:inline">{name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mt-3"
          >
            <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-350">
              I am a{' '}
              <span className="text-blue-600 dark:text-blue-400 font-extrabold border-r-2 border-blue-600 dark:border-blue-400 pr-1.5 animate-pulse">
                {typedText}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            Currently pursuing B.E. at Sri Eshwar College of Engineering. Actively engineering scalable full stack platforms, exploring artificial intelligence, and coding optimized algorithms.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-650 text-white shadow-lg shadow-blue-500/15 hover:shadow-xl hover:shadow-blue-500/25 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold glass-card hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-750 dark:text-slate-250 transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            
            <a
              href="/Nadish-resume.pdf"
              download="Nadish resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold border border-dashed border-blue-500/30 hover:border-blue-500 dark:hover:border-blue-400 text-blue-600 dark:text-blue-400 bg-blue-50/20 dark:bg-blue-950/10 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1.5 text-sm font-semibold"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5" />
              <span className="hidden sm:inline text-xs">LeetCode</span>
            </a>
          </motion.div>
        </div>

        {/* Visual Element Area */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative min-h-[420px]">
          {/* Ambient Glows */}
          <div className="glow-orb w-[220px] h-[220px] bg-blue-500/10 top-1/4 left-1/4 dark:bg-blue-600/5" />
          <div className="glow-orb w-[220px] h-[220px] bg-indigo-500/10 bottom-1/4 right-1/4 dark:bg-indigo-600/5" />

           {/* Central Initials Orb */}
           <motion.div
             animate={{
               y: [0, -10, 0],
             }}
             transition={{
               duration: 5,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="relative z-10 w-40 h-40 flex items-center justify-center"
           >
              <img
                src={profilePhoto}
                alt="Nadish R"
                className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl shadow-blue-500/20"
              />
           </motion.div>

          {/* Floating Orbit Tech Card 1 - React */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
            className="absolute z-20 top-12 left-12 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-200/50 dark:border-slate-800/80 shadow-md"
          >
            <div className="w-6 h-6 rounded-lg bg-sky-500/15 dark:bg-sky-500/20 flex items-center justify-center text-sky-500">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-350">ReactJS</span>
          </motion.div>

          {/* Floating Orbit Tech Card 2 - NodeJS */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute z-20 top-16 right-8 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-200/50 dark:border-slate-800/80 shadow-md"
          >
            <div className="w-6 h-6 rounded-lg bg-green-500/15 dark:bg-green-500/20 flex items-center justify-center text-green-550">
              <Server className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-350">NodeJS</span>
          </motion.div>

          {/* Floating Orbit Tech Card 3 - AI/ML */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, -6, 0]
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4
            }}
            className="absolute z-20 bottom-12 left-10 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-200/50 dark:border-slate-800/80 shadow-md"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-500/15 dark:bg-purple-500/20 flex items-center justify-center text-purple-500">
              <Brain className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-350">AI & ML</span>
          </motion.div>

          {/* Floating Orbit Tech Card 4 - MySQL */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 6, 0]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
            className="absolute z-20 bottom-16 right-8 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border border-slate-200/50 dark:border-slate-800/80 shadow-md"
          >
            <div className="w-6 h-6 rounded-lg bg-blue-500/15 dark:bg-blue-500/20 flex items-center justify-center text-blue-550">
              <Database className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-350">MySQL</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
