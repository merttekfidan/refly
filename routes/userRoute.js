const express = require("express");
const { getAllUsers, createUser } = require("./../controllers/userController");

const {
  signUp,
  login,
  logout,
  isLoggedIn,
} = require("./../controllers/authController");
const router = express.Router();

router.route("/").get(isLoggedIn, getAllUsers).post(signUp);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;
