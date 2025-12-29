import React from "react";
import profileImage from "../assets/profile.jpg"; // Make sure this path is correct
import './Home.css';

const Header = () => {
  return (
    <div className="portfolio-header">
  <div className="header-content">

    <h1 className="main-headline">
      Full Stack Developer (MERN + AWS Integrations)
    </h1>

    <div className="profile-section">
      <img 
        src={profileImage} 
        alt="Sai Manikanta Vivek | Frontend Developer" 
        className="profile-image"
      />
      <div className="name-container">
        
      </div>
    </div>

    <h3 className="sub-headline">
      I build end-to-end web applications with React, Node.js, MongoDB, and secure AWS integrations (Lambda, API Gateway, S3, DynamoDB). Experienced with Angular, Django, Spring Boot, and SEO when projects demand it.
    </h3>

    <div className="tech-stack">
      React | Node.js | MongoDB | AWS (Lambda, S3, API Gateway, DynamoDB) | Docker
    </div>

    <div className="cta-buttons">
    <a href="#projects" className="btn view-projects">View Projects</a>
    <a href="#contact" className="btn contact-me">Contact Me</a>
</div>


  </div>
</div>

  );
};

export default Header;