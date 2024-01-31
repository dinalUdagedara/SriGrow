import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-content">
            <div className="footer-left">
                <h4>About us</h4><br></br>
                <span className="parah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.</span>

            </div>
            <div className="footer-center">
            <h4>Quick links</h4>
            <br></br>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footer-right">
                <h4>Contact Us</h4>
                <br></br>
                    <p> < FontAwesomeIcon icon="fa-regular fa-envelope" /> hello@website.com</p><br></br>
                    <p> <IoLocationOutline />IIT</p><br></br>
                    <p> <IoCallOutline /> +94 71</p>
            </div>
            <div className="footer-icons">
                <h4>Follow Us</h4>
                <br></br>
                <div className="social-media">
                <FaSquareTwitter />
                <FaSquareInstagram />
                <FaFacebookSquare />
                <FaSquareYoutube />
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;