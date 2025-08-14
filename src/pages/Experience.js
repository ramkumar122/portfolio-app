import React from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'May 2025 - Aug 2025',
    description: `• Designed and implemented AWS CDK constructs for scalable infrastructure automation.
• Automated certificate rotation processes to enhance system security.
• Developed monitoring and alerting solutions to improve operational reliability.
• Collaborated with cross-functional teams to deliver high-impact features on time.`
  },
  {
    role: 'UI/UX Coordinator',
    company: 'Arizona State University',
    period: 'May 2024 - Aug 2025',
    description: `• Coordinated UI/UX design efforts for student projects.
• Led design sprints and workshops to foster innovation.
• Conducted user research and usability testing to improve product designs.`
  }
];

const Experience = () => {
  return (
    <div className="experience-root">
      <motion.section className="experience-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Professional Experience
        </motion.h2>
        <div className="experience-list">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
              style={{ marginBottom: '2rem' }}
            >
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <p className="experience-description" style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
