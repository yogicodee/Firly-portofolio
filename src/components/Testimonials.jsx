import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechFlow",
      text: "Firly transformed our outdated platform into a modern, lightning-fast application. The attention to detail and UI/UX expertise is unmatched.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Founder of StartupX",
      text: "Working with Firly was a breeze. They delivered the project ahead of schedule and the code quality was exceptional. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Williams",
      role: "Creative Director",
      text: "The web animations and glassmorphism effects Firly implemented gave our brand the premium feel we were looking for.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i}
        className={`star ${i < rating ? 'star-filled' : 'star-empty'}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Client <span className="gradient-text">Ratings</span></h2>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card glass-panel hover-lift" key={index}>
              <div className="stars-container">
                {renderStars(review.rating)}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <p className="author-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
