import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/report'); // Adjust URL as per your server endpoint
        setReportData(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, []);

  const handleDownloadReport = () => {
    if (reportData) {
      const { startDate, endDate } = dateRange;
      const reportContent = `Report Period: ${dateRange.startDate} - ${dateRange.endDate}\nTotal Pipes: ${reportData.tot_pipes}\nTotal Leakages: ${reportData.tot_leaks}`;

      // Create a Blob containing the report content
      const blob = new Blob([reportContent], { type: 'text/plain' });

      // Create an anchor element and trigger download
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = `report_${startDate}_${endDate}.txt`;
      anchor.click();

      // Clean up
      URL.revokeObjectURL(anchor.href);
    }
  };

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
            {reportData ? (
            <>
              <h5 className="card-title">Report Summary</h5>
              <p className="card-text pt-2">Total Pipes: {reportData.tot_pipes}</p>
              <p className="card-text">Total Leaks: {reportData.tot_leaks}</p>
            <button onClick={handleDownloadReport} className="btn btn-primary align-items-center">Download Report</button>
            </>
          ) : (
            <p>Loading report data...</p>
          )}
        </div>
    </div>
</div>
  )
}

export default Report
