// CardComponent.js
import React from "react";

import "../RecentNews/RecentNews.css"; // Import the CSS file
import image01 from "../Images/image01.jpg";
import image02 from "../Images/image02.jpg";
import image03 from "../Images/image03.jpg";
import image04 from "../Images/image04.jpg";
import image05 from "../Images/image05.jpg";
import image06 from "../Images/image06.jpg";
import NavbarComp from "../Components/NavbarComp";
import Footer from "../Components/footer";
const Recentnews = () => {
  return (
    <div>
    <NavbarComp/>
      <div className="news-banner">
        <h2>Recent News</h2>
      </div>
      <div className="news-card-container">
        <div className="news-card" style={{ backgroundImage: `url(${image01})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image02})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image03})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image04})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image05})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image06})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
      
    </div>
  );
};
export default Recentnews;