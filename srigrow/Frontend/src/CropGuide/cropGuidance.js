import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react'; 
import '../CropGuide/cropGuidance.css';
import Chilli from '../Images/Chilli_cg.jpg';
import Onion from '../Images/big_onion_cg.jpg';
import FingerMillet from '../Images/fingerMillet2.jpg';
import Maize from '../Images/maize_cg.jpg';
import Rice from '../Images/rice_cg.jpg';
import NavbarComp from '../Components/NavbarComp';
import Footer from '../Components/footer';
import { Link } from 'react-router-dom';
const CropGuidance=()=> {
  const [cropType, setCropType] = useState(""); // State to hold the selected crop type



  const handleCropTypeChange = (newCropType) => {
    console.log("Old Crop Type:", cropType); // Log the old cropType
    setCropType(() => {
      console.log("New Crop Type:", newCropType); // Log the new cropType
      return newCropType; // Update the state with the new cropType
    });
  };
  

  useEffect(() => {
    console.log("Crop Type State:", cropType); // Log the updated cropType state
  }, [cropType]); // Execute this effect whenever cropType changes

  return (
       
    <div className='guidance-title'>
      <div>
      <NavbarComp/>
    </div>
      <h1> <span id='crop'>Crop</span> Guidance</h1>
      <div className='padding_1'>
      {/* <h4>Select your preferd crop</h4> */}
      </div>
      
      <div className="cropguide-container">
        <div className="row">
        <Link to={`/guide/${"Rice"}` }onClick={() => handleCropTypeChange("Rice")}>
          <div className="imageBox">
            <img src={Rice} alt="placeholder" />
            <div className="textBox">Rice Crop
              <div className='textBox_1'>Read More...</div>
            </div>
            
          </div>
          </Link>

          <Link to={`/guide/${"Onion"}` }onClick={() => handleCropTypeChange("Onion")}>
          <div className="imageBox">
            <img src={Onion} alt="placeholder" />
            <div className="textBox">Big Onion Yield
              <div className='textBox_1'>Read More...</div>
            </div>
          </div>
          </Link>
          <Link to={`/guide/${"Maize"}` }onClick={() => handleCropTypeChange("Maize")}>
          <div className="imageBox">
            <img src={Maize} alt="placeholder" />
            <div className="textBox">Maize(Corn) Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </Link>
          
        </div>
        <div className="row">
        <Link to={`/guide/${"Maize"}` }onClick={() => handleCropTypeChange("Maize")}>
          <div className="imageBox">
            <img src={FingerMillet} alt="placeholder" />
            <div className="textBox">Finger Millet Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </Link>
          <Link to={`/guide/${"Chillie"}` }onClick={() => handleCropTypeChange("Chillie")}>
          <div className="imageBox">
            <img src={Chilli} alt="placeholder" />
            <div className="textBox">Chilli Cultivation
            <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CropGuidance;
