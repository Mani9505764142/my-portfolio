import React from "react";
import profileImage from "../assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-me-container">

      {/* Hero Section */}
      <section className="about-hero">
        <img
          src={profileImage}
          alt="Sai Manikanta Vivek - AI Focused Full Stack Engineer"
          className="hero-profile-image"
        />
        <h1>About Me</h1>
        <p className="hero-subtitle">
          AI-Focused Full Stack Engineer • MERN Stack • AWS Cloud (EC2 & Serverless)
        </p>
      </section>

      {/* Who I Am */}
      <section className="about-section">
        <h2 className="section-title">Who I Am</h2>
        <p>
          I’m Sai Manikanta Vivek Suthari — an AI-focused Full Stack Engineer 
          building scalable web and AI-powered systems using MERN Stack and AWS.
          I design end-to-end architectures that connect clean frontend interfaces 
          with secure backend APIs and cloud infrastructure.
        </p>
        <p>
          My work increasingly focuses on integrating LLM-based systems,
          Retrieval-Augmented Generation (RAG), and agentic workflows into
          production-ready applications. I approach AI not as a demo feature,
          but as an engineered system that must be reliable, observable,
          and scalable.
        </p>
      </section>

      {/* What I Build */}
      <section className="about-section">
        <h2 className="section-title">What I Build</h2>

        <div className="philosophy-grid">

          <div className="philosophy-card">
            <h3>AI-Integrated Systems</h3>
            <p>
              Applications that combine LLM APIs, structured prompts,
              RAG pipelines, and tool-based workflows with real-world
              backend systems.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Scalable Cloud Architecture</h3>
            <p>
              Cloud-native deployments using AWS EC2, Lambda, S3,
              API Gateway, and DynamoDB — designed for performance,
              security, and long-term maintainability.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Production-Ready Engineering</h3>
            <p>
              Structured APIs, authentication flows, validation layers,
              logging, and deployment pipelines — built for reliability,
              not just functionality.
            </p>
          </div>

        </div>
      </section>

      {/* Engineering Mindset */}
      <section className="about-section">
        <h2 className="section-title">Engineering Mindset</h2>
        <p>
          I believe AI systems should be treated as software systems —
          with architecture, evaluation layers, monitoring, and failure
          handling built in from the start.
        </p>
        <p>
          The goal is simple: build systems that execute reliably,
          scale efficiently, and deliver measurable impact.
        </p>
      </section>

    </div>
  );
};

export default About;
