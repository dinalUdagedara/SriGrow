import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from '../src/components/navbar';
import Navbar from '../src/component/navbar'
// import './components/navbar/Navbar.css'; // Assuming you have a styles.css file for global styles
import './component/navbar/Navbar.css'

// import Footer from './components/footer/footer';
import Footer from './component/footer/footer'
//import images from './src/images';
import CardComponent from './recentnews/CardComponent';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <CardComponent/>
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
