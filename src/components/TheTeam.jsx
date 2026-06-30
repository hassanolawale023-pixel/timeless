import React from 'react'
import { assets } from '../assets/myAssets/assets'

const TheTeam = () => {

    const team = [
        {
            image: assets.Ceo,
            position: 'CEO & Founder',
            name: 'Hassan Oseni'
        },
        {
            image: assets.Marketer,
            position: 'Marketing Manager',
            name: 'Daniel Ojo'
        },
        {
            image: assets.Operations,
            position: 'Operations Manager',
            name: 'Sarah Johnson'
        },
        {
            image: assets.PM,
            position: 'Product Manager',
            name: 'Michael Lee'
        }
    ]


  return (
    <div className=' mt-15 lg:mt-25'>
       <div className='grid grid-cols-2 md:grid-cols-4 px-5 gap-5'>
  {
    team.map((item, index) => (
      <div key={index} className='flex flex-col'>
        <img
          src={item.image}
          alt={item.name}
          className='w-full h-full object-cover'
        />

        <div className='mt-2'>
          <p className='text-gray-900 text-start'>
            {item.name}
          </p>

          <p className='text-gray-800 text-start'>
            {item.position}
          </p>
        </div>
      </div>
    ))
  }
</div>

      
    </div>
  )
}

export default TheTeam
