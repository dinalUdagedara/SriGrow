// CardComponent.js
import React, { useState, useEffect } from "react";

import "../RecentNews/RecentNews.css"; // Import the CSS file
import image01 from "../Images/image01.jpg";
import image02 from "../Images/image02.jpg";
import image03 from "../Images/image03.jpg";
import image04 from "../Images/image04.jpg";
import image05 from "../Images/image05.jpg";
import image06 from "../Images/image06.jpg";
import NavbarComp from "../Components/NavbarComp";
import Footer from "../Components/footer";
import { faL } from "@fortawesome/free-solid-svg-icons";
import PopupWindow from "../Components/PopupWindow";
import axios from "axios";
const Recentnews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

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


  const closeModal = () => {
    setIsModalOpen(false);
  };
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
            <button className="button" onClick={openModal}>Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image02})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button" onClick={openModal}>Read More</button>
          </div>
        </div>
        <PopupWindow isOpen={isModalOpen} onClose={closeModal}/>
        <div className="news-card" style={{ backgroundImage: `url(${image03})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button" onClick={openModal}>Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image04})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button" onClick={openModal}>Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image05})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button" onClick={openModal}>Read More</button>
          </div>
        </div>
        <div className="news-card" style={{ backgroundImage: `url(${image06})` }}>
          <div className="card-date">OCT 17</div>
          <div className="card-info">
            <p>Upcountry Vegetable Prices Expected to Drop</p>
            <button className="button" onClick={openModal}>Read More</button>
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