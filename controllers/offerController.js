const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Offer = require("./../models/offerModel");
const Accessory = require("./../models/items/accessoryModel");
const Car = require("./../models/items/carModel");
const Scooter = require("./../models/items/scooterModel");
const Motorcycle = require("./../models/items/motorcycleModel");

exports.getAllOffers = catchAsync(async (req, res, next) => {
  const allOffers = await Offer.find();
  if (!allOffers) {
    next(new AppError("No offer found with this ID", 404));
  }
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
  const updatedOffer = await Offer.findByIdAndUpdate(
    offerId,
    {
      ...offer,
    },
    {
      new: true,
    }
  );
  if (!updatedOffer) {
    next(new AppError("No offer found with this ID", 404));
  }
  const updatedProduct = await modelFactory(offer.category).findByIdAndUpdate(
    updatedOffer.product._id,
    {
      ...product_details,
    }
  );
  await updatedOffer.populate("product");
  res.status(200).json({
    status: "success",
    data: updatedOffer,
  });
});

exports.deleteOffer = catchAsync(async (req, res, next) => {
  const offerId = req.params.offerId;
  const offer = await Offer.findOne({ _id: offerId });
  if (!offer) {
    next(new AppError("No offer found with that ID", 404));
  }
  const deletedProduct = await modelFactory(offer.category).findOneAndDelete({
    _id: offer.product._id,
  });
  const deletedOffer = await Offer.findByIdAndDelete(offerId);

  res.status(200).json({
    status: "success",
    data: null,
  });
});
