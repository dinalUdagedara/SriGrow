import React from 'react';
import './App.css';



function App() {
  return (
    <div>
      <h1> <span id='crop'>Crop</span> Guidance</h1>
      <div className='padding_1'>
      {/* <h4>Select your preferd crop</h4> */}
      </div>
      
      <div className="container">
        <div className="row">
          <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="rice_cg.jpg" alt="placeholder" />
            <div className="textBox">Rice Crop
              <div className='textBox_1'>Read More...</div>
            </div>
            
          </div>
          </a>

          <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="big_onion_cg.jpg" alt="placeholder" />
            <div className="textBox">Big Onion Yield
              <div className='textBox_1'>Read More...</div>
            </div>
          </div>
          </a>
          <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="maize_cg.jpg" alt="placeholder" />
            <div className="textBox">Maize(Corn) Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </a>
          
        </div>
        <div className="row">
        <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="finger_millet_cg.jpg" alt="placeholder" />
            <div className="textBox">Finger Millet Cultivation
              <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </a>
          <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="Chilli_cg.jpg" alt="placeholder" />
            <div className="textBox">Chilli Cultivation
            <div className='textBox_1'>Read more...</div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
