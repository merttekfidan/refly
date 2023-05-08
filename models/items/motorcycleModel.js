const mongoose = require("mongoose");
const Offer = require("./../offerModel");

const motorcycleSchema = new mongoose.Schema({
  transmission: {
    type: String,
    enum: ["Manual", "Automatic"],
  },
  fuel_type: {
    type: String,
    enum: ["Benzin", "Electric"],
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
});

const Motorcycle = mongoose.model("Motorcycle", motorcycleSchema);

module.exports = Motorcycle;
