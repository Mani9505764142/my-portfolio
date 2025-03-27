import React from "react";
import profileImage from "../assets/My passportsize photo.jpg"; // Make sure this path is correct
import './Home.css';

const Header = () => {
  return (
    <div className="portfolio-header">
      <div className="header-content">
        <h1 className="portfolio-title"><b>Welcome to my Portfolio</b></h1>
        
        <div className="profile-section">
          <img 
            src={profileImage} 
            alt="Sai Manikanta Vivek" 
            className="profile-image"
          />
          <div className="name-container">
            <h2 className="main-name">Sai Manikanta Vivek</h2>
            <h3 className="surname">Suthari</h3>
          </div>
        </div>
        
        <div className="title-divider">
          <h4 className="professional-title">
          Building Scalable Apps | Frontend Developer | AWS & GCP
          </h4>
        </div>
        
        <p className="description">
        "Passionate about building innovative cloud solutions and dynamic web applications, I bring expertise in AWS, Java, and Oracle SQL, along with a strong command of frontend technologies like HTML, CSS, JavaScript, and React. 
        Eager to contribute my skills to cutting-edge projects that blend performance, scalability, and seamless user experiences."
        </p>
      </div>
    </div>
  );
};

export default Header;