import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router ={route}/>
    </>
  )
}

export default App
