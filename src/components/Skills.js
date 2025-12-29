import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node' },
        { name: 'Express.js', icon: 'fas fa-code' },
        { name: 'REST API Design', icon: 'fas fa-network-wired' },
        { name: 'JSON & Postman (Testing)', icon: 'fas fa-paper-plane' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' }, // added
      ],
    },
    {
      category: 'AWS & Cloud Integrations',
      skills: [
        { name: 'EC2 (Server Deployment)', icon: 'fas fa-server' }, // added
        { name: 'S3 (Static Hosting & Storage)', icon: 'fas fa-box' },
        { name: 'API Gateway', icon: 'fas fa-plug' },
        { name: 'IAM Roles & Policies', icon: 'fas fa-user-shield' }, // added
        { name: 'Lambda (Serverless Functions)', icon: 'fas fa-terminal' },
        { name: 'DynamoDB', icon: 'fas fa-table' },
        { name: 'SES (Email Service)', icon: 'fas fa-envelope' },
        { name: 'CloudWatch (Monitoring)', icon: 'fas fa-chart-line' },
      ],
    },
    {
      category: 'Tools & Other Skills',
      skills: [
        { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
        { name: 'Figma (UI/UX Prototyping)', icon: 'fab fa-figma' },
        { name: 'VS Code', icon: 'fas fa-code-branch' },
        { name: 'Linux Basics', icon: 'fas fa-terminal' },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
