import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'JavaScript', icon: 'fab fa-js' },
      ],
    },
    {
      category: 'Cloud & AWS Services',
      skills: [
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'IAM Roles', icon: 'fas fa-user-shield' },
        { name: 'EC2', icon: 'fas fa-server' },
        { name: 'S3', icon: 'fas fa-database' },
        { name: 'Auto Scaling', icon: 'fas fa-expand-arrows-alt' },
        { name: 'RDS', icon: 'fas fa-database' },
        { name: 'VPC', icon: 'fas fa-network-wired' },
        { name: 'Lambda', icon: 'fas fa-code' },
        { name: 'CI/CD', icon: 'fas fa-sync-alt' },
        { name: 'CloudWatch', icon: 'fas fa-eye' },
        { name: 'Elastic Beanstalk', icon: 'fas fa-leaf' },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'ReactJS', icon: 'fab fa-react' },
       
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'MERN Stack', icon: 'fas fa-layer-group' },
    
        { name: 'Machine Learning Tools', icon: 'fas fa-brain' },
        
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'Figma', icon: 'fab fa-figma' },
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