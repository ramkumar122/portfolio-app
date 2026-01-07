import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          retryElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionIds = ['home', 'about', 'experience', 'projects', 'contact'];
    const offset = 200;
    let ticking = false;

    const updateActive = () => {
      let current = 'home';
      const scrollPos = window.scrollY + offset;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }
        if (element.offsetTop <= scrollPos) {
          current = id;
        }
      });

      if (window.scrollY < 120) {
        current = 'home';
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isExperience = location.pathname === '/experience';
  const isProjects = location.pathname === '/projects';
  const isConnect = location.pathname === '/connect';

  const activeKey = isHome
    ? activeSection
    : isAbout
      ? 'about'
      : isExperience
        ? 'experience'
        : isProjects
          ? 'projects'
          : isConnect
            ? 'contact'
            : 'home';

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${activeKey === 'home' ? 'active' : ''}`}>
          <Link
            to="/"
            className="navbar-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </Link>
        </li>
        <li className={`navbar-item ${activeKey === 'about' ? 'active' : ''}`}>
          <button
            onClick={() => scrollToSection('about')}
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            About
          </button>
        </li>
        <li className={`navbar-item ${activeKey === 'experience' ? 'active' : ''}`}>
          <button
            onClick={() => scrollToSection('experience')}
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Experience
          </button>
        </li>
        <li className={`navbar-item ${activeKey === 'projects' ? 'active' : ''}`}>
          <button
            onClick={() => scrollToSection('projects')}
            className="navbar-link navbar-button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Projects
          </button>
        </li>
        <li className={`navbar-item ${activeKey === 'contact' ? 'active' : ''}`}>
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
