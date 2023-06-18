const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AppError = require("./../utils/appError");

const { isEmail } = require("validator");
const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  username: String,
  email: {
    type: String,
    required: [true, "Please enter an email"],
    //Unique is not a validator
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minLenght: [5, "Password must be more than 5 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user", "service"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email }).select("+password");
  if (!user) throw new AppError("Incorrect email", 404);
  const auth = await bcrypt.compare(password, user.password);
  if (!auth) throw new AppError("Incorrect password", 404);
  //to exclude from the App
  user.password = undefined;
  return user;
};
const User = mongoose.model("User", userSchema);

module.exports = User;
