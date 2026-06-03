import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Modal } from '../components/Modal';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className="relative py-24 px-6 bg-slate-100/30 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg text-sm">
            Showcase of recent full stack engineering, artificial intelligence systems, and algorithmic builds.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-card rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-200/50 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all group"
            >
              {/* Top Banner (Simulated Mockup representation) */}
              <div className="h-44 bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Abstract grid lines overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Tech Badges inside Image Area */}
                <div className="flex flex-wrap gap-1.5 z-10">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 dark:bg-white/5 backdrop-blur-md text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 dark:bg-white/5 backdrop-blur-md text-white/90 border border-white/10">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="z-10 mt-auto flex items-center gap-1.5 text-blue-400 font-mono text-[10px] uppercase font-bold tracking-widest">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Systems Build
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <h3 className="text-xl font-bold text-slate-850 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action footer */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 group/btn focus:outline-none"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-855 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal details */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
      </div>
    </section>
  );
};
