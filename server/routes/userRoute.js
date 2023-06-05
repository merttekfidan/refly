const express = require("express");
const { getAllUsers, createUser } = require("./../controllers/userController");

const {
  signUp,
  login,
  logout,
  isLoggedIn,
  protect,
} = require("./../controllers/authController");
const router = express.Router();

router.route("/").get(protect, getAllUsers).post(signUp);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
