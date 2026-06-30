import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-black text-xl font-light'>
        {text1} <br />
        <span className='text-blue-500 font-bold text-3xl'>
          {text2}
        </span>

      </p>
      
    </div>
  )
}

export default Title
