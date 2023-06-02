const mongoose = require("mongoose");
const Offer = require("./../offerModel");

const scooterSchema = new mongoose.Schema({});

const Scooter = mongoose.model("Scooter", scooterSchema);

module.exports = Scooter;
