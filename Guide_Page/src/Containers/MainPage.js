import React from 'react';
import NavbarComp  from '../Components/NavbarComp';
import SliderComp from '../Components/SliderComp';
import Footer from '../Components/footer';
import CardComp from '../Components/CardComp';


// import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage=()=> {
  
  return (

      <div>
        <NavbarComp />
        <div className='body'>
          <div>
            <br></br>
            <br></br>
          <SliderComp/>
          </div>
          <CardComp/>
          <Footer/>
        </div>

      
      </div>

  );
}

export default MainPage;