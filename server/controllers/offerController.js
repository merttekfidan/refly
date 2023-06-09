const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Offer = require("./../models/offerModel");
const Accessory = require("./../models/items/accessoryModel");
const Car = require("./../models/items/carModel");
const Scooter = require("./../models/items/scooterModel");
const Motorcycle = require("./../models/items/motorcycleModel");

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

exports.getAllOffers = catchAsync(async (req, res, next) => {
  const allOffers = await Offer.find();
  if (!allOffers) {
    return next(new AppError("No offer found", 404));
  }
  res.status(200).json({
    status: "success",
    data: allOffers,
  });
});

exports.getOneOffer = catchAsync(async (req, res, next) => {
  const offer = await Offer.findById(req.params.offerId);
  if (!offer) {
    return next(new AppError("No offer found", 404));
  }
  res.status(200).json({
    status: "success",
    data: offer,
  });
});

exports.addOffer = catchAsync(async (req, res, next) => {
  const { offer, product_details } = req.body;
  const newProduct = await modelFactory(offer.category).create({
    ...product_details,
  });
  const newOffer = await Offer.create({
    ...offer,
    product: newProduct._id,
    category: offer.category,
    userId: req.user._id,
  });
  res.status(200).json({
    status: "success",
    data: newOffer,
  });
});

exports.updateOffer = catchAsync(async (req, res, next) => {
  const { offer, product_details } = req.body;
  const offerId = req.params.offerId;
  let query = { _id: offerId };
  // Checks roles already. Admin has all permissions
  if (!req.user.role.includes("admin")) {
    query = { userId: req.user._id, _id: offerId };
  }
  const updatedOffer = await Offer.findOneAndUpdate(
    query,
    {
      ...offer,
      offer_status: "pending-review",
    },
    {
      new: true,
    }
  );
  console.log(updatedOffer);
  if (!updatedOffer) {
    return next(new AppError("No offer found with this ID", 404));
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
  let query = { _id: offerId };
  // Checks roles already. Admin has all permissions
  if (!req.user.role.includes("admin")) {
    query = { userId: req.user._id, _id: offerId };
  }
  const offer = await Offer.findOne(query);
  if (!offer) {
    return next(new AppError("No offer found with that ID", 404));
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
