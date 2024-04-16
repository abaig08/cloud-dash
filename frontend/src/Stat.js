import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';


function Stat() {
  // Define the initial map center and zoom level
  const center = [51.505, -0.09]; // London coordinates
  const zoomLevel = 13; // Initial zoom level

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
            <Link to="/" className='btn btn-default w-100  text-decoration-none'>Report</Link>
            </li> 
          </ul>
        </nav>
        <div class="pt-3">
            <div class="">
            <h2 class="pl-3">Map Display</h2>
            {/* MapContainer is the main container for the map */}
                <MapContainer center={center} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
                    {/* Add a tile layer for map tiles */}
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Add a marker at the center location */}
                    <Marker position={center}>
                    {/* Add a popup to the marker */}
                    <Popup>
                        This is London.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </div>
  );
}

export default Stat;
