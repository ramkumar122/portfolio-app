import '../styles/main.css';

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

function useTyping(text, speed) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    }, 400);
    return () => clearTimeout(start);
  }, [text, speed]);
  return display;
}

const skills = [
  'Python', 'Java', 'TypeScript', 'React', 'Angular',
  'Spring Boot', 'FastAPI', 'AWS CDK', 'Docker', 'PostgreSQL',
  'Azure', 'ML / RAG', 'REST APIs', 'Algorithms', 'System Design',
];

const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'MAY 2025 – AUG 2025',
    bullets: [
      'Built modular AWS CDK components for certificate authentication, cutting developer onboarding by 30%.',
      'Designed event-driven lifecycle workflows, improving operational reliability by 45%.',
      'Automated credential rotation with zero-disruption cycles via queue-based orchestration.',
      'Refactored provisioning logic into reusable modules across 20+ internal services.',
      'Built Jest + PyTest test suites achieving 96% coverage, reducing regression risk.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Loop Roots Foundation',
    period: 'FEB 2026 – PRESENT',
    bullets: [
      'Designed and implemented a platform using Python, Node.js, React, TypeScript, PostgreSQL, Redis, and AWS for real-time workflow orchestration and user-facing product features.',
      'Developed backend REST APIs and service workflows for lifecycle operations, asynchronous communication, and scalable data handling across distributed components.',
      'Optimized PostgreSQL schemas and query flows, improving API performance by 25%.',
      'Added logging, monitoring, and validation mechanisms to improve debugging efficiency, reliability, and maintainability.',
      'Translated product and workflow needs into end-to-end technical solutions with attention to usability, API design, and delivery speed.',
    ],
  },
  {
    role: 'UI/UX Coordinator',
    company: 'Arizona State University',
    period: 'MAY 2021 – JAN 2023',
    bullets: [
      'Coordinated UI/UX design efforts for student projects across multiple departments.',
      'Led design sprints and workshops, fostering innovation and cross-team collaboration.',
      'Conducted user research and usability testing to improve product design quality.',
    ],
  },
];

const projects = [
  {
    title: 'VS Code AI Coding Assistant',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    desc: 'Extension + Azure-hosted inference proxy with streaming chat, multi-turn history, and App Insights telemetry.',
    tags: ['TypeScript', 'VS Code API', 'Azure OpenAI', 'Azure Functions'],
    github: 'https://github.com/ramkumar122/aiagent',
  },
  {
    title: 'AI Knowledge Q&A Platform (RAG)',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80',
    desc: 'Upload documents, ask questions, get cited answers. Full-stack RAG with JWT auth and SQLAlchemy persistence.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'RAG', 'TypeScript'],
    github: 'https://github.com/ramkumar122/Document-Reader',
  },
  {
    title: 'High-Throughput Inventory Service',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    desc: 'Spring Boot microservice for inventory queries with connection pooling, batch writes, and 96% test coverage.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit'],
    github: 'https://github.com/ramkumar122/inventory-service',
  },
  {
    title: 'Kobe Bryant Career Visualization',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    desc: 'Serverless analytics dashboard with sub-200ms latency, Bokeh + Plotly visualizations, and Python ETL.',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python', 'Plotly'],
    github: '',
  },
  {
    title: 'Blood Bank Management System',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    desc: 'Full-stack donor & inventory system with real-time tracking and optimized MySQL schemas.',
    tags: ['React', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/ramkumar122/blood-bank',
  },
  {
    title: 'Spades Score Tracker',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    desc: 'Angular SPA for multi-player Spades scorekeeping with a live leaderboard and TypeScript scoring engine.',
    tags: ['Angular', 'TypeScript'],
    github: 'https://github.com/ramkumar122/spades',
    live: 'https://ramkumar122.github.io/spades/',
  },
];

