import React, { useRef } from 'react';
import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let ref;
    switch (section.toLowerCase()) {
      case 'inicio':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'proyectos':
        ref = projectsRef;
        break;
      case 'información':
        ref = skillsRef;
        break;
      case 'sobre mí':
        ref = aboutRef;
        break;
      case 'contacto':
        ref = contactRef;
        break;
    }
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <Cursor />
      <Header onSectionClick={scrollToSection} />
      <Hero onScrollToProjects={() => scrollToSection('proyectos')} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;