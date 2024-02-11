import React from 'react';
import imageSun from '../Images/Sun.png';
import cloudy from '../Images/cloudy.png';
import scatteredClouds from '../Images/scatteredClouds.png'
import brokenClouds from '../Images/overcastClouds.png'
import heavyRain from '../Images/heavyRain.png'
import lightRain from '../Images/lightrain.png'
import lightRainWithSun from '../Images/lightRainwithSun.png'
import overcastClouds from '../Images/overcastClouds.png'
import sunny from '../Images/sunny.png'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from"@iconscout/react-unicons";

function TempretureAndDetails({weather,temp,realFeel,humidity,wind,sunrise,sunset,highTemp,lowTemp}) {


    let image = getImageForWeather(weather);
    function getImageForWeather(weather) {
        switch (weather) {
            case "overcast clouds":
                return overcastClouds;
            case "scattered clouds":
                return scatteredClouds;
            case "few clouds":
                return cloudy;
            case "Clouds":
                return cloudy;
            case "broken clouds":
                return brokenClouds;
            case "light rain":
                return lightRain;
            case "clear sky":
                return sunny;
            case "heavy rain":
                return heavyRain;
            default:
                return sunny;
        }
    }






  return (
    <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>{weather} </p>
    </div>
    <div className='flex flex-row items-center justify-between text-white py-3'>
    <img src={image} alt="Image of Sun" 
        className='w-20'></img>
        <p className='text-5xl justify-center'>{Math.round(temp)}°</p>
        <div className='flex flex-col space-y-2'>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size ={18} className ="mr-1" />
                Real Feel: 
                <span className='font-medium ml-1'>{Math.round(realFeel)} °</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size ={18} className ="mr-1" />
                Humidity:
                <span className='font-medium ml-1'>{humidity}%</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size ={18} className ="mr-1" />
                Wind: 
                <span className='font-medium ml-1'>{wind}m/s</span>
            </div>
        </div>
    </div>


    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun/>
        <p className='font-light'>Rise: <span className='font-medium ml-1'>
            {sunrise}</span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset/>
        <p className='font-light'>Set: <span className='font-medium ml-1'>
            {sunset}</span>
        </p>
        <p className='font-light'>|</p>

        <UilSun/>
        <p className='font-light'>High: <span className='font-medium ml-1'>
            {Math.round(highTemp)}°</span>
        </p>
        <p className='font-light'>|</p>

        <UilSun/>
        <p className='font-light'>Low: <span className='font-medium ml-1'>
            {Math.round(lowTemp)}°</span>
        </p>


     

    </div>

    </div>
    
  );
}

export default TempretureAndDetails