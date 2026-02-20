import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <h2>Let’s Build Something Meaningful</h2>

      <div className="contact-container">
        <div className="contact-info">

          <h3>Open to Opportunities</h3>

          {/* Positioning Statement */}
          <p className="lead-intro">
            I work on AI-integrated systems, scalable MERN applications, and 
            AWS cloud architectures (EC2 & Serverless). 
            Open to full-time roles, remote opportunities, and high-impact projects 
            where engineering depth and execution matter.
          </p>

          <div className="contact-details">
            <p>
              <i className="fas fa-envelope"></i>
              <strong>Email:</strong> manikanta.suthari2002@gmail.com
            </p>

            <p>
              <i className="fas fa-phone"></i>
              <strong>Phone:</strong> +91 95057 64142
            </p>

            <p>
              <i className="fas fa-map-marker-alt"></i>
              <strong>Location:</strong> Hyderabad, India
            </p>
          </div>

          <p className="cta-line">
            Available for discussions around AI systems, cloud architecture, and full-stack engineering.
          </p>

          {/* Contact Buttons */}
          <div className="contact-options">

            <a
              href="https://wa.me/919505764142?text=Hi%20Sai,%20I%20went%20through%20your%20portfolio.%20Let’s%20discuss%20an%20opportunity."
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp-btn"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:manikanta.suthari2002@gmail.com?subject=Opportunity%20Discussion&body=Hi%20Sai,%20I%20would%20like%20to%20connect%20regarding..."
              className="btn email-btn"
            >
              📩 Email
            </a>

          </div>

          <h4 className="connect-text">Connect</h4>

          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/sai-manikanta-vivek-suthari-467001232" 
              target="_blank" 
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a 
              href="https://github.com/Mani9505764142" 
              target="_blank" 
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
