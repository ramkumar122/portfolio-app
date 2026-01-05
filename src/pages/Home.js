import '../styles/main.css';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaReact,
  FaCss3Alt,
  FaCloud,
  FaDatabase,
  FaChartLine,
  FaCode,
  FaArrowRight
} from 'react-icons/fa';

import { useForm, ValidationError } from '@formspree/react';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const heroChips = ['React', 'TypeScript', 'Node.js', 'AWS', 'Azure', 'Data Viz'];

const expertise = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    items: [
      { label: 'React & UI Systems', value: 92 },
      { label: 'TypeScript', value: 88 },
      { label: 'Modern CSS', value: 90 },
      { label: 'UX Motion', value: 84 }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: <FaDatabase />,
    items: [
      { label: 'Python & Java', value: 88 },
      { label: 'REST APIs', value: 86 },
      { label: 'SQL Modeling', value: 90 },
      { label: 'Cloud Integrations', value: 82 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    items: [
      { label: 'AWS CDK', value: 85 },
      { label: 'Azure', value: 60 },
      { label: 'CI/CD Pipelines', value: 80 },
      { label: 'Monitoring', value: 82 },
      { label: 'Security', value: 78 }
    ]
  }
];

const featuredProjects = [
  {
    title: 'VS Code AI Coding Assistant',
    description: 'Extension + Azure-hosted inference proxy with streaming chat and local history.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Dedicated chat panel with streaming responses and multi-turn history',
      'Azure OpenAI integration with configurable model and temperature',
      'Azure Functions proxy with Key Vault secrets and request policies',
      'App Insights telemetry for reliability and latency tracking'
    ],
    stack: ['TypeScript', 'VS Code API', 'Azure OpenAI', 'Azure Functions', 'Key Vault', 'App Insights'],
    github: ''
  },
  {
    title: 'educonnect-app',
    description: 'A web application for educational connectivity and collaboration.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Collaboration-first workflows', 'Role-based access', 'Responsive UI delivery'],
    stack: ['Full-stack', 'Collaboration', 'Education'],
    github: 'https://github.com/ramkumar122/educonnect-app'
  },
  {
    title: 'fingerprint-voting-system',
    description: 'A Python-based fingerprint voting system for secure elections.',
    image: 'https://s39569.pcdn.co/wp-content/uploads/2023/07/digital-fingerprint-on-black-screen.jpg',
    highlights: ['Biometric verification', 'Secure voting flows', 'Audit-friendly records'],
    stack: ['Python', 'Security', 'Data integrity'],
    github: 'https://github.com/ramkumar122/fingerprint-voting-system'
  },
  {
    title: 'my-s3-upload-project',
    description: 'A project for uploading files to AWS S3 using HCL.',
    image: 'https://meta-l.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1684313559418x123725927220291300/aws-s3-logo.png',
    highlights: ['Infrastructure as code', 'Automated upload pipelines', 'Cloud storage flows'],
    stack: ['AWS', 'Automation', 'Cloud'],
    github: 'https://github.com/ramkumar122/my-s3-upload-project'
  },
  {
    title: 'Kobe Bryant Career Visualization App',
    description: 'Serverless analytics app with interactive dashboards for career insights.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Serverless AWS stack with sub-200ms query latency',
      'Bokeh + Plotly dashboards with dynamic filters and comparisons',
      'Python + Pandas ETL automation for clean season-level reporting'
    ],
    stack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python', 'Pandas', 'Bokeh', 'Plotly'],
    github: ''
  },
  {
    title: 'Blood Bank Management System',
    description: 'Full-stack donor and inventory system with real-time updates.',
    image: 'https://media.gettyimages.com/id/99310904/photo/donated-blood.jpg?s=612x612&w=gi&k=20&c=cI2h-Opj9O0gZCUa4jxz2pNBldoQYPExR2mJRm5NbGE=',
    highlights: [
      'Spring Boot REST APIs powering React dashboards',
      'Optimized MySQL schemas with indexing for fast queries',
      'Real-time inventory tracking for large datasets'
    ],
    stack: ['React', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/ramkumar122/blood-bank'
  }
];

