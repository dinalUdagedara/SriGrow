import React, { useState } from 'react';
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from "react-toastify";
function Inputs({selectedCity,onCityChange}) {
  const[cityInput,setCityInput]=useState('');
  const [error, setError] = useState('');
  const handleInputChange = (event) => {
    setCityInput(event.target.value);
  };
  // const handleSearch  =()=>{
  //   onCityChange(cityInput)
  // }

  const handleSearch  = () => {
    
    if (cityInput.trim() === '') {
      setError('Please enter a city name');
    } else {
      setError('');
      onCityChange(cityInput);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching user location...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.success('Location fetched!');
          const { latitude, longitude } = position.coords;
          getCityName(latitude, longitude);
        },
        (error) => {
          toast.error('Error fetching location: ' + error.message);
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser.');
    }
  };

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      const city = data.locality;
      onCityChange(city);
    } catch (error) {
      console.error('Error fetching city name:', error);
      toast.error('Error fetching city name');
    }
  };


  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            type='text' 
            placeholder='Search for city...'
            value={cityInput}
            onChange={handleInputChange}
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase '
            />
            <UilSearch 
            size={25} 
            className="text-white cursor-pointer   transition ease-out hover:scale-125"
            onClick={handleSearch}
            />
            <UilLocationPoint
             size={25}
              className="text-white cursor-pointer  transition ease-out hover:scale-125"
              onClick={handleLocationClick}/>
        </div>
    </div>
  )
}

export default Inputs