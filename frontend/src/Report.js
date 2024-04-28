import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
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
        <Link to="/status" className='btn btn-default w-100  text-decoration-none'>Status</Link>
        </li>
        <li class="nav-item active">
        <Link to="/report" className='btn btn-default w-100  text-decoration-none'>Report</Link>
        </li> 
      </ul>
    </nav>
    <div class="pt-5 d-flex justify-content-center align-items-center">
        <h2 class=""><b>Report</b></h2>
    </div>
    <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
  )
}

export default Report
