import React from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
  return (
    <div className="about-root">
      <motion.section className="about-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I am a results-driven software developer and IT graduate student at Arizona State University, passionate about building impactful digital solutions. My experience as an SDE Intern at Amazon includes designing AWS CDK constructs, automating certificate rotation, and enhancing system security. I have a strong foundation in Python, Java, SQL, and TypeScript, and enjoy leveraging machine learning and data visualization to solve real-world problems. I thrive in collaborative environments, value creative problem-solving, and am committed to continuous learning and innovation.
        </motion.p>
      </motion.section>
    </div>
  );
};

export default About;
