import React from 'react';
import NavbarComp  from './Components/NavbarComp';
import {BrowserRouter as Router} from 'react-router-dom';
import SliderComp from './Components/SliderComp';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
      
      </div>
    </Router>
  );
}

export default App;
