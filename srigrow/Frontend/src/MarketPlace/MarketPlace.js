import React, { useState, useEffect } from 'react';
import '../MarketPlace/MarketPlace.css'; //import the css file
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import sourthern1 from '../Images/sourthern1.jpg';
import sourthern2 from '../Images/sourthern2.jpg';
import sourthern3 from '../Images/sourthern3.jpg';
import sourthern4 from '../Images/sourthern4.jpg';
import sourthern5 from '../Images/sourthern4.jpg';
import NavbarComp from '../Components/NavbarComp';
import Footer from '../Components/footer';
import MarketCard from '../Components/MarketCard';

import axios from 'axios';


const MarketPlace = () => {

  const [marketItems, setMarketItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/getMarketItems')
    .then(response => {
      console.log("Market Info",response.data)
      setMarketItems(response.data);
      
  })
  .catch(err=>console.log('Error fetching MarketInfo: ',err))
 }, []);

 
  return (
    <div>
      <NavbarComp />
      <div className="news-banner">
        <h2>Market Place</h2>
      </div>
      {/* Map through provinces and render cards */}
      {marketItems.map((item, index) => (
        <div key={index}>
          <div className="mp-heading">
            <h2>{item.location}</h2>
          </div>
          <div className="mp-card-container">
            {item.crop_details.map((crop, cropIndex) => (
              <MarketCard
                key={cropIndex}
                productName={crop.crop_name}
                previousPrice={crop.previous_week_price}
                lastWeekPrice={crop.last_week_price}
                thisWeeksPrice={crop.this_week_price}
                imageSrc={crop.image_type} 
              />
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}


  
export default MarketPlace;