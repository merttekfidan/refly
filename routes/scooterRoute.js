const express = require("express");
const {
  addScooter,
  updateScooter,
} = require("./../controllers/items/scooterController");

const router = express.Router();

router.route("/").post(addScooter);
router.route("/:offerId").patch(updateScooter);

module.exports = router;
