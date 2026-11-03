import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Certifications } from './sections/Certifications/Certifications';
import { Contact } from './sections/Contact/Contact';
import { CustomCursor } from './components/CustomCursor/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F4ED] dark:bg-[#0B0B10] text-[#29231F] dark:text-[#EDEDF2] flex flex-col selection:bg-[#721C35]/15 dark:selection:bg-[#F28C28]/25 selection:text-[#481426] dark:selection:text-white overflow-x-hidden">
      {/* Precision technical blueprint background grid (smooth cross-fade between themes) */}
      <div className="fixed inset-0 bg-tech-grid-dark pointer-events-none z-0" />
      <div className="fixed inset-0 bg-tech-grid-light pointer-events-none z-0" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Single-Page Sections (Exactly 8 in approved order) */}
      <main className="flex-grow relative z-10">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Education */}
        <Education />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
