import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-title">
            <span className="gradient-text">Firly</span><br />
            I build things for the web.
          </h1>
          <p className="hero-subtitle">
            I'm a passionate frontend developer specializing in building 
            exceptional digital experiences. Currently, I'm focused on 
            building accessible, human-centered products utilizing React.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary hover-lift">
              Check out my work
            </a>
            <a href="#contact" className="btn btn-outline hover-lift">
              Say Hello
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="hero-image glass-panel">
            {/* Using a placeholder SVG or dynamic illustration */}
            <div className="code-snippet">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                  {'\n'}  <span className="code-property">name</span>: <span className="code-string">"Firly"</span>,
                  {'\n'}  <span className="code-property">role</span>: <span className="code-string">"Frontend Dev"</span>,
                  {'\n'}  <span className="code-property">passion</span>: <span className="code-string">"UI/UX"</span>
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
