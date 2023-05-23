const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const User = require("./../models/userModel");
const AppError = require("../utils/appError");

const maxAge = process.env.JWT_EXPIRE_DAY * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
  res.status(200).json({
    status: "success",
    data: user,
    token: token,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  if (!user) return next(new AppError("Incorrect username or password"));
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie("jwt");
  res.status(200).json({ status: "success" });
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return next(new AppError("You are not logged in", 403));
      } else {
        console.log(decodedToken);
        return next();
      }
    });
  } else {
    return next(new AppError("You are not logged in", 403));
  }
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return next(new AppError("You are not logged in", 403));
      } else {
        const user = await User.findById(decodedToken.id);
        req.user = user;
        console.log(req.user);
        return next();
      }
    });
  } else {
    return next(new AppError("You are not logged in", 403));
  }
});
