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

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0D13] text-slate-100 flex flex-col">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Single-Page Sections (Exactly 8 in approved order) */}
      <main className="flex-grow">
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
