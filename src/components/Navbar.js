import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
          <li className={`navbar-item`}>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className={`navbar-item`}>
            <Link to="/experience" className="navbar-link">Experience</Link>
          </li>
          <li className={`navbar-item`}>
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
          <li className={`navbar-item`}>
            <Link to="/contact" className="navbar-link">Connect</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
