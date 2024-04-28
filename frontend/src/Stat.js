import React from 'react';
import { Link } from 'react-router-dom';


function Stat() {
  

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
            <Link to="/stat" className='btn btn-default w-100  text-decoration-none'>Status</Link>
            </li>
            <li class="nav-item active">
            <Link to="/report" className='btn btn-default w-100  text-decoration-none'>Report</Link>
            </li> 
          </ul>
        </nav>
        <div class="pt-5">
        <table class="table table-bordered table-info ">
            <thead>
                <tr>
                <th scope="col">Pipe no.</th>
                <th scope="col">Area Code</th>
                <th scope="col">Status</th>
                <th scope="col">Supervisor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >P001</td>
                <td>600012</td>
                <td>Verified</td>
                <td>Ben Dover</td>
                </tr>
                <tr>
                <td >P006</td>
                <td>600002</td>
                <td>Notified</td>
                <td>Charles Sebastian</td>
                </tr>
                <tr>
                <td >P092</td>
                <td>600095</td>
                <td>In Progress</td>
                <td>Ravi Krishnan</td>     
                </tr>
                <tr>
                <td >P045</td>
                <td>600043</td>
                <td>Resolved</td>
                <td>Rishikesh Sathian</td>     
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  );
}

export default Stat;
