import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import About from './AboutUs';
import Contact from './ContactUs';

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
