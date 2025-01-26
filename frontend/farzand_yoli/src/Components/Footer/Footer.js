import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-text">
          &copy; 2025 Farzand Yoli. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
