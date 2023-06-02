const mongoose = require("mongoose");
const Offer = require("./../offerModel");
const accessorySchema = new mongoose.Schema({
  accessoryName: String,
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
