import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Containers/MainPage';
import Guide from './Containers/Guide';
import CropsVar from './Components/CropsVar';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<MainPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/Crops" component={<Guide/>} />
        <Route path="/details" component={<Guide/>} />
      </Routes>
    </Router>
  );
}

export default App;
