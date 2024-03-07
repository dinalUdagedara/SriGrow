import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '@mui/material';
import image1 from '../Images/slider3.jpg';
import image2 from '../Images/slider4.jpg';
import image3 from '../Images/slider5.jpg';
import image4 from '../Images/slider6.jpg';
import '../Containers/Style.css';
const images = [
  image2,
  image1,
  image3,
  image4
];

const SliderComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(()=>{
    const interval = setInterval(()=>{
        nextSlide();
    },4000);
    return()=> clearInterval(interval);
  },[currentIndex]);

  return (
    <div className="carousel">
      <button className='slider-button' onClick={prevSlide}>&lt;</button>
      <AnimatePresence initial={false} >
     <motion.div
     key={currentIndex}
     exit={{opacity:0}}
     initial={{opacity:0}}
     animate={{opacity:1}}
     className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>

     </motion.div>
     </AnimatePresence>
     <button className='slider-button' onClick={nextSlide}>&gt;</button>
    </div>
  );
  };
      

export default SliderComp;
