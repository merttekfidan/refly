const { Voivodeship } = require("./../models/locationModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getVoivodeships = catchAsync(async (req, res, next) => {
  const voivodeships = await Voivodeship.find();
  if (!voivodeships) {
    return next(new AppError("No Voivodeship found", 404));
  }
  res.status(200).json({
    status: "success",
    data: voivodeships,
  });
});
