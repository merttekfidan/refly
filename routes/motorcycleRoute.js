const express = require("express");
const {
  addMotorcycle,
  updateMotorcycle,
} = require("./../controllers/items/motorcycleController");

const router = express.Router();

router.route("/").post(addMotorcycle);
router.route("/:offerId").patch(updateMotorcycle);

module.exports = router;
