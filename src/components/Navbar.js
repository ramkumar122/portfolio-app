import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/portfolio-app/')) {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="topbar">
      <div className="topbar-socials">
        <a
          href="https://www.linkedin.com/in/ram-meenavalli-671173222/"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-social-link"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ramkumar122?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-social-link"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rammeenavalli0@gmail.com"
          className="topbar-social-link"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <button className="topbar-contact" onClick={scrollToContact}>
        <FaEnvelope size={13} />
        GET IN TOUCH
      </button>
    </nav>
  );
};

export default Navbar;
