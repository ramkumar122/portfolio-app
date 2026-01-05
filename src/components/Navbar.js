import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

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

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link
            to="/"
            className="navbar-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </Link>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => scrollToSection('about')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            About
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Experience
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Projects
          </button>
        </li>
        <li className={`navbar-item`}>
          <button 
            onClick={() => scrollToSection('contact')} 
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
