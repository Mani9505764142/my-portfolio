import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Sai Manikanta Vivek Suthari</h3>
          <p>Cloud Engineer & Web Developer</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Me</h4>
          <p>
            <i className="fas fa-envelope"></i> manikanta.suthari2002@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 9505764142
          </p>
        </div>
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/sai-manikanta-vivek-suthari-467001232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="Visit my LinkedIn profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Sai Manikanta Vivek Suthari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;