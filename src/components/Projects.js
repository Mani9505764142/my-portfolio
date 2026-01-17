import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
  {
    title: 'SnapDemo — Screen Recording & Sharing Platform',
    problem: 'Users needed a fast way to record, trim, and share screen demos with basic analytics.',
    solution: 'Built a serverless web app using Next.js and AWS that enables in-browser screen recording, optional trimming, S3 uploads, and shareable links.',
    outcome: 'Delivered an end-to-end recording and sharing flow with reliable uploads and DynamoDB-based view analytics.',
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
    title: 'Shopfinity E-commerce — MERN + Payment Gateway System',
    problem: 'Local businesses needed an online sales channel with secure checkout.',
    solution: 'Built a MERN e-commerce platform with JWT auth, product catalog, Razorpay/Stripe integrations, and AWS deployment.',
    outcome: 'Enabled real-time transactions with under 3-second checkout response and optimized checkout flow performance for demo users.',
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
    solution: 'Developed a face recognition system with OpenCV and LBPH to record attendance timestamps and prevent timestamp spoofing.',
    outcome: 'Improved tracking accuracy and eliminated buddy-punching.',
    technologies: ['Python', 'OpenCV', 'Machine Learning']
  },

  {
    title: 'AWS Multi-Tier Application',
    problem: 'Designed a production-style VPC with subnet isolation, NAT gateway routing, EC2 compute layer, S3 for assets, and RDS for persistence.',
    solution: 'Implemented a secure AWS architecture with public/private subnets, EC2 compute, S3 storage, and RDS database.',
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
