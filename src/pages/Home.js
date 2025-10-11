import '../styles/main.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaQuoteLeft, FaEnvelope, FaLinkedin, FaReact, FaJs, FaCss3Alt, FaHtml5, FaCloud, FaPython, FaJava, FaPalette } from 'react-icons/fa';
import { SiTensorflow, SiTypescript, SiPlotly, SiPandas, SiAmazonwebservices, SiMysql, SiSpringboot, SiDocker, SiJenkins, SiFlask, SiOpencv } from 'react-icons/si';

// Contact form section for Home.js using @formspree/react
import { useForm, ValidationError } from '@formspree/react';

function ContactSection() {
  const [state, handleSubmit] = useForm("mblkwzqv");
  if (state.succeeded) {
    return (
      <motion.section id="contact" className="contact-section" initial="hidden" animate="visible" variants={fadeSlide} style={{ marginTop: '0' }}>
        <div className="contact-card">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.2rem' }}>
            <FaEnvelope size={38} color="#a78bfa" style={{ marginBottom: '0.5rem' }} />
            <h2 className="contact-title" style={{ marginBottom: '0.2rem' }}>Contact</h2>
            <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg,#a78bfa,#7c3aed)', borderRadius: 2, margin: '0.7rem 0 1.2rem 0' }} />
          </div>
          <p className="contact-success">Thank you for your message! I'll get back to you soon.</p>
        </div>
      </motion.section>
    );
  }
  return (
    <motion.section id="contact" className="contact-section" initial="hidden" animate="visible" variants={fadeSlide} style={{ marginTop: '0' }}>
      <div className="contact-card">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.2rem' }}>
          <FaEnvelope size={38} color="#a78bfa" style={{ marginBottom: '0.5rem' }} />
          <h2 className="contact-title" style={{ marginBottom: '0.2rem' }}>Contact</h2>
          <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg,#a78bfa,#7c3aed)', borderRadius: 2, margin: '0.7rem 0 1.2rem 0' }} />
        </div>
        <p className="contact-desc">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
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
          <textarea id="message" name="message" rows="5" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" className="contact-submit" disabled={state.submitting}>Submit</button>
        </form>
      </div>
    </motion.section>
  );
}

// Animation variant for fade and slide effect
const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// Card animation for projects
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hover: { scale: 1.03 }
};

// Example tech stack data
const techStack = [
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#2965f1" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
];

// Real GitHub projects data
const projects = [
  {
    title: 'Kobe Bryant Career Visualization App',
    description: `• Built a serverless analytics dashboard with AWS Lambda, API Gateway, and DynamoDB to surface season-wise stats for Kobe Bryant.\n• Integrated Bokeh and Plotly visualizations so users can explore trends and comparisons in real time.\n• Automated Python and Pandas pipelines that prepare and load datasets into DynamoDB, cutting data processing time by 40%.`,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
    tech: [<FaPython color="#3776AB" />, <SiAmazonwebservices color="#ff9900" />, <SiPlotly color="#42a5f5" />],
    live: '',
    github: 'https://github.com/ramkumar122/kobe-bryant-career-visualization-app',
  },
  {
    title: 'Blood Bank Management System',
    description: `• Delivered a full-stack platform for donor management and inventory tracking with Spring Boot REST APIs and React dashboards.\n• Optimized MySQL schemas with indexing for fast queries across large datasets and real-time hospital inventory updates.\n• Added Spring Security role-based access and Jenkins/Docker CI/CD pipelines to ship secure, zero-downtime releases.`,
    image: 'https://media.gettyimages.com/id/99310904/photo/donated-blood.jpg?s=612x612&w=gi&k=20&c=cI2h-Opj9O0gZCUa4jxz2pNBldoQYPExR2mJRm5NbGE=',
    tech: [<SiSpringboot color="#6db33f" />, <FaReact color="#61dafb" />, <SiMysql color="#00618a" />, <SiDocker color="#2496ed" />],
    live: '',
    github: 'https://github.com/ramkumar122/blood-bank',
  },
  {
    title: 'Fingerprint Voting System',
    description: `• Engineered biometric authentication using OpenCV and SIFT to reduce false-positive voter matches by 92%.\n• Built RESTful Flask services for voter registration, vote casting, and encrypted tallying backed by MySQL.\n• Produced real-time election dashboards with Flask-Bokeh integration to track participation and results securely.`,
    image: 'https://s39569.pcdn.co/wp-content/uploads/2023/07/digital-fingerprint-on-black-screen.jpg',
    tech: [<SiFlask color="#ffffff" />, <SiOpencv color="#5c6bc0" />, <SiMysql color="#00618a" />, <FaPython color="#3776AB" />],
    live: '',
    github: 'https://github.com/ramkumar122/fingerprint-voting-system',
  },
  {
    title: 'Secure Task Management System',
    description: `• Developed Spring Boot APIs for task creation, assignment, and tracking to streamline team workflows.\n• Implemented JWT-backed role-based permissions to mitigate OWASP Top 10 risks and enforce secure access control.\n• Deployed the platform on AWS with Dockerized CI/CD pipelines via Jenkins for automated, reliable releases.`,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    tech: [<SiSpringboot color="#6db33f" />, <SiAmazonwebservices color="#ff9900" />, <SiDocker color="#2496ed" />, <SiJenkins color="#d33833" />],
    live: '',
    github: 'https://github.com/ramkumar122/SecureTaskManagementSystem',
  },
];

