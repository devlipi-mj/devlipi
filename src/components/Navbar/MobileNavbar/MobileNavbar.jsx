import React from 'react'
import './MobileNavbar.css'

const MobileNavbar = ({isOpen, toggleMenu}) => {
  
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img className="logo" src={require("../../../assets/main-logo.png")} style={{width:"2rem", height:"auto"}} alt="" />

                <ul>
                    <li>
                        <a className="menu-item" href="#home">Home</a>
                    </li>
                    <li>
                    <a className="menu-item" href="#examples">Examples</a>
                    </li>
                    {/* <li>
                    <a className="menu-item" href="#try-it">Try It</a>
                    </li> */}
                    <li>
                    <a className="menu-item" href="#contact-me">Contact Me</a>
                    </li>
                    <button className="download-btn" onClick={() => {}}>Download</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNavbar;