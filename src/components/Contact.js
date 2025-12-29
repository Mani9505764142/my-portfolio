import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <h2>Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">

          <h3>Let’s Work Together</h3>

          {/* Lead Intent Statement */}
          <p className="lead-intro">
            I help businesses and founders build <strong>MERN applications</strong>,
            deploy <strong>AWS cloud infrastructure</strong>, and automate workflows.
            Open to <strong>freelance projects</strong>, <strong>remote roles</strong>,
            and <strong>full-time opportunities</strong>.
          </p>

          <div className="contact-details">
            <p><i className="fas fa-envelope"></i><strong>Email:</strong> manikanta.suthari2002@gmail.com</p>
            <p><i className="fas fa-phone"></i><strong>Phone:</strong> +91 95057 64142</p>
            <p><i className="fas fa-map-marker-alt"></i><strong>Location:</strong> Hyderabad, India</p>
          </div>

          <p className="cta-line">
            ⚡ I reply within <strong>1–3 hours</strong> (WhatsApp is faster).
          </p>

          {/* 🚀 Conversion Buttons */}
          <div className="contact-options">

            <a
              href="https://wa.me/919505764142?text=Hi%20Sai%20Manikanta,%20I%20visited%20your%20portfolio.%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp-btn"
            >
              💬 WhatsApp Me
            </a>

            <a
              href="mailto:manikanta.suthari2002@gmail.com?subject=Project%20Inquiry%20From%20Portfolio&body=Hi%20Sai%20Manikanta,%20I%20want%20to%20discuss%20a%20project%20regarding..."
              className="btn email-btn"
            >
              📩 Email Me
            </a>

          </div>

          <h4 className="connect-text">Connect With Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sai-manikanta-vivek-suthari-467001232" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Mani9505764142" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
