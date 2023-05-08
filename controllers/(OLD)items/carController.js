const catchAsync = require("./../../utils/catchAsync");
const AppError = require("./../../utils/appError");
const Car = require("./../../models/items/carModel");
const Offer = require("./../../models/offerModel");

exports.addCar = catchAsync(async (req, res, next) => {
  const newOffer = await Offer.create(req.body.offer);
  const newCar = await Car.create({ ...req.body, offer: newOffer._id });
  await Offer.findByIdAndUpdate(newOffer._id, {
    product: newCar._id,
    category: "Car",
  });
  res.status(201).json({
    status: "success",
    data: newCar,
  });
});

exports.updateCar = catchAsync(async (req, res, next) => {
  const { offer, ...car } = req.body;
  const updatedOffer = await Offer.findByIdAndUpdate(req.params.offerId, offer);
  if (!updatedOffer) {
    return next(new AppError("No offer found with this ID", 404));
  }
  const updatedCar = await Car.findOneAndUpdate(
    { offer: req.params.offerId },
    car,
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: updatedCar,
  });
});
