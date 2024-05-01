import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Live() {
  const [flowData, setFlowData] = useState([]);

  useEffect(() => {
    fetchData(); // Initial data fetch when component mounts

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data periodically every 10 minutes
    }, 600000); // 10 minutes in milliseconds

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/flows') // Fetch data from server endpoint
      .then(response => {
        setFlowData(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

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
              <th scope="col">Timestamp</th>
              <th scope="col">Flow1</th>
              <th scope="col">Flow2</th>
              <th scope="col">Difference</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {flowData.map((flow, index) => (
              <tr key={index}>
                <td>{flow.timestamp}</td>
                <td>{flow.flow1}</td>
                <td>{flow.flow2}</td>
                <td>{Math.abs(flow.flow1 - flow.flow2)}</td>
                <td>{flow.status ? 'ON' : 'OFF'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Live;
