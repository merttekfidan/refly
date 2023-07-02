const Location = require("./../models/locationModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getLocations = catchAsync(async (req, res, next) => {
  const locations = await Location.find();
  if (!locations) {
    return next(new AppError("No location found", 404));
  }
  res.status(200).json({
    status: "success",
    data: locations,
  });
});
