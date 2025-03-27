import React from "react";
import profileImage from "../assets/My passportsize photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-me-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <img 
            src={profileImage} 
            alt="Sai Manikanta Vivek" 
            className="hero-profile-image"
          />
          <div className="hero-text">
            <h1>My Journey</h1>
            <p className="hero-subtitle">
            "Exploring Tech: My Evolution into Cloud Engineering and Web Development"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        {/* Personal Story Section */}
        <section className="about-section">
          <h2 className="section-title">Who I Am</h2>
          <div className="section-content">
            <p>
            I'm Sai Manikanta Vivek Suthari, a dedicated cloud engineer and web developer based in Tiruvuru, NTR District, India. 
            My journey in technology began when I explored programming during my B.Tech at Sree Vahini Institute of Science and Technology, igniting a deep passion for leveraging technology to solve real-world challenges.
            </p>
            <p>
            What I love most about cloud engineering and web development is their combined potential to build scalable, efficient solutions that empower businesses and enhance user experiences worldwide. I approach every project with a focus on innovation, a commitment to quality, and a collaborative mindset to deliver impactful, reliable systems that seamlessly integrate cloud infrastructure with dynamic, user-friendly web applications.
            </p>
          </div>
        </section>

        {/* Career Philosophy */}
        <section className="about-section">
          <h2 className="section-title">My Approach</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>Problem Solving</h3>
              <p>
                I thrive on breaking down complex challenges into elegant solutions, 
                always considering both technical and business perspectives.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Continuous Learning</h3>
              <p>
                In our rapidly evolving field, I dedicate time each week to explore 
                new technologies and deepen my existing knowledge.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Collaboration</h3>
              <p>
                Some of my best work comes from teamwork. I value diverse perspectives 
                and believe they lead to innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="about-section">
          <h2 className="section-title">Beyond Coding</h2>
          <div className="interests-content">
            <p>
              When I'm not architecting cloud solutions, you can find me [your hobbies/interests]. 
              I believe that [how your outside interests complement your work].
            </p>
            <div className="interest-icons">
              {/* Add icons or images representing your interests */}
              <span>🏋️ Fitness</span>
              <span>📚 Reading</span>
              <span>✈️ Travel</span>
              {/* Add more as needed */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;