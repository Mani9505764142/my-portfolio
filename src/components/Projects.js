import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "SnapDemo",
      description: "Screen recording & sharing platform with analytics.",
      technologies: ["Next.js", "AWS S3", "DynamoDB", "TypeScript"],
      link: "https://snapdemo-psi.vercel.app/",
      github: "https://github.com/Mani9505764142/snapdemo",
    },
    {
      title: "Shopfinity",
      description: "Full-stack e-commerce system with payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://shopfinity-frontend.vercel.app/",
      github: "https://github.com/Mani9505764142/Shopfinity",
    },
    {
      title: "Bluestock ML",
      description: "Financial analytics dashboard with ML predictions.",
      technologies: ["React", "Node.js", "MySQL", "Python"],
      link: "https://bluestock-analysis.netlify.app/",
    },
    {
      title: "Personaliz.ai",
      description: "AI video generation & WhatsApp automation system.",
      technologies: ["Node.js", "FFmpeg", "Twilio", "AI APIs"],
    },
    {
      title: "Face Recognition System",
      description: "Automated attendance tracking using computer vision.",
      technologies: ["Python", "OpenCV", "ML"],
    },
    {
      title: "AWS Multi-Tier App",
      description: "Production-grade cloud architecture with VPC design.",
      technologies: ["AWS", "EC2", "S3", "RDS"],
    },
  ];

  // 🔥 Smart separation
  const featured = projects[0];
  const restProjects = projects.slice(1);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      {/* 🔥 FEATURED PROJECT */}
      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>{featured.title}</h3>

        <p className="project-desc">{featured.description}</p>

        <div className="tech-stack">
          {featured.technologies.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {featured.link && (
            <a href={featured.link} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {featured.github && (
            <a
              href={featured.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              Code
            </a>
          )}
        </div>
      </motion.div>

      {/* 🔥 GRID PROJECTS */}
      <div className="projects-grid">
        {restProjects.map((project, index) => (
          <motion.div
          key={index}
          className="project-card"
          onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
          "--x",
         `${e.clientX - rect.left}px`
        );
         e.currentTarget.style.setProperty(
         "--y",
          `${e.clientY - rect.top}px`
        );
        }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;