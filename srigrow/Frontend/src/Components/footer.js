import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import '../Containers/Style.css';
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
                <li><a href="https://doa.gov.lk/spmdc-salescenter-e/" class="footer-link">Sales Centers</a></li>
                <li><a href="https://doa.gov.lk/map-gallery/" class="footer-link">Map Gallery</a></li>
                <li><a href="https://doa.gov.lk/crops/" class="footer-link">Crops</a></li>
                <li><a href="https://doa.gov.lk/procurement/" class="footer-link">Procurement Notices</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <h4>Contact Us</h4>
                <br></br>
                    <p> < FontAwesomeIcon icon="fa-regular fa-envelope" /> info@agrimin.gov.lk</p><br></br>
                    <p> <IoLocationOutline /> 80/5,"Govijana Mandiraya",<br/>Rajamalwatta Lane,<br/>Battaramulla, Sri Lanka,</p><br></br>
                    <p> <IoCallOutline /> +94 71 52 333 944</p>
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