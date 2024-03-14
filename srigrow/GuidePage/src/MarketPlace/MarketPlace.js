import React from 'react';
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


const MarketPlace = () => {
  return (
    <div>
      <NavbarComp/>
      <div className="news-banner">
        <h2>StoreMarket</h2>
      </div>
      <div className="heading">
        <h2>Southern Province</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img className='cardimage' src={sourthern1} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={sourthern2} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={sourthern3} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={sourthern4} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={sourthern5} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
      </div>
      <div className="heading">
        <h2>Western Province</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img className='cardimage' src={image1} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image2} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image3} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image4} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image5} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
      </div>
      <div className="heading">
        <h2>Western Province</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img className='cardimage' src={image1} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image2} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image3} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image4} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image5} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
      </div>
      <div className="heading">
        <h2>Western Province</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img className='cardimage' src={image1} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image2} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image3} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image4} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
        <div className="card">
          <img className='cardimage' src={image5} alt="alternatetext"></img>
          <div className="card-info">
            <p> fresh and vegetables</p>
            <p> price</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};
export default MarketPlace;