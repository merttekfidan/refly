const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Offer = require("./../models/offerModel");
const Accessory = require("./../models/items/accessoryModel");
const Car = require("./../models/items/carModel");
const Scooter = require("./../models/items/scooterModel");
const Motorcycle = require("./../models/items/motorcycleModel");

exports.getAllOffers = catchAsync(async (req, res, next) => {
  const allOffers = await Offer.find();
  res.status(200).json({
    status: "success",
    data: allOffers,
  });
});

modelFactory = (category) => {
  switch (category) {
    case "Accessory":
      return Accessory;
    case "Car":
      return Car;
    case "Motorcycle":
      return Motorcycle;
    case "Scooter":
      return Scooter;
    default:
      break;
  }
};

exports.addOffer = catchAsync(async (req, res, next) => {
  const { offer, product_details } = req.body;
  const newProduct = await modelFactory(offer.category).create({
    ...product_details,
  });
  const newOffer = await Offer.create({
    ...offer,
    product: newProduct._id,
    category: offer.category,
  });
  res.status(200).json({
    status: "success",
    data: newOffer,
  });
});

exports.updateOffer = catchAsync(async (req, res, next) => {
  const { offer, product_details } = req.body;
  const offerId = req.params.offerId;
  const updatedOffer = await Offer.findByIdAndUpdate(offerId, {
    ...offer,
  });
  const updatedProduct = await modelFactory(offer.category).findByIdAndUpdate(
    updatedOffer.product._id,
    {
      ...product_details,
    },
    { new: true }
  );
  await updatedOffer.populate("product");
  res.status(200).json({
    status: "success",
    data: updatedOffer,
  });
});
