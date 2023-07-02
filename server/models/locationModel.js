const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  city: { type: String },
  voivodeship: { type: String },
  countryCode: { type: String },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
