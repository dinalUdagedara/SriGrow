
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons";
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempretureAndDetails from './components/TempretureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import WeatherService from './Services/weatherService';
import { useEffect, useState } from 'react'






function App() {


  const [selectedCity,setSelectedCity] = useState('colombo');
  const handleCityChange = (city) =>{
    setSelectedCity(city);
  };

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const city = 'Hingurakgoda';
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        
        const apiKey = '0471886dbcab445177ada923c19f43d8';
        
        const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const responseWeather = await fetch(apiUrlWeather);
        const dataWeather = await responseWeather.json();
        setWeatherData(dataWeather);

        const responseForecast = await fetch(apiUrlForecast);
        const dataForecast = await responseForecast.json();
        setForecastData(dataForecast);

        
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }

    };
    

    fetchWeatherData();
  }, []);
 const formatBackground = () => {
  console.log("Weather Data:", weatherData);

  if (!weatherData) {
    console.log("No weather data, returning default background");
    return 'from-cyan-700 to-blue-700';
  }
  const temprature = weatherData.main.temp;
  if (temprature <= 10) {
    return 'from-cyan-700 to-blue-700'; // Cold temperature gradient
  } else if (temprature <= 25) {
    return 'from-yellow-300 to-yellow-800'; // Moderate temperature gradient
  } else {
    return 'from-red-500 to-red-900'; // Hot temperature gradient
  }
};



  return (
    <div className='mx-auto max-w-screen-1xl  py-7 px-32 bg-gradient-to-br from-green-600 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <div className={`mx-auto max-w-screen-x2 mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-600 h-fit shadow-xl shadow-gray-600 ${formatBackground}`}>
  
      <TopButtons onCityChange={handleCityChange}/>
      <Inputs selectedCity={selectedCity} onCityChange={handleCityChange}/>
      <WeatherService city ={selectedCity} />
    </div>
    </div>
    
  );
}

export default App;
