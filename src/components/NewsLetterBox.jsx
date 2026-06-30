import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
      event.preventDefault()
    }

  return (
    <div className='text-center mt-10'>
      <p className='text-2xl font-medium text-black'>
        Subscribe to our Newsletter
      </p>
      <p className='text-gray-400 mt-3'>
        Get the latest updates on new products and upcoming sales
      </p>

      <form onSubmit={onSubmitHandler} className='mt-8 w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 hover:border'>
        <input
          type="email"
          placeholder="Enter your email"
          className='w-full sm:flex-1 outline-none text-sm'
         required/>
        <button
          type="submit"
          className='bg-black text-white  py-4 px-10 cursor-pointer'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
