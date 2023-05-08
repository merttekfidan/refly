const catchAsync = require("./../../utils/catchAsync");
const AppError = require("./../../utils/appError");
const Motorcycle = require("./../../models/items/motorcycleModel");
const Offer = require("./../../models//offerModel");
exports.addMotorcycle = catchAsync(async (req, res, next) => {
  const { offer, ...motorcycle } = req.body;
  const newOffer = await Offer.create(offer);
  const newMotorcycle = await Motorcycle.create({
    ...motorcycle,
    offer: newOffer._id,
  });
  await Offer.findByIdAndUpdate(newOffer._id, {
    product: newMotorcycle._id,
    category: "Motorcycle",
  });
  res.status(201).json({
    status: "success",
    data: newMotorcycle,
  });
});

exports.updateMotorcycle = catchAsync(async (req, res, next) => {
  const { offer, ...motorcycle } = req.body;
  const updatedOffer = await Offer.findByIdAndUpdate(req.params.offerId, offer);
  if (!updatedOffer) {
    return next(new AppError("No offer found with this ID", 404));
  }
  const updatedMotorcycle = await Motorcycle.findOneAndUpdate(
    { offer: req.params.offerId },
    offer,
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    message: updatedMotorcycle,
  });
});
