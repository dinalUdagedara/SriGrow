import React from 'react';
import NavbarComp  from '../Components/NavbarComp';
import SliderComp from '../Components/SliderComp';
import Footer from '../Components/footer';
import CardComp from '../Components/CardComp';
import slider3 from '../Images/slider3.jpg';
import slider4 from '../Images/slider4.jpg';
import slider5 from '../Images/slider5.jpg';
import slider6 from '../Images/slider6.jpg';

// import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage=()=> {
  const images=[
      slider3,
      slider4,
      slider5,
      slider6
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