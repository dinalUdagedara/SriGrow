import React from 'react';
import '../CropGuide/cropGuidance.css';
import Chilli from '../Images/Chilli_cg.jpg';
import Onion from '../Images/big_onion_cg.jpg';
import FingerMillet from '../Images/finger_millet_cg.jpg';
import Maize from '../Images/maize_cg.jpg';
import Rice from '../Images/rice_cg.jpg';
import NavbarComp from '../Components/NavbarComp';
import Footer from '../Components/footer';
import { Link } from 'react-router-dom';
const CropGuidance=()=> {
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
          <Link to="/guide">
          <div className="imageBox">
            <img src={Rice} alt="placeholder" />
            <div className="textBox">Rice Crop
              <div className='textBox_1'>Read More...</div>
            </div>
            
          </div>
          </Link>

          <Link to="/guide">
          <div className="imageBox">
            <img src={Onion} alt="placeholder" />
            <div className="textBox">Big Onion Yield
              <div className='textBox_1'>Read More...</div>
            </div>
          </div>
          </Link>
          <Link to="/guide">
          <div className="imageBox">
            <img src={Maize} alt="placeholder" />
            <div className="textBox">Maize(Corn) Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </Link>
          
        </div>
        <div className="row">
        <Link to="/guide">
          <div className="imageBox">
            <img src={FingerMillet} alt="placeholder" />
            <div className="textBox">Finger Millet Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </Link>
          <Link to="/guide">
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