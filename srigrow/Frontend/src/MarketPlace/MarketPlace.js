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
    axios.get('http://localhost:5000/getMarketItems')
    .then(response => {
      console.log("Market Info",response.data)
      setMarketItems(response.data);
      
  })
  .catch(err=>console.log('Error fetching MarketInfo: ',err))
 }, []);

//  console.log("Market Items:", marketItems);
  // const fetchMarketItems = async () => {
  //   try {
  //     const res = await axios.get('/getMarketItems'); // Adjust the endpoint according to your backend route
  //     setMarketItems(res.data);
  //   } catch (error) {
  //     console.error('Error fetching market items:', error);
  //   }
  // };



  const marketItemsColombo = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Fresh Vegetables', price: '$10' },
    { image: require('../Images/sourthern2.jpg'), productName: 'Organic Fruits', price: '$15' },
    { image: require('../Images/sourthern3.jpg'), productName: 'Farm Eggs', price: '$5' },
    { image: require('../Images/sourthern4.jpg'), productName: 'Local Honey', price: '$8' },
    { image: require('../Images/sourthern2.jpg'), productName: 'Homemade Jam', price: '$7' }
    // Add more items as needed
  ];


  const marketItemsEastern = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Rice', price: '$8' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Coconuts', price: '$3' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Bananas', price: '$2' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Pineapples', price: '$4' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Mangoes', price: '$5' },
    // Add more items as needed
  ];
  
  const marketItemsNorthCentral = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Potatoes', price: '$6' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Onions', price: '$7' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Carrots', price: '$4' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Tomatoes', price: '$5' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Bell Peppers', price: '$3' },
    // Add more items as needed
  ];
  
  const marketItemsNorthWestern = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Garlic', price: '$9' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Green Beans', price: '$3' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Lettuce', price: '$2' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Cucumbers', price: '$4' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Radishes', price: '$3' },
    // Add more items as needed
  ];
  
  const marketItemsSabaragamuwa = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Pumpkins', price: '$4' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Spinach', price: '$3' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Kale', price: '$2' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Oranges', price: '$5' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Apples', price: '$6' },
    // Add more items as needed
  ];
  
  const marketItemsUva = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Papayas', price: '$3' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Passion Fruit', price: '$4' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Grapes', price: '$8' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Watermelons', price: '$10' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Cantaloupes', price: '$6' },
    // Add more items as needed
  ];
  
  const marketItemsCentral = [
    { image: require('../Images/sourthern1.jpg'), productName: 'Strawberries', price: '$7' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Blueberries', price: '$9' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Blackberries', price: '$8' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Raspberries', price: '$10' },
    { image: require('../Images/sourthern1.jpg'), productName: 'Cranberries', price: '$11' },
    // Add more items as needed
  ];



 
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
                // Assuming you have the image path stored in the item object as well
                // You may need to adjust this according to your data structure
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