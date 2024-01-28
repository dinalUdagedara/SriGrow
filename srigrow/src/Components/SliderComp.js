// import React from "react";
// import Slider from 'react-slick';
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import './Images/MainPage/slider1.webp';

// const SliderImage =[
//     "./Images/MainPage/slider1.webp",
//     "./Images/MainPage/slider2.jpeg",
//     "./Images/MainPage/slider3.jpg"
// ];

// const SliderComp =()=>{
//     const [activeImageNum, setCurrent] = useState(0);
//   const length = sliderImages.length;

//   const nextSlide = () => {
//     setCurrent((activeImageNum + 1) % length);
// }
// const prevSlide =()=>{
//     setCurrent((activeImageNum - 1 + length) % length);

// }
// return (
//     <div className="app">
//       <section className="image-slider">
//         <div className="left" onClick={prevSlide}>
//           <ArrowBackIosIcon />
//         </div>
//         <div className="right" onClick={nextSlide}>
//           <ArrowForwardIosIcon />
//         </div>
//         {sliderImages.map((currentSlide, ind) => (
//           <div
//             className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
//             key={ind}
//           >
//             {ind === activeImageNum && <img src={currentSlide} alt={`Slide ${ind + 1}`} className="image" />}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default SliderComp;