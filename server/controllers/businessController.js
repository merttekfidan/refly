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

exports.getMyBusinesses = catchAsync(async (req, res, next) => {
  const myBusinesses = await Business.find({ userId: req.user._id });
  res.status(200).json({
    status: "success",
    data: myBusinesses,
  });
});

exports.addBusiness = catchAsync(async (req, res, next) => {
  console.log("user:", req.user);
  const newBusiness = await Business.create({
    ...req.body,
    userId: req.user._id,
  });
  res.status(200).json({
    status: "success",
    data: newBusiness,
  });
});
exports.updateBusiness = catchAsync(async (req, res, next) => {
  const businessId = req.params.businessId;
  let query = { _id: businessId };
  // Checks roles already. Admin has all permissions
  if (!req.user.role.includes("admin")) {
    query = { userId: req.user._id, _id: businessId };
  }

  const updatedBusiness = await Business.findOneAndUpdate(query, req.body, {
    new: true,
  });
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
  let query = { _id: businessId };
  // Checks roles already. Admin has all permissions
  if (!req.user.role.includes("admin")) {
    query = { userId: req.user._id, _id: businessId };
  }

  const deletedBusiness = await Business.findOneAndDelete(query);
  if (!deletedBusiness) {
    return next(new AppError("No business found with this ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: null,
  });
});
