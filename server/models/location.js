// models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  markerTitle: { type: String, required: true },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
