import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Connect from './pages/Connect';
import './styles/main.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><About /></motion.div>} />
        <Route path="/connect" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><Connect /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function HomeButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button className="home-btn" onClick={handleClick} title="Back to top">
      <FaHome />
    </button>
  );
}

function App() {
  return (
    <Router basename="/portfolio-app">
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <HomeButton />
      </div>
    </Router>
  );
}

export default App;
