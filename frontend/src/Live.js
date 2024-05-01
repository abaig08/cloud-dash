import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Live2() {
  const [flowData, setFlowData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/flows') // Assuming your backend API endpoint
      .then(response => response.json())
      .then(data => {
        setFlowData(data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching flow data:', error);
      });
  }, []);

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

export default Live2;
