import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Live from './Live'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}> </Route>
      <Route path='/signup' element={<Signup/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/live' element={<Live/>}> </Route>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
