import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
             <div className="min-h-screen flex items-center justify-center gap-[50px] bg-gradient-to-r from-teal-400 to-cyan-500">
      
      <div className="bg-[#b491ffb4] p-10 rounded-3xl shadow-2xl w-full max-w-md relative">
        {/* <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        
        </div> */}
        <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">Register</h2>
        <form  >
          {/* =================== user name =============== */}
        <div className="mb-6">
            <label htmlFor="email" className="block text-black  font-poppins text-sm font-semibold mb-2">User Name</label>
            <input 
              type="text"
              
              className="w-full px-5 py-3 text-white placeholder:text-white border bg-transparent border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your name"
              
            />
            
          </div>
          {/* =========================== email ========================== */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-poppins text-sm font-semibold mb-2">Email Address</label>
            <input 
              type="email"
              
              className="w-full px-5 py-3 border text-white  placeholder:text-white bg-transparent border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your email"
              required
            />
           
          </div>
          {/* ========================= password =================== */}
            <label htmlFor="password" className="block text-black font-poppins text-sm font-semibold mb-2">Password</label>
          <div className="relative mb-6 ">
           
            <input 
              type='password'
              
              className="w-full px-5 py-3 bg-transparent placeholder:text-white text-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
            
          </div>
          {/* =========================== confirm password ================= */}
            <label htmlFor="password" className="block text-black font-poppins text-sm font-semibold mb-2">Confirm Password</label>
          <div className="relative mb-6 ">
          
            <input 
              type= 'password'
              id="password"
              className="w-full px-5 py-3 bg-transparent placeholder:text-white text-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
           
          </div>
          {/* ==================== submit button ============================= */}
          

          <button 
            type="submit"
            className="w-full px-5 py-3 bg-cyan-500 text-white font-poppins font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 active:scale-95"
          >
            Register
          </button>
            
        <p className="mt-6 text-center text-white font-poppins">
        already have an account? <Link to="/login" className=" hover:underline font-poppins font-bold">Login</Link>
        </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register