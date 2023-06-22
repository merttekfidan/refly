const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const User = require("./../models/userModel");
const AppError = require("../utils/appError");

const maxAge = process.env.JWT_EXPIRE_DAY * 24 * 60 * 60 * 1000;
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const verifyHeaderToken = catchAsync(async (req) => {
  // 1) Getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return next(new AppError("Invalid token", 403));
      } else {
        console.log(decodedToken);
        const user = await User.findById(decodedToken.id);
        req.user = user;
        return next();
      }
    });
  } else {
    return next(new AppError("You are not logged in", 403));
  }
});

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  // Remove the password from output
  user.password = undefined;
  console.log("token:", token);
  res.status(statusCode).json({
    status: "success",
    token,
    data: user,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  if (!user) return next(new AppError("Incorrect username or password"));
  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log("token;", token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return next(new AppError("Invalid token", 403));
      } else {
        const user = await User.findById(decodedToken.id);
        req.user = user;
        return next();
      }
    });
  } else {
    return next(new AppError("You are not logged in", 403));
  }
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
