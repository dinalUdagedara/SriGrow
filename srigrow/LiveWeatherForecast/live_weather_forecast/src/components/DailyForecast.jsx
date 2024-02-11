import React from 'react'
import imageSun from '../Images/Sun.png';

function DailyForecast(
    {date1,weather1,tempreture1,
    date2,weather2,tempreture2,
    date3,weather3,tempreture3,
    date4,weather4,tempreture4,
    date5,weather5,tempreture5,
    }
    ) 
    {
    return (
      <div>
          <div className='flex items-center justify-start mt-6'>
              <p className='text-white font-medium uppercase'>
                  Daily Forecast  </p>
          </div>
          <hr className='my-2 '></hr>
          <div className=' flex flex-row items-center  justify-between text-white'>
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      {date1}
                  </p>
                  <img src={imageSun} alt="Image of Sun" 
                  className='w-12 my-1'/> 
                 <p className='font-medium'>{weather1}</p>
                   <p className='font-medium'>{tempreture1}°</p>
              </div>
  
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      {date2}
                  </p>
                  <img src={imageSun} alt="Image of Sun" 
                  className='w-12 my-1'/> 
                  <p className='font-medium'>{weather2}</p>
                   <p className='font-medium'>{tempreture2}°</p>
              </div>
  
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      {date3}
                  </p>
                  <img src={imageSun} alt="Image of Sun" 
                  className='w-12 my-1'/> 
                  <p className='font-medium'>{weather3}</p>
                   <p className='font-medium'>{tempreture3}°</p>
              </div>
  
  
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      {date4}
                  </p>
                  <img src={imageSun} alt="Image of Sun" 
                  className='w-12 my-1'/> 
                  <p className='font-medium'>{weather4}</p>
                   <p className='font-medium'>{tempreture4}°</p>
              </div>
  
  
              <div className='flex flex-col items-center justify-center'>
                  <p className='font-light text-sm'>
                      {date5}
                  </p>
                  <img src={imageSun} alt="Image of Sun" 
                  className='w-12 my-1'/> 
                  <p className='font-medium'>{weather5}</p>
                   <p className='font-medium'>{tempreture5}°</p>
              </div>
          </div>
          </div>
    )
  }

export default DailyForecast