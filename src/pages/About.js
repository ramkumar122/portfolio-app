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
            <h2 className="section-title">Building thoughtful, modern digital experiences.</h2>
          </div>
          <p className="section-subtitle">
            A quick look at my journey, values, and the way I approach product work.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a results-driven software developer and IT graduate student at Arizona State
              University, passionate about building impactful digital solutions. My experience as
              an SDE Intern at Amazon includes designing AWS CDK constructs, automating certificate
              rotation, and enhancing system security.
            </p>
            <p>
              I have a strong foundation in Python, Java, SQL, and TypeScript, and enjoy leveraging
              machine learning and data visualization to solve real-world problems. I thrive in
              collaborative environments, value creative problem-solving, and am committed to
              continuous learning and innovation.
            </p>
          </div>
          <div className="about-panels">
            <div className="about-card">
              <h3>What I value</h3>
              <ul>
                <li>Clear communication and shared goals</li>
                <li>Design that balances elegance and usability</li>
                <li>Systems that are reliable and easy to maintain</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>How I contribute</h3>
              <ul>
                <li>Collaborative planning and discovery</li>
                <li>Rapid prototyping and validation</li>
                <li>Quality checks, documentation, and support</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
