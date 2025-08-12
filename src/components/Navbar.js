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
          <a href="#home" className="navbar-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'});}}>Home</a>
        </li>
          <li className={`navbar-item`}>
            <a href="#about" className="navbar-link" onClick={(e) => {handleScroll(e, 'about'); setTimeout(() => window.dispatchEvent(new Event('scroll')), 300);}}>About</a>
          </li>
          <li className={`navbar-item`}>
            <a href="#experience" className="navbar-link" onClick={(e) => {handleScroll(e, 'experience'); setTimeout(() => window.dispatchEvent(new Event('scroll')), 300);}}>Experience</a>
          </li>
          <li className={`navbar-item`}>
            <a href="#projects" className="navbar-link" onClick={(e) => {handleScroll(e, 'projects'); setTimeout(() => window.dispatchEvent(new Event('scroll')), 300);}}>Projects</a>
          </li>
          <li className={`navbar-item`}>
            <a href="#contact" className="navbar-link" onClick={(e) => {handleScroll(e, 'contact'); setTimeout(() => window.dispatchEvent(new Event('scroll')), 300);}}>Connect</a>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
