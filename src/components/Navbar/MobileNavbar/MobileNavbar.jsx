import React, { useState } from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({isOpen, toggleMenu}) => {
    const [openMenu, setMenuOpen] = useState(false);

    const toggle = () => {
        setMenuOpen(!openMenu);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'end' });
            toggleMenu(); 
            setMenuOpen(false);
        }
    };

  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggle}
        >
            <div className="mobile-menu-container">
                <img className="logo" src={require("../../../assets/main-logo.png")} style={{width:"2rem", height:"auto"}} alt="" />

                <ul>
                    <li>
                        <a className="menu-item" onClick={() => scrollToSection('hero')} href="#hero">Home</a>
                    </li>
                    <li>
                    <a className="menu-item" onClick={() => scrollToSection('examples')} href="#examples">Examples</a>
                    </li>
                    <li>
                    <a className="menu-item" onClick={() => scrollToSection('contact')} href="#contact-me">Contact Me</a>
                    </li>
                    <button className="download-btn" onClick={() => scrollToSection('download')}>Download</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNavbar;