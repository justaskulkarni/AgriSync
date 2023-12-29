// Import necessary libraries
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data with latitude and longitude for multiple points
const points = [
  { id: 1, lat: 37.7749, lon: -122.4194, name: 'San Francisco' },
  { id: 2, lat: 40.7128, lon: -74.0060, name: 'New York City' },
  // Add more points as needed
];

// Component definition
function StaticMap() {
  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map(point => (
        <Marker key={point.id} position={[point.lat, point.lon]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

// Export the component
export default StaticMap;
