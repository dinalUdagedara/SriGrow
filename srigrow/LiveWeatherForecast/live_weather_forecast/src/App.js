
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

  // // const [query, setQuery] = useState ({q:"Colombo"});
  // // const [units, setUnits] = useState ("metric");
  // const [weather ,setWeather] = useState (null);

  // useEffect(()=>{
  //   const fetchWeatherData = async() =>{
  //     await getFormattedWeatherData({...query,units}).then(
  //       (data =>{
  //         setWeather(weatherData);
  //       })
  //     )
  //   };
  //   fetchWeatherData();
  // },[query,units]);

  

  return (
    <div className='mx-auto max-w-screen-1xl mt-4 py-5 px-32 bg-gradient-to-br from-green-600 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <div className='mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-600'>
  
      <TopButtons />
      <Inputs />
      <WeatherService />
      
      {/* <TempretureAndDetails /> */}
      
      {/* <Forecast title ="Hourly Forecast"/>
      <Forecast title ="Daily Forecast"/> */}
    </div>
    </div>
    
  );
}

export default App;
