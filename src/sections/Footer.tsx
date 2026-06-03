import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/80 bg-white/30 dark:bg-slate-950/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tight text-gradient flex items-center gap-1.5 focus:outline-none"
          >
            <span className="font-extrabold">Nadish R</span>
          </button>
          <p className="text-xs text-slate-450 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Nadish R. All rights reserved.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
