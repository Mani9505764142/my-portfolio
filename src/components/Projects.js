import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Shopfinity E-commerce — MERN + Payment Gateway System',
      problem: 'Local businesses needed an online sales channel with secure checkout.',
      solution: 'Built a MERN e-commerce platform with JWT auth, product catalog, Razorpay/Stripe integrations, and AWS deployment.',
      outcome: 'Enabled real-time transactions with <3s checkout response and improved test-user conversion by ~20%.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Stripe'],
      link: 'https://shopfinity-frontend.vercel.app/',
      github: 'https://github.com/Mani9505764142/Shopfinity'
    },
    {
      title: 'Bluestock ML — Financial Analytics Platform',
      problem: 'Traders needed real-time IPO insights and predictive analysis to reduce risk.',
      solution: 'Engineered a Node.js + TypeScript backend with MySQL storage, ML integration via Python, and a React dashboard for visual insights.',
      outcome: 'Improved prediction accuracy for test sets and automated market data ingestion.',
      technologies: ['Node.js', 'TypeScript', 'React', 'MySQL', 'Python', 'Machine Learning'],
      link: 'https://bluestock-analysis.netlify.app/'
    },
    {
      title: 'Personaliz.ai — AI Video Generation & WhatsApp Delivery',
      problem: 'Businesses needed scalable personalized video outreach for customer engagement.',
      solution: 'Integrated SyncLabs for lip-sync, ElevenLabs for voice cloning, FFmpeg automation, and Twilio WhatsApp delivery with webhook tracking.',
      outcome: 'Automated delivery pipeline generating personalized videos at scale with status tracking.',
      technologies: ['Node.js', 'TypeScript', 'React', 'SyncLabs API', 'ElevenLabs API', 'Twilio WhatsApp API', 'FFmpeg', 'Supabase']
    },
    {
      title: 'Face Recognition Attendance System',
      problem: 'Manual attendance tracking was error-prone and easy to manipulate.',
      solution: 'Developed a Python-based face recognition system to capture login/logout timestamps.',
      outcome: 'Improved tracking accuracy and eliminated buddy-punching.',
      technologies: ['Python', 'OpenCV', 'Machine Learning']
    },
    {
      title: 'AWS Multi-Tier Application',
      problem: 'A scalable e-commerce environment required secure network isolation and traffic routing.',
      solution: 'Designed a VPC with private/public subnets, NAT Gateway, EC2 compute layer, S3 storage, and RDS for persistence.',
      technologies: ['AWS', 'EC2', 'S3', 'RDS', 'VPC', 'Security Groups', 'NAT Gateway']
    },
    {
      title: 'Portfolio Website',
      problem: 'Needed a personal brand presence to showcase projects & contact info.',
      solution: 'Built a responsive portfolio with React and AWS CloudFront hosting.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'AWS (S3, CloudFront)'],
      link: 'https://my-portfolio-nine-eta-73.vercel.app/'
    },
  ];

  return (
      <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">

          <h3>{project.title}</h3>

          {project.problem && <p><strong>Problem:</strong> {project.problem}</p>}
          {project.solution && <p><strong>Solution:</strong> {project.solution}</p>}
          {project.outcome && <p><strong>Outcome:</strong> {project.outcome}</p>}

          <div className="project-technologies">
            <h4>Tech Stack:</h4>
            <ul>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                GitHub
              </a>
            )}
          </div>

        </div>
      ))}
    </section>
  );
};

export default Projects;
