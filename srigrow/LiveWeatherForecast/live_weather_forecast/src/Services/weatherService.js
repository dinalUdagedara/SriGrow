// import React, { useState, useEffect } from 'react';

// function WeatherService() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const apiKey = '0471886dbcab445177ada923c19f43d8';
//         const city = 'polonnaruwa';
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   return (
//     <div>
//       {weatherData ? (
//         <div>
//           <h2>Today's Weather</h2>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Feels Like Temperature: {weatherData.main.feels_like} °C</p>
//           <p>Minimum Temperature: {weatherData.main.temp_min} °C</p>
//           <p>Maximum Temperature: {weatherData.main.temp_max} °C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Wind Direction: {weatherData.wind.deg}°</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Sunrise Time: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset Time: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//           <p>Cloudiness: {weatherData.clouds.all}%</p>
//           {/* You may need to handle rain and snow data */}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default WeatherService;


import { DateTime } from "luxon";
import TimeAndLocation from "../components/TimeAndLocation";

import React, { useState, useEffect } from 'react';
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

function WeatherService() {
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
  }, [createUtilityClassName]);

  return (
    <div>
      <TimeAndLocation city = {city}/>
      <TimeAndLocation currentDate = {currentDate}/>
      {weatherData && forecastData ? (
        <div>
          <div>
          <h2>Today's Weather</h2>
          <p>Date: {currentDate}</p>
          <p>Time: {currentTime}</p>
           <p>Temperature: {weatherData.main.temp} °C</p>
           <p>Feels Like Temperature: {weatherData.main.feels_like} °C</p>
           <p>Minimum Temperature: {weatherData.main.temp_min} °C</p>
           <p>Maximum Temperature: {weatherData.main.temp_max} °C</p>
           <p>Weather: {weatherData.weather[0].description}</p>
           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
           <p>Humidity: {weatherData.main.humidity}%</p>
           <p>Sunrise Time: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
           <p>Sunset Time: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
           <p>Cloudiness: {weatherData.clouds.all}%</p>
           <p>Rain (last hour): {weatherData.rain ? weatherData.rain['1h'] : '0'} mm</p>
          </div>
          <div>
            <h2 className="text-red-400">Forecast</h2>
            {/* Loop over forecastData.list to display forecast for upcoming days */}
            {forecastData.list.map((forecast, index) => (
              <div key={index}>
                <p className="text-white">Date: {forecast.dt_txt}</p>
                <p>Temperature: {forecast.main.temp} °C</p>
                <p>Humidity: {forecast.main.humidity}%</p>
                <p>Weather: {forecast.weather[0].description}</p>
                <p>Feels Like Temperature: {forecast.main.feels_like} °C</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}


// Get today's date
const today = new Date();

// Get the current date in YYYY-MM-DD format
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
const day = String(today.getDate()).padStart(2, '0');

 const currentDate = `${year}-${month}-${day}`;

// Get the current time
const hours = String(today.getHours()).padStart(2, '0');
const minutes = String(today.getMinutes()).padStart(2, '0');
const seconds = String(today.getSeconds()).padStart(2, '0');

 const currentTime = `${hours}:${minutes}:${seconds}`;



console.log("Today's date:", currentDate);
console.log("Current time:", currentTime);


export default WeatherService;
