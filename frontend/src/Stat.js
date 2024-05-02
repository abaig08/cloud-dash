import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Stat() {
  const [pipeStats, setPipeStats] = useState([]);

  useEffect(() => {
    // Function to fetch pipe statistics from the server
    const fetchPipeStats = async () => {
      try {
        const response = await axios.get('http://localhost:8081/stats'); // Adjust URL as per your server endpoint
        setPipeStats(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching pipe statistics:', error);
      }
    };

    // Fetch pipe statistics when the component mounts
    fetchPipeStats();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='bg-primary vh-100 p-3'>
      <nav className="navbar navbar-expand-sm bg-light navbar-light rounded-2">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/home" className='btn btn-default w-100 text-decoration-none'>Map</Link>
          </li>
          <li className="nav-item active">
            <Link to="/live" className='btn btn-default w-100 text-decoration-none'>Live data</Link>
          </li>
          <li className="nav-item active">
            <Link to="/stat" className='btn btn-default w-100 text-decoration-none'>Status</Link>
          </li>
          <li className="nav-item active">
            <Link to="/report" className='btn btn-default w-100 text-decoration-none'>Report</Link>
          </li> 
        </ul>
      </nav>
      <div className="pt-5">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Pipe No.</th>
              <th scope="col">Area Code</th>
              <th scope="col">Status</th>
              <th scope="col">Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {pipeStats.map((pipe, index) => (
              <tr key={index}>
                <td>{pipe.pipe_no}</td>
                <td>{pipe.area_code}</td>
                <td>{pipe.status}</td>
                <td>{pipe.supervisor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stat;
