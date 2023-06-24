const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const Offer = require("./../models/offerModel");

exports.getRecentOffers = catchAsync(async (req, res, next) => {
  const recentOffers = await Offer.find().sort({ createdAt: -1 }).limit(20);
  if (!recentOffers) {
    return next(new AppError("No Recent Offer Found", 404));
  }
  res.status(200).json({
    status: "success",
    data: recentOffers,
  });
});
