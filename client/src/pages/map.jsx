// Import necessary libraries
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [20.59, 78.96];
// Sample data with latitude and longitude for multiple points
const points = [
  { id: 1, lat: 19.333, lon: 73.25, name: 'Thane' },
  { id: 2, lat: 17.112, lon: 74.7699, name: 'Sangli' },
  // Add more points as needed
];
const transparentIcon = new L.Icon({
  iconUrl: 'https://www.pngfind.com/pngs/m/114-1147878_location-poi-pin-marker-position-red-map-google.png', // Transparent pixel
  iconSize: [60, 60], // Set the size to 1x1 pixel
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});

// Component definition
function StaticMap() {
  return (
    <MapContainer center={position} zoom={4} style={{ height: '700px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map(point => (
        <Marker icon={transparentIcon} key={point.id} position={[point.lat, point.lon]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

// Export the component
export default StaticMap;
