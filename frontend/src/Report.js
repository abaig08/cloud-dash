import React from 'react'
import { Link } from 'react-router-dom'

function Report() {

  const getDateRangeOneMonthAgo = () => {
    const today = new Date();
    const oneMonthAgo = new Date(); 
  

    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const formattedToday = formatDate(today);
    const formattedOneMonthAgo = formatDate(oneMonthAgo);
  
    return { startDate: formattedOneMonthAgo, endDate: formattedToday };
  };
  
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const dateRange = getDateRangeOneMonthAgo();
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
    <div class="pt-5 d-flex justify-content-center align-items-center">
        <h2 class=""><b>Report</b></h2>
    </div>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{dateRange.startDate} - {dateRange.endDate}</h5>
            <p class="card-text pt-2">Total Pipes:{}</p>
            <p class="card-text">Total Leakages:{}</p>
            <p class="card-text">Total Resolved:{}</p>

            <a href="/home" class="btn btn-primary align-items-center">Download Report</a>
        </div>
    </div>
</div>
  )
}

export default Report
