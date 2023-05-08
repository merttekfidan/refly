const catchAsync = require("./../../utils/catchAsync");
const AppError = require("./../../utils/appError");
const Accessory = require("./../../models/items/accessoryModel");
const Offer = require("./../../models/offerModel");
exports.addAccessory = catchAsync(async (req, res, next) => {
  const { offer, ...accessory } = req.body;
  const newOffer = await Offer.create(offer);
  const newAccessory = await Accessory.create({
    ...accessory,
    offer: newOffer._id,
  });
  await Offer.findByIdAndUpdate(newOffer._id, {
    product: newAccessory._id,
    category: "Accessory",
  });
  res.status(201).json({
    status: "success",
    data: newAccessory,
  });
});

exports.updateAccessory = catchAsync(async (req, res, next) => {
  const { offer, ...accessory } = req.body;
  const updatedOffer = await Offer.findByIdAndUpdate(req.params.offerId, offer);
  if (!updatedOffer) {
    return next(new AppError("No document found with that ID", 404));
  }

  const updatedAccessory = await Accessory.findOneAndUpdate(
    { offer: req.params.offerId },
    accessory,
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: updatedAccessory,
  });
});
