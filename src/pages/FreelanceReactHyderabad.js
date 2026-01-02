import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../SeoPages.css" ;

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

        {/* HERO */}
        <div className="seo-hero">
          <h1>Freelance React Developer in Hyderabad</h1>
          <p className="seo-intro">
            I’m a freelance React developer in Hyderabad helping startups and
            businesses build fast, scalable, production-ready web applications
            using React, MERN stack, and AWS.
          </p>
        </div>

        {/* GRID */}
        <div className="seo-grid">

          {/* LEFT CONTENT */}
          <div className="seo-content">

            <h2>React Development Services I Offer</h2>
            <ul>
              <li>Custom React.js web applications</li>
              <li>MERN stack development</li>
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
              <li>Hyderabad-based, remote friendly</li>
            </ul>

            <h2>Projects & Experience</h2>
            <p>
              I’ve built real-world React and MERN applications including
              dashboards, SaaS tools, and AWS-deployed platforms.
            </p>
            <Link to="/projects">View Projects →</Link>

          </div>

          {/* RIGHT CTA */}
          <div className="seo-cta-box">
            <h3>Let’s Work Together</h3>
            <p>Tell me about your project</p>

            <a
              className="whatsapp-hire"
              href="https://wa.me/919505764142"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Me
            </a>

            <a
              className="email-hire"
              href="mailto:manikanta.suthari2002@gmail.com"
            >
              📩 Email Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreelanceReactHyderabad;