const capabilities = [
  {
    title: 'Frontend Craft',
    icon: <FaReact />,
    items: ['Design systems', 'Responsive UI', 'Animation polish']
  },
  {
    title: 'API Engineering',
    icon: <FaDatabase />,
    items: ['REST APIs', 'Data modeling', 'Auth workflows']
  },
  {
    title: 'Cloud Foundations',
    icon: <FaCloud />,
    items: ['AWS CDK', 'Infrastructure planning', 'Secure deployments']
  },
  {
    title: 'Data Storytelling',
    icon: <FaChartLine />,
    items: ['Dashboards', 'Insights', 'Reporting']
  },
  {
    title: 'Interface Styling',
    icon: <FaCss3Alt />,
    items: ['Modern CSS', 'Theming', 'Accessibility']
  },
  {
    title: 'Product Delivery',
    icon: <FaCode />,
    items: ['Agile teamwork', 'Documentation', 'Quality reviews']
  }
];

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

function ContactSection() {
  const [state, handleSubmit] = useForm('mblkwzqv');
  const success = state.succeeded;

  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial="hidden"
      animate="visible"
      variants={fadeSlide}
    >
      <div className="section-header">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&#39;s build something amazing.</h2>
        </div>
        <p className="section-subtitle">
          Looking for a developer who can craft high-performance, interactive web experiences?
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-panel">
          <h3 className="contact-title">Ready to collaborate?</h3>
          <p className="contact-desc">
            Share a bit about your project or role. I&#39;ll respond with ideas, timelines, and
            next steps.
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
          {success ? (
            <div className="contact-success">
              <FaEnvelope />
              Thanks for the note! I&#39;ll get back to you soon.
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
  );
}

const Home = () => {
  return (
    <div className="page-shell portfolio-root">
      <motion.section id="home" className="hero-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <div className="hero-floaters" aria-hidden="true">
          <span className="hero-float">
            <FaReact />
          </span>
          <span className="hero-float">
            <FaCode />
          </span>
          <span className="hero-float">
            <FaCloud />
          </span>
          <span className="hero-float">
            <FaChartLine />
          </span>
        </div>
        <div className="hero-inner">
          <p className="hero-role">Full-Stack &amp; Cloud Developer</p>
          <h1 className="hero-title">Ramkumar Meenavalli</h1>
          <p className="hero-tagline">
            Crafting exceptional digital experiences with modern web technologies and cloud-ready
            systems.
          </p>
          <div className="hero-chips">
            {heroChips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              View my work
              <FaArrowRight />
            </a>
            <a href="#contact" className="button button-ghost">
              Get in touch
              <FaArrowRight />
            </a>
          </div>
          <a
            className="hero-resume-link"
            href="https://docs.google.com/document/d/1cIvAtSd4-q16boNN-oTJCsnzXT7nzJad8CYh9mJypkU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
            <FaExternalLinkAlt />
          </a>
          <div className="hero-socials">
            <a href="mailto:rammeenavalli0@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/ram-meenavalli-671173222/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ramkumar122?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll to explore</span>
          <span className="scroll-arrow" />
        </div>
      </motion.section>

      <section id="about" className="section about-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Designing reliable, human-centered software.</h2>
          </div>
          <p className="section-subtitle">
            I partner with teams to ship clean, scalable products that feel effortless to use.
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
              <h3>Focus areas</h3>
              <ul>
                <li>Infrastructure automation &amp; reliability</li>
                <li>Product-minded UI engineering</li>
                <li>Data visualization &amp; insights</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>How I work</h3>
              <ul>
                <li>Research-first collaboration</li>
                <li>Rapid prototyping &amp; iteration</li>
                <li>Quality checks and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Technical Expertise</p>
            <h2 className="section-title">Deep focus across the stack.</h2>
          </div>
        </div>
        <div className="expertise-grid">
          {expertise.map((group) => (
            <div className="expertise-card" key={group.title}>
              <div className="expertise-header">
                <span className="expertise-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              {group.items.map((item) => (
                <div className="expertise-item" key={item.label}>
                  <div className="expertise-row">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="expertise-bar">
                    <span style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title">Selected builds and experiments.</h2>
          </div>
        </div>
        <div className="projects-stack">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.title}
              className={`project-feature ${idx % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="project-content">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-meta">
                  {project.stack.map((item) => (
                    <span className="project-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                      View GitHub
                    </a>
                  )}
                </div>
              </div>
              <div className="project-media">
                <img src={project.image} alt={project.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Modern Web Capabilities</p>
            <h2 className="section-title">What I bring to the table.</h2>
          </div>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <div className="capability-card" key={capability.title}>
              <div className="capability-header">
                <span className="capability-icon">{capability.icon}</span>
                <h3>{capability.title}</h3>
              </div>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-header">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Building real-world impact.</h2>
          </div>
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
      </section>

      <ContactSection />

      <footer className="footer-section">
        <p>Designed &amp; built by Ramkumar Meenavalli.</p>
      </footer>
    </div>
  );
};

export default Home;
