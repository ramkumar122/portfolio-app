
import '../styles/main.css';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaQuoteLeft, FaEnvelope, FaLinkedin, FaReact, FaJs, FaCss3Alt, FaHtml5, FaCloud } from 'react-icons/fa';

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
    title: 'educonnect-app',
    description: 'A web application for educational connectivity and collaboration.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    tech: [<FaJs />],
    live: '',
    github: 'https://github.com/ramkumar122/educonnect-app',
  },
  {
    title: 'fingerprint-voting-system',
    description: 'A Python-based fingerprint voting system for secure elections.',
    image: 'https://s39569.pcdn.co/wp-content/uploads/2023/07/digital-fingerprint-on-black-screen.jpg',
    tech: [<FaJs />],
    live: '',
    github: 'https://github.com/ramkumar122/fingerprint-voting-system',
  },
  {
    title: 'my-s3-upload-project',
    description: 'A project for uploading files to AWS S3 using HCL.',
    image: 'https://meta-l.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1684313559418x123725927220291300/aws-s3-logo.png',
    tech: [<FaCloud />],
    live: '',
    github: 'https://github.com/ramkumar122/my-s3-upload-project',
  },
  {
    title: '2048-game',
    description: 'Its a web 2048 game.',
    image: 'https://m.media-amazon.com/images/I/41RCIHMHFDL.png',
    tech: [<FaJs />],
    live: '',
    github: 'https://github.com/ramkumar122/2048-game',
  },
  {
    title: 'blood-bank',
    description: 'A blood bank management system.',
    image: 'https://media.gettyimages.com/id/99310904/photo/donated-blood.jpg?s=612x612&w=gi&k=20&c=cI2h-Opj9O0gZCUa4jxz2pNBldoQYPExR2mJRm5NbGE=',
    tech: [<FaJs />],
    live: '',
    github: 'https://github.com/ramkumar122/blood-bank',
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
    period: 'May 2023 - Aug 2023',
    description: `• Designed and implemented AWS CDK constructs for scalable infrastructure automation.
• Automated certificate rotation processes to enhance system security.
• Developed monitoring and alerting solutions to improve operational reliability.
• Collaborated with cross-functional teams to deliver high-impact features on time.`
  },
  {
    role: 'UI/UX Coordinator',
    company: 'Arizona State University',
    period: '2024 - 2025',
    description: `• Coordinated UI/UX design efforts for student projects.
• Led design sprints and workshops to foster innovation.
• Conducted user research and usability testing to improve product designs.`
  }
];

const Home = () => {
  const [activeSection, setActiveSection] = React.useState(null);

  React.useEffect(() => {
    if (activeSection) {
      const element = document.getElementById(activeSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

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
        <a href="mailto:rammeenavalli0@gmail.com" className="home-social-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/pavan-meenavalli-671173222/" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaLinkedin /></a>
        <a href="https://github.com/ramkumar122?tab=repositories" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaGithub /></a>
      </motion.div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a
              href="https://docs.google.com/document/d/140VmKZvCmVAlrEEah1YNtMGDFcH7R-tt/edit?usp=sharing&ouid=116272931770246451848&rtpof=true&sd=true"
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
              I am a results-driven software developer and IT graduate student at Arizona State University, passionate about building impactful digital solutions. My experience as an SDE Intern at Amazon includes designing AWS CDK constructs, automating certificate rotation, and enhancing system security. I have a strong foundation in Python, Java, SQL, and TypeScript, and enjoy leveraging machine learning and data visualization to solve real-world problems. I thrive in collaborative environments, value creative problem-solving, and am committed to continuous learning and innovation.
            </motion.p>
          </motion.div>
          <motion.div className="skills-col" initial="hidden" animate="visible" variants={fadeSlide}>
            <div className="skills-list-verticalgrid-3cols">
              {/* 3 columns, 4 skills per column */}
              {[
                [
                  { name: 'Python', icon: <FaJs color="#3776AB" size={28} /> },
                  { name: 'TensorFlow', icon: <FaJs color="#ff6f00" size={28} /> },
                  { name: 'TypeScript', icon: <FaJs color="#3178c6" size={28} /> },
                  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" size={28} /> },
                ],
                [
                  { name: 'Java', icon: <FaJs color="#f89820" size={28} /> },
                  { name: 'Matplotlib', icon: <FaJs color="#11557c" size={28} /> },
                  { name: 'Bokeh', icon: <FaJs color="#e76f51" size={28} /> },
                  { name: 'CSS3', icon: <FaCss3Alt color="#2965f1" size={28} /> },
                ],
                [
                  { name: 'SQL', icon: <FaJs color="#00618a" size={28} /> },
                  { name: 'Seaborn', icon: <FaJs color="#43b7ba" size={28} /> },
                  { name: 'AWS', icon: <FaCloud color="#ff9900" size={28} /> },
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
              <p style={{ color: '#ddd', flexGrow: 1 }}>{project.description}</p>
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