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


  
  
  
  // return (

  //   <div>
  //     <NavbarComp/>
  //     <div className="news-banner">
  //       <h2>Market Place</h2>
  //     </div>
  //     {/* Map through provinces and render cards */}
  //     <div className="mp-heading">
  //       <h2>Southern Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsColombo.map((item, index) => (
  //         <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />

  //       ))}
  //     </div>



  //     <div className="mp-heading">
  //       <h2>Eastern Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsEastern.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     <div className="mp-heading">
  //       <h2>North Central Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsNorthCentral.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     <div className="mp-heading">
  //       <h2>North Western Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsNorthWestern.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     <div className="mp-heading">
  //       <h2>Sabaragamuwa Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsSabaragamuwa.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     <div className="mp-heading">
  //       <h2>Uva Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsUva.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     <div className="mp-heading">
  //       <h2>Central Province</h2>
  //     </div>
  //     <div className="mp-card-container">
  //       {marketItemsCentral.map((item, index) => (
  //          <MarketCard key={index} imageSrc={item.image} productName={item.productName} price={item.price} />
  //       ))}
  //     </div>

  //     {/* Render other provinces similarly */}
  //     <Footer/>
  //   </div>
    







    // <div>
    //   <NavbarComp/>
    //   <div className="news-banner">
    //     <h2>Market Place</h2>
    //   </div>
    //   <div className="mp-heading">
    //     <h2>Southern Province</h2>
    //   </div>
    //   <div className="mp-card-container">
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={sourthern1} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={sourthern2} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={sourthern3} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={sourthern4} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={sourthern5} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mp-heading">
    //     <h2>Western Province</h2>
    //   </div>
    //   <div className="mp-card-container">
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image1} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image2} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image3} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image4} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image5} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mp-heading">
    //     <h2>Western Province</h2>
    //   </div>
    //   <div className="mp-card-container">
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image1} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image2} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image3} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image4} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image5} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mp-heading">
    //     <h2>Western Province</h2>
    //   </div>
    //   <div className="mp-card-container">
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image1} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image2} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image3} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image4} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh and vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //     <div className="marketplace-card">
    //       <img className='cardimage' src={image5} alt="alternatetext"></img>
    //       <div className="mp-card-info">
    //         <p> fresh  vegetables</p>
    //         <p> price</p>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer/>
    // </div>

export default MarketPlace;