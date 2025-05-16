import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'Designed and developed a responsive portfolio website to showcase my skills, projects, and contact information. The website features a clean, modern design with smooth navigation and is built using modern web technologies.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'AWS (S3, CloudFront)'], // Adjust AWS services if different
      link: 'https://your-portfolio-url.com', // Replace with the actual URL if deployed, or remove if not applicable
    },
    {
      title: 'Face Recognition',
      description:
        'Developed a software for a biometric application using Python and machine learning tools. The system enables biometric devices to recognize the face of an employee and capture their login and logout times.',
      technologies: ['Python', 'Machine Learning Tools'],
      link: '', // Add a link to the project (e.g., GitHub) if available
    },
    {
      title: 'Human Action Recognition From Depth Maps And Postures',
      description:
        'Utilized Convolutional Neural Networks (CNNs) to recognize human actions from depth maps, achieving high accuracy and robust performance. The model has potential applications in healthcare, gaming, and human-computer interaction.',
      technologies: ['Convolutional Neural Networks (CNNs)', 'Python', 'Machine Learning Frameworks'],
      link: '', // Add a link to the project (e.g., GitHub) if available
    },
    {
      title: 'AWS Multi-Tier Application',
      description:
        'Architected and implemented a scalable e-commerce platform on AWS within a VPC. Utilized EC2, S3, and RDS to ensure high availability and performance. Implemented private and public subnets, secured by security groups, and used NAT gateways for outbound internet connectivity.',
      technologies: ['AWS', 'EC2', 'S3', 'RDS', 'VPC', 'Security Groups', 'NAT Gateways'],
      link: '', // Add a link to the project (e.g., GitHub) if available
    },
    {
    title: 'Shopfinity E-commerce Project',
    description:
      'Built a fully functional e-commerce website with product listings, shopping cart, and user authentication. Implemented the frontend using React and Tailwind CSS and the backend using Express.js and MongoDB. Integrated secure authentication and authorization, and handled dynamic product display.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://shopfinity-frontend.vercel.app/',
  },
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              <h4>Technologies Used:</h4>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
