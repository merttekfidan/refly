const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Business = require("./../models/businessModel");

exports.getAllBusinesses = catchAsync(async (req, res, next) => {
  const allBusinesses = await Business.find();
  res.status(200).json({
    status: "success",
    data: allBusinesses,
  });
});
exports.getOneBusiness = catchAsync(async (req, res, next) => {
  const business = await Business.findById(req.params.businessId);
  if (!business) {
    return next(new AppError("No business found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: business,
  });
});
exports.addBusiness = catchAsync(async (req, res, next) => {
  const newBusiness = await Business.create(req.body);
  res.status(200).json({
    status: "success",
    data: newBusiness,
  });
});
exports.updateBusiness = catchAsync(async (req, res, next) => {
  const businessId = req.params.businessId;
  const updatedBusiness = await Business.findByIdAndUpdate(
    businessId,
    req.body,
    { new: true }
  );
  if (!updatedBusiness) {
    return next(new AppError("No business found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: updatedBusiness,
  });
});
exports.deleteBusiness = catchAsync(async (req, res, next) => {
  const businessId = req.params.businessId;
  const deletedBusiness = await Business.findByIdAndDelete(businessId);
  if (!deletedBusiness) {
    return next(new AppError("No business found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: null,
  });
});
