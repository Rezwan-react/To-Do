import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    
     
 
  return (
    <>
   <div className="min-h-screen flex items-center justify-center gap-[50px] bg-gradient-to-r from-teal-400 to-cyan-500">
      
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md relative">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        
        </div>
        <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">Login </h2>
        <form  >
          {/* ================================ email ===================================== */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input 
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
            
          </div>
          {/* ============================================== password ====================================== */}
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <div className="relative mb-6 ">
          
            <input 
              type='password'
              id="password"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
            
          </div>
          {/* ============================================ button ======================================== */}
          <button 
            type="submit"
            className="w-full px-5 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 active:scale-95"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-cyan-500 hover:underline font-semibold">Sign Up</Link>
        </p>
        <div className='flex justify-center mt-2 text-sm font-semibold font-poppins '>
          <Link to='/restPasswoed'>Forgot password ?</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login