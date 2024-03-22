// Recentnews.js

import React, { useState, useEffect } from "react";
import axios from 'axios';
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

  const [NewsItems, setNewsItems] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/getNews')
    .then(response => {
      console.log(response.data)
      setNewsItems(response.data);
 
    })
    .catch(err=>console.log('Error fetching News: ',err))
  },[])



  //SAving NEWS
  // const saveNewsItem = (newsItem) => {
  //   axios.post('http://localhost:5000/addNews', newsItem)
  //     .then(response => {
  //       console.log(response.data);
  //       // Optionally update state or show a success message
  //     })
  //     .catch(err => console.error('Error saving news item:', err));
  // };



  // Define an array of news items
  const imageArray = [
    { image: image01},
    { image: image02},
    { image: image03},
    { image: image04},
    { image: image05},
    { image: image06}
  ];

  return (
    <div>
      <NavbarComp />
      <div className="news-banner">
        <h2>Recent News</h2>
      </div>
      <div className="news-card-container">
        {/* Map over the newsItems array and render news-card components */}
        {NewsItems.map((item, index) => (
      
          <div key={index} className="news-card" style={{ backgroundImage: `url(${imageArray[index % imageArray.length].image})`  }}>
            <div className="card-date">{item.date}</div>
            <div className="card-info">
              <p>{item.headLine}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Recentnews;
