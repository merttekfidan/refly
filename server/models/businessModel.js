const mongoose = require("mongoose");
const User = require("./userModel");
const businessSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Business must have a title"],
  },
  category: {
    type: String,
    enum: ["Car Service", "Bicycle Service", "Uber Partner"],
  },
  contact: {
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  logo_url: {
    type: String,
  },
  images_url: {
    type: [String],
  },
  description: {
    type: String,
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

businessSchema.pre(/^find/, function (next) {
  this.populate("userId");
  next();
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
