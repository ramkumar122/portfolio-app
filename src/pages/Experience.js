import '../styles/main.css';

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
    description: `• Designed and implemented AWS CDK constructs for scalable infrastructure automation.\n• Automated certificate rotation processes to enhance system security.\n• Developed monitoring and alerting solutions to improve operational reliability.\n• Collaborated with cross-functional teams to deliver high-impact features on time.`
  },
  {
    role: 'UI/UX Coordinator',
    company: 'Arizona State University',
    period: 'May 2024 - Aug 2025',
    description: `• Coordinated UI/UX design efforts for student projects.\n• Led design sprints and workshops to foster innovation.\n• Conducted user research and usability testing to improve product designs.`
  }
];

const splitLines = (text) =>
  text
    .split('\n')
    .map((line) => line.replace(/^•\s*/, '').trim())
    .filter(Boolean);

const Experience = () => {
  return (
    <div className="page-shell">
      <motion.section className="section experience-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <div className="section-header">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Building real-world impact.</h2>
          </div>
          <p className="section-subtitle">
            Highlights from internships and leadership roles focused on scalable product work.
          </p>
        </div>
        <div className="timeline">
          {experience.map((exp) => (
            <div className="timeline-item" key={exp.role}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-list">
                  {splitLines(exp.description).map((line) => (
                    <li key={`${exp.role}-${line}`}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
