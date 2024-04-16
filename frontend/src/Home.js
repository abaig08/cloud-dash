import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' bg-primary vh-100 p-3'>
        <nav class="navbar navbar-expand-sm bg-light navbar-light rounded-2">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to="/home" className='btn btn-default w-100  text-decoration-none'>Map</Link>
            </li>
            <li class="nav-item active">
            <Link to="/live" className='btn btn-default w-100  text-decoration-none'>Live data</Link>
            </li>
            <li class="nav-item active">
            <Link to="/" className='btn btn-default w-100  text-decoration-none'>Status</Link>
            </li>
            <li class="nav-item active">
            <Link to="/" className='btn btn-default w-100  text-decoration-none'>Report</Link>
            </li> 
          </ul>
        </nav>
    </div>
  )
}

export default Home
