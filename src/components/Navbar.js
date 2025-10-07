import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found, wait a bit and try again
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          retryElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <button 
            onClick={() => handleNavClick('home')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Home
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => handleNavClick('about')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            About
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => handleNavClick('experience')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Experience
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => handleNavClick('projects')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Projects
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Connect
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
