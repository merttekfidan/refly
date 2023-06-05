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

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    maxAge,
    // Can't be modified or accessed
    httpOnly: true,
    sameSite: "none",
    secure: true,
    //secure: req.secure || req.headers("x-forwarded-proto" === "https"),
  });
  // Remove the password from output
  user.password = undefined;
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

exports.logout = catchAsync(async (req, res, next) => {
  console.log("cookies:", req.cookies.jwt);
  res.clearCookie("jwt", {
    maxAge,
    // Can't be modified or accessed
    httpOnly: true,
    sameSite: "none",
    secure: true,
    //secure: req.secure || req.headers("x-forwarded-proto" === "https"),
  });
  console.log("cookies cleared");
  console.log("cookies:", req.cookies.jwt);
  return res.status(200).json({ status: "success" });
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
  console.log(req.cookies);
  console.log(req.headers.cookie);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return next(new AppError("Token isnt valid", 403));
      } else {
        const user = await User.findById(decodedToken.id);
        req.user = user;
        next();
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
