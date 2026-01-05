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
    description: `• Engineered modular components for Amazon's certificate authentication platform using TypeScript and AWS CDK, streamlining configuration flows and reducing developer onboarding time by 30%.\n• Designed event-driven lifecycle workflows with validation and recovery logic, improving operational reliability by 45%.\n• Automated credential rotation using queue-based orchestration and integrity checks, enabling zero-disruption rotation cycles and removing manual coordination.\n• Refactored fragmented provisioning logic into reusable modules built on clean architecture patterns, improving maintainability for 20+ internal services and reducing configuration inconsistencies by 60%.\n• Built automated testing with Jest + PyTest and local cloud emulation, increasing coverage to 96% and lowering regression risk.`
  },
  {
    role: 'UI/UX Coordinator',
    company: 'Arizona State University',
    period: 'May 2021 - Jan 2023',
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
