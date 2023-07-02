const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: {
    type: String,
  },
  voivodeship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voivodeship",
  },
});

const voivodeshipSchema = mongoose.Schema({
  name: {
    type: String,
  },
  countryCode: {
    type: String,
  },
});

citySchema.pre(/^find/, function (next) {
  this.populate("voivodeship");
  next();
});
const Voivodeship = mongoose.model("Voivodeship", voivodeshipSchema);
const City = mongoose.model("City", citySchema);

module.exports = { Voivodeship, City };
