import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <h2>Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">

          <h3>Let’s Work Together</h3>

          <p className="contact-purpose">
            I’m currently open to <strong>full-time roles</strong>,{" "}
            <strong>freelance projects</strong>, and{" "}
            <strong>collaborations</strong> focused on{" "}
            <strong>MERN stack development</strong> and{" "}
            <strong>AWS integrations</strong>.
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
            Prefer email? I reply within <strong>24 hours</strong>.
          </p>

          <div className="email-cta">
            <a
              className="email-button"
              href="mailto:manikanta.suthari2002@gmail.com"
            >
              📩 Send Email
            </a>
          </div>

          <h4 className="connect-text">Connect With Me</h4>
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
