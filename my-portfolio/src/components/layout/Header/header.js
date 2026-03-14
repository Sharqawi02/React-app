import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="Nav-container">
        <div className="Content">
          
          {/* Logo */}
          <div className="logo">
            <h1>Amjad Sharqawi</h1>
          </div>

          {/* Hamburger / Close icon (show/hide on mobile via CSS) */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {/* Question mark is like if-statment and when the (:) is there it means else  */}
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>


          <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
            

            <div className="nav-menu-container">
              {/* Nav links  */}
              <ul>
                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              </ul>

              {/* Social icons */}
              <div className="icon-links">
                <a href="mailto:amjadsharqawi20@gmail.com"><MdEmail size={20} /></a>
                <a href="https://www.linkedin.com/in/amjad-sharqawi-5206031b7/"><FaLinkedin size={20} /></a>
                <a href="https://github.com/Sharqawi02"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
