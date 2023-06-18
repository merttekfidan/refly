const express = require("express");
const { getAllUsers, createUser } = require("./../controllers/userController");

const {
  signUp,
  login,
  logout,
  isLoggedIn,
  protect,
  restrictTo,
} = require("./../controllers/authController");
const router = express.Router();

router.route("/").get(protect, restrictTo("admin"), getAllUsers).post(signUp);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
