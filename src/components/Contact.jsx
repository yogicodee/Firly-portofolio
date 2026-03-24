import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container text-center max-w-2xl mx-auto">
        <p className="contact-subtitle">What's Next?</p>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        
        <p className="contact-desc">
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to collaborate on a project, 
          I'll try my best to get back to you!
        </p>
        
        <div className="contact-cta">
          <a href="mailto:hello@example.com" className="btn btn-primary hover-lift">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
