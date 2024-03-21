// CardComponent.js
import React from "react";
import "./CardComponent.css"; // Import the CSS file
import image01 from "../component/navbar/images/image01.jpg";
import image02 from "../component/navbar/images/image02.jpg";
import image03 from "../component/navbar/images/image03.jpg";
import image04 from "../component/navbar/images/image04.jpg";
import image05 from "../component/navbar/images/image05.jpg";
import image06 from "../component/navbar/images/image06.jpg";
const CardComponent = () => {
  return (
    <div>
      <div className="news-banner">
        <h2>Recent News</h2>
      </div>
      <div className="card-container">
        <div className="card" style={{ backgroundImage: `url(${image01})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${image02})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${image03})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${image04})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${image05})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: `url(${image06})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;