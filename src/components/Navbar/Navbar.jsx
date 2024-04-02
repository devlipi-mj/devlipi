import React, { useState } from 'react';
import './Navbar.css';
import MobileNavbar from './MobileNavbar/MobileNavbar';

const Navbar = () => {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setMenuOpen(false);
    }
  };

  return (
    <>
    <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={require("../../assets/main-logo.png")} style={{width:"2rem", height:"auto"}} alt="" />
      
          <ul className={`menu-items ${openMenu ? 'open' : ''}`}>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('hero')}>Home</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('examples')}>Examples</a>
            </li>
            {/* <li>
              <a className="menu-item" onClick={() => scrollToSection('tryit')}>Try It</a>
            </li> */}
            <li>
              <a className="menu-item" onClick={() => scrollToSection('contact')}>Contact Me</a>
            </li>
            <button className="download-btn" onClick={() => scrollToSection('download')}>Download</button>
          </ul>
          <button
            className={`menu-btn ${openMenu ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;