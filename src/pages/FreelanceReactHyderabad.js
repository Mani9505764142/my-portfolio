import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../SeoPages.css";

const FreelanceReactHyderabad = () => {
  useEffect(() => {
    document.title =
      "Freelance React Developer in Hyderabad | MERN & AWS – Sai Manikanta Vivek";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Hire a freelance React developer in Hyderabad for scalable, high-performance web applications. MERN stack expert with real-world AWS deployment experience.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://suthari-saimanikantavivek.vercel.app/freelance-react-developer-hyderabad";
  }, []);

  return (
    <section className="seo-page">
      <div className="seo-container">

        {/* 🔥 HERO (MATCH YOUR HOME STYLE) */}
        <div className="seo-hero">
          <h1>Freelance React Developer in Hyderabad</h1>

          <p className="seo-intro">
            I help startups and businesses build scalable, production-ready web applications 
            using React, MERN stack, and AWS infrastructure.
          </p>

          <div className="seo-cta-buttons">
            <a
              href="https://wa.me/919505764142"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              💬 Chat on WhatsApp
            </a>

            <Link to="/projects" className="btn-secondary">
              🚀 View Projects
            </Link>
          </div>
        </div>

        {/* 🔥 MAIN CONTENT */}
        <div className="seo-content">

          <h2>React Development Services I Offer</h2>
          <ul>
            <li>Custom React.js web applications</li>
            <li>MERN stack full-stack development</li>
            <li>API integration & backend connectivity</li>
            <li>AWS deployment (S3, EC2, Lambda, API Gateway)</li>
            <li>Performance optimization</li>
            <li>Maintenance & scaling</li>
          </ul>

          <h2>Why Hire Me</h2>
          <ul>
            <li>Real production project experience</li>
            <li>Clean, scalable architecture</li>
            <li>End-to-end ownership</li>
            <li>Clear communication</li>
            <li>Remote + Hyderabad availability</li>
          </ul>

          <h2>Projects & Experience</h2>
          <p>
            I’ve built real-world MERN and AI-powered applications including dashboards, 
            SaaS tools, and AWS-deployed platforms with scalable backend systems.
          </p>

          <Link to="/projects" className="seo-link">
            👉 Explore My Projects
          </Link>

        </div>

        {/* 🔥 FINAL CTA (HIGH CONVERSION) */}
        <div className="seo-final-cta">
          <h2>Have a project in mind?</h2>
          <p>Let’s discuss and build something impactful.</p>

          <div className="seo-cta-buttons">
            <a
              href="https://wa.me/919505764142?text=Hi%20Sai,%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp Me
            </a>

            <a
              href="mailto:manikanta.suthari2002@gmail.com"
              className="btn-secondary"
            >
              📩 Send Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreelanceReactHyderabad;