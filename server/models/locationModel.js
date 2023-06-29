const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const voivodeshipSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cities: {
    type: [citySchema],
    required: true,
  },
});

const countrySchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  voivodeships: {
    type: [voivodeshipSchema],
    required: true,
  },
});

const Location = mongoose.model("Location", countrySchema);

module.exports = Location;
