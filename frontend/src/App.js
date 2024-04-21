import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Live from './Live'
import Stat from './Stat'
import Welcome from './Welcome'






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/signup' element={<Signup/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/live' element={<Live/>}> </Route>
      <Route path='/stat' element={<Stat/>}> </Route>
    
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
