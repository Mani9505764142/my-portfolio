import React from "react";
import HeroCanvas from "../three/HeroCanvas";
import profileImage from "../assets/profile.jpg";
import './Home.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="hero-container">

        {/* 3D Background */}
        <div className="canvas-bg">
          <HeroCanvas />
        </div>

        <div className="hero-content">

          {/* 🔥 SEO H1 */}
          <h1 className="hidden-seo-title">
            AI-Focused Full Stack Engineer | MERN Stack Developer | AWS Cloud Specialist |
            Sai Manikanta Vivek Suthari | RAG & LLM Systems Developer
          </h1>

          <div className="profile-section">
            <img
              src={profileImage}
              alt="Sai Manikanta Vivek - AI Full Stack Engineer"
              className="profile-image"
            />

            {/* NAME */}
            <h2 className="developer-name">
              Sai Manikanta Vivek Suthari
            </h2>

            {/* 🔥 MAIN HEADLINE */}
            <h2 className="main-headline">
              AI-Focused Full Stack Engineer
            </h2>
          </div>

          {/* 🔥 TAGLINE */}
          <h3 className="sub-headline">
            MERN Stack | AWS Cloud (EC2 & Serverless) | RAG & Agentic Systems
          </h3>

          {/* 🔥 DESCRIPTION */}
          <p className="hero-description">
            I design and deploy scalable web and AI-powered systems using the MERN stack and AWS infrastructure.
            Focused on production-ready backend architectures, LLM integrations, Retrieval-Augmented Generation (RAG) pipelines, and agentic workflows.
          </p>

          {/* 🔥 TECH STACK */}
          <div className="tech-stack">
            React | Node.js | Express | MongoDB | AWS (EC2, Lambda, S3, DynamoDB, API Gateway) | LangChain | LLM APIs | Docker | CI/CD
          </div>

          {/* 🔥 CTA BUTTONS (FIXED) */}
          <div className="cta-buttons">
            <a href="/projects" className="btn view-projects">
               View Projects
            </a>

            <a href="/contact" className="btn contact-me">
               Let's Talk
            </a>

          </div>

        </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="services">
        <h2 className="section-title">Freelance Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>🚀 Full Stack Development</h3>
            <p>Build scalable MERN applications with clean architecture.</p>
          </div>

          <div className="service-card">
            <h3>☁️ AWS Cloud Setup</h3>
            <p>Deploy secure and scalable apps using AWS infrastructure.</p>
          </div>

          <div className="service-card">
            <h3>⚙️ API Development</h3>
            <p>Production-ready REST APIs using Express & Lambda.</p>
          </div>

          <div className="service-card">
            <h3>🔐 Authentication Systems</h3>
            <p>Secure login systems using JWT, OAuth, Cognito, and RBAC.</p>
          </div>

          <div className="service-card">
            <h3>📦 CI/CD Automation</h3>
            <p>Automate builds and deployments with GitHub Actions & pipelines.</p>
          </div>

          <div className="service-card">
            <h3>🔧 AWS Migration</h3>
            <p>Migrate apps from shared hosting to scalable cloud infrastructure.</p>
          </div>

          {/* AI SECTION */}
          <div className="service-card">
            <h3>🤖 AI Automation Systems</h3>
            <p>Automate workflows using AI agents, APIs, and tools like n8n.</p>
          </div>

          <div className="service-card">
            <h3>🧠 RAG-Based AI Apps</h3>
            <p>Build AI apps that answer queries using your data (PDFs, docs, DBs).</p>
          </div>

          <div className="service-card highlight">
            <h3>⚡ AI Integrations (LLMs)</h3>
            <p>Integrate OpenAI, Ollama, LangChain into apps for chatbots & automation.</p>
          </div>

        </div>

        <p className="seo-cta-text">
          Available for freelance, remote, and full-time roles in India & Worldwide.
        </p>
      </section>

      {/* ================= SEO ROUTE LINKS ================= */}
      <section className="seo-links">
        <h3>📌 Popular Searches</h3>

        <div className="seo-links-list">
          <Link to="/freelance-react-developer-india">
            Freelance React Developer in India
          </Link>

          <Link to="/freelance-react-developer-hyderabad">
            React Developer in Hyderabad
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;