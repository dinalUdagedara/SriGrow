
import React, { useState } from 'react'; 
import WeatherService from '../Services/weatherService';

function TopButtons({onCityChange}) {
    
    const cities =[
    {
    id:1,
    title:'Vavuniya'
    },
    {
        id:2,
        title:'Anuradhapura'
    },
    {
        id:3,
        title:'Kurunegala'
    },
    {
        id:4,
        title:'Ampara'
    }

    ]
  return (
  <div className='flex items-center  justify-around my-6'>
    {cities.map((city) =>(
        <button 
        key = {city.id}
        className='text-white text-lg font-medium'
        onClick={() => onCityChange(city.title)}
        >{city.title}</button>
    ))}
   

    
  </div>
  );
  
}

export default TopButtons