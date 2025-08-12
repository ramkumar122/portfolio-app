import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.section className="contact-section page-section" initial="hidden" animate="visible" variants={fadeSlide}>
      <div className="contact-card">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-desc">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
        {submitted ? (
          <div className="contact-success">Thank you for your message! I'll get back to you soon.</div>
        ) : (
          <form className="contact-form" action="https://formspree.io/f/xjvnlqzq" method="POST" onSubmit={() => setSubmitted(true)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit" className="contact-submit">Submit</button>
          </form>
        )}
      </div>
    </motion.section>
  );
}