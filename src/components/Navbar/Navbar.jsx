import React, { useState } from 'react';
import './Navbar.css';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';

export const Navbar = () => {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
  };

  return (
    <>
    <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={require("../../assets/main-logo.png")} style={{width:"2rem", height:"auto"}} alt="" />
      
          <ul className={`menu-items ${openMenu ? 'open' : ''}`}>
            <li>
              <a className="menu-item" href="#home">Home</a>
            </li>
            <li>
              <a className="menu-item" href="#examples">Examples</a>
            </li>
            <li>
              <a className="menu-item" href="#try-it">Try It</a>
            </li>
            <li>
              <a className="menu-item" href="#contact-me">Contact Me</a>
            </li>
            <button className="download-btn" onClick={() => {}}>Download</button>
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