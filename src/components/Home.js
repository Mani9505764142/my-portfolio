import React from "react";
import profileImage from "../assets/profile.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="portfolio-header">
        <div className="header-content">

          <div className="profile-section">
            <img
              src={profileImage}
              alt="Sai Manikanta Vivek - AI Focused Full Stack Engineer"
              className="profile-image"
            />

            <h2 className="developer-name">
              Sai Manikanta Vivek Suthari
            </h2>

            <h1 className="main-headline">
              AI-Focused Full Stack Engineer
            </h1>

            <h2 className="sub-headline-role">
              MERN Stack | AWS Cloud (EC2 & Serverless) | RAG & Agentic Systems
            </h2>
          </div>

          <p className="sub-headline">
            I design and deploy scalable web and AI-powered systems using
            MERN Stack and AWS infrastructure. My work focuses on
            production-ready backend architectures, LLM integrations,
            Retrieval-Augmented Generation (RAG) pipelines, and
            agentic workflow design.
          </p>

          <div className="tech-stack">
            React | Node.js | Express | MongoDB | AWS (EC2, Lambda, S3, DynamoDB, API Gateway) |
            LangChain | LLM APIs | Docker | CI/CD
          </div>

          <div className="cta-buttons">
            <a href="Projects" className="btn view-projects">
              View Projects
            </a>
            <a href="Contact" className="btn contact-me">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* ================= WHAT I BUILD ================= */}
      <section id="what-i-build" className="services">
        <h2 className="section-title">What I Build</h2>

        <ul className="services-list">
          <li>AI-powered applications (RAG, LLM integrations, Agent workflows)</li>
          <li>Scalable full-stack systems using MERN architecture</li>
          <li>Cloud-native deployments on AWS (EC2 + Serverless)</li>
          <li>Secure REST APIs & backend microservices</li>
          <li>Authentication & role-based access systems</li>
          <li>CI/CD pipelines and production-ready DevOps setups</li>
        </ul>
      </section>

      {/* ================= SEO ROUTE LINKS ================= */}
      <section className="seo-links">
        <h3>Explore More</h3>
        <div className="seo-links-list">

          <Link to="/ai-full-stack-developer-india">
            AI Full Stack Developer in India
          </Link>

          <Link to="/mern-stack-aws-developer">
            MERN Stack & AWS Cloud Developer
          </Link>

          <Link to="/rag-langchain-developer">
            RAG & LangChain Developer
          </Link>

          <Link to="/aws-ec2-serverless-engineer">
            AWS EC2 & Serverless Engineer
          </Link>

        </div>
      </section>
    </>
  );
};

export default Header;
