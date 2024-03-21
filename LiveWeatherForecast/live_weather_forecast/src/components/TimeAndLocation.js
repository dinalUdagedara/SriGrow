import React from 'react'

function TimeAndLocation({city,currentDate,currentTime}) {
  return (
    <div>
    <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            {currentDate} | Local time: {currentTime}
        </p>
    </div>
    <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
        {city.charAt(0).toUpperCase() + city.slice(1)}
          </p>
    </div>
    </div>
  )
}

export default TimeAndLocation