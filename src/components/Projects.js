import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
  {
    title: 'SnapDemo — Screen Recording & Sharing Platform',
    problem: 'Professionals needed a lightweight tool to record, share, and track screen demos without heavy software.',
    solution: 'Architected a serverless application using Next.js and AWS enabling in-browser recording, optional trimming, secure S3 uploads, and DynamoDB-backed analytics.',
    outcome: 'Delivered a reliable upload pipeline with shareable links and view tracking, demonstrating scalable serverless architecture.',
    technologies: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'AWS S3',
      'AWS DynamoDB',
      'MediaRecorder API',
      'Vercel'
    ],
    link: 'https://snapdemo-psi.vercel.app/',
    github: 'https://github.com/Mani9505764142/snapdemo'
  },

  {
    title: 'Shopfinity — Scalable MERN E-commerce Platform',
    problem: 'Local businesses required a secure and scalable online sales platform with payment integration.',
    solution: 'Built a full-stack MERN application with JWT authentication, product catalog management, and Razorpay/Stripe payment workflows.',
    outcome: 'Implemented secure transactional flows with optimized checkout performance and structured API architecture.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Stripe'],
    link: 'https://shopfinity-frontend.vercel.app/',
    github: 'https://github.com/Mani9505764142/Shopfinity'
  },

  {
    title: 'Bluestock ML — Financial Analytics & Prediction System',
    problem: 'Retail traders lacked structured insights for IPO evaluation and market trend assessment.',
    solution: 'Engineered a Node.js + TypeScript backend integrated with Python ML models and MySQL storage, alongside a React-based analytics dashboard.',
    outcome: 'Automated data ingestion and predictive modeling pipeline for structured financial insights.',
    technologies: ['Node.js', 'TypeScript', 'React', 'MySQL', 'Python', 'Machine Learning'],
    link: 'https://bluestock-analysis.netlify.app/'
  },

  {
    title: 'Personaliz.ai — AI Video Generation & WhatsApp Automation',
    problem: 'Businesses needed scalable personalized video outreach without manual production workflows.',
    solution: 'Integrated lip-sync, voice cloning, and FFmpeg-based automation with WhatsApp delivery and webhook tracking for end-to-end execution.',
    outcome: 'Built an automated AI-driven content pipeline enabling scalable personalized video delivery.',
    technologies: ['Node.js', 'TypeScript', 'React', 'SyncLabs API', 'ElevenLabs API', 'Twilio WhatsApp API', 'FFmpeg', 'Supabase']
  },

  {
    title: 'Face Recognition Attendance System',
    problem: 'Manual attendance systems were error-prone and vulnerable to manipulation.',
    solution: 'Developed a Python-based face recognition system using OpenCV and LBPH with timestamp validation logic.',
    outcome: 'Improved attendance integrity and eliminated proxy attendance risks.',
    technologies: ['Python', 'OpenCV', 'Machine Learning']
  },

  {
    title: 'AWS Multi-Tier Cloud Architecture',
    problem: 'Designed a production-style secure cloud environment with network isolation and scalable compute.',
    solution: 'Implemented VPC with public/private subnets, EC2 compute layer, RDS persistence, S3 storage, and secure routing via NAT Gateway.',
    outcome: 'Demonstrated secure, scalable, and modular AWS infrastructure design principles.',
    technologies: ['AWS', 'EC2', 'S3', 'RDS', 'VPC', 'Security Groups', 'NAT Gateway']
  },

  {
    title: 'Portfolio Website',
    problem: 'Needed a personal brand presence to showcase projects and contact information.',
    solution: 'Built a responsive portfolio using React and deployed using AWS S3 and CloudFront.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'AWS (S3, CloudFront)'],
    link: 'https://my-portfolio-nine-eta-73.vercel.app/'
  }
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
