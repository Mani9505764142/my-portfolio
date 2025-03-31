import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <i className="fas fa-envelope"></i> manikanta.suthari202@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 9505764142
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Hyderabad, India
          </p>
          
          <div className="social-links">
            <p className="cta-text">Feel free to reach out via email or connect with me on social media!</p>
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sai-manikanta-vivek-suthari-467001232" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="Visit my LinkedIn profile">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Mani9505764142" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="Visit my GitHub profile">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" title="Visit my Twitter profile">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
