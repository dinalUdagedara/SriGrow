import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/navbar/navbar';
// import Footer from '../src/components/ footer /footer'; // Corrected the import path
import Footer from '../src/components/footer/footer'
import Cardcomponents from './cardcomponents/cardcomponents'; // Corrected the import and component name
//import images from './src/images';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Cardcomponents/>
                {/* Define your routes */}
                {/* <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/weather" component={Weather} />
                    <Route path="/crop-guide" component={CropGuide} />
                    <Route path="/pests-disease-alerts" component={PestsDiseaseAlerts} />
                    <Route path="/market-price" component={MarketPrice} />
                    <Route path="/about-us" component={AboutUs} />
                </Switch> */}
                <Footer/>
            </div>
        </Router>
    );
}
       

export default App;
