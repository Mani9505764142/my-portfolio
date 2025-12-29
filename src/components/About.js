import React from "react";
import profileImage from "../assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-me-container">

      {/* Hero */}
      <section className="about-hero">
        <img
          src={profileImage}
          alt="Sai Manikanta Vivek"
          className="hero-profile-image"
        />
        <h1>About Me</h1>
        <p className="hero-subtitle">
          Full Stack Developer (MERN) • AWS Integrations • Cloud-Backed Apps
        </p>
      </section>

      {/* Who I Am */}
      <section className="about-section">
        <h2 className="section-title">Who I Am</h2>
        <p>
          I’m Sai Manikanta Vivek Suthari — a Full Stack Developer who builds
          **scalable web applications** with **React, Node.js, and AWS
          integrations**. I work on both frontend and backend, designing
          UI/UX-driven interfaces and connecting them with secure, cloud-backed
          APIs.
        </p>
        <p>
          My strength is bridging development and cloud: deploying apps on AWS,
          integrating services like **EC2, Lambda, S3, SES, API Gateway, IAM**,
          and designing workflows that can scale without firefighting.
        </p>
      </section>

      {/* What I Do */}
      <section className="about-section">
        <h2 className="section-title">What I Do</h2>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Build & Ship</h3>
            <p>
              I create applications end-to-end: UI → API → Database → AWS
              deployment. No theory-only projects — everything runs live.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Problem-Solver</h3>
            <p>
              I don’t guess. I test, debug, measure, and fix. If a feature fails
              in production, I track why — not just patch it.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Learning Loop</h3>
            <p>
              Every project pushes me one level up — from build scripts to auth
              flows, deployment, optimization, and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Code */}
      <section className="about-section">
        <h2 className="section-title">Outside of Code</h2>
        <p>
          When I’m not building, I refuel through fitness, reading, and travel —
          habits that keep my mind sharp and help me return to problems with a
          fresh perspective.
        </p>
        <div className="interest-icons">
          <span>🏋️ Fitness</span>
          <span>📚 Reading</span>
          <span>✈️ Travel</span>
        </div>
      </section>

    </div>
  );
};

export default About;
