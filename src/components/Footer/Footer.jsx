// Footer.js

import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
        <div className="container">
            <p>&copy; {currentYear} Devlipi. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