// Example testimonials data
const testimonials = [
  {
    quote: 'Alex delivered a fantastic website, on time and beyond expectations!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jane Doe',
    title: 'Product Manager, Acme Inc.'
  },
  {
    quote: 'Great communication and technical skills. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    title: 'CTO, BetaTech'
  }
];

// Example experience data
const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'May 2025 - Aug 2025',
    description: `• Created reusable AWS CDK constructs for IAM Roles Anywhere, adding smart defaults and automating policies to cut certificate onboarding time by 30%.\n• Streamlined cross-region certificate workflows with Lambda, EventBridge, and S3, enabling secure certificate delivery to AWS GovCloud and reducing manual configuration by 45%.\n• Built Lambda-based certificate rotation with EventBridge triggers that maintained continuous trust for external workloads and prevented downtime during renewals.\n• Standardized trust anchor provisioning through CloudFormation, rolling out templated IaC deployments that eliminated configuration drift across regions.\n• Designed and implemented end-to-end integration tests with Jest and Pytest to validate Lambda and API Gateway integrations, minimizing post-release issues.\n• Partnered with security engineers to introduce certificate-based authentication for internal services, raising compliance posture by 25% without sacrificing developer velocity.`
  },
  {
    role: 'UI/UX Event Coordinator',
    company: 'Anil Neerukonda Institute of Technology and Sciences',
    period: 'Aug 2021 - May 2022',
    description: `• Led front-end workshops for 150+ students on HTML, CSS, and JavaScript, boosting practical coding accuracy by 35%.\n• Guided participants through UX design critiques and interactive challenges that improved interface quality scores by 25%.\n• Reviewed student UI/UX submissions with peer rubrics, mentoring teams on responsive patterns and layout optimization.\n• Streamlined session logistics and documentation to enhance engagement and reduce delays in workshop kickoff.\n• Curated hands-on learning labs covering accessibility best practices, raising project compliance with WCAG guidelines.\n• Coordinated cross-team hackathons focused on collaborative problem solving, increasing project evaluation scores by 28%.`
  }
];

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    const targetSection = location.state?.scrollTo;
    if (!targetSection) {
      return;
    }

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const retryElement = document.getElementById(targetSection);
      if (retryElement) {
        retryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="portfolio-root">
      {/* Home Section (Redesigned Hero) */}
      <motion.section id="home" className="home-section" initial="hidden" animate="visible" variants={fadeSlide}>
        <div className="home-center">
          {/* No photo for minimal hero, as requested */}
          <motion.h1 
            className="home-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ramkumar Meenavalli
          </motion.h1>
          <motion.p 
            className="home-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Software Developer &amp; IT Graduate
          </motion.p>
      <motion.div className="home-socials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
        <a href="mailto:rammeenavalli1@gmail.com" className="home-social-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/ram-meenavalli-671173222/" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaLinkedin /></a>
        <a href="https://github.com/ramkumar122?tab=repositories" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaGithub /></a>
      </motion.div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a
              href="https://drive.google.com/file/d/1OucRE5pr_aa2OR4NjEo9vaIajNvjqmrY/view?usp=sharing"
              className="home-cta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Resume <FaExternalLinkAlt />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* About + Skills Section - benscott.dev inspired */}
      <section id="about" className="about-skills-section">
        <div className="about-skills-container">
          <motion.div className="about-col" initial="hidden" animate="visible" variants={fadeSlide}>
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
              Results-driven Software Engineer with expertise in designing, developing, and deploying scalable applications using Java, Python, TypeScript, Spring Boot, Node.js, Flask, and FastAPI. Skilled in microservices, REST APIs, cloud-native architecture, AWS services (Lambda, S3, API Gateway, EventBridge, IAM, CloudFormation, RDS), and Infrastructure as Code (CDK, Terraform). Experienced in full-stack development with React.js, Redux, Next.js, secure role-based systems, and cross-functional team delivery, delivering high-performance, production-ready solutions.
            </motion.p>
          </motion.div>
          <motion.div className="skills-col" initial="hidden" animate="visible" variants={fadeSlide}>
            <div className="skills-list-verticalgrid-3cols">
              {/* 3 columns, 4 skills per column */}
              {[
                [
                  { name: 'Python', icon: <FaPython color="#3776AB" size={28} /> },
                  { name: 'TensorFlow', icon: <SiTensorflow color="#ff6f00" size={28} /> },
                  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={28} /> },
                  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" size={28} /> },
                ],
                [
                  { name: 'Java', icon: <FaJava color="#f89820" size={28} /> },
                  { name: 'Matplotlib', icon: <SiPlotly color="#11557c" size={28} /> },
                  { name: 'Bokeh', icon: <FaPalette color="#e76f51" size={28} /> },
                  { name: 'CSS3', icon: <FaCss3Alt color="#2965f1" size={28} /> },
                ],
                [
                  { name: 'SQL', icon: <SiMysql color="#00618a" size={28} /> },
                  { name: 'Seaborn', icon: <SiPandas color="#43b7ba" size={28} /> },
                  { name: 'AWS', icon: <SiAmazonwebservices color="#ff9900" size={28} /> },
                  { name: 'React', icon: <FaReact color="#61dafb" size={28} /> },
                ],
              ].map((col, colIdx) => (
                <div className="skills-list-col" key={colIdx}>
                  {col.map((tech, i) => (
                    <motion.div
                      className="skills__item"
                      key={tech.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (colIdx * 4 + i) * 0.08, duration: 0.6 }}
                    >
                      <span className="skills__icon">{tech.icon}</span>
                      <span className="skills__label">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section" style={{ marginTop: '0.5rem' }}>
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
              <p className="experience-description" style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" style={{ marginTop: '1rem' }}>
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>
        <div className="projects-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
              style={{
                background: '#181836',
                borderRadius: '8px',
                padding: '1rem',
                width: '280px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <img src={project.image} alt={project.title} style={{ borderRadius: '6px', width: '100%', height: '160px', objectFit: 'cover', marginBottom: '0.8rem' }} />
              <h3 style={{ color: '#a78bfa', marginBottom: '0.4rem' }}>{project.title}</h3>
              <p style={{ color: '#ddd', flexGrow: 1, whiteSpace: 'pre-line' }}>{project.description}</p>
              <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((icon, i) => (
                  <span key={i} style={{ fontSize: '1.2rem', color: '#a78bfa' }}>{icon}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.8rem', color: '#7c3aed', fontWeight: 'bold', textDecoration: 'none' }}>
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <motion.section id="approach" className="approach-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeSlide}>
        <h2 className="approach-title">My Approach</h2>
        <div className="approach-list">
          <div className="approach-card">
            <div className="approach-step">1</div>
            <h4 className="approach-step-title">Planning</h4>
            <p className="approach-step-desc">Understand client needs, define goals, and create a clear roadmap for success.</p>
          </div>
          <div className="approach-card">
            <div className="approach-step">2</div>
            <h4 className="approach-step-title">Development</h4>
            <p className="approach-step-desc">Build robust, scalable, and maintainable solutions using modern technologies.</p>
          </div>
          <div className="approach-card">
            <div className="approach-step">3</div>
            <h4 className="approach-step-title">Launch</h4>
            <p className="approach-step-desc">Deploy, monitor, and support the product for a seamless user experience.</p>
          </div>
        </div>
      </motion.section>

  {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-socials">
        </div>
        <div className="footer-copy"></div>
      </footer>
    </div>
  );
};

export default Home;
