// Initialize the map
var mymap = L.map("mapid").setView([13.0827, 80.2707], 12); // Chennai coordinates: [13.0827, 80.2707]

// Add a tile layer for Chennai map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Add a marker to the map
var marker = L.marker([13.0827, 80.2707]).addTo(mymap); // Marker at Chennai coordinates

// Add a popup to the marker
marker.bindPopup("<b>Water Leakage Detected!</b>").openPopup();

var leakageMarker = L.marker([13.0796, 80.2787]).addTo(mymap); // Example coordinates for water leakage
leakageMarker.bindPopup("<b>Water Leakage Detected!</b>").openPopup(); // Popup for water leakage
