import '../styles/main.css';

import React from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  return (
    <div className="page-shell">
      <motion.section className="section about-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <div className="section-header">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Driven by curiosity. Built on CS fundamentals.</h2>
          </div>
          <p className="section-subtitle">
            CS grad student who shipped production-grade infrastructure at Amazon and loves building things that scale.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Information Technology graduate student at Arizona State University with a passion
              for engineering robust, scalable systems. As an SDE Intern at Amazon, I built
              production infrastructure — modular AWS CDK components, event-driven credential
              rotation workflows, and automated testing pipelines that achieved 96% coverage.
            </p>
            <p>
              My foundation spans data structures &amp; algorithms, system design, cloud
              engineering, and AI/ML. I actively bridge theory with hands-on projects, from RAG
              platforms and serverless analytics apps to full-stack web applications. I care
              deeply about code quality, clean architecture, and continuous learning.
            </p>
          </div>
          <div className="about-panels">
            <div className="about-card">
              <h3>What I value</h3>
              <ul>
                <li>CS fundamentals as a foundation for everything</li>
                <li>Systems that are reliable, efficient, and maintainable</li>
                <li>Continuous learning and intellectual honesty</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>How I contribute</h3>
              <ul>
                <li>First-principles thinking on hard problems</li>
                <li>Rapid prototyping with production-quality code</li>
                <li>Thorough testing, documentation, and ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
