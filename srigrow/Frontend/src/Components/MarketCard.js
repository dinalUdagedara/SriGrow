import React from 'react';
import '../MarketPlace/MarketPlace.css'; //import the css file
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';

import carrot from '../Images/carrot_1.jpeg';
import chilli from '../Images/green_chili_2.jpeg';
import cabbage from '../Images/cabbage_1.jpeg';
import paddy1 from '../Images/paddy_3.jpeg';
import paddy2 from '../Images/paddy_2.jpeg';
import pumpkin from '../Images/pumpkin_1.jpg';


import sourthern1 from '../Images/sourthern1.jpg';
import sourthern2 from '../Images/sourthern2.jpg';
import sourthern3 from '../Images/sourthern3.jpg';
import sourthern4 from '../Images/sourthern4.jpg';
import sourthern5 from '../Images/sourthern4.jpg';


const MarketCard = ({ imageSrc, productName, previousPrice, lastWeekPrice, thisWeeksPrice }) => {



  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];
  var selectedImage = imageArray[1];
  if(productName == "Paddy_(Short_Grain)"){
    selectedImage = paddy1
  }
  else if(productName == "Paddy_(Long_Grain)"){
    selectedImage = paddy2
  }
  else if(productName == "Green Chillies"){
    selectedImage = chilli
  }else if(productName == "Pumpkin"){
    selectedImage = pumpkin
  }else if(productName == "Carrot"){
    selectedImage = carrot
  }else if(productName == "Cabbage"){
    selectedImage = cabbage
  }else if(productName == "Green Chillies"){
    selectedImage = chilli
  }else if(productName == "Green Chillies"){
    selectedImage = chilli
  }


  return (
    <div className="marketplace-card">
      <img className='cardimage' src={selectedImage} alt={productName}></img>
      <div className="mp-card-info">
        <p>{productName}</p>
        <p>"Previous (per 1Kg):"{previousPrice}</p>
        <p>Last Week (per 1Kg):{lastWeekPrice}</p>
        <p>This Week (per 1Kg):{thisWeeksPrice}</p>
      </div>

          

       {/* <div className="mp-card-container">
       
         <div className="marketplace-card">
           <img className='cardimage' src={image1} alt="alternatetext"></img>
           <div className="mp-card-info">
             <p> fresh and vegetables</p>
             <p> price</p>
           </div>
         </div> */}
    </div>


  );
};


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

export default MarketCard;
