import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="gradient-text">Firly</span>.dev
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#home" className="nav-link hover-lift">Home</a>
          <a href="#about" className="nav-link hover-lift">About</a>
          <a href="#projects" className="nav-link hover-lift">Projects</a>
          <a href="#contact" className="btn btn-outline hover-lift">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass-panel ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
