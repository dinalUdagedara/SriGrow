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
import PopupWindow from "../Components/PopupWindow";
import axios from "axios";

const Recentnews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModallink, setisModallink] = useState(false);
  const [modalContent, setModalContent] = useState(""); // State to hold modal content
  const [link,setLink] = useState('');

  const openModal = (content) => {
    setModalContent(content); // Set modal content
    setIsModalOpen(true);
  };
  const modelLink = (link)=>{
    setLink(link);
    setisModallink(true);
  }

  const [NewsItems, setNewsItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/getNews")
      .then((response) => {
        console.log(response.data);
        setNewsItems(response.data);
      })
      .catch((err) => console.log("Error fetching News: ", err));
  }, []);

  // Define an array of news items
  const imageArray = [
    { image: image01 },
    { image: image02 },
    { image: image03 },
    { image: image04 },
    { image: image05 },
    { image: image06 },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavbarComp />

      <div className="news-banner">
        <h2>Recent News</h2>
      </div>

      <div className="news-card-container">
        {/* Map over the newsItems array and render news-card components */}
        {NewsItems.map((item, index) => (
          <div
            key={index}
            className="news-card"
            style={{
              backgroundImage: `url(${
                imageArray[index % imageArray.length].image
              })`,
            }}
          >
            <div className="card-date">{item.date}</div>
            <div className="card-info">
              <p>{item.headLine}</p>
              {/* Pass item.content to openModal */}
              <button
                className="button"
                onClick={() => openModal(item.content)}
                onClickCapture={()=>modelLink(item.link)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
        {/* Render PopupWindow with isOpen and onClose props */}
        <PopupWindow
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
          link = {link} 
           // Pass modal content as prop
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Recentnews;
