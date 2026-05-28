import React from 'react';
import HeroScene, { Background3D } from './components/HeroScene';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <>
      {/* ===== Fixed 3D Background (stars + Möbius strip behind everything) ===== */}
      <Background3D />

      {/* ===== Fixed Navbar ===== */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            Yashas <span>V</span>
          </a>
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ===== Main Content (scrolls over the 3D background) ===== */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroScene />

        <section id="about" className="section">
          <About />
        </section>

        <hr className="section-divider" />

        <section id="experience" className="section">
          <Experience />
        </section>

        <hr className="section-divider" />

        <section id="projects" className="section">
          <Projects />
        </section>

        <hr className="section-divider" />

        <section id="contact" className="section">
          <Contact />
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Yashas V. All rights reserved.
        </footer>
      </main>

      <WhatsAppButton />
    </>
  );
}

export default App;
