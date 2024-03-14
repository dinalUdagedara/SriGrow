import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Containers/MainPage';
import Guide from './Containers/Guide';
import CropsVar from './Components/CropsVar';
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Authentication/loginPage';
import SignUp from './Authentication/signupPage';
import AddNewPlant from './Components/AddNewPlant';
import CropGuidance from './CropGuide/cropGuidance';
import About from './AboutUs/About';
// import CardComponent from './RecentNews/RecentNews.js';
import MarketPlace from './MarketPlace/MarketPlace.js';
import Recentnews from './RecentNews/RecentNews.js';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/Crops" component={<Guide />} />
        <Route path="/details" component={<Guide />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/AddNewPlant" element={<AddNewPlant />} />
        <Route path="/cropguidance" element={<CropGuidance/>} />
        <Route path="/about-us" element={<About/>} />
        
        <Route path="/recentnews" element={<Recentnews/>} />
        <Route path="/marketplace" element={<MarketPlace/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
