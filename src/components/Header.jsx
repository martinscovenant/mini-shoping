// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { FaBars,  } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">MyLogo</div>
        <div className="search-bar">
          {/* <FaSearch className="search-icon" /> */}
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
      <div className="right-section">
        {/* Use Link instead of anchor tag */}
        <Link to="/signup" className="signup-btn">Signup</Link>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
