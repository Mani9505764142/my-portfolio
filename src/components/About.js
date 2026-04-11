import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./About.css";

import devImage from "../assets/dev.jpg";
import cloudImage from "../assets/cloud.jpg";
import aiImage from "../assets/ai.jpg";

// 🔹 Animations
const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const About = () => {
  // 🔥 Scroll-based parallax
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <div className="about-container">

      {/* ===== SECTION 1 ===== */}
      <section className="about-section cinematic">
        <motion.div
          className="about-image"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img src={devImage} alt="Developer" />
        </motion.div>

        <motion.div
          className="about-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Who I Am</h2>
          <p>
            I’m Sai Manikanta Vivek Suthari — an AI-focused Full Stack Engineer building scalable web and AI-powered systems using MERN Stack and AWS. I design end-to-end architectures that connect clean frontend interfaces with secure backend APIs and cloud infrastructure.
          </p>
          <p>
            My work increasingly focuses on integrating LLM-based systems, Retrieval-Augmented Generation (RAG), and agentic workflows into production-ready applications. I approach AI not as a demo feature, but as an engineered system that must be reliable, observable, and scalable.
          </p>
        </motion.div>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="about-section cinematic reverse">
        <motion.div
          className="about-image"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img src={cloudImage} alt="Cloud Systems" />
        </motion.div>

        <motion.div
          className="about-text"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>What I Do</h2>
          <p>
            I build production-ready systems using React, Node.js, and AWS.
            From APIs to deployment, everything is designed for scale.
          </p>
        </motion.div>
      </section>

      {/* ===== SECTION 3 (AI - CINEMATIC) ===== */}
      <section className="ai-section">

        {/* 🔥 Background with parallax */}
        <motion.img
          src={aiImage}
          alt="AI Systems"
          className="ai-bg"
          style={{ y: bgY }}
        />

        {/* 🔥 Overlay (for readability + cinematic feel) */}
        <div className="ai-overlay"></div>

        {/* 🔥 Content (LEFT aligned, animated) */}
        <motion.div
          className="ai-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>AI Automation & RAG Systems</h1>
          <p>
            I build AI-powered systems using LangChain, Ollama, and n8n —
            from intelligent chatbots to production-ready RAG pipelines.
          </p>
        </motion.div>

      </section>

    </div>
  );
};

export default About;