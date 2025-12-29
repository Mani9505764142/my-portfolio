import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-name">
          <h2>Sai Manikanta Vivek Suthari</h2>
          <p className="footer-role">Full Stack Developer (MERN + AWS Integrations)</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><i className="fas fa-envelope"></i> manikanta.suthari2002@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 95057 64142</p>
          <p><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/sai-manikanta-vivek-suthari-467001232/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Mani9505764142" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sai Manikanta Vivek Suthari. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
