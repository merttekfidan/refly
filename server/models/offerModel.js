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
        "uber",
        "uber-eats",
        "bolt",
        "bolt-food",
        "glovo",
        "pyszne",
        "bolt",
      ],
    },
    offer_status: {
      type: String,
      enum: ["pending-review", "published", "ended", "removed"],
      default: "pending-review",
    },
    offer_type: {
      type: String,
      enum: ["buy", "sell", "rental"],
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //After activating this, don't forget changing default value in offerController
    /*created_by: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },*/
    isDeleted: { type: Boolean, defaults: false },
  },

  {
    timestamps: true,
  }
);

offerSchema.pre(/^find/, function (next) {
  this.populate("product");
  this.populate("userId");
  next();
});

offerSchema.pre("save", async function (next) {
  await this.populate("product");
  next();
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
