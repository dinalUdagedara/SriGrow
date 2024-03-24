import React from 'react';
import { TiWeatherShower } from "react-icons/ti";
import { GrUserManager } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { PiPlant } from "react-icons/pi";
import { GiPlantRoots } from "react-icons/gi";
import '../Containers/Style.css';
import { Grid } from '@mui/material';
import CropGuidance from '../CropGuide/cropGuidance';
import { Link } from 'react-router-dom';


function CardComp() {
  return (
    <div>
      <div className='cards-container'>
        <br></br>
        <h1 className='card-title' ><span style={{ color: 'black' }}>Main</span> services</h1>
        <div className='mobile-cont'>
          <Grid container spacing={2} margin={2}>
            <Grid item xs={6} md={4}>
              <Link to="/weather">
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <TiWeatherShower size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>Real Time </span> Weather Forecast</h3>
                    <p className='disc'>Provides real-time weather forecasts and alerts for optimal farming decisions.</p>
                  </div>
                </div>
              </div>
              </Link>
            </Grid>
           
            <Grid item xs={6} md={4}>
              <Link to="/marketplace">
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <GoGraph size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>Market </span> Place</h3>
                    <p className='disc'>Displays current market prices and trends for various crops, enabling data-driven selling decisions.</p>
                  </div>
                </div>
              </div>
              </Link>
              <br></br>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link to="/cropguidance">
              <div className="card" >
                <div className="card-content">
                  <div className="card-icon">
                    <PiPlant size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>Crop </span> Guidence</h3>
                    <p className='disc'>Shares comprehensive and localized information on best practices for cultivating different crops Using Weather Prediction.</p>
                  </div>
                </div>
              </div>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link to="/recentnews">
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <GiPlantRoots size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>Recent </span>News & <span style={{ color: 'black' }}>Pest </span> Alerts</h3>
                    <p className='disc'>Timely notifications via app on prevalent pests, aiding officers in identifying, managing, and advising farmers on pest control measures for crop protection.</p>
                  </div>
                </div>
              </div>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link to = '/sign-in'>
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <GrUserManager size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>Admin </span>Dashboard </h3>
                    <p className='disc'>Dashboard for Officers to Manage The System.</p>
                  </div>
                </div>
              </div>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link to='/about-us'>
              <div className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <GrUserManager size={60} />
                  </div>
                  <div className='card-text'>
                    <h3 className='heading'><span style={{ color: 'black' }}>About </span> Us</h3>
                    <p className='disc'>Connect with us for the latest updates and insights on social media.</p>
                  </div>
                </div>
              </div>
              </Link>
            </Grid>
          </Grid>
        </div>

      </div>
    </div>
  );
}
export default CardComp;