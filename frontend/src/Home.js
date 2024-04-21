import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Home() {

  const center = [13.0827, 80.2707]; // London coordinates
  const zoomLevel = 15; // Initial zoom level

  return (
    <div className='bg-primary vh-100 p-3'>
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
            <Link to="/" className='btn btn-default w-100  text-decoration-none'>Report</Link>
            </li> 
          </ul>
        </nav>
        <div class="pt-3">
            <div >
              <div class="d-flex justify-content-center align-items-center">
                <h2 className=""><b>Map Display</b></h2>
              </div>
                <MapContainer center={center} zoom={zoomLevel} style={{ height: '600px', width: '100%' }}>
                    
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Add a marker at the center location */}
                    <Marker position={center}>
                    {/* Add a popup to the marker */}
                    <Popup>
                        This is Chennai.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

    </div>
    
    
  )
}

export default Home
