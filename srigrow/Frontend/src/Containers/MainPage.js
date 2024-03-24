import React from 'react';
import NavbarComp  from '../Components/NavbarComp';
import SliderComp from '../Components/SliderComp';
import Footer from '../Components/footer';
import CardComp from '../Components/CardComp';
import slider7 from '../Images/slider7.jpg';
import slider8 from '../Images/slider8.jpg';
import slider9 from '../Images/slider9.jpg';
import slider10 from '../Images/slider10.jpg';
import slider11 from '../Images/slider11.jpg';
import slider12 from '../Images/slider12.jpg';
import slider13 from '../Images/slider13.jpg';
import slider14 from '../Images/slider14.jpg';
import slider15 from '../Images/slider15.jpg';

// import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage=()=> {
  const images=[
      slider7,
      slider8,
      slider10,
      slider11,
      slider12,
      slider13,
      slider14,
      slider15

  ];
  return (

      <div>
        <NavbarComp />
        <div className='body'>
          <div>
            <br></br>
            <br></br>
          <SliderComp images={images}/>
          </div>
          <CardComp/>
          <Footer/>
        </div>

      
      </div>

  );
}

export default MainPage;