const mongoose = require("mongoose");
const User = require("./userModel");
const Accessory = require("./items/accessoryModel");
const Car = require("./items/carModel");
const Motorcycle = require("./items/motorcycleModel");
const Scooter = require("./items/scooterModel");

const offerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Offer must have a title"],
      default: " ",
    },
    price: {
      type: Number,
      required: [true, "Offer must have a title"],
      min: [0, "Price cannot be less than 0"],
      max: [999999, "Price cannot be more than 1.000.000"],
      default: 0,
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    images_url: {
      type: [String],
    },
    description: {
      type: String,
    },
    availability: {
      type: [String],
      enum: [
        "Uber",
        "Uber Eats",
        "Bolt",
        "Bolt Food",
        "Glovo",
        "Pyszne",
        "Wolt",
      ],
    },
    offer_status: {
      type: String,
      enum: ["Pending Review", "Published", "Ended", "Removed"],
      default: "Pending Review",
    },
    offer_type: {
      type: String,
      enum: ["Buy", "Sell", "Rental"],
    },
    offer_end_date: {
      type: Date,
    },
    category: {
      type: String,
      enum: ["Car", "Motorcycle", "Accessory", "Scooter"],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "category",
    },
    //After activating this, don't forget changing default value in offerController
    /*created_by: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },*/
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

offerSchema.pre(/^find/, function (next) {
  this.populate("product");
  next();
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
