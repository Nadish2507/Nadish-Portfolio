import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Certifications } from './sections/Certifications';
import { CodingProfiles } from './sections/CodingProfiles';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'coding', label: 'Coding Stats' },
  { id: 'contact', label: 'Contact' }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-blue-500/30 dark:selection:bg-blue-400/30">
      {/* Scroll Spy Navbar */}
      <Navbar sections={NAV_SECTIONS} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
