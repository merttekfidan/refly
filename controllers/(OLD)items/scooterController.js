const catchAsync = require("./../../utils/catchAsync");
const AppError = require("./../../utils/appError");
const Scooter = require("./../../models/items/scooterModel");
const Offer = require("./../../models/offerModel");

exports.addScooter = catchAsync(async (req, res) => {
  const { offer, ...scooter } = req.body;
  const newOffer = await Offer.create(offer);
  const newScooter = await Scooter.create({
    ...scooter,
    offer: newOffer._id,
  });
  await Offer.findByIdAndUpdate(newOffer._id, {
    product: newScooter._id,
    category: "Scooter",
  });

  res.status(201).json({
    status: "success",
    data: newScooter,
  });
});

exports.updateScooter = catchAsync(async (req, res, next) => {
  const { offer, ...scooter } = req.body;
  const updatedOffer = await Offer.findByIdAndUpdate(req.params.offerId, offer);
  if (!updatedOffer) {
    next(new AppError("No Offer found with this ID"));
  }
  const updatedScooter = await Scooter.findOneAndUpdate(
    { offer: req.params.offerId },
    scooter,
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: updatedScooter,
  });
});
