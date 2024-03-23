
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Component } from "react";
import { FaBars } from "react-icons/fa";
import '../Containers/Style.css';


const NavbarComp=()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ... existing code for navbar-left and navbar-right

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
    return(
      <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            SriGrow
          </Link>
          </div>
          <div className='navbar-center'>
          <Link to="/" className="navbar-link">Home </Link> 
          <span className="separator"> | </span>
          <Link to="/weather" className="navbar-link">Weather Prediction</Link>
          <span className="separator"> | </span>
          <Link to="/cropguidance" className="navbar-link">Crop Guide</Link>
          <span className="separator"> | </span>
          <Link to="/recentnews" className="navbar-link">Pests & Disease Alerts</Link>
          <span className="separator"> | </span>
          <Link to="/marketplace" className="navbar-link">Market Place</Link>
          <span className="separator"> | </span>
          <Link to="/about-us" className="navbar-link">About Us</Link>
          </div>
        <div className="navbar-right">
          <Link to="/sign-in" className="login-button">Sign-in</Link>
          <div id="icon" className="mobile-menu-icon" onClick={handleMenuClick}>
            <FaBars />
          </div>
        </div>
        
      </div>
      <div className="mobile-navbar" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
          <Link to="/" className="navbar-link">Home </Link>
          <Link to="/weather" className="navbar-link">Weather Prediction</Link>
          <Link to="/cropguidance" className="navbar-link">Crop Guide</Link>
          <Link to="/recentnews" className="navbar-link">Recent </Link>
          <Link to="/marketplace" className="navbar-link">Market Place</Link>
          <Link to="/about-us" className="navbar-link">About Us</Link>
      </div>
    </div>
    
  );
}
export default NavbarComp;