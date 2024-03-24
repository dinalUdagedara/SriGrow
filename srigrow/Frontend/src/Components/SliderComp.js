import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

import slider7 from '../Images/slider7.jpg';
import slider8 from '../Images/slider8.jpg';
import slider9 from '../Images/slider9.jpg';
import slider10 from '../Images/slider10.jpg';
import slider11 from '../Images/slider11.jpg';
import slider12 from '../Images/slider12.jpg';
import slider13 from '../Images/slider13.jpg';
import slider14 from '../Images/slider14.jpg';
import slider15 from '../Images/slider15.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Containers/Style.css';




const SliderComp = ({images}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); 

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  return (

    <div className='carousel'>
        
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
     
    </div>
  );
};


export default SliderComp;
