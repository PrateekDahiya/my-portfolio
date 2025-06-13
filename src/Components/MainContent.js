import React from 'react';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
// import Facts from './Facts';
// import Experience from './Experience';
import Projects from './Projects';
import Extracurriculars from './Extracurriculars';
import Achievements from './Achievements';
import Contact from './Contact';
// import Services from './Services'; // Commented out as it might not fit a typical resume structure
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="content">
            <Hero />
            <About />
            <Education />
            <Skills />
            {/* <Facts /> */}
            {/* <Experience /> */}
            <Projects />
            <Extracurriculars />
            {/* <Achievements /> */}
            <Contact />
    </main>
  );
};

export default MainContent; 