import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, robust shopping cart, and seamless checkout experience.",
      techStack: ["React", "Node.js", "Stripe", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat interface integrating advanced language models with dark mode support and message history saving.",
      techStack: ["React", "OpenAI API", "Firebase"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portfolio Template",
      description: "A customizable, performant portfolio template designed for developers to showcase their work effectively.",
      techStack: ["Vite", "React", "CSS3"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card glass-panel hover-lift" key={index}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-top">
                  <div className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo Link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {project.description}
                </p>
                
                <ul className="project-tech-list">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
