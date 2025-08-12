import React from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const experience = [
  {
    role: 'Amazon SDE Intern',
    company: 'Amazon',
    period: 'May–Aug 2025',
    description: 'Built AWS CDK constructs and designed automation (see resume for details).'
  },
  {
    role: 'UI/UX Coordinator',
    company: 'ASU',
    period: '2024 - 2025',
    description: 'Coordinated UI/UX for student projects and led design sprints.'
  }
];

const About = () => {
  return (
    <div className="about-root">
      <motion.section id="about" className="about-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <h2 className="about-title">About Me</h2>
        <p className="about-desc">
          I am a results-driven software developer and IT graduate student at Arizona State University, passionate about building impactful digital solutions. My experience as an SDE Intern at Amazon includes designing AWS CDK constructs, automating certificate rotation, and enhancing system security. I have a strong foundation in Python, Java, SQL, and TypeScript, and enjoy leveraging machine learning and data visualization to solve real-world problems. I thrive in collaborative environments, value creative problem-solving, and am committed to continuous learning and innovation.
        </p>
      </motion.section>

      <section id="experience" className="experience-section" style={{ marginTop: '1rem' }}>
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>
        <div className="experience-list">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 className="experience-role">{exp.role} <span className="experience-company">- {exp.company}</span></h3>
              <p className="experience-period" style={{ fontStyle: 'italic', color: '#888' }}>{exp.period}</p>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
