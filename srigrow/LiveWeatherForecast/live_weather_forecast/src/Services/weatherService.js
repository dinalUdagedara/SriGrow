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
import TempretureAndDetails from "../components/TempretureAndDetails";
import Forecast from "../components/Forecast";
import DailyForecast from "../components/DailyForecast";

function WeatherService() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [formattedWeatherData, setFormattedWeatherData] = useState(null);
  const city = 'london';
  const forecastDataArray = [];
  const formattedForecastDataArray=[];
  
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

        // Format current weather data
        const formattedWeather = formatCurrentWeather(dataWeather);
        setFormattedWeatherData(formattedWeather);

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }

    };

    
    

    fetchWeatherData();
  }, [createUtilityClassName]);

  return (
    <div>
      <TimeAndLocation city = {city} currentDate={currentDate} currentTime={currentTime}/>
   
      {weatherData && forecastData ? (
        <div>
          <div>
            {/* <div className="text-center text-white">
              <h2>Formatted Weather DATA</h2>
        
              <p>City: {formattedWeatherData.name}</p>
              <p>Country: {formattedWeatherData.country}</p>
              <p>Temperature: {formattedWeatherData.temp} °C</p>
              <p>Feels Like Temperature: {formattedWeatherData.feels_like} °C</p>
              <p>Minimum Temperature: {formattedWeatherData.temp_min} °C</p>
              <p>Maximum Temperature: {formattedWeatherData.temp_max} °C</p>
              <p>Weather: {formattedWeatherData.details}</p>
              <p>Wind Speed: {formattedWeatherData.speed} m/s</p>
              <p>Humidity: {formattedWeatherData.humidity}%</p>
              <p>Sunrise Time: {new Date(formattedWeatherData.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset Time: {new Date(formattedWeatherData.sunset * 1000).toLocaleTimeString()}</p>  
              
              
              
              
            </div> */}
          
            <TempretureAndDetails
              temp = {formattedWeatherData.temp} 
              weather = {formattedWeatherData.details}
              realFeel={formattedWeatherData.feels_like} 
              humidity ={formattedWeatherData.humidity}
              wind ={formattedWeatherData.speed}
              sunrise = {new Date(formattedWeatherData.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              sunset = {new Date(formattedWeatherData.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              highTemp = {formattedWeatherData.temp_max}
              lowTemp ={formattedWeatherData.temp_min}
            />


            {forecastData.list.slice(0,5).map((forecast, index) => {
              const forecastDate = new Date(forecast.dt_txt);
              const formattedDate = `${getDayName(forecastDate.getDay())}`;
              const forecastTime = forecastDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              const forecastObject ={
                time: forecastTime,
                date: formattedDate,
                temperature: forecast.main.temp,
                humidity: forecast.main.humidity,
                weather: forecast.weather[0].description,
                feelsLikeTemperature: forecast.main.feels_like
              };
            // Push the forecast object to the array
            forecastDataArray.push(forecastObject);



            
            // Iterate over each forecast entry
            forecastData.list.forEach(forecast => {
                // Extract the date and time from the forecast data
                const forecastDate = new Date(forecast.dt_txt);
                const forecastTime = forecastDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
                // Check if the forecast is for 12 noon
                if (forecastTime === '12:00 PM') {
                    // Extract relevant forecast information
                    const formattedDate = getDayName(forecastDate.getDay());
                    const forecastObject = {
                        Date: forecast.dt_txt,
                        time: forecastTime,
                        date: formattedDate,
                        temperature: forecast.main.temp,
                        humidity: forecast.main.humidity,
                        weather: forecast.weather[0].description,
                        feelsLikeTemperature: forecast.main.feels_like
                    };
            
                    // Push the forecast object to the array
                    formattedForecastDataArray.push(forecastObject);
                }
            });
            

            formattedForecastDataArray.forEach(forecast => {
              console.log(`DATE:'${forecast.Date}`)
              console.log(`Time: ${forecast.time}`);
              console.log(`Date: ${forecast.date}`);
              console.log(`Temperature: ${forecast.temperature}`);
              console.log(`Humidity: ${forecast.humidity}`);
              console.log(`Weather: ${forecast.weather}`);
              console.log(`Feels Like Temperature: ${forecast.feelsLikeTemperature}`);
              console.log('-----------------------------');
          });
          })};





       





          {/* <p className="text-rose-800">
            date:{forecastDataArray[0].date},
            time1: {forecastDataArray[0].time},
            weather1: {forecastDataArray[0].weather},
            tempretuer1: {forecastDataArray[0].temperature}
            </p>
            <div className="text-fuchsia-1000" >
              <p>
              date:{formattedForecastDataArray[0].Date}
              date:{formattedForecastDataArray[1].Date}
              date:{formattedForecastDataArray[2].Date}
              date:{formattedForecastDataArray[3].Date}
              date:{formattedForecastDataArray[4].Date}


              weather: {formattedForecastDataArray[0].weather}
              weather: {formattedForecastDataArray[1].weather}
              weather: {formattedForecastDataArray[2].weather}
              weather: {formattedForecastDataArray[3].weather}
              weather: {formattedForecastDataArray[4].weather}
              weather: {formattedForecastDataArray[5].weather}
              
              </p>
              
            </div> */}
            
            <Forecast 
            
            time1 = {forecastDataArray[0].time}
            weather1 = {forecastDataArray[0].weather}
            tempretuer1 = {forecastDataArray[0].temperature}

            time2 = {forecastDataArray[1].time}
            weather2 = {forecastDataArray[1].weather}
            tempretuer2 = {forecastDataArray[1].temperature}


            time3 = {forecastDataArray[2].time}
            weather3 = {forecastDataArray[2].weather}
            tempretuer3 = {forecastDataArray[2].temperature}


            time4 = {forecastDataArray[3].time}
            weather4 = {forecastDataArray[3].weather}
            tempretuer4 = {forecastDataArray[3].temperature}


            time5 = {forecastDataArray[4].time}
            weather5 = {forecastDataArray[4].weather}
            tempretuer5 = {forecastDataArray[4].temperature}

              
            />

            <DailyForecast 
        
              date1={new Date(formattedForecastDataArray[0].Date).toLocaleDateString('en-US', { weekday: 'long' })}
              weather1 ={formattedForecastDataArray[0].weather}
              tempreture1 ={formattedForecastDataArray[0].temperature}


              date2={new Date(formattedForecastDataArray[1].Date).toLocaleDateString('en-US', { weekday: 'long' })}
              weather2 ={formattedForecastDataArray[1].weather}
              tempreture2 ={formattedForecastDataArray[1].temperature}

              date3={new Date(formattedForecastDataArray[2].Date).toLocaleDateString('en-US', { weekday: 'long' })}
              weather3 ={formattedForecastDataArray[2].weather}
              tempreture3 ={formattedForecastDataArray[2].temperature}

              date4={new Date(formattedForecastDataArray[3].Date).toLocaleDateString('en-US', { weekday: 'long' })}
              weather4 ={formattedForecastDataArray[3].weather}
              tempreture4 ={formattedForecastDataArray[3].temperature}

              date5={new Date(formattedForecastDataArray[4].Date).toLocaleDateString('en-US', { weekday: 'long' })}
              weather5 ={formattedForecastDataArray[4].weather}
              tempreture5 ={formattedForecastDataArray[4].temperature}

             />
          
          
        

          

          {/* <h2>Today's Weather</h2>
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
          <div> */}


            {/* <h2 className="text-red-400">Forecast</h2>
            {forecastData.list.map((forecast, index) => (
            <div key={index}>
              <p className="text-white">Date: {forecast.dt_txt}</p>
              <p>Temperature: {forecast.main.temp} °C</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Weather: {forecast.weather[0].description}</p>
              <p>Feels Like Temperature: {forecast.main.feels_like} °C</p>
            </div>
          ))} */}

            
          
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      
    
    </div>
  );
}


const formatCurrentWeather = (weatherData) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = weatherData;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};




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

 function getDayName(dayIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}


console.log("Today's date:", currentDate);
console.log("Current time:", currentTime);





export default WeatherService;
