import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../SeoPages.css";

const FreelanceReactIndia = () => {

  useEffect(() => {
    document.title =
      "Freelance React Developer in India | Hire Sai Manikanta Vivek";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Hire a freelance React developer in India for scalable web applications. MERN stack expert with AWS deployment experience.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://suthari-saimanikantavivek.vercel.app/freelance-react-developer-india";
  }, []);

  return (
    <section className="seo-page">
      <div className="seo-container">

        {/* 🔥 HERO */}
        <div className="seo-hero">
          <h1>Freelance React Developer in India</h1>

          <p className="seo-intro">
            I help startups, founders, and businesses build scalable, 
            production-ready web applications using React, MERN stack, 
            and AWS infrastructure.
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

        {/* 🔥 CONTENT */}
        <div className="seo-content">

          <h2>Why Hire Me</h2>
          <ul>
            <li>MERN stack project experience</li>
            <li>AWS deployments (Lambda, S3, EC2, API Gateway)</li>
            <li>SEO-friendly, scalable UI</li>
            <li>Fast delivery & clear communication</li>
          </ul>

          <h2>Services I Offer</h2>
          <ul>
            <li>React Frontend Development</li>
            <li>MERN Full-Stack Applications</li>
            <li>API Development & AWS Integration</li>
            <li>Deployment, CI/CD & Performance Optimization</li>
          </ul>

          <h2>Projects & Experience</h2>
          <p>
            I’ve built real-world web applications including dashboards, SaaS tools,
            and AI-powered systems with scalable backend architectures.
          </p>

          <Link to="/projects" className="seo-link">
            👉 Explore My Projects
          </Link>

        </div>

        {/* 🔥 FINAL CTA */}
        <div className="seo-final-cta">
          <h2>Let’s build your project</h2>
          <p>Tell me your idea and let’s make it real.</p>

          <div className="seo-cta-buttons">
            <a
              href="https://wa.me/919505764142?text=Hi%20Sai,%20I%20want%20to%20hire%20you"
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

export default FreelanceReactIndia;