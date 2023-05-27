const mongoose = require("mongoose");
const Offer = require("./../offerModel");
const carSchema = mongoose.Schema({
  brand: {
    type: String,
    enum: ["Skoda", "Renault", "Fiat"],
    required: [true, "Car must have at least one Brand"],
  },
  model: {
    type: String,
    required: [true, "Car must have at least one Model"],
  },
  year: {
    type: Number,
    min: [1990, "Car year cannot be less than 1990"],
    ///// FIX max (current year + 1)
    max: [2023, "Car year cannot be more than 2023"],
  },
  mileage: {
    type: Number,
    min: [0, "Car cannot have less than 0 km"],
    max: [500000, "Car cannot have more than 500.000 km"],
  },
  transmission: {
    type: String,
    enum: ["manual", "automatic", "tiptronic"],
  },
  fuel_type: {
    type: String,
    enum: ["benzin", "diesel", "lpg", "electric", "hybrid"],
  },
  engine_size: {
    type: Number,
    min: [0.6, "Engine size cannot be less than 0.6"],
    max: [5, "Engine size cannot be more than 5"],
  },
  taxi_licence: {
    type: Boolean,
    default: false,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
