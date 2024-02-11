import React from 'react'

import imageSun from '../Images/Sun.png';
import cloudy from '../Images/cloudy.png';
import scatteredClouds from '../Images/scatteredClouds.png'
import brokenClouds from '../Images/overcastClouds.png'
import heavyRain from '../Images/heavyRain.png'
import lightRain from '../Images/lightrain.png'
import lightRainWithSun from '../Images/lightRainwithSun.png'
import overcastClouds from '../Images/overcastClouds.png'
import sunny from '../Images/sunny.png'

function Forecast({time1,weather1,tempretuer1,
                time2,weather2,tempretuer2,
                time3,weather3,tempretuer3,
                time4,weather4,tempretuer4,
                time5,weather5,tempretuer5}) {

        let image1 = sunny
        let image2 = sunny
        let image3 = sunny
        let image4 = sunny
        let image5 = sunny
        

         image1 = getImageForWeather(weather1);
         image2 = getImageForWeather(weather2);
         image3 = getImageForWeather(weather3);
         image4 = getImageForWeather(weather4);
         image5 = getImageForWeather(weather5);
    
        function getImageForWeather(weather) {
            switch (weather) {
                case "overcast clouds":
                    return overcastClouds;
                case "scattered clouds":
                    return scatteredClouds;
                case "few clouds":
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
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                Hourly Forecast  </p>
        </div>
        <hr className='my-2 '></hr>
        <div className=' flex flex-row items-center  justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time1}
                </p>
                <img src={image1} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather1}</p>
                 <p className='font-medium'>{Math.round(tempretuer1)}°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time2}
                </p>
                <img src={image2} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather2}</p>
                 <p className='font-medium'>{Math.round(tempretuer2)}°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time3}
                </p>
                <img src={image3} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather3}</p>
                 <p className='font-medium'>{Math.round(tempretuer3)}°</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time4}
                </p>
                <img src={image4} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather4}</p>
                 <p className='font-medium'>{Math.round(tempretuer4)}°</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time5}
                </p>
                <img src={image5} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather5}</p>
                 <p className='font-medium'>{Math.round(tempretuer5)}°</p>
            </div>

        </div>
        </div>
        
  )
}

  export default Forecast
  