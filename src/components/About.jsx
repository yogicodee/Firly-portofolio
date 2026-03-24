import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    "JavaScript (ES6+)", "React", "Node.js", 
    "TypeScript", "Tailwind CSS", "Next.js"
  ];

  return (
    <section id="about" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel">
            <p className="mb-4">
              Hello! My name is Firly, and I enjoy creating things that live on the internet.
              My interest in web development started back in 2018 when I decided to try
              editing custom Tumblr themes — turns out hacking together HTML & CSS taught
              me a lot about building functional user interfaces!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, and a huge corporation. My main focus these
              days is building accessible, inclusive products and digital experiences for
              a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-bullet">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image glass-panel">
              {/* Image placeholder or actual image */}
              <div className="profile-placeholder">
                <span>F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
