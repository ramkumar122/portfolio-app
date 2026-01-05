import '../styles/main.css';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [state, handleSubmit] = useForm('mblkwzqv');

  return (
    <div className="page-shell">
      <motion.section className="section contact-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <div className="section-header">
          <div>
            <p className="section-kicker">Connect</p>
            <h2 className="section-title">Let&#39;s build something amazing.</h2>
          </div>
          <p className="section-subtitle">
            Share a project idea or opportunity and I&#39;ll respond with next steps.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-panel">
            <h3 className="contact-title">Start a conversation</h3>
            <p className="contact-desc">
              I&#39;m open to freelance, internships, and full-time opportunities. Let&#39;s connect.
            </p>
            <div className="contact-links">
              <a href="mailto:rammeenavalli0@gmail.com" className="contact-link">
                <FaEnvelope />
                rammeenavalli0@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ram-meenavalli-671173222/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/ramkumar122?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
          <div className="contact-form-card">
            {state.succeeded ? (
              <div className="contact-success">
                <FaEnvelope />
                Thanks for reaching out! I&#39;ll get back to you soon.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="contact-form-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" className="button button-primary" disabled={state.submitting}>
                  Send message
                  <FaArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
