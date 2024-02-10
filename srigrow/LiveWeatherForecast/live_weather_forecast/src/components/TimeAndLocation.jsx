import React from 'react'

function TimeAndLocation({city,currentDate}) {
  return (
    <div>
    <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            {currentDate} | Local time: 12:46 PM
        </p>
    </div>
    <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          {city}
          </p>
    </div>
    </div>
  )
}

export default TimeAndLocation