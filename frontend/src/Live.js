import React from 'react'
import { Link } from 'react-router-dom'


function Live() {
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
        <div class="pt-5">
        <table class="table table-bordered table-dark ">
            <thead>
                <tr>
                <th scope="col">TImestamp</th>
                <th scope="col">Flow1</th>
                <th scope="col">Flow2</th>
                <th scope="col">Difference</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >2024-04-16 12:00</td>
                <td>27</td>
                <td>28</td>
                <td>1</td>
                <td>ON</td>
                </tr>
                <tr>
                <td >2024-04-16 13:00</td>
                <td>29</td>
                <td>27</td>
                <td>2</td>
                <td>ON</td>
                </tr>
                <tr>
                <td >2024-04-16 13:00</td>
                <td>29</td>
                <td>23</td>
                <td>6</td>   
                <td>OFF</td>   
                </tr>
            </tbody>
            </table>
        </div>
    
    </div>
  )
}

export default Live
