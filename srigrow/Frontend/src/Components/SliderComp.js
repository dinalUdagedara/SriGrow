import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import slider3 from '../Images/slider3.jpg';
import slider4 from '../Images/slider4.jpg';
import slider5 from '../Images/slider5.jpg';
import slider6 from '../Images/slider6.jpg';
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
