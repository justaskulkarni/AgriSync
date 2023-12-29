// components/AddLocation.js
import React, { useState } from 'react';

const AddLocation = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    markerTitle: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Send formData to the server endpoint for adding location data
    // (you might use fetch or a library like axios)

    setFormData({
      latitude: '',
      longitude: '',
      markerTitle: '',
    });
  };

  return (
    <div>
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude:
          <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
        </label>
        <br />
        <label>
          Longitude:
          <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
        </label>
        <br />
        <label>
          Marker Title:
          <input type="text" name="markerTitle" value={formData.markerTitle} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddLocation;