function ContactSection() {
  const [state, handleSubmit] = useForm('mblkwzqv');

  if (state.succeeded) {
    return <p className="contact-success">Thanks! I'll get back to you soon.</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row-2">
        <input className="contact-input" type="text" name="name" placeholder="Name" required />
        <input className="contact-input" type="email" name="email" placeholder="Email" required />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input className="contact-input" type="text" name="subject" placeholder="Subject" />
      <textarea className="contact-input" name="message" placeholder="Message" rows={5} required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="contact-submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Home = () => {
  const typed = useTyping('I_love_to_build', 80);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section id="home" className="hero-section">
        <div className="hero-circle">
          <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="Ramkumar Meenavalli" className="hero-avatar" />
          <p className="hero-role">IT Graduate Student · Amazon SDE Intern</p>
          <h1 className="hero-title">
            {typed}
            <span className="hero-cursor" />
          </h1>
          <nav className="hero-nav">
            <button className="hero-nav-link" onClick={() => scrollTo('about')}>ABOUT</button>
            <button className="hero-nav-link" onClick={() => scrollTo('education')}>EDUCATION</button>
            <button className="hero-nav-link" onClick={() => scrollTo('experience')}>EXPERIENCE</button>
            <button className="hero-nav-link" onClick={() => scrollTo('skills')}>SKILLS</button>
            <button className="hero-nav-link" onClick={() => scrollTo('projects')}>PROJECTS</button>
          </nav>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div style={{ padding: '7rem 0' }}>
          <p className="ms-section-label">A B O U T</p>
          <div className="about-grid">
            <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="Ramkumar Meenavalli" className="about-photo" />
            <div className="about-content">
              <h2 className="about-content-heading">
                Here is a little <span>background</span>
              </h2>
              <p className="about-content-text">
                Hey! I'm a Information Technology graduate student at Arizona State University with a
                passion for building scalable, reliable systems. As an SDE Intern at Amazon, I
                shipped production infrastructure — modular AWS CDK components, event-driven
                credential rotation workflows, and automated testing pipelines that hit 96% coverage.
              </p>
              <br />
              <p className="about-content-text">
                My foundation spans data structures & algorithms, system design, cloud engineering
                (AWS + Azure), and AI/ML. I love bridging theory with hands-on projects — from RAG
                platforms and serverless analytics to full-stack web apps. I'm actively looking for
                new grad SDE roles and research opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: '7rem 0' }}>
        <p className="ms-section-label">E X P E R I E N C E</p>
        <div className="exp-grid">
          {experience.map((exp) => (
            <div className="exp-card" key={exp.role}>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-desc">
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: '7rem 0' }}>
        <p className="ms-section-label">E D U C A T I O N</p>
        <div className="edu-card-wrap">
          <div className="exp-card edu-card">
            <div className="exp-role">Arizona State University</div>
            <div className="exp-company">Master of Science, Information Technology</div>
            <div className="exp-period">2024 – PRESENT · TEMPE, AZ</div>
            <div className="edu-courses">
              <p className="edu-courses-label">Relevant Coursework</p>
              <div className="edu-chips">
                {['Data Structures & Algorithms', 'Distributed Systems', 'Machine Learning', 'Database Systems', 'Cloud Computing', 'Software Engineering'].map(c => (
                  <span className="edu-chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="exp-card edu-card">
            <div className="exp-role">Anil Neerukonda Institute of Technology &amp; Sciences</div>
            <div className="exp-company">Bachelor of Technology, Information Technology</div>
            <div className="exp-period">2019 – 2023 · GRADE: 8.47 / 10</div>
            <div className="edu-courses">
              <p className="edu-courses-label">Highlights</p>
              <div className="edu-chips">
                {['Java (NPTEL)', 'Python (NPTEL)', 'IBM Db2 V12', 'AI & Machine Learning', 'Cloud Computing', 'Data Science'].map(c => (
                  <span className="edu-chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: '7rem 0' }}>
        <p className="ms-section-label">S K I L L S</p>
        <p className="skills-subtitle">HOVER OVER A SKILL TO HIGHLIGHT</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-circle" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="projects-section">
        <p className="ms-section-label">P R O J E C T S</p>
        <div className="projects-inner">
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <img src={p.image} alt={p.title} className="project-card-img" />
                <div className="project-card-body">
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-card-tags">
                    {p.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-card-links">
                    {p.github && (
                      <a className="project-card-link" href={p.github} target="_blank" rel="noopener noreferrer">
                        GitHub →
                      </a>
                    )}
                    {p.live && (
                      <a className="project-card-link" href={p.live} target="_blank" rel="noopener noreferrer">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <p className="ms-section-label">C O N T A C T</p>
        <div className="contact-inner">
          <h2 className="contact-heading">
            I have got just what you need. <span>Lets talk.</span>
          </h2>
          <div className="contact-info">
            <div className="contact-info-row">
              <FaEnvelope />
              <span>rammeenavalli0@gmail.com</span>
            </div>
            <div className="contact-info-row">
              <FaLinkedin />
              <span>linkedin.com/in/ram-meenavalli-671173222</span>
            </div>
            <div className="contact-info-row">
              <FaMapMarkerAlt />
              <span>Tempe, Arizona</span>
            </div>
          </div>
          <ContactSection />
        </div>
      </section>

      <footer className="footer-section">
        <p>Designed &amp; built by Ramkumar Meenavalli.</p>
      </footer>
    </div>
  );
};

export default Home;
