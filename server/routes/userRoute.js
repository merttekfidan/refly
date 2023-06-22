const express = require("express");
const { getAllUsers, createUser } = require("./../controllers/userController");

const {
  signUp,
  login,
  protect,
  restrictTo,
} = require("./../controllers/authController");
const router = express.Router();

router.route("/").get(protect, restrictTo("admin"), getAllUsers).post(signUp);
router.route("/login").post(login);

module.exports = router;
