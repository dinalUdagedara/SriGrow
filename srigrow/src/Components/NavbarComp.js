
import React from 'react';
import {Link} from "react-router-dom";
import '../Style.css';
import { Component } from "react";


const NavbarComp=()=> {
  
    return(
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            Your Logo
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
        </div>
      </div>
    </nav>
  );
}
export default NavbarComp;