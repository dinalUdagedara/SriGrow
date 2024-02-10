
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons";
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempretureAndDetails from './components/TempretureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import WeatherService from './Services/weatherService';






function App() {

  

  return (
    <div className='mx-auto max-w-screen-1xl mt-4 py-5 px-32 bg-gradient-to-br from-green-600 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <div className='mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-600'>
  
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempretureAndDetails />
      <WeatherService />
      <Forecast title ="Hourly Forecast"/>
      <Forecast title ="Daily Forecast"/>
    </div>
    </div>
    
  );
}

export default App;
