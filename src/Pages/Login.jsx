import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }
  return (
    <form 
    onSubmit={onSubmitHandler}
    className='flex flex-col w-[90%] items-center sm:max-w-96 m-auto mt-14 lg:mt-25 gap-4 text-gray-800 my-10' >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-4xl font-medium'>
          {currentState}
        </p>
        <hr className='border-none h-[1.5px] w-8 bg-blue-600'/>
      </div>

        {currentState === 'Login' ? '' : 
        <input 
        type="text"
        className='w-full px-3 py-2 mb-3 border border-gray-800'
        placeholder='Full Name' required /> }

        <input 
        type="email"
        className='w-full px-3 py-2 mb-3 border border-gray-800'
        placeholder='Email' required />

        <input 
        type="password"
        className='w-full px-3 py-2 mb-3 border border-gray-800'
        placeholder='Password' required />

        <div className='w-full flex  justify-between text-sm mt-[8px]'>
          <p className='cursor-pointer font-bold'>Forgot Password</p>
          {
            currentState === 'Login' ? 
            <p onClick={()=>setCurrentState('Sign Up')}
            className='cursor-pointer font-bold'>Create Account</p> :
            <p onClick={()=>setCurrentState('Login')}
            className='cursor-pointer font-bold'>Already have an account</p>
          }
        </div>

        <button className='bg-blue-600 text-white font-bold px-8 py-2 mt-4 '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      
    </form>
  )
}

export default Login
