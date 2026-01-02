import React from "react";
import profileImage from "../assets/profile.jpg";
import './Home.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="portfolio-header">
        <div className="header-content">

          {/* 🔥 Primary SEO H1 */}
          <h1 className="hidden-seo-title">
            Freelance React Developer in India | MERN Stack Freelancer in Hyderabad |
            Hire Full Stack Developer | Sai Manikanta Vivek Suthari | AWS Integrations Specialist
          </h1>

          <div className="profile-section">
            <img
              src={profileImage}
              alt="Sai Manikanta Vivek - Freelance MERN Stack Developer in India"
              className="profile-image"
            />

            <h2 className="developer-name">
              Sai Manikanta Vivek Suthari
            </h2>

            <h2 className="main-headline">
              Freelance React & MERN Developer (AWS Cloud Integrations)
            </h2>
          </div>

          <h3 className="sub-headline">
            I build scalable web applications using React, Node.js, MongoDB, and AWS (Lambda, API Gateway, S3, DynamoDB).
            Remote-friendly freelancer helping startups, founders, and tech teams ship faster.
          </h3>

          <div className="tech-stack">
            React | Node.js | MongoDB | AWS (Lambda, S3, API Gateway, DynamoDB) | Docker | CI/CD
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn view-projects">View Projects</a>
            <a href="#contact" className="btn contact-me">Contact Me</a>
          </div>
        </div>
      </div>


      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="services">
        <h2 className="section-title">Freelance Services</h2>

        <ul className="services-list">
          <li>🚀 Full-stack MERN Web Applications (React, Node.js, Express, MongoDB)</li>
          <li>☁️ AWS Cloud Infrastructure Setup (EC2, CloudFront, Route53, VPC, IAM)</li>
          <li>⚙️ Production-ready API Development (AWS Lambda / Express.js)</li>
          <li>🔐 Secure Authentication (JWT, OAuth, Cognito, IAM, RBAC)</li>
          <li>📦 CI/CD Setup & Automation (GitHub Actions, CodePipeline, Docker)</li>
          <li>🔧 Migration to AWS from Shared / On-Prem Hosting</li>
        </ul>

        <p className="seo-cta-text">
          Available for freelance, remote, and full-time React developer roles in India & Worldwide.
        </p>
      </section>

     {/* ================= SEO ROUTE LINKS ================= */}
      {/* ================= SEO ROUTE LINKS ================= */}
  <section className="seo-links">
  <h3>📌 Popular Searches</h3>
  <div className="seo-links-list">
    <Link to="/freelance-react-developer-india">
      Freelance React Developer in India
    </Link>

    {/* Keep this disabled until page exists */}
    {/* <Link to="/mern-stack-freelancer-india">
      MERN Stack Freelancer in India
    </Link> */}

    <Link to="/freelance-react-developer-hyderabad">
      React Developer in Hyderabad
    </Link>

    {/* Keep this disabled until page exists */}
    {/* <Link to="/hire-react-developer-india">
      Hire React Developer in India
    </Link> */}
  </div>
</section>

    </>
  );
};

export default Header;
