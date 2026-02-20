import React from 'react';
import './Skills.css';

const Skills = () => {

  const skillCategories = [

    {
      category: 'AI Engineering',
      skills: [
        { name: 'LLM Integration', icon: 'fas fa-brain' },
        { name: 'RAG (Retrieval-Augmented Generation)', icon: 'fas fa-search' },
        { name: 'LangChain Orchestration', icon: 'fas fa-project-diagram' },
        { name: 'Agentic Workflows', icon: 'fas fa-robot' },
        { name: 'Prompt Engineering', icon: 'fas fa-comment-dots' },
        { name: 'AI System Evaluation', icon: 'fas fa-check-circle' },
      ],
    },

    {
      category: 'Frontend Engineering',
      skills: [
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Next.js', icon: 'fas fa-layer-group' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3 / Tailwind', icon: 'fab fa-css3-alt' },
      ],
    },

    {
      category: 'Backend & API Architecture',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node' },
        { name: 'Express.js', icon: 'fas fa-code' },
        { name: 'REST API Design', icon: 'fas fa-network-wired' },
        { name: 'JWT Authentication', icon: 'fas fa-shield-alt' },
        { name: 'Microservices Design', icon: 'fas fa-cubes' },
      ],
    },

    {
      category: 'Cloud & Infrastructure (AWS)',
      skills: [
        { name: 'EC2 (Compute Layer)', icon: 'fas fa-server' },
        { name: 'Lambda (Serverless)', icon: 'fas fa-bolt' },
        { name: 'S3 (Storage)', icon: 'fas fa-box' },
        { name: 'API Gateway', icon: 'fas fa-plug' },
        { name: 'DynamoDB', icon: 'fas fa-table' },
        { name: 'RDS', icon: 'fas fa-database' },
        { name: 'IAM & Security Policies', icon: 'fas fa-user-shield' },
        { name: 'CloudWatch (Monitoring)', icon: 'fas fa-chart-line' },
      ],
    },

    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
      ],
    },

    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'CI/CD Pipelines', icon: 'fas fa-sync-alt' },
        { name: 'Linux Environment', icon: 'fas fa-terminal' },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2>Technical Expertise</h2>

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
