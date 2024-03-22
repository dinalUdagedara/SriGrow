import React, {useState} from 'react';
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
import WeatherPrediction from './WeatherPred/weatherPred.js';
import AdminPanel from './Components/AdminPanel.js'
import AddtoMarket from './Components/AddtoMarket.js'


function App() {
  const [path, setPath] = useState('weather');

  const handlePathChange = newPath => {
    setPath(newPath);
  };
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainPage />} />
        {/* <Route path="/guide" element={<Guide />} /> */}
        <Route path="/guide/:cropType" element={<Guide />} />
        {/* <Route path="/details" component={<Guide />} /> */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/AddNewPlant" element={<AddNewPlant />} />
        <Route path="/cropguidance" element={<CropGuidance/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/weather" element={<WeatherPrediction/>}/>
        <Route path="/recentnews" element={<Recentnews/>} />
        <Route path="/marketplace" element={<MarketPlace/>} />
        <Route path= "/AdminPanel" element={<AdminPanel/>}></Route>
        <Route path= '/AddtoMarket' element={<AddtoMarket/>}></Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
