
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Component } from "react";
import { FaBars } from "react-icons/fa";
import '../Containers/MainPage.css';


const NavbarComp=()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ... existing code for navbar-left and navbar-right

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
    return(
      <nav className="navbar">
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
          <Link to="/crop-guide" className="navbar-link">Crop Guide</Link>
          <span className="separator"> | </span>
          <Link to="/pests-disease-alerts" className="navbar-link">Pests & Disease Alerts</Link>
          <span className="separator"> | </span>
          <Link to="/market-price" className="navbar-link">Market Price</Link>
          <span className="separator"> | </span>
          <Link to="/about-us" className="navbar-link">About Us</Link>
          </div>
        <div className="navbar-right">
          <button className="login-button">Login</button>
          <div id="icon" className="mobile-menu-icon" onClick={handleMenuClick}>
            <FaBars />
          </div>
        </div>
        
      </div>
      <div className="mobile-navbar" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
          <Link to="/" className="navbar-link">Home </Link>
          <Link to="/weather" className="navbar-link">Weather Prediction</Link>
          <Link to="/crop-guide" className="navbar-link">Crop Guide</Link>
          <Link to="/pests-disease-alerts" className="navbar-link">Pests & Disease Alerts</Link>
          <Link to="/market-price" className="navbar-link">Market Price</Link>
          <Link to="/about-us" className="navbar-link">About Us</Link>
      </div>
    </nav>
    
  );
}
export default NavbarComp;