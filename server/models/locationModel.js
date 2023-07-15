const mongoose = require("mongoose");

const voivodeshipSchema = mongoose.Schema({
  name: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  cities: [String],
});
const Voivodeship = mongoose.model("Voivodeship", voivodeshipSchema);

module.exports = { Voivodeship };
