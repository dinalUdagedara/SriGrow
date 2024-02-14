import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div>
      <h1>Crop Guidance</h1>
      <div className="container">
        <div className="row">
          <a href='https://www.youtube.com/'>
          <div className="imageBox">
            <img src="rice_cg.jpg" alt="placeholder" />
            <div className="textBox">Rice Crop</div>
          </div>
          </a>

          <a>
          <div className="imageBox">
            <img src="big_onion_cg.jpg" alt="placeholder" />
            <div className="textBox">Big Onion Yield</div>
          </div>
          </a>
          <a>
          <div className="imageBox">
            <img src="maize_cg.jpg" alt="placeholder" />
            <div className="textBox">Maize(Corn) Cultivation</div>
          </div>
          </a>
          
        </div>
        <div className="row">
          <a>
          <div className="imageBox">
            <img src="finger_millet_cg.jpg" alt="placeholder" />
            <div className="textBox">Finger Millet Cultivation</div>
          </div>
          </a>
          <a>
          <div className="imageBox">
            <img src="Chilli_cg.jpg" alt="placeholder" />
            <div className="textBox">Chilli Cultivation</div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
