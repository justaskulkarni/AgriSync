import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('http://localhost:6100/api/locations');
      const data = await response.json();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker key={index} position={[parseFloat(location.lat), parseFloat(location.lng)]}>
            <Popup>
              {/* Popup content here */}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div>
        <h1>{locations.toString()}</h1>
      </div>
    </div>
  );
};

export default MapComponent;

