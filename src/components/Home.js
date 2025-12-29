import React from "react";
import profileImage from "../assets/profile.jpg";
import './Home.css';

const Header = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="portfolio-header">
        <div className="header-content">

          {/* SEO H1 for Google */}
          <h1 className="hidden-seo-title">
            MERN Stack Freelancer in Hyderabad | Full Stack Developer | Hire Sai Manikanta Vivek |
            Suthari Sai Manikanta Vivek | AWS Integrations Expert |
            suthari-saimanikantavivek.vercel.app
          </h1>

          <div className="profile-section">
            <img
              src={profileImage}
              alt="Sai Manikanta Vivek - MERN Stack Developer"
              className="profile-image"
            />

            <h2 className="developer-name">
              Sai Manikanta Vivek Suthari
            </h2>

            <h1 className="main-headline">
              Full Stack & AWS Cloud Engineer (MERN + Integrations)
            </h1>
          </div>

          <h3 className="sub-headline">
            I build full-stack web applications with React, Node.js, MongoDB, and secure AWS
            integrations (Lambda, API Gateway, S3, DynamoDB). I also support Angular, Django,
            Spring Boot, and SEO when projects demand it.
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


      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="services">
        <h2 className="section-title">Services I Offer</h2>

        <ul className="services-list">
          <li>🚀 MERN Web Applications (React, Node.js, Express, MongoDB)</li>
          <li>☁️ AWS Deployments (EC2, S3, RDS, VPC, CloudFront, Route53)</li>
          <li>⚙️ API Development (REST APIs with Lambda / Express.js)</li>
          <li>🔐 Secure Auth (JWT, OAuth, IAM, Cognito, RBAC)</li>
          <li>📦 CI/CD Automations (GitHub Actions, Docker, CodePipeline)</li>
          <li>🔧 Migrations from Traditional Hosting → AWS</li>
        </ul>
      </section>
    </>
  );
};

export default Header;
