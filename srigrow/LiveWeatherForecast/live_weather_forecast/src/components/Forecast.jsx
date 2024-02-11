import React from 'react'
import imageSun from '../Images/Sun.png';

function Forecast({time1,weather1,tempretuer1,
                time2,weather2,tempretuer2,
                time3,weather3,tempretuer3,
                time4,weather4,tempretuer4,
                time5,weather5,tempretuer5}) {
 
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
                <img src={imageSun} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather1}</p>
                 <p className='font-medium'>{Math.round(tempretuer1)}°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time2}
                </p>
                <img src={imageSun} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather2}</p>
                 <p className='font-medium'>{Math.round(tempretuer2)}°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time3}
                </p>
                <img src={imageSun} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather3}</p>
                 <p className='font-medium'>{Math.round(tempretuer3)}°</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time4}
                </p>
                <img src={imageSun} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather4}</p>
                 <p className='font-medium'>{Math.round(tempretuer4)}°</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {time5}
                </p>
                <img src={imageSun} alt="Image of Sun" 
                className='w-12 my-1'/> 
                <p className='font-medium'>{weather5}</p>
                 <p className='font-medium'>{Math.round(tempretuer5)}°</p>
            </div>

        </div>
        </div>
        
  )
}

  export default Forecast
  